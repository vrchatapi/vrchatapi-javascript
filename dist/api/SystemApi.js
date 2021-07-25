"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Config = _interopRequireDefault(require("../model/Config"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2002"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* System service.
* @module api/SystemApi
* @version 1.0.0
*/
var SystemApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SystemApi. 
  * @alias module:api/SystemApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SystemApi(apiClient) {
    _classCallCheck(this, SystemApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Fetch API Config
   * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Config} and HTTP response
   */


  _createClass(SystemApi, [{
    key: "getConfigWithHttpInfo",
    value: function getConfigWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Config["default"];
      return this.apiClient.callApi('/config', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetch API Config
     * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Config}
     */

  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.getConfigWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Current Online Users
     * Returns in plain format the number of currently online users.  **NOTE:** The response type is not of JSON, but is an integer in plain ASCII format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */

  }, {
    key: "getCurrentOnlineUsersWithHttpInfo",
    value: function getCurrentOnlineUsersWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = 'Number';
      return this.apiClient.callApi('/visits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Current Online Users
     * Returns in plain format the number of currently online users.  **NOTE:** The response type is not of JSON, but is an integer in plain ASCII format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */

  }, {
    key: "getCurrentOnlineUsers",
    value: function getCurrentOnlineUsers() {
      return this.getCurrentOnlineUsersWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Check API Health
     * Gets the overall health status, the server name, and the current build version tag of the API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */

  }, {
    key: "getHealthWithHttpInfo",
    value: function getHealthWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/health', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Check API Health
     * Gets the overall health status, the server name, and the current build version tag of the API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */

  }, {
    key: "getHealth",
    value: function getHealth() {
      return this.getHealthWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Current System Time
     * Returns in plain format the current time of the API server.  **NOTE:** The response type is not of JSON, but is a string in plain ASCII format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Date} and HTTP response
     */

  }, {
    key: "getSystemTimeWithHttpInfo",
    value: function getSystemTimeWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = 'Date';
      return this.apiClient.callApi('/time', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Current System Time
     * Returns in plain format the current time of the API server.  **NOTE:** The response type is not of JSON, but is a string in plain ASCII format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Date}
     */

  }, {
    key: "getSystemTime",
    value: function getSystemTime() {
      return this.getSystemTimeWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SystemApi;
}();

exports["default"] = SystemApi;