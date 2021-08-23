/* tslint:disable */
/* eslint-disable */
/**
 * VRChat API Documentation
 * ![VRChat API Banner](https://vrchatapi.github.io/assets/img/api_banner_1500x400.png)  # Welcome to the VRChat API  Before we begin, we would like to state this is a **COMMUNITY DRIVEN PROJECT**. This means that everything you read on here was written by the community itself and is **not** officially supported by VRChat. The documentation is provided \"AS IS\", and any action you take towards VRChat is completely your own responsibility.  The documentation and additional libraries SHALL ONLY be used for applications interacting with VRChat\'s API in accordance with their [Terms of Service](https://github.com/VRChatAPI), and MUST NOT be used for modifying the client, \"avatar ripping\", or other illegal activities. Malicious usage or spamming the API may result in account termination. Certain parts of the API are also more sensitive than others, for example moderation, so please read tread extra carefully and read the warnings when present.  ![Tupper Policy on API](https://i.imgur.com/yLlW7Ok.png)  Finally, use of the API using applications other than the approved methods (website, VRChat application, Unity SDK) is not officially supported. VRChat provides no guarantee or support for external applications using the API. Access to API endpoints may break **at any time, without notice**. Therefore, please **do not ping** VRChat Staff in the VRChat Discord if you are having API problems, as they do not provide API support. We will make a best effort in keeping this documentation and associated language libraries up to date, but things might be outdated or missing. If you find that something is no longer valid, please contact us on Discord or [create an issue](https://github.com/vrchatapi/specification/issues) and tell us so we can fix it.  # Getting Started  The VRChat API can be used to programmatically retrieve or update information regarding your profile, friends, avatars, worlds and more. The API consists of two parts, \"Photon\" which is only used in-game, and the \"Web API\" which is used by both the game and the website. This documentation focuses only on the Web API.  The API is designed around the REST ideology, providing semi-simple and usually predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise.  <div class=\"callout callout-error\">   <strong>🛑 Warning! Do not touch Photon!</strong><br>   Photon is only used by the in-game client and should <b>not</b> be touched. Doing so may result in permanent account termination. </div>  <div class=\"callout callout-info\">   <strong>ℹ️ API Key and Authentication</strong><br>   The API Key has always been the same and is currently <code>JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26</code>.   Read <a href=\"#tag--authentication\">Authentication</a> for how to log in. </div>  # Using the API  For simply exploring what the API can do it is strongly recommended to download [Insomnia](https://insomnia.rest/download), a free and open-source API client that\'s great for sending requests to the API in an orderly fashion. Insomnia allows you to send data in the format that\'s required for VRChat\'s API. It is also possible to try out the API in your browser, by first logging in at [vrchat.com/home](https://vrchat.com/home/) and then going to [vrchat.com/api/1/auth/user](https://vrchat.com/api/1/auth/user), but the information will be much harder to work with.  For more permanent operation such as software development it is instead recommended to use one of the existing language SDKs. This community project maintains API libraries in several languages, which allows you to interact with the API with simple function calls rather than having to implement the HTTP protocol yourself. Most of these libraries are automatically generated from the API specification, sometimes with additional helpful wrapper code to make usage easier. This allows them to be almost automatically updated and expanded upon as soon as a new feature is introduced in the specification itself. The libraries can be found on [GitHub](https://github.com/vrchatapi) or following:  * [NodeJS (JavaScript)](https://www.npmjs.com/package/vrchat) * [Dart](https://pub.dev/packages/vrchat_dart) * [Rust](https://crates.io/crates/vrchatapi) * [C#](github.com/vrchatapi/vrchatapi-csharp) * [Python](https://github.com/vrchatapi/VRChatPython)  # Pagination  Most endpoints enforce pagination, meaning they will only return 10 entries by default, and never more than 100.<br> Using both the limit and offset parameters allows you to easily paginate through a large number of objects.  | Query Parameter | Type | Description | | ----------|--|------- | | `limit` | integer  | The number of objects to return. This value often defaults to 10. Highest limit is always 100.| | `offset` | integer  | A zero-based offset from the default object sorting.|  If a request returns fewer objects than the `limit` parameter, there are no more items available to return.  # Contribution  Do you want to get involved in the documentation effort? Do you want to help improve one of the language API libraries? This project is an [OPEN Open Source Project](https://openopensource.org)! This means that individuals making significant and valuable contributions are given commit-access to the project. It also means we are very open and welcoming of new people making contributions, unlike some more guarded open-source projects.  [![Discord](https://img.shields.io/static/v1?label=vrchatapi&message=discord&color=blueviolet&style=for-the-badge)](https://discord.gg/qjZE9C9fkB)
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: me@ruby.js.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';
import axiosCookieJarSupport from "axios-cookiejar-support";axiosCookieJarSupport(globalAxios);import { CookieJar } from "tough-cookie";globalAxios.defaults.jar = new CookieJar();globalAxios.defaults.withCredentials = true;

/**
 * 
 * @export
 * @interface Avatar
 */
export interface Avatar {
    /**
     * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`.
     * @type {string}
     * @memberof Avatar
     */
    assetUrl?: string;
    /**
     * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`. **Deprecation:** `Object` has unknown usage/fields, and is always empty. Use normal `Url` field instead.
     * @type {object}
     * @memberof Avatar
     */
    assetUrlObject?: object;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    authorId: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    authorName: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof Avatar
     */
    featured: boolean;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    imageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    name: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof Avatar
     */
    releaseStatus: ReleaseStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof Avatar
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    thumbnailImageUrl: string;
    /**
     * 
     * @type {Set<UnityPackage>}
     * @memberof Avatar
     */
    unityPackages: Set<UnityPackage>;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    unityPackageUrl: string;
    /**
     * 
     * @type {AvatarUnityPackageUrlObject}
     * @memberof Avatar
     * @deprecated
     */
    unityPackageUrlObject: AvatarUnityPackageUrlObject;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    updated_at: string;
    /**
     * 
     * @type {number}
     * @memberof Avatar
     */
    version: number;
}
/**
 * **Deprecation:** `Object` has unknown usage/fields, and is always empty. Use normal `Url` field instead.
 * @export
 * @interface AvatarUnityPackageUrlObject
 */
export interface AvatarUnityPackageUrlObject {
    /**
     * 
     * @type {string}
     * @memberof AvatarUnityPackageUrlObject
     */
    unityPackageUrl?: string;
}
/**
 * 
 * @export
 * @interface Config
 */
export interface Config {
    /**
     * VRChat\'s office address
     * @type {string}
     * @memberof Config
     */
    address: string;
    /**
     * Public Announcements
     * @type {Set<ConfigAnnouncements>}
     * @memberof Config
     */
    announcements: Set<ConfigAnnouncements>;
    /**
     * apiKey to be used for all other requests
     * @type {string}
     * @memberof Config
     */
    apiKey: string;
    /**
     * Game name
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    appName: string;
    /**
     * Build tag of the API server
     * @type {string}
     * @memberof Config
     */
    buildVersionTag: string;
    /**
     * apiKey to be used for all other requests
     * @type {string}
     * @memberof Config
     */
    clientApiKey: string;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    clientBPSCeiling?: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    clientDisconnectTimeout?: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    clientReservedPlayerBPS?: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    clientSentCountAllowance?: number;
    /**
     * VRChat\'s contact email
     * @type {string}
     * @memberof Config
     */
    contactEmail: string;
    /**
     * VRChat\'s copyright-issues-related email
     * @type {string}
     * @memberof Config
     */
    copyrightEmail: string;
    /**
     * Current version number of the Terms of Service
     * @type {number}
     * @memberof Config
     */
    currentTOSVersion: number;
    /**
     * 
     * @type {string}
     * @memberof Config
     */
    defaultAvatar: string;
    /**
     * 
     * @type {DeploymentGroup}
     * @memberof Config
     */
    deploymentGroup: DeploymentGroup;
    /**
     * Version number for game development build
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    devAppVersionStandalone: string;
    /**
     * Developer Download link
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    devDownloadLinkWindows: string;
    /**
     * Link to download the development SDK, use downloadUrls instead
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    devSdkUrl: string;
    /**
     * Version of the development SDK
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    devSdkVersion: string;
    /**
     * Version number for server development build
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    devServerVersionStandalone: string;
    /**
     * Toggles if copying avatars should be disabled
     * @type {boolean}
     * @memberof Config
     */
    disableAvatarCopying: boolean;
    /**
     * Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the `system_avatar_access` Tag or `admin_avatar_access` Tag
     * @type {boolean}
     * @memberof Config
     */
    disableAvatarGating: boolean;
    /**
     * Toggles if the Community Labs should be disabled
     * @type {boolean}
     * @memberof Config
     */
    disableCommunityLabs: boolean;
    /**
     * Toggles if promotion out of Community Labs should be disabled
     * @type {boolean}
     * @memberof Config
     */
    disableCommunityLabsPromotion: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof Config
     */
    disableEmail?: boolean;
    /**
     * Toggles if Analytics should be disabled (this sreportedly not used in the Client)
     * @type {boolean}
     * @memberof Config
     */
    disableEventStream: boolean;
    /**
     * Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the `system_feedback_access` Tag.
     * @type {boolean}
     * @memberof Config
     */
    disableFeedbackGating: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof Config
     */
    disableHello?: boolean;
    /**
     * Toggles if new user account registration should be disabled
     * @type {boolean}
     * @memberof Config
     */
    disableRegistration: boolean;
    /**
     * Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead.
     * @type {boolean}
     * @memberof Config
     */
    disableSteamNetworking: boolean;
    /**
     * Toggles if 2FA should be disabled.
     * @type {boolean}
     * @memberof Config
     * @deprecated
     */
    disableTwoFactorAuth: boolean;
    /**
     * Toggles if Udon should be universally disabled in-game.
     * @type {boolean}
     * @memberof Config
     */
    disableUdon: boolean;
    /**
     * Toggles if account upgrading \"linking with Steam/Oculus\" should be disabled.
     * @type {boolean}
     * @memberof Config
     */
    disableUpgradeAccount: boolean;
    /**
     * Download link for game on the Oculus Rift website.
     * @type {string}
     * @memberof Config
     */
    downloadLinkWindows: string;
    /**
     * 
     * @type {ConfigDownloadUrls}
     * @memberof Config
     */
    downloadUrls: ConfigDownloadUrls;
    /**
     * Array of DynamicWorldRow objects, used by the game to display the list of world rows
     * @type {Set<ConfigDynamicWorldRows>}
     * @memberof Config
     */
    dynamicWorldRows: Set<ConfigDynamicWorldRows>;
    /**
     * 
     * @type {ConfigEvents}
     * @memberof Config
     */
    events: ConfigEvents;
    /**
     * Unknown
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    gearDemoRoomId: string;
    /**
     * Redirect target if you try to open the base API domain in your browser
     * @type {string}
     * @memberof Config
     */
    homepageRedirectTarget: string;
    /**
     * 
     * @type {string}
     * @memberof Config
     */
    homeWorldId: string;
    /**
     * 
     * @type {string}
     * @memberof Config
     */
    hubWorldId: string;
    /**
     * VRChat\'s job application email
     * @type {string}
     * @memberof Config
     */
    jobsEmail: string;
    /**
     * MOTD
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    messageOfTheDay: string;
    /**
     * VRChat\'s moderation related email
     * @type {string}
     * @memberof Config
     */
    moderationEmail: string;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    moderationQueryPeriod: number;
    /**
     * Used in-game to notify a user they aren\'t allowed to select avatars in private worlds
     * @type {string}
     * @memberof Config
     */
    notAllowedToSelectAvatarInPrivateWorldMessage: string;
    /**
     * Extra [plugin](https://doc.photonengine.com/en-us/server/current/plugins/manual) to run in each instance
     * @type {string}
     * @memberof Config
     */
    plugin: string;
    /**
     * Version number for game release build
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    releaseAppVersionStandalone: string;
    /**
     * Link to download the release SDK
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    releaseSdkUrl: string;
    /**
     * Version of the release SDK
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    releaseSdkVersion: string;
    /**
     * Version number for server release build
     * @type {string}
     * @memberof Config
     * @deprecated
     */
    releaseServerVersionStandalone: string;
    /**
     * Link to the developer FAQ
     * @type {string}
     * @memberof Config
     */
    sdkDeveloperFaqUrl: string;
    /**
     * Link to the official VRChat Discord
     * @type {string}
     * @memberof Config
     */
    sdkDiscordUrl: string;
    /**
     * Used in the SDK to notify a user they aren\'t allowed to upload avatars/worlds yet
     * @type {string}
     * @memberof Config
     */
    sdkNotAllowedToPublishMessage: string;
    /**
     * Unity version supported by the SDK
     * @type {string}
     * @memberof Config
     */
    sdkUnityVersion: string;
    /**
     * Server name of the API server currently responding
     * @type {string}
     * @memberof Config
     */
    serverName: string;
    /**
     * VRChat\'s support email
     * @type {string}
     * @memberof Config
     */
    supportEmail: string;
    /**
     * 
     * @type {string}
     * @memberof Config
     */
    timeOutWorldId: string;
    /**
     * 
     * @type {string}
     * @memberof Config
     */
    tutorialWorldId: string;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    updateRateMsMaximum: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    updateRateMsMinimum: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    updateRateMsNormal: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    updateRateMsUdonManual: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    uploadAnalysisPercent: number;
    /**
     * List of allowed URLs that bypass the \"Allow untrusted URL\'s\" setting in-game
     * @type {Array<string>}
     * @memberof Config
     */
    urlList: Array<string>;
    /**
     * Unknown
     * @type {boolean}
     * @memberof Config
     */
    useReliableUdpForVoice: boolean;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    userUpdatePeriod: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    userVerificationDelay: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    userVerificationRetry: number;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    userVerificationTimeout: number;
    /**
     * Download link for game on the Steam website.
     * @type {string}
     * @memberof Config
     */
    viveWindowsUrl: string;
    /**
     * List of allowed URLs that are allowed to host avatar assets
     * @type {Array<string>}
     * @memberof Config
     */
    whiteListedAssetUrls: Array<string>;
    /**
     * Unknown
     * @type {number}
     * @memberof Config
     */
    worldUpdatePeriod: number;
    /**
     * Currently used youtube-dl.exe hash in SHA-256-delimited format
     * @type {string}
     * @memberof Config
     */
    youtubedl_hash: string;
    /**
     * Currently used youtube-dl.exe version
     * @type {string}
     * @memberof Config
     */
    youtubedl_version: string;
}
/**
 * Public Announcement
 * @export
 * @interface ConfigAnnouncements
 */
