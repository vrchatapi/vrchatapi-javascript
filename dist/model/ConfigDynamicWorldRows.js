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
 * The ConfigDynamicWorldRows model module.
 * @module model/ConfigDynamicWorldRows
 * @version 1.0.0
 */
var ConfigDynamicWorldRows = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfigDynamicWorldRows</code>.
   * @alias module:model/ConfigDynamicWorldRows
   * @param index {Number} 
   * @param name {String} 
   * @param platform {String} 
   * @param sortHeading {String} 
   * @param sortOrder {String} 
   * @param sortOwnership {String} 
   */
  function ConfigDynamicWorldRows(index, name, platform, sortHeading, sortOrder, sortOwnership) {
    _classCallCheck(this, ConfigDynamicWorldRows);

    ConfigDynamicWorldRows.initialize(this, index, name, platform, sortHeading, sortOrder, sortOwnership);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfigDynamicWorldRows, null, [{
    key: "initialize",
    value: function initialize(obj, index, name, platform, sortHeading, sortOrder, sortOwnership) {
      obj['index'] = index;
      obj['name'] = name;
      obj['platform'] = platform;
      obj['sortHeading'] = sortHeading;
      obj['sortOrder'] = sortOrder;
      obj['sortOwnership'] = sortOwnership;
    }
    /**
     * Constructs a <code>ConfigDynamicWorldRows</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigDynamicWorldRows} obj Optional instance to populate.
     * @return {module:model/ConfigDynamicWorldRows} The populated <code>ConfigDynamicWorldRows</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfigDynamicWorldRows();

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'String');
        }

        if (data.hasOwnProperty('sortHeading')) {
          obj['sortHeading'] = _ApiClient["default"].convertToType(data['sortHeading'], 'String');
        }

        if (data.hasOwnProperty('sortOrder')) {
          obj['sortOrder'] = _ApiClient["default"].convertToType(data['sortOrder'], 'String');
        }

        if (data.hasOwnProperty('sortOwnership')) {
          obj['sortOwnership'] = _ApiClient["default"].convertToType(data['sortOwnership'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConfigDynamicWorldRows;
}();
/**
 * @member {Number} index
 */


ConfigDynamicWorldRows.prototype['index'] = undefined;
/**
 * @member {String} name
 */

ConfigDynamicWorldRows.prototype['name'] = undefined;
/**
 * @member {String} platform
 */

ConfigDynamicWorldRows.prototype['platform'] = undefined;
/**
 * @member {String} sortHeading
 */

ConfigDynamicWorldRows.prototype['sortHeading'] = undefined;
/**
 * @member {String} sortOrder
 */

ConfigDynamicWorldRows.prototype['sortOrder'] = undefined;
/**
 * @member {String} sortOwnership
 */

ConfigDynamicWorldRows.prototype['sortOwnership'] = undefined;
/**
 * Tag to filter worlds for this row
 * @member {String} tag
 */

ConfigDynamicWorldRows.prototype['tag'] = undefined;
var _default = ConfigDynamicWorldRows;
exports["default"] = _default;