import { defineConfig } from "@hey-api/openapi-ts";

import { errorPlugin } from "./plugins/error";

export default defineConfig({
	input: "./openapi.json",
	output: "src/generated",
	plugins: [
		{
			name: "@hey-api/typescript",
			exportFromIndex: false,
			requests: "{{name}}",
			// todo: enable after generator doesn't create conflicting names.
			// todo: see: https://discord.com/channels/@me/1414524675156869140/1446935685780209664
			// enums: {
			// 	case: "camelCase"
			// }
		},
		{
			name: "@hey-api/client-fetch",
			exportFromIndex: false
		},
		{
			name: "@hey-api/transformers",
			exportFromIndex: false
		},
		{
			name: "@hey-api/sdk",
			exportFromIndex: false,
			auth: false,
			asClass: true,
			instance: true,
			transformer: true,
			classNameBuilder: () => "VRChatInternal",
		},
		errorPlugin()
	],
});