export interface ConfigAnnouncements {
    /**
     * Announcement name
     * @type {string}
     * @memberof ConfigAnnouncements
     */
    name: string;
    /**
     * Announcement text
     * @type {string}
     * @memberof ConfigAnnouncements
     */
    text: string;
}
/**
 * Download links for various development assets
 * @export
 * @interface ConfigDownloadUrls
 */
export interface ConfigDownloadUrls {
    /**
     * Download link for legacy SDK2
     * @type {string}
     * @memberof ConfigDownloadUrls
     * @deprecated
     */
    sdk2: string;
    /**
     * Download link for SDK3 for Avatars
     * @type {string}
     * @memberof ConfigDownloadUrls
     */
    sdk3_avatars: string;
    /**
     * Download link for SDK3 for Worlds
     * @type {string}
     * @memberof ConfigDownloadUrls
     */
    sdk3_worlds: string;
}
/**
 * 
 * @export
 * @interface ConfigDynamicWorldRows
 */
export interface ConfigDynamicWorldRows {
    /**
     * 
     * @type {number}
     * @memberof ConfigDynamicWorldRows
     */
    index: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigDynamicWorldRows
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDynamicWorldRows
     */
    platform: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDynamicWorldRows
     */
    sortHeading: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDynamicWorldRows
     */
    sortOrder: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDynamicWorldRows
     */
    sortOwnership: string;
    /**
     * Tag to filter worlds for this row
     * @type {string}
     * @memberof ConfigDynamicWorldRows
     */
    tag?: string;
}
/**
 * 
 * @export
 * @interface ConfigEvents
 */
export interface ConfigEvents {
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    distanceClose: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    distanceFactor: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    distanceFar: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    groupDistance: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    maximumBunchSize: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    notVisibleFactor: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    playerOrderBucketSize: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    playerOrderFactor: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    slowUpdateFactorThreshold: number;
    /**
     * Unknown
     * @type {number}
     * @memberof ConfigEvents
     */
    viewSegmentLength: number;
}
/**
 * 
 * @export
 * @interface CurrentUser
 */
export interface CurrentUser {
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    userIcon: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    bio: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    bioLinks: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    profilePicOverride: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    statusDescription: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    pastDisplayNames: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasEmail: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasPendingEmail: boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    obfuscatedEmail: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    obfuscatedPendingEmail: string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    emailVerified: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasBirthday: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    unsubscribe: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    statusHistory: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    statusFirstTime: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    friends: Array<string>;
    /**
     * Always empty array.
     * @type {Array<string>}
     * @memberof CurrentUser
     * @deprecated
     */
    friendGroupNames: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatarImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatarThumbnailImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    fallbackAvatar: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatar: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatarAssetUrl: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    accountDeletionDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CurrentUser
     */
    acceptedTOSVersion: number;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    steamId: string;
    /**
     * 
     * @type {object}
     * @memberof CurrentUser
     */
    steamDetails: object;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    oculusId: string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasLoggedInFromClient: boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    homeLocation: string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    twoFactorAuthEnabled: boolean;
    /**
     * 
     * @type {UserState}
     * @memberof CurrentUser
     */
    state: UserState;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    tags: Array<string>;
    /**
     * 
     * @type {DeveloperType}
     * @memberof CurrentUser
     */
    developerType: DeveloperType;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    last_login: string;
    /**
     * 
     * @type {Platform}
     * @memberof CurrentUser
     */
    last_platform: Platform;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    allowAvatarCopying: boolean;
    /**
     * 
     * @type {UserStatus}
     * @memberof CurrentUser
     */
    status: UserStatus;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    date_joined: string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    isFriend: boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    friendKey: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    onlineFriends?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    activeFriends?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    offlineFriends?: Array<string>;
}
/**
 * Used to identify which API deployment cluster is currently responding.  `blue` and `green` are used by Production. `grape`and `cherry` are used during Development.  [Blue Green Deployment by Martin Fowler](https://martinfowler.com/bliki/BlueGreenDeployment.html)
 * @export
 * @enum {string}
 */

export enum DeploymentGroup {
    Blue = 'blue',
    Green = 'green',
    Grape = 'grape',
    Cherry = 'cherry'
}

/**
 * \"none\" User is a normal user \"trusted\" Unknown \"internal\" Is a VRChat Developer \"moderator\" Is a VRChat Moderator  Staff can hide their developerType at will.
 * @export
 * @enum {string}
 */

export enum DeveloperType {
    None = 'none',
    Trusted = 'trusted',
    Internal = 'internal',
    Moderator = 'moderator'
}

/**
 * 
 * @export
 * @interface Favorite
 */
export interface Favorite {
    /**
     * 
     * @type {string}
     * @memberof Favorite
     */
    id: string;
    /**
     * 
     * @type {FavoriteType}
     * @memberof Favorite
     */
    type: FavoriteType;
    /**
     * MUST be either AvatarID, UserID or WorldID.
     * @type {string}
     * @memberof Favorite
     */
    favoriteId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Favorite
     */
    tags: Array<string>;
}
/**
 * 
 * @export
 * @interface FavoriteGroup
 */
export interface FavoriteGroup {
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    ownerId: string;
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    ownerDisplayName: string;
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    displayName: string;
    /**
     * 
     * @type {FavoriteType}
     * @memberof FavoriteGroup
     */
    type: FavoriteType;
    /**
     * 
     * @type {FavoriteGroupVisibility}
     * @memberof FavoriteGroup
     */
    visibility: FavoriteGroupVisibility;
    /**
     * 
     * @type {Array<string>}
     * @memberof FavoriteGroup
     */
    tags: Array<string>;
}
/**
 * 
 * @export
 * @enum {string}
 */

export enum FavoriteGroupVisibility {
    Private = 'private',
    Friends = 'friends',
    Public = 'public'
}

/**
 * 
 * @export
 * @enum {string}
 */

export enum FavoriteType {
    World = 'world',
    Friend = 'friend',
    Avatar = 'avatar'
}

/**
 * 
 * @export
 * @interface FileData
 */
export interface FileData {
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    fileName: string;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    md5: string;
    /**
     * 
     * @type {number}
     * @memberof FileData
     */
    sizeInBytes: number;
    /**
     * 
     * @type {FileStatus}
     * @memberof FileData
     */
    status: FileStatus;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    category: FileDataCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    uploadId: string;
}

/**
    * @export
    * @enum {string}
    */
export enum FileDataCategoryEnum {
    Multipart = 'multipart',
    Queued = 'queued',
    Simple = 'simple'
}

/**
 * 
 * @export
 * @enum {string}
 */

export enum FileStatus {
    Waiting = 'waiting',
    Complete = 'complete',
    None = 'none'
}

/**
 * 
 * @export
 * @interface FileVersion
 */
export interface FileVersion {
    /**
     * Incremental version counter, can only be increased.
     * @type {number}
     * @memberof FileVersion
     */
    version: number;
    /**
     * 
     * @type {FileStatus}
     * @memberof FileVersion
     */
    status: FileStatus;
    /**
     * 
     * @type {string}
     * @memberof FileVersion
     */
    created_at: string;
    /**
     * 
     * @type {FileData}
     * @memberof FileVersion
     */
    file?: FileData;
    /**
     * 
     * @type {FileData}
     * @memberof FileVersion
     */
    delta?: FileData;
    /**
     * 
     * @type {FileData}
     * @memberof FileVersion
     */
    signature?: FileData;
    /**
     * Usually only present if `true`
     * @type {boolean}
     * @memberof FileVersion
     */
    deleted?: boolean;
}
/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {string}
     * @memberof InlineObject
     */
    code: string;
}
/**
 * 
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject1
     */
    code: string;
}
/**
 * 
 * @export
 * @interface InlineObject10
 */
export interface InlineObject10 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject10
     */
    assetUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject10
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject10
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject10
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineObject10
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InlineObject10
     */
    imageUrl: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof InlineObject10
     */
    releaseStatus?: ReleaseStatus;
    /**
     * 
     * @type {number}
     * @memberof InlineObject10
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject10
     */
    unityPackageUrl?: string;
}
/**
 * 
 * @export
 * @interface InlineObject11
 */
export interface InlineObject11 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject11
     */
    assetUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject11
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject11
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject11
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineObject11
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InlineObject11
     */
    imageUrl?: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof InlineObject11
     */
    releaseStatus?: ReleaseStatus;
    /**
     * 
     * @type {number}
     * @memberof InlineObject11
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject11
     */
    unityPackageUrl?: string;
}
/**
 * 
 * @export
 * @interface InlineObject12
 */
export interface InlineObject12 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject12
     */
    moderated: string;
    /**
     * 
     * @type {PlayerModerationType}
     * @memberof InlineObject12
     */
    type: PlayerModerationType;
}
/**
 * 
 * @export
 * @interface InlineObject13
 */
export interface InlineObject13 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject13
     */
    moderated?: string;
    /**
     * 
     * @type {PlayerModerationType}
     * @memberof InlineObject13
     */
    type: PlayerModerationType;
}
/**
 * 
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject2
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject2
     */
    birthday?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject2
     */
    acceptedTOSVersion?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineObject2
     */
    tags?: Array<string>;
    /**
     * 
     * @type {UserStatus}
     * @memberof InlineObject2
     */
    status?: UserStatus;
    /**
     * 
     * @type {string}
     * @memberof InlineObject2
     */
    statusDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject2
     */
    bio?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineObject2
     */
    bioLinks?: Array<string>;
    /**
     * MUST be a valid VRChat /file/ url.
     * @type {string}
     * @memberof InlineObject2
     */
    userIcon?: string;
}
/**
 * 
 * @export
 * @interface InlineObject3
 */
export interface InlineObject3 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject3
     */
    name: string;
    /**
     * 
     * @type {MIMEType}
     * @memberof InlineObject3
     */
    mimeType: MIMEType;
    /**
     * 
     * @type {string}
     * @memberof InlineObject3
     */
    extension: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineObject3
     */
    tags?: Array<string>;
}
/**
 * 
 * @export
 * @interface InlineObject4
 */
export interface InlineObject4 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject4
     */
    signatureMd5: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject4
     */
    signatureSizeInBytes: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject4
     */
    fileMd5?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject4
     */
    fileSizeInBytes?: number;
}
/**
 * 
 * @export
 * @interface InlineObject5
 */
export interface InlineObject5 {
    /**
     * Array of ETags uploaded.
     * @type {Set<string>}
     * @memberof InlineObject5
     */
    etags?: Set<string>;
    /**
     * Always a zero in string form, despite how many parts uploaded.
     * @type {string}
     * @memberof InlineObject5
     * @deprecated
     */
    nextPartNumber: string;
    /**
     * Always a zero in string form, despite how many parts uploaded.
     * @type {string}
     * @memberof InlineObject5
     * @deprecated
     */
    maxParts: string;
}
/**
 * 
 * @export
 * @interface InlineObject6
 */
export interface InlineObject6 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    assetUrl: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    assetVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    authorId?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    authorName?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject6
     */
    capacity?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    imageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    name: string;
    /**
     * 
     * @type {Platform}
     * @memberof InlineObject6
     */
    platform?: Platform;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof InlineObject6
     */
    releaseStatus?: ReleaseStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineObject6
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    unityPackageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject6
     */
    unityVersion?: string;
}
/**
 * 
 * @export
 * @interface InlineObject7
 */
export interface InlineObject7 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    assetUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    assetVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    authorId?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    authorName?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineObject7
     */
    capacity?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    name?: string;
    /**
     * 
     * @type {Platform}
     * @memberof InlineObject7
     */
    platform?: Platform;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof InlineObject7
     */
    releaseStatus?: ReleaseStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineObject7
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    unityPackageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineObject7
     */
    unityVersion?: string;
}
/**
 * 
 * @export
 * @interface InlineObject8
 */
export interface InlineObject8 {
    /**
     * 
     * @type {FavoriteType}
     * @memberof InlineObject8
     */
    type: FavoriteType;
    /**
     * Must be either AvatarID, WorldID or UserID.
     * @type {string}
     * @memberof InlineObject8
     */
    favoriteId: string;
    /**
     * Tags indicate which group this favorite belongs to. Adding multiple groups makes it show up in all. Removing it from one in that case removes it from all.
     * @type {Array<string>}
     * @memberof InlineObject8
     */
    tags: Array<string>;
}
/**
 * 
 * @export
 * @interface InlineObject9
 */
export interface InlineObject9 {
    /**
     * 
     * @type {string}
     * @memberof InlineObject9
     */
    displayName?: string;
    /**
     * 
     * @type {FavoriteGroupVisibility}
     * @memberof InlineObject9
     */
    visibility?: FavoriteGroupVisibility;
    /**
     * Tags on FavoriteGroups are believed to do nothing.
     * @type {Array<string>}
     * @memberof InlineObject9
     */
    tags?: Array<string>;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse200
     */
    ok: boolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    token: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2001
     */
    verified: boolean;
}
/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2002
     */
    ok: boolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    serverName: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002
     */
    buildVersionTag: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2003
     */
    isFriend: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2003
     */
    outgoingRequest: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2003
     */
    incomingRequest: boolean;
}
/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2004
     */
    uploadId: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2004
     */
    fileName: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004
     */
    nextPartNumber: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2004
     */
    maxParts: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof InlineResponse2004
     */
    parts: Array<object>;
    /**
     * Unknown
     * @type {Array<object>}
     * @memberof InlineResponse2004
     */
    etags: Array<object>;
}
/**
 * 
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2005
     */
    url: string;
}
/**
 * 
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2006
     */
    id: string;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse2006
     */
    metadata: object;
}
/**
 * 
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2007
     */
    canPubilsh: boolean;
}
/**
 * 
 * @export
 * @interface InlineResponse401
 */
export interface InlineResponse401 {
    /**
     * 
     * @type {Error}
     * @memberof InlineResponse401
     */
    error: Error;
}
/**
 * 
 * @export
 * @interface Instance
 */
export interface Instance {
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    active: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    canRequestInvite: boolean;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    capacity: number;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    clientNumber: string;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    full: boolean;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    instanceId: string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    location: string;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    n_users: number;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    nonce?: string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    ownerId: string;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    permanent: boolean;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    photonRegion: string;
    /**
     * 
     * @type {InstancePlatforms}
     * @memberof Instance
     */
    platforms: InstancePlatforms;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    region: string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    shortName: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Instance
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    type: string;
    /**
     * Always empty on non-existing instances, and non-present on existing instances.
     * @type {Array<object>}
     * @memberof Instance
     * @deprecated
     */
    users?: Array<object>;
    /**
     * Only present on non-existing instances, and only contains a very small subject of World object. Use World API instead.
     * @type {object}
     * @memberof Instance
     * @deprecated
     */
    world?: object;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    worldId: string;
}
/**
 * 
 * @export
 * @interface InstancePlatforms
 */
export interface InstancePlatforms {
    /**
     * 
     * @type {number}
     * @memberof InstancePlatforms
     */
    android: number;
    /**
     * 
     * @type {number}
     * @memberof InstancePlatforms
     */
    standalonewindows: number;
}
/**
 * 
 * @export
 * @interface LimitedUnityPackage
 */
export interface LimitedUnityPackage {
    /**
     * 
     * @type {Platform}
     * @memberof LimitedUnityPackage
     */
    platform: Platform;
    /**
     * 
     * @type {string}
     * @memberof LimitedUnityPackage
     */
    unityVersion: string;
}
/**
 * 
 * @export
 * @interface LimitedUser
 */
export interface LimitedUser {
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    bio?: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    userIcon: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    profilePicOverride: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    statusDescription: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    currentAvatarImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    currentAvatarThumbnailImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    fallbackAvatar: string;
    /**
     * 
     * @type {DeveloperType}
     * @memberof LimitedUser
     */
    developerType: DeveloperType;
    /**
     * 
     * @type {Platform}
     * @memberof LimitedUser
     */
    last_platform: Platform;
    /**
     * 
     * @type {UserStatus}
     * @memberof LimitedUser
     */
    status: UserStatus;
    /**
     * 
     * @type {boolean}
     * @memberof LimitedUser
     */
    isFriend: boolean;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    location: string;
    /**
     * <- Always empty.
     * @type {Array<string>}
     * @memberof LimitedUser
     */
    tags: Array<string>;
}
/**
 * 
 * @export
 * @interface LimitedWorld
 */
export interface LimitedWorld {
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    authorId: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    authorName: string;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    capacity: number;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    imageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    thumbnailImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    releaseStatus: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    organization: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LimitedWorld
     */
    tags: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    favorites: number;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    updated_at: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    publicationDate: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    labsPublicationDate: string;
    /**
     * 
     * @type {Array<LimitedUnityPackage>}
     * @memberof LimitedWorld
     */
    unityPackages: Array<LimitedUnityPackage>;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    popularity: number;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    heat: number;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    occupants: number;
}
/**
 * 
 * @export
 * @enum {string}
 */

export enum MIMEType {
    ImageJpeg = 'image/jpeg',
    ImageJpg = 'image/jpg',
    ImagePng = 'image/png',
    ImageWebp = 'image/webp',
    ImageGif = 'image/gif',
    ImageBmp = 'image/bmp',
    ImageSvgxml = 'image/svg＋xml',
    ImageTiff = 'image/tiff',
    ApplicationXAvatar = 'application/x-avatar',
    ApplicationXWorld = 'application/x-world',
    ApplicationGzip = 'application/gzip',
    ApplicationXRsyncSignature = 'application/x-rsync-signature',
    ApplicationXRsyncDelta = 'application/x-rsync-delta',
    ApplicationOctetStream = 'application/octet-stream'
}

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {Response}
     * @memberof ModelError
     */
    error?: Response;
}
/**
 * 
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    ownerId: string;
    /**
     * 
     * @type {MIMEType}
     * @memberof ModelFile
     */
    mimeType: MIMEType;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    extension: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelFile
     */
    tags: Array<string>;
    /**
     * 
     * @type {Set<FileVersion>}
     * @memberof ModelFile
     */
    versions: Set<FileVersion>;
}
/**
 * 
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    senderUserId: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    senderUsername: string;
    /**
     * 
     * @type {NotificationType}
     * @memberof Notification
     */
    type: NotificationType;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    message: string;
    /**
     * **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
     * @type {string}
     * @memberof Notification
     */
    details: string;
    /**
     * 
     * @type {boolean}
     * @memberof Notification
     */
    seen: boolean;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    created_at: string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export enum NotificationType {
    All = 'all',
    Broadcast = 'broadcast',
    FriendRequest = 'friendRequest',
    Invite = 'invite',
    Message = 'message',
    RequestInvite = 'RequestInvite',
    Votetokick = 'votetokick'
}

/**
 * 
 * @export
 * @enum {string}
 */

export enum Platform {
    Standalonewindows = 'standalonewindows',
    Android = 'android'
}

/**
 * 
 * @export
 * @interface PlayerModeration
 */
export interface PlayerModeration {
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    id: string;
    /**
     * 
     * @type {PlayerModerationType}
     * @memberof PlayerModeration
     */
    type: PlayerModerationType;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    sourceUserId: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    sourceDisplayName: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    targetUserId: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    targetDisplayName: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    created: string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export enum PlayerModerationType {
    Mute = 'mute',
    Unmute = 'unmute',
    Block = 'block',
    Unblock = 'unblock',
    HideAvatar = 'hideAvatar',
    ShowAvatar = 'showAvatar'
}

/**
 * 
 * @export
 * @enum {string}
 */

export enum ReleaseStatus {
    Public = 'public',
    Private = 'private',
    Hidden = 'hidden'
}

/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof Response
     */
    status_code: number;
}
/**
 * 
 * @export
 * @interface Success
 */
export interface Success {
    /**
     * 
     * @type {Response}
     * @memberof Success
     */
    success?: Response;
}
/**
 * 
 * @export
 * @interface UnityPackage
 */
export interface UnityPackage {
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    assetUrl?: string;
    /**
     * 
     * @type {object}
     * @memberof UnityPackage
     */
    assetUrlObject?: object;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    pluginUrl?: string;
    /**
     * 
     * @type {object}
     * @memberof UnityPackage
     */
    pluginUrlObject?: object;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    unityVersion: string;
    /**
     * 
     * @type {number}
     * @memberof UnityPackage
     */
    unitySortNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof UnityPackage
     */
    assetVersion: number;
    /**
     * 
     * @type {Platform}
     * @memberof UnityPackage
     */
    platform: Platform;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    created_at?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userIcon: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    bio: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    bioLinks: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profilePicOverride: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    statusDescription: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    currentAvatarImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    currentAvatarThumbnailImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    fallbackAvatar: string;
    /**
     * 
     * @type {UserState}
     * @memberof User
     */
    state: UserState;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    tags: Array<string>;
    /**
     * 
     * @type {DeveloperType}
     * @memberof User
     */
    developerType: DeveloperType;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    last_login: string;
    /**
     * 
     * @type {Platform}
     * @memberof User
     */
    last_platform: Platform;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    allowAvatarCopying: boolean;
    /**
     * 
     * @type {UserStatus}
     * @memberof User
     */
    status: UserStatus;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    date_joined: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    isFriend: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    friendKey: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    worldId: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    instanceId: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    location: string;
}
/**
 * * \"online\" User is online in VRChat * \"active\" User is online, but not in VRChat * \"offline\" User is offline  Always offline when returned through `getCurrentUser` (/auth/user).
 * @export
 * @enum {string}
 */

export enum UserState {
    Offline = 'offline',
    Active = 'active',
    Online = 'online'
}

/**
 * Defines the User\'s current status, for example \"ask me\", \"join me\" or \"offline. This status is a combined indicator of their online activity and privacy preference.
 * @export
 * @enum {string}
 */

export enum UserStatus {
    Active = 'active',
    JoinMe = 'join me',
    AskMe = 'ask me',
    Busy = 'busy',
    Offline = 'offline'
}

/**
 * 
 * @export
 * @interface World
 */
export interface World {
    /**
     * 
     * @type {string}
     * @memberof World
     */
    assetUrl: string;
    /**
     * 
     * @type {object}
     * @memberof World
     */
    assetUrlObject: object;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    authorId: string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    authorName: string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    capacity: number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    favorites?: number;
    /**
     * 
     * @type {boolean}
     * @memberof World
     */
    featured: boolean;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    heat: number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    imageUrl: string;
    /**
     * 
     * @type {Array<Array<object>>}
     * @memberof World
     */
    instances?: Array<Array<object>>;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    labsPublicationDate: string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    namespace: string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    occupants?: number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    organization: string;
    /**
     * 
     * @type {object}
     * @memberof World
     */
    pluginUrlObject: object;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    popularity: number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    previewYoutubeId?: string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    privateOccupants?: number;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    publicOccupants?: number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    publicationDate: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof World
     */
    releaseStatus: ReleaseStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof World
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    thumbnailImageUrl: string;
    /**
     * 
     * @type {object}
     * @memberof World
     */
    unityPackageUrlObject: object;
    /**
     * 
     * @type {Array<UnityPackage>}
     * @memberof World
     */
    unityPackages: Array<UnityPackage>;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    updated_at: string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    version: number;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    visits: number;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
         * @summary Delete User
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteUser', 'userId', userId)
            const localVarPath = `/user/{userId}/delete`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Login and/or Get user data from your VRChat account.  If `Authorization` header is present then a new login session will be generated, and a new `auth` cookie is returned.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.
         * @summary Login and/or Get Current User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required

            // authentication authHeader required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication twoFactorAuthCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invalidates the auth cookie.
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verify2FA: async (inlineObject?: InlineObject, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/twofactorauth/totp/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Verify whether the currently provided Auth Token is valid.
         * @summary Verify Auth Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAuthToken: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code with Recovery code
         * @param {InlineObject1} [inlineObject1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyRecoveryCode: async (inlineObject1?: InlineObject1, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/twofactorauth/otp/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
         * @summary Delete User
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Login and/or Get user data from your VRChat account.  If `Authorization` header is present then a new login session will be generated, and a new `auth` cookie is returned.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.
         * @summary Login and/or Get Current User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invalidates the auth cookie.
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verify2FA(inlineObject?: InlineObject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verify2FA(inlineObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Verify whether the currently provided Auth Token is valid.
         * @summary Verify Auth Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyAuthToken(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyAuthToken(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code with Recovery code
         * @param {InlineObject1} [inlineObject1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyRecoveryCode(inlineObject1?: InlineObject1, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyRecoveryCode(inlineObject1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
         * @summary Delete User
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(userId: string, options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.deleteUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Login and/or Get user data from your VRChat account.  If `Authorization` header is present then a new login session will be generated, and a new `auth` cookie is returned.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.
         * @summary Login and/or Get Current User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser(options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.getCurrentUser(options).then((request) => request(axios, basePath));
        },
        /**
         * Invalidates the auth cookie.
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(options?: any): AxiosPromise<Success> {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verify2FA(inlineObject?: InlineObject, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.verify2FA(inlineObject, options).then((request) => request(axios, basePath));
        },
        /**
         * Verify whether the currently provided Auth Token is valid.
         * @summary Verify Auth Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAuthToken(options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.verifyAuthToken(options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code with Recovery code
         * @param {InlineObject1} [inlineObject1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyRecoveryCode(inlineObject1?: InlineObject1, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.verifyRecoveryCode(inlineObject1, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
     * @summary Delete User
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public deleteUser(userId: string, options?: any) {
        return AuthenticationApiFp(this.configuration).deleteUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Login and/or Get user data from your VRChat account.  If `Authorization` header is present then a new login session will be generated, and a new `auth` cookie is returned.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.
     * @summary Login and/or Get Current User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public getCurrentUser(options?: any) {
        return AuthenticationApiFp(this.configuration).getCurrentUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invalidates the auth cookie.
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public logout(options?: any) {
        return AuthenticationApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
     * @summary Verify 2FA code
     * @param {InlineObject} [inlineObject] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public verify2FA(inlineObject?: InlineObject, options?: any) {
        return AuthenticationApiFp(this.configuration).verify2FA(inlineObject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Verify whether the currently provided Auth Token is valid.
     * @summary Verify Auth Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public verifyAuthToken(options?: any) {
        return AuthenticationApiFp(this.configuration).verifyAuthToken(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
     * @summary Verify 2FA code with Recovery code
     * @param {InlineObject1} [inlineObject1] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public verifyRecoveryCode(inlineObject1?: InlineObject1, options?: any) {
        return AuthenticationApiFp(this.configuration).verifyRecoveryCode(inlineObject1, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AvatarsApi - axios parameter creator
 * @export
 */
export const AvatarsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
         * @summary Create Avatar
         * @param {InlineObject10} [inlineObject10] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAvatar: async (inlineObject10?: InlineObject10, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/avatars`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject10, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
         * @summary Delete Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAvatar: async (avatarId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('deleteAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific Avatar.
         * @summary Get Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvatar: async (avatarId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('getAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list favorited avatars by query filters.
         * @summary List Favorited Avatars
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedAvatars: async (featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/avatars/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
         * @summary Search Avatars
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
         * @param {string} [userId] Filter by author UserID
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchAvatars: async (featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/avatars`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Switches into that avatar.
         * @summary Select Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        selectAvatar: async (avatarId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('selectAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}/select`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update information about a specific avatar.
         * @summary Update Avatar
         * @param {string} avatarId 
         * @param {InlineObject11} [inlineObject11] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAvatar: async (avatarId: string, inlineObject11?: InlineObject11, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('updateAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject11, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AvatarsApi - functional programming interface
 * @export
 */
export const AvatarsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AvatarsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
         * @summary Create Avatar
         * @param {InlineObject10} [inlineObject10] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAvatar(inlineObject10?: InlineObject10, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAvatar(inlineObject10, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
         * @summary Delete Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAvatar(avatarId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAvatar(avatarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get information about a specific Avatar.
         * @summary Get Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAvatar(avatarId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAvatar(avatarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list favorited avatars by query filters.
         * @summary List Favorited Avatars
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoritedAvatars(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritedAvatars(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
         * @summary Search Avatars
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
         * @param {string} [userId] Filter by author UserID
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchAvatars(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Avatar>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchAvatars(featured, sort, user, userId, n, order, offset, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Switches into that avatar.
         * @summary Select Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async selectAvatar(avatarId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.selectAvatar(avatarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update information about a specific avatar.
         * @summary Update Avatar
         * @param {string} avatarId 
         * @param {InlineObject11} [inlineObject11] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAvatar(avatarId: string, inlineObject11?: InlineObject11, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAvatar(avatarId, inlineObject11, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AvatarsApi - factory interface
 * @export
 */
export const AvatarsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AvatarsApiFp(configuration)
    return {
        /**
         * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
         * @summary Create Avatar
         * @param {InlineObject10} [inlineObject10] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAvatar(inlineObject10?: InlineObject10, options?: any): AxiosPromise<Avatar> {
            return localVarFp.createAvatar(inlineObject10, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
         * @summary Delete Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAvatar(avatarId: string, options?: any): AxiosPromise<Avatar> {
            return localVarFp.deleteAvatar(avatarId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific Avatar.
         * @summary Get Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvatar(avatarId: string, options?: any): AxiosPromise<Avatar> {
            return localVarFp.getAvatar(avatarId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list favorited avatars by query filters.
         * @summary List Favorited Avatars
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedAvatars(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getFavoritedAvatars(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
         * @summary Search Avatars
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
         * @param {string} [userId] Filter by author UserID
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchAvatars(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): AxiosPromise<Array<Avatar>> {
            return localVarFp.searchAvatars(featured, sort, user, userId, n, order, offset, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches into that avatar.
         * @summary Select Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        selectAvatar(avatarId: string, options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.selectAvatar(avatarId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update information about a specific avatar.
         * @summary Update Avatar
         * @param {string} avatarId 
         * @param {InlineObject11} [inlineObject11] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAvatar(avatarId: string, inlineObject11?: InlineObject11, options?: any): AxiosPromise<Avatar> {
            return localVarFp.updateAvatar(avatarId, inlineObject11, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AvatarsApi - object-oriented interface
 * @export
 * @class AvatarsApi
 * @extends {BaseAPI}
 */
export class AvatarsApi extends BaseAPI {
    /**
     * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
     * @summary Create Avatar
     * @param {InlineObject10} [inlineObject10] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public createAvatar(inlineObject10?: InlineObject10, options?: any) {
        return AvatarsApiFp(this.configuration).createAvatar(inlineObject10, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
     * @summary Delete Avatar
     * @param {string} avatarId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public deleteAvatar(avatarId: string, options?: any) {
        return AvatarsApiFp(this.configuration).deleteAvatar(avatarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about a specific Avatar.
     * @summary Get Avatar
     * @param {string} avatarId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public getAvatar(avatarId: string, options?: any) {
        return AvatarsApiFp(this.configuration).getAvatar(avatarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list favorited avatars by query filters.
     * @summary List Favorited Avatars
     * @param {string} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated).
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {string} [userId] Target user to see information on, admin-only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public getFavoritedAvatars(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any) {
        return AvatarsApiFp(this.configuration).getFavoritedAvatars(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
     * @summary Search Avatars
     * @param {string} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
     * @param {string} [userId] Filter by author UserID
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [tag] Tags to include (comma-separated).
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public searchAvatars(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any) {
        return AvatarsApiFp(this.configuration).searchAvatars(featured, sort, user, userId, n, order, offset, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches into that avatar.
     * @summary Select Avatar
     * @param {string} avatarId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public selectAvatar(avatarId: string, options?: any) {
        return AvatarsApiFp(this.configuration).selectAvatar(avatarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update information about a specific avatar.
     * @summary Update Avatar
     * @param {string} avatarId 
     * @param {InlineObject11} [inlineObject11] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public updateAvatar(avatarId: string, inlineObject11?: InlineObject11, options?: any) {
        return AvatarsApiFp(this.configuration).updateAvatar(avatarId, inlineObject11, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FavoritesApi - axios parameter creator
 * @export
 */
export const FavoritesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatar4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
         * @summary Add Favorite
         * @param {InlineObject8} [inlineObject8] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavorite: async (inlineObject8?: InlineObject8, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject8, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Clear ALL contents of a specific favorite group.
         * @summary Clear Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearFavoriteGroup: async (favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteGroupType' is not null or undefined
            assertParamExists('clearFavoriteGroup', 'favoriteGroupType', favoriteGroupType)
            // verify required parameter 'favoriteGroupName' is not null or undefined
            assertParamExists('clearFavoriteGroup', 'favoriteGroupName', favoriteGroupName)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('clearFavoriteGroup', 'userId', userId)
            const localVarPath = `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`
                .replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(favoriteGroupType)))
                .replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(favoriteGroupName)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return information about a specific Favorite.
         * @summary Show Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorite: async (favoriteId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteId' is not null or undefined
            assertParamExists('getFavorite', 'favoriteId', favoriteId)
            const localVarPath = `/favorites/{favoriteId}`
                .replace(`{${"favoriteId"}}`, encodeURIComponent(String(favoriteId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch information about a specific favorite group.
         * @summary Show Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroup: async (favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteGroupType' is not null or undefined
            assertParamExists('getFavoriteGroup', 'favoriteGroupType', favoriteGroupType)
            // verify required parameter 'favoriteGroupName' is not null or undefined
            assertParamExists('getFavoriteGroup', 'favoriteGroupName', favoriteGroupName)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getFavoriteGroup', 'userId', userId)
            const localVarPath = `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`
                .replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(favoriteGroupType)))
                .replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(favoriteGroupName)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
         * @summary List Favorite Groups
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroups: async (n?: number, offset?: number, ownerId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorite/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (ownerId !== undefined) {
                localVarQueryParameter['ownerId'] = ownerId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of favorites.
         * @summary List Favorites
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [type] The type of favorites to return, FavoriteType.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorites: async (n?: number, offset?: number, type?: string, tag?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Remove a favorite from your favorites list.
         * @summary Remove Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFavorite: async (favoriteId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteId' is not null or undefined
            assertParamExists('removeFavorite', 'favoriteId', favoriteId)
            const localVarPath = `/favorites/{favoriteId}`
                .replace(`{${"favoriteId"}}`, encodeURIComponent(String(favoriteId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update information about a specific favorite group.
         * @summary Update Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {InlineObject9} [inlineObject9] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFavoriteGroup: async (favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, inlineObject9?: InlineObject9, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteGroupType' is not null or undefined
            assertParamExists('updateFavoriteGroup', 'favoriteGroupType', favoriteGroupType)
            // verify required parameter 'favoriteGroupName' is not null or undefined
            assertParamExists('updateFavoriteGroup', 'favoriteGroupName', favoriteGroupName)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateFavoriteGroup', 'userId', userId)
            const localVarPath = `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`
                .replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(favoriteGroupType)))
                .replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(favoriteGroupName)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject9, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FavoritesApi - functional programming interface
 * @export
 */
export const FavoritesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FavoritesApiAxiosParamCreator(configuration)
    return {
        /**
         * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatar4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
         * @summary Add Favorite
         * @param {InlineObject8} [inlineObject8] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFavorite(inlineObject8?: InlineObject8, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Favorite>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFavorite(inlineObject8, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Clear ALL contents of a specific favorite group.
         * @summary Clear Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clearFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clearFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return information about a specific Favorite.
         * @summary Show Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavorite(favoriteId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Favorite>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavorite(favoriteId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch information about a specific favorite group.
         * @summary Show Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FavoriteGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
         * @summary List Favorite Groups
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoriteGroups(n?: number, offset?: number, ownerId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FavoriteGroup>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoriteGroups(n, offset, ownerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of favorites.
         * @summary List Favorites
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [type] The type of favorites to return, FavoriteType.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavorites(n?: number, offset?: number, type?: string, tag?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Favorite>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavorites(n, offset, type, tag, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Remove a favorite from your favorites list.
         * @summary Remove Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFavorite(favoriteId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFavorite(favoriteId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update information about a specific favorite group.
         * @summary Update Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {InlineObject9} [inlineObject9] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, inlineObject9?: InlineObject9, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, inlineObject9, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FavoritesApi - factory interface
 * @export
 */
export const FavoritesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FavoritesApiFp(configuration)
    return {
        /**
         * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatar4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
         * @summary Add Favorite
         * @param {InlineObject8} [inlineObject8] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavorite(inlineObject8?: InlineObject8, options?: any): AxiosPromise<Favorite> {
            return localVarFp.addFavorite(inlineObject8, options).then((request) => request(axios, basePath));
        },
        /**
         * Clear ALL contents of a specific favorite group.
         * @summary Clear Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any): AxiosPromise<Error> {
            return localVarFp.clearFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return information about a specific Favorite.
         * @summary Show Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorite(favoriteId: string, options?: any): AxiosPromise<Favorite> {
            return localVarFp.getFavorite(favoriteId, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch information about a specific favorite group.
         * @summary Show Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any): AxiosPromise<FavoriteGroup> {
            return localVarFp.getFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
         * @summary List Favorite Groups
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroups(n?: number, offset?: number, ownerId?: string, options?: any): AxiosPromise<Array<FavoriteGroup>> {
            return localVarFp.getFavoriteGroups(n, offset, ownerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of favorites.
         * @summary List Favorites
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [type] The type of favorites to return, FavoriteType.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorites(n?: number, offset?: number, type?: string, tag?: string, options?: any): AxiosPromise<Array<Favorite>> {
            return localVarFp.getFavorites(n, offset, type, tag, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove a favorite from your favorites list.
         * @summary Remove Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFavorite(favoriteId: string, options?: any): AxiosPromise<Error> {
            return localVarFp.removeFavorite(favoriteId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update information about a specific favorite group.
         * @summary Update Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {InlineObject9} [inlineObject9] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, inlineObject9?: InlineObject9, options?: any): AxiosPromise<void> {
            return localVarFp.updateFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, inlineObject9, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FavoritesApi - object-oriented interface
 * @export
 * @class FavoritesApi
 * @extends {BaseAPI}
 */
export class FavoritesApi extends BaseAPI {
    /**
     * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatar4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
     * @summary Add Favorite
     * @param {InlineObject8} [inlineObject8] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public addFavorite(inlineObject8?: InlineObject8, options?: any) {
        return FavoritesApiFp(this.configuration).addFavorite(inlineObject8, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Clear ALL contents of a specific favorite group.
     * @summary Clear Favorite Group
     * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
     * @param {string} favoriteGroupName 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public clearFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any) {
        return FavoritesApiFp(this.configuration).clearFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return information about a specific Favorite.
     * @summary Show Favorite
     * @param {string} favoriteId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavorite(favoriteId: string, options?: any) {
        return FavoritesApiFp(this.configuration).getFavorite(favoriteId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch information about a specific favorite group.
     * @summary Show Favorite Group
     * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
     * @param {string} favoriteGroupName 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any) {
        return FavoritesApiFp(this.configuration).getFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
     * @summary List Favorite Groups
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavoriteGroups(n?: number, offset?: number, ownerId?: string, options?: any) {
        return FavoritesApiFp(this.configuration).getFavoriteGroups(n, offset, ownerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of favorites.
     * @summary List Favorites
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [type] The type of favorites to return, FavoriteType.
     * @param {string} [tag] Tags to include (comma-separated).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavorites(n?: number, offset?: number, type?: string, tag?: string, options?: any) {
        return FavoritesApiFp(this.configuration).getFavorites(n, offset, type, tag, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Remove a favorite from your favorites list.
     * @summary Remove Favorite
     * @param {string} favoriteId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public removeFavorite(favoriteId: string, options?: any) {
        return FavoritesApiFp(this.configuration).removeFavorite(favoriteId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update information about a specific favorite group.
     * @summary Update Favorite Group
     * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
     * @param {string} favoriteGroupName 
     * @param {string} userId 
     * @param {InlineObject9} [inlineObject9] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public updateFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, inlineObject9?: InlineObject9, options?: any) {
        return FavoritesApiFp(this.configuration).updateFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, inlineObject9, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FilesApi - axios parameter creator
 * @export
 */
export const FilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new File object
         * @summary Create File
         * @param {InlineObject3} [inlineObject3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFile: async (inlineObject3?: InlineObject3, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/file`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject3, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
         * @summary Create File Version
         * @param {string} fileId 
         * @param {InlineObject4} [inlineObject4] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFileVersion: async (fileId: string, inlineObject4?: InlineObject4, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('createFileVersion', 'fileId', fileId)
            const localVarPath = `/file/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject4, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a File object.
         * @summary Delete File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFile: async (fileId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('deleteFile', 'fileId', fileId)
            const localVarPath = `/file/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a specific version of a file. You can only delete the latest version.
         * @summary Delete File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFileVersion: async (fileId: string, versionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('deleteFileVersion', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('deleteFileVersion', 'versionId', versionId)
            const localVarPath = `/file/{fileId}/{versionId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
         * @summary Download File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileVersion: async (fileId: string, versionId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('downloadFileVersion', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('downloadFileVersion', 'versionId', versionId)
            const localVarPath = `/file/{fileId}/{versionId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
         * @summary Finish FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {InlineObject5} [inlineObject5] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        finishFileDataUpload: async (fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', inlineObject5?: InlineObject5, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('finishFileDataUpload', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('finishFileDataUpload', 'versionId', versionId)
            // verify required parameter 'fileType' is not null or undefined
            assertParamExists('finishFileDataUpload', 'fileType', fileType)
            const localVarPath = `/file/{fileId}/{versionId}/{fileType}/finish`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
                .replace(`{${"fileType"}}`, encodeURIComponent(String(fileType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject5, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
         * @summary Show File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: async (fileId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFile', 'fileId', fileId)
            const localVarPath = `/file/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
         * @summary Check FileData Upload Status
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileDataUploadStatus: async (fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFileDataUploadStatus', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getFileDataUploadStatus', 'versionId', versionId)
            // verify required parameter 'fileType' is not null or undefined
            assertParamExists('getFileDataUploadStatus', 'fileType', fileType)
            const localVarPath = `/file/{fileId}/{versionId}/{fileType}/status`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
                .replace(`{${"fileType"}}`, encodeURIComponent(String(fileType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of files
         * @summary List Files
         * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
         * @param {string} [userId] UserID, will always generate a 500 permission error.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiles: async (tag?: string, userId?: string, n?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/files`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
         * @summary Start FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {number} partNumber 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startFileDataUpload: async (fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('startFileDataUpload', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('startFileDataUpload', 'versionId', versionId)
            // verify required parameter 'fileType' is not null or undefined
            assertParamExists('startFileDataUpload', 'fileType', fileType)
            // verify required parameter 'partNumber' is not null or undefined
            assertParamExists('startFileDataUpload', 'partNumber', partNumber)
            const localVarPath = `/file/{fileId}/{versionId}/{fileType}/start`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
                .replace(`{${"fileType"}}`, encodeURIComponent(String(fileType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (partNumber !== undefined) {
                localVarQueryParameter['partNumber'] = partNumber;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesApi - functional programming interface
 * @export
 */
export const FilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new File object
         * @summary Create File
         * @param {InlineObject3} [inlineObject3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFile(inlineObject3?: InlineObject3, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFile(inlineObject3, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
         * @summary Create File Version
         * @param {string} fileId 
         * @param {InlineObject4} [inlineObject4] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFileVersion(fileId: string, inlineObject4?: InlineObject4, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFileVersion(fileId, inlineObject4, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a File object.
         * @summary Delete File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFile(fileId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFile(fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a specific version of a file. You can only delete the latest version.
         * @summary Delete File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFileVersion(fileId: string, versionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFileVersion(fileId, versionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
         * @summary Download File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadFileVersion(fileId: string, versionId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadFileVersion(fileId, versionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
         * @summary Finish FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {InlineObject5} [inlineObject5] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async finishFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', inlineObject5?: InlineObject5, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.finishFileDataUpload(fileId, versionId, fileType, inlineObject5, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
         * @summary Show File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFile(fileId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFile(fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
         * @summary Check FileData Upload Status
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFileDataUploadStatus(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2004>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileDataUploadStatus(fileId, versionId, fileType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of files
         * @summary List Files
         * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
         * @param {string} [userId] UserID, will always generate a 500 permission error.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFiles(tag?: string, userId?: string, n?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<any>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFiles(tag, userId, n, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
         * @summary Start FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {number} partNumber 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2005>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startFileDataUpload(fileId, versionId, fileType, partNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FilesApi - factory interface
 * @export
 */
export const FilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesApiFp(configuration)
    return {
        /**
         * Creates a new File object
         * @summary Create File
         * @param {InlineObject3} [inlineObject3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFile(inlineObject3?: InlineObject3, options?: any): AxiosPromise<any> {
            return localVarFp.createFile(inlineObject3, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
         * @summary Create File Version
         * @param {string} fileId 
         * @param {InlineObject4} [inlineObject4] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFileVersion(fileId: string, inlineObject4?: InlineObject4, options?: any): AxiosPromise<any> {
            return localVarFp.createFileVersion(fileId, inlineObject4, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a File object.
         * @summary Delete File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFile(fileId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.deleteFile(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a specific version of a file. You can only delete the latest version.
         * @summary Delete File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFileVersion(fileId: string, versionId: number, options?: any): AxiosPromise<any> {
            return localVarFp.deleteFileVersion(fileId, versionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
         * @summary Download File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileVersion(fileId: string, versionId: number, options?: any): AxiosPromise<void> {
            return localVarFp.downloadFileVersion(fileId, versionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
         * @summary Finish FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {InlineObject5} [inlineObject5] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        finishFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', inlineObject5?: InlineObject5, options?: any): AxiosPromise<any> {
            return localVarFp.finishFileDataUpload(fileId, versionId, fileType, inlineObject5, options).then((request) => request(axios, basePath));
        },
        /**
         * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
         * @summary Show File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile(fileId: string, options?: any): AxiosPromise<any> {
            return localVarFp.getFile(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
         * @summary Check FileData Upload Status
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileDataUploadStatus(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options?: any): AxiosPromise<InlineResponse2004> {
            return localVarFp.getFileDataUploadStatus(fileId, versionId, fileType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of files
         * @summary List Files
         * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
         * @param {string} [userId] UserID, will always generate a 500 permission error.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiles(tag?: string, userId?: string, n?: number, offset?: number, options?: any): AxiosPromise<Array<any>> {
            return localVarFp.getFiles(tag, userId, n, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
         * @summary Start FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {number} partNumber 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber: number, options?: any): AxiosPromise<InlineResponse2005> {
            return localVarFp.startFileDataUpload(fileId, versionId, fileType, partNumber, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export class FilesApi extends BaseAPI {
    /**
     * Creates a new File object
     * @summary Create File
     * @param {InlineObject3} [inlineObject3] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFile(inlineObject3?: InlineObject3, options?: any) {
        return FilesApiFp(this.configuration).createFile(inlineObject3, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
     * @summary Create File Version
     * @param {string} fileId 
     * @param {InlineObject4} [inlineObject4] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFileVersion(fileId: string, inlineObject4?: InlineObject4, options?: any) {
        return FilesApiFp(this.configuration).createFileVersion(fileId, inlineObject4, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a File object.
     * @summary Delete File
     * @param {string} fileId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteFile(fileId: string, options?: any) {
        return FilesApiFp(this.configuration).deleteFile(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a specific version of a file. You can only delete the latest version.
     * @summary Delete File Version
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteFileVersion(fileId: string, versionId: number, options?: any) {
        return FilesApiFp(this.configuration).deleteFileVersion(fileId, versionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
     * @summary Download File Version
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public downloadFileVersion(fileId: string, versionId: number, options?: any) {
        return FilesApiFp(this.configuration).downloadFileVersion(fileId, versionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
     * @summary Finish FileData Upload
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {'file' | 'signature' | 'delta'} fileType 
     * @param {InlineObject5} [inlineObject5] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public finishFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', inlineObject5?: InlineObject5, options?: any) {
        return FilesApiFp(this.configuration).finishFileDataUpload(fileId, versionId, fileType, inlineObject5, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
     * @summary Show File
     * @param {string} fileId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFile(fileId: string, options?: any) {
        return FilesApiFp(this.configuration).getFile(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
     * @summary Check FileData Upload Status
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {'file' | 'signature' | 'delta'} fileType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileDataUploadStatus(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options?: any) {
        return FilesApiFp(this.configuration).getFileDataUploadStatus(fileId, versionId, fileType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of files
     * @summary List Files
     * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
     * @param {string} [userId] UserID, will always generate a 500 permission error.
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFiles(tag?: string, userId?: string, n?: number, offset?: number, options?: any) {
        return FilesApiFp(this.configuration).getFiles(tag, userId, n, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
     * @summary Start FileData Upload
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {'file' | 'signature' | 'delta'} fileType 
     * @param {number} partNumber 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public startFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber: number, options?: any) {
        return FilesApiFp(this.configuration).startFileDataUpload(fileId, versionId, fileType, partNumber, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FriendsApi - axios parameter creator
 * @export
 */
export const FriendsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
         * @summary Delete Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFriendRequest: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteFriendRequest', 'userId', userId)
            const localVarPath = `/user/{userId}/friendRequest`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Send a friend request to another user.
         * @summary Send Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        friend: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('friend', 'userId', userId)
            const localVarPath = `/user/{userId}/friendRequest`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
         * @summary Check Friend Status
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriendStatus: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getFriendStatus', 'userId', userId)
            const localVarPath = `/user/{userId}/friendStatus`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List information about friends.
         * @summary List Friends
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriends: async (offset?: number, n?: number, offline?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/friends`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offline !== undefined) {
                localVarQueryParameter['offline'] = offline;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unfriend a user by ID.
         * @summary Unfriend
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfriend: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('unfriend', 'userId', userId)
            const localVarPath = `/auth/user/friends/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FriendsApi - functional programming interface
 * @export
 */
export const FriendsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FriendsApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
         * @summary Delete Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFriendRequest(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFriendRequest(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Send a friend request to another user.
         * @summary Send Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async friend(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.friend(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
         * @summary Check Friend Status
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFriendStatus(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFriendStatus(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List information about friends.
         * @summary List Friends
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFriends(offset?: number, n?: number, offline?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedUser>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFriends(offset, n, offline, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unfriend a user by ID.
         * @summary Unfriend
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unfriend(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unfriend(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FriendsApi - factory interface
 * @export
 */
export const FriendsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FriendsApiFp(configuration)
    return {
        /**
         * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
         * @summary Delete Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFriendRequest(userId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.deleteFriendRequest(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Send a friend request to another user.
         * @summary Send Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        friend(userId: string, options?: any): AxiosPromise<Notification> {
            return localVarFp.friend(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
         * @summary Check Friend Status
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriendStatus(userId: string, options?: any): AxiosPromise<InlineResponse2003> {
            return localVarFp.getFriendStatus(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * List information about friends.
         * @summary List Friends
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriends(offset?: number, n?: number, offline?: boolean, options?: any): AxiosPromise<Array<LimitedUser>> {
            return localVarFp.getFriends(offset, n, offline, options).then((request) => request(axios, basePath));
        },
        /**
         * Unfriend a user by ID.
         * @summary Unfriend
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfriend(userId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.unfriend(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FriendsApi - object-oriented interface
 * @export
 * @class FriendsApi
 * @extends {BaseAPI}
 */
export class FriendsApi extends BaseAPI {
    /**
     * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
     * @summary Delete Friend Request
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public deleteFriendRequest(userId: string, options?: any) {
        return FriendsApiFp(this.configuration).deleteFriendRequest(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Send a friend request to another user.
     * @summary Send Friend Request
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public friend(userId: string, options?: any) {
        return FriendsApiFp(this.configuration).friend(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
     * @summary Check Friend Status
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public getFriendStatus(userId: string, options?: any) {
        return FriendsApiFp(this.configuration).getFriendStatus(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List information about friends.
     * @summary List Friends
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {number} [n] The number of objects to return.
     * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public getFriends(offset?: number, n?: number, offline?: boolean, options?: any) {
        return FriendsApiFp(this.configuration).getFriends(offset, n, offline, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unfriend a user by ID.
     * @summary Unfriend
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public unfriend(userId: string, options?: any) {
        return FriendsApiFp(this.configuration).unfriend(userId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
         * @summary Accept Friend Request
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        acceptFriendRequest: async (notificationId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationId' is not null or undefined
            assertParamExists('acceptFriendRequest', 'notificationId', notificationId)
            const localVarPath = `/auth/user/notifications/{notificationId}/accept`
                .replace(`{${"notificationId"}}`, encodeURIComponent(String(notificationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Clear **all** notifications.
         * @summary Clear All Notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearNotifications: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/notifications/clear`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a notification.
         * @summary Delete Notification
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotification: async (notificationId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationId' is not null or undefined
            assertParamExists('deleteNotification', 'notificationId', notificationId)
            const localVarPath = `/auth/user/notifications/{notificationId}/hide`
                .replace(`{${"notificationId"}}`, encodeURIComponent(String(notificationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve all of the current user\'s notifications.
         * @summary List Notifications
         * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
         * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
         * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
         * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications: async (type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/notifications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (sent !== undefined) {
                localVarQueryParameter['sent'] = sent;
            }

            if (hidden !== undefined) {
                localVarQueryParameter['hidden'] = hidden;
            }

            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Mark a notification as seen.
         * @summary Mark As Read
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationAsRead: async (notificationId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationId' is not null or undefined
            assertParamExists('markNotificationAsRead', 'notificationId', notificationId)
            const localVarPath = `/auth/user/notifications/{notificationId}/see`
                .replace(`{${"notificationId"}}`, encodeURIComponent(String(notificationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
         * @summary Accept Friend Request
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async acceptFriendRequest(notificationId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.acceptFriendRequest(notificationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Clear **all** notifications.
         * @summary Clear All Notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clearNotifications(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clearNotifications(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a notification.
         * @summary Delete Notification
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNotification(notificationId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteNotification(notificationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve all of the current user\'s notifications.
         * @summary List Notifications
         * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
         * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
         * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
         * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotifications(type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Notification>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotifications(type, sent, hidden, after, n, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Mark a notification as seen.
         * @summary Mark As Read
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async markNotificationAsRead(notificationId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markNotificationAsRead(notificationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
         * @summary Accept Friend Request
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        acceptFriendRequest(notificationId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.acceptFriendRequest(notificationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Clear **all** notifications.
         * @summary Clear All Notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearNotifications(options?: any): AxiosPromise<Success> {
            return localVarFp.clearNotifications(options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a notification.
         * @summary Delete Notification
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotification(notificationId: string, options?: any): AxiosPromise<Notification> {
            return localVarFp.deleteNotification(notificationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve all of the current user\'s notifications.
         * @summary List Notifications
         * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
         * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
         * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
         * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications(type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options?: any): AxiosPromise<Array<Notification>> {
            return localVarFp.getNotifications(type, sent, hidden, after, n, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Mark a notification as seen.
         * @summary Mark As Read
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationAsRead(notificationId: string, options?: any): AxiosPromise<Notification> {
            return localVarFp.markNotificationAsRead(notificationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI {
    /**
     * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
     * @summary Accept Friend Request
     * @param {string} notificationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public acceptFriendRequest(notificationId: string, options?: any) {
        return NotificationsApiFp(this.configuration).acceptFriendRequest(notificationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Clear **all** notifications.
     * @summary Clear All Notifications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public clearNotifications(options?: any) {
        return NotificationsApiFp(this.configuration).clearNotifications(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a notification.
     * @summary Delete Notification
     * @param {string} notificationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public deleteNotification(notificationId: string, options?: any) {
        return NotificationsApiFp(this.configuration).deleteNotification(notificationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve all of the current user\'s notifications.
     * @summary List Notifications
     * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
     * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
     * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
     * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotifications(type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options?: any) {
        return NotificationsApiFp(this.configuration).getNotifications(type, sent, hidden, after, n, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mark a notification as seen.
     * @summary Mark As Read
     * @param {string} notificationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public markNotificationAsRead(notificationId: string, options?: any) {
        return NotificationsApiFp(this.configuration).markNotificationAsRead(notificationId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PlayermoderationApi - axios parameter creator
 * @export
 */
export const PlayermoderationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ⚠️ **This will delete every single player moderation you\'ve ever made.**
         * @summary Clear All Player Moderations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearAllPlayerModerations: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/playermoderations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
         * @summary Delete Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlayerModeration: async (playerModerationId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playerModerationId' is not null or undefined
            assertParamExists('deletePlayerModeration', 'playerModerationId', playerModerationId)
            const localVarPath = `/auth/user/playermoderations/{playerModerationId}`
                .replace(`{${"playerModerationId"}}`, encodeURIComponent(String(playerModerationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
         * @summary Get Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModeration: async (playerModerationId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playerModerationId' is not null or undefined
            assertParamExists('getPlayerModeration', 'playerModerationId', playerModerationId)
            const localVarPath = `/auth/user/playermoderations/{playerModerationId}`
                .replace(`{${"playerModerationId"}}`, encodeURIComponent(String(playerModerationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
         * @summary Search Player Moderations
         * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
         * @param {string} [targetUserId] Must be valid UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModerations: async (type?: string, targetUserId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/playermoderations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (targetUserId !== undefined) {
                localVarQueryParameter['targetUserId'] = targetUserId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Moderate a user, e.g. unmute them or show their avatar.
         * @summary Moderate User
         * @param {InlineObject12} [inlineObject12] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moderateUser: async (inlineObject12?: InlineObject12, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/playermoderations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject12, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a player moderation previously added through `moderateUser`. E.g if you previuosly have shown their avatar, but now want to reset it to default.
         * @summary Unmoderate User
         * @param {InlineObject13} [inlineObject13] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unmoderateUser: async (inlineObject13?: InlineObject13, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/unplayermoderate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject13, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlayermoderationApi - functional programming interface
 * @export
 */
export const PlayermoderationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlayermoderationApiAxiosParamCreator(configuration)
    return {
        /**
         * ⚠️ **This will delete every single player moderation you\'ve ever made.**
         * @summary Clear All Player Moderations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clearAllPlayerModerations(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clearAllPlayerModerations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
         * @summary Delete Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePlayerModeration(playerModerationId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePlayerModeration(playerModerationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
         * @summary Get Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayerModeration(playerModerationId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerModeration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayerModeration(playerModerationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
         * @summary Search Player Moderations
         * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
         * @param {string} [targetUserId] Must be valid UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayerModerations(type?: string, targetUserId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PlayerModeration>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayerModerations(type, targetUserId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Moderate a user, e.g. unmute them or show their avatar.
         * @summary Moderate User
         * @param {InlineObject12} [inlineObject12] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async moderateUser(inlineObject12?: InlineObject12, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerModeration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moderateUser(inlineObject12, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes a player moderation previously added through `moderateUser`. E.g if you previuosly have shown their avatar, but now want to reset it to default.
         * @summary Unmoderate User
         * @param {InlineObject13} [inlineObject13] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unmoderateUser(inlineObject13?: InlineObject13, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Error>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unmoderateUser(inlineObject13, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlayermoderationApi - factory interface
 * @export
 */
export const PlayermoderationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlayermoderationApiFp(configuration)
    return {
        /**
         * ⚠️ **This will delete every single player moderation you\'ve ever made.**
         * @summary Clear All Player Moderations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearAllPlayerModerations(options?: any): AxiosPromise<Error> {
            return localVarFp.clearAllPlayerModerations(options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
         * @summary Delete Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlayerModeration(playerModerationId: string, options?: any): AxiosPromise<Error> {
            return localVarFp.deletePlayerModeration(playerModerationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
         * @summary Get Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModeration(playerModerationId: string, options?: any): AxiosPromise<PlayerModeration> {
            return localVarFp.getPlayerModeration(playerModerationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
         * @summary Search Player Moderations
         * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
         * @param {string} [targetUserId] Must be valid UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModerations(type?: string, targetUserId?: string, options?: any): AxiosPromise<Array<PlayerModeration>> {
            return localVarFp.getPlayerModerations(type, targetUserId, options).then((request) => request(axios, basePath));
        },
        /**
         * Moderate a user, e.g. unmute them or show their avatar.
         * @summary Moderate User
         * @param {InlineObject12} [inlineObject12] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moderateUser(inlineObject12?: InlineObject12, options?: any): AxiosPromise<PlayerModeration> {
            return localVarFp.moderateUser(inlineObject12, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a player moderation previously added through `moderateUser`. E.g if you previuosly have shown their avatar, but now want to reset it to default.
         * @summary Unmoderate User
         * @param {InlineObject13} [inlineObject13] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unmoderateUser(inlineObject13?: InlineObject13, options?: any): AxiosPromise<Error> {
            return localVarFp.unmoderateUser(inlineObject13, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlayermoderationApi - object-oriented interface
 * @export
 * @class PlayermoderationApi
 * @extends {BaseAPI}
 */
export class PlayermoderationApi extends BaseAPI {
    /**
     * ⚠️ **This will delete every single player moderation you\'ve ever made.**
     * @summary Clear All Player Moderations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public clearAllPlayerModerations(options?: any) {
        return PlayermoderationApiFp(this.configuration).clearAllPlayerModerations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
     * @summary Delete Player Moderation
     * @param {string} playerModerationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public deletePlayerModeration(playerModerationId: string, options?: any) {
        return PlayermoderationApiFp(this.configuration).deletePlayerModeration(playerModerationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
     * @summary Get Player Moderation
     * @param {string} playerModerationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public getPlayerModeration(playerModerationId: string, options?: any) {
        return PlayermoderationApiFp(this.configuration).getPlayerModeration(playerModerationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
     * @summary Search Player Moderations
     * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
     * @param {string} [targetUserId] Must be valid UserID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public getPlayerModerations(type?: string, targetUserId?: string, options?: any) {
        return PlayermoderationApiFp(this.configuration).getPlayerModerations(type, targetUserId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moderate a user, e.g. unmute them or show their avatar.
     * @summary Moderate User
     * @param {InlineObject12} [inlineObject12] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public moderateUser(inlineObject12?: InlineObject12, options?: any) {
        return PlayermoderationApiFp(this.configuration).moderateUser(inlineObject12, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a player moderation previously added through `moderateUser`. E.g if you previuosly have shown their avatar, but now want to reset it to default.
     * @summary Unmoderate User
     * @param {InlineObject13} [inlineObject13] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public unmoderateUser(inlineObject13?: InlineObject13, options?: any) {
        return PlayermoderationApiFp(this.configuration).unmoderateUser(inlineObject13, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SystemApi - axios parameter creator
 * @export
 */
export const SystemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
         * @summary Fetch API Config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfig: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/config`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns in plain format the number of currently online users.  **NOTE:** The response type is not of JSON, but is an integer in plain ASCII format.
         * @summary Current Online Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentOnlineUsers: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/visits`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the overall health status, the server name, and the current build version tag of the API.
         * @summary Check API Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealth: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns in plain format the current time of the API server.  **NOTE:** The response type is not of JSON, but is a string in plain ASCII format.
         * @summary Current System Time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemTime: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/time`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SystemApi - functional programming interface
 * @export
 */
export const SystemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemApiAxiosParamCreator(configuration)
    return {
        /**
         * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
         * @summary Fetch API Config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfig(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Config>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfig(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns in plain format the number of currently online users.  **NOTE:** The response type is not of JSON, but is an integer in plain ASCII format.
         * @summary Current Online Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentOnlineUsers(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentOnlineUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the overall health status, the server name, and the current build version tag of the API.
         * @summary Check API Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHealth(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2002>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHealth(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns in plain format the current time of the API server.  **NOTE:** The response type is not of JSON, but is a string in plain ASCII format.
         * @summary Current System Time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemTime(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemTime(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SystemApi - factory interface
 * @export
 */
export const SystemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemApiFp(configuration)
    return {
        /**
         * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
         * @summary Fetch API Config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfig(options?: any): AxiosPromise<Config> {
            return localVarFp.getConfig(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns in plain format the number of currently online users.  **NOTE:** The response type is not of JSON, but is an integer in plain ASCII format.
         * @summary Current Online Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentOnlineUsers(options?: any): AxiosPromise<number> {
            return localVarFp.getCurrentOnlineUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the overall health status, the server name, and the current build version tag of the API.
         * @summary Check API Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealth(options?: any): AxiosPromise<InlineResponse2002> {
            return localVarFp.getHealth(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns in plain format the current time of the API server.  **NOTE:** The response type is not of JSON, but is a string in plain ASCII format.
         * @summary Current System Time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemTime(options?: any): AxiosPromise<string> {
            return localVarFp.getSystemTime(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SystemApi - object-oriented interface
 * @export
 * @class SystemApi
 * @extends {BaseAPI}
 */
export class SystemApi extends BaseAPI {
    /**
     * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
     * @summary Fetch API Config
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getConfig(options?: any) {
        return SystemApiFp(this.configuration).getConfig(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns in plain format the number of currently online users.  **NOTE:** The response type is not of JSON, but is an integer in plain ASCII format.
     * @summary Current Online Users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getCurrentOnlineUsers(options?: any) {
        return SystemApiFp(this.configuration).getCurrentOnlineUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the overall health status, the server name, and the current build version tag of the API.
     * @summary Check API Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getHealth(options?: any) {
        return SystemApiFp(this.configuration).getHealth(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns in plain format the current time of the API server.  **NOTE:** The response type is not of JSON, but is a string in plain ASCII format.
     * @summary Current System Time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getSystemTime(options?: any) {
        return SystemApiFp(this.configuration).getSystemTime(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get public user information about a specific user using their ID.
         * @summary Get User by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get public user information about a specific user using their name.
         * @summary Get User by Username
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByName: async (username: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('getUserByName', 'username', username)
            const localVarPath = `/users/{username}/name`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list any Active users by text query.  **Has been locked down and now always respond with \"Invalid Admin Credentials\".**
         * @summary Search Active Users
         * @param {string} search Username to search for
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        searchActiveUsers: async (search: string, developerType?: string, offset?: number, n?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'search' is not null or undefined
            assertParamExists('searchActiveUsers', 'search', search)
            const localVarPath = `/users/active`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (developerType !== undefined) {
                localVarQueryParameter['developerType'] = developerType;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list any users by text query
         * @summary Search All Users
         * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchUsers: async (search?: string, developerType?: string, n?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (developerType !== undefined) {
                localVarQueryParameter['developerType'] = developerType;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a users information such as the email and birthday.
         * @summary Update User Info
         * @param {string} userId 
         * @param {InlineObject2} [inlineObject2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (userId: string, inlineObject2?: InlineObject2, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateUser', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject2, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Get public user information about a specific user using their ID.
         * @summary Get User by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get public user information about a specific user using their name.
         * @summary Get User by Username
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByName(username: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByName(username, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list any Active users by text query.  **Has been locked down and now always respond with \"Invalid Admin Credentials\".**
         * @summary Search Active Users
         * @param {string} search Username to search for
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async searchActiveUsers(search: string, developerType?: string, offset?: number, n?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedUser>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchActiveUsers(search, developerType, offset, n, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list any users by text query
         * @summary Search All Users
         * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchUsers(search?: string, developerType?: string, n?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedUser>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchUsers(search, developerType, n, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a users information such as the email and birthday.
         * @summary Update User Info
         * @param {string} userId 
         * @param {InlineObject2} [inlineObject2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(userId: string, inlineObject2?: InlineObject2, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(userId, inlineObject2, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Get public user information about a specific user using their ID.
         * @summary Get User by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(userId: string, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get public user information about a specific user using their name.
         * @summary Get User by Username
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByName(username: string, options?: any): AxiosPromise<User> {
            return localVarFp.getUserByName(username, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list any Active users by text query.  **Has been locked down and now always respond with \"Invalid Admin Credentials\".**
         * @summary Search Active Users
         * @param {string} search Username to search for
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        searchActiveUsers(search: string, developerType?: string, offset?: number, n?: number, options?: any): AxiosPromise<Array<LimitedUser>> {
            return localVarFp.searchActiveUsers(search, developerType, offset, n, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list any users by text query
         * @summary Search All Users
         * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchUsers(search?: string, developerType?: string, n?: number, offset?: number, options?: any): AxiosPromise<Array<LimitedUser>> {
            return localVarFp.searchUsers(search, developerType, n, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a users information such as the email and birthday.
         * @summary Update User Info
         * @param {string} userId 
         * @param {InlineObject2} [inlineObject2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(userId: string, inlineObject2?: InlineObject2, options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.updateUser(userId, inlineObject2, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Get public user information about a specific user using their ID.
     * @summary Get User by ID
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(userId: string, options?: any) {
        return UsersApiFp(this.configuration).getUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get public user information about a specific user using their name.
     * @summary Get User by Username
     * @param {string} username 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserByName(username: string, options?: any) {
        return UsersApiFp(this.configuration).getUserByName(username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list any Active users by text query.  **Has been locked down and now always respond with \"Invalid Admin Credentials\".**
     * @summary Search Active Users
     * @param {string} search Username to search for
     * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {number} [n] The number of objects to return.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public searchActiveUsers(search: string, developerType?: string, offset?: number, n?: number, options?: any) {
        return UsersApiFp(this.configuration).searchActiveUsers(search, developerType, offset, n, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list any users by text query
     * @summary Search All Users
     * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
     * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public searchUsers(search?: string, developerType?: string, n?: number, offset?: number, options?: any) {
        return UsersApiFp(this.configuration).searchUsers(search, developerType, n, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a users information such as the email and birthday.
     * @summary Update User Info
     * @param {string} userId 
     * @param {InlineObject2} [inlineObject2] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUser(userId: string, inlineObject2?: InlineObject2, options?: any) {
        return UsersApiFp(this.configuration).updateUser(userId, inlineObject2, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * WorldsApi - axios parameter creator
 * @export
 */
export const WorldsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
         * @summary Create World
         * @param {InlineObject6} [inlineObject6] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorld: async (inlineObject6?: InlineObject6, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject6, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
         * @summary Delete World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorld: async (worldId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('deleteWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list currently Active worlds by query filters.
         * @summary List Active Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActiveWorlds: async (featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds/active`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list favorited worlds by query filters.
         * @summary List Favorited Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedWorlds: async (featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list recently visited worlds by query filters.
         * @summary List Recent Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentWorlds: async (featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds/recent`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific World.
         * @summary Get World by ID
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorld: async (worldId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a worlds instance.
         * @summary Get World Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldInstance: async (worldId: string, instanceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorldInstance', 'worldId', worldId)
            // verify required parameter 'instanceId' is not null or undefined
            assertParamExists('getWorldInstance', 'instanceId', instanceId)
            const localVarPath = `/worlds/{worldId}/{instanceId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)))
                .replace(`{${"instanceId"}}`, encodeURIComponent(String(instanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
         * @summary Get World Metadata
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWorldMetadata: async (worldId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorldMetadata', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/metadata`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a worlds publish status.
         * @summary Get World Publish Status
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldPublishStatus: async (worldId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorldPublishStatus', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/publish`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Publish a world. You can only publish one world per week.
         * @summary Publish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishWorld: async (worldId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('publishWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/publish`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list any worlds by query filters.
         * @summary Search All Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
         * @param {string} [userId] Filter by author UserID
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchWorlds: async (featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unpublish a world.
         * @summary Unpublish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unpublishWorld: async (worldId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('unpublishWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/publish`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update information about a specific World.
         * @summary Update World
         * @param {string} worldId 
         * @param {InlineObject7} [inlineObject7] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorld: async (worldId: string, inlineObject7?: InlineObject7, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('updateWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject7, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorldsApi - functional programming interface
 * @export
 */
export const WorldsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorldsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
         * @summary Create World
         * @param {InlineObject6} [inlineObject6] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWorld(inlineObject6?: InlineObject6, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<World>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWorld(inlineObject6, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
         * @summary Delete World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWorld(worldId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list currently Active worlds by query filters.
         * @summary List Active Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActiveWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActiveWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list favorited worlds by query filters.
         * @summary List Favorited Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoritedWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritedWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list recently visited worlds by query filters.
         * @summary List Recent Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecentWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecentWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get information about a specific World.
         * @summary Get World by ID
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorld(worldId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<World>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a worlds instance.
         * @summary Get World Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorldInstance(worldId: string, instanceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Instance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorldInstance(worldId, instanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
         * @summary Get World Metadata
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getWorldMetadata(worldId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2006>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorldMetadata(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a worlds publish status.
         * @summary Get World Publish Status
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorldPublishStatus(worldId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2007>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorldPublishStatus(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Publish a world. You can only publish one world per week.
         * @summary Publish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishWorld(worldId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list any worlds by query filters.
         * @summary Search All Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
         * @param {string} [userId] Filter by author UserID
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchWorlds(featured, sort, user, userId, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unpublish a world.
         * @summary Unpublish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unpublishWorld(worldId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unpublishWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update information about a specific World.
         * @summary Update World
         * @param {string} worldId 
         * @param {InlineObject7} [inlineObject7] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWorld(worldId: string, inlineObject7?: InlineObject7, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<World>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorld(worldId, inlineObject7, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorldsApi - factory interface
 * @export
 */
export const WorldsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorldsApiFp(configuration)
    return {
        /**
         * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
         * @summary Create World
         * @param {InlineObject6} [inlineObject6] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorld(inlineObject6?: InlineObject6, options?: any): AxiosPromise<World> {
            return localVarFp.createWorld(inlineObject6, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
         * @summary Delete World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorld(worldId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list currently Active worlds by query filters.
         * @summary List Active Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActiveWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.getActiveWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list favorited worlds by query filters.
         * @summary List Favorited Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.getFavoritedWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list recently visited worlds by query filters.
         * @summary List Recent Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.getRecentWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific World.
         * @summary Get World by ID
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorld(worldId: string, options?: any): AxiosPromise<World> {
            return localVarFp.getWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a worlds instance.
         * @summary Get World Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldInstance(worldId: string, instanceId: string, options?: any): AxiosPromise<Instance> {
            return localVarFp.getWorldInstance(worldId, instanceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
         * @summary Get World Metadata
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWorldMetadata(worldId: string, options?: any): AxiosPromise<InlineResponse2006> {
            return localVarFp.getWorldMetadata(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a worlds publish status.
         * @summary Get World Publish Status
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldPublishStatus(worldId: string, options?: any): AxiosPromise<InlineResponse2007> {
            return localVarFp.getWorldPublishStatus(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Publish a world. You can only publish one world per week.
         * @summary Publish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishWorld(worldId: string, options?: any): AxiosPromise<void> {
            return localVarFp.publishWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list any worlds by query filters.
         * @summary Search All Worlds
         * @param {string} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
         * @param {string} [userId] Filter by author UserID
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated).
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.searchWorlds(featured, sort, user, userId, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(axios, basePath));
        },
        /**
         * Unpublish a world.
         * @summary Unpublish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unpublishWorld(worldId: string, options?: any): AxiosPromise<void> {
            return localVarFp.unpublishWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update information about a specific World.
         * @summary Update World
         * @param {string} worldId 
         * @param {InlineObject7} [inlineObject7] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorld(worldId: string, inlineObject7?: InlineObject7, options?: any): AxiosPromise<World> {
            return localVarFp.updateWorld(worldId, inlineObject7, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorldsApi - object-oriented interface
 * @export
 * @class WorldsApi
 * @extends {BaseAPI}
 */
export class WorldsApi extends BaseAPI {
    /**
     * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
     * @summary Create World
     * @param {InlineObject6} [inlineObject6] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public createWorld(inlineObject6?: InlineObject6, options?: any) {
        return WorldsApiFp(this.configuration).createWorld(inlineObject6, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
     * @summary Delete World
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public deleteWorld(worldId: string, options?: any) {
        return WorldsApiFp(this.configuration).deleteWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list currently Active worlds by query filters.
     * @summary List Active Worlds
     * @param {string} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated).
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getActiveWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any) {
        return WorldsApiFp(this.configuration).getActiveWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list favorited worlds by query filters.
     * @summary List Favorited Worlds
     * @param {string} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated).
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {string} [userId] Target user to see information on, admin-only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getFavoritedWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any) {
        return WorldsApiFp(this.configuration).getFavoritedWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list recently visited worlds by query filters.
     * @summary List Recent Worlds
     * @param {string} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated).
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {string} [userId] Target user to see information on, admin-only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getRecentWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any) {
        return WorldsApiFp(this.configuration).getRecentWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about a specific World.
     * @summary Get World by ID
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorld(worldId: string, options?: any) {
        return WorldsApiFp(this.configuration).getWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a worlds instance.
     * @summary Get World Instance
     * @param {string} worldId 
     * @param {string} instanceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorldInstance(worldId: string, instanceId: string, options?: any) {
        return WorldsApiFp(this.configuration).getWorldInstance(worldId, instanceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
     * @summary Get World Metadata
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorldMetadata(worldId: string, options?: any) {
        return WorldsApiFp(this.configuration).getWorldMetadata(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a worlds publish status.
     * @summary Get World Publish Status
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorldPublishStatus(worldId: string, options?: any) {
        return WorldsApiFp(this.configuration).getWorldPublishStatus(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Publish a world. You can only publish one world per week.
     * @summary Publish World
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public publishWorld(worldId: string, options?: any) {
        return WorldsApiFp(this.configuration).publishWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list any worlds by query filters.
     * @summary Search All Worlds
     * @param {string} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
     * @param {string} [userId] Filter by author UserID
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated).
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public searchWorlds(featured?: string, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any) {
        return WorldsApiFp(this.configuration).searchWorlds(featured, sort, user, userId, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unpublish a world.
     * @summary Unpublish World
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public unpublishWorld(worldId: string, options?: any) {
        return WorldsApiFp(this.configuration).unpublishWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update information about a specific World.
     * @summary Update World
     * @param {string} worldId 
     * @param {InlineObject7} [inlineObject7] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public updateWorld(worldId: string, inlineObject7?: InlineObject7, options?: any) {
        return WorldsApiFp(this.configuration).updateWorld(worldId, inlineObject7, options).then((request) => request(this.axios, this.basePath));
    }
}


