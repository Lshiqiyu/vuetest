'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

new _vue2.default({
  el: '#app',
  router: _router2.default,
  template: '<App/>',
  components: { App: _App2.default }

});
//# sourceMappingURL=main.js.map