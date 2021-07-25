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
 * The ConfigAnnouncements model module.
 * @module model/ConfigAnnouncements
 * @version 1.0.0
 */
var ConfigAnnouncements = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfigAnnouncements</code>.
   * Public Announcement
   * @alias module:model/ConfigAnnouncements
   * @param name {String} Announcement name
   * @param text {String} Announcement text
   */
  function ConfigAnnouncements(name, text) {
    _classCallCheck(this, ConfigAnnouncements);

    ConfigAnnouncements.initialize(this, name, text);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfigAnnouncements, null, [{
    key: "initialize",
    value: function initialize(obj, name, text) {
      obj['name'] = name;
      obj['text'] = text;
    }
    /**
     * Constructs a <code>ConfigAnnouncements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigAnnouncements} obj Optional instance to populate.
     * @return {module:model/ConfigAnnouncements} The populated <code>ConfigAnnouncements</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfigAnnouncements();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConfigAnnouncements;
}();
/**
 * Announcement name
 * @member {String} name
 */


ConfigAnnouncements.prototype['name'] = undefined;
/**
 * Announcement text
 * @member {String} text
 */

ConfigAnnouncements.prototype['text'] = undefined;
var _default = ConfigAnnouncements;
exports["default"] = _default;