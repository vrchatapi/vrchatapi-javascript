import type { Plugin } from "@hey-api/openapi-ts";
import { defineConfig } from "@hey-api/openapi-ts";
import ts from "typescript";

const customPlugin: Plugin.Config<{ name: "vrchat/custom-plugin" }> = {
	name: "vrchat/custom-plugin",
	_handler: ({ context }) => {
		const typesFile = context.file({ id: "types" })!;

		context.subscribe("after", () => {
			const items = (typesFile as any)._items as Array<ts.Node>;

			// type _Error = { ... }
			// ->
			// import { VRChatError } from "../error";
			// type _Error = VRChatError;

			const errorTypeName = "_Error";
			const errorTypeIndex = items.findIndex((item: ts.Node) => ts.isTypeAliasDeclaration(item) && item.name.text === errorTypeName);
			if (errorTypeIndex === -1) throw new Error("Could not find error type definition");

			const { name: errorImport } = typesFile.import({ module: "../error", name: "VRChatError", asType: true });
			const errorImportIdentifier = ts.factory.createIdentifier(errorImport);

			items[errorTypeIndex] = ts.factory.createTypeAliasDeclaration(
				undefined,
				ts.factory.createIdentifier(errorTypeName),
				undefined,
				ts.factory.createTypeReferenceNode(
					errorImportIdentifier,
					undefined
				)
			);
		});
	},
	_handlerLegacy: () => { },
};

export default defineConfig({
	input: "./openapi.yaml",
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
		customPlugin as any
	],
});
