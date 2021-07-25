"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileData = _interopRequireDefault(require("./FileData"));

var _FileStatus = _interopRequireDefault(require("./FileStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FileVersion model module.
 * @module model/FileVersion
 * @version 1.0.0
 */
var FileVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileVersion</code>.
   * 
   * @alias module:model/FileVersion
   * @param version {Number} Incremental version counter, can only be increased.
   * @param status {module:model/FileStatus} 
   * @param createdAt {Date} 
   */
  function FileVersion(version, status, createdAt) {
    _classCallCheck(this, FileVersion);

    FileVersion.initialize(this, version, status, createdAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileVersion, null, [{
    key: "initialize",
    value: function initialize(obj, version, status, createdAt) {
      obj['version'] = version || 0;
      obj['status'] = status;
      obj['created_at'] = createdAt;
    }
    /**
     * Constructs a <code>FileVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileVersion} obj Optional instance to populate.
     * @return {module:model/FileVersion} The populated <code>FileVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileVersion();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _FileStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('file')) {
          obj['file'] = _FileData["default"].constructFromObject(data['file']);
        }

        if (data.hasOwnProperty('delta')) {
          obj['delta'] = _FileData["default"].constructFromObject(data['delta']);
        }

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _FileData["default"].constructFromObject(data['signature']);
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return FileVersion;
}();
/**
 * Incremental version counter, can only be increased.
 * @member {Number} version
 * @default 0
 */


FileVersion.prototype['version'] = 0;
/**
 * @member {module:model/FileStatus} status
 */

FileVersion.prototype['status'] = undefined;
/**
 * @member {Date} created_at
 */

FileVersion.prototype['created_at'] = undefined;
/**
 * @member {module:model/FileData} file
 */

FileVersion.prototype['file'] = undefined;
/**
 * @member {module:model/FileData} delta
 */

FileVersion.prototype['delta'] = undefined;
/**
 * @member {module:model/FileData} signature
 */

FileVersion.prototype['signature'] = undefined;
/**
 * Usually only present if `true`
 * @member {Boolean} deleted
 * @default true
 */

FileVersion.prototype['deleted'] = true;
var _default = FileVersion;
exports["default"] = _default;