"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse401"));

var _LimitedWorld = _interopRequireDefault(require("../model/LimitedWorld"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Worlds service.
* @module api/WorldsApi
* @version 1.0.0
*/
var WorldsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorldsApi. 
  * @alias module:api/WorldsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorldsApi(apiClient) {
    _classCallCheck(this, WorldsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Search all worlds
   * Search and list any worlds by text query
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.featured is the world featured
   * @param {module:model/String} opts.sort  (default to 'order')
   * @param {String} opts.user Set to `me` for searching own worlds
   * @param {String} opts.userId Filter by creator id, use `me` for only worlds owned by current user
   * @param {Number} opts.n The number of objects to return. (default to 60)
   * @param {module:model/String} opts.order  (default to 'descending')
   * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
   * @param {String} opts.search Searches by `name`. Will return empty array if search query is empty or missing.
   * @param {Array.<String>} opts.tag Filter by Tag
   * @param {Array.<String>} opts.notag Tags to exclude
   * @param {module:model/String} opts.releaseStatus  (default to 'hidden')
   * @param {String} opts.maxUnityVersion Current unity version the game is using
   * @param {String} opts.minUnityVersion The min unity version the world support
   * @param {String} opts.maxAssetVersion Current asset version the game is using
   * @param {String} opts.minAssetVersion The min asset version the world support
   * @param {String} opts.platform The platform the world supports (usually standalonewindows)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LimitedWorld>} and HTTP response
   */


  _createClass(WorldsApi, [{
    key: "searchWorldsWithHttpInfo",
    value: function searchWorldsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'featured': opts['featured'],
        'sort': opts['sort'],
        'user': opts['user'],
        'userId': opts['userId'],
        'n': opts['n'],
        'order': opts['order'],
        'offset': opts['offset'],
        'search': opts['search'],
        'tag': this.apiClient.buildCollectionParam(opts['tag'], 'multi'),
        'notag': this.apiClient.buildCollectionParam(opts['notag'], 'multi'),
        'releaseStatus': opts['releaseStatus'],
        'maxUnityVersion': opts['maxUnityVersion'],
        'minUnityVersion': opts['minUnityVersion'],
        'maxAssetVersion': opts['maxAssetVersion'],
        'minAssetVersion': opts['minAssetVersion'],
        'platform': opts['platform']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyCookie', 'authCookie'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LimitedWorld["default"]];
      return this.apiClient.callApi('/worlds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search all worlds
     * Search and list any worlds by text query
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.featured is the world featured
     * @param {module:model/String} opts.sort  (default to 'order')
     * @param {String} opts.user Set to `me` for searching own worlds
     * @param {String} opts.userId Filter by creator id, use `me` for only worlds owned by current user
     * @param {Number} opts.n The number of objects to return. (default to 60)
     * @param {module:model/String} opts.order  (default to 'descending')
     * @param {Number} opts.offset A zero-based offset from the default object sorting from where search results start.
     * @param {String} opts.search Searches by `name`. Will return empty array if search query is empty or missing.
     * @param {Array.<String>} opts.tag Filter by Tag
     * @param {Array.<String>} opts.notag Tags to exclude
     * @param {module:model/String} opts.releaseStatus  (default to 'hidden')
     * @param {String} opts.maxUnityVersion Current unity version the game is using
     * @param {String} opts.minUnityVersion The min unity version the world support
     * @param {String} opts.maxAssetVersion Current asset version the game is using
     * @param {String} opts.minAssetVersion The min asset version the world support
     * @param {String} opts.platform The platform the world supports (usually standalonewindows)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LimitedWorld>}
     */

  }, {
    key: "searchWorlds",
    value: function searchWorlds(opts) {
      return this.searchWorldsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WorldsApi;
}();

exports["default"] = WorldsApi;