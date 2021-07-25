"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse401"));

var _Notification = _interopRequireDefault(require("../model/Notification"));

var _Success = _interopRequireDefault(require("../model/Success"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Notifications service.
* @module api/NotificationsApi
* @version 1.0.0
*/
var NotificationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NotificationsApi. 
  * @alias module:api/NotificationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NotificationsApi(apiClient) {
    _classCallCheck(this, NotificationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Accept Friend Request
   * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
   * @param {String} notificationId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Success} and HTTP response
   */


  _createClass(NotificationsApi, [{
    key: "acceptFriendRequestWithHttpInfo",
    value: function acceptFriendRequestWithHttpInfo(notificationId) {
      var postBody = null; // verify the required parameter 'notificationId' is set

      if (notificationId === undefined || notificationId === null) {
        throw new _Error["default"]("Missing the required parameter 'notificationId' when calling acceptFriendRequest");
      }

      var pathParams = {
        'notificationId': notificationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Success["default"];
      return this.apiClient.callApi('/auth/user/notifications/{notificationId}/accept', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Accept Friend Request
     * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
     * @param {String} notificationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Success}
     */

  }, {
    key: "acceptFriendRequest",
    value: function acceptFriendRequest(notificationId) {
      return this.acceptFriendRequestWithHttpInfo(notificationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Clear All Notifications
     * Clear **all** notifications.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Success} and HTTP response
     */

  }, {
    key: "clearNotificationsWithHttpInfo",
    value: function clearNotificationsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Success["default"];
      return this.apiClient.callApi('/auth/user/notifications/clear', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Clear All Notifications
     * Clear **all** notifications.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Success}
     */

  }, {
    key: "clearNotifications",
    value: function clearNotifications() {
      return this.clearNotificationsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete Notification
     * Delete a notification.
     * @param {String} notificationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Notification} and HTTP response
     */

  }, {
    key: "deleteNotificationWithHttpInfo",
    value: function deleteNotificationWithHttpInfo(notificationId) {
      var postBody = null; // verify the required parameter 'notificationId' is set

      if (notificationId === undefined || notificationId === null) {
        throw new _Error["default"]("Missing the required parameter 'notificationId' when calling deleteNotification");
      }

      var pathParams = {
        'notificationId': notificationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Notification["default"];
      return this.apiClient.callApi('/auth/user/notifications/{notificationId}/hide', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete Notification
     * Delete a notification.
     * @param {String} notificationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Notification}
     */

  }, {
    key: "deleteNotification",
    value: function deleteNotification(notificationId) {
      return this.deleteNotificationWithHttpInfo(notificationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Notifications
     * Retrieve all of the current user's notifications.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Only send notifications of this type (can use `all` for all).
     * @param {Boolean} opts.sent Return notifications sent by the user. Must be false or omitted.
     * @param {Boolean} opts.hidden Whether to return hidden or non-hidden notifications. True only allowed on type `friendRequest`.
     * @param {String} opts.after Only return notifications sent after this Date. Ignored if type is `friendRequest`.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Notification>} and HTTP response
     */

  }, {
    key: "getNotificationsWithHttpInfo",
    value: function getNotificationsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'type': opts['type'],
        'sent': opts['sent'],
        'hidden': opts['hidden'],
        'after': opts['after'],
        'n': opts['n'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Notification["default"]];
      return this.apiClient.callApi('/auth/user/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Notifications
     * Retrieve all of the current user's notifications.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Only send notifications of this type (can use `all` for all).
     * @param {Boolean} opts.sent Return notifications sent by the user. Must be false or omitted.
     * @param {Boolean} opts.hidden Whether to return hidden or non-hidden notifications. True only allowed on type `friendRequest`.
     * @param {String} opts.after Only return notifications sent after this Date. Ignored if type is `friendRequest`.
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Notification>}
     */

  }, {
    key: "getNotifications",
    value: function getNotifications(opts) {
      return this.getNotificationsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Mark As Read
     * Mark a notification as seen.
     * @param {String} notificationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Notification} and HTTP response
     */

  }, {
    key: "markNotificationAsReadWithHttpInfo",
    value: function markNotificationAsReadWithHttpInfo(notificationId) {
      var postBody = null; // verify the required parameter 'notificationId' is set

      if (notificationId === undefined || notificationId === null) {
        throw new _Error["default"]("Missing the required parameter 'notificationId' when calling markNotificationAsRead");
      }

      var pathParams = {
        'notificationId': notificationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Notification["default"];
      return this.apiClient.callApi('/auth/user/notifications/{notificationId}/see', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Mark As Read
     * Mark a notification as seen.
     * @param {String} notificationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Notification}
     */

  }, {
    key: "markNotificationAsRead",
    value: function markNotificationAsRead(notificationId) {
      return this.markNotificationAsReadWithHttpInfo(notificationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NotificationsApi;
}();

exports["default"] = NotificationsApi;