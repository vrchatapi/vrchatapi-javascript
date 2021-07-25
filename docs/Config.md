# vrchatapi.Config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | VRChat&#39;s office address | [readonly] 
**announcements** | [**[ConfigAnnouncements]**](ConfigAnnouncements.md) | PSA, Public Announcements | [readonly] 
**apiKey** | **String** | apiKey to be used for all other requests | [readonly] 
**appName** | **String** | Game name | [readonly] [default to &#39;VrChat&#39;]
**buildVersionTag** | **String** | Build tag of the API server | [readonly] 
**clientApiKey** | **String** | apiKey to be used for all other requests | [readonly] 
**clientBPSCeiling** | **Number** | Unknown | [optional] 
**clientDisconnectTimeout** | **Number** | Unknown | [optional] 
**clientReservedPlayerBPS** | **Number** | Unknown | [optional] 
**clientSentCountAllowance** | **Number** | Unknown | [optional] 
**contactEmail** | **String** | VRChat&#39;s contact email | [readonly] 
**copyrightEmail** | **String** | VRChat&#39;s copyright-issues-related email | [readonly] 
**currentTOSVersion** | **Number** | Current version number of the Terms of Service | [readonly] 
**defaultAvatar** | **String** |  | 
**deploymentGroup** | [**DeploymentGroup**](DeploymentGroup.md) |  | 
**devAppVersionStandalone** | **String** | Version number for game development build | [readonly] 
**devDownloadLinkWindows** | **String** | Developer Download link | [readonly] 
**devSdkUrl** | **String** | Link to download the development SDK, use downloadUrls instead | [readonly] 
**devSdkVersion** | **String** | Version of the development SDK | [readonly] 
**devServerVersionStandalone** | **String** | Version number for server development build | [readonly] 
**disableAvatarCopying** | **Boolean** | Toggles if copying avatars should be disabled | [default to false]
**disableAvatarGating** | **Boolean** | Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the &#x60;system_avatar_access&#x60; Tag or &#x60;admin_avatar_access&#x60; Tag | [default to false]
**disableCommunityLabs** | **Boolean** | Toggles if the Community Labs should be disabled | [default to false]
**disableCommunityLabsPromotion** | **Boolean** | Toggles if promotion out of Community Labs should be disabled | [default to false]
**disableEmail** | **Boolean** | Unknown | [optional] [default to false]
**disableEventStream** | **Boolean** | Toggles if Analytics should be disabled (this sreportedly not used in the Client) | [default to false]
**disableFeedbackGating** | **Boolean** | Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the &#x60;system_feedback_access&#x60; Tag. | [default to false]
**disableHello** | **Boolean** | Unknown | [optional] [default to false]
**disableRegistration** | **Boolean** | Toggles if new user account registration should be disabled | [default to false]
**disableSteamNetworking** | **Boolean** | Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead. | [default to true]
**disableTwoFactorAuth** | **Boolean** | Toggles if 2FA should be disabled. | [default to false]
**disableUdon** | **Boolean** | Toggles if Udon should be universally disabled in-game. | [default to false]
**disableUpgradeAccount** | **Boolean** | Toggles if account upgrading \&quot;linking with Steam/Oculus\&quot; should be disabled. | [default to false]
**downloadLinkWindows** | **String** | Download link for game on the Oculus Rift website. | [readonly] 
**downloadUrls** | [**ConfigDownloadUrls**](ConfigDownloadUrls.md) |  | 
**dynamicWorldRows** | [**[ConfigDynamicWorldRows]**](ConfigDynamicWorldRows.md) | Array of DynamicWorldRow objects, used by the game to display the list of world rows | [readonly] 
**events** | [**ConfigEvents**](ConfigEvents.md) |  | 
**gearDemoRoomId** | **String** | Unknown | [readonly] 
**homepageRedirectTarget** | **String** | Redirect target if you try to open the base API domain in your browser | [readonly] [default to &#39;https://hello.vrchat.com&#39;]
**homeWorldId** | **String** |  | 
**hubWorldId** | **String** |  | 
**jobsEmail** | **String** | VRChat&#39;s job application email | [readonly] 
**messageOfTheDay** | **String** | MOTD | [readonly] 
**moderationEmail** | **String** | VRChat&#39;s moderation related email | [readonly] 
**moderationQueryPeriod** | **Number** | Unknown | 
**notAllowedToSelectAvatarInPrivateWorldMessage** | **String** | Used in-game to notify a user they aren&#39;t allowed to select avatars in private worlds | [readonly] 
**plugin** | **String** | Extra [plugin](https://doc.photonengine.com/en-us/server/current/plugins/manual) to run in each instance | [readonly] 
**releaseAppVersionStandalone** | **String** | Version number for game release build | [readonly] 
**releaseSdkUrl** | **String** | Link to download the release SDK | [readonly] 
**releaseSdkVersion** | **String** | Version of the release SDK | [readonly] 
**releaseServerVersionStandalone** | **String** | Version number for server release build | [readonly] 
**sdkDeveloperFaqUrl** | **String** | Link to the developer FAQ | [readonly] 
**sdkDiscordUrl** | **String** | Link to the official VRChat Discord | [readonly] 
**sdkNotAllowedToPublishMessage** | **String** | Used in the SDK to notify a user they aren&#39;t allowed to upload avatars/worlds yet | [readonly] 
**sdkUnityVersion** | **String** | Unity version supported by the SDK | [readonly] 
**serverName** | **String** | Server name of the API server currently responding | [readonly] 
**supportEmail** | **String** | VRChat&#39;s support email | [readonly] 
**timeOutWorldId** | **String** |  | 
**tutorialWorldId** | **String** |  | 
**updateRateMsMaximum** | **Number** | Unknown | [readonly] 
**updateRateMsMinimum** | **Number** | Unknown | [readonly] 
**updateRateMsNormal** | **Number** | Unknown | [readonly] 
**updateRateMsUdonManual** | **Number** | Unknown | [readonly] 
**uploadAnalysisPercent** | **Number** | Unknown | [readonly] 
**urlList** | **[String]** | List of allowed URLs that bypass the \&quot;Allow untrusted URL&#39;s\&quot; setting in-game | [readonly] 
**useReliableUdpForVoice** | **Boolean** | Unknown | [default to false]
**userUpdatePeriod** | **Number** | Unknown | [readonly] 
**userVerificationDelay** | **Number** | Unknown | [readonly] 
**userVerificationRetry** | **Number** | Unknown | [readonly] 
**userVerificationTimeout** | **Number** | Unknown | [readonly] 
**viveWindowsUrl** | **String** | Download link for game on the Steam website. | [readonly] 
**whiteListedAssetUrls** | **[String]** | List of allowed URLs that are allowed to host avatar assets | [readonly] 
**worldUpdatePeriod** | **Number** | Unknown | [readonly] 
**youtubedlHash** | **String** | Currently used youtube-dl.exe hash in SHA-256-delimited format | [readonly] 
**youtubedlVersion** | **String** | Currently used youtube-dl.exe version | [readonly] 


