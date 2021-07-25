"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConfigEvents model module.
 * @module model/ConfigEvents
 * @version 1.0.0
 */
var ConfigEvents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfigEvents</code>.
   * @alias module:model/ConfigEvents
   * @param distanceClose {Number} Unknown
   * @param distanceFactor {Number} Unknown
   * @param distanceFar {Number} Unknown
   * @param groupDistance {Number} Unknown
   * @param maximumBunchSize {Number} Unknown
   * @param notVisibleFactor {Number} Unknown
   * @param playerOrderBucketSize {Number} Unknown
   * @param playerOrderFactor {Number} Unknown
   * @param slowUpdateFactorThreshold {Number} Unknown
   * @param viewSegmentLength {Number} Unknown
   */
  function ConfigEvents(distanceClose, distanceFactor, distanceFar, groupDistance, maximumBunchSize, notVisibleFactor, playerOrderBucketSize, playerOrderFactor, slowUpdateFactorThreshold, viewSegmentLength) {
    _classCallCheck(this, ConfigEvents);

    ConfigEvents.initialize(this, distanceClose, distanceFactor, distanceFar, groupDistance, maximumBunchSize, notVisibleFactor, playerOrderBucketSize, playerOrderFactor, slowUpdateFactorThreshold, viewSegmentLength);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfigEvents, null, [{
    key: "initialize",
    value: function initialize(obj, distanceClose, distanceFactor, distanceFar, groupDistance, maximumBunchSize, notVisibleFactor, playerOrderBucketSize, playerOrderFactor, slowUpdateFactorThreshold, viewSegmentLength) {
      obj['distanceClose'] = distanceClose;
      obj['distanceFactor'] = distanceFactor;
      obj['distanceFar'] = distanceFar;
      obj['groupDistance'] = groupDistance;
      obj['maximumBunchSize'] = maximumBunchSize;
      obj['notVisibleFactor'] = notVisibleFactor;
      obj['playerOrderBucketSize'] = playerOrderBucketSize;
      obj['playerOrderFactor'] = playerOrderFactor;
      obj['slowUpdateFactorThreshold'] = slowUpdateFactorThreshold;
      obj['viewSegmentLength'] = viewSegmentLength;
    }
    /**
     * Constructs a <code>ConfigEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigEvents} obj Optional instance to populate.
     * @return {module:model/ConfigEvents} The populated <code>ConfigEvents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfigEvents();

        if (data.hasOwnProperty('distanceClose')) {
          obj['distanceClose'] = _ApiClient["default"].convertToType(data['distanceClose'], 'Number');
        }

        if (data.hasOwnProperty('distanceFactor')) {
          obj['distanceFactor'] = _ApiClient["default"].convertToType(data['distanceFactor'], 'Number');
        }

        if (data.hasOwnProperty('distanceFar')) {
          obj['distanceFar'] = _ApiClient["default"].convertToType(data['distanceFar'], 'Number');
        }

        if (data.hasOwnProperty('groupDistance')) {
          obj['groupDistance'] = _ApiClient["default"].convertToType(data['groupDistance'], 'Number');
        }

        if (data.hasOwnProperty('maximumBunchSize')) {
          obj['maximumBunchSize'] = _ApiClient["default"].convertToType(data['maximumBunchSize'], 'Number');
        }

        if (data.hasOwnProperty('notVisibleFactor')) {
          obj['notVisibleFactor'] = _ApiClient["default"].convertToType(data['notVisibleFactor'], 'Number');
        }

        if (data.hasOwnProperty('playerOrderBucketSize')) {
          obj['playerOrderBucketSize'] = _ApiClient["default"].convertToType(data['playerOrderBucketSize'], 'Number');
        }

        if (data.hasOwnProperty('playerOrderFactor')) {
          obj['playerOrderFactor'] = _ApiClient["default"].convertToType(data['playerOrderFactor'], 'Number');
        }

        if (data.hasOwnProperty('slowUpdateFactorThreshold')) {
          obj['slowUpdateFactorThreshold'] = _ApiClient["default"].convertToType(data['slowUpdateFactorThreshold'], 'Number');
        }

        if (data.hasOwnProperty('viewSegmentLength')) {
          obj['viewSegmentLength'] = _ApiClient["default"].convertToType(data['viewSegmentLength'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConfigEvents;
}();
/**
 * Unknown
 * @member {Number} distanceClose
 */


ConfigEvents.prototype['distanceClose'] = undefined;
/**
 * Unknown
 * @member {Number} distanceFactor
 */

ConfigEvents.prototype['distanceFactor'] = undefined;
/**
 * Unknown
 * @member {Number} distanceFar
 */

ConfigEvents.prototype['distanceFar'] = undefined;
/**
 * Unknown
 * @member {Number} groupDistance
 */

ConfigEvents.prototype['groupDistance'] = undefined;
/**
 * Unknown
 * @member {Number} maximumBunchSize
 */

ConfigEvents.prototype['maximumBunchSize'] = undefined;
/**
 * Unknown
 * @member {Number} notVisibleFactor
 */

ConfigEvents.prototype['notVisibleFactor'] = undefined;
/**
 * Unknown
 * @member {Number} playerOrderBucketSize
 */

ConfigEvents.prototype['playerOrderBucketSize'] = undefined;
/**
 * Unknown
 * @member {Number} playerOrderFactor
 */

ConfigEvents.prototype['playerOrderFactor'] = undefined;
/**
 * Unknown
 * @member {Number} slowUpdateFactorThreshold
 */

ConfigEvents.prototype['slowUpdateFactorThreshold'] = undefined;
/**
 * Unknown
 * @member {Number} viewSegmentLength
 */

ConfigEvents.prototype['viewSegmentLength'] = undefined;
var _default = ConfigEvents;
exports["default"] = _default;