"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConfigDownloadUrls model module.
 * @module model/ConfigDownloadUrls
 * @version 1.0.0
 */
var ConfigDownloadUrls = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfigDownloadUrls</code>.
   * Download links for various development assets
   * @alias module:model/ConfigDownloadUrls
   * @param sdk2 {String} Download link for legacy SDK2
   * @param sdk3Avatars {String} Download link for SDK3 for Avatars
   * @param sdk3Worlds {String} Download link for SDK3 for Worlds
   */
  function ConfigDownloadUrls(sdk2, sdk3Avatars, sdk3Worlds) {
    _classCallCheck(this, ConfigDownloadUrls);

    ConfigDownloadUrls.initialize(this, sdk2, sdk3Avatars, sdk3Worlds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfigDownloadUrls, null, [{
    key: "initialize",
    value: function initialize(obj, sdk2, sdk3Avatars, sdk3Worlds) {
      obj['sdk2'] = sdk2;
      obj['sdk3-avatars'] = sdk3Avatars;
      obj['sdk3-worlds'] = sdk3Worlds;
    }
    /**
     * Constructs a <code>ConfigDownloadUrls</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigDownloadUrls} obj Optional instance to populate.
     * @return {module:model/ConfigDownloadUrls} The populated <code>ConfigDownloadUrls</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfigDownloadUrls();

        if (data.hasOwnProperty('sdk2')) {
          obj['sdk2'] = _ApiClient["default"].convertToType(data['sdk2'], 'String');
        }

        if (data.hasOwnProperty('sdk3-avatars')) {
          obj['sdk3-avatars'] = _ApiClient["default"].convertToType(data['sdk3-avatars'], 'String');
        }

        if (data.hasOwnProperty('sdk3-worlds')) {
          obj['sdk3-worlds'] = _ApiClient["default"].convertToType(data['sdk3-worlds'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConfigDownloadUrls;
}();
/**
 * Download link for legacy SDK2
 * @member {String} sdk2
 */


ConfigDownloadUrls.prototype['sdk2'] = undefined;
/**
 * Download link for SDK3 for Avatars
 * @member {String} sdk3-avatars
 */

ConfigDownloadUrls.prototype['sdk3-avatars'] = undefined;
/**
 * Download link for SDK3 for Worlds
 * @member {String} sdk3-worlds
 */

ConfigDownloadUrls.prototype['sdk3-worlds'] = undefined;
var _default = ConfigDownloadUrls;
exports["default"] = _default;