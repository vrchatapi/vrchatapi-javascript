import { defineConfig } from "tsup";

import { version } from "./package.json";

export default defineConfig({
	entry: ["src/index.ts"],
	format: [
		"esm",
		"cjs"
	],
	dts: true,
	sourcemap: true,
	// treeshake: true,
	minify: true,
	clean: true,
	env: {
		VERSION: version
	}
});
