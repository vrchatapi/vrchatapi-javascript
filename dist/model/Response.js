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
 * The Response model module.
 * @module model/Response
 * @version 1.0.0
 */
var Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Response</code>.
   * @alias module:model/Response
   * @param message {String} 
   * @param statusCode {Number} 
   */
  function Response(message, statusCode) {
    _classCallCheck(this, Response);

    Response.initialize(this, message, statusCode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Response, null, [{
    key: "initialize",
    value: function initialize(obj, message, statusCode) {
      obj['message'] = message;
      obj['status_code'] = statusCode;
    }
    /**
     * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Response} obj Optional instance to populate.
     * @return {module:model/Response} The populated <code>Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Response();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('status_code')) {
          obj['status_code'] = _ApiClient["default"].convertToType(data['status_code'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Response;
}();
/**
 * @member {String} message
 */


Response.prototype['message'] = undefined;
/**
 * @member {Number} status_code
 */

Response.prototype['status_code'] = undefined;
var _default = Response;
exports["default"] = _default;