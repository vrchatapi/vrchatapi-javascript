import type { Client, RequestResult } from "@hey-api/client-fetch";
import { createClient, createConfig } from "@hey-api/client-fetch";
import { Cacheable, CacheableHooks } from "cacheable";
import type { KeyvStoreAdapter } from "keyv";
import type Keyv from "keyv";
import { TOTP } from "totp-generator";

import type { Cookie } from "./cookie";
import {
	isCookieValid,
	parseSetCookie,
	serializeCookies,
	toCookiesObject
} from "./cookie";
import { fail, VRChatError } from "./error";
import type { Options } from "./generated/sdk.gen";
import { VRChatInternal } from "./generated/sdk.gen";
import type {
	CurrentUser,
	GetCurrentUserData,
	GetCurrentUserErrors,
	GetCurrentUserResponses
} from "./generated/types.gen";
import { initLogging, log, logCache } from "./log";
import type { Lazy } from "./utilities";
import { collapse } from "./utilities";
import type { VRChatWebsocketOptions } from "./websocket";
import { VRChatWebsocket } from "./websocket";

export interface VRChatOptions extends Omit<NonNullable<Parameters<typeof createConfig>[0]>, "body" | "bodySerializer" | "credentials" | "global" | "method" | "mode" | "parseAs" | "querySerializer"> {
	/**
	 * When using the VRChat API, you must provide an application name, version, and contact information.
	 * This is used to identify your application to VRChat, and to provide support if needed.
	 */
	application: {
		/**
		 * The name of your application.
		 */
		name: string;
		/**
		 * The version of your application.
		 *
		 * [Semantic versioning](https://semver.org/) is recommended, e.g. `1.0.0`, but commit hashes or other identifiers are also acceptable.
		 */
		version: string;
		/**
		 * An email, or a URL to a support page.
		 */
		contact: string;
	};
	authentication?: {
		/**
		 * The credentials to use for the VRChat API.
		 *
		 * If not provided, the user must be logged in using the `login` method.
		 * If provided, this will be used to authenticate the user automatically.
		 */
		credentials?: Lazy<LoginCredentials>;
		/**
		 * If set to `true`, the client will attempt to authenticate immediately after being created.
		 * If set to `false`, the client will only re-authenticate on request failure (e.g. 401 Unauthorized).
		 * @default true
		 */
		optimistic?: boolean;
	};
	pipeline?: VRChatWebsocketOptions;
	/**
	 * Configures persistent caching using [Keyv](https://npm.im/keyv).
	 *
	 * To use this, you must install `keyv` alongside this library.
	 * This option allows you to either pass a pre-configured `Keyv` instance,
	 * or the `Keyv` class and a store adapter to be instantiated by the client.
	 *
	 * @example
	 * // Pass the Keyv class and a store adapter
	 * import Keyv from "keyv";
	 * const vrchat = new VRChat({
	 *   keyv: {
	 *     keyvClass: Keyv,
	 *     store: new Map(), // or any other Keyv store adapter
	 *   }
	 * });
	 *
	 * @example
	 * // Pass a pre-configured Keyv instance
	 * import Keyv from "keyv";
	 * const keyv = new Keyv({ store: new Map() });
	 * const vrchat = new VRChat({
	 *   keyv: {
	 *     keyvClass: Keyv,
	 *     store: keyv,
	 *   }
	 * });
	 */
	keyv?: {
		/** The `Keyv` class constructor. */
		keyvClass: new (...args: any[]) => Keyv<unknown>;
		/** A `Keyv` instance, or a Keyv-compatible store adapter. */
		store: Keyv<unknown> | KeyvStoreAdapter | Map<unknown, unknown>;
	};
	/**
	 * If set to `true`, this client will log debug information to the console.
	 * This is useful for debugging, but **will expose sensitive information**.
	 * @default false
	 */
	verbose?: boolean;
}

export const TwoFactorMethods = ["totp", "otp", "emailOtp"] as const;
export type TwoFactorMethods = (typeof TwoFactorMethods)[number];

export interface LoginCredentials {
	/**
	 * The username or email of the VRChat account.
	 */
	username: string;
	/**
	 * The password of the VRChat account.
	 */
	password: string;
	/**
	 * The secret key for two-factor authentication, useful for service accounts & automated workflows.
	 * If this is a user-initiated login, don't use this.
	 *
	 * Equivalent to ``twoFactorCode: TOTP.generate(totpSecret).otp``.
	 */
	totpSecret?: string;
	/**
	 * If provided, this function will be called to generate the two-factor authentication code.
	 * It overrides ``totpSecret`` if both are provided, ``totpSecret`` will be ignored.
	 *
	 * @returns The two-factor authentication code.
	 */
	twoFactorCode?: Lazy<string>;
}

type LoginOptions<ThrowOnError extends boolean> = LoginCredentials & Omit<Options<GetCurrentUserData, ThrowOnError>, "credentials" | "responseTransformer">;
type CurrentUserResult<ThrowOnError extends boolean> = Awaited<RequestResult<GetCurrentUserResponses, GetCurrentUserErrors, ThrowOnError>>;

export const baseUrl = "https://api.vrchat.cloud/api/1/";

const authenticateSymbol = Symbol("authenticate");
/**
 * @internal
 */
export const requestIdSymbol = Symbol("requestId");

function requiresTwoFactorAuth(data?: unknown): data is { requiresTwoFactorAuth: Array<TwoFactorMethods> } {
	return !!data && typeof data === "object" && "requiresTwoFactorAuth" in data && Array.isArray(data.requiresTwoFactorAuth);
}

function isUser(data?: unknown): data is { id: string } {
	return !!data && typeof data === "object" && "id" in data && typeof data.id === "string";
}

export class VRChat extends VRChatInternal {
	private cache: Cacheable;

	private credentials?: Lazy<LoginCredentials>;
	private authenticatePromise?: Promise<CurrentUserResult<false>>;
	private lastCurrentUser?: CurrentUser;
	private userAgent: string;

	public readonly client: Client;
	public readonly pipeline: VRChatWebsocket;

	public constructor(public readonly options: VRChatOptions) {
		const {
			application,
			authentication,
			keyv,
			verbose,
			...rest
		} = options;

		if (!application
			|| !application.name
			|| !application.version
			|| !application.contact
			// Catch common mistakes, like forgetting to change the example.
			|| application.contact.includes("@example.com")
			|| application.contact.includes("\n")
		) throw VRChatError.from("You must provide an application name, version, and contact information.");

		const headers = new Headers(rest.headers as HeadersInit);

		const userAgent = `${application.name}/${application.version} (${application.contact}), VRChat.js/${process.env.VERSION} (https://vrchat.community/discord)`;
		headers.set("user-agent", userAgent);

		const client = createClient(createConfig({
			baseUrl,
			...rest,
			headers
		}));

		super({ client });
		this.client = client;
		this.userAgent = userAgent;

		if (verbose) {
			log.enabled = true;
			logCache.enabled = true;
		}

		this.cache = new Cacheable({
			nonBlocking: true,
			secondary: (() => {
				if (!keyv) return undefined;
				const { keyvClass, store } = keyv;
				if (store instanceof keyvClass) {
					return store;
				}
				return new keyvClass({ store });
			})()
		});

		const { interceptors } = client;

		let requestId = 0;
		interceptors.request.use(async (request, _options) => {
			const options = _options as Options;
			const { meta = {} } = options as { meta: Record<PropertyKey, unknown> };

			meta[requestIdSymbol] = requestId++;
			options.meta = meta;

			return request;
		});

		if (log.enabled) initLogging(this);

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
			const requestId = meta[requestIdSymbol];

			// If the session is being refreshed, wait for the authentication to complete.
			if (this.authenticatePromise && !meta[authenticateSymbol]) {
				log("%o Waiting for authentication to complete...", requestId);
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
					return new Response(
						JSON.stringify(authenticationResult.error.toResponseError()),
						authenticationResult.response
					);

				const { data, error: b, response: newResponse } = (await this._client.request(options as any));
				return new Response(
					JSON.stringify(data || (b as VRChatError)?.toResponseError()),
					newResponse
				);
			}

			return response;
		});

		interceptors.error.use((reason, response, request) => VRChatError.from(reason, request, response));

		if (authentication) {
			const { credentials, optimistic = true } = authentication;
			this.setCredentials(credentials);

			// If the optimistic option is set, authenticate immediately.
			if (optimistic) void this.authenticate({ partial: true });
		}

		this.pipeline = new VRChatWebsocket({ headers });
	}

	public setCredentials(credentials?: Lazy<LoginCredentials>): void {
		this.credentials = credentials;
	}

	private async authenticate({ partial = false }: { partial?: boolean } = {}): Promise<CurrentUserResult<false>> {
		const { authenticatePromise, credentials: _credentials } = this;
		if (authenticatePromise) return authenticatePromise;

		log("%s(%O)", this.authenticate.name, { partial });

		const { promise, resolve: _resolve } = Promise.withResolvers<CurrentUserResult<false>>();

		this.authenticatePromise = promise;

		const resolve = (value: CurrentUserResult<false>): CurrentUserResult<false> => {
			_resolve(value);
			this.authenticatePromise = undefined;

			return value;
		};

		const cookies = toCookiesObject(await this.getCookies());
		if (!cookies.auth) partial = false;

		if (cookies.auth) this.pipeline.authenticate(cookies.auth.value);

		let value: CurrentUserResult<false> | undefined;

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

			if (value.error) return resolve(value);
			if (isUser(value?.data)) return resolve(value);
		}

		value = await this.login({ ...credentials, meta: { [authenticateSymbol]: true } });
		if (isUser(value.data)) return resolve(value);

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
	): Promise<CurrentUserResult<ThrowOnError>> {
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
		value: CurrentUserResult<ThrowOnError>,
		{
			totpSecret,
			twoFactorCode
		}: Pick<LoginCredentials, "totpSecret" | "twoFactorCode">,
		options: Omit<LoginOptions<ThrowOnError>, keyof LoginCredentials>
	): Promise<CurrentUserResult<ThrowOnError>> {
		log("%s(%O)", this.loginWith2FA.name, { value, totpSecret, twoFactorCode });

		if (!requiresTwoFactorAuth(value.data))
			return value;

		const { throwOnError } = options;
		const { data: { requiresTwoFactorAuth: twoFactorMethods }, request, response } = value;

		if (twoFactorMethods.includes("totp") && totpSecret && !twoFactorCode)
			twoFactorCode = TOTP.generate(totpSecret).otp;

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
