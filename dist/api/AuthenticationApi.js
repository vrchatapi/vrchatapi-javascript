"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrentUser = _interopRequireDefault(require("../model/CurrentUser"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse401"));

var _Success = _interopRequireDefault(require("../model/Success"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 1.0.0
*/
var AuthenticationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthenticationApi. 
  * @alias module:api/AuthenticationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthenticationApi(apiClient) {
    _classCallCheck(this, AuthenticationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete User
   * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
   * @param {String} userId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrentUser} and HTTP response
   */


  _createClass(AuthenticationApi, [{
    key: "deleteUserByIdWithHttpInfo",
    value: function deleteUserByIdWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserById");
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
      var returnType = _CurrentUser["default"];
      return this.apiClient.callApi('/user/{userId}/delete', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete User
     * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrentUser}
     */

  }, {
    key: "deleteUserById",
    value: function deleteUserById(userId) {
      return this.deleteUserByIdWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Login and/or Get Current User Info
     * Login and/or Get user data from your VRChat account.  If `Authorization` header is present then a new login session will be generated, and a new `auth` cookie is returned.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrentUser} and HTTP response
     */

  }, {
    key: "getCurrentUserWithHttpInfo",
    value: function getCurrentUserWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authCookie', 'authHeader', 'twoFactorAuthCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CurrentUser["default"];
      return this.apiClient.callApi('/auth/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Login and/or Get Current User Info
     * Login and/or Get user data from your VRChat account.  If `Authorization` header is present then a new login session will be generated, and a new `auth` cookie is returned.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrentUser}
     */

  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      return this.getCurrentUserWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Logout
     * Invalidates the auth cookie.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Success} and HTTP response
     */

  }, {
    key: "logoutWithHttpInfo",
    value: function logoutWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Success["default"];
      return this.apiClient.callApi('/logout', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Logout
     * Invalidates the auth cookie.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Success}
     */

  }, {
    key: "logout",
    value: function logout() {
      return this.logoutWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Verify 2FA code
     * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "verify2FAWithHttpInfo",
    value: function verify2FAWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authCookie'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/auth/twofactorauth/totp/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Verify 2FA code
     * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "verify2FA",
    value: function verify2FA(opts) {
      return this.verify2FAWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Verify Auth Token
     * Verify whether the currently provided Auth Token is valid.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */

  }, {
    key: "verifyAuthTokenWithHttpInfo",
    value: function verifyAuthTokenWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/auth', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Verify Auth Token
     * Verify whether the currently provided Auth Token is valid.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "verifyAuthToken",
    value: function verifyAuthToken() {
      return this.verifyAuthTokenWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Verify 2FA code with Recovery code
     * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "verifyRecoveryCodeWithHttpInfo",
    value: function verifyRecoveryCodeWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject1'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authCookie'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/auth/twofactorauth/otp/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Verify 2FA code with Recovery code
     * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "verifyRecoveryCode",
    value: function verifyRecoveryCode(opts) {
      return this.verifyRecoveryCodeWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AuthenticationApi;
}();

exports["default"] = AuthenticationApi;