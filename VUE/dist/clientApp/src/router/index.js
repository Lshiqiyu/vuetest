'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Hello = require('@/components/Hello');

var _Hello2 = _interopRequireDefault(_Hello);

var _progressBar = require('@/components/progressBar');

var _progressBar2 = _interopRequireDefault(_progressBar);

var _basic = require('@/pages/basic');

var _basic2 = _interopRequireDefault(_basic);

var _plan = require('@/pages/plan');

var _plan2 = _interopRequireDefault(_plan);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Hello',
    component: _Hello2.default
  }, {
    path: '/progressBar',
    name: 'progressBar',
    component: _progressBar2.default
  }, {
    path: '/basic',
    name: 'basic',
    component: _basic2.default
  }, {
    path: '/plan',
    name: 'plan',
    component: _plan2.default
  }]
});
//# sourceMappingURL=index.js.map