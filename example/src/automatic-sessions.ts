import KeyvFile from "keyv-file";
import prompts from "prompts";
import { VRChat } from "vrchat";

const vrchat = new VRChat({
	application: {
		name: "Example",
		version: "1.5.1",
		contact: "timmy@examaple.com"
	},
	authentication: {
		optimistic: false,
		credentials: () => prompts([
			{
				name: "username",
				type: "text",
				message: "VRChat username",
			},
			{
				name: "password",
				type: "password",
				message: "VRChat password",
			},
			{
				name: "twoFactorCode",
				type: "text",
				message: "Two-factor authentication code",
			}
		]),
	},
	keyv: new KeyvFile({ filename: "./data.json" }),
});

(async () => {
	await vrchat.getCurrentSubscriptions({ throwOnError: true });
	const { data: { displayName } } = await vrchat.getCurrentUser({ throwOnError: true });
	// eslint-disable-next-line no-console
	console.log(`Logged in as ${displayName}`);
	// await Promise.all(Array.from({ length: 10 }).map(() => vrchat.getCurrentOnlineUsers({ throwOnError: true })));
})();
