"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileStatus = _interopRequireDefault(require("./FileStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FileData model module.
 * @module model/FileData
 * @version 1.0.0
 */
var FileData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileData</code>.
   * 
   * @alias module:model/FileData
   * @param fileName {String} 
   * @param url {String} 
   * @param md5 {String} 
   * @param sizeInBytes {Number} 
   * @param status {module:model/FileStatus} 
   * @param category {module:model/FileData.CategoryEnum} 
   * @param uploadId {String} 
   */
  function FileData(fileName, url, md5, sizeInBytes, status, category, uploadId) {
    _classCallCheck(this, FileData);

    FileData.initialize(this, fileName, url, md5, sizeInBytes, status, category, uploadId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileData, null, [{
    key: "initialize",
    value: function initialize(obj, fileName, url, md5, sizeInBytes, status, category, uploadId) {
      obj['fileName'] = fileName;
      obj['url'] = url;
      obj['md5'] = md5;
      obj['sizeInBytes'] = sizeInBytes;
      obj['status'] = status;
      obj['category'] = category;
      obj['uploadId'] = uploadId || '';
    }
    /**
     * Constructs a <code>FileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileData} obj Optional instance to populate.
     * @return {module:model/FileData} The populated <code>FileData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileData();

        if (data.hasOwnProperty('fileName')) {
          obj['fileName'] = _ApiClient["default"].convertToType(data['fileName'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('md5')) {
          obj['md5'] = _ApiClient["default"].convertToType(data['md5'], 'String');
        }

        if (data.hasOwnProperty('sizeInBytes')) {
          obj['sizeInBytes'] = _ApiClient["default"].convertToType(data['sizeInBytes'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _FileStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('uploadId')) {
          obj['uploadId'] = _ApiClient["default"].convertToType(data['uploadId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FileData;
}();
/**
 * @member {String} fileName
 */


FileData.prototype['fileName'] = undefined;
/**
 * @member {String} url
 */

FileData.prototype['url'] = undefined;
/**
 * @member {String} md5
 */

FileData.prototype['md5'] = undefined;
/**
 * @member {Number} sizeInBytes
 */

FileData.prototype['sizeInBytes'] = undefined;
/**
 * @member {module:model/FileStatus} status
 */

FileData.prototype['status'] = undefined;
/**
 * @member {module:model/FileData.CategoryEnum} category
 */

FileData.prototype['category'] = undefined;
/**
 * @member {String} uploadId
 * @default ''
 */

FileData.prototype['uploadId'] = '';
/**
 * Allowed values for the <code>category</code> property.
 * @enum {String}
 * @readonly
 */

FileData['CategoryEnum'] = {
  /**
   * value: "multipart"
   * @const
   */
  "multipart": "multipart",

  /**
   * value: "queued"
   * @const
   */
  "queued": "queued",

  /**
   * value: "simple"
   * @const
   */
  "simple": "simple"
};
var _default = FileData;
exports["default"] = _default;