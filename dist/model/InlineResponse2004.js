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
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 1.0.0
 */
var InlineResponse2004 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @param uploadId {String} 
   * @param fileName {String} 
   * @param nextPartNumber {Number} 
   * @param maxParts {Number} 
   * @param parts {Array.<Object>} 
   * @param etags {Array.<Object>} Unknown
   */
  function InlineResponse2004(uploadId, fileName, nextPartNumber, maxParts, parts, etags) {
    _classCallCheck(this, InlineResponse2004);

    InlineResponse2004.initialize(this, uploadId, fileName, nextPartNumber, maxParts, parts, etags);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004, null, [{
    key: "initialize",
    value: function initialize(obj, uploadId, fileName, nextPartNumber, maxParts, parts, etags) {
      obj['uploadId'] = uploadId;
      obj['fileName'] = fileName;
      obj['nextPartNumber'] = nextPartNumber;
      obj['maxParts'] = maxParts;
      obj['parts'] = parts;
      obj['etags'] = etags;
    }
    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004();

        if (data.hasOwnProperty('uploadId')) {
          obj['uploadId'] = _ApiClient["default"].convertToType(data['uploadId'], 'String');
        }

        if (data.hasOwnProperty('fileName')) {
          obj['fileName'] = _ApiClient["default"].convertToType(data['fileName'], 'String');
        }

        if (data.hasOwnProperty('nextPartNumber')) {
          obj['nextPartNumber'] = _ApiClient["default"].convertToType(data['nextPartNumber'], 'Number');
        }

        if (data.hasOwnProperty('maxParts')) {
          obj['maxParts'] = _ApiClient["default"].convertToType(data['maxParts'], 'Number');
        }

        if (data.hasOwnProperty('parts')) {
          obj['parts'] = _ApiClient["default"].convertToType(data['parts'], [Object]);
        }

        if (data.hasOwnProperty('etags')) {
          obj['etags'] = _ApiClient["default"].convertToType(data['etags'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004;
}();
/**
 * @member {String} uploadId
 */


InlineResponse2004.prototype['uploadId'] = undefined;
/**
 * @member {String} fileName
 */

InlineResponse2004.prototype['fileName'] = undefined;
/**
 * @member {Number} nextPartNumber
 */

InlineResponse2004.prototype['nextPartNumber'] = undefined;
/**
 * @member {Number} maxParts
 */

InlineResponse2004.prototype['maxParts'] = undefined;
/**
 * @member {Array.<Object>} parts
 */

InlineResponse2004.prototype['parts'] = undefined;
/**
 * Unknown
 * @member {Array.<Object>} etags
 */

InlineResponse2004.prototype['etags'] = undefined;
var _default = InlineResponse2004;
exports["default"] = _default;