const vrchat = require("vrchat");

const readline = require("readline")

const tough = require("tough-cookie");
const fs = require("fs");

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


const COOKIE_FILE = "cookies.json";
let cookieJar = new tough.CookieJar();

const configuration = new vrchat.Configuration({
    username: "username",
    password: "password",
    baseOptions: {
        headers: { "User-Agent": "ExampleProgram/0.0.1 my@email.com"},
        jar: cookieJar,
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

    const serializedJar = JSON.stringify(cookieJar.serializeSync());
    fs.writeFileSync(COOKIE_FILE, serializedJar);

    const deserializedJar = tough.CookieJar.deserializeSync(serializedJar);
    const store = deserializedJar.store.idx["api.vrchat.cloud"]["/"];
    console.log(`auth=${store["auth"]["value"]}`);
    console.log(`twoFactorAuth=${store["twoFactorAuth"]["value"]}`);
}

main();
