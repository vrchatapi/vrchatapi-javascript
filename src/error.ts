import { baseUrl, VRChat } from "./client";
import { tryJsonParse } from "./utilities";

/**
 * @internal
 */
interface VRChatErrorOptions {
	message: string;
	response: Response;
	request: Request;
}

export class VRChatError extends Error {
	public request: Request;
	public response: Response;

	public get statusCode(): number {
		return this.response.status ?? 0;
	}

	/**
	 * Creates a new `VRChatError` instance from a value.
	 *
	 * This method is used to convert various types of error values into a consistent `VRChatError` instance.
	 * It can handle `Error` instances, strings, and objects with a `message` property.
	 * If the value is already a `VRChatError`, it will return it as is.
	 *
	 * @internal
	 */
	public static from(value: unknown, request?: Request, response?: Response): VRChatError {
		if (value instanceof VRChatError)
			return value;

		request ??= new Request(baseUrl);
		response ??= new Response();

		if (value instanceof Error)
			return new VRChatError({ message: value.message, response, request, cause: value });

		if (typeof value == "string")
			return new VRChatError({ message: value, response, request });

		if (typeof value == "object" && value) {
			if ("message" in value && typeof value.message === "string")
				return new VRChatError({ message: value.message, response, request, cause: value });

			if ("error" in value && typeof value.error === "object" && value.error) {
				if ("message" in value.error && typeof value.error.message === "string") {
					// VRChat sometimes JSON-encodes the error message, so we try to parse it, then stringify it.
					return new VRChatError({ message: String(tryJsonParse(value.error.message)), response, request, cause: value });
				}
			}
		}

		// Last resort, try to stringify the reason.
		return new VRChatError({ message: JSON.stringify(value), response, request, cause: value });
	}

	private constructor({ message, request, response, cause }: { cause?: unknown } & VRChatErrorOptions) {
		super(message, { cause });

		this.request = request;
		this.response = response;

		this.name = "VRChatError";
		Error.captureStackTrace(this, VRChat);
	}
}

/**
 * @internal
 */
export function fail({ message, request, response, throwOnError }: { throwOnError?: boolean } & VRChatErrorOptions): { data: undefined; error: VRChatError; request: Request; response: Response } {
	const error = VRChatError.from(message, request, response);
	if (throwOnError) throw error;

	return {
		data: undefined,
		error,
		request: error.request,
		response: error.response
	};
}
