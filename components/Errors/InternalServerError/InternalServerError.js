"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("../styles");

var _styles2 = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InternalServerError = function InternalServerError() {
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_styles.DesktopContainer, null, _react["default"].createElement(_styles2.DesktopBackground, null), _react["default"].createElement(_styles2.DesktopIllustration, null), _react["default"].createElement(_styles2.DesktopContent, null, _react["default"].createElement(_styles2.DesktopMessageBox, null, _react["default"].createElement("h3", null, "Desculpe, tivemos um problema interno..."), _react["default"].createElement("h1", null, "Mas j\xE1 estamos arrumando tudo!"), _react["default"].createElement("a", {
    href: "/"
  }, "Voltar \xE0 p\xE1gina inicial")))), _react["default"].createElement(_styles.MobileContainer, null, _react["default"].createElement(_styles.MobileBackground, null), _react["default"].createElement(_styles2.MobileIllustration, null), _react["default"].createElement(_styles2.MobileContent, null, _react["default"].createElement(_styles2.MobileBrand, null), _react["default"].createElement(_styles2.MobileMessageBox, null, _react["default"].createElement("h3", null, "Desculpe, tivemos um problema interno..."), _react["default"].createElement("h1", null, "Mas j\xE1 estamos arrumando tudo!"), _react["default"].createElement("a", {
    href: "/"
  }, "Voltar \xE0 p\xE1gina inicial")))));
};

var _default = InternalServerError;
exports["default"] = _default;