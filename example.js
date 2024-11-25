const vrchat = require("vrchat");
const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


const configuration = new vrchat.Configuration({
    username: "username",
    password: "password",
    baseOptions: {
        headers: { "User-Agent": "ExampleProgram/0.0.1 my@email.com"}
    }
});

const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const UsersApi = new vrchat.UsersApi(configuration);
const SystemApi = new vrchat.SystemApi(configuration);

AuthenticationApi.getCurrentUser().then(async resp => {
    var currentUser = resp.data;

    if (currentUser["requiresTwoFactorAuth"] && currentUser["requiresTwoFactorAuth"][0] === "emailOtp") {
        await AuthenticationApi.verify2FAEmailCode({ code: await prompt("email Code\n") }, )
        currentUser = (await AuthenticationApi.getCurrentUser()).data;
    }
    if (currentUser["requiresTwoFactorAuth"] && currentUser["requiresTwoFactorAuth"][0] === "totp") {
        await AuthenticationApi.verify2FA({ code: await prompt("2fa Code\n") }, )
        currentUser = (await AuthenticationApi.getCurrentUser()).data;
    }

    console.log(`Logged in as: ${currentUser.displayName}`);

    SystemApi.getCurrentOnlineUsers().then(resp => {
        console.log(`Current Online Users: ${resp.data}`);

        // Calling getCurrentUser on Authentication API logs you in if the user isn't already logged in.
        AuthenticationApi.getCurrentUser().then(resp => {
            console.log(`Logged in as: ${resp.data.displayName}`);

            UsersApi.getUser("usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469", ).then(resp => {
                console.log(resp.data.displayName); // Should print out "tupper"
            });
        });
    });
});

