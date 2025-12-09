import type { TwoFactorMethods } from "../types";

export function requiresTwoFactorAuth(data?: unknown): data is { requiresTwoFactorAuth: Array<TwoFactorMethods> } {
	return !!data && typeof data === "object" && "requiresTwoFactorAuth" in data && Array.isArray(data.requiresTwoFactorAuth);
}

export function isUser(data?: unknown): data is { id: string } {
	return !!data && typeof data === "object" && "id" in data && typeof data.id === "string";
}
