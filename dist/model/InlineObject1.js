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
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 1.0.0
 */
var InlineObject1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject1</code>.
   * @alias module:model/InlineObject1
   * @param code {String} 
   */
  function InlineObject1(code) {
    _classCallCheck(this, InlineObject1);

    InlineObject1.initialize(this, code);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject1, null, [{
    key: "initialize",
    value: function initialize(obj, code) {
      obj['code'] = code;
    }
    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject1();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject1;
}();
/**
 * @member {String} code
 */


InlineObject1.prototype['code'] = undefined;
var _default = InlineObject1;
exports["default"] = _default;