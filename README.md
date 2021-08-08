![](https://github.com/vrchatapi/vrchatapi.github.io/blob/master/assets/img/lang/lang_javascript_banner_1500x300.png?raw=true)

# VRChat API Library for JavaScript/TypeScript

A JavaScript/TypeScript/NodeJS client to interact with the unofficial VRChat API. Supports all REST calls specified in https://github.com/vrchatapi/specification.

## Disclaimer

This is the official response of the VRChat Team (from Tupper more specifically) on the usage of the VRChat API.

> Use of the API using applications other than the approved methods (website, VRChat application) are not officially supported. You may use the API for your own application, but keep these guidelines in mind:
> * We do not provide documentation or support for the API.
> * Do not make queries to the API more than once per 60 seconds.
> * Abuse of the API may result in account termination.
> * Access to API endpoints may break at any given time, with no warning.

As stated, this documentation was not created with the help of the official VRChat team. Therefore this documentation is not an official documentation of the VRChat API and may not be always up to date with the latest versions. If you find that a page or endpoint is not longer valid please create an issue and tell us so we can fix it.

## Getting Started

First add the package to to your project:
```bash
npm install vrchatapi # NOTE: We are not yet published on NPM
```

Below is an example on how to login to the API and fetch your own user information.

```javascript
// Step 1. We begin with creating a Configuration, which contains the username and password for authentication.
const VRChatApi = require("vrchatapi");
const configuration = new VRChatApi.Configuration({
    username: "username",
    password: "password"
});

// Step 2. VRChat consists of several API's (WorldsApi, UsersApi, FilesApi, NotificationsApi, FriendsApi, etc...)
// Here we instantiate the Authentication API which is required for logging in.
const AuthenticationApi = new VRChatApi.AuthenticationApi(configuration);

// Step 3. Calling getCurrentUser on Authentication API logs you in if the user isn't already logged in.
AuthenticationApi.getCurrentUser().then(resp => {
    const currentUser = resp.data;
    console.log(`Logged in as: ${currentUser.displayName}`);
});
```

See [example.js](https://github.com/vrchatapi/vrchatapi-javascript/blob/master/example.js) for more example usage on getting started.

## Contributing

Contributions are welcome, but do not add features that should be handled by the OpenAPI specification.

Join the [Discord server](https://discord.gg/Ge2APMhPfD) to get in touch with us.