import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/websocket.ts",
		"src/types.ts",
	],
	format: [
		"esm",
		"cjs"
	],
	dts: true,
	splitting: true,
	sourcemap: true,
	replaceNodeEnv: true,
	clean: true,
	treeshake: true,
	outDir: "dist"
});
