import { defineConfig } from "tsup";

import { version as VERSION } from "./package.json";

const NODE_ENV = VERSION === "0.0.0-next.0" ? "development" : "production";

export default defineConfig({
	entry: ["src/index.ts"],
	format: [
		"esm",
		"cjs"
	],
	dts: true,
	sourcemap: true,
	minify: true,
	clean: true,
	treeshake: true,
	splitting: true,
	bundle: true,
	noExternal: ["@hey-api/client-fetch"],
	skipNodeModulesBundle: true,
	outDir: "dist",
	env: {
		VERSION,
		NODE_ENV
	}
});
