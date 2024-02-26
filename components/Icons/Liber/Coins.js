"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Coins = function Coins(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("svg", {
    className: className,
    width: "52",
    height: "52",
    viewBox: "0 0 57.651 56.982",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("g", {
    transform: "translate(0.25 0.25)"
  }, _react["default"].createElement("path", {
    d: "M43.244,22.218a5.124,5.124,0,0,0-.5-.912h2.906a5.135,5.135,0,0,0,0-10.269H36.715A5.131,5.131,0,0,0,32.482,3H5.135a5.135,5.135,0,0,0,0,10.269h8.939a5.12,5.12,0,0,0,0,5.8H11.162a5.132,5.132,0,0,0-3.191,9.153,5.125,5.125,0,0,0,0,8.037,5.125,5.125,0,0,0,0,8.037,5.132,5.132,0,0,0,3.191,9.153H24.317A18.972,18.972,0,1,0,43.244,22.218Zm2.41-8.949a2.9,2.9,0,0,1,0,5.8H18.306a2.9,2.9,0,0,1,0-5.8ZM5.135,11.037a2.9,2.9,0,0,1,0-5.8H32.482a2.9,2.9,0,1,1,0,5.8Zm6.028,10.269H38.51a2.9,2.9,0,0,1,1.266.292c-.528-.044-1.062-.068-1.6-.068a18.917,18.917,0,0,0-13.428,5.581H11.162a2.9,2.9,0,1,1,0-5.8Zm0,8.037H22.84a18.922,18.922,0,0,0-2.869,5.8H11.162a2.9,2.9,0,1,1,0-5.8Zm0,8.037h8.3a18.991,18.991,0,0,0-.069,5.8H11.162a2.9,2.9,0,1,1,0-5.8Zm0,13.841a2.9,2.9,0,1,1,0-5.8h8.683a18.9,18.9,0,0,0,2.678,5.8Zm27.013,6.028A16.744,16.744,0,1,1,54.919,40.506,16.763,16.763,0,0,1,38.175,57.249Z",
    transform: "translate(0 -3)",
    strokeWidth: "0.5"
  }), _react["default"].createElement("g", {
    transform: "translate(33.482 28.263)"
  }, _react["default"].createElement("path", {
    d: "M304.642,264.255a2.148,2.148,0,1,1,2.456-2.125,1.116,1.116,0,1,0,2.232,0,4.441,4.441,0,0,0-3.572-4.232v-.581a1.116,1.116,0,0,0-2.233,0v.581a4.441,4.441,0,0,0-3.572,4.232,4.537,4.537,0,0,0,4.688,4.358,2.148,2.148,0,1,1-2.456,2.126,1.116,1.116,0,1,0-2.233,0,4.441,4.441,0,0,0,3.572,4.232v.482a1.116,1.116,0,0,0,2.233,0v-.482a4.441,4.441,0,0,0,3.572-4.232A4.537,4.537,0,0,0,304.642,264.255Z",
    transform: "translate(-299.954 -256.201)",
    strokeWidth: "0.5"
  })), _react["default"].createElement("g", {
    transform: "translate(42.855 24.31)"
  }, _react["default"].createElement("path", {
    d: "M391.465,226.153a14.544,14.544,0,0,0-5.941-5.258,1.116,1.116,0,1,0-.967,2.012,12.289,12.289,0,0,1,5.535,16.832,1.116,1.116,0,1,0,1.971,1.049,14.527,14.527,0,0,0-.6-14.635Z",
    transform: "translate(-383.924 -220.785)",
    strokeWidth: "0.5"
  })), _react["default"].createElement("g", {
    transform: "translate(38.733 22.995)"
  }, _react["default"].createElement("path", {
    d: "M348.191,209h-.075a1.116,1.116,0,1,0,0,2.232h.07a1.116,1.116,0,0,0,.005-2.232Z",
    transform: "translate(-347 -209.001)",
    strokeWidth: "0.5"
  })), _react["default"].createElement("g", {
    transform: "translate(23.664 30.106)"
  }, _react["default"].createElement("path", {
    d: "M221.2,291.184a12.289,12.289,0,0,1-5.535-16.832,1.116,1.116,0,0,0-1.971-1.049,14.517,14.517,0,0,0,6.538,19.893,1.116,1.116,0,1,0,.967-2.012Z",
    transform: "translate(-212.002 -272.711)",
    strokeWidth: "0.5"
  })), _react["default"].createElement("g", {
    transform: "translate(35.315 49.784)"
  }, _react["default"].createElement("path", {
    d: "M317.564,449H317.5a1.116,1.116,0,1,0-.01,2.232h.075a1.116,1.116,0,0,0,0-2.233Z",
    transform: "translate(-316.378 -448.999)",
    strokeWidth: "0.5"
  }))));
};

Coins.displayName = 'Coins';
Coins.propTypes = {
  className: _propTypes["default"].string
};
Coins.defaultProps = {
  className: ''
};
var _default = Coins;
exports["default"] = _default;