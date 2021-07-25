"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrentUser = _interopRequireDefault(require("../model/CurrentUser"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse401"));

var _LimitedUser = _interopRequireDefault(require("../model/LimitedUser"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get User by ID
   * Get public user information about a specific user using their ID.
   * @param {String} userId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */


  _createClass(UsersApi, [{
    key: "getUserWithHttpInfo",
    value: function getUserWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUser");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get User by ID
     * Get public user information about a specific user using their ID.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "getUser",
    value: function getUser(userId) {
      return this.getUserWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get User by Username
     * Get public user information about a specific user using their name.
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */

  }, {
    key: "getUserByNameWithHttpInfo",
    value: function getUserByNameWithHttpInfo(username) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUserByName");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{username}/name', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get User by Username
     * Get public user information about a specific user using their name.
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "getUserByName",
    value: function getUserByName(username) {
      return this.getUserByNameWithHttpInfo(username).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search Active Users
     * Search and list any Active users by text query.  **Has been locked down and now always respond with \"Invalid Admin Credentials\".**
     * @param {String} search Username to search for
     * @param {Object} opts Optional parameters
     * @param {String} opts.developerType Active user by developer type, none for normal users and internal for moderators
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LimitedUser>} and HTTP response
     */

  }, {
    key: "searchActiveUsersWithHttpInfo",
    value: function searchActiveUsersWithHttpInfo(search, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'search' is set

      if (search === undefined || search === null) {
        throw new Error("Missing the required parameter 'search' when calling searchActiveUsers");
      }

      var pathParams = {};
      var queryParams = {
        'search': search,
        'developerType': opts['developerType'],
        'offset': opts['offset'],
        'n': opts['n']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LimitedUser["default"]];
      return this.apiClient.callApi('/users/active', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search Active Users
     * Search and list any Active users by text query.  **Has been locked down and now always respond with \"Invalid Admin Credentials\".**
     * @param {String} search Username to search for
     * @param {Object} opts Optional parameters
     * @param {String} opts.developerType Active user by developer type, none for normal users and internal for moderators
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LimitedUser>}
     */

  }, {
    key: "searchActiveUsers",
    value: function searchActiveUsers(search, opts) {
      return this.searchActiveUsersWithHttpInfo(search, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search All Users
     * Search and list any users by text query
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Searches by `displayName`. Will return empty array if search query is empty or missing.
     * @param {String} opts.developerType Active user by developer type, none for normal users and internal for moderators
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LimitedUser>} and HTTP response
     */

  }, {
    key: "searchUsersWithHttpInfo",
    value: function searchUsersWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'search': opts['search'],
        'developerType': opts['developerType'],
        'n': opts['n'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LimitedUser["default"]];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search All Users
     * Search and list any users by text query
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Searches by `displayName`. Will return empty array if search query is empty or missing.
     * @param {String} opts.developerType Active user by developer type, none for normal users and internal for moderators
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LimitedUser>}
     */

  }, {
    key: "searchUsers",
    value: function searchUsers(opts) {
      return this.searchUsersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update User Info
     * Update a users information such as the email and birthday.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrentUser} and HTTP response
     */

  }, {
    key: "updateUserWithHttpInfo",
    value: function updateUserWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['inlineObject2']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CurrentUser["default"];
      return this.apiClient.callApi('/users/{userId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update User Info
     * Update a users information such as the email and birthday.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrentUser}
     */

  }, {
    key: "updateUser",
    value: function updateUser(userId, opts) {
      return this.updateUserWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;