"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserStatus = _interopRequireDefault(require("./UserStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 1.0.0
 */
var InlineObject2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:model/InlineObject2
   */
  function InlineObject2() {
    _classCallCheck(this, InlineObject2);

    InlineObject2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject2();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('birthday')) {
          obj['birthday'] = _ApiClient["default"].convertToType(data['birthday'], 'Date');
        }

        if (data.hasOwnProperty('acceptedTOSVersion')) {
          obj['acceptedTOSVersion'] = _ApiClient["default"].convertToType(data['acceptedTOSVersion'], 'Number');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _UserStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('statusDescription')) {
          obj['statusDescription'] = _ApiClient["default"].convertToType(data['statusDescription'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('bioLinks')) {
          obj['bioLinks'] = _ApiClient["default"].convertToType(data['bioLinks'], ['String']);
        }

        if (data.hasOwnProperty('userIcon')) {
          obj['userIcon'] = _ApiClient["default"].convertToType(data['userIcon'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject2;
}();
/**
 * @member {String} email
 */


InlineObject2.prototype['email'] = undefined;
/**
 * @member {Date} birthday
 */

InlineObject2.prototype['birthday'] = undefined;
/**
 * @member {Number} acceptedTOSVersion
 */

InlineObject2.prototype['acceptedTOSVersion'] = undefined;
/**
 * @member {Array.<String>} tags
 */

InlineObject2.prototype['tags'] = undefined;
/**
 * @member {module:model/UserStatus} status
 */

InlineObject2.prototype['status'] = undefined;
/**
 * @member {String} statusDescription
 */

InlineObject2.prototype['statusDescription'] = undefined;
/**
 * @member {String} bio
 */

InlineObject2.prototype['bio'] = undefined;
/**
 * @member {Array.<String>} bioLinks
 */

InlineObject2.prototype['bioLinks'] = undefined;
/**
 * MUST be a valid VRChat /file/ url.
 * @member {String} userIcon
 */

InlineObject2.prototype['userIcon'] = undefined;
var _default = InlineObject2;
exports["default"] = _default;