"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConfigAnnouncements = _interopRequireDefault(require("./ConfigAnnouncements"));

var _ConfigDownloadUrls = _interopRequireDefault(require("./ConfigDownloadUrls"));

var _ConfigDynamicWorldRows = _interopRequireDefault(require("./ConfigDynamicWorldRows"));

var _ConfigEvents = _interopRequireDefault(require("./ConfigEvents"));

var _DeploymentGroup = _interopRequireDefault(require("./DeploymentGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Config model module.
 * @module model/Config
 * @version 1.0.0
 */
var Config = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Config</code>.
   * @alias module:model/Config
   * @param address {String} VRChat's office address
   * @param announcements {Array.<module:model/ConfigAnnouncements>} PSA, Public Announcements
   * @param apiKey {String} apiKey to be used for all other requests
   * @param appName {String} Game name
   * @param buildVersionTag {String} Build tag of the API server
   * @param clientApiKey {String} apiKey to be used for all other requests
   * @param contactEmail {String} VRChat's contact email
   * @param copyrightEmail {String} VRChat's copyright-issues-related email
   * @param currentTOSVersion {Number} Current version number of the Terms of Service
   * @param defaultAvatar {String} 
   * @param deploymentGroup {module:model/DeploymentGroup} 
   * @param devAppVersionStandalone {String} Version number for game development build
   * @param devDownloadLinkWindows {String} Developer Download link
   * @param devSdkUrl {String} Link to download the development SDK, use downloadUrls instead
   * @param devSdkVersion {String} Version of the development SDK
   * @param devServerVersionStandalone {String} Version number for server development build
   * @param disableAvatarCopying {Boolean} Toggles if copying avatars should be disabled
   * @param disableAvatarGating {Boolean} Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the `system_avatar_access` Tag or `admin_avatar_access` Tag
   * @param disableCommunityLabs {Boolean} Toggles if the Community Labs should be disabled
   * @param disableCommunityLabsPromotion {Boolean} Toggles if promotion out of Community Labs should be disabled
   * @param disableEventStream {Boolean} Toggles if Analytics should be disabled (this sreportedly not used in the Client)
   * @param disableFeedbackGating {Boolean} Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the `system_feedback_access` Tag.
   * @param disableRegistration {Boolean} Toggles if new user account registration should be disabled
   * @param disableSteamNetworking {Boolean} Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead.
   * @param disableTwoFactorAuth {Boolean} Toggles if 2FA should be disabled.
   * @param disableUdon {Boolean} Toggles if Udon should be universally disabled in-game.
   * @param disableUpgradeAccount {Boolean} Toggles if account upgrading \"linking with Steam/Oculus\" should be disabled.
   * @param downloadLinkWindows {String} Download link for game on the Oculus Rift website.
   * @param downloadUrls {module:model/ConfigDownloadUrls} 
   * @param dynamicWorldRows {Array.<module:model/ConfigDynamicWorldRows>} Array of DynamicWorldRow objects, used by the game to display the list of world rows
   * @param events {module:model/ConfigEvents} 
   * @param gearDemoRoomId {String} Unknown
   * @param homepageRedirectTarget {String} Redirect target if you try to open the base API domain in your browser
   * @param homeWorldId {String} 
   * @param hubWorldId {String} 
   * @param jobsEmail {String} VRChat's job application email
   * @param messageOfTheDay {String} MOTD
   * @param moderationEmail {String} VRChat's moderation related email
   * @param moderationQueryPeriod {Number} Unknown
   * @param notAllowedToSelectAvatarInPrivateWorldMessage {String} Used in-game to notify a user they aren't allowed to select avatars in private worlds
   * @param plugin {String} Extra [plugin](https://doc.photonengine.com/en-us/server/current/plugins/manual) to run in each instance
   * @param releaseAppVersionStandalone {String} Version number for game release build
   * @param releaseSdkUrl {String} Link to download the release SDK
   * @param releaseSdkVersion {String} Version of the release SDK
   * @param releaseServerVersionStandalone {String} Version number for server release build
   * @param sdkDeveloperFaqUrl {String} Link to the developer FAQ
   * @param sdkDiscordUrl {String} Link to the official VRChat Discord
   * @param sdkNotAllowedToPublishMessage {String} Used in the SDK to notify a user they aren't allowed to upload avatars/worlds yet
   * @param sdkUnityVersion {String} Unity version supported by the SDK
   * @param serverName {String} Server name of the API server currently responding
   * @param supportEmail {String} VRChat's support email
   * @param timeOutWorldId {String} 
   * @param tutorialWorldId {String} 
   * @param updateRateMsMaximum {Number} Unknown
   * @param updateRateMsMinimum {Number} Unknown
   * @param updateRateMsNormal {Number} Unknown
   * @param updateRateMsUdonManual {Number} Unknown
   * @param uploadAnalysisPercent {Number} Unknown
   * @param urlList {Array.<String>} List of allowed URLs that bypass the \"Allow untrusted URL's\" setting in-game
   * @param useReliableUdpForVoice {Boolean} Unknown
   * @param userUpdatePeriod {Number} Unknown
   * @param userVerificationDelay {Number} Unknown
   * @param userVerificationRetry {Number} Unknown
   * @param userVerificationTimeout {Number} Unknown
   * @param viveWindowsUrl {String} Download link for game on the Steam website.
   * @param whiteListedAssetUrls {Array.<String>} List of allowed URLs that are allowed to host avatar assets
   * @param worldUpdatePeriod {Number} Unknown
   * @param youtubedlHash {String} Currently used youtube-dl.exe hash in SHA-256-delimited format
   * @param youtubedlVersion {String} Currently used youtube-dl.exe version
   */
  function Config(address, announcements, apiKey, appName, buildVersionTag, clientApiKey, contactEmail, copyrightEmail, currentTOSVersion, defaultAvatar, deploymentGroup, devAppVersionStandalone, devDownloadLinkWindows, devSdkUrl, devSdkVersion, devServerVersionStandalone, disableAvatarCopying, disableAvatarGating, disableCommunityLabs, disableCommunityLabsPromotion, disableEventStream, disableFeedbackGating, disableRegistration, disableSteamNetworking, disableTwoFactorAuth, disableUdon, disableUpgradeAccount, downloadLinkWindows, downloadUrls, dynamicWorldRows, events, gearDemoRoomId, homepageRedirectTarget, homeWorldId, hubWorldId, jobsEmail, messageOfTheDay, moderationEmail, moderationQueryPeriod, notAllowedToSelectAvatarInPrivateWorldMessage, plugin, releaseAppVersionStandalone, releaseSdkUrl, releaseSdkVersion, releaseServerVersionStandalone, sdkDeveloperFaqUrl, sdkDiscordUrl, sdkNotAllowedToPublishMessage, sdkUnityVersion, serverName, supportEmail, timeOutWorldId, tutorialWorldId, updateRateMsMaximum, updateRateMsMinimum, updateRateMsNormal, updateRateMsUdonManual, uploadAnalysisPercent, urlList, useReliableUdpForVoice, userUpdatePeriod, userVerificationDelay, userVerificationRetry, userVerificationTimeout, viveWindowsUrl, whiteListedAssetUrls, worldUpdatePeriod, youtubedlHash, youtubedlVersion) {
    _classCallCheck(this, Config);

    Config.initialize(this, address, announcements, apiKey, appName, buildVersionTag, clientApiKey, contactEmail, copyrightEmail, currentTOSVersion, defaultAvatar, deploymentGroup, devAppVersionStandalone, devDownloadLinkWindows, devSdkUrl, devSdkVersion, devServerVersionStandalone, disableAvatarCopying, disableAvatarGating, disableCommunityLabs, disableCommunityLabsPromotion, disableEventStream, disableFeedbackGating, disableRegistration, disableSteamNetworking, disableTwoFactorAuth, disableUdon, disableUpgradeAccount, downloadLinkWindows, downloadUrls, dynamicWorldRows, events, gearDemoRoomId, homepageRedirectTarget, homeWorldId, hubWorldId, jobsEmail, messageOfTheDay, moderationEmail, moderationQueryPeriod, notAllowedToSelectAvatarInPrivateWorldMessage, plugin, releaseAppVersionStandalone, releaseSdkUrl, releaseSdkVersion, releaseServerVersionStandalone, sdkDeveloperFaqUrl, sdkDiscordUrl, sdkNotAllowedToPublishMessage, sdkUnityVersion, serverName, supportEmail, timeOutWorldId, tutorialWorldId, updateRateMsMaximum, updateRateMsMinimum, updateRateMsNormal, updateRateMsUdonManual, uploadAnalysisPercent, urlList, useReliableUdpForVoice, userUpdatePeriod, userVerificationDelay, userVerificationRetry, userVerificationTimeout, viveWindowsUrl, whiteListedAssetUrls, worldUpdatePeriod, youtubedlHash, youtubedlVersion);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Config, null, [{
    key: "initialize",
    value: function initialize(obj, address, announcements, apiKey, appName, buildVersionTag, clientApiKey, contactEmail, copyrightEmail, currentTOSVersion, defaultAvatar, deploymentGroup, devAppVersionStandalone, devDownloadLinkWindows, devSdkUrl, devSdkVersion, devServerVersionStandalone, disableAvatarCopying, disableAvatarGating, disableCommunityLabs, disableCommunityLabsPromotion, disableEventStream, disableFeedbackGating, disableRegistration, disableSteamNetworking, disableTwoFactorAuth, disableUdon, disableUpgradeAccount, downloadLinkWindows, downloadUrls, dynamicWorldRows, events, gearDemoRoomId, homepageRedirectTarget, homeWorldId, hubWorldId, jobsEmail, messageOfTheDay, moderationEmail, moderationQueryPeriod, notAllowedToSelectAvatarInPrivateWorldMessage, plugin, releaseAppVersionStandalone, releaseSdkUrl, releaseSdkVersion, releaseServerVersionStandalone, sdkDeveloperFaqUrl, sdkDiscordUrl, sdkNotAllowedToPublishMessage, sdkUnityVersion, serverName, supportEmail, timeOutWorldId, tutorialWorldId, updateRateMsMaximum, updateRateMsMinimum, updateRateMsNormal, updateRateMsUdonManual, uploadAnalysisPercent, urlList, useReliableUdpForVoice, userUpdatePeriod, userVerificationDelay, userVerificationRetry, userVerificationTimeout, viveWindowsUrl, whiteListedAssetUrls, worldUpdatePeriod, youtubedlHash, youtubedlVersion) {
      obj['address'] = address;
      obj['announcements'] = announcements;
      obj['apiKey'] = apiKey;
      obj['appName'] = appName || 'VrChat';
      obj['buildVersionTag'] = buildVersionTag;
      obj['clientApiKey'] = clientApiKey;
      obj['contactEmail'] = contactEmail;
      obj['copyrightEmail'] = copyrightEmail;
      obj['currentTOSVersion'] = currentTOSVersion;
      obj['defaultAvatar'] = defaultAvatar;
      obj['deploymentGroup'] = deploymentGroup;
      obj['devAppVersionStandalone'] = devAppVersionStandalone;
      obj['devDownloadLinkWindows'] = devDownloadLinkWindows;
      obj['devSdkUrl'] = devSdkUrl;
      obj['devSdkVersion'] = devSdkVersion;
      obj['devServerVersionStandalone'] = devServerVersionStandalone;
      obj['disableAvatarCopying'] = disableAvatarCopying || false;
      obj['disableAvatarGating'] = disableAvatarGating || false;
      obj['disableCommunityLabs'] = disableCommunityLabs || false;
      obj['disableCommunityLabsPromotion'] = disableCommunityLabsPromotion || false;
      obj['disableEventStream'] = disableEventStream || false;
      obj['disableFeedbackGating'] = disableFeedbackGating || false;
      obj['disableRegistration'] = disableRegistration || false;
      obj['disableSteamNetworking'] = disableSteamNetworking || true;
      obj['disableTwoFactorAuth'] = disableTwoFactorAuth || false;
      obj['disableUdon'] = disableUdon || false;
      obj['disableUpgradeAccount'] = disableUpgradeAccount || false;
      obj['downloadLinkWindows'] = downloadLinkWindows;
      obj['downloadUrls'] = downloadUrls;
      obj['dynamicWorldRows'] = dynamicWorldRows;
      obj['events'] = events;
      obj['gearDemoRoomId'] = gearDemoRoomId;
      obj['homepageRedirectTarget'] = homepageRedirectTarget || 'https://hello.vrchat.com';
      obj['homeWorldId'] = homeWorldId;
      obj['hubWorldId'] = hubWorldId;
      obj['jobsEmail'] = jobsEmail;
      obj['messageOfTheDay'] = messageOfTheDay;
      obj['moderationEmail'] = moderationEmail;
      obj['moderationQueryPeriod'] = moderationQueryPeriod;
      obj['notAllowedToSelectAvatarInPrivateWorldMessage'] = notAllowedToSelectAvatarInPrivateWorldMessage;
      obj['plugin'] = plugin;
      obj['releaseAppVersionStandalone'] = releaseAppVersionStandalone;
      obj['releaseSdkUrl'] = releaseSdkUrl;
      obj['releaseSdkVersion'] = releaseSdkVersion;
      obj['releaseServerVersionStandalone'] = releaseServerVersionStandalone;
      obj['sdkDeveloperFaqUrl'] = sdkDeveloperFaqUrl;
      obj['sdkDiscordUrl'] = sdkDiscordUrl;
      obj['sdkNotAllowedToPublishMessage'] = sdkNotAllowedToPublishMessage;
      obj['sdkUnityVersion'] = sdkUnityVersion;
      obj['serverName'] = serverName;
      obj['supportEmail'] = supportEmail;
      obj['timeOutWorldId'] = timeOutWorldId;
      obj['tutorialWorldId'] = tutorialWorldId;
      obj['updateRateMsMaximum'] = updateRateMsMaximum;
      obj['updateRateMsMinimum'] = updateRateMsMinimum;
      obj['updateRateMsNormal'] = updateRateMsNormal;
      obj['updateRateMsUdonManual'] = updateRateMsUdonManual;
      obj['uploadAnalysisPercent'] = uploadAnalysisPercent;
      obj['urlList'] = urlList;
      obj['useReliableUdpForVoice'] = useReliableUdpForVoice || false;
      obj['userUpdatePeriod'] = userUpdatePeriod;
      obj['userVerificationDelay'] = userVerificationDelay;
      obj['userVerificationRetry'] = userVerificationRetry;
      obj['userVerificationTimeout'] = userVerificationTimeout;
      obj['viveWindowsUrl'] = viveWindowsUrl;
      obj['whiteListedAssetUrls'] = whiteListedAssetUrls;
      obj['worldUpdatePeriod'] = worldUpdatePeriod;
      obj['youtubedl-hash'] = youtubedlHash;
      obj['youtubedl-version'] = youtubedlVersion;
    }
    /**
     * Constructs a <code>Config</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Config} obj Optional instance to populate.
     * @return {module:model/Config} The populated <code>Config</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Config();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('announcements')) {
          obj['announcements'] = _ApiClient["default"].convertToType(data['announcements'], [_ConfigAnnouncements["default"]]);
        }

        if (data.hasOwnProperty('apiKey')) {
          obj['apiKey'] = _ApiClient["default"].convertToType(data['apiKey'], 'String');
        }

        if (data.hasOwnProperty('appName')) {
          obj['appName'] = _ApiClient["default"].convertToType(data['appName'], 'String');
        }

        if (data.hasOwnProperty('buildVersionTag')) {
          obj['buildVersionTag'] = _ApiClient["default"].convertToType(data['buildVersionTag'], 'String');
        }

        if (data.hasOwnProperty('clientApiKey')) {
          obj['clientApiKey'] = _ApiClient["default"].convertToType(data['clientApiKey'], 'String');
        }

        if (data.hasOwnProperty('clientBPSCeiling')) {
          obj['clientBPSCeiling'] = _ApiClient["default"].convertToType(data['clientBPSCeiling'], 'Number');
        }

        if (data.hasOwnProperty('clientDisconnectTimeout')) {
          obj['clientDisconnectTimeout'] = _ApiClient["default"].convertToType(data['clientDisconnectTimeout'], 'Number');
        }

        if (data.hasOwnProperty('clientReservedPlayerBPS')) {
          obj['clientReservedPlayerBPS'] = _ApiClient["default"].convertToType(data['clientReservedPlayerBPS'], 'Number');
        }

        if (data.hasOwnProperty('clientSentCountAllowance')) {
          obj['clientSentCountAllowance'] = _ApiClient["default"].convertToType(data['clientSentCountAllowance'], 'Number');
        }

        if (data.hasOwnProperty('contactEmail')) {
          obj['contactEmail'] = _ApiClient["default"].convertToType(data['contactEmail'], 'String');
        }

        if (data.hasOwnProperty('copyrightEmail')) {
          obj['copyrightEmail'] = _ApiClient["default"].convertToType(data['copyrightEmail'], 'String');
        }

        if (data.hasOwnProperty('currentTOSVersion')) {
          obj['currentTOSVersion'] = _ApiClient["default"].convertToType(data['currentTOSVersion'], 'Number');
        }

        if (data.hasOwnProperty('defaultAvatar')) {
          obj['defaultAvatar'] = _ApiClient["default"].convertToType(data['defaultAvatar'], 'String');
        }

        if (data.hasOwnProperty('deploymentGroup')) {
          obj['deploymentGroup'] = _DeploymentGroup["default"].constructFromObject(data['deploymentGroup']);
        }

        if (data.hasOwnProperty('devAppVersionStandalone')) {
          obj['devAppVersionStandalone'] = _ApiClient["default"].convertToType(data['devAppVersionStandalone'], 'String');
        }

        if (data.hasOwnProperty('devDownloadLinkWindows')) {
          obj['devDownloadLinkWindows'] = _ApiClient["default"].convertToType(data['devDownloadLinkWindows'], 'String');
        }

        if (data.hasOwnProperty('devSdkUrl')) {
          obj['devSdkUrl'] = _ApiClient["default"].convertToType(data['devSdkUrl'], 'String');
        }

        if (data.hasOwnProperty('devSdkVersion')) {
          obj['devSdkVersion'] = _ApiClient["default"].convertToType(data['devSdkVersion'], 'String');
        }

        if (data.hasOwnProperty('devServerVersionStandalone')) {
          obj['devServerVersionStandalone'] = _ApiClient["default"].convertToType(data['devServerVersionStandalone'], 'String');
        }

        if (data.hasOwnProperty('disableAvatarCopying')) {
          obj['disableAvatarCopying'] = _ApiClient["default"].convertToType(data['disableAvatarCopying'], 'Boolean');
        }

        if (data.hasOwnProperty('disableAvatarGating')) {
          obj['disableAvatarGating'] = _ApiClient["default"].convertToType(data['disableAvatarGating'], 'Boolean');
        }

        if (data.hasOwnProperty('disableCommunityLabs')) {
          obj['disableCommunityLabs'] = _ApiClient["default"].convertToType(data['disableCommunityLabs'], 'Boolean');
        }

        if (data.hasOwnProperty('disableCommunityLabsPromotion')) {
          obj['disableCommunityLabsPromotion'] = _ApiClient["default"].convertToType(data['disableCommunityLabsPromotion'], 'Boolean');
        }

        if (data.hasOwnProperty('disableEmail')) {
          obj['disableEmail'] = _ApiClient["default"].convertToType(data['disableEmail'], 'Boolean');
        }

        if (data.hasOwnProperty('disableEventStream')) {
          obj['disableEventStream'] = _ApiClient["default"].convertToType(data['disableEventStream'], 'Boolean');
        }

        if (data.hasOwnProperty('disableFeedbackGating')) {
          obj['disableFeedbackGating'] = _ApiClient["default"].convertToType(data['disableFeedbackGating'], 'Boolean');
        }

        if (data.hasOwnProperty('disableHello')) {
          obj['disableHello'] = _ApiClient["default"].convertToType(data['disableHello'], 'Boolean');
        }

        if (data.hasOwnProperty('disableRegistration')) {
          obj['disableRegistration'] = _ApiClient["default"].convertToType(data['disableRegistration'], 'Boolean');
        }

        if (data.hasOwnProperty('disableSteamNetworking')) {
          obj['disableSteamNetworking'] = _ApiClient["default"].convertToType(data['disableSteamNetworking'], 'Boolean');
        }

        if (data.hasOwnProperty('disableTwoFactorAuth')) {
          obj['disableTwoFactorAuth'] = _ApiClient["default"].convertToType(data['disableTwoFactorAuth'], 'Boolean');
        }

        if (data.hasOwnProperty('disableUdon')) {
          obj['disableUdon'] = _ApiClient["default"].convertToType(data['disableUdon'], 'Boolean');
        }

        if (data.hasOwnProperty('disableUpgradeAccount')) {
          obj['disableUpgradeAccount'] = _ApiClient["default"].convertToType(data['disableUpgradeAccount'], 'Boolean');
        }

        if (data.hasOwnProperty('downloadLinkWindows')) {
          obj['downloadLinkWindows'] = _ApiClient["default"].convertToType(data['downloadLinkWindows'], 'String');
        }

        if (data.hasOwnProperty('downloadUrls')) {
          obj['downloadUrls'] = _ConfigDownloadUrls["default"].constructFromObject(data['downloadUrls']);
        }

        if (data.hasOwnProperty('dynamicWorldRows')) {
          obj['dynamicWorldRows'] = _ApiClient["default"].convertToType(data['dynamicWorldRows'], [_ConfigDynamicWorldRows["default"]]);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ConfigEvents["default"].constructFromObject(data['events']);
        }

        if (data.hasOwnProperty('gearDemoRoomId')) {
          obj['gearDemoRoomId'] = _ApiClient["default"].convertToType(data['gearDemoRoomId'], 'String');
        }

        if (data.hasOwnProperty('homepageRedirectTarget')) {
          obj['homepageRedirectTarget'] = _ApiClient["default"].convertToType(data['homepageRedirectTarget'], 'String');
        }

        if (data.hasOwnProperty('homeWorldId')) {
          obj['homeWorldId'] = _ApiClient["default"].convertToType(data['homeWorldId'], 'String');
        }

        if (data.hasOwnProperty('hubWorldId')) {
          obj['hubWorldId'] = _ApiClient["default"].convertToType(data['hubWorldId'], 'String');
        }

        if (data.hasOwnProperty('jobsEmail')) {
          obj['jobsEmail'] = _ApiClient["default"].convertToType(data['jobsEmail'], 'String');
        }

        if (data.hasOwnProperty('messageOfTheDay')) {
          obj['messageOfTheDay'] = _ApiClient["default"].convertToType(data['messageOfTheDay'], 'String');
        }

        if (data.hasOwnProperty('moderationEmail')) {
          obj['moderationEmail'] = _ApiClient["default"].convertToType(data['moderationEmail'], 'String');
        }

        if (data.hasOwnProperty('moderationQueryPeriod')) {
          obj['moderationQueryPeriod'] = _ApiClient["default"].convertToType(data['moderationQueryPeriod'], 'Number');
        }

        if (data.hasOwnProperty('notAllowedToSelectAvatarInPrivateWorldMessage')) {
          obj['notAllowedToSelectAvatarInPrivateWorldMessage'] = _ApiClient["default"].convertToType(data['notAllowedToSelectAvatarInPrivateWorldMessage'], 'String');
        }

        if (data.hasOwnProperty('plugin')) {
          obj['plugin'] = _ApiClient["default"].convertToType(data['plugin'], 'String');
        }

        if (data.hasOwnProperty('releaseAppVersionStandalone')) {
          obj['releaseAppVersionStandalone'] = _ApiClient["default"].convertToType(data['releaseAppVersionStandalone'], 'String');
        }

        if (data.hasOwnProperty('releaseSdkUrl')) {
          obj['releaseSdkUrl'] = _ApiClient["default"].convertToType(data['releaseSdkUrl'], 'String');
        }

        if (data.hasOwnProperty('releaseSdkVersion')) {
          obj['releaseSdkVersion'] = _ApiClient["default"].convertToType(data['releaseSdkVersion'], 'String');
        }

        if (data.hasOwnProperty('releaseServerVersionStandalone')) {
          obj['releaseServerVersionStandalone'] = _ApiClient["default"].convertToType(data['releaseServerVersionStandalone'], 'String');
        }

        if (data.hasOwnProperty('sdkDeveloperFaqUrl')) {
          obj['sdkDeveloperFaqUrl'] = _ApiClient["default"].convertToType(data['sdkDeveloperFaqUrl'], 'String');
        }

        if (data.hasOwnProperty('sdkDiscordUrl')) {
          obj['sdkDiscordUrl'] = _ApiClient["default"].convertToType(data['sdkDiscordUrl'], 'String');
        }

        if (data.hasOwnProperty('sdkNotAllowedToPublishMessage')) {
          obj['sdkNotAllowedToPublishMessage'] = _ApiClient["default"].convertToType(data['sdkNotAllowedToPublishMessage'], 'String');
        }

        if (data.hasOwnProperty('sdkUnityVersion')) {
          obj['sdkUnityVersion'] = _ApiClient["default"].convertToType(data['sdkUnityVersion'], 'String');
        }

        if (data.hasOwnProperty('serverName')) {
          obj['serverName'] = _ApiClient["default"].convertToType(data['serverName'], 'String');
        }

        if (data.hasOwnProperty('supportEmail')) {
          obj['supportEmail'] = _ApiClient["default"].convertToType(data['supportEmail'], 'String');
        }

        if (data.hasOwnProperty('timeOutWorldId')) {
          obj['timeOutWorldId'] = _ApiClient["default"].convertToType(data['timeOutWorldId'], 'String');
        }

        if (data.hasOwnProperty('tutorialWorldId')) {
          obj['tutorialWorldId'] = _ApiClient["default"].convertToType(data['tutorialWorldId'], 'String');
        }

        if (data.hasOwnProperty('updateRateMsMaximum')) {
          obj['updateRateMsMaximum'] = _ApiClient["default"].convertToType(data['updateRateMsMaximum'], 'Number');
        }

        if (data.hasOwnProperty('updateRateMsMinimum')) {
          obj['updateRateMsMinimum'] = _ApiClient["default"].convertToType(data['updateRateMsMinimum'], 'Number');
        }

        if (data.hasOwnProperty('updateRateMsNormal')) {
          obj['updateRateMsNormal'] = _ApiClient["default"].convertToType(data['updateRateMsNormal'], 'Number');
        }

        if (data.hasOwnProperty('updateRateMsUdonManual')) {
          obj['updateRateMsUdonManual'] = _ApiClient["default"].convertToType(data['updateRateMsUdonManual'], 'Number');
        }

        if (data.hasOwnProperty('uploadAnalysisPercent')) {
          obj['uploadAnalysisPercent'] = _ApiClient["default"].convertToType(data['uploadAnalysisPercent'], 'Number');
        }

        if (data.hasOwnProperty('urlList')) {
          obj['urlList'] = _ApiClient["default"].convertToType(data['urlList'], ['String']);
        }

        if (data.hasOwnProperty('useReliableUdpForVoice')) {
          obj['useReliableUdpForVoice'] = _ApiClient["default"].convertToType(data['useReliableUdpForVoice'], 'Boolean');
        }

        if (data.hasOwnProperty('userUpdatePeriod')) {
          obj['userUpdatePeriod'] = _ApiClient["default"].convertToType(data['userUpdatePeriod'], 'Number');
        }

        if (data.hasOwnProperty('userVerificationDelay')) {
          obj['userVerificationDelay'] = _ApiClient["default"].convertToType(data['userVerificationDelay'], 'Number');
        }

        if (data.hasOwnProperty('userVerificationRetry')) {
          obj['userVerificationRetry'] = _ApiClient["default"].convertToType(data['userVerificationRetry'], 'Number');
        }

        if (data.hasOwnProperty('userVerificationTimeout')) {
          obj['userVerificationTimeout'] = _ApiClient["default"].convertToType(data['userVerificationTimeout'], 'Number');
        }

        if (data.hasOwnProperty('viveWindowsUrl')) {
          obj['viveWindowsUrl'] = _ApiClient["default"].convertToType(data['viveWindowsUrl'], 'String');
        }

        if (data.hasOwnProperty('whiteListedAssetUrls')) {
          obj['whiteListedAssetUrls'] = _ApiClient["default"].convertToType(data['whiteListedAssetUrls'], ['String']);
        }

        if (data.hasOwnProperty('worldUpdatePeriod')) {
          obj['worldUpdatePeriod'] = _ApiClient["default"].convertToType(data['worldUpdatePeriod'], 'Number');
        }

        if (data.hasOwnProperty('youtubedl-hash')) {
          obj['youtubedl-hash'] = _ApiClient["default"].convertToType(data['youtubedl-hash'], 'String');
        }

        if (data.hasOwnProperty('youtubedl-version')) {
          obj['youtubedl-version'] = _ApiClient["default"].convertToType(data['youtubedl-version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Config;
}();
/**
 * VRChat's office address
 * @member {String} address
 */


Config.prototype['address'] = undefined;
/**
 * PSA, Public Announcements
 * @member {Array.<module:model/ConfigAnnouncements>} announcements
 */

Config.prototype['announcements'] = undefined;
/**
 * apiKey to be used for all other requests
 * @member {String} apiKey
 */

Config.prototype['apiKey'] = undefined;
/**
 * Game name
 * @member {String} appName
 * @default 'VrChat'
 */

Config.prototype['appName'] = 'VrChat';
/**
 * Build tag of the API server
 * @member {String} buildVersionTag
 */

Config.prototype['buildVersionTag'] = undefined;
/**
 * apiKey to be used for all other requests
 * @member {String} clientApiKey
 */

Config.prototype['clientApiKey'] = undefined;
/**
 * Unknown
 * @member {Number} clientBPSCeiling
 */

Config.prototype['clientBPSCeiling'] = undefined;
/**
 * Unknown
 * @member {Number} clientDisconnectTimeout
 */

Config.prototype['clientDisconnectTimeout'] = undefined;
/**
 * Unknown
 * @member {Number} clientReservedPlayerBPS
 */

Config.prototype['clientReservedPlayerBPS'] = undefined;
/**
 * Unknown
 * @member {Number} clientSentCountAllowance
 */

Config.prototype['clientSentCountAllowance'] = undefined;
/**
 * VRChat's contact email
 * @member {String} contactEmail
 */

Config.prototype['contactEmail'] = undefined;
/**
 * VRChat's copyright-issues-related email
 * @member {String} copyrightEmail
 */

Config.prototype['copyrightEmail'] = undefined;
/**
 * Current version number of the Terms of Service
 * @member {Number} currentTOSVersion
 */

Config.prototype['currentTOSVersion'] = undefined;
/**
 * @member {String} defaultAvatar
 */

Config.prototype['defaultAvatar'] = undefined;
/**
 * @member {module:model/DeploymentGroup} deploymentGroup
 */

Config.prototype['deploymentGroup'] = undefined;
/**
 * Version number for game development build
 * @member {String} devAppVersionStandalone
 */

Config.prototype['devAppVersionStandalone'] = undefined;
/**
 * Developer Download link
 * @member {String} devDownloadLinkWindows
 */

Config.prototype['devDownloadLinkWindows'] = undefined;
/**
 * Link to download the development SDK, use downloadUrls instead
 * @member {String} devSdkUrl
 */

Config.prototype['devSdkUrl'] = undefined;
/**
 * Version of the development SDK
 * @member {String} devSdkVersion
 */

Config.prototype['devSdkVersion'] = undefined;
/**
 * Version number for server development build
 * @member {String} devServerVersionStandalone
 */

Config.prototype['devServerVersionStandalone'] = undefined;
/**
 * Toggles if copying avatars should be disabled
 * @member {Boolean} disableAvatarCopying
 * @default false
 */

Config.prototype['disableAvatarCopying'] = false;
/**
 * Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the `system_avatar_access` Tag or `admin_avatar_access` Tag
 * @member {Boolean} disableAvatarGating
 * @default false
 */

Config.prototype['disableAvatarGating'] = false;
/**
 * Toggles if the Community Labs should be disabled
 * @member {Boolean} disableCommunityLabs
 * @default false
 */

Config.prototype['disableCommunityLabs'] = false;
/**
 * Toggles if promotion out of Community Labs should be disabled
 * @member {Boolean} disableCommunityLabsPromotion
 * @default false
 */

Config.prototype['disableCommunityLabsPromotion'] = false;
/**
 * Unknown
 * @member {Boolean} disableEmail
 * @default false
 */

Config.prototype['disableEmail'] = false;
/**
 * Toggles if Analytics should be disabled (this sreportedly not used in the Client)
 * @member {Boolean} disableEventStream
 * @default false
 */

Config.prototype['disableEventStream'] = false;
/**
 * Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the `system_feedback_access` Tag.
 * @member {Boolean} disableFeedbackGating
 * @default false
 */

Config.prototype['disableFeedbackGating'] = false;
/**
 * Unknown
 * @member {Boolean} disableHello
 * @default false
 */

Config.prototype['disableHello'] = false;
/**
 * Toggles if new user account registration should be disabled
 * @member {Boolean} disableRegistration
 * @default false
 */

Config.prototype['disableRegistration'] = false;
/**
 * Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead.
 * @member {Boolean} disableSteamNetworking
 * @default true
 */

Config.prototype['disableSteamNetworking'] = true;
/**
 * Toggles if 2FA should be disabled.
 * @member {Boolean} disableTwoFactorAuth
 * @default false
 */

Config.prototype['disableTwoFactorAuth'] = false;
/**
 * Toggles if Udon should be universally disabled in-game.
 * @member {Boolean} disableUdon
 * @default false
 */

Config.prototype['disableUdon'] = false;
/**
 * Toggles if account upgrading \"linking with Steam/Oculus\" should be disabled.
 * @member {Boolean} disableUpgradeAccount
 * @default false
 */

Config.prototype['disableUpgradeAccount'] = false;
/**
 * Download link for game on the Oculus Rift website.
 * @member {String} downloadLinkWindows
 */

Config.prototype['downloadLinkWindows'] = undefined;
/**
 * @member {module:model/ConfigDownloadUrls} downloadUrls
 */

Config.prototype['downloadUrls'] = undefined;
/**
 * Array of DynamicWorldRow objects, used by the game to display the list of world rows
 * @member {Array.<module:model/ConfigDynamicWorldRows>} dynamicWorldRows
 */

Config.prototype['dynamicWorldRows'] = undefined;
/**
 * @member {module:model/ConfigEvents} events
 */

Config.prototype['events'] = undefined;
/**
 * Unknown
 * @member {String} gearDemoRoomId
 */

Config.prototype['gearDemoRoomId'] = undefined;
/**
 * Redirect target if you try to open the base API domain in your browser
 * @member {String} homepageRedirectTarget
 * @default 'https://hello.vrchat.com'
 */

Config.prototype['homepageRedirectTarget'] = 'https://hello.vrchat.com';
/**
 * @member {String} homeWorldId
 */

Config.prototype['homeWorldId'] = undefined;
/**
 * @member {String} hubWorldId
 */

Config.prototype['hubWorldId'] = undefined;
/**
 * VRChat's job application email
 * @member {String} jobsEmail
 */

Config.prototype['jobsEmail'] = undefined;
/**
 * MOTD
 * @member {String} messageOfTheDay
 */

Config.prototype['messageOfTheDay'] = undefined;
/**
 * VRChat's moderation related email
 * @member {String} moderationEmail
 */

Config.prototype['moderationEmail'] = undefined;
/**
 * Unknown
 * @member {Number} moderationQueryPeriod
 */

Config.prototype['moderationQueryPeriod'] = undefined;
/**
 * Used in-game to notify a user they aren't allowed to select avatars in private worlds
 * @member {String} notAllowedToSelectAvatarInPrivateWorldMessage
 */

Config.prototype['notAllowedToSelectAvatarInPrivateWorldMessage'] = undefined;
/**
 * Extra [plugin](https://doc.photonengine.com/en-us/server/current/plugins/manual) to run in each instance
 * @member {String} plugin
 */

Config.prototype['plugin'] = undefined;
/**
 * Version number for game release build
 * @member {String} releaseAppVersionStandalone
 */

Config.prototype['releaseAppVersionStandalone'] = undefined;
/**
 * Link to download the release SDK
 * @member {String} releaseSdkUrl
 */

Config.prototype['releaseSdkUrl'] = undefined;
/**
 * Version of the release SDK
 * @member {String} releaseSdkVersion
 */

Config.prototype['releaseSdkVersion'] = undefined;
/**
 * Version number for server release build
 * @member {String} releaseServerVersionStandalone
 */

Config.prototype['releaseServerVersionStandalone'] = undefined;
/**
 * Link to the developer FAQ
 * @member {String} sdkDeveloperFaqUrl
 */

Config.prototype['sdkDeveloperFaqUrl'] = undefined;
/**
 * Link to the official VRChat Discord
 * @member {String} sdkDiscordUrl
 */

Config.prototype['sdkDiscordUrl'] = undefined;
/**
 * Used in the SDK to notify a user they aren't allowed to upload avatars/worlds yet
 * @member {String} sdkNotAllowedToPublishMessage
 */

Config.prototype['sdkNotAllowedToPublishMessage'] = undefined;
/**
 * Unity version supported by the SDK
 * @member {String} sdkUnityVersion
 */

Config.prototype['sdkUnityVersion'] = undefined;
/**
 * Server name of the API server currently responding
 * @member {String} serverName
 */

Config.prototype['serverName'] = undefined;
/**
 * VRChat's support email
 * @member {String} supportEmail
 */

Config.prototype['supportEmail'] = undefined;
/**
 * @member {String} timeOutWorldId
 */

Config.prototype['timeOutWorldId'] = undefined;
/**
 * @member {String} tutorialWorldId
 */

Config.prototype['tutorialWorldId'] = undefined;
/**
 * Unknown
 * @member {Number} updateRateMsMaximum
 */

Config.prototype['updateRateMsMaximum'] = undefined;
/**
 * Unknown
 * @member {Number} updateRateMsMinimum
 */

Config.prototype['updateRateMsMinimum'] = undefined;
/**
 * Unknown
 * @member {Number} updateRateMsNormal
 */

Config.prototype['updateRateMsNormal'] = undefined;
/**
 * Unknown
 * @member {Number} updateRateMsUdonManual
 */

Config.prototype['updateRateMsUdonManual'] = undefined;
/**
 * Unknown
 * @member {Number} uploadAnalysisPercent
 */

Config.prototype['uploadAnalysisPercent'] = undefined;
/**
 * List of allowed URLs that bypass the \"Allow untrusted URL's\" setting in-game
 * @member {Array.<String>} urlList
 */

Config.prototype['urlList'] = undefined;
/**
 * Unknown
 * @member {Boolean} useReliableUdpForVoice
 * @default false
 */

Config.prototype['useReliableUdpForVoice'] = false;
/**
 * Unknown
 * @member {Number} userUpdatePeriod
 */

Config.prototype['userUpdatePeriod'] = undefined;
/**
 * Unknown
 * @member {Number} userVerificationDelay
 */

Config.prototype['userVerificationDelay'] = undefined;
/**
 * Unknown
 * @member {Number} userVerificationRetry
 */

Config.prototype['userVerificationRetry'] = undefined;
/**
 * Unknown
 * @member {Number} userVerificationTimeout
 */

Config.prototype['userVerificationTimeout'] = undefined;
/**
 * Download link for game on the Steam website.
 * @member {String} viveWindowsUrl
 */

Config.prototype['viveWindowsUrl'] = undefined;
/**
 * List of allowed URLs that are allowed to host avatar assets
 * @member {Array.<String>} whiteListedAssetUrls
 */

Config.prototype['whiteListedAssetUrls'] = undefined;
/**
 * Unknown
 * @member {Number} worldUpdatePeriod
 */

Config.prototype['worldUpdatePeriod'] = undefined;
/**
 * Currently used youtube-dl.exe hash in SHA-256-delimited format
 * @member {String} youtubedl-hash
 */

Config.prototype['youtubedl-hash'] = undefined;
/**
 * Currently used youtube-dl.exe version
 * @member {String} youtubedl-version
 */

Config.prototype['youtubedl-version'] = undefined;
var _default = Config;
exports["default"] = _default;