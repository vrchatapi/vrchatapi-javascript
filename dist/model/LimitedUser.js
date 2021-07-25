"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeveloperType = _interopRequireDefault(require("./DeveloperType"));

var _UserStatus = _interopRequireDefault(require("./UserStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LimitedUser model module.
 * @module model/LimitedUser
 * @version 1.0.0
 */
var LimitedUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LimitedUser</code>.
   * @alias module:model/LimitedUser
   * @param id {String} 
   * @param username {String} 
   * @param displayName {String} 
   * @param userIcon {String} 
   * @param profilePicOverride {String} 
   * @param statusDescription {String} 
   * @param currentAvatarImageUrl {String} 
   * @param currentAvatarThumbnailImageUrl {String} 
   * @param fallbackAvatar {String} 
   * @param developerType {module:model/DeveloperType} 
   * @param lastPlatform {String} 
   * @param status {module:model/UserStatus} 
   * @param isFriend {Boolean} 
   * @param location {String} 
   * @param tags {Array.<String>} Always empty
   */
  function LimitedUser(id, username, displayName, userIcon, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, developerType, lastPlatform, status, isFriend, location, tags) {
    _classCallCheck(this, LimitedUser);

    LimitedUser.initialize(this, id, username, displayName, userIcon, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, developerType, lastPlatform, status, isFriend, location, tags);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LimitedUser, null, [{
    key: "initialize",
    value: function initialize(obj, id, username, displayName, userIcon, profilePicOverride, statusDescription, currentAvatarImageUrl, currentAvatarThumbnailImageUrl, fallbackAvatar, developerType, lastPlatform, status, isFriend, location, tags) {
      obj['id'] = id;
      obj['username'] = username;
      obj['displayName'] = displayName;
      obj['userIcon'] = userIcon;
      obj['profilePicOverride'] = profilePicOverride;
      obj['statusDescription'] = statusDescription;
      obj['currentAvatarImageUrl'] = currentAvatarImageUrl;
      obj['currentAvatarThumbnailImageUrl'] = currentAvatarThumbnailImageUrl;
      obj['fallbackAvatar'] = fallbackAvatar;
      obj['developerType'] = developerType;
      obj['last_platform'] = lastPlatform;
      obj['status'] = status;
      obj['isFriend'] = isFriend;
      obj['location'] = location;
      obj['tags'] = tags;
    }
    /**
     * Constructs a <code>LimitedUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitedUser} obj Optional instance to populate.
     * @return {module:model/LimitedUser} The populated <code>LimitedUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LimitedUser();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('userIcon')) {
          obj['userIcon'] = _ApiClient["default"].convertToType(data['userIcon'], 'String');
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

        if (data.hasOwnProperty('developerType')) {
          obj['developerType'] = _DeveloperType["default"].constructFromObject(data['developerType']);
        }

        if (data.hasOwnProperty('last_platform')) {
          obj['last_platform'] = _ApiClient["default"].convertToType(data['last_platform'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _UserStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('isFriend')) {
          obj['isFriend'] = _ApiClient["default"].convertToType(data['isFriend'], 'Boolean');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return LimitedUser;
}();
/**
 * @member {String} id
 */


LimitedUser.prototype['id'] = undefined;
/**
 * @member {String} username
 */

LimitedUser.prototype['username'] = undefined;
/**
 * @member {String} displayName
 */

LimitedUser.prototype['displayName'] = undefined;
/**
 * @member {String} bio
 */

LimitedUser.prototype['bio'] = undefined;
/**
 * @member {String} userIcon
 */

LimitedUser.prototype['userIcon'] = undefined;
/**
 * @member {String} profilePicOverride
 */

LimitedUser.prototype['profilePicOverride'] = undefined;
/**
 * @member {String} statusDescription
 */

LimitedUser.prototype['statusDescription'] = undefined;
/**
 * @member {String} currentAvatarImageUrl
 */

LimitedUser.prototype['currentAvatarImageUrl'] = undefined;
/**
 * @member {String} currentAvatarThumbnailImageUrl
 */

LimitedUser.prototype['currentAvatarThumbnailImageUrl'] = undefined;
/**
 * @member {String} fallbackAvatar
 */

LimitedUser.prototype['fallbackAvatar'] = undefined;
/**
 * @member {module:model/DeveloperType} developerType
 */

LimitedUser.prototype['developerType'] = undefined;
/**
 * @member {String} last_platform
 */

LimitedUser.prototype['last_platform'] = undefined;
/**
 * @member {module:model/UserStatus} status
 */

LimitedUser.prototype['status'] = undefined;
/**
 * @member {Boolean} isFriend
 */

LimitedUser.prototype['isFriend'] = undefined;
/**
 * @member {String} location
 */

LimitedUser.prototype['location'] = undefined;
/**
 * Always empty
 * @member {Array.<String>} tags
 */

LimitedUser.prototype['tags'] = undefined;
var _default = LimitedUser;
exports["default"] = _default;