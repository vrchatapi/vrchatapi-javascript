"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotificationType = _interopRequireDefault(require("./NotificationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Notification model module.
 * @module model/Notification
 * @version 1.0.0
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notification</code>.
   * 
   * @alias module:model/Notification
   * @param id {String} 
   * @param senderUserId {String} 
   * @param senderUsername {String} 
   * @param type {module:model/NotificationType} 
   * @param message {String} 
   * @param details {String} **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
   * @param seen {Boolean} 
   * @param createdAt {Date} 
   */
  function Notification(id, senderUserId, senderUsername, type, message, details, seen, createdAt) {
    _classCallCheck(this, Notification);

    Notification.initialize(this, id, senderUserId, senderUsername, type, message, details, seen, createdAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notification, null, [{
    key: "initialize",
    value: function initialize(obj, id, senderUserId, senderUsername, type, message, details, seen, createdAt) {
      obj['id'] = id;
      obj['senderUserId'] = senderUserId;
      obj['senderUsername'] = senderUsername;
      obj['type'] = type;
      obj['message'] = message;
      obj['details'] = details || '{}';
      obj['seen'] = seen || false;
      obj['created_at'] = createdAt;
    }
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notification();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('senderUserId')) {
          obj['senderUserId'] = _ApiClient["default"].convertToType(data['senderUserId'], 'String');
        }

        if (data.hasOwnProperty('senderUsername')) {
          obj['senderUsername'] = _ApiClient["default"].convertToType(data['senderUsername'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _NotificationType["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], 'String');
        }

        if (data.hasOwnProperty('seen')) {
          obj['seen'] = _ApiClient["default"].convertToType(data['seen'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Notification;
}();
/**
 * @member {String} id
 */


Notification.prototype['id'] = undefined;
/**
 * @member {String} senderUserId
 */

Notification.prototype['senderUserId'] = undefined;
/**
 * @member {String} senderUsername
 */

Notification.prototype['senderUsername'] = undefined;
/**
 * @member {module:model/NotificationType} type
 */

Notification.prototype['type'] = undefined;
/**
 * 
 * @member {String} message
 */

Notification.prototype['message'] = undefined;
/**
 * **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
 * @member {String} details
 * @default '{}'
 */

Notification.prototype['details'] = '{}';
/**
 * @member {Boolean} seen
 * @default false
 */

Notification.prototype['seen'] = false;
/**
 * @member {Date} created_at
 */

Notification.prototype['created_at'] = undefined;
var _default = Notification;
exports["default"] = _default;