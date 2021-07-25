"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _LimitedUser = _interopRequireDefault(require("../model/LimitedUser"));

var _Notification = _interopRequireDefault(require("../model/Notification"));

var _Success = _interopRequireDefault(require("../model/Success"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Friends service.
* @module api/FriendsApi
* @version 1.0.0
*/
var FriendsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FriendsApi. 
  * @alias module:api/FriendsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FriendsApi(apiClient) {
    _classCallCheck(this, FriendsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete Friend Request
   * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
   * @param {String} userId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Success} and HTTP response
   */


  _createClass(FriendsApi, [{
    key: "deleteFriendRequestWithHttpInfo",
    value: function deleteFriendRequestWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling deleteFriendRequest");
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
      var returnType = _Success["default"];
      return this.apiClient.callApi('/user/{userId}/friendRequest', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete Friend Request
     * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Success}
     */

  }, {
    key: "deleteFriendRequest",
    value: function deleteFriendRequest(userId) {
      return this.deleteFriendRequestWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send Friend Request
     * Send a friend request to another user.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Notification} and HTTP response
     */

  }, {
    key: "friendWithHttpInfo",
    value: function friendWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling friend");
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
      var returnType = _Notification["default"];
      return this.apiClient.callApi('/user/{userId}/friendRequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Send Friend Request
     * Send a friend request to another user.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Notification}
     */

  }, {
    key: "friend",
    value: function friend(userId) {
      return this.friendWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Check Friend Status
     * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */

  }, {
    key: "getFriendStatusWithHttpInfo",
    value: function getFriendStatusWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling getFriendStatus");
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/user/{userId}/friendStatus', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Check Friend Status
     * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "getFriendStatus",
    value: function getFriendStatus(userId) {
      return this.getFriendStatusWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Friends
     * List information about friends.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Boolean} opts.offline Returns *only* offline users if true, returns only online and active users if false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LimitedUser>} and HTTP response
     */

  }, {
    key: "getFriendsWithHttpInfo",
    value: function getFriendsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'offset': opts['offset'],
        'n': opts['n'],
        'offline': opts['offline']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LimitedUser["default"]];
      return this.apiClient.callApi('/auth/user/friends', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Friends
     * List information about friends.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Boolean} opts.offline Returns *only* offline users if true, returns only online and active users if false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LimitedUser>}
     */

  }, {
    key: "getFriends",
    value: function getFriends(opts) {
      return this.getFriendsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Unfriend
     * Unfriend a user by ID.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Success} and HTTP response
     */

  }, {
    key: "unfriendWithHttpInfo",
    value: function unfriendWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling unfriend");
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
      var returnType = _Success["default"];
      return this.apiClient.callApi('/auth/user/friends/{userId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unfriend
     * Unfriend a user by ID.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Success}
     */

  }, {
    key: "unfriend",
    value: function unfriend(userId) {
      return this.unfriendWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FriendsApi;
}();

exports["default"] = FriendsApi;