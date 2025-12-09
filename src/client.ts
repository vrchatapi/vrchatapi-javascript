import { Cacheable, CacheableHooks } from "cacheable";
import Keyv from "keyv";
import { TOTP } from "totp-generator";

import { getUserAgent, isApplication } from "./application";
import { fail, VRChatError } from "./error";
import { createClient, createConfig } from "./generated/client";
import type { Client } from "./generated/client";
import type { Options } from "./generated/sdk.gen";
import { VRChatInternal } from "./generated/sdk.gen";
import type { Cookie } from "./lib/cookie";
import {
	isCookieValid,
	parseSetCookie,
	serializeCookies,
	toCookiesObject
} from "./lib/cookie";
import { isUser, requiresTwoFactorAuth } from "./lib/guards";
import type { Lazy } from "./lib/lazy";
import { collapse } from "./lib/lazy";
import { log } from "./lib/log";
import { authenticateSymbol } from "./lib/symbols";
import type { LoginCredentials, LoginOptions, LoginResult, VRChatOptions } from "./types";
import { VRChatWebsocket } from "./websocket";

export const logCache = log.extend("cache");
export const logHttp = log.extend("http");

export class VRChat extends VRChatInternal {
	private cache: Cacheable;

	private credentials?: Lazy<LoginCredentials>;
	private authenticatePromise?: Promise<LoginResult>;

	public readonly client: Client;
	public readonly pipeline: VRChatWebsocket;

	public constructor(public readonly options: VRChatOptions) {
		const {
			application,
			authentication,
			keyv,
			verbose,
			pipeline: websocketOptions,
			...clientOptions
		} = options;

		if (!isApplication(application))
			throw VRChatError.from("You must provide an application name, version, and contact information.");

		const headers = new Headers(clientOptions.headers as HeadersInit);
		headers.set("user-agent", getUserAgent(application));

		const client = createClient(createConfig({
			...clientOptions,
			headers
		}));

		super({ client });
		this.client = client;

		if (verbose) {
			log.enabled = true;
			logCache.enabled = true;
		}

		this.cache = new Cacheable({
			nonBlocking: true,
			secondary:
				keyv
					? keyv instanceof Keyv
						? keyv
						: new Keyv({
							store: keyv
						})
					: undefined
		});

		process.on("beforeExit", () => this.cache.disconnect());

		const { interceptors } = client;

		if (log.enabled) {
			interceptors.request.use(async (request, options) => {
				const clone = request.clone();

				logHttp(
					"%s %s %O",
					request.method,
					request.url.slice((options.baseUrl as string).length),
					await clone.json().catch(() => clone.text())
				);

				return request;
			});

			interceptors.response.use(async (response, request, options) => {
				const clone = response.clone();

				logHttp(
					"%s %s %o %s %O",
					request.method,
					request.url.slice((options.baseUrl as string).length),
					clone.status,
					clone.statusText,
					await clone.json().catch(() => clone.text())
				);

				return response;
			});
		}

		if (logCache.enabled) {
			this.cache.onHooks(
				Object
					.values(CacheableHooks)
					.map((event) => ({
						event,
						handler: (data) => logCache(`%s %O`, event.toLowerCase(), data)
					}))
			);
		}

		interceptors.request.use(async (request, options) => {
			const { meta = {} } = options as Options as { meta: Record<PropertyKey, unknown> };

			// If the session is being refreshed, wait for the authentication to complete.
			if (this.authenticatePromise && !meta[authenticateSymbol]) {
				log("%Waiting for authentication to complete...");
				await this.authenticatePromise.catch(() => { });
			}

			if (request.credentials !== "omit") {
				const cookies = await this.getCookies();
				if (!cookies.length) return request;

				request.headers.set("cookie", serializeCookies(cookies));
			}

			return request;
		});

		interceptors.response.use(async (response, request, options) => {
			const { meta } = options as Options as { meta: Record<PropertyKey, unknown> };

			await this.saveCookies(response.headers);

			if (response.status === 401 && !meta[authenticateSymbol]) {
				const error = VRChatError.from(await response.clone().json());
				const partial = error.message.toLowerCase() === "requires two-factor authentication";

				const authenticationResult = await this.authenticate({ partial });
				if (!authenticationResult.data)
					return Response.json(
						authenticationResult.error.toResponseContent(),
						authenticationResult.response
					);

				const { data, error: newError, response: newResponse } = (await this.client.request(options as any));
				return Response.json(
					data || (newError as VRChatError)?.toResponseContent(),
					newResponse
				);
			}

			return response;
		});

		interceptors.error.use((reason, response, request) => VRChatError.from(reason, { request, response }));

		if (authentication) {
			const { credentials, optimistic = true } = authentication;
			this.setCredentials(credentials);

			// If the optimistic option is set, authenticate immediately.
			if (optimistic) void this.authenticate({ partial: true });
		}

		this.pipeline = new VRChatWebsocket({ ...websocketOptions, headers });
	}

	public setCredentials(credentials?: Lazy<LoginCredentials>): void {
		this.credentials = credentials;
	}

