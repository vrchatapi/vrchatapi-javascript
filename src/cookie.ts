export interface Cookie {
	name: string;
	value: string;
	/**
	 * The expiration time of the cookie in milliseconds since the epoch.
	 * If the cookie does not expire, this will be `null`.
	 */
	expires: number | null;
	options: Record<string, string>;
}

/**
 * Parses a Set-Cookie header string into a Cookie object.
 *
 * @param cookie - The Set-Cookie header string to parse.
 * @returns A Cookie object containing the name, value, expiration time, and options.
 *
 * @see [Set-Cookie header on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
 */
export function parseSetCookie(cookie: string): Cookie {
	const [name, ...rest] = cookie.split("=") as [string, ...Array<string>];
	const [value, ..._options] = rest.join("=").split(";") as [string, ...Array<string>];

	const options = Object.fromEntries(_options.map((option) => {
		const [name, value] = option.split("=") as [string, string];
		return [name.trim().toLowerCase(), value];
	})) as Record<string, string>;

	// If both Expires and Max-Age are set, Max-Age has precedence.
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#max-agenumber
	const expires = options["max-age"]
		? Date.now() + Number(options["max-age"]) * 1000
		: options.expires
			? new Date(options.expires).getTime()
			: null;

	return { name, value, expires, options };
}

export function serializeCookie({ name, value }: Pick<Cookie, "name" | "value">): string {
	return `${name}=${value}`;
}

export function serializeCookies(cookies: Array<Cookie>): string {
	return cookies.map(serializeCookie).join("; ");
}
