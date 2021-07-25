"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject4"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _Success = _interopRequireDefault(require("../model/Success"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Files service.
* @module api/FilesApi
* @version 1.0.0
*/
var FilesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FilesApi. 
  * @alias module:api/FilesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FilesApi(apiClient) {
    _classCallCheck(this, FilesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create File
   * Creates a new File object
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject3} opts.inlineObject3 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
   */


  _createClass(FilesApi, [{
    key: "createFileWithHttpInfo",
    value: function createFileWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject3'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/file', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create File
     * Creates a new File object
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "createFile",
    value: function createFile(opts) {
      return this.createFileWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create File Version
     * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
     * @param {String} fileId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "createFileVersionWithHttpInfo",
    value: function createFileVersionWithHttpInfo(fileId) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling createFileVersion");
      }

      var pathParams = {
        'fileId': fileId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/file/{fileId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create File Version
     * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
     * @param {String} fileId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "createFileVersion",
    value: function createFileVersion(fileId) {
      return this.createFileVersionWithHttpInfo(fileId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete File
     * Deletes a File object.
     * @param {String} fileId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Success} and HTTP response
     */

  }, {
    key: "deleteFileWithHttpInfo",
    value: function deleteFileWithHttpInfo(fileId) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling deleteFile");
      }

      var pathParams = {
        'fileId': fileId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Success["default"];
      return this.apiClient.callApi('/file/{fileId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete File
     * Deletes a File object.
     * @param {String} fileId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Success}
     */

  }, {
    key: "deleteFile",
    value: function deleteFile(fileId) {
      return this.deleteFileWithHttpInfo(fileId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete File Version
     * Delete a specific version of a file. You can only delete the latest version.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "deleteFileVersionWithHttpInfo",
    value: function deleteFileVersionWithHttpInfo(fileId, versionId) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling deleteFileVersion");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new _Error["default"]("Missing the required parameter 'versionId' when calling deleteFileVersion");
      }

      var pathParams = {
        'fileId': fileId,
        'versionId': versionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/file/{fileId}/{versionId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete File Version
     * Delete a specific version of a file. You can only delete the latest version.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "deleteFileVersion",
    value: function deleteFileVersion(fileId, versionId) {
      return this.deleteFileVersionWithHttpInfo(fileId, versionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Download File Version
     * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "downloadFileVersionWithHttpInfo",
    value: function downloadFileVersionWithHttpInfo(fileId, versionId) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling downloadFileVersion");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new _Error["default"]("Missing the required parameter 'versionId' when calling downloadFileVersion");
      }

      var pathParams = {
        'fileId': fileId,
        'versionId': versionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/file/{fileId}/{versionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Download File Version
     * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "downloadFileVersion",
    value: function downloadFileVersion(fileId, versionId) {
      return this.downloadFileVersionWithHttpInfo(fileId, versionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Finish FileData Upload
     * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @param {module:model/String} fileType 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "finishFileDataUploadWithHttpInfo",
    value: function finishFileDataUploadWithHttpInfo(fileId, versionId, fileType, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject4']; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling finishFileDataUpload");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new _Error["default"]("Missing the required parameter 'versionId' when calling finishFileDataUpload");
      } // verify the required parameter 'fileType' is set


      if (fileType === undefined || fileType === null) {
        throw new _Error["default"]("Missing the required parameter 'fileType' when calling finishFileDataUpload");
      }

      var pathParams = {
        'fileId': fileId,
        'versionId': versionId,
        'fileType': fileType
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/file/{fileId}/{versionId}/{fileType}/finish', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Finish FileData Upload
     * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @param {module:model/String} fileType 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "finishFileDataUpload",
    value: function finishFileDataUpload(fileId, versionId, fileType, opts) {
      return this.finishFileDataUploadWithHttpInfo(fileId, versionId, fileType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show File
     * Shows general information about the \"File\" object. Each File can have several \"Version\"'s, and each Version can have multiple real files or \"Data\" blobs.
     * @param {String} fileId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "getFileWithHttpInfo",
    value: function getFileWithHttpInfo(fileId) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling getFile");
      }

      var pathParams = {
        'fileId': fileId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/file/{fileId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show File
     * Shows general information about the \"File\" object. Each File can have several \"Version\"'s, and each Version can have multiple real files or \"Data\" blobs.
     * @param {String} fileId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "getFile",
    value: function getFile(fileId) {
      return this.getFileWithHttpInfo(fileId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Check FileData Upload Status
     * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @param {module:model/String} fileType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "getFileDataUploadStatusWithHttpInfo",
    value: function getFileDataUploadStatusWithHttpInfo(fileId, versionId, fileType) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling getFileDataUploadStatus");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new _Error["default"]("Missing the required parameter 'versionId' when calling getFileDataUploadStatus");
      } // verify the required parameter 'fileType' is set


      if (fileType === undefined || fileType === null) {
        throw new _Error["default"]("Missing the required parameter 'fileType' when calling getFileDataUploadStatus");
      }

      var pathParams = {
        'fileId': fileId,
        'versionId': versionId,
        'fileType': fileType
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/file/{fileId}/{versionId}/{fileType}/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Check FileData Upload Status
     * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @param {module:model/String} fileType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "getFileDataUploadStatus",
    value: function getFileDataUploadStatus(fileId, versionId, fileType) {
      return this.getFileDataUploadStatusWithHttpInfo(fileId, versionId, fileType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Files
     * Returns a list of files
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag Tag, for example \"icon\" or \"gallery\", not included by default.
     * @param {String} opts.userId UserID, will always generate a 500 permission error.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<File>} and HTTP response
     */

  }, {
    key: "getFilesWithHttpInfo",
    value: function getFilesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'tag': opts['tag'],
        'userId': opts['userId'],
        'n': opts['n'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [File];
      return this.apiClient.callApi('/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Files
     * Returns a list of files
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag Tag, for example \"icon\" or \"gallery\", not included by default.
     * @param {String} opts.userId UserID, will always generate a 500 permission error.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<File>}
     */

  }, {
    key: "getFiles",
    value: function getFiles(opts) {
      return this.getFilesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Start FileData Upload
     * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS's REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @param {module:model/String} fileType 
     * @param {Number} partNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */

  }, {
    key: "startFileDataUploadWithHttpInfo",
    value: function startFileDataUploadWithHttpInfo(fileId, versionId, fileType, partNumber) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new _Error["default"]("Missing the required parameter 'fileId' when calling startFileDataUpload");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new _Error["default"]("Missing the required parameter 'versionId' when calling startFileDataUpload");
      } // verify the required parameter 'fileType' is set


      if (fileType === undefined || fileType === null) {
        throw new _Error["default"]("Missing the required parameter 'fileType' when calling startFileDataUpload");
      } // verify the required parameter 'partNumber' is set


      if (partNumber === undefined || partNumber === null) {
        throw new _Error["default"]("Missing the required parameter 'partNumber' when calling startFileDataUpload");
      }

      var pathParams = {
        'fileId': fileId,
        'versionId': versionId,
        'fileType': fileType
      };
      var queryParams = {
        'partNumber': partNumber
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/file/{fileId}/{versionId}/{fileType}/start', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Start FileData Upload
     * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS's REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
     * @param {String} fileId 
     * @param {Number} versionId 
     * @param {module:model/String} fileType 
     * @param {Number} partNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */

  }, {
    key: "startFileDataUpload",
    value: function startFileDataUpload(fileId, versionId, fileType, partNumber) {
      return this.startFileDataUploadWithHttpInfo(fileId, versionId, fileType, partNumber).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FilesApi;
}();

exports["default"] = FilesApi;