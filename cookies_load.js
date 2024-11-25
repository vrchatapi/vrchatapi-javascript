const vrchat = require("vrchat");

const configuration = new vrchat.Configuration({
    username: "username",
    password: "password",
    baseOptions: {
        headers: {
            "User-Agent": "ExampleProgram/0.0.1 my@email.com"
            "Cookie": "auth=[AUTH_COOKIE_HERE]; twoFactorAuth=[TWO_FACTOR_AUTH_COOKIE_HERE]}"
        }
    }
});

const AuthenticationApi = new vrchat.AuthenticationApi(configuration);

async function main() {
    const currentUser = (await AuthenticationApi.getCurrentUser()).data;
    console.log(`Logged in as: ${currentUser.displayName}`);
}

main();
