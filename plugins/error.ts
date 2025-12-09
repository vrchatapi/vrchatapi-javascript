import { $, definePluginConfig } from "@hey-api/openapi-ts";

export const errorPlugin = definePluginConfig({
	name: "vrchat/error",
	config: {},
	dependencies: ["@hey-api/typescript"],
	handler: ({ plugin }) => {
		const symbol = plugin.querySymbol({ resourceId: "#/components/schemas/Error" });

		plugin.setSymbolValue(
			symbol,
			$.type
				.alias(symbol.placeholder)
				.export(symbol.exported)
				.type(plugin.registerSymbol({
					external: "../error",
					name: "VRChatError",
				}).placeholder)
		);
	}
});
