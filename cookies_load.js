const vrchat = require("vrchat");

const readline = require("readline")

const tough = require("tough-cookie");
const fs = require("fs");

const COOKIE_FILE = "cookies.json";
let cookieJar = new tough.CookieJar();

if (fs.existsSync(COOKIE_FILE)) {
    const serializedCookies = fs.readFileSync(COOKIE_FILE, "utf-8");
    cookieJar = tough.CookieJar.deserializeSync(JSON.parse(serializedCookies));
}

const configuration = new vrchat.Configuration({
    username: "username",
    password: "password",
    baseOptions: {
        headers: {
            "User-Agent": "ExampleProgram/0.0.1 my@email.com",
            // Use this instead of jar if you want to hard code cookies
            // "Cookie": auth=[AUTH_COOKIE_HERE]; twoFactorAuth=[TWO_FACTOR_AUTH_COOKIE_HERE]"
        },
        jar: cookieJar,
    }
});


const authenticationApi = new AuthenticationApi(configuration);

async function main() {
    var currentUser = (await authenticationApi.getCurrentUser()).data
    console.log(`Logged in as: ${currentUser.displayName}`);
}

main();
