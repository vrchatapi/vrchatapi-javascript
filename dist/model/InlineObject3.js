"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MIMEType = _interopRequireDefault(require("./MIMEType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 1.0.0
 */
var InlineObject3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject3</code>.
   * @alias module:model/InlineObject3
   * @param name {String} 
   * @param mimeType {module:model/MIMEType} 
   * @param extension {String} 
   */
  function InlineObject3(name, mimeType, extension) {
    _classCallCheck(this, InlineObject3);

    InlineObject3.initialize(this, name, mimeType, extension);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject3, null, [{
    key: "initialize",
    value: function initialize(obj, name, mimeType, extension) {
      obj['name'] = name;
      obj['mimeType'] = mimeType;
      obj['extension'] = extension;
    }
    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject3();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _MIMEType["default"].constructFromObject(data['mimeType']);
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject3;
}();
/**
 * @member {String} name
 */


InlineObject3.prototype['name'] = undefined;
/**
 * @member {module:model/MIMEType} mimeType
 */

InlineObject3.prototype['mimeType'] = undefined;
/**
 * @member {String} extension
 */

InlineObject3.prototype['extension'] = undefined;
/**
 * @member {Array.<String>} tags
 */

InlineObject3.prototype['tags'] = undefined;
var _default = InlineObject3;
exports["default"] = _default;