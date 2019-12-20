webpackHotUpdate("static/development/pages/users.js",{

/***/ "./src/pages/users.js":
/*!****************************!*\
  !*** ./src/pages/users.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/breno-lopes/workspace/ESTUDOS/AMBIENTE_ESTUDO/usando_nextJS/src/pages/users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Users = function Users(_ref) {
  var users = _ref.users;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, users.map(function (user) {
    return __jsx("li", {
      key: user.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, user.login);
  })));
};

Users.getInitialProps = function _callee() {
  var response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.github.com/orgs/rocketseat/members'));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            users: response.data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ })

})
//# sourceMappingURL=users.js.1f85cb6777ed1629eb1b.hot-update.js.map