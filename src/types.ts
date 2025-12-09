import type { KeyvStoreAdapter } from "keyv";
import type Keyv from "keyv";

import type { VRChatApplication } from "./application";
import type { createConfig, Options, RequestResult } from "./generated/client";
import type { Lazy } from "./lib/lazy";
import type { GetCurrentUser, GetCurrentUserErrors, GetCurrentUserResponses } from "./types";
import type { VRChatWebsocketOptions } from "./websocket";

export interface VRChatAuthentication {
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
}

export interface VRChatOptions extends Omit<NonNullable<Parameters<typeof createConfig>[0]>, "body" | "bodySerializer" | "credentials" | "global" | "method" | "mode" | "parseAs" | "querySerializer"> {
	/**
	 * When using the VRChat API, you must provide an application name, version, and contact information.
	 * This is used to identify your application to VRChat, and to provide support if needed.
	 */
	application: VRChatApplication;
	authentication?: VRChatAuthentication;
	pipeline?: VRChatWebsocketOptions;
	/**
	 * A [Keyv-compatible adapter](https://npm.im/keyv#official-storage-adapters) for caching & persistent sessions.
	 */
	keyv?: Keyv<unknown> | KeyvStoreAdapter | Map<unknown, unknown>;
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

export type LoginOptions<ThrowOnError extends boolean> = { meta?: Record<PropertyKey, unknown> } & LoginCredentials & Omit<Options<GetCurrentUser, ThrowOnError>, "credentials" | "responseTransformer">;
export type LoginResult<ThrowOnError extends boolean = false> = Awaited<RequestResult<GetCurrentUserResponses, GetCurrentUserErrors, ThrowOnError>>;

export * from "./generated/types.gen";
