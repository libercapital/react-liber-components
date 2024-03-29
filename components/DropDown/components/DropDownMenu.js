"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactTransitionGroup = require("react-transition-group");

var _ClickOutside = _interopRequireDefault(require("../../Util/ClickOutside"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DropDownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropDownMenu, _Component);

  function DropDownMenu(props) {
    var _this;

    _classCallCheck(this, DropDownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDownMenu).call(this, props));

    _this.handleClickOption = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleOpenClose = function () {
      _this.setState({
        open: !_this.state.open
      });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(DropDownMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          position = _this$props.position;
      var open = this.state.open;
      var clones = children.map(function (child) {
        return (0, _react.cloneElement)(child, {
          key: _lodash["default"].uniqueId(),
          onClick: function onClick() {
            _this2.handleClickOption();

            if (child.props && typeof child.props.onClick === 'function') {
              child.props.onClick();
            }
          }
        });
      });
      var opacity = {
        entering: '0',
        entered: '1'
      };
      var scaleY = {
        entering: '0.7',
        entered: '1'
      };
      return _react["default"].createElement(_styles.Box, null, _react["default"].createElement(_styles.ButtonMenu, {
        onMouseDown: this.handleOpenClose
      }, _react["default"].createElement(_styles.Icon, null)), _react["default"].createElement("div", null, _react["default"].createElement(_reactTransitionGroup.Transition, {
        mountOnEnter: true,
        unmountOnExit: true,
        "in": open,
        timeout: 100
      }, function (state) {
        return _react["default"].createElement(_ClickOutside["default"], {
          onOutsideClick: function onOutsideClick() {
            _this2.setState({
              open: false
            });
          }
        }, _react["default"].createElement(_styles.List, {
          opacity: opacity[state],
          scaleY: scaleY[state],
          position: position
        }, _this2.props.label ? _react["default"].createElement(_styles.Label, null, _this2.props.label) : null, clones));
      })));
    }
  }]);

  return DropDownMenu;
}(_react.Component);

DropDownMenu.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element).isRequired,
  label: _propTypes["default"].string,
  position: _propTypes["default"].string
};
DropDownMenu.defaultProps = {
  label: undefined,
  position: null
};
var _default = DropDownMenu;
exports["default"] = _default;