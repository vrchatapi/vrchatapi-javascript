"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("./Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse401 model module.
 * @module model/InlineResponse401
 * @version 1.0.0
 */
var InlineResponse401 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse401</code>.
   * @alias module:model/InlineResponse401
   * @param error {module:model/Error} 
   */
  function InlineResponse401(error) {
    _classCallCheck(this, InlineResponse401);

    InlineResponse401.initialize(this, error);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse401, null, [{
    key: "initialize",
    value: function initialize(obj, error) {
      obj['error'] = error;
    }
    /**
     * Constructs a <code>InlineResponse401</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse401} obj Optional instance to populate.
     * @return {module:model/InlineResponse401} The populated <code>InlineResponse401</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse401();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse401;
}();
/**
 * @member {module:model/Error} error
 */


InlineResponse401.prototype['error'] = undefined;
var _default = InlineResponse401;
exports["default"] = _default;