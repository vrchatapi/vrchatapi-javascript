import { defineConfig } from "@hey-api/openapi-ts";

import { errorPlugin } from "./plugins/error";

export default defineConfig({
	input: "./openapi.yaml",
	output: "src/generated",
	plugins: [
		{
			name: "@hey-api/typescript",
			exportFromIndex: false,
			requests: "{{name}}",
			enums: {
				case: "camelCase"
			}
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
