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
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.0
 */
var InlineResponse2001 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @param verified {Boolean} 
   */
  function InlineResponse2001(verified) {
    _classCallCheck(this, InlineResponse2001);

    InlineResponse2001.initialize(this, verified);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001, null, [{
    key: "initialize",
    value: function initialize(obj, verified) {
      obj['verified'] = verified;
    }
    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001();

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2001;
}();
/**
 * @member {Boolean} verified
 */


InlineResponse2001.prototype['verified'] = undefined;
var _default = InlineResponse2001;
exports["default"] = _default;