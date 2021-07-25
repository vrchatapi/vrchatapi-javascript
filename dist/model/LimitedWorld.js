"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReleaseStatus = _interopRequireDefault(require("./ReleaseStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LimitedWorld model module.
 * @module model/LimitedWorld
 * @version 1.0.0
 */
var LimitedWorld = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LimitedWorld</code>.
   * @alias module:model/LimitedWorld
   * @param authorId {String} 
   * @param authorName {String} 
   * @param capacity {Number} 
   * @param favorites {Number} 
   * @param heat {Number} 
   * @param id {String} 
   * @param imageUrl {String} 
   * @param name {String} 
   * @param organization {String} 
   * @param popularity {Number} 
   * @param publicationDate {String} 
   * @param releaseStatus {module:model/ReleaseStatus} 
   * @param tags {Array.<String>} 
   * @param thumbnailImageUrl {String} 
   * @param unityPackages {Array.<Object>} 
   */
  function LimitedWorld(authorId, authorName, capacity, favorites, heat, id, imageUrl, name, organization, popularity, publicationDate, releaseStatus, tags, thumbnailImageUrl, unityPackages) {
    _classCallCheck(this, LimitedWorld);

    LimitedWorld.initialize(this, authorId, authorName, capacity, favorites, heat, id, imageUrl, name, organization, popularity, publicationDate, releaseStatus, tags, thumbnailImageUrl, unityPackages);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LimitedWorld, null, [{
    key: "initialize",
    value: function initialize(obj, authorId, authorName, capacity, favorites, heat, id, imageUrl, name, organization, popularity, publicationDate, releaseStatus, tags, thumbnailImageUrl, unityPackages) {
      obj['authorId'] = authorId;
      obj['authorName'] = authorName;
      obj['capacity'] = capacity;
      obj['favorites'] = favorites;
      obj['heat'] = heat;
      obj['id'] = id;
      obj['imageUrl'] = imageUrl;
      obj['name'] = name;
      obj['organization'] = organization;
      obj['popularity'] = popularity;
      obj['publicationDate'] = publicationDate;
      obj['releaseStatus'] = releaseStatus;
      obj['tags'] = tags;
      obj['thumbnailImageUrl'] = thumbnailImageUrl;
      obj['unityPackages'] = unityPackages;
    }
    /**
     * Constructs a <code>LimitedWorld</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitedWorld} obj Optional instance to populate.
     * @return {module:model/LimitedWorld} The populated <code>LimitedWorld</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LimitedWorld();

        if (data.hasOwnProperty('authorId')) {
          obj['authorId'] = _ApiClient["default"].convertToType(data['authorId'], 'String');
        }

        if (data.hasOwnProperty('authorName')) {
          obj['authorName'] = _ApiClient["default"].convertToType(data['authorName'], 'String');
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('favorites')) {
          obj['favorites'] = _ApiClient["default"].convertToType(data['favorites'], 'Number');
        }

        if (data.hasOwnProperty('heat')) {
          obj['heat'] = _ApiClient["default"].convertToType(data['heat'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('imageUrl')) {
          obj['imageUrl'] = _ApiClient["default"].convertToType(data['imageUrl'], 'String');
        }

        if (data.hasOwnProperty('labsPublicationDate')) {
          obj['labsPublicationDate'] = _ApiClient["default"].convertToType(data['labsPublicationDate'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('occupants')) {
          obj['occupants'] = _ApiClient["default"].convertToType(data['occupants'], 'Number');
        }

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _ApiClient["default"].convertToType(data['organization'], 'String');
        }

        if (data.hasOwnProperty('popularity')) {
          obj['popularity'] = _ApiClient["default"].convertToType(data['popularity'], 'Number');
        }

        if (data.hasOwnProperty('publicationDate')) {
          obj['publicationDate'] = _ApiClient["default"].convertToType(data['publicationDate'], 'String');
        }

        if (data.hasOwnProperty('releaseStatus')) {
          obj['releaseStatus'] = _ReleaseStatus["default"].constructFromObject(data['releaseStatus']);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('thumbnailImageUrl')) {
          obj['thumbnailImageUrl'] = _ApiClient["default"].convertToType(data['thumbnailImageUrl'], 'String');
        }

        if (data.hasOwnProperty('unityPackages')) {
          obj['unityPackages'] = _ApiClient["default"].convertToType(data['unityPackages'], [Object]);
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return LimitedWorld;
}();
/**
 * @member {String} authorId
 */


LimitedWorld.prototype['authorId'] = undefined;
/**
 * @member {String} authorName
 */

LimitedWorld.prototype['authorName'] = undefined;
/**
 * @member {Number} capacity
 */

LimitedWorld.prototype['capacity'] = undefined;
/**
 * @member {Date} created_at
 */

LimitedWorld.prototype['created_at'] = undefined;
/**
 * @member {Number} favorites
 */

LimitedWorld.prototype['favorites'] = undefined;
/**
 * @member {Number} heat
 */

LimitedWorld.prototype['heat'] = undefined;
/**
 * @member {String} id
 */

LimitedWorld.prototype['id'] = undefined;
/**
 * @member {String} imageUrl
 */

LimitedWorld.prototype['imageUrl'] = undefined;
/**
 * @member {String} labsPublicationDate
 */

LimitedWorld.prototype['labsPublicationDate'] = undefined;
/**
 * @member {String} name
 */

LimitedWorld.prototype['name'] = undefined;
/**
 * @member {Number} occupants
 */

LimitedWorld.prototype['occupants'] = undefined;
/**
 * @member {String} organization
 */

LimitedWorld.prototype['organization'] = undefined;
/**
 * @member {Number} popularity
 */

LimitedWorld.prototype['popularity'] = undefined;
/**
 * @member {String} publicationDate
 */

LimitedWorld.prototype['publicationDate'] = undefined;
/**
 * @member {module:model/ReleaseStatus} releaseStatus
 */

LimitedWorld.prototype['releaseStatus'] = undefined;
/**
 * @member {Array.<String>} tags
 */

LimitedWorld.prototype['tags'] = undefined;
/**
 * @member {String} thumbnailImageUrl
 */

LimitedWorld.prototype['thumbnailImageUrl'] = undefined;
/**
 * @member {Array.<Object>} unityPackages
 */

LimitedWorld.prototype['unityPackages'] = undefined;
/**
 * @member {Date} updated_at
 */

LimitedWorld.prototype['updated_at'] = undefined;
var _default = LimitedWorld;
exports["default"] = _default;