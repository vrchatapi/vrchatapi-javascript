"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileVersion = _interopRequireDefault(require("./FileVersion"));

var _MIMEType = _interopRequireDefault(require("./MIMEType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The File model module.
 * @module model/File
 * @version 1.0.0
 */
var File = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>File</code>.
   * 
   * @alias module:model/File
   * @param id {String} 
   * @param name {String} 
   * @param ownerId {String} 
   * @param mimeType {module:model/MIMEType} 
   * @param extension {String} 
   * @param tags {Array.<String>} 
   * @param versions {Array.<module:model/FileVersion>} 
   */
  function File(id, name, ownerId, mimeType, extension, tags, versions) {
    _classCallCheck(this, File);

    File.initialize(this, id, name, ownerId, mimeType, extension, tags, versions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(File, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, ownerId, mimeType, extension, tags, versions) {
      obj['id'] = id;
      obj['name'] = name;
      obj['ownerId'] = ownerId;
      obj['mimeType'] = mimeType;
      obj['extension'] = extension;
      obj['tags'] = tags;
      obj['versions'] = versions;
    }
    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/File} obj Optional instance to populate.
     * @return {module:model/File} The populated <code>File</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new File();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('ownerId')) {
          obj['ownerId'] = _ApiClient["default"].convertToType(data['ownerId'], 'String');
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

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [_FileVersion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return File;
}();
/**
 * @member {String} id
 */


File.prototype['id'] = undefined;
/**
 * 
 * @member {String} name
 */

File.prototype['name'] = undefined;
/**
 * @member {String} ownerId
 */

File.prototype['ownerId'] = undefined;
/**
 * @member {module:model/MIMEType} mimeType
 */

File.prototype['mimeType'] = undefined;
/**
 * @member {String} extension
 */

File.prototype['extension'] = undefined;
/**
 * @member {Array.<String>} tags
 */

File.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/FileVersion>} versions
 */

File.prototype['versions'] = undefined;
var _default = File;
exports["default"] = _default;