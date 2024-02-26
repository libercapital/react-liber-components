"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InfoLabel = function InfoLabel(_ref) {
  var children = _ref.children,
      label = _ref.label,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["children", "label", "color"]);

  return _react["default"].createElement(_styles.Container, props, _react["default"].createElement(_styles.Icon, {
    color: color
  }), _react["default"].createElement(_styles.Label, null, label || children));
};

InfoLabel.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].any]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
InfoLabel.defaultProps = {
  children: null,
  color: '',
  label: ''
};
var _default = InfoLabel;
exports["default"] = _default;