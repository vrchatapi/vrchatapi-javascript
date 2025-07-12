import { readFile } from "node:fs/promises";

import { defineConfig } from "tsup";

import { version as VERSION } from "./package.json";

export default defineConfig({
	banner: {
		js: `\n\n/**\n${(await readFile("./LICENSE", "utf-8")).split("\n").map((line) => ` * ${line}`).join("\n")}\n*/\n`,
	},
	entry: ["src/index.ts"],
	format: [
		"esm",
		"cjs"
	],
	dts: true,
	sourcemap: true,
	minify: true,
	replaceNodeEnv: true,
	clean: true,
	treeshake: true,
	// bundle: true,
	// noExternal: ["@hey-api/client-fetch"],
	// skipNodeModulesBundle: true,
	outDir: "dist",
	env: {
		VERSION
	}
});