	private async authenticate({ partial = false }: { partial?: boolean } = {}): Promise<LoginResult> {
		const { authenticatePromise, credentials: _credentials } = this;
		if (authenticatePromise) return authenticatePromise;

		log("%s(%O)", this.authenticate.name, { partial });

		const { promise, resolve: _resolve } = Promise.withResolvers<LoginResult>();

		this.authenticatePromise = promise;

		const resolve = (value: LoginResult): LoginResult => {
			_resolve(value);
			this.authenticatePromise = undefined;

			return value;
		};

		const cookies = toCookiesObject(await this.getCookies());
		if (!cookies.auth) partial = false;

		if (cookies.auth) this.pipeline?.authenticate(cookies.auth.value);

		let value: LoginResult | undefined;

		if (partial) {
			value = await this.getCurrentUser({ meta: { [authenticateSymbol]: true }, responseTransformer: undefined });
			if (isUser(value?.data)) {
				return resolve(value);
			}
		}

		const credentials = await collapse(_credentials);
		// @ts-expect-error: todo.
		if (!credentials) return resolve(fail({ message: "Missing Credentials" }));

		log("%O", credentials);

		if (value && requiresTwoFactorAuth(value.data)) {
			value = await this.loginWith2FA(value, credentials, { meta: { [authenticateSymbol]: true } });

			if (value?.error) return resolve(value);
			if (isUser(value?.data)) return resolve(value);
		}

		value = await this.login({ ...credentials, meta: { [authenticateSymbol]: true } });
		if (isUser(value?.data)) return resolve(value);

		return resolve(value);
	}

	/**
	 * Logs in to the VRChat API using the provided credentials, and returns the current user.
	 * This method handles two-factor authentication if required using the provided `twoFactorCode` function or `totpSecret`.
	 *
	 * @param options - The login options, including username, password, and optional two-factor authentication details.
	 * @returns A promise that resolves to the current user data, or an error if the login fails.
	 */
	public async login<ThrowOnError extends boolean = false>(
		options: LoginOptions<ThrowOnError>
	): Promise<LoginResult<ThrowOnError>> {
		const { username, password, totpSecret, twoFactorCode, ...rest } = options;
		log("%s(%O)", this.login.name, { username, password, totpSecret, twoFactorCode, ...rest });

		let value = await this.getCurrentUser({
			...rest,
			credentials: "omit",
			responseTransformer: undefined,
			headers: {
				authorization: `Basic ${btoa(`${encodeURIComponent(username)}:${encodeURIComponent(password)}`)}`
			}
		});

		if (!value.data) return value;

		if (requiresTwoFactorAuth(value.data))
			value = await this.loginWith2FA(value, { totpSecret, twoFactorCode }, options);

		return value;
	}

	private async loginWith2FA<ThrowOnError extends boolean = false>(
		value: LoginResult<ThrowOnError>,
		{
			totpSecret,
			twoFactorCode
		}: Pick<LoginCredentials, "totpSecret" | "twoFactorCode">,
		options: Omit<LoginOptions<ThrowOnError>, keyof LoginCredentials>
	): Promise<LoginResult<ThrowOnError>> {
		log("%s(%O)", this.loginWith2FA.name, { value, totpSecret, twoFactorCode });

		if (!requiresTwoFactorAuth(value.data))
			return value;

		const { throwOnError } = options;
		const { data: { requiresTwoFactorAuth: twoFactorMethods }, request, response } = value;

		if (twoFactorMethods.includes("totp") && totpSecret && !twoFactorCode)
			twoFactorCode = (await TOTP.generate(totpSecret)).otp;

		const code = await collapse(twoFactorCode) || "";

		const factors = await Promise.all([
			twoFactorMethods.includes("totp") ? this.verify2Fa.bind(this) : undefined,
			twoFactorMethods.includes("emailOtp") ? this.verify2FaEmailCode.bind(this) : undefined,
			twoFactorMethods.includes("otp") ? this.verifyRecoveryCode.bind(this) : undefined
		].filter(Boolean).map((function_) => function_?.({
			...options,
			throwOnError: false,
			body: {
				code
			}
		})));

		if (factors.length === 0)
			// @ts-expect-error: todo.
			return fail({
				throwOnError,
				message: "Couldn't verify two-factor authentication, no valid methods found",
				response,
				request
			});

		// If all factors failed, return the first error.
		if (factors.every((value) => !value?.data?.verified)) {
			const factor = factors.find((factor) => factor?.error)!;

			if (throwOnError) throw factor.error;
			// @ts-expect-error: todo.
			return factor;
		}

		// @ts-expect-error: todo.
		return this.getCurrentUser(options);
	}

	/**
	 * Alias for `vrchat.pipeline.on(...)`.
	 */
	public get on(): VRChatWebsocket["on"] {
		return this.pipeline.on.bind(this.pipeline);
	}

	private async getCookies(): Promise<Array<Cookie>> {
		const allCookies = await this.cache.get<Array<Cookie>>("cookies");
		if (!allCookies) return [];

		const cookies = allCookies.filter(isCookieValid);

		return cookies;
	}

	private async saveCookies(headers: Headers): Promise<void> {
		const newCookies = headers.getSetCookie().map(parseSetCookie);
		if (!newCookies.length) return;

		const cookies = Object.values(
			Object
				.fromEntries([
					// A race-condition may occur here, but it is unlikely to cause issues.
					// If it does, some cookies may be lost, but the most recent ones will be saved.
					...(await this.getCookies()),
					...newCookies
				]
					.filter(isCookieValid)
					.map((cookie) => [cookie.name, cookie] as const))
		);

		await this.cache.set("cookies", cookies);
	}
}
