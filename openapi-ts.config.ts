import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
	input: "https://vrchat.community/openapi.yaml",
	output: "src/generated",
	plugins: [
		{
			name: "@hey-api/typescript",
			exportFromIndex: false,
		},
		{
			name: "@hey-api/client-fetch",
			exportFromIndex: false,
		},
		{
			name: "@hey-api/transformers",
			exportFromIndex: false,
		},
		{
			name: "@hey-api/sdk",
			exportFromIndex: false,
			auth: false,
			asClass: true,
			instance: true,
			transformer: true,
			classNameBuilder: () => "_VRChat",
		},
	],
});
