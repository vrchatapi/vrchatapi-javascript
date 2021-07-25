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
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @param id {String} 
   * @param username {String} 
   * @param displayName {String} 
   * @param userIcon {String} 
   * @param bio {String} 
   * @param bioLinks {Array.<String>} 
   * @param profilePicOverride {String} 
   * @param statusDescription {String} 
   * @param currentAvatarImageUrl {String} 
   * @param currentAvatarThumbnailImageUrl {String} 
   * @param fallbackAvatar {String} 
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
   */
  function User(id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey) {
    _classCallCheck(this, User);

    User.initialize(this, id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj, id, username, displayName, userIcon, bio, bioLinks, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, state, tags, developerType, lastLogin, lastPlatform, allowAvatarCopying, status, dateJoined, isFriend, friendKey) {
      obj['id'] = id;
      obj['username'] = username;
      obj['displayName'] = displayName;
      obj['userIcon'] = userIcon;
      obj['bio'] = bio;
      obj['bioLinks'] = bioLinks;
      obj['profilePicOverride'] = profilePicOverride;
      obj['statusDescription'] = statusDescription;
      obj['currentAvatarImageUrl'] = currentAvatarImageUrl;
      obj['currentAvatarThumbnailImageUrl'] = currentAvatarThumbnailImageUrl;
      obj['fallbackAvatar'] = fallbackAvatar;
      obj['state'] = state;
      obj['tags'] = tags;
      obj['developerType'] = developerType;
      obj['last_login'] = lastLogin;
      obj['last_platform'] = lastPlatform;
      obj['allowAvatarCopying'] = allowAvatarCopying;
      obj['status'] = status;
      obj['date_joined'] = dateJoined;
      obj['isFriend'] = isFriend;
      obj['friendKey'] = friendKey;
    }
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

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

        if (data.hasOwnProperty('currentAvatarImageUrl')) {
          obj['currentAvatarImageUrl'] = _ApiClient["default"].convertToType(data['currentAvatarImageUrl'], 'String');
        }

        if (data.hasOwnProperty('currentAvatarThumbnailImageUrl')) {
          obj['currentAvatarThumbnailImageUrl'] = _ApiClient["default"].convertToType(data['currentAvatarThumbnailImageUrl'], 'String');
        }

        if (data.hasOwnProperty('fallbackAvatar')) {
          obj['fallbackAvatar'] = _ApiClient["default"].convertToType(data['fallbackAvatar'], 'String');
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

        if (data.hasOwnProperty('worldId')) {
          obj['worldId'] = _ApiClient["default"].convertToType(data['worldId'], 'String');
        }

        if (data.hasOwnProperty('instanceId')) {
          obj['instanceId'] = _ApiClient["default"].convertToType(data['instanceId'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * @member {String} id
 */


User.prototype['id'] = undefined;
/**
 * @member {String} username
 */

User.prototype['username'] = undefined;
/**
 * @member {String} displayName
 */

User.prototype['displayName'] = undefined;
/**
 * @member {String} userIcon
 */

User.prototype['userIcon'] = undefined;
/**
 * @member {String} bio
 */

User.prototype['bio'] = undefined;
/**
 * @member {Array.<String>} bioLinks
 */

User.prototype['bioLinks'] = undefined;
/**
 * @member {String} profilePicOverride
 */

User.prototype['profilePicOverride'] = undefined;
/**
 * @member {String} statusDescription
 */

User.prototype['statusDescription'] = undefined;
/**
 * @member {String} currentAvatarImageUrl
 */

User.prototype['currentAvatarImageUrl'] = undefined;
/**
 * @member {String} currentAvatarThumbnailImageUrl
 */

User.prototype['currentAvatarThumbnailImageUrl'] = undefined;
/**
 * @member {String} fallbackAvatar
 */

User.prototype['fallbackAvatar'] = undefined;
/**
 * @member {module:model/UserState} state
 */

User.prototype['state'] = undefined;
/**
 * @member {Array.<String>} tags
 */

User.prototype['tags'] = undefined;
/**
 * @member {module:model/DeveloperType} developerType
 */

User.prototype['developerType'] = undefined;
/**
 * @member {Date} last_login
 */

User.prototype['last_login'] = undefined;
/**
 * @member {String} last_platform
 */

User.prototype['last_platform'] = undefined;
/**
 * @member {Boolean} allowAvatarCopying
 */

User.prototype['allowAvatarCopying'] = undefined;
/**
 * @member {module:model/UserStatus} status
 */

User.prototype['status'] = undefined;
/**
 * @member {Date} date_joined
 */

User.prototype['date_joined'] = undefined;
/**
 * @member {Boolean} isFriend
 */

User.prototype['isFriend'] = undefined;
/**
 * @member {String} friendKey
 */

User.prototype['friendKey'] = undefined;
/**
 * @member {String} worldId
 */

User.prototype['worldId'] = undefined;
/**
 * @member {String} instanceId
 */

User.prototype['instanceId'] = undefined;
/**
 * @member {String} location
 */

User.prototype['location'] = undefined;
var _default = User;
exports["default"] = _default;