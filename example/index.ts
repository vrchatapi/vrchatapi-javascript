/* eslint-disable no-console, antfu/no-top-level-await */
import KeyvFile from "keyv-file";
import prompts from "prompts";
import { VRChat } from "vrchat";

const vrchat = new VRChat({
	/**
	 * When using the VRChat API, you must provide an application name, version, and contact information.
	 * This is used to identify your application to VRChat, and to provide support if needed.
	 */
	application: {
		name: "Example",
		version: "1.5.1",
		/**
		 * An email, or a URL to a support page.
		 */
		contact: "timmy@examaple.com"
	},
	/**
	 * Save cookies to a file, so you can use them later.
	 *
	 * This is optional, but recommended for persistent sessions.
	 * If you don't provide a `keyv` instance, it will use an in-memory store.
	 *
	 * You can use any Keyv-compatible adapter for this, such as `keyv-file`, `@keyv/redis`, or `@keyv/postgres`.
	 * See https://keyv.org/docs/keyv/#official-storage-adapters for more information.
	 */
	keyv: new KeyvFile({ filename: "./data.json" }),
});

const { data: user } = await vrchat
	.getCurrentUser({ throwOnError: true })
	// Since we've passed `throwOnError: true`, this will throw an error if the user is not logged in.
	// We can catch that error and prompt the user for their credentials.
	.catch(async () => {
		/**
		 * Ask the user for their VRChat username and password.
		 * You can also use environment variables, or any other method to get the credentials.
		 */
		const { username, password } = await prompts([
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
		]);

		return vrchat.login({
			username,
			password,
			/**
			 * This function will be called when two-factor authentication is required.
			 * Accepts any code, such as from an authenticator app or a recovery code.
			 */
			twoFactorCode: async () => {
				const { code } = await prompts({
					name: "code",
					type: "text",
					message: "Two-factor authentication code",
				});

				return code;
			},
			/**
			 * Or, automatically generate a code from a secret.
			 * Useful for service accounts & automated workflows.
			 *
			 * If this is a user-initiated login, don't use this.
			 */
			// totpSecret: "",
			throwOnError: true,
		});
	});

console.log(`Logged in as ${user.displayName} (id: ${user.id}).`);

/**
 * Get 10 online friends, you can change the `n` parameter to get more or less friends.
 * Exercise: You can also use the `offline` query parameter to include offline friends.
 */
const { data: friends } = await vrchat.getFriends({ query: { n: 10 }, throwOnError: true });

console.log(
	friends.length > 0
		? "Your friends:"
		: "Aw, you don't have any online friends."
);
for (const friend of friends) {
	console.log(`- ${friend.displayName} (id: ${friend.id})`);
}

const tupperId = "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469";

await vrchat
	// Add Tupper as a friend, he's a nice guy.
	.friend({ path: { userId: tupperId }, throwOnError: true })
	// If we've already sent one, we'll catch the error and ignore it.
	.catch(() => { });

const { data: { outgoingRequest } } = await vrchat
	.getFriendStatus({ path: { userId: tupperId }, throwOnError: true });

// Tupper ghosted our friend request, so let's delete it.
if (outgoingRequest) await vrchat.deleteFriendRequest({ path: { userId: tupperId }, throwOnError: true });
