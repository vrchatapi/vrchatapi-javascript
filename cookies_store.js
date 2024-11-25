const vrchat = require("vrchat");

const readline = require("readline")
import globalAxios from "axios"

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


const configuration = new vrchat.Configuration({
    username: "username",
    password: "password",
    baseOptions: {
        headers: { "User-Agent": "ExampleProgram/0.0.1 my@email.com"}
    }
});


const authenticationApi = new AuthenticationApi(configuration);

async function main() {
    var currentUser = (await authenticationApi.getCurrentUser()).data

    if (currentUser["requiresTwoFactorAuth"] && currentUser["requiresTwoFactorAuth"][0] === "emailOtp") {
        await authenticationApi.verify2FAEmailCode({ code: await prompt("email Code\n") })
        currentUser = (await authenticationApi.getCurrentUser()).data;
    }
    if (currentUser["requiresTwoFactorAuth"] && currentUser["requiresTwoFactorAuth"][0] === "totp") {
        await authenticationApi.verify2FA({ code: await prompt("2fa Code\n") })
        currentUser = (await authenticationApi.getCurrentUser()).data;
    }

    console.log(`Logged in as: ${currentUser.displayName}`);

    const store = globalAxios.defaults.jar.store.idx["api.vrchat.cloud"]["/"];
    console.log(`auth=${store["auth"]["value"]}`)
    console.log(`twoFactorAuth=${store["twoFactorAuth"]["value"]}`)
}

main();
