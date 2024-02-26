"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarClock = function CalendarClock(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 52.818 59.198",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M 11.376953,0 A 1.268,1.268 0 0 0 10.111328,1.2636719 V 6.7421875 H 5.0566406 A 5.057,5.057 0 0 0 0,11.800781 v 37.076172 a 5.057,5.057 0 0 0 5.0566406,5.054688 H 27.427734 c -1.227522,-1.50106 -2.119041,-3.216938 -2.648437,-5.054688 H 5.6875 A 0.634,0.634 0 0 1 5.0566406,48.244141 V 16.853516 H 42.134766 v 14.21875 c 1.830154,0.475613 3.542336,1.309154 5.05664,2.470703 V 11.800781 A 5.057,5.057 0 0 0 42.134766,6.7421875 H 37.078125 V 1.2636719 A 1.268,1.268 0 0 0 35.814453,0 H 31.599609 A 1.268,1.268 0 0 0 30.335938,1.2636719 V 6.7421875 H 16.853516 V 1.2636719 A 1.268,1.268 0 0 0 15.589844,0 Z m 30.757813,33.138672 v 12.978516 l 1.316406,0.957031 c 0.267859,0.193449 0.322367,0.566123 0.128906,0.833984 l -1.398437,1.923828 c -0.116478,0.158295 -0.298179,0.244141 -0.482422,0.244141 -0.12175,0 -0.244984,-0.03826 -0.351563,-0.115234 L 39.855469,48.876953 H 26.884766 c 0.66892,1.955082 1.81449,3.683705 3.300781,5.054688 h 11.949219 a 5.057,5.057 0 0 0 5.05664,-5.054688 V 36.175781 c -1.396524,-1.38936 -3.125375,-2.443568 -5.05664,-3.037109 z"
  }), _react["default"].createElement("path", {
    d: "M 38.515625 32.595703 C 31.719894 32.595703 26.214844 38.100753 26.214844 44.896484 C 26.214844 51.692214 31.719894 57.199219 38.515625 57.199219 C 45.311355 57.199219 50.818359 51.692214 50.818359 44.896484 C 50.818359 38.100753 45.311355 32.595703 38.515625 32.595703 z M 37.326172 37.357422 L 39.707031 37.357422 C 40.034419 37.357422 40.300781 37.625734 40.300781 37.953125 L 40.300781 44.783203 L 43.451172 47.074219 C 43.719031 47.267668 43.773539 47.640342 43.580078 47.908203 L 42.181641 49.832031 C 42.065163 49.990326 41.883462 50.076172 41.699219 50.076172 C 41.577469 50.076172 41.454235 50.037914 41.347656 49.960938 L 36.972656 46.78125 C 36.818888 46.667171 36.730469 46.489271 36.730469 46.300781 L 36.730469 37.953125 C 36.730469 37.625734 36.998783 37.357422 37.326172 37.357422 z ",
    stroke: "none"
  }));
};

CalendarClock.displayName = 'CalendarClock';
CalendarClock.propTypes = {
  className: _propTypes["default"].string
};
CalendarClock.defaultProps = {
  className: ''
};
var _default = CalendarClock;
exports["default"] = _default;