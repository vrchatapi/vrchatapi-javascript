import { defineConfig } from "tsup";

import * as package_ from "./package.json";

export default defineConfig({
	entry: ["src/index.ts"],
	format: "esm",
	dts: true,
	sourcemap: true,
	// treeshake: true,
	minify: true,
	clean: true,
	env: {
		VERSION: package_.version,
		ISSUE_URL: package_.bugs.url,
	}
});
