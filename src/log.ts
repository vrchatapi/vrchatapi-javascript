import { debug } from "debug";

import type { VRChat } from "./client";
import { requestIdSymbol } from "./client";
import type { Options } from "./generated/sdk.gen";

export const log = debug("vrchat");
export const logCache = log.extend("cache");

export const logHttp = log.extend("http");
export const logWebsocket = log.extend("websocket");

export function initLogging({ client: { interceptors } }: VRChat): void {
	interceptors.request.use(async (request, options) => {
		const { meta } = options as Options as { meta: Record<PropertyKey, unknown> };
		const requestId = meta[requestIdSymbol];

		const clone = request.clone();

		logHttp(
			"%o %s %s %O",
			requestId,
			request.method,
			request.url.slice((options.baseUrl as string).length),
			await clone.json().catch(() => clone.text())
		);

		return request;
	});

	interceptors.response.use(async (response, request, options) => {
		const { meta } = options as Options as { meta: Record<PropertyKey, unknown> };
		const requestId = meta[requestIdSymbol];

		const clone = response.clone();

		logHttp(
			"%o %s %s %o %s %O",
			requestId,
			request.method,
			request.url.slice((options.baseUrl as string).length),
			clone.status,
			clone.statusText,
			await clone.json().catch(() => clone.text())
		);

		return response;
	});
}
