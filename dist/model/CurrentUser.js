"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeveloperType = _interopRequireDefault(require("./DeveloperType"));

var _UserState = _interopRequireDefault(require("./UserState"));

var _UserStatus = _interopRequireDefault(require("./UserStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CurrentUser model module.
 * @module model/CurrentUser
 * @version 1.0.0
 */
var CurrentUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CurrentUser</code>.
   * @alias module:model/CurrentUser
   * @param id {String} 
   * @param username {String} 
   * @param displayName {String} 
   * @param userIcon {String} 
   * @param bio {String} 
   * @param bioLinks {Array.<String>} 
   * @param profilePicOverride {String} 
   * @param statusDescription {String} 
   * @param pastDisplayNames {Array.<String>} 
   * @param hasEmail {Boolean} 
   * @param hasPendingEmail {Boolean} 
   * @param obfuscatedEmail {String} 
   * @param obfuscatedPendingEmail {String} 
   * @param emailVerified {Boolean} 
   * @param hasBirthday {Boolean} 
   * @param unsubscribe {Boolean} 
   * @param statusHistory {Array.<String>} 
   * @param statusFirstTime {Boolean} 
   * @param friends {Array.<String>} 
   * @param friendGroupNames {Array.<String>} 
   * @param currentAvatarImageUrl {String} 
   * @param currentAvatarThumbnailImageUrl {String} 
   * @param fallbackAvatar {String} 
   * @param currentAvatar {String} 
   * @param currentAvatarAssetUrl {String} 
   * @param acceptedTOSVersion {Number} 
   * @param steamId {String} 
   * @param steamDetails {Object} 
   * @param oculusId {String} 
   * @param hasLoggedInFromClient {Boolean} 
   * @param homeLocation {String} 
   * @param twoFactorAuthEnabled {Boolean} 
   * @param state {module:model/UserState} 
   * @param tags {Array.<String>} 
   * @param developerType {module:model/DeveloperType} 
   * @param lastLogin {Date} 
   * @param lastPlatform {String} 
   * @param allowAvatarCopying {Boolean} 
   * @param status {module:model/UserStatus} 
   * @param dateJoined {Date} 
   * @param isFriend {Boolean} 
   * @param friendKey {String} 
   * @param onlineFriends {Array.<String>} 
   * @param activeFriends {Array.<String>} 
   * @param offlineFriends {Array.<String>} 
   */
  function CurrentUser(id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, pastDisplayNames, hasEmail, hasPendingEmail, obfuscatedEmail, obfuscatedPendingEmail, emailVerified, hasBirthday, unsubscribe, statusHistory, statusFirstTime, friends, friendGroupNames, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, currentAvatar, currentAvatarAssetUrl, acceptedTOSVersion, steamId, steamDetails, oculusId, hasLoggedInFromClient, homeLocation, twoFactorAuthEnabled, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey, onlineFriends, activeFriends, offlineFriends) {
    _classCallCheck(this, CurrentUser);

    CurrentUser.initialize(this, id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, pastDisplayNames, hasEmail, hasPendingEmail, obfuscatedEmail, obfuscatedPendingEmail, emailVerified, hasBirthday, unsubscribe, statusHistory, statusFirstTime, friends, friendGroupNames, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, currentAvatar, currentAvatarAssetUrl, acceptedTOSVersion, steamId, steamDetails, oculusId, hasLoggedInFromClient, homeLocation, twoFactorAuthEnabled, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey, onlineFriends, activeFriends, offlineFriends);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CurrentUser, null, [{
    key: "initialize",
    value: function initialize(obj, id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, pastDisplayNames, hasEmail, hasPendingEmail, obfuscatedEmail, obfuscatedPendingEmail, emailVerified, hasBirthday, unsubscribe, statusHistory, statusFirstTime, friends, friendGroupNames, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, currentAvatar, currentAvatarAssetUrl, acceptedTOSVersion, steamId, steamDetails, oculusId, hasLoggedInFromClient, homeLocation, twoFactorAuthEnabled, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey, onlineFriends, activeFriends, offlineFriends) {
      obj['id'] = id;
      obj['username'] = username;
      obj['displayName'] = displayName;
      obj['userIcon'] = userIcon;
      obj['bio'] = bio;
      obj['bioLinks'] = bioLinks;
      obj['profilePicOverride'] = profilePicOverride;
      obj['statusDescription'] = statusDescription;
      obj['pastDisplayNames'] = pastDisplayNames;
      obj['hasEmail'] = hasEmail;
      obj['hasPendingEmail'] = hasPendingEmail;
      obj['obfuscatedEmail'] = obfuscatedEmail;
      obj['obfuscatedPendingEmail'] = obfuscatedPendingEmail;
      obj['emailVerified'] = emailVerified;
      obj['hasBirthday'] = hasBirthday;
      obj['unsubscribe'] = unsubscribe;
      obj['statusHistory'] = statusHistory;
      obj['statusFirstTime'] = statusFirstTime;
      obj['friends'] = friends;
      obj['friendGroupNames'] = friendGroupNames;
      obj['currentAvatarImageUrl'] = currentAvatarImageUrl;
      obj['currentAvatarThumbnailImageUrl'] = currentAvatarThumbnailImageUrl;
      obj['fallbackAvatar'] = fallbackAvatar;
      obj['currentAvatar'] = currentAvatar;
      obj['currentAvatarAssetUrl'] = currentAvatarAssetUrl;
      obj['acceptedTOSVersion'] = acceptedTOSVersion;
      obj['steamId'] = steamId;
      obj['steamDetails'] = steamDetails;
      obj['oculusId'] = oculusId;
      obj['hasLoggedInFromClient'] = hasLoggedInFromClient;
      obj['homeLocation'] = homeLocation;
      obj['twoFactorAuthEnabled'] = twoFactorAuthEnabled;
      obj['state'] = state;
      obj['tags'] = tags;
      obj['developerType'] = developerType;
      obj['last_login'] = lastLogin;
      obj['last_platform'] = lastPlatform;
      obj['allowAvatarCopying'] = allowAvatarCopying;
      obj['status'] = status;
      obj['date_joined'] = dateJoined;
      obj['isFriend'] = isFriend || false;
      obj['friendKey'] = friendKey;
      obj['onlineFriends'] = onlineFriends;
      obj['activeFriends'] = activeFriends;
      obj['offlineFriends'] = offlineFriends;
    }
    /**
     * Constructs a <code>CurrentUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrentUser} obj Optional instance to populate.
     * @return {module:model/CurrentUser} The populated <code>CurrentUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CurrentUser();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('userIcon')) {
          obj['userIcon'] = _ApiClient["default"].convertToType(data['userIcon'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('bioLinks')) {
          obj['bioLinks'] = _ApiClient["default"].convertToType(data['bioLinks'], ['String']);
        }

        if (data.hasOwnProperty('profilePicOverride')) {
          obj['profilePicOverride'] = _ApiClient["default"].convertToType(data['profilePicOverride'], 'String');
        }

        if (data.hasOwnProperty('statusDescription')) {
          obj['statusDescription'] = _ApiClient["default"].convertToType(data['statusDescription'], 'String');
        }

        if (data.hasOwnProperty('pastDisplayNames')) {
          obj['pastDisplayNames'] = _ApiClient["default"].convertToType(data['pastDisplayNames'], ['String']);
        }

        if (data.hasOwnProperty('hasEmail')) {
          obj['hasEmail'] = _ApiClient["default"].convertToType(data['hasEmail'], 'Boolean');
        }

        if (data.hasOwnProperty('hasPendingEmail')) {
          obj['hasPendingEmail'] = _ApiClient["default"].convertToType(data['hasPendingEmail'], 'Boolean');
        }

        if (data.hasOwnProperty('obfuscatedEmail')) {
          obj['obfuscatedEmail'] = _ApiClient["default"].convertToType(data['obfuscatedEmail'], 'String');
        }

        if (data.hasOwnProperty('obfuscatedPendingEmail')) {
          obj['obfuscatedPendingEmail'] = _ApiClient["default"].convertToType(data['obfuscatedPendingEmail'], 'String');
        }

        if (data.hasOwnProperty('emailVerified')) {
          obj['emailVerified'] = _ApiClient["default"].convertToType(data['emailVerified'], 'Boolean');
        }

        if (data.hasOwnProperty('hasBirthday')) {
          obj['hasBirthday'] = _ApiClient["default"].convertToType(data['hasBirthday'], 'Boolean');
        }

        if (data.hasOwnProperty('unsubscribe')) {
          obj['unsubscribe'] = _ApiClient["default"].convertToType(data['unsubscribe'], 'Boolean');
        }

        if (data.hasOwnProperty('statusHistory')) {
          obj['statusHistory'] = _ApiClient["default"].convertToType(data['statusHistory'], ['String']);
        }

        if (data.hasOwnProperty('statusFirstTime')) {
          obj['statusFirstTime'] = _ApiClient["default"].convertToType(data['statusFirstTime'], 'Boolean');
        }

        if (data.hasOwnProperty('friends')) {
          obj['friends'] = _ApiClient["default"].convertToType(data['friends'], ['String']);
        }

        if (data.hasOwnProperty('friendGroupNames')) {
          obj['friendGroupNames'] = _ApiClient["default"].convertToType(data['friendGroupNames'], ['String']);
        }

        if (data.hasOwnProperty('currentAvatarImageUrl')) {
          obj['currentAvatarImageUrl'] = _ApiClient["default"].convertToType(data['currentAvatarImageUrl'], 'String');
        }

        if (data.hasOwnProperty('currentAvatarThumbnailImageUrl')) {
          obj['currentAvatarThumbnailImageUrl'] = _ApiClient["default"].convertToType(data['currentAvatarThumbnailImageUrl'], 'String');
        }

        if (data.hasOwnProperty('fallbackAvatar')) {
          obj['fallbackAvatar'] = _ApiClient["default"].convertToType(data['fallbackAvatar'], 'String');
        }

        if (data.hasOwnProperty('currentAvatar')) {
          obj['currentAvatar'] = _ApiClient["default"].convertToType(data['currentAvatar'], 'String');
        }

        if (data.hasOwnProperty('currentAvatarAssetUrl')) {
          obj['currentAvatarAssetUrl'] = _ApiClient["default"].convertToType(data['currentAvatarAssetUrl'], 'String');
        }

        if (data.hasOwnProperty('accountDeletionDate')) {
          obj['accountDeletionDate'] = _ApiClient["default"].convertToType(data['accountDeletionDate'], 'Date');
        }

        if (data.hasOwnProperty('acceptedTOSVersion')) {
          obj['acceptedTOSVersion'] = _ApiClient["default"].convertToType(data['acceptedTOSVersion'], 'Number');
        }

        if (data.hasOwnProperty('steamId')) {
          obj['steamId'] = _ApiClient["default"].convertToType(data['steamId'], 'String');
        }

        if (data.hasOwnProperty('steamDetails')) {
          obj['steamDetails'] = _ApiClient["default"].convertToType(data['steamDetails'], Object);
        }

        if (data.hasOwnProperty('oculusId')) {
          obj['oculusId'] = _ApiClient["default"].convertToType(data['oculusId'], 'String');
        }

        if (data.hasOwnProperty('hasLoggedInFromClient')) {
          obj['hasLoggedInFromClient'] = _ApiClient["default"].convertToType(data['hasLoggedInFromClient'], 'Boolean');
        }

        if (data.hasOwnProperty('homeLocation')) {
          obj['homeLocation'] = _ApiClient["default"].convertToType(data['homeLocation'], 'String');
        }

        if (data.hasOwnProperty('twoFactorAuthEnabled')) {
          obj['twoFactorAuthEnabled'] = _ApiClient["default"].convertToType(data['twoFactorAuthEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _UserState["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('developerType')) {
          obj['developerType'] = _DeveloperType["default"].constructFromObject(data['developerType']);
        }

        if (data.hasOwnProperty('last_login')) {
          obj['last_login'] = _ApiClient["default"].convertToType(data['last_login'], 'Date');
        }

        if (data.hasOwnProperty('last_platform')) {
          obj['last_platform'] = _ApiClient["default"].convertToType(data['last_platform'], 'String');
        }

        if (data.hasOwnProperty('allowAvatarCopying')) {
          obj['allowAvatarCopying'] = _ApiClient["default"].convertToType(data['allowAvatarCopying'], 'Boolean');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _UserStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('date_joined')) {
          obj['date_joined'] = _ApiClient["default"].convertToType(data['date_joined'], 'Date');
        }

        if (data.hasOwnProperty('isFriend')) {
          obj['isFriend'] = _ApiClient["default"].convertToType(data['isFriend'], 'Boolean');
        }

        if (data.hasOwnProperty('friendKey')) {
          obj['friendKey'] = _ApiClient["default"].convertToType(data['friendKey'], 'String');
        }

        if (data.hasOwnProperty('onlineFriends')) {
          obj['onlineFriends'] = _ApiClient["default"].convertToType(data['onlineFriends'], ['String']);
        }

        if (data.hasOwnProperty('activeFriends')) {
          obj['activeFriends'] = _ApiClient["default"].convertToType(data['activeFriends'], ['String']);
        }

        if (data.hasOwnProperty('offlineFriends')) {
          obj['offlineFriends'] = _ApiClient["default"].convertToType(data['offlineFriends'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CurrentUser;
}();
/**
 * @member {String} id
 */


CurrentUser.prototype['id'] = undefined;
/**
 * @member {String} username
 */

CurrentUser.prototype['username'] = undefined;
/**
 * @member {String} displayName
 */

CurrentUser.prototype['displayName'] = undefined;
/**
 * @member {String} userIcon
 */

CurrentUser.prototype['userIcon'] = undefined;
/**
 * @member {String} bio
 */

CurrentUser.prototype['bio'] = undefined;
/**
 * @member {Array.<String>} bioLinks
 */

CurrentUser.prototype['bioLinks'] = undefined;
/**
 * @member {String} profilePicOverride
 */

CurrentUser.prototype['profilePicOverride'] = undefined;
/**
 * @member {String} statusDescription
 */

CurrentUser.prototype['statusDescription'] = undefined;
/**
 * @member {Array.<String>} pastDisplayNames
 */

CurrentUser.prototype['pastDisplayNames'] = undefined;
/**
 * @member {Boolean} hasEmail
 */

CurrentUser.prototype['hasEmail'] = undefined;
/**
 * @member {Boolean} hasPendingEmail
 */

CurrentUser.prototype['hasPendingEmail'] = undefined;
/**
 * @member {String} obfuscatedEmail
 */

CurrentUser.prototype['obfuscatedEmail'] = undefined;
/**
 * @member {String} obfuscatedPendingEmail
 */

CurrentUser.prototype['obfuscatedPendingEmail'] = undefined;
/**
 * @member {Boolean} emailVerified
 */

CurrentUser.prototype['emailVerified'] = undefined;
/**
 * @member {Boolean} hasBirthday
 */

CurrentUser.prototype['hasBirthday'] = undefined;
/**
 * @member {Boolean} unsubscribe
 */

CurrentUser.prototype['unsubscribe'] = undefined;
/**
 * @member {Array.<String>} statusHistory
 */

CurrentUser.prototype['statusHistory'] = undefined;
/**
 * @member {Boolean} statusFirstTime
 */

CurrentUser.prototype['statusFirstTime'] = undefined;
/**
 * @member {Array.<String>} friends
 */

CurrentUser.prototype['friends'] = undefined;
/**
 * @member {Array.<String>} friendGroupNames
 */

CurrentUser.prototype['friendGroupNames'] = undefined;
/**
 * @member {String} currentAvatarImageUrl
 */

CurrentUser.prototype['currentAvatarImageUrl'] = undefined;
/**
 * @member {String} currentAvatarThumbnailImageUrl
 */

CurrentUser.prototype['currentAvatarThumbnailImageUrl'] = undefined;
/**
 * @member {String} fallbackAvatar
 */

CurrentUser.prototype['fallbackAvatar'] = undefined;
/**
 * @member {String} currentAvatar
 */

CurrentUser.prototype['currentAvatar'] = undefined;
/**
 * @member {String} currentAvatarAssetUrl
 */

CurrentUser.prototype['currentAvatarAssetUrl'] = undefined;
/**
 * @member {Date} accountDeletionDate
 */

CurrentUser.prototype['accountDeletionDate'] = undefined;
/**
 * @member {Number} acceptedTOSVersion
 */

CurrentUser.prototype['acceptedTOSVersion'] = undefined;
/**
 * @member {String} steamId
 */

CurrentUser.prototype['steamId'] = undefined;
/**
 * @member {Object} steamDetails
 */

CurrentUser.prototype['steamDetails'] = undefined;
/**
 * @member {String} oculusId
 */

CurrentUser.prototype['oculusId'] = undefined;
/**
 * @member {Boolean} hasLoggedInFromClient
 */

CurrentUser.prototype['hasLoggedInFromClient'] = undefined;
/**
 * @member {String} homeLocation
 */

CurrentUser.prototype['homeLocation'] = undefined;
/**
 * @member {Boolean} twoFactorAuthEnabled
 */

CurrentUser.prototype['twoFactorAuthEnabled'] = undefined;
/**
 * @member {module:model/UserState} state
 */

CurrentUser.prototype['state'] = undefined;
/**
 * @member {Array.<String>} tags
 */

CurrentUser.prototype['tags'] = undefined;
/**
 * @member {module:model/DeveloperType} developerType
 */

CurrentUser.prototype['developerType'] = undefined;
/**
 * @member {Date} last_login
 */

CurrentUser.prototype['last_login'] = undefined;
/**
 * @member {String} last_platform
 */

CurrentUser.prototype['last_platform'] = undefined;
/**
 * @member {Boolean} allowAvatarCopying
 */

CurrentUser.prototype['allowAvatarCopying'] = undefined;
/**
 * @member {module:model/UserStatus} status
 */

CurrentUser.prototype['status'] = undefined;
/**
 * @member {Date} date_joined
 */

CurrentUser.prototype['date_joined'] = undefined;
/**
 * @member {Boolean} isFriend
 * @default false
 */

CurrentUser.prototype['isFriend'] = false;
/**
 * @member {String} friendKey
 */

CurrentUser.prototype['friendKey'] = undefined;
/**
 * @member {Array.<String>} onlineFriends
 */

CurrentUser.prototype['onlineFriends'] = undefined;
/**
 * @member {Array.<String>} activeFriends
 */

CurrentUser.prototype['activeFriends'] = undefined;
/**
 * @member {Array.<String>} offlineFriends
 */

CurrentUser.prototype['offlineFriends'] = undefined;
var _default = CurrentUser;
exports["default"] = _default;