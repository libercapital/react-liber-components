"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FaIdCard = function FaIdCard(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 1792 1792",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M896 1212q0-54-7.5-100.5t-24.5-90-51-68.5-81-25q-64 64-156 64t-156-64q-47 0-81 25t-51 68.5-24.5 90-7.5 100.5q0 55 31.5 93.5t75.5 38.5h426q44 0 75.5-38.5t31.5-93.5zm-128-444q0-80-56-136t-136-56-136 56-56 136 56 136 136 56 136-56 56-136zm1024 480v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm-384-256v-64q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v64q0 14 9 23t23 9h320q14 0 23-9t9-23zm384 0v-64q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v64q0 14 9 23t23 9h192q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm-1664-352h1792v-96q0-14-9-23t-23-9h-1728q-14 0-23 9t-9 23v96zm1920-96v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
  }));
};

FaIdCard.displayName = 'FaIdCard';
FaIdCard.propTypes = {
  className: _propTypes["default"].string
};
FaIdCard.defaultProps = {
  className: ''
};
var _default = FaIdCard;
exports["default"] = _default;