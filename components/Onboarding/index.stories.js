"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStory = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = require("./ProgressBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components 1.0|Onboarding',
  parameters: {
    jest: ['ProgressBar']
  }
};
exports["default"] = _default;

var defaultStory = function defaultStory() {
  return _react["default"].createElement(_ProgressBar.ProgressBar, {
    steps: {
      content1: 'Conteudo 1',
      content2: 'Conteudo 2',
      content3: 'Conteudo 3'
    },
    current: 1
  });
};

exports.defaultStory = defaultStory;
defaultStory.story = {
  name: 'default'
};