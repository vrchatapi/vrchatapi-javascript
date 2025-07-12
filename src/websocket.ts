import EventEmitter from "node:events";

import WebSocket from "isomorphic-ws";
import type TypedEventEmitter from "typed-emitter";

import type { VRChat } from "./client";
import type { Events } from "./events";
import { logWebsocket } from "./log";

const baseUrl = "wss://pipeline.vrchat.cloud";

export interface VRChatWebsocketOptions {
	baseUrl?: string;
	headers?: Headers;
	authToken?: string;
}

export class VRChatWebsocket extends (EventEmitter as new () => TypedEventEmitter<Events>) {
	private url!: URL;
	private websocket?: WebSocket;

	public constructor(
		public readonly options: VRChatWebsocketOptions = {},
		private readonly vrchat?: VRChat
	) {
		super();

		this.url = new URL(this.options.baseUrl ?? baseUrl);

		if (options.authToken)
			this.authenticate(options.authToken);

		process.on("beforeExit", () => this.close());
		process.on("SIGINT", () => this.close());
	}

	public get connected(): boolean {
		return this.websocket?.readyState === WebSocket.OPEN;
	}

	public close(): void {
		if (!this.websocket || this.websocket.readyState === WebSocket.CLOSED)
			return;

		logWebsocket("%s()", this.close.name);
		this.websocket.close();
	}

	public async authenticate(authToken: string): Promise<void> {
		logWebsocket("%s(authToken: \"%s\")", this.authenticate.name, authToken);

		this.close();
		this.url.searchParams.set("authToken", authToken);

		this.websocket = new WebSocket(this.url, {
			headers: Object.fromEntries(this.options.headers?.entries() ?? [])
		});

		this.websocket.addEventListener("open", (event: WebSocket.Event) => {
			logWebsocket("%s", event.type);
		});

		this.websocket.addEventListener("close", (event: WebSocket.CloseEvent) => {
			logWebsocket("%s: %s", event.type, event.reason);
		});

		this.websocket.addEventListener("error", (event: WebSocket.ErrorEvent) => {
			logWebsocket("%s: %O", event.type, event.error);
		});

		this.websocket.addEventListener("message", (event: WebSocket.MessageEvent) => {
			try {
				const { type, content: _content } = JSON.parse(event.data.toString());
				const content = JSON.parse(_content);

				logWebsocket("%s: %O", type, content);

				this.emit(type, content);
			}
			catch (reason) {
				logWebsocket("Malformed message: %O", event.data);
				logWebsocket(reason);
			}
		});
	}
}
