import { configure } from "@ariesclark/eslint-config";

export default configure({
	type: "lib",
	ignores: [
		"dist",
		"src/generated",
		"package.json",
	]
});
