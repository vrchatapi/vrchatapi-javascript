import { defaultUserAgent } from "./lib/metadata";

export interface VRChatApplication {
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
}

export function isApplication(application: VRChatApplication): boolean {
	return (
		!!application
		&& !!application.name
		&& !!application.version
		&& !!application.contact
		// Catch common mistakes, like forgetting to change the example.
		&& !application.contact.includes("@example.com")
		&& !application.contact.includes("\n")
	);
}

export function getApplicationAgent({ name, version, contact }: VRChatApplication): string {
	return `${name}/${version} (${contact})`;
}

export function getUserAgent(application: VRChatApplication): string {
	return `${getApplicationAgent(application)}, ${defaultUserAgent}`;
}
