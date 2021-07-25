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
 * The InlineObject4 model module.
 * @module model/InlineObject4
 * @version 1.0.0
 */
var InlineObject4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject4</code>.
   * @alias module:model/InlineObject4
   * @param nextPartNumber {module:model/InlineObject4.NextPartNumberEnum} Always a zero in string form, despite how many parts uploaded.
   * @param maxParts {module:model/InlineObject4.MaxPartsEnum} Always a zero in string form, despite how many parts uploaded.
   */
  function InlineObject4(nextPartNumber, maxParts) {
    _classCallCheck(this, InlineObject4);

    InlineObject4.initialize(this, nextPartNumber, maxParts);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject4, null, [{
    key: "initialize",
    value: function initialize(obj, nextPartNumber, maxParts) {
      obj['nextPartNumber'] = nextPartNumber || '0';
      obj['maxParts'] = maxParts || '0';
    }
    /**
     * Constructs a <code>InlineObject4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject4} obj Optional instance to populate.
     * @return {module:model/InlineObject4} The populated <code>InlineObject4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject4();

        if (data.hasOwnProperty('etags')) {
          obj['etags'] = _ApiClient["default"].convertToType(data['etags'], ['String']);
        }

        if (data.hasOwnProperty('nextPartNumber')) {
          obj['nextPartNumber'] = _ApiClient["default"].convertToType(data['nextPartNumber'], 'String');
        }

        if (data.hasOwnProperty('maxParts')) {
          obj['maxParts'] = _ApiClient["default"].convertToType(data['maxParts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject4;
}();
/**
 * Array of ETags uploaded.
 * @member {Array.<String>} etags
 */


InlineObject4.prototype['etags'] = undefined;
/**
 * Always a zero in string form, despite how many parts uploaded.
 * @member {module:model/InlineObject4.NextPartNumberEnum} nextPartNumber
 * @default '0'
 */

InlineObject4.prototype['nextPartNumber'] = '0';
/**
 * Always a zero in string form, despite how many parts uploaded.
 * @member {module:model/InlineObject4.MaxPartsEnum} maxParts
 * @default '0'
 */

InlineObject4.prototype['maxParts'] = '0';
/**
 * Allowed values for the <code>nextPartNumber</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject4['NextPartNumberEnum'] = {
  /**
   * value: "0"
   * @const
   */
  "0": "0"
};
/**
 * Allowed values for the <code>maxParts</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject4['MaxPartsEnum'] = {
  /**
   * value: "0"
   * @const
   */
  "0": "0"
};
var _default = InlineObject4;
exports["default"] = _default;