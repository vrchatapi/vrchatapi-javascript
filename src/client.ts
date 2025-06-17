import type { RequestResult } from "@hey-api/client-fetch";
import { createClient, createConfig } from "@hey-api/client-fetch";
import { Cacheable, CacheableHooks } from "cacheable";
import type { KeyvStoreAdapter } from "keyv";
import Keyv from "keyv";
import { TOTP } from "totp-generator";

import type { Cookie } from "./cookie";
import { parseSetCookie, serializeCookies } from "./cookie";
import { fail, VRChatError } from "./error";
import type { Options } from "./generated/sdk.gen";
import { _VRChat } from "./generated/sdk.gen";
import type { GetCurrentUserData, GetCurrentUserErrors, GetCurrentUserResponses } from "./generated/types.gen";
import { log, logCache } from "./log";

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
	/**
	 * A [Keyv-compatible adapter](https://npm.im/keyv#official-storage-adapters) for caching & persistent sessions.
	 */
	keyv?: Keyv<unknown> | KeyvStoreAdapter | Map<unknown, unknown>;
}

export const TwoFactorMethods = ["totp", "otp"] as const;
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
	 * The secret key for two-factor authentication.
	 * Equivalent to ``twoFactorCode: () => TOTP.generate(totpSecret).otp``.
	 */
	totpSecret?: string;
	/**
	 * If provided, this function will be called to generate the two-factor authentication code. It overrides ``totpSecret`` if both are provided, ``totpSecret`` will be ignored.
	 * @returns The two-factor authentication code.
	 */
	twoFactorCode?: () => Promise<string> | string;
}

type LoginOptions<ThrowOnError extends boolean> = LoginCredentials & Omit<Options<GetCurrentUserData, ThrowOnError>, "credentials" | "responseTransformer">;

export const baseUrl = "https://api.vrchat.cloud/api/1/";

export class VRChat extends _VRChat {
	private cache: Cacheable;

	public constructor(options: VRChatOptions) {
		const { application, keyv, ...rest } = options;

		if (!application
			|| !application.name
			|| !application.version
			|| !application.contact
			// Catch common mistakes, like forgetting to change the example.
			|| application.contact.includes("@example.com")
		) throw VRChatError.from("You must provide an application name, version, and contact information.");

		const headers = new Headers(rest.headers as HeadersInit);
		// eslint-disable-next-line node/prefer-global/process
		headers.set("user-agent", `${application.name}/${application.version} (${application.contact}), VRChat.js/${process.env.VERSION} (${process.env.ISSUE_URL})`);

		const client = createClient(createConfig({
			baseUrl,
			...rest,
			headers
		}));

		const { interceptors } = client;

		interceptors.request.use(async (request) => {
			const cookies = await this.getCookies();
			if (!cookies.length) return request;

			request.headers.set("cookie", serializeCookies(cookies));

			return request;
		});

		interceptors.response.use(async (response) => {
			await this.saveCookies(response.headers);
			return response;
		});

		interceptors.error.use((reason, response, request) => VRChatError.from(reason, request, response));

		super({ client });

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

		if (log.enabled) {
			interceptors.request.use(async (request, options) => {
				const clone = request.clone();

				log(
					"%s %s %O",
					request.method,
					request.url.slice((options.baseUrl as string).length),
					await clone.json().catch(() => clone.text())
				);

				return request;
			});

			interceptors.response.use(async (response, request, options) => {
				const clone = response.clone();

				log(
					"%s %s %o %s %O",
					request.method,
					request.url.slice((options.baseUrl as string).length),
					clone.status,
					clone.statusText,
					await clone.json().catch(() => clone.text())
				);

				return response;
			});

			this.cache.onHooks(
				Object
					.values(CacheableHooks)
					.map((event) => ({
						event,
						handler: (data) => logCache(`%s %O`, event, data)
					}))
			);
		}
	}

	private async getCookies(): Promise<Array<Cookie>> {
		const allCookies = await this.cache.get<Array<Cookie>>("cookies");
		if (!allCookies) return [];

		const cookies = allCookies.filter((cookie) => !cookie.expires || cookie.expires > Date.now());

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
				].map((cookie) => [cookie.name, cookie] as const))
		);

		await this.cache.set("cookies", cookies);
	}

	/**
	 * Logs in to the VRChat API using the provided credentials, and returns the current user.
	 * This method handles two-factor authentication if required using the provided `twoFactorCode` function or `totpSecret`.
	 *
	 * @param options - The login options, including username, password, and optional two-factor authentication details.
	 * @returns A promise that resolves to the current user data, or an error if the login fails.
	 */
	public async login<ThrowOnError extends boolean = false>(options: LoginOptions<ThrowOnError>): Promise<RequestResult<GetCurrentUserResponses, GetCurrentUserErrors, ThrowOnError>> {
		const { username, password, totpSecret, throwOnError } = options;
		let { twoFactorCode } = options;

		const value = await this.getCurrentUser({
			...options,
			credentials: "omit",
			responseTransformer: undefined,
			headers: {
				authorization: `Basic ${btoa(`${encodeURIComponent(username)}:${encodeURIComponent(password)}`)}`
			}
		});

		const { data: user, request, response } = value;

		if (user && "requiresTwoFactorAuth" in user) {
			const twoFactorMethods = user.requiresTwoFactorAuth as Array<TwoFactorMethods>;

			if (twoFactorMethods.includes("totp") && totpSecret && !twoFactorCode)
				twoFactorCode = () => TOTP.generate(totpSecret).otp;

			if (!twoFactorCode)
				// @ts-expect-error: `VRChatError` not assignable to `GetCurrentUserErrors`.
				return fail({
					// Always throw, as this should be handled by the caller.
					throwOnError: true,
					message: `Two-factor authentication is required, but the 'twoFactorCode' function was not provided`,
					response,
					request
				});

			const code = await twoFactorCode();

			const factors = await Promise.all([
				twoFactorMethods.includes("totp") && code.length === 6 ? this.verify2Fa.bind(this) : undefined,
				// this.verify2FaEmailCode.bind(this),
				// this.verifyRecoveryCode.bind(this)
			].filter(Boolean).map((function_) => function_?.({
				...options,
				throwOnError: false,
				credentials: "include",
				body: {
					code
				}
			})));

			if (factors.length === 0)
				// @ts-expect-error: `VRChatError` not assignable to `GetCurrentUserErrors`.
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
				// @ts-expect-error: `VRChatError` not assignable to `GetCurrentUserErrors`.
				return factor;
			}

			return this.getCurrentUser(options);
		}

		return this.getCurrentUser(options);
	}
}
