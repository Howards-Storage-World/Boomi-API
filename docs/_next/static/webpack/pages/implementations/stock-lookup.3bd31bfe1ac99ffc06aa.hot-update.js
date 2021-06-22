webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./components/implementation.tsx":
/*!***************************************!*\
  !*** ./components/implementation.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\implementation.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Implementation = function Implementation(_ref) {
  var name = _ref.name,
      children = _ref.children;
  var meta = {
    title: name,
    description: "An implmentation of the HSW's Boomi API ".concat(name, " Functionality")
  };
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Implementation: ".concat(name, " | HSW Boomi API"),
    meta: meta,
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headingLg,
    style: {
      margin: "auto",
      maxWidth: "36rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, name, " Implementations"), children);
};

_c = Implementation;
/* harmony default export */ __webpack_exports__["default"] = (Implementation);

var _c;

$RefreshReg$(_c, "Implementation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: name, siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/menu */ "./components/menu.tsx");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/meta */ "./components/meta.tsx");
var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\layout.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var name = 'HSW Boomi API';
var siteTitle = 'Home | HSW Boomi API';

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? siteTitle : _ref$title,
      meta = _ref.meta,
      home = _ref.home,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    maxWidth: "36rem"
  } : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container, " ").concat(className),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.webp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), title && __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, title)), __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, home && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heading2Xl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, name))), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, children)));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/menu.module.css":
/*!************************************!*\
  !*** ./components/menu.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./menu.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menu.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./menu.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menu.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./menu.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menu.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/menu.tsx":
/*!*****************************!*\
  !*** ./components/menu.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cheeseburger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheeseburger-menu */ "./node_modules/cheeseburger-menu/index.js");
/* harmony import */ var cheeseburger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cheeseburger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hamburger-menu */ "./node_modules/react-hamburger-menu/dist/HamburgerMenu.js");
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menuContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuContent */ "./components/menuContent.tsx");
/* harmony import */ var _menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.module.css */ "./components/menu.module.css");
/* harmony import */ var _menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_menu_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\menu.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Menu = function Menu() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var open = function open() {
    setIsOpen(true);
  };

  var close = function close() {
    setIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(cheeseburger_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: isOpen,
    closeCallback: close,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_menuContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeCallback: close,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _menu_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menu,
    onClick: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: isOpen,
    menuClicked: open,
    width: 24,
    height: 24,
    strokeWidth: 2,
    rotate: 0,
    color: "whitesmoke",
    borderRadius: 0,
    animationDuration: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
};

_s(Menu, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/menuContent.module.css":
/*!*******************************************!*\
  !*** ./components/menuContent.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./menuContent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menuContent.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./menuContent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menuContent.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./menuContent.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menuContent.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/menuContent.tsx":
/*!************************************!*\
  !*** ./components/menuContent.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menuContent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuContent.module.css */ "./components/menuContent.module.css");
/* harmony import */ var _menuContent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menuContent_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\menuContent.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var navigation_links = [{
  name: 'Home',
  path: "/"
}, {
  name: 'Documentation',
  path: "/documentation"
}, {
  name: 'Implementations',
  path: "/implementations"
} // { name: 'Test', path: "/test" },
];

var MenuContent = function MenuContent(_ref) {
  var closeCallback = _ref.closeCallback,
      _ref$links = _ref.links,
      links = _ref$links === void 0 ? navigation_links : _ref$links;
  return __jsx("div", {
    className: _menuContent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, links.map(function (link) {
    return __jsx("div", {
      className: _menuContent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a['menu-item'],
      key: link.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 26
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx("a", {
      onClick: closeCallback,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, link.name)));
  }), __jsx("div", {
    className: _menuContent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}; // MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }


_c = MenuContent;
/* harmony default export */ __webpack_exports__["default"] = (MenuContent);

var _c;

$RefreshReg$(_c, "MenuContent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/meta.tsx":
/*!*****************************!*\
  !*** ./components/meta.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\meta.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Meta = function Meta(_ref) {
  var options = _ref.options;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, (options === null || options === void 0 ? void 0 : options.title) && __jsx("meta", {
    name: "og:title",
    content: options.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 34
    }
  }), (options === null || options === void 0 ? void 0 : options.description) && __jsx("meta", {
    name: "description",
    content: options.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 40
    }
  }), (options === null || options === void 0 ? void 0 : options.image) && __jsx("meta", {
    property: "og:image",
    content: options.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 34
    }
  }), options && __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 27
    }
  }));
};

_c = Meta;
/* harmony default export */ __webpack_exports__["default"] = (Meta);

var _c;

$RefreshReg$(_c, "Meta");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/tools/Table.module.css":
/*!*******************************************!*\
  !*** ./components/tools/Table.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/tools/Table.tsx":
/*!************************************!*\
  !*** ./components/tools/Table.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/tools/Table.module.css */ "./components/tools/Table.module.css");
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\tools\\Table.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable max-lines-per-function, @typescript-eslint/no-explicit-any */




var Table = function Table(_ref) {
  _s();

  var columns = _ref.columns,
      data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_2__["useBlockLayout"], react_table__WEBPACK_IMPORTED_MODULE_2__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_2__["useResizeColumns"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  return __jsx("table", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("thead", {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.thead,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(), {
          className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }), __jsx("span", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }
        }), column.render('Header'), column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 19
          }
        }), __jsx("div", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getResizerProps(), {
          className: "".concat(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resizer, " ").concat(column.isResizing ? _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.isResizing : ''),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }
        })))
      );
    }));
  })), __jsx("tbody", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tbody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), rows.map(function (row) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
        className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 23
        }
      }), cell.render('Cell'));
    }));
  })));
};

_s(Table, "OJj1dHRwcT5lX75qp47EC5rQD0M=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"]];
});

_c = Table;
/* harmony default export */ __webpack_exports__["default"] = (Table);

var _c;

$RefreshReg$(_c, "Table");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/hooks.ts":
/*!**********************!*\
  !*** ./lib/hooks.ts ***!
  \**********************/
/*! exports provided: useLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoad", function() { return useLoad; });
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();


function useLoad() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      response = _useState2[0],
      setResponse = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      error = _useState3[0],
      setError = _useState3[1];

  function load(_x) {
    return _load.apply(this, arguments);
  }

  function _load() {
    _load = Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fn) {
      var payload;
      return C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fn();

            case 4:
              payload = _context.sent;
              setLoading(false);
              setResponse(payload);
              setError(undefined);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              setLoading(false);
              setError(_context.t0);
              setResponse(undefined);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));
    return _load.apply(this, arguments);
  }

  return {
    response: response,
    error: error,
    isLoading: loading,
    load: load
  };
}

_s(useLoad, "wtB9JeAQv2nP4T5dpgGbs44laYU=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/cheeseburger-menu/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/cheeseburger-menu/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (  true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(1);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-easy-swipe"
var external_react_easy_swipe_ = __webpack_require__(3);
var external_react_easy_swipe_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_swipe_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/styles.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var overlayStyle = function overlayStyle(options) {
  return {
    position: 'fixed',
    top: options.topOffset,
    bottom: options.bottomOffset,
    left: 0,
    right: 0,
    zIndex: 1001,
    background: 'rgba(0, 0, 0, 0.3)',
    opacity: 0,
    transition: "opacity ".concat(options.transitionTime, "s, transform 0s ").concat(options.transitionTime, "s"),
    transform: "translate3d(".concat(options.isLeft ? '' : '-', "100%, 0px, 0px)")
  };
};
var overlayActiveStyle = function overlayActiveStyle(options) {
  return _objectSpread({}, overlayStyle(options), {
    opacity: 1,
    transition: "opacity ".concat(options.transitionTime, "s"),
    transform: 'none'
  });
};
var menuOuterStyle = function menuOuterStyle(options) {
  return {
    position: 'fixed',
    left: options.isLeft ? 0 : 'inherit',
    right: options.isLeft ? 'inherit' : 0,
    top: options.topOffset,
    bottom: options.bottomOffset,
    zIndex: 1002,
    width: options.width,
    maxWidth: '80%',
    transition: "transform ".concat(options.transitionTime, "s"),
    transform: getSkew(options) + "translate3d(".concat(options.isLeft ? '-' : '', "100%, 0px, 0px)"),
    transformOrigin: 'left',
    backgroundColor: options.backgroundColor
  };
};
var menuOuterActiveStyle = function menuOuterActiveStyle(options) {
  return _objectSpread({}, menuOuterStyle(options), {
    transform: getSkew(options) + 'translate3d(0px, 0px, 0px)'
  });
};
var menuShadowStyle = function menuShadowStyle(options) {
  return {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    transition: "opacity ".concat(options.transitionTime, "s"),
    boxShadow: options.showShadow ? '0 0 15px 0 rgba(0, 0, 0, .2)' : 'none',
    opacity: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };
};
var menuShadowActiveStyle = function menuShadowActiveStyle(options) {
  return _objectSpread({}, menuShadowStyle(options), {
    opacity: 1
  });
};
var menuInnerStyle = function menuInnerStyle(options) {
  return {
    height: '100%',
    paddingBottom: options.topOffset,
    overflowY: 'auto'
  };
};
function getSkew(options) {
  return options.skewY ? "skewY(".concat(options.skewY, "deg) ") : '';
}
// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { src_defineProperty(target, key, source[key]); }); } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var IDLE = 'idle';
var VERTICAL = 'vertical';
var HORIZONTAL = 'horizontal';

var src_CheeseburgerMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(CheeseburgerMenu, _Component);

  function CheeseburgerMenu() {
    var _this;

    _classCallCheck(this, CheeseburgerMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheeseburgerMenu).call(this));
    _this.state = {
      swiping: false,
      direction: IDLE,
      swipePosition: {
        x: 0,
        y: 0
      },
      menuExtraStyle: {}
    };
    _this.onSwipeStart = _this.onSwipeStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSwipeMove = _this.onSwipeMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSwipeEnd = _this.onSwipeEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CheeseburgerMenu, [{
    key: "onSwipeStart",
    value: function onSwipeStart(event) {
      if (this.props.isOpen) {
        this.setState({
          swiping: true
        });
      }
    }
  }, {
    key: "onSwipeMove",
    value: function onSwipeMove(position, event) {
      if (this.state.swiping) {
        var options = this.getOptions();
        var direction = this.state.direction;

        if (direction === IDLE) {
          var swipeThreshold = options.width / 15;
          var pastThreshold = Math.abs(position.x) > swipeThreshold || Math.abs(position.y) > swipeThreshold;

          if (pastThreshold) {
            if ((!this.props.right && position.x < 0 || this.props.right && position.x > 0) && Math.abs(position.x) > Math.abs(position.y)) {
              direction = HORIZONTAL;
            } else {
              direction = VERTICAL;
            }
          }
        }

        if (direction === HORIZONTAL) {
          var swipeClosing = !this.props.right && position.x < 0 || this.props.right && position.x > 0;
          var translateX = swipeClosing ? position.x : 0;
          this.setState({
            direction: direction,
            swipePosition: position,
            menuExtraStyle: {
              transform: getSkew(options) + "translate3d(".concat(translateX, "px, 0px, 0px)"),
              transition: 'transform 0s'
            }
          });
          event.preventDefault();
        }

        if (direction === VERTICAL) {
          this.setState({
            direction: direction,
            swipePosition: {
              x: 0,
              y: 0
            },
            menuExtraStyle: {}
          });
        }
      }
    }
  }, {
    key: "onSwipeEnd",
    value: function onSwipeEnd(event) {
      var swipeCloseThreshold = this.getOptions().width / 3;

      if (!this.props.right && this.state.swipePosition.x < -swipeCloseThreshold || this.props.right && this.state.swipePosition.x > swipeCloseThreshold) {
        this.props.closeCallback();
      }

      this.setState({
        swiping: false,
        direction: IDLE,
        swipePosition: {
          x: 0,
          y: 0
        },
        menuExtraStyle: {}
      });
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return {
        isLeft: !this.props.right,
        transitionTime: this.props.transitionTime || 0.3,
        topOffset: this.props.topOffset || 0,
        bottomOffset: this.props.bottomOffset || 0,
        width: this.props.width || 300,
        backgroundColor: this.props.backgroundColor || 'white',
        showShadow: !this.props.noShadow,
        skewY: this.props.skewY
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          closeCallback = _this$props.closeCallback,
          className = _this$props.className,
          overlayClassName = _this$props.overlayClassName,
          outerClassName = _this$props.outerClassName,
          innerClassName = _this$props.innerClassName,
          shadowClassName = _this$props.shadowClassName,
          children = _this$props.children;
      var options = this.getOptions();
      var baseMenuOuterStyle = isOpen ? menuOuterActiveStyle(options) : menuOuterStyle(options);

      var currentMenuOuterStyle = src_objectSpread({}, baseMenuOuterStyle, this.state.menuExtraStyle);

      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu', className, {
          open: isOpen
        })
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-overlay', overlayClassName),
        style: isOpen ? overlayActiveStyle(options) : overlayStyle(options),
        onClick: closeCallback
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_react_easy_swipe_default.a, {
        onSwipeStart: this.onSwipeStart,
        onSwipeMove: this.onSwipeMove,
        onSwipeEnd: this.onSwipeEnd
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-outer', outerClassName),
        style: currentMenuOuterStyle
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-inner', innerClassName),
        style: menuInnerStyle(options)
      }, children), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classnames_default()('cheeseburger-menu-shadow', shadowClassName),
        style: isOpen ? menuShadowActiveStyle(options) : menuShadowStyle(options)
      }))));
    }
  }]);

  return CheeseburgerMenu;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

src_CheeseburgerMenu.propTypes = {
  isOpen: external_prop_types_default.a.bool.isRequired,
  closeCallback: external_prop_types_default.a.func.isRequired,
  right: external_prop_types_default.a.bool,
  transitionTime: external_prop_types_default.a.number,
  topOffset: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  bottomOffset: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  width: external_prop_types_default.a.number,
  backgroundColor: external_prop_types_default.a.string,
  skewY: external_prop_types_default.a.number,
  noShadow: external_prop_types_default.a.bool,
  className: external_prop_types_default.a.string,
  overlayClassName: external_prop_types_default.a.string,
  outerClassName: external_prop_types_default.a.string,
  innerClassName: external_prop_types_default.a.string,
  shadowClassName: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node
};
/* harmony default export */ var src = __webpack_exports__["default"] = (src_CheeseburgerMenu);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/cheeseburger-menu/index.js":
/*!*************************************************!*\
  !*** ./node_modules/cheeseburger-menu/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CheeseburgerMenu = __webpack_require__(/*! ./dist/index */ "./node_modules/cheeseburger-menu/dist/index.js");

module.exports = CheeseburgerMenu;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (true ? "\nOpen your browser's console to view the Component stack trace." : undefined));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.pathname || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout.module.css":
/*!**************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/layout.module.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".layout_container__2t4v2 {\r\n  padding: 0 1rem;\r\n  margin: 2rem auto 6rem;\r\n}\r\n\r\n.layout_header__2rhWq {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.layout_headerImage__2h5On {\r\n  width: 6rem;\r\n  height: 6rem;\r\n}\r\n\r\n.layout_headerHomeImage__3qo1_ {\r\n  width: 8rem;\r\n  height: 8rem;\r\n}\r\n\r\n.layout_backToHome__1vZsp {\r\n  margin: 3rem 0 0;\r\n}", "",{"version":3,"sources":["webpack://components/layout.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".container {\r\n  padding: 0 1rem;\r\n  margin: 2rem auto 6rem;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.headerImage {\r\n  width: 6rem;\r\n  height: 6rem;\r\n}\r\n\r\n.headerHomeImage {\r\n  width: 8rem;\r\n  height: 8rem;\r\n}\r\n\r\n.backToHome {\r\n  margin: 3rem 0 0;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "layout_container__2t4v2",
	"header": "layout_header__2rhWq",
	"headerImage": "layout_headerImage__2h5On",
	"headerHomeImage": "layout_headerHomeImage__3qo1_",
	"backToHome": "layout_backToHome__1vZsp"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menu.module.css":
/*!************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/menu.module.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu_menu__2p8MF {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    padding: 0.5em 1em 1em 0.5em;\r\n    border-bottom: 1px solid rgba(245, 245, 245, 0.8);\r\n    border-right: 1px solid rgba(245, 245, 245, 0.8);\r\n    border-bottom-right-radius: 2em;\r\n    z-index: 1;\r\n    /* background-color: rgb(47, 79, 79); */\r\n    background-color: hsl(240, 5%, 20%);\r\n\r\n    /* transition: 0.3s; */\r\n    \r\n}\r\n  ", "",{"version":3,"sources":["webpack://components/menu.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;;IAEP,4BAA4B;IAC5B,iDAAiD;IACjD,gDAAgD;IAChD,+BAA+B;IAC/B,UAAU;IACV,uCAAuC;IACvC,mCAAmC;;IAEnC,sBAAsB;;AAE1B","sourcesContent":[".menu {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    padding: 0.5em 1em 1em 0.5em;\r\n    border-bottom: 1px solid rgba(245, 245, 245, 0.8);\r\n    border-right: 1px solid rgba(245, 245, 245, 0.8);\r\n    border-bottom-right-radius: 2em;\r\n    z-index: 1;\r\n    /* background-color: rgb(47, 79, 79); */\r\n    background-color: hsl(240, 5%, 20%);\r\n\r\n    /* transition: 0.3s; */\r\n    \r\n}\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"menu": "menu_menu__2p8MF"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menuContent.module.css":
/*!*******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/menuContent.module.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menuContent_menu__L8bny {\r\n    position: relative;\r\n    height: 100%;\r\n    font-family: sans-serif;\r\n    /* background-color: rgb(35, 65, 65); */\r\n    background-color: hsl(240, 5%, 15%);\r\n}\r\n  \r\n.menuContent_menu-item__1ze-M {\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.menuContent_menu-item__1ze-M a {\r\n    display: block;\r\n    padding: .7rem 15px;\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.menuContent_menu-item__1ze-M a:hover {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.menuContent_menu-item__1ze-M a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.menuContent_menu-item__1ze-M a:visited {\r\n    color: inherit;\r\n}\r\n\r\n.menuContent_active-menu-item__3zkEw {\r\n    background-color: #e8e8f9;\r\n}\r\n\r\n.menuContent_hint__WZtzR {\r\n    position: absolute;\r\n    bottom: 0;\r\n    padding: 0.5em;\r\n    font-size: 0.7em;\r\n}", "",{"version":3,"sources":["webpack://components/menuContent.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,uCAAuC;IACvC,mCAAmC;AACvC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,0CAA0C;AAC9C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,cAAc;IACd,gBAAgB;AACpB","sourcesContent":[".menu {\r\n    position: relative;\r\n    height: 100%;\r\n    font-family: sans-serif;\r\n    /* background-color: rgb(35, 65, 65); */\r\n    background-color: hsl(240, 5%, 15%);\r\n}\r\n  \r\n.menu-item {\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.menu-item a {\r\n    display: block;\r\n    padding: .7rem 15px;\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-item a:hover {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.menu-item a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-item a:visited {\r\n    color: inherit;\r\n}\r\n\r\n.active-menu-item {\r\n    background-color: #e8e8f9;\r\n}\r\n\r\n.hint {\r\n    position: absolute;\r\n    bottom: 0;\r\n    padding: 0.5em;\r\n    font-size: 0.7em;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"menu": "menuContent_menu__L8bny",
	"menu-item": "menuContent_menu-item__1ze-M",
	"active-menu-item": "menuContent_active-menu-item__3zkEw",
	"hint": "menuContent_hint__WZtzR"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css":
/*!*******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/tools/Table.module.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* padding: 1rem; */\r\n\r\n/* Table Rounding */\r\n.Table_table__1EC6b {\r\n    display: inline-table;\r\n    border-spacing: 0;\r\n}\r\n\r\n.Table_table__1EC6b .Table_thead__2deuv   {\r\n    display: block;\r\n    background: hsl(240, 5%, 15%);\r\n    border: 1px solid whitesmoke;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tbody__3LSi_   {\r\n    display: block;\r\n    border-bottom: 1px solid whitesmoke;\r\n    border-left: 1px solid whitesmoke;\r\n    border-right: 1px solid whitesmoke;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tr__2DL9c .Table_td__1oCl7, .Table_table__1EC6b .Table_tr__2DL9c .Table_th__6w9tE {\r\n    border-right: 1px solid whitesmoke;\r\n}\r\n.Table_table__1EC6b .Table_tr__2DL9c .Table_td__1oCl7:last-of-type, .Table_table__1EC6b .Table_tr__2DL9c .Table_th__6w9tE:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tbody__3LSi_ .Table_tr__2DL9c {\r\n    border-bottom: 1px solid whitesmoke;\r\n}\r\n.Table_table__1EC6b .Table_tbody__3LSi_ .Table_tr__2DL9c:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.Table_th__6w9tE, .Table_td__1oCl7 {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN, .Table_td__1oCl7 .Table_resizer__2AqsN {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 80%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translateX(50%) translateY(10%);\r\n            transform: translateX(50%) translateY(10%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN.Table_isResizing__W_zI5, .Table_td__1oCl7 .Table_resizer__2AqsN.Table_isResizing__W_zI5 {\r\n    background: red;\r\n}", "",{"version":3,"sources":["webpack://components/tools/Table.module.css"],"names":[],"mappings":"AAAA,mBAAmB;;AAEnB,mBAAmB;AACnB;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B,4BAA4B;IAC5B,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,mCAAmC;IACnC,iCAAiC;IACjC,kCAAkC;IAClC,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,kCAAkC;AACtC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,kDAA0C;YAA1C,0CAA0C;IAC1C,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* padding: 1rem; */\r\n\r\n/* Table Rounding */\r\n.table {\r\n    display: inline-table;\r\n    border-spacing: 0;\r\n}\r\n\r\n.table .thead   {\r\n    display: block;\r\n    background: hsl(240, 5%, 15%);\r\n    border: 1px solid whitesmoke;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.table .tbody   {\r\n    display: block;\r\n    border-bottom: 1px solid whitesmoke;\r\n    border-left: 1px solid whitesmoke;\r\n    border-right: 1px solid whitesmoke;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.table .tr .td, .table .tr .th {\r\n    border-right: 1px solid whitesmoke;\r\n}\r\n.table .tr .td:last-of-type, .table .tr .th:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.table .tbody .tr {\r\n    border-bottom: 1px solid whitesmoke;\r\n}\r\n.table .tbody .tr:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.th, .td {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.th .resizer, .td .resizer {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 80%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transform: translateX(50%) translateY(10%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.th .resizer.isResizing, .td .resizer.isResizing {\r\n    background: red;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"table": "Table_table__1EC6b",
	"thead": "Table_thead__2deuv",
	"tbody": "Table_tbody__3LSi_",
	"tr": "Table_tr__2DL9c",
	"td": "Table_td__1oCl7",
	"th": "Table_th__6w9tE",
	"resizer": "Table_resizer__2AqsN",
	"isResizing": "Table_isResizing__W_zI5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/utils.module.css":
/*!*********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/utils.module.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".utils_heading2Xl__1I65m {\r\n    font-size: 2.5rem;\r\n    line-height: 1.2;\r\n    font-weight: 800;\r\n    letter-spacing: -0.05rem;\r\n    margin: 1rem 0;\r\n  }\r\n  \r\n.utils_headingXl__1XecN {\r\n  font-size: 2rem;\r\n  line-height: 1.3;\r\n  font-weight: 800;\r\n  letter-spacing: -0.05rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.utils_headingLg__de7p0 {\r\n  font-size: 1.5rem;\r\n  line-height: 1.4;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.utils_headingMd__3de6G {\r\n  font-size: 1.2rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.utils_borderCircle__13qdJ {\r\n  border-radius: 9999px;\r\n}\r\n\r\n.utils_colorInherit__3Gudf {\r\n  color: inherit;\r\n}\r\n\r\n.utils_padding1px__oCny8 {\r\n  padding-top: 1px;\r\n}\r\n\r\n.utils_list__S7_pe {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.utils_listItem__2eJpJ {\r\n  margin: 0 0 1.25rem;\r\n}\r\n\r\n.utils_listItem__2eJpJ:last-child {\r\n  margin: 0;\r\n}\r\n\r\n\r\n.utils_lightText__12Ckm {\r\n  color: rgb(190, 190, 190);\r\n}\r\n\r\n.utils_sticky__1I7V4 {\r\n  align-self: flex-start;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.utils_flexGrid__2xpNp {\r\n  display: flex;\r\n}\r\n\r\n.utils_flexColumn__29rHW {\r\n  flex: 1 1;\r\n}\r\n\r\n.utils_input__3HigS[type=\"submit\"] {\r\n  border: 2px solid rgba(255, 255, 255, 0.7);\r\n  border-radius: 5px;\r\n  padding: 6px;\r\n  background-color: hsl(240, 5%, 20%);\r\n  color: whitesmoke;\r\n}\r\n\r\n.utils_input__3HigS[type=\"submit\"]:hover {\r\n  /* border: 1px solid rgba(255, 255, 255, 0.4); */\r\n  color: whitesmoke;\r\n  background-color: hsl(240, 5%, 20%);\r\n}\r\n\r\n.utils_input__3HigS[type=\"text\"]:focus {\r\n  color: hsl(240, 5%, 20%);\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.utils_input__3HigS[type=\"text\"] {\r\n  border: 1px solid whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 6px;\r\n  color: whitesmoke;\r\n  background-color: hsl(240, 5%, 20%);\r\n}", "",{"version":3,"sources":["webpack://styles/utils.module.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;IACxB,cAAc;EAChB;;AAEF;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;;AAGA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EAEtB,gBAAgB;EAChB,MAAM;AACR;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,gDAAgD;EAChD,iBAAiB;EACjB,mCAAmC;AACrC;;AAEA;EACE,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,mCAAmC;AACrC","sourcesContent":[".heading2Xl {\r\n    font-size: 2.5rem;\r\n    line-height: 1.2;\r\n    font-weight: 800;\r\n    letter-spacing: -0.05rem;\r\n    margin: 1rem 0;\r\n  }\r\n  \r\n.headingXl {\r\n  font-size: 2rem;\r\n  line-height: 1.3;\r\n  font-weight: 800;\r\n  letter-spacing: -0.05rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.headingLg {\r\n  font-size: 1.5rem;\r\n  line-height: 1.4;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.headingMd {\r\n  font-size: 1.2rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.borderCircle {\r\n  border-radius: 9999px;\r\n}\r\n\r\n.colorInherit {\r\n  color: inherit;\r\n}\r\n\r\n.padding1px {\r\n  padding-top: 1px;\r\n}\r\n\r\n.list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.listItem {\r\n  margin: 0 0 1.25rem;\r\n}\r\n\r\n.listItem:last-child {\r\n  margin: 0;\r\n}\r\n\r\n\r\n.lightText {\r\n  color: rgb(190, 190, 190);\r\n}\r\n\r\n.sticky {\r\n  align-self: flex-start;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.flexGrid {\r\n  display: flex;\r\n}\r\n\r\n.flexColumn {\r\n  flex: 1;\r\n}\r\n\r\n.input[type=\"submit\"] {\r\n  border: 2px solid rgba(255, 255, 255, 0.7);\r\n  border-radius: 5px;\r\n  padding: 6px;\r\n  background-color: hsl(240, 5%, 20%);\r\n  color: whitesmoke;\r\n}\r\n\r\n.input[type=\"submit\"]:hover {\r\n  /* border: 1px solid rgba(255, 255, 255, 0.4); */\r\n  color: whitesmoke;\r\n  background-color: hsl(240, 5%, 20%);\r\n}\r\n\r\n.input[type=\"text\"]:focus {\r\n  color: hsl(240, 5%, 20%);\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.input[type=\"text\"] {\r\n  border: 1px solid whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 6px;\r\n  color: whitesmoke;\r\n  background-color: hsl(240, 5%, 20%);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"heading2Xl": "utils_heading2Xl__1I65m",
	"headingXl": "utils_headingXl__1XecN",
	"headingLg": "utils_headingLg__de7p0",
	"headingMd": "utils_headingMd__3de6G",
	"borderCircle": "utils_borderCircle__13qdJ",
	"colorInherit": "utils_colorInherit__3Gudf",
	"padding1px": "utils_padding1px__oCny8",
	"list": "utils_list__S7_pe",
	"listItem": "utils_listItem__2eJpJ",
	"lightText": "utils_lightText__12Ckm",
	"sticky": "utils_sticky__1I7V4",
	"flexGrid": "utils_flexGrid__2xpNp",
	"flexColumn": "utils_flexColumn__29rHW",
	"input": "utils_input__3HigS"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./react-swipe */ "./node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/react-swipe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener("test", null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {}

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            tagName = _props.tagName,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            allowMouseEvents = _props.allowMouseEvents,
            onSwipeUp = _props.onSwipeUp,
            onSwipeDown = _props.onSwipeDown,
            onSwipeLeft = _props.onSwipeLeft,
            onSwipeRight = _props.onSwipeRight,
            onSwipeStart = _props.onSwipeStart,
            onSwipeMove = _props.onSwipeMove,
            onSwipeEnd = _props.onSwipeEnd,
            props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: function ref(node) {
              return _this2.swiper = node;
            },
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ "./node_modules/react-hamburger-menu/dist/HamburgerMenu.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-hamburger-menu/dist/HamburgerMenu.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = HamburgerMenu;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function HamburgerMenu(props) {
  var width = (props.width || 36) + "px",
      height = (props.height || 30) + "px",
      halfHeight = parseInt(height.replace("px", "")) / 2 + "px",
      isOpen = props.isOpen || false,
      strokeWidth = props.strokeWidth || 2,
      halfStrokeWidth = "-" + strokeWidth / 2 + "px",
      animationDuration = props.animationDuration || "0.4";

  var getTransformValue = function getTransformValue(isOpen, defaultPos, rotateVal) {
    return "translate3d(0," + (isOpen ? halfHeight : defaultPos) + ",0) rotate(" + (isOpen ? rotateVal + "deg" : "0") + ")";
  };

  var styles = {
    container: {
      width: width,
      height: height,
      position: "relative",
      transform: "rotate(" + (props.rotate || 0) + "deg)"
    },
    lineBase: {
      display: "block",
      height: strokeWidth + "px",
      width: "100%",
      background: props.color || "#000",
      transitionTimingFunction: "ease",
      transitionDuration: animationDuration + "s",
      borderRadius: (props.borderRadius || 0) + "px",
      transformOrigin: "center",
      position: "absolute"
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
      marginTop: halfStrokeWidth
    },
    secondLine: {
      transitionTimingFunction: "ease-out",
      transitionDuration: animationDuration / 4 + "s",
      opacity: isOpen ? "0" : "1",
      top: halfHeight,
      marginTop: halfStrokeWidth
    },
    thirdLine: {
      transform: getTransformValue(isOpen, height, -45),
      marginTop: halfStrokeWidth
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.container,
    className: props.className,
    onClick: props.menuClicked
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.firstLine)
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.secondLine)
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.thirdLine)
  }));
}

HamburgerMenu.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  menuClicked: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  strokeWidth: _propTypes["default"].number,
  rotate: _propTypes["default"].number,
  color: _propTypes["default"].string,
  borderRadius: _propTypes["default"].number,
  animationDuration: _propTypes["default"].number,
  className: _propTypes["default"].string
};

/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  undefined;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultRenderer = function defaultRenderer(_ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
    return value;
  };
  var emptyRenderer = function emptyRenderer() {
    return React.createElement(React.Fragment, null, "\xA0");
  };
  var defaultColumn = {
    Cell: defaultRenderer,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: emptyRenderer,
      Footer: emptyRenderer
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    Object.assign(column, {
      originalWidth: column.width
    });
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
    if (additionalHeaderProperties === void 0) {
      additionalHeaderProperties = function additionalHeaderProperties() {
        return {};
      };
    }

    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            }, additionalHeaderProperties(column));
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn(_extends({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, additionalHeaderProperties(column)), defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row, addToExpandedRows) {
      if (addToExpandedRows === void 0) {
        addToExpandedRows = true;
      }

      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;

      if (addToExpandedRows) {
        expandedRows.push(row);
      }

      if (row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(function (row) {
          return handleRow(row, expandSubRows);
        });
      }
    };

    rows.forEach(function (row) {
      return handleRow(row);
    });
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var isAllRowsExpanded = instance.isAllRowsExpanded,
          rowsById = instance.rowsById;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = values[0] || 0;
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var mid = Math.floor(values.length / 2);
    var nums = [].concat(values).sort(function (a, b) {
      return a - b;
    });
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.setGroupBy = 'setGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.setGroupBy) {
      var value = action.value;
      return _extends({}, state, {
        groupBy: value
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setGroupBy = React.useCallback(function (value) {
      dispatch({
        type: actions.setGroupBy,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Aggregate the values


          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            // Get the columnValues to aggregate
            var groupedValues = groupedRows.map(function (row) {
              return row.values[column.id];
            }); // Get the columnValues to aggregate

            var leafValues = leafRows.map(function (row) {
              var columnValue = row.values[column.id];

              if (!depth && column.aggregateValue) {
                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

                if (!aggregateValueFn) {
                  console.info({
                    column: column
                  });
                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                }

                columnValue = aggregateValueFn(columnValue, row, column);
              }

              return columnValue;
            });
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows;
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy,
      setGroupBy: setGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      var _row$subRows;

      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var _getRowValuesByColumn = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn[0],
        b = _getRowValuesByColumn[1]; // Force to strings (or "" for unsupported types)


    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var _getRowValuesByColumn2 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn2[0],
        b = _getRowValuesByColumn2[1];

    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var _getRowValuesByColumn3 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn3[0],
        b = _getRowValuesByColumn3[1];

    return compareBasic(a, b);
  }
  function string(rowA, rowB, columnId) {
    var _getRowValuesByColumn4 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn4[0],
        b = _getRowValuesByColumn4[1];

    a = a.split('').filter(Boolean);
    b = b.split('').filter(Boolean);

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var alower = aa.toLowerCase();
      var blower = bb.toLowerCase(); // Case insensitive comparison until characters match

      if (alower > blower) {
        return 1;
      }

      if (blower > alower) {
        return -1;
      } // If lowercase characters are identical


      if (aa > bb) {
        return 1;
      }

      if (bb > aa) {
        return -1;
      }

      continue;
    }

    return a.length - b.length;
  }
  function number(rowA, rowB, columnId) {
    var _getRowValuesByColumn5 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn5[0],
        b = _getRowValuesByColumn5[1];

    var replaceNonNumeric = /[^0-9.]/gi;
    a = Number(String(a).replace(replaceNonNumeric, ''));
    b = Number(String(b).replace(replaceNonNumeric, ''));
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValuesByColumnID(row1, row2, columnId) {
    return [row1.values[columnId], row2.values[columnId]];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic,
    string: string,
    number: number
  });

  actions.resetSortBy = 'resetSortBy';
  actions.setSortBy = 'setSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.setSortBy) {
      var _sortBy = action.sortBy;
      return _extends({}, state, {
        sortBy: _sortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy2 = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy2.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy2.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy2, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy2.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy2.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
    var setSortBy = React.useCallback(function (sortBy) {
      dispatch({
        type: actions.setSortBy,
        sortBy: sortBy
      });
    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length === 0) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      setSortBy: setSortBy,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllPageRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllPageRowsSelected,
      title: 'Toggle All Current Page Rows Selected',
      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
        var id = _ref4.id;
        return instance.state.selectedRowIds[id];
      }))
    }];
  }; // eslint-disable-next-line max-params


  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
          getSubRows = instance.getSubRows;
      var isSelected = state.selectedRowIds[id];
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[id] = true;
          } else {
            delete newSelectedRowIds[id];
          }
        }

        if (selectSubRows && getSubRows(row)) {
          return getSubRows(row).forEach(function (row) {
            return handleRowById(row.id);
          });
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }

    if (action.type === actions.toggleAllPageRowsSelected) {
      var _setSelected2 = action.value;

      var page = instance.page,
          _rowsById2 = instance.rowsById,
          _instance$selectSubRo2 = instance.selectSubRows,
          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
          isAllPageRowsSelected = instance.isAllPageRowsSelected,
          _getSubRows = instance.getSubRows;

      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

      var _handleRowById = function _handleRowById(id) {
        var row = _rowsById2[id];

        if (!row.isGrouped) {
          if (_selectAll) {
            _newSelectedRowIds[id] = true;
          } else {
            delete _newSelectedRowIds[id];
          }
        }

        if (_selectSubRows && _getSubRows(row)) {
          return _getSubRows(row).forEach(function (row) {
            return _handleRowById(row.id);
          });
        }
      };

      page.forEach(function (row) {
        return _handleRowById(row.id);
      });
      return _extends({}, state, {
        selectedRowIds: _newSelectedRowIds
      });
    }

    return state;
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo3 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
        dispatch = instance.dispatch,
        page = instance.page,
        getSubRows = instance.getSubRows;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
    var isAllPageRowsSelected = isAllRowsSelected;

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    if (!isAllRowsSelected) {
      if (page && page.length && page.some(function (_ref5) {
        var id = _ref5.id;
        return !selectedRowIds[id];
      })) {
        isAllPageRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleAllPageRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllPageRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      isAllPageRowsSelected: isAllPageRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
      toggleAllPageRowsSelected: toggleAllPageRowsSelected
    });
  }

  function prepareRow$3(row, _ref6) {
    var instance = _ref6.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds, getSubRows) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    var subRows = getSubRows(row);

    if (subRows && subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
        return cell.column.id === columnId;
      }));
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

      var dispatchMove = function dispatchMove(clientXPos) {
        dispatch({
          type: actions.columnResizing,
          clientX: clientXPos
        });
      };

      var dispatchEnd = function dispatchEnd() {
        return dispatch({
          type: actions.columnDoneResizing
        });
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return dispatchMove(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            dispatchMove(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        columnResizing: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;

      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(instance) {
    var plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetRe = instance.autoResetResize,
        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
        columns = instance.columns;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
    var getAutoResetResize = useGetLatest(autoResetResize);
    useMountedLayoutEffect(function () {
      if (getAutoResetResize()) {
        dispatch({
          type: actions.resetResize
        });
      }
    }, [columns]);
    var resetResizing = React.useCallback(function () {
      return dispatch({
        type: actions.resetResize
      });
    }, [dispatch]);
    Object.assign(instance, {
      resetResizing: resetResizing
    });
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  function useGridLayout(hooks) {
    hooks.stateReducers.push(reducer$c);
    hooks.getTableProps.push(getTableProps$1);
    hooks.getHeaderProps.push(getHeaderProps$1);
  }
  useGridLayout.pluginName = 'useGridLayout';

  var getTableProps$1 = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: "grid",
        gridTemplateColumns: instance.state.gridLayout.columnWidths.map(function (w) {
          return w;
        }).join(" ")
      }
    }];
  };

  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      id: "header-cell-" + column.id,
      style: {
        position: "sticky" //enables a scroll wrapper to be placed around the table and have sticky headers

      }
    }];
  };

  function reducer$c(state, action, previousState, instance) {
    if (action.type === "init") {
      return _extends({
        gridLayout: {
          columnWidths: instance.columns.map(function () {
            return "auto";
          })
        }
      }, state);
    }

    if (action.type === "columnStartResizing") {
      var columnId = action.columnId;
      var columnIndex = instance.visibleColumns.findIndex(function (col) {
        return col.id === columnId;
      });
      var elWidth = getElementWidth(columnId);

      if (elWidth !== undefined) {
        return _extends({}, state, {
          gridLayout: _extends({}, state.gridLayout, {
            columnId: columnId,
            columnIndex: columnIndex,
            startingWidth: elWidth
          })
        });
      } else {
        return state;
      }
    }

    if (action.type === "columnResizing") {
      var _state$gridLayout = state.gridLayout,
          _columnIndex = _state$gridLayout.columnIndex,
          startingWidth = _state$gridLayout.startingWidth,
          columnWidths = _state$gridLayout.columnWidths;
      var change = state.columnResizing.startX - action.clientX;
      var newWidth = startingWidth - change;
      var columnWidthsCopy = [].concat(columnWidths);
      columnWidthsCopy[_columnIndex] = newWidth + "px";
      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          columnWidths: columnWidthsCopy
        })
      });
    }
  }

  function getElementWidth(columnId) {
    var _document$getElementB;

    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

    if (width !== undefined) {
      return width;
    }
  }

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.defaultRenderer = defaultRenderer;
  exports.emptyRenderer = emptyRenderer;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGridLayout = useGridLayout;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ }),

/***/ "./pages/implementations/stock-lookup.tsx":
/*!************************************************!*\
  !*** ./pages/implementations/stock-lookup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_implementation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/implementation */ "./components/implementation.tsx");
/* harmony import */ var _components_tools_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/tools/Table */ "./components/tools/Table.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lib/hooks */ "./lib/hooks.ts");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









// eslint-disable-next-line max-lines-per-function
var StockLookup = function StockLookup() {
  _s();

  var _error$response, _error$response$data;

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("12100 12077"),
      stores = _useState[0],
      setStores = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("LTW9141 LTW9252 LTW9135"),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useLoad = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_8__["useLoad"])(),
      response = _useLoad.response,
      error = _useLoad.error,
      isLoading = _useLoad.isLoading,
      load = _useLoad.load;

  function loader() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise( /*#__PURE__*/function () {
      var _ref = Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(resolve, reject) {
        var parser, payload, resp;
        return C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                parser = function parser(input) {
                  return input.split(/\s*,\s*|\s+/).filter(function (item) {
                    return item != "" && item;
                  });
                };

                payload = {
                  "location-ids": parser(stores),
                  "SKUs": parser(products)
                };
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload);

              case 5:
                resp = _context.sent;
                resolve(resp.data);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    load(loader);
  }, []);
  var data = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
    if (response && !error) {
      var SoH = response === null || response === void 0 ? void 0 : response.results.map(function (store) {
        return _objectSpread({
          storeID: store["location-id"],
          storeName: store["location-name"]
        }, store.availability.reduce(function (obj, item) {
          obj[item["product-code"]] = item["quantity"];
          return obj;
        }, {}));
      });
      return SoH;
    }

    return [{
      msg: "Something went wrong."
    }];
  }, [response]);
  var columns = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
    var base = [{
      Header: 'Store ID',
      accessor: 'storeID'
    }, {
      Header: 'Store Name',
      accessor: 'storeName'
    }];

    if (response && !error) {
      var _products = new Set();

      var _iterator = _createForOfIteratorHelper(response === null || response === void 0 ? void 0 : response.results),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var store = _step.value;

          var _iterator3 = _createForOfIteratorHelper(store.availability),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;

              _products.add(item["product-code"]);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(_products.keys()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _item = _step2.value;
          base.push({
            Header: _item,
            accessor: _item
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return base;
    }

    return [{
      Header: "Error / Message",
      accesor: "msg"
    }];
  }, [response]);

  var onSubmit = function onSubmit(e) {
    load(loader);
    e.preventDefault();
  };

  var onChangeStores = function onChangeStores(e) {
    setStores(e.currentTarget.value);
  };

  var onChangeProducts = function onChangeProducts(e) {
    setProducts(e.currentTarget.value);
  };

  var a = axios__WEBPACK_IMPORTED_MODULE_4___default.a.isAxiosError(error) && ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.toString());
  console.log(a);
  return __jsx(_components_implementation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    style: {
      margin: "auto",
      maxWidth: "20rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Stores: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: stores,
    onChange: onChangeStores,
    placeholder: "Store IDs seperated by spaces",
    style: {
      "width": "200px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 194
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "Products: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: products,
    onChange: onChangeProducts,
    placeholder: "Item Numbers seperated by spaces",
    style: {
      "width": "225px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 203
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    style: {
      margin: "auto",
      maxWidth: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "Error: ", error === null || error === void 0 ? void 0 : error.toString()), __jsx("p", {
    dangerouslySetInnerHTML: a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 79
    }
  })));
};

_s(StockLookup, "nXXQk1GbxV3/JUQqdGG+OVInjdY=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"], _lib_hooks__WEBPACK_IMPORTED_MODULE_8__["useLoad"]];
});

_c = StockLookup;
/* harmony default export */ __webpack_exports__["default"] = (StockLookup);

var _c;

$RefreshReg$(_c, "StockLookup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./utils.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/utils.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./utils.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/utils.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./utils.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/utils.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbXBsZW1lbnRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0Lm1vZHVsZS5jc3M/OGEzMiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUubW9kdWxlLmNzcz9mZGM5Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnVDb250ZW50Lm1vZHVsZS5jc3M/MDRmZCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51Q29udGVudC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWV0YS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9vbHMvVGFibGUubW9kdWxlLmNzcz9hZmIyIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rvb2xzL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLnRzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2hlZXNlYnVyZ2VyLW1lbnUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NoZWVzZWJ1cmdlci1tZW51L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51Q29udGVudC5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1lYXN5LXN3aXBlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWVhc3ktc3dpcGUvbGliL3JlYWN0LXN3aXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaGFtYnVyZ2VyLW1lbnUvZGlzdC9IYW1idXJnZXJNZW51LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGFibGUvZGlzdC9yZWFjdC10YWJsZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3M/OGE3YyJdLCJuYW1lcyI6WyJJbXBsZW1lbnRhdGlvbiIsIm5hbWUiLCJjaGlsZHJlbiIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXRpbFN0eWxlcyIsImhlYWRpbmdMZyIsIm1hcmdpbiIsIm1heFdpZHRoIiwic2l0ZVRpdGxlIiwiTGF5b3V0IiwiaG9tZSIsInN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGluZzJYbCIsIk1lbnUiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsIm9wZW4iLCJjbG9zZSIsIm1lbnUiLCJuYXZpZ2F0aW9uX2xpbmtzIiwicGF0aCIsIk1lbnVDb250ZW50IiwiY2xvc2VDYWxsYmFjayIsImxpbmtzIiwibWFwIiwibGluayIsImhpbnQiLCJNZXRhIiwib3B0aW9ucyIsImltYWdlIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInVzZVRhYmxlIiwidXNlQmxvY2tMYXlvdXQiLCJ1c2VTb3J0QnkiLCJ1c2VSZXNpemVDb2x1bW5zIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJ0YWJsZSIsInRoZWFkIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwidHIiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJ0aCIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJnZXRSZXNpemVyUHJvcHMiLCJyZXNpemVyIiwiaXNSZXNpemluZyIsInRib2R5Iiwicm93IiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJ0ZCIsInVzZUxvYWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwibG9hZCIsImZuIiwicGF5bG9hZCIsImlzTG9hZGluZyIsInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzaGFsbG93IiwibG9jYWxlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYWN0dWFsIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwic3RvcmVzIiwic2V0U3RvcmVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VyIiwiaW5wdXQiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsInN0b3JlIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImF2YWlsYWJpbGl0eSIsInJlZHVjZSIsIm9iaiIsIm1zZyIsImJhc2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsIlNldCIsImFkZCIsImtleXMiLCJwdXNoIiwiYWNjZXNvciIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZVN0b3JlcyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUHJvZHVjdHMiLCJhIiwiaXNBeGlvc0Vycm9yIiwidG9TdHJpbmciLCJsb2ciLCJoZWFkaW5nTWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBb0MsR0FBRyxTQUF2Q0EsY0FBdUMsT0FBd0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25FLE1BQU1DLElBQUksR0FBRztBQUFFQyxTQUFLLEVBQUVILElBQVQ7QUFBZUksZUFBVyxvREFBNkNKLElBQTdDO0FBQTFCLEdBQWI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLDRCQUFxQkEsSUFBckIscUJBQWI7QUFBMEQsUUFBSSxFQUFFRSxJQUFoRTtBQUFzRSxTQUFLLEVBQUUsRUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRywrREFBVSxDQUFDQyxTQUExQjtBQUFxQyxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFLE1BQVQ7QUFBaUJDLGNBQVEsRUFBRTtBQUEzQixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtGUixJQUFsRixxQkFESixFQUVLQyxRQUZMLENBREY7QUFNRCxDQVREOztLQUFNRixjO0FBV1NBLDZFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSxVQUFVLG1CQUFPLENBQUMsbU5BQXdHO0FBQzFILDBCQUEwQixtQkFB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bEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNB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QUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRCxpQzs7Ozs7Ozs7Ozs7QUNyZUEseUJBQXlCLG1CQUFPLENBQUMsb0VBQWM7O0FBRS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQTs7QUFTQTs7QUFDQTs7QUF1QkEsSUFBTVksVUFBMkMsR0FBakQ7O0FBRUEsNkNBS1E7QUFDTixNQUFJLFVBQWlDLENBQXJDLFFBQThDO0FBQzlDLE1BQUksQ0FBQyx3QkFBTCxJQUFLLENBQUwsRUFBdUIsT0FGakIsQ0FHTjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUMsUUFBTSxDQUFOQSxxQ0FBMENDLGFBQUQsRUFBUztBQUNoRCxjQUEyQztBQUN6QztBQUNBO0FBRUg7QUFMREQ7QUFNQSxNQUFNRSxTQUFTLEdBQ2JwRCxPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFkLFdBQVhBLGNBQ0lBLE9BQU8sQ0FEWEEsU0FFSWtELE1BQU0sSUFBSUEsTUFBTSxDQUh0QixPQWJNLENBa0JOOztBQUNBRCxZQUFVLENBQUNJLElBQUksR0FBSkEsWUFBbUJELFNBQVMsR0FBRyxNQUFILFlBQXZDSCxFQUFXSSxDQUFELENBQVZKO0FBR0Y7O0FBQUEsZ0NBQTJEO0FBQUEsTUFDbkQsTUFEbUQsR0FDdENLLEtBQUssQ0FBeEIsYUFEeUQsQ0FDbkQsTUFEbUQ7QUFFekQsU0FDR0MsTUFBTSxJQUFJQSxNQUFNLEtBQWpCLE9BQUNBLElBQ0RELEtBQUssQ0FETCxPQUFDQyxJQUVERCxLQUFLLENBRkwsT0FBQ0MsSUFHREQsS0FBSyxDQUhMLFFBQUNDLElBSURELEtBQUssQ0FKTCxNQUFDQyxJQUllO0FBQ2ZELE9BQUssQ0FBTEEsZUFBcUJBLEtBQUssQ0FBTEEsc0JBTnhCO0FBVUY7O0FBQUEsNEVBU1E7QUFBQSxNQUNBLFFBREEsR0FDZUUsQ0FBQyxDQUF0QixhQURNLENBQ0EsUUFEQTs7QUFHTixNQUFJQyxRQUFRLEtBQVJBLFFBQXFCQyxlQUFlLENBQWZBLENBQWUsQ0FBZkEsSUFBc0IsQ0FBQyx3QkFBaEQsSUFBZ0QsQ0FBNUNELENBQUosRUFBbUU7QUFDakU7QUFDQTtBQUdGRDs7QUFBQUEsR0FBQyxDQUFEQSxpQkFSTSxDQVVOOztBQUNBLE1BQUlHLE1BQU0sSUFBVixNQUFvQjtBQUNsQkEsVUFBTSxHQUFHQyxFQUFFLENBQUZBLGVBQVREO0FBR0YsR0FmTSxDQWVOOzs7QUFDQVQsUUFBTSxDQUFDVyxPQUFPLGVBQWRYLE1BQU0sQ0FBTkEsV0FBK0M7QUFDN0NZLFdBRDZDLEVBQzdDQSxPQUQ2QztBQUU3Q0MsVUFGNkMsRUFFN0NBLE1BRjZDO0FBRzdDSixVQUhGVCxFQUdFUztBQUg2QyxHQUEvQ1Q7QUFPRjs7QUFBQSxxQkFBeUQ7QUFBQTs7QUFDdkQsWUFBMkM7QUFBQSxRQUN6QyxlQUR5QyxHQUN6QywrQkFJRztBQUNELGFBQU8sVUFDSixzQ0FBK0JjLElBQUksQ0FBQ0MsR0FBcEMseUJBQXVERCxJQUFJLENBQUNFLFFBQTVELG9DQUFpR0YsSUFBSSxDQUF0RyxNQUFDLG1CQUNFLDRFQUZMLFNBQ0csQ0FESSxDQUFQO0FBUUYsS0FkeUMsRUFjekM7OztBQUNBLFFBQU1HLGtCQUFtRCxHQUFHO0FBQzFEZCxVQUFJLEVBRE47QUFBNEQsS0FBNUQ7QUFHQSxRQUFNZSxhQUFrQyxHQUFHQyxNQUFNLENBQU5BLEtBQTNDLGtCQUEyQ0EsQ0FBM0M7QUFHQSxpQkFBYSxDQUFiLFFBQXVCSixhQUFELEVBQTRCO0FBQ2hELFVBQUlBLEdBQUcsS0FBUCxRQUFvQjtBQUNsQixZQUNFSyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFDQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLGlCQUFrQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBRnJDLFVBR0U7QUFDQSxnQkFBTUMsZUFBZSxDQUFDO0FBQ3BCTixlQURvQixFQUNwQkEsR0FEb0I7QUFFcEJDLG9CQUFRLEVBRlk7QUFHcEJNLGtCQUFNLEVBQUVGLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxxQkFBK0IsT0FBT0EsS0FBSyxDQUhyRCxHQUdxRDtBQUgvQixXQUFELENBQXJCO0FBTUg7QUFYRCxhQVdPO0FBQ0w7QUFDQTtBQUNBLFlBQU1HLENBQVEsR0FBZDtBQUVIO0FBakJELE9BckJ5QyxDQXdDekM7O0FBQ0EsUUFBTUMsa0JBQW1ELEdBQUc7QUFDMURkLFFBQUUsRUFEd0Q7QUFFMURDLGFBQU8sRUFGbUQ7QUFHMURGLFlBQU0sRUFIb0Q7QUFJMURHLGFBQU8sRUFKbUQ7QUFLMURhLGNBQVEsRUFMa0Q7QUFNMURDLGNBQVEsRUFOa0Q7QUFPMURiLFlBQU0sRUFQUjtBQUE0RCxLQUE1RDtBQVNBLFFBQU1jLGFBQWtDLEdBQUdSLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJKLGFBQUQsRUFBNEI7QUFDaEQsVUFBTWEsT0FBTyxHQUFHLE9BQU9SLEtBQUssQ0FBNUIsR0FBNEIsQ0FBNUI7O0FBRUEsVUFBSUwsR0FBRyxLQUFQLE1BQWtCO0FBQ2hCLFlBQUlLLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxJQUFjUSxPQUFPLEtBQXJCUixZQUFzQ1EsT0FBTyxLQUFqRCxVQUFnRTtBQUM5RCxnQkFBTVAsZUFBZSxDQUFDO0FBQ3BCTixlQURvQixFQUNwQkEsR0FEb0I7QUFFcEJDLG9CQUFRLEVBRlk7QUFHcEJNLGtCQUFNLEVBSFI7QUFBc0IsV0FBRCxDQUFyQjtBQU1IO0FBUkQsYUFRTyxJQUFJUCxHQUFHLEtBQVAsVUFBc0I7QUFDM0IsWUFBSUssS0FBSyxDQUFMQSxHQUFLLENBQUxBLElBQWNRLE9BQU8sS0FBekIsVUFBd0M7QUFDdEMsZ0JBQU1QLGVBQWUsQ0FBQztBQUNwQk4sZUFEb0IsRUFDcEJBLEdBRG9CO0FBRXBCQyxvQkFBUSxFQUZZO0FBR3BCTSxrQkFBTSxFQUhSO0FBQXNCLFdBQUQsQ0FBckI7QUFNSDtBQVJNLGFBUUEsSUFDTFAsR0FBRyxLQUFIQSxhQUNBQSxHQUFHLEtBREhBLFlBRUFBLEdBQUcsS0FGSEEsYUFHQUEsR0FBRyxLQUhIQSxjQUlBQSxHQUFHLEtBTEUsWUFNTDtBQUNBLFlBQUlLLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxZQUFzQlEsT0FBTyxLQUFqQyxXQUFpRDtBQUMvQyxnQkFBTVAsZUFBZSxDQUFDO0FBQ3BCTixlQURvQixFQUNwQkEsR0FEb0I7QUFFcEJDLG9CQUFRLEVBRlk7QUFHcEJNLGtCQUFNLEVBSFI7QUFBc0IsV0FBRCxDQUFyQjtBQU1IO0FBZE0sYUFjQTtBQUNMO0FBQ0E7QUFDQSxZQUFNQyxDQUFRLEdBQWQ7QUFFSDtBQXRDRCxPQXJEeUMsQ0E2RnpDO0FBQ0E7O0FBQ0EsUUFBTU0sU0FBUyxHQUFHQyx5QkFBbEIsS0FBa0JBLENBQWxCOztBQUNBLFFBQUlWLEtBQUssQ0FBTEEsWUFBa0IsQ0FBQ1MsU0FBUyxDQUFoQyxTQUEwQztBQUN4Q0EsZUFBUyxDQUFUQTtBQUNBRSxhQUFPLENBQVBBO0FBSUg7QUFDRDs7QUFBQSxNQUFNQyxDQUFDLEdBQUdaLEtBQUssQ0FBTEEsYUFBVjtBQUVBLE1BQU1wQixNQUFNLEdBQUcsYUFBZixTQUFlLEdBQWY7QUFDQSxNQUFNaUMsUUFBUSxHQUFJakMsTUFBTSxJQUFJQSxNQUFNLENBQWpCLFFBQUNBLElBQWxCOztBQTNHdUQsOEJBNkdsQzhCLDBCQUFjLFlBQU07QUFBQSxlQUNKLG1DQUFzQlYsS0FBSyxDQUEzQixNQUFuQyxJQUFtQyxDQURJO0FBQUE7QUFBQSxRQUNqQyxZQURpQztBQUFBLFFBQ2pDLFVBRGlDOztBQUV2QyxXQUFPO0FBQ0xqQixVQUFJLEVBREM7QUFFTE8sUUFBRSxFQUFFVSxLQUFLLENBQUxBLEtBQ0EsbUNBQXNCQSxLQUFLLENBRDNCQSxFQUNBLENBREFBLEdBRUFjLFVBQVUsSUFKaEI7QUFBTyxLQUFQO0FBRm1CSixLQVFsQixXQUFXVixLQUFLLENBQWhCLE1BQXVCQSxLQUFLLENBUi9CLEVBUUcsQ0FSa0JVLENBN0drQztBQUFBLE1BNkdqRCxJQTdHaUQseUJBNkdqRCxJQTdHaUQ7QUFBQSxNQTZHakQsRUE3R2lELHlCQTZHakQsRUE3R2lEOztBQUFBLE1BdUhuRCxRQXZIbUQsR0F1SHZELEtBdkh1RCxDQXVIbkQsUUF2SG1EO0FBQUEsTUF1SG5ELE9BdkhtRCxHQXVIdkQsS0F2SHVELENBdUhuRCxPQXZIbUQ7QUFBQSxNQXVIbkQsT0F2SG1ELEdBdUh2RCxLQXZIdUQsQ0F1SG5ELE9BdkhtRDtBQUFBLE1BdUhuRCxNQXZIbUQsR0F1SHZELEtBdkh1RCxDQXVIbkQsTUF2SG1EO0FBQUEsTUF1SG5ELE1BdkhtRCxHQXVIdkQsS0F2SHVELENBdUhuRCxNQXZIbUQsRUF5SHZEOztBQUNBLE1BQUksb0JBQUosVUFBa0M7QUFDaENqSCxZQUFRLGdCQUFHLDJDQUFYQSxRQUFXLENBQVhBO0FBR0YsR0E5SHVELENBOEh2RDs7O0FBQ0EsTUFBTXNILEtBQVUsR0FBR0MscUJBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxNQUFNQyxRQUFhLEdBQUdGLEtBQUssSUFBSSxpQkFBVEEsWUFBc0NBLEtBQUssQ0FBakU7O0FBaEl1RCxjQWtJZixzQ0FBZ0I7QUFDdERHLGNBQVUsRUFEWjtBQUF3RCxHQUFoQixDQWxJZTtBQUFBO0FBQUEsTUFrSWpELGtCQWxJaUQ7QUFBQSxNQWtJakQsU0FsSWlEOztBQXFJdkQsTUFBTUMsTUFBTSxHQUFHVCw4QkFDWlUsWUFBRCxFQUFpQjtBQUNmQyxzQkFBa0IsQ0FBbEJBLEVBQWtCLENBQWxCQTs7QUFDQSxrQkFBYztBQUNaLFVBQUksb0JBQUosWUFBb0NKLFFBQVEsQ0FBNUMsRUFBNEMsQ0FBUkEsQ0FBcEMsS0FDSyxJQUFJLG9CQUFKLFVBQWtDO0FBQ3JDQSxnQkFBUSxDQUFSQTtBQUVIO0FBQ0Y7QUFUWVAsS0FVYixXQVZGLGtCQVVFLENBVmFBLENBQWY7O0FBWUEsd0JBQVUsWUFBTTtBQUNkLFFBQU1ZLGNBQWMsR0FBR0MsU0FBUyxJQUFUQSxLQUFrQix3QkFBekMsSUFBeUMsQ0FBekM7QUFDQSxRQUFNekMsU0FBUyxHQUNiLHlDQUF5Q0YsTUFBTSxJQUFJQSxNQUFNLENBRDNEO0FBRUEsUUFBTTRDLFlBQVksR0FDaEI3QyxVQUFVLENBQUNJLElBQUksR0FBSkEsWUFBbUJELFNBQVMsR0FBRyxNQUFILFlBRHpDLEVBQ2FDLENBQUQsQ0FEWjs7QUFFQSxRQUFJdUMsY0FBYyxJQUFJLENBQXRCLGNBQXFDO0FBQ25DaEIsY0FBUSxtQkFBbUI7QUFDekJiLGNBQU0sRUFEUmE7QUFBMkIsT0FBbkIsQ0FBUkE7QUFJSDtBQVhELEtBV0csaUNBWEgsTUFXRyxDQVhIO0FBYUEsTUFBTW1CLFVBS0wsR0FBRztBQUNGQyxPQUFHLEVBREQ7QUFFRkMsV0FBTyxFQUFHekMsa0JBQUQsRUFBeUI7QUFDaEMsVUFBSTZCLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsWUFBbkIsWUFBOEQ7QUFDNURBLGFBQUssQ0FBTEE7QUFFRjs7QUFBQSxVQUFJLENBQUM3QixDQUFDLENBQU4sa0JBQXlCO0FBQ3ZCMEMsbUJBQVcsZ0RBQVhBLE1BQVcsQ0FBWEE7QUFFSDtBQWRIO0FBS0ksR0FMSjs7QUFpQkFILFlBQVUsQ0FBVkEsZUFBMkJ2QyxXQUFELEVBQXlCO0FBQ2pELFFBQUksQ0FBQyx3QkFBTCxJQUFLLENBQUwsRUFBdUI7O0FBQ3ZCLFFBQUk2QixLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLGlCQUFuQixZQUFtRTtBQUNqRUEsV0FBSyxDQUFMQTtBQUVGVDs7QUFBQUEsWUFBUSxtQkFBbUI7QUFBRXVCLGNBQVEsRUFBckN2QjtBQUEyQixLQUFuQixDQUFSQTtBQUxGbUIsSUEvS3VELENBdUx2RDtBQUNBOzs7QUFDQSxNQUFJekIsS0FBSyxDQUFMQSxZQUFtQmUsS0FBSyxDQUFMQSxnQkFBc0IsRUFBRSxVQUFVQSxLQUFLLENBQTlELEtBQTZDLENBQTdDLEVBQXdFO0FBQ3RFLFFBQU1qQyxTQUFTLEdBQ2IseUNBQXlDRixNQUFNLElBQUlBLE1BQU0sQ0FEM0QsT0FEc0UsQ0FJdEU7QUFDQTs7QUFDQSxRQUFNa0QsWUFBWSxHQUNoQmxELE1BQU0sSUFDTkEsTUFBTSxDQUROQSxrQkFFQSw0Q0FHRUEsTUFBTSxJQUFJQSxNQUFNLENBSGxCLFNBSUVBLE1BQU0sSUFBSUEsTUFBTSxDQVBwQixhQUdFLENBSEY7QUFVQTZDLGNBQVUsQ0FBVkEsT0FDRUssWUFBWSxJQUNaLHlCQUFZLHNDQUF5QmxELE1BQU0sSUFBSUEsTUFBTSxDQUZ2RDZDLGFBRWMsQ0FBWixDQUZGQTtBQUtGOztBQUFBLHNCQUFPZixzQ0FBUCxVQUFPQSxDQUFQOzs7R0E5TUYsSTs7S0FBQSxJO2VBaU5lcUIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1RmOztBQUNBOztBQWNBLElBQU1DLHVCQUF1QixHQUFHLGdDQUFoQzs7QUFFTywrQkFHcUQ7QUFBQSxNQUhULFVBR1MsUUFIVCxVQUdTO0FBQUEsTUFIckQsUUFHcUQsUUFIckQsUUFHcUQ7QUFDMUQsTUFBTUMsVUFBbUIsR0FBR0MsUUFBUSxJQUFJLENBQXhDO0FBRUEsTUFBTUMsU0FBUyxHQUFHLFdBQWxCLE1BQWtCLEdBQWxCOztBQUgwRCxjQUk1QixxQkFBOUIsS0FBOEIsQ0FKNEI7QUFBQTtBQUFBLE1BSXBELE9BSm9EO0FBQUEsTUFJcEQsVUFKb0Q7O0FBTTFELE1BQU1oQixNQUFNLEdBQUcsd0JBQ1pDLFlBQUQsRUFBa0I7QUFDaEIsUUFBSWUsU0FBUyxDQUFiLFNBQXVCO0FBQ3JCQSxlQUFTLENBQVRBO0FBQ0FBLGVBQVMsQ0FBVEE7QUFHRjs7QUFBQSxRQUFJRixVQUFVLElBQWQsU0FBMkI7O0FBRTNCLFFBQUliLEVBQUUsSUFBSUEsRUFBRSxDQUFaLFNBQXNCO0FBQ3BCZSxlQUFTLENBQVRBLFVBQW9CQyxPQUFPLEtBRXhCYixtQkFBRDtBQUFBLGVBQWVBLFNBQVMsSUFBSWMsVUFBVSxDQUZiLFNBRWEsQ0FBdEM7QUFBQSxPQUZ5QixFQUd6QjtBQUFFbkIsa0JBSEppQixFQUdJakI7QUFBRixPQUh5QixDQUEzQmlCO0FBTUg7QUFoQlksS0FpQmIseUJBakJGLE9BaUJFLENBakJhLENBQWY7QUFvQkEsd0JBQVUsWUFBTTtBQUNkLFFBQUksQ0FBSix5QkFBOEI7QUFDNUIsVUFBSSxDQUFKLFNBQWM7QUFDWixZQUFNRyxZQUFZLEdBQUcsOENBQW9CO0FBQUEsaUJBQU1ELFVBQVUsQ0FBekQsSUFBeUQsQ0FBaEI7QUFBQSxTQUFwQixDQUFyQjtBQUNBLGVBQU87QUFBQSxpQkFBTSw2Q0FBYixZQUFhLENBQU47QUFBQSxTQUFQO0FBRUg7QUFDRjtBQVBELEtBT0csQ0FQSCxPQU9HLENBUEg7QUFTQSxTQUFPLFNBQVAsT0FBTyxDQUFQO0FBR0Y7O0FBQUEsNkNBSWM7QUFBQSx3QkFDdUJFLGNBQWMsQ0FBakQsT0FBaUQsQ0FEckM7QUFBQSxNQUNOLEVBRE0sbUJBQ04sRUFETTtBQUFBLE1BQ04sUUFETSxtQkFDTixRQURNO0FBQUEsTUFDTixRQURNLG1CQUNOLFFBRE07O0FBRVpDLFVBQVEsQ0FBUkE7QUFFQUMsVUFBUSxDQUFSQTtBQUNBLFNBQU8scUJBQTJCO0FBQ2hDRDtBQUNBQyxZQUFRLENBQVJBLG1CQUZnQyxDQUloQzs7QUFDQSxRQUFJRCxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJDLGNBQVEsQ0FBUkE7QUFDQUM7QUFFSDtBQVREO0FBWUY7O0FBQUEsSUFBTUEsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCOztBQUNBLGlDQUF3RTtBQUN0RSxNQUFNQyxFQUFFLEdBQUdqSCxPQUFPLENBQVBBLGNBQVg7QUFDQSxNQUFJa0gsUUFBUSxHQUFHRixTQUFTLENBQVRBLElBQWYsRUFBZUEsQ0FBZjs7QUFDQSxnQkFBYztBQUNaO0FBR0Y7O0FBQUEsTUFBTUYsUUFBUSxHQUFHLElBQWpCLEdBQWlCLEVBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLHlCQUEwQkksaUJBQUQsRUFBYTtBQUNyREEsV0FBTyxDQUFQQSxRQUFpQkMsZUFBRCxFQUFXO0FBQ3pCLFVBQU1DLFFBQVEsR0FBR1AsUUFBUSxDQUFSQSxJQUFhTSxLQUFLLENBQW5DLE1BQWlCTixDQUFqQjtBQUNBLFVBQU1qQixTQUFTLEdBQUd1QixLQUFLLENBQUxBLGtCQUF3QkEsS0FBSyxDQUFMQSxvQkFBMUM7O0FBQ0EsVUFBSUMsUUFBUSxJQUFaLFdBQTJCO0FBQ3pCQSxnQkFBUSxDQUFSQSxTQUFRLENBQVJBO0FBRUg7QUFOREY7QUFEZSxLQUFqQixPQUFpQixDQUFqQjtBQVVBSCxXQUFTLENBQVRBLFFBRUdFLFFBQVEsR0FBRztBQUNWRCxNQURVLEVBQ1ZBLEVBRFU7QUFFVkYsWUFGVSxFQUVWQSxRQUZVO0FBR1ZELFlBTEpFLEVBS0lGO0FBSFUsR0FGZEU7QUFRQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLHNCQUFzQiw2QkFBNkIsS0FBSywrQkFBK0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixLQUFLLHdDQUF3QyxrQkFBa0IsbUJBQW1CLEtBQUssbUNBQW1DLHVCQUF1QixLQUFLLE9BQU8sNkZBQTZGLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLHNDQUFzQyxzQkFBc0IsNkJBQTZCLEtBQUssaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUssc0JBQXNCLGtCQUFrQixtQkFBbUIsS0FBSywwQkFBMEIsa0JBQWtCLG1CQUFtQixLQUFLLHFCQUFxQix1QkFBdUIsS0FBSyxtQkFBbUI7QUFDaGxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHNCQUFzQix3QkFBd0IsZUFBZSxnQkFBZ0IseUNBQXlDLDBEQUEwRCx5REFBeUQsd0NBQXdDLG1CQUFtQiw2Q0FBNkMsK0NBQStDLGdDQUFnQyxnQkFBZ0IsYUFBYSwyRkFBMkYsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxjQUFjLGlDQUFpQyx3QkFBd0IsZUFBZSxnQkFBZ0IseUNBQXlDLDBEQUEwRCx5REFBeUQsd0NBQXdDLG1CQUFtQiw2Q0FBNkMsK0NBQStDLGdDQUFnQyxnQkFBZ0IseUJBQXlCO0FBQ3hwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNkJBQTZCLDJCQUEyQixxQkFBcUIsZ0NBQWdDLDZDQUE2QywrQ0FBK0MsS0FBSyx5Q0FBeUMsc0NBQXNDLEtBQUsseUNBQXlDLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLDhCQUE4QixLQUFLLCtDQUErQyx1QkFBdUIsOEJBQThCLG1EQUFtRCxLQUFLLCtDQUErQyw4QkFBOEIsS0FBSyxpREFBaUQsdUJBQXVCLEtBQUssOENBQThDLGtDQUFrQyxLQUFLLGtDQUFrQywyQkFBMkIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsS0FBSyxPQUFPLGtHQUFrRyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGlDQUFpQywyQkFBMkIscUJBQXFCLGdDQUFnQyw2Q0FBNkMsK0NBQStDLEtBQUssc0JBQXNCLHNDQUFzQyxLQUFLLHNCQUFzQix1QkFBdUIsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsS0FBSyw0QkFBNEIsdUJBQXVCLDhCQUE4QixtREFBbUQsS0FBSyw0QkFBNEIsOEJBQThCLEtBQUssOEJBQThCLHVCQUF1QixLQUFLLDJCQUEyQixrQ0FBa0MsS0FBSyxlQUFlLDJCQUEyQixrQkFBa0IsdUJBQXVCLHlCQUF5QixLQUFLLG1CQUFtQjtBQUN0dkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLG9CQUFvQix3REFBd0QsOEJBQThCLDBCQUEwQixLQUFLLG1EQUFtRCx1QkFBdUIsc0NBQXNDLHFDQUFxQyxxQ0FBcUMsc0NBQXNDLEtBQUssbURBQW1ELHVCQUF1Qiw0Q0FBNEMsMENBQTBDLDJDQUEyQyx3Q0FBd0MseUNBQXlDLEtBQUssc0hBQXNILDJDQUEyQyxLQUFLLDRJQUE0SSxxQkFBcUIsS0FBSyxrRUFBa0UsNENBQTRDLEtBQUssMkVBQTJFLHFCQUFxQixLQUFLLDRDQUE0QyxrQkFBa0Isd0JBQXdCLDJCQUEyQixLQUFLLHdGQUF3Riw4QkFBOEIseUJBQXlCLG9CQUFvQixvQkFBb0IsMkJBQTJCLGlCQUFpQixlQUFlLDJEQUEyRCwyREFBMkQsbUJBQW1CLDBCQUEwQixLQUFLLHdJQUF3SSx3QkFBd0IsS0FBSyxPQUFPLDBHQUEwRyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLDJDQUEyQywyQ0FBMkMsOEJBQThCLDBCQUEwQixLQUFLLHlCQUF5Qix1QkFBdUIsc0NBQXNDLHFDQUFxQyxxQ0FBcUMsc0NBQXNDLEtBQUsseUJBQXlCLHVCQUF1Qiw0Q0FBNEMsMENBQTBDLDJDQUEyQyx3Q0FBd0MseUNBQXlDLEtBQUssd0NBQXdDLDJDQUEyQyxLQUFLLDhEQUE4RCxxQkFBcUIsS0FBSywyQkFBMkIsNENBQTRDLEtBQUssb0NBQW9DLHFCQUFxQixLQUFLLGtCQUFrQixrQkFBa0Isd0JBQXdCLDJCQUEyQixLQUFLLG9DQUFvQyw4QkFBOEIseUJBQXlCLG9CQUFvQixvQkFBb0IsMkJBQTJCLGlCQUFpQixlQUFlLG1EQUFtRCxtQkFBbUIsMEJBQTBCLEtBQUssMERBQTBELHdCQUF3QixLQUFLLG1CQUFtQjtBQUMxM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZCQUE2QiwwQkFBMEIseUJBQXlCLHlCQUF5QixpQ0FBaUMsdUJBQXVCLE9BQU8sbUNBQW1DLHNCQUFzQix1QkFBdUIsdUJBQXVCLCtCQUErQixxQkFBcUIsS0FBSyxpQ0FBaUMsd0JBQXdCLHVCQUF1QixxQkFBcUIsS0FBSyxpQ0FBaUMsd0JBQXdCLHVCQUF1QixLQUFLLG9DQUFvQyw0QkFBNEIsS0FBSyxvQ0FBb0MscUJBQXFCLEtBQUssa0NBQWtDLHVCQUF1QixLQUFLLDRCQUE0Qix1QkFBdUIsaUJBQWlCLGdCQUFnQixLQUFLLGdDQUFnQywwQkFBMEIsS0FBSywyQ0FBMkMsZ0JBQWdCLEtBQUsscUNBQXFDLGdDQUFnQyxLQUFLLDhCQUE4Qiw2QkFBNkIsdUJBQXVCLGFBQWEsS0FBSyxnQ0FBZ0Msb0JBQW9CLEtBQUssa0NBQWtDLGdCQUFnQixLQUFLLDhDQUE4QyxpREFBaUQseUJBQXlCLG1CQUFtQiwwQ0FBMEMsd0JBQXdCLEtBQUssb0RBQW9ELG9EQUFvRCwyQkFBMkIsMENBQTBDLEtBQUssa0RBQWtELCtCQUErQixtQ0FBbUMsS0FBSyw0Q0FBNEMsbUNBQW1DLHlCQUF5QixtQkFBbUIsd0JBQXdCLDBDQUEwQyxLQUFLLE9BQU8sd0ZBQXdGLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLHVDQUF1QywwQkFBMEIseUJBQXlCLHlCQUF5QixpQ0FBaUMsdUJBQXVCLE9BQU8sc0JBQXNCLHNCQUFzQix1QkFBdUIsdUJBQXVCLCtCQUErQixxQkFBcUIsS0FBSyxvQkFBb0Isd0JBQXdCLHVCQUF1QixxQkFBcUIsS0FBSyxvQkFBb0Isd0JBQXdCLHVCQUF1QixLQUFLLHVCQUF1Qiw0QkFBNEIsS0FBSyx1QkFBdUIscUJBQXFCLEtBQUsscUJBQXFCLHVCQUF1QixLQUFLLGVBQWUsdUJBQXVCLGlCQUFpQixnQkFBZ0IsS0FBSyxtQkFBbUIsMEJBQTBCLEtBQUssOEJBQThCLGdCQUFnQixLQUFLLHdCQUF3QixnQ0FBZ0MsS0FBSyxpQkFBaUIsNkJBQTZCLCtCQUErQix1QkFBdUIsYUFBYSxLQUFLLG1CQUFtQixvQkFBb0IsS0FBSyxxQkFBcUIsY0FBYyxLQUFLLGlDQUFpQyxpREFBaUQseUJBQXlCLG1CQUFtQiwwQ0FBMEMsd0JBQXdCLEtBQUssdUNBQXVDLG9EQUFvRCwyQkFBMkIsMENBQTBDLEtBQUsscUNBQXFDLCtCQUErQixtQ0FBbUMsS0FBSywrQkFBK0IsbUNBQW1DLHlCQUF5QixtQkFBbUIsd0JBQXdCLDBDQUEwQyxLQUFLLG1CQUFtQjtBQUNqN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7QUNBdEQsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxrREFBVTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDLDJCQUEyQixtQkFBTyxDQUFDLHlGQUE0QjtBQUMvRCxxQkFBcUIsbUJBQU8sQ0FBQyxxRUFBa0I7O0FBRS9DO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDdEIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLCtCQUErQixpQ0FBaUM7QUFDaEUsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0EsT0FBTztBQUNQLDRGQUE0Rjs7QUFFNUY7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGOztBQUVBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qiw2QkFBNkIsaUNBQWlDO0FBQzlELE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHdCQUF3QjtBQUN4Qiw2QkFBNkIsaUNBQWlDLGlDQUFpQztBQUMvRixnQ0FBZ0MsOEJBQThCLGlCQUFpQjtBQUMvRSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDs7QUFFakQseUNBQXlDOztBQUV6Qyw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0JBQXdCO0FBQ3hCLG1DQUFtQztBQUNuQyxtQ0FBbUMsdUNBQXVDO0FBQzFFLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSxzVEFBd0s7QUFDOUs7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxzVEFBd0s7O0FBRWxNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC4zYmQzMWJmZTFhYzk5ZmZjMDZhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEltcGxlbWVudGF0aW9uOiBGQzx7IG5hbWU6IHN0cmluZyB9PiA9ICh7IG5hbWUsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBtZXRhID0geyB0aXRsZTogbmFtZSwgZGVzY3JpcHRpb246IGBBbiBpbXBsbWVudGF0aW9uIG9mIHRoZSBIU1cncyBCb29taSBBUEkgJHtuYW1lfSBGdW5jdGlvbmFsaXR5YCB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17YEltcGxlbWVudGF0aW9uOiAke25hbWV9IHwgSFNXIEJvb21pIEFQSWB9IG1ldGE9e21ldGF9IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMzZyZW1cIn19PntuYW1lfSBJbXBsZW1lbnRhdGlvbnM8L2gyPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1wbGVtZW50YXRpb247IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9sYXlvdXQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vbGF5b3V0Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9sYXlvdXQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcbmltcG9ydCBNZW51IGZyb20gJ0Bjb21wb25lbnRzL21lbnUnO1xuaW1wb3J0IE1ldGEsIHsgTWV0YU9wdGlvbnMgfSBmcm9tIFwiQGNvbXBvbmVudHMvbWV0YVwiO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdIU1cgQm9vbWkgQVBJJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdIb21lIHwgSFNXIEJvb21pIEFQSSdcblxuY29uc3QgTGF5b3V0OiBGQzx7IHRpdGxlPzogc3RyaW5nLCBtZXRhPzogTWV0YU9wdGlvbnMsIGhvbWU/OiBib29sZWFuLCBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsIGNsYXNzTmFtZT86IHN0cmluZyB9PiA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9IHNpdGVUaXRsZSwgbWV0YSwgaG9tZSwgc3R5bGUgPSB7IG1heFdpZHRoOiBcIjM2cmVtXCIgfSwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XG4gIHJldHVybiAoPD5cbiAgICA8TWVudS8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi53ZWJwXCIgLz5cbiAgICAgICAgeyB0aXRsZSAmJiAoPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+KSB9XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWV0YSBvcHRpb25zPXttZXRhfSAvPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICB7aG9tZSAmJiAoPD5cbiAgICAgICAgICB7LyogPEltYWdlIHNyYz1cIi9pbWFnZXMvbWUud2VicFwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfSBhbHQ9e25hbWV9IHByaW9yaXR5PXt0cnVlfSBxdWFsaXR5PXtcIjEwMCVcIn0gd2lkdGg9ezE0NH0gaGVpZ2h0PXsxNDR9Lz4gKi99XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxuICAgICAgICA8Lz4pfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxuICA8Lz4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9tZW51Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL21lbnUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL21lbnUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlZXNlYnVyZ2VyTWVudSBmcm9tICdjaGVlc2VidXJnZXItbWVudSc7XHJcbmltcG9ydCBIYW1idXJnZXJNZW51IGZyb20gJ3JlYWN0LWhhbWJ1cmdlci1tZW51JztcclxuaW1wb3J0IE1lbnVDb250ZW50IGZyb20gJy4vbWVudUNvbnRlbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWVudS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IE1lbnU6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb3BlbiA9ICgpID0+IHsgc2V0SXNPcGVuKHRydWUpOyB9O1xyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4geyBzZXRJc09wZW4oZmFsc2UpOyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENoZWVzZWJ1cmdlck1lbnUgaXNPcGVuPXtpc09wZW59IGNsb3NlQ2FsbGJhY2s9e2Nsb3NlfT5cclxuICAgICAgICA8TWVudUNvbnRlbnQgY2xvc2VDYWxsYmFjaz17Y2xvc2V9Lz5cclxuICAgICAgPC9DaGVlc2VidXJnZXJNZW51PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fSBvbkNsaWNrPXtvcGVufT5cclxuICAgICAgICA8SGFtYnVyZ2VyTWVudSBpc09wZW49e2lzT3Blbn0gbWVudUNsaWNrZWQ9e29wZW59IHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gc3Ryb2tlV2lkdGg9ezJ9IHJvdGF0ZT17MH0gY29sb3I9J3doaXRlc21va2UnIGJvcmRlclJhZGl1cz17MH0gYW5pbWF0aW9uRHVyYXRpb249ezAuNX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vbWVudUNvbnRlbnQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vbWVudUNvbnRlbnQubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL21lbnVDb250ZW50Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51Q29udGVudC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25fbGlua3MgPSBbXHJcbiAgeyBuYW1lOiAnSG9tZScsIHBhdGg6IFwiL1wiIH0sXHJcbiAgeyBuYW1lOiAnRG9jdW1lbnRhdGlvbicsIHBhdGg6IFwiL2RvY3VtZW50YXRpb25cIiB9LFxyXG4gIHsgbmFtZTogJ0ltcGxlbWVudGF0aW9ucycsIHBhdGg6IFwiL2ltcGxlbWVudGF0aW9uc1wiIH0sXHJcbiAgLy8geyBuYW1lOiAnVGVzdCcsIHBhdGg6IFwiL3Rlc3RcIiB9LFxyXG5dO1xyXG5jb25zdCBNZW51Q29udGVudDogRkM8eyBjbG9zZUNhbGxiYWNrOiAoKSA9PiB2b2lkLCBsaW5rcz86IHsgbmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcgfVtdIH0+ID0gKHsgY2xvc2VDYWxsYmFjaywgbGlua3MgPSBuYXZpZ2F0aW9uX2xpbmtzIH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgIHtsaW5rcy5tYXAobGluayA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtZW51LWl0ZW0nXX0ga2V5PXtsaW5rLm5hbWV9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZUNhbGxiYWNrfT5cclxuICAgICAgICAgICAge2xpbmsubmFtZX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpbnR9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBNZW51Q29udGVudC5Qcm9wVHlwZXMgPSB7XHJcbi8vICAgY2xvc2VDYWxsYmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29udGVudDsiLCJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhT3B0aW9ucyB7XHJcbiAgICB0aXRsZT86IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gICAgaW1hZ2U/OiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IE1ldGE6IEZDPHsgb3B0aW9ucz86IE1ldGFPcHRpb25zIH0+ID0gKHsgb3B0aW9ucyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICB7IG9wdGlvbnM/LnRpdGxlICYmICg8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXsgb3B0aW9ucy50aXRsZSB9IC8+KSB9XHJcbiAgICAgICAgICAgIHsgb3B0aW9ucz8uZGVzY3JpcHRpb24gJiYgKDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9eyBvcHRpb25zLmRlc2NyaXB0aW9uIH0gLz4pIH1cclxuICAgICAgICAgICAgeyBvcHRpb25zPy5pbWFnZSAmJiAoPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9eyBvcHRpb25zLmltYWdlIH0gLz4pIH1cclxuICAgICAgICAgICAgeyBvcHRpb25zICYmICg8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPikgfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZXRhOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vVGFibGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vVGFibGUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1RhYmxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVNvcnRCeSwgdXNlQmxvY2tMYXlvdXQsIHVzZVJlc2l6ZUNvbHVtbnMsIENvbHVtbiB9IGZyb20gJ3JlYWN0LXRhYmxlJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFRhYmxlOiBGQzx7IGNvbHVtbnM6IENvbHVtbjxhbnk+W10sIGRhdGE6IGFueVtdLCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID4gPSAoeyBjb2x1bW5zLCBkYXRhLCBzdHlsZSA9IHt9IH0pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgIGhlYWRlckdyb3VwcyxcclxuICAgICAgcm93cyxcclxuICAgICAgcHJlcGFyZVJvdyxcclxuICAgIH0gPSB1c2VUYWJsZShcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSxcclxuICAgICAgdXNlQmxvY2tMYXlvdXQsXHJcbiAgICAgIHVzZVNvcnRCeSxcclxuICAgICAgdXNlUmVzaXplQ29sdW1uc1xyXG4gICAgKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9e3N0eWxlcy50aGVhZH0+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudHJ9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgc29ydGluZyBwcm9wcyB0byBjb250cm9sIHNvcnRpbmcuIEZvciB0aGlzIGV4YW1wbGVcclxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBhZGQgdGhlbSBpbnRvIHRoZSBoZWFkZXIgcHJvcHNcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldFJlc2l6ZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVzaXplcn0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzUmVzaXppbmcgPyBzdHlsZXMuaXNSZXNpemluZyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfSBjbGFzc05hbWU9e3N0eWxlcy50Ym9keX0+XHJcbiAgICAgICAgICB7cm93cy5tYXAoXHJcbiAgICAgICAgICAgIChyb3cpID0+IHtcclxuICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50cn0+XHJcbiAgICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50ZH0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvYWQ8UmVzcG9uc2VUeXBlID0gc3RyaW5nLCBFcnJvclR5cGUgPSBzdHJpbmcgfCBFcnJvcj4oKTogeyByZXNwb25zZTogUmVzcG9uc2VUeXBlIHwgdW5kZWZpbmVkLCBlcnJvcjogRXJyb3JUeXBlIHwgdW5kZWZpbmVkLCBpc0xvYWRpbmc6IGJvb2xlYW4sIGxvYWQ6IChmbjogKCkgPT4gUHJvbWlzZTxSZXNwb25zZVR5cGU+KSA9PiB2b2lkIH0ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8UmVzcG9uc2VUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3JUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkKGZuOiAoKSA9PiBQcm9taXNlPFJlc3BvbnNlVHlwZT4pIHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgZm4oKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFJlc3BvbnNlKHBheWxvYWQpO1xyXG4gICAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgc2V0UmVzcG9uc2UodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgcmVzcG9uc2UsIGVycm9yLCBpc0xvYWRpbmc6IGxvYWRpbmcsIGxvYWQgfTtcclxufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JykgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWVhc3ktc3dpcGVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjaGVlc2VidXJnZXItbWVudVwiLCBbXCJwcm9wLXR5cGVzXCIsIFwiUmVhY3RcIiwgXCJyZWFjdC1lYXN5LXN3aXBlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNoZWVzZWJ1cmdlci1tZW51XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZWFzeS1zd2lwZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY2hlZXNlYnVyZ2VyLW1lbnVcIl0gPSBmYWN0b3J5KHJvb3RbXCJwcm9wLXR5cGVzXCJdLCByb290W1wiUmVhY3RcIl0sIHJvb3RbXCJyZWFjdC1lYXN5LXN3aXBlXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fM19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX187XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXztcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAoIHRydWUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0cnVlKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdCEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KS5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuXHR9IGVsc2Uge31cbn0oKSk7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fM19fO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcIlJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifVxudmFyIGV4dGVybmFsX2NvbW1vbmpzX3JlYWN0X2NvbW1vbmpzMl9yZWFjdF9hbWRfUmVhY3Rfcm9vdF9SZWFjdF8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGV4dGVybmFsX2NvbW1vbmpzX3JlYWN0X2NvbW1vbmpzMl9yZWFjdF9hbWRfUmVhY3Rfcm9vdF9SZWFjdF9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihleHRlcm5hbF9jb21tb25qc19yZWFjdF9jb21tb25qczJfcmVhY3RfYW1kX1JlYWN0X3Jvb3RfUmVhY3RfKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxudmFyIGV4dGVybmFsX3Byb3BfdHlwZXNfID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBleHRlcm5hbF9wcm9wX3R5cGVzX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGV4dGVybmFsX3Byb3BfdHlwZXNfKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCBcInJlYWN0LWVhc3ktc3dpcGVcIlxudmFyIGV4dGVybmFsX3JlYWN0X2Vhc3lfc3dpcGVfID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBleHRlcm5hbF9yZWFjdF9lYXN5X3N3aXBlX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGV4dGVybmFsX3JlYWN0X2Vhc3lfc3dpcGVfKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG52YXIgY2xhc3NuYW1lcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgY2xhc3NuYW1lc19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjbGFzc25hbWVzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc3R5bGVzLmpzXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBvdmVybGF5U3R5bGUgPSBmdW5jdGlvbiBvdmVybGF5U3R5bGUob3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogb3B0aW9ucy50b3BPZmZzZXQsXG4gICAgYm90dG9tOiBvcHRpb25zLmJvdHRvbU9mZnNldCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSBcIi5jb25jYXQob3B0aW9ucy50cmFuc2l0aW9uVGltZSwgXCJzLCB0cmFuc2Zvcm0gMHMgXCIpLmNvbmNhdChvcHRpb25zLnRyYW5zaXRpb25UaW1lLCBcInNcIiksXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKFwiLmNvbmNhdChvcHRpb25zLmlzTGVmdCA/ICcnIDogJy0nLCBcIjEwMCUsIDBweCwgMHB4KVwiKVxuICB9O1xufTtcbnZhciBvdmVybGF5QWN0aXZlU3R5bGUgPSBmdW5jdGlvbiBvdmVybGF5QWN0aXZlU3R5bGUob3B0aW9ucykge1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgb3ZlcmxheVN0eWxlKG9wdGlvbnMpLCB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgXCIuY29uY2F0KG9wdGlvbnMudHJhbnNpdGlvblRpbWUsIFwic1wiKSxcbiAgICB0cmFuc2Zvcm06ICdub25lJ1xuICB9KTtcbn07XG52YXIgbWVudU91dGVyU3R5bGUgPSBmdW5jdGlvbiBtZW51T3V0ZXJTdHlsZShvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbGVmdDogb3B0aW9ucy5pc0xlZnQgPyAwIDogJ2luaGVyaXQnLFxuICAgIHJpZ2h0OiBvcHRpb25zLmlzTGVmdCA/ICdpbmhlcml0JyA6IDAsXG4gICAgdG9wOiBvcHRpb25zLnRvcE9mZnNldCxcbiAgICBib3R0b206IG9wdGlvbnMuYm90dG9tT2Zmc2V0LFxuICAgIHpJbmRleDogMTAwMixcbiAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcbiAgICBtYXhXaWR0aDogJzgwJScsXG4gICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KG9wdGlvbnMudHJhbnNpdGlvblRpbWUsIFwic1wiKSxcbiAgICB0cmFuc2Zvcm06IGdldFNrZXcob3B0aW9ucykgKyBcInRyYW5zbGF0ZTNkKFwiLmNvbmNhdChvcHRpb25zLmlzTGVmdCA/ICctJyA6ICcnLCBcIjEwMCUsIDBweCwgMHB4KVwiKSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG4gIH07XG59O1xudmFyIG1lbnVPdXRlckFjdGl2ZVN0eWxlID0gZnVuY3Rpb24gbWVudU91dGVyQWN0aXZlU3R5bGUob3B0aW9ucykge1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgbWVudU91dGVyU3R5bGUob3B0aW9ucyksIHtcbiAgICB0cmFuc2Zvcm06IGdldFNrZXcob3B0aW9ucykgKyAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknXG4gIH0pO1xufTtcbnZhciBtZW51U2hhZG93U3R5bGUgPSBmdW5jdGlvbiBtZW51U2hhZG93U3R5bGUob3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHpJbmRleDogLTEsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgXCIuY29uY2F0KG9wdGlvbnMudHJhbnNpdGlvblRpbWUsIFwic1wiKSxcbiAgICBib3hTaGFkb3c6IG9wdGlvbnMuc2hvd1NoYWRvdyA/ICcwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgLjIpJyA6ICdub25lJyxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMFxuICB9O1xufTtcbnZhciBtZW51U2hhZG93QWN0aXZlU3R5bGUgPSBmdW5jdGlvbiBtZW51U2hhZG93QWN0aXZlU3R5bGUob3B0aW9ucykge1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgbWVudVNoYWRvd1N0eWxlKG9wdGlvbnMpLCB7XG4gICAgb3BhY2l0eTogMVxuICB9KTtcbn07XG52YXIgbWVudUlubmVyU3R5bGUgPSBmdW5jdGlvbiBtZW51SW5uZXJTdHlsZShvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZ0JvdHRvbTogb3B0aW9ucy50b3BPZmZzZXQsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bydcbiAgfTtcbn07XG5mdW5jdGlvbiBnZXRTa2V3KG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2tld1kgPyBcInNrZXdZKFwiLmNvbmNhdChvcHRpb25zLnNrZXdZLCBcImRlZykgXCIpIDogJyc7XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9pbmRleC5qc1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gc3JjX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBzcmNfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBzcmNfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuXG5cblxuXG5cbnZhciBJRExFID0gJ2lkbGUnO1xudmFyIFZFUlRJQ0FMID0gJ3ZlcnRpY2FsJztcbnZhciBIT1JJWk9OVEFMID0gJ2hvcml6b250YWwnO1xuXG52YXIgc3JjX0NoZWVzZWJ1cmdlck1lbnUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENoZWVzZWJ1cmdlck1lbnUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENoZWVzZWJ1cmdlck1lbnUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoZWVzZWJ1cmdlck1lbnUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ2hlZXNlYnVyZ2VyTWVudSkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgIGRpcmVjdGlvbjogSURMRSxcbiAgICAgIHN3aXBlUG9zaXRpb246IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIG1lbnVFeHRyYVN0eWxlOiB7fVxuICAgIH07XG4gICAgX3RoaXMub25Td2lwZVN0YXJ0ID0gX3RoaXMub25Td2lwZVN0YXJ0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIF90aGlzLm9uU3dpcGVNb3ZlID0gX3RoaXMub25Td2lwZU1vdmUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgX3RoaXMub25Td2lwZUVuZCA9IF90aGlzLm9uU3dpcGVFbmQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENoZWVzZWJ1cmdlck1lbnUsIFt7XG4gICAga2V5OiBcIm9uU3dpcGVTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN3aXBlU3RhcnQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzd2lwaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblN3aXBlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN3aXBlTW92ZShwb3NpdGlvbiwgZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnN3aXBpbmcpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IElETEUpIHtcbiAgICAgICAgICB2YXIgc3dpcGVUaHJlc2hvbGQgPSBvcHRpb25zLndpZHRoIC8gMTU7XG4gICAgICAgICAgdmFyIHBhc3RUaHJlc2hvbGQgPSBNYXRoLmFicyhwb3NpdGlvbi54KSA+IHN3aXBlVGhyZXNob2xkIHx8IE1hdGguYWJzKHBvc2l0aW9uLnkpID4gc3dpcGVUaHJlc2hvbGQ7XG5cbiAgICAgICAgICBpZiAocGFzdFRocmVzaG9sZCkge1xuICAgICAgICAgICAgaWYgKCghdGhpcy5wcm9wcy5yaWdodCAmJiBwb3NpdGlvbi54IDwgMCB8fCB0aGlzLnByb3BzLnJpZ2h0ICYmIHBvc2l0aW9uLnggPiAwKSAmJiBNYXRoLmFicyhwb3NpdGlvbi54KSA+IE1hdGguYWJzKHBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEhPUklaT05UQUw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBWRVJUSUNBTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMKSB7XG4gICAgICAgICAgdmFyIHN3aXBlQ2xvc2luZyA9ICF0aGlzLnByb3BzLnJpZ2h0ICYmIHBvc2l0aW9uLnggPCAwIHx8IHRoaXMucHJvcHMucmlnaHQgJiYgcG9zaXRpb24ueCA+IDA7XG4gICAgICAgICAgdmFyIHRyYW5zbGF0ZVggPSBzd2lwZUNsb3NpbmcgPyBwb3NpdGlvbi54IDogMDtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICAgICAgc3dpcGVQb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICBtZW51RXh0cmFTdHlsZToge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGdldFNrZXcob3B0aW9ucykgKyBcInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCh0cmFuc2xhdGVYLCBcInB4LCAwcHgsIDBweClcIiksXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMHMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFZFUlRJQ0FMKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICAgIHN3aXBlUG9zaXRpb246IHtcbiAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lbnVFeHRyYVN0eWxlOiB7fVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uU3dpcGVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Td2lwZUVuZChldmVudCkge1xuICAgICAgdmFyIHN3aXBlQ2xvc2VUaHJlc2hvbGQgPSB0aGlzLmdldE9wdGlvbnMoKS53aWR0aCAvIDM7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5yaWdodCAmJiB0aGlzLnN0YXRlLnN3aXBlUG9zaXRpb24ueCA8IC1zd2lwZUNsb3NlVGhyZXNob2xkIHx8IHRoaXMucHJvcHMucmlnaHQgJiYgdGhpcy5zdGF0ZS5zd2lwZVBvc2l0aW9uLnggPiBzd2lwZUNsb3NlVGhyZXNob2xkKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VDYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgIGRpcmVjdGlvbjogSURMRSxcbiAgICAgICAgc3dpcGVQb3NpdGlvbjoge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICBtZW51RXh0cmFTdHlsZToge31cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0xlZnQ6ICF0aGlzLnByb3BzLnJpZ2h0LFxuICAgICAgICB0cmFuc2l0aW9uVGltZTogdGhpcy5wcm9wcy50cmFuc2l0aW9uVGltZSB8fCAwLjMsXG4gICAgICAgIHRvcE9mZnNldDogdGhpcy5wcm9wcy50b3BPZmZzZXQgfHwgMCxcbiAgICAgICAgYm90dG9tT2Zmc2V0OiB0aGlzLnByb3BzLmJvdHRvbU9mZnNldCB8fCAwLFxuICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB8fCAzMDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IgfHwgJ3doaXRlJyxcbiAgICAgICAgc2hvd1NoYWRvdzogIXRoaXMucHJvcHMubm9TaGFkb3csXG4gICAgICAgIHNrZXdZOiB0aGlzLnByb3BzLnNrZXdZXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wcy5pc09wZW4sXG4gICAgICAgICAgY2xvc2VDYWxsYmFjayA9IF90aGlzJHByb3BzLmNsb3NlQ2FsbGJhY2ssXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICAgIG91dGVyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMub3V0ZXJDbGFzc05hbWUsXG4gICAgICAgICAgaW5uZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5pbm5lckNsYXNzTmFtZSxcbiAgICAgICAgICBzaGFkb3dDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5zaGFkb3dDbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICB2YXIgYmFzZU1lbnVPdXRlclN0eWxlID0gaXNPcGVuID8gbWVudU91dGVyQWN0aXZlU3R5bGUob3B0aW9ucykgOiBtZW51T3V0ZXJTdHlsZShvcHRpb25zKTtcblxuICAgICAgdmFyIGN1cnJlbnRNZW51T3V0ZXJTdHlsZSA9IHNyY19vYmplY3RTcHJlYWQoe30sIGJhc2VNZW51T3V0ZXJTdHlsZSwgdGhpcy5zdGF0ZS5tZW51RXh0cmFTdHlsZSk7XG5cbiAgICAgIHJldHVybiBleHRlcm5hbF9jb21tb25qc19yZWFjdF9jb21tb25qczJfcmVhY3RfYW1kX1JlYWN0X3Jvb3RfUmVhY3RfZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXNfZGVmYXVsdCgpKCdjaGVlc2VidXJnZXItbWVudScsIGNsYXNzTmFtZSwge1xuICAgICAgICAgIG9wZW46IGlzT3BlblxuICAgICAgICB9KVxuICAgICAgfSwgZXh0ZXJuYWxfY29tbW9uanNfcmVhY3RfY29tbW9uanMyX3JlYWN0X2FtZF9SZWFjdF9yb290X1JlYWN0X2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc25hbWVzX2RlZmF1bHQoKSgnY2hlZXNlYnVyZ2VyLW1lbnUtb3ZlcmxheScsIG92ZXJsYXlDbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogaXNPcGVuID8gb3ZlcmxheUFjdGl2ZVN0eWxlKG9wdGlvbnMpIDogb3ZlcmxheVN0eWxlKG9wdGlvbnMpLFxuICAgICAgICBvbkNsaWNrOiBjbG9zZUNhbGxiYWNrXG4gICAgICB9KSwgZXh0ZXJuYWxfY29tbW9uanNfcmVhY3RfY29tbW9uanMyX3JlYWN0X2FtZF9SZWFjdF9yb290X1JlYWN0X2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KGV4dGVybmFsX3JlYWN0X2Vhc3lfc3dpcGVfZGVmYXVsdC5hLCB7XG4gICAgICAgIG9uU3dpcGVTdGFydDogdGhpcy5vblN3aXBlU3RhcnQsXG4gICAgICAgIG9uU3dpcGVNb3ZlOiB0aGlzLm9uU3dpcGVNb3ZlLFxuICAgICAgICBvblN3aXBlRW5kOiB0aGlzLm9uU3dpcGVFbmRcbiAgICAgIH0sIGV4dGVybmFsX2NvbW1vbmpzX3JlYWN0X2NvbW1vbmpzMl9yZWFjdF9hbWRfUmVhY3Rfcm9vdF9SZWFjdF9kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lc19kZWZhdWx0KCkoJ2NoZWVzZWJ1cmdlci1tZW51LW91dGVyJywgb3V0ZXJDbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogY3VycmVudE1lbnVPdXRlclN0eWxlXG4gICAgICB9LCBleHRlcm5hbF9jb21tb25qc19yZWFjdF9jb21tb25qczJfcmVhY3RfYW1kX1JlYWN0X3Jvb3RfUmVhY3RfZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXNfZGVmYXVsdCgpKCdjaGVlc2VidXJnZXItbWVudS1pbm5lcicsIGlubmVyQ2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IG1lbnVJbm5lclN0eWxlKG9wdGlvbnMpXG4gICAgICB9LCBjaGlsZHJlbiksIGV4dGVybmFsX2NvbW1vbmpzX3JlYWN0X2NvbW1vbmpzMl9yZWFjdF9hbWRfUmVhY3Rfcm9vdF9SZWFjdF9kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lc19kZWZhdWx0KCkoJ2NoZWVzZWJ1cmdlci1tZW51LXNoYWRvdycsIHNoYWRvd0NsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiBpc09wZW4gPyBtZW51U2hhZG93QWN0aXZlU3R5bGUob3B0aW9ucykgOiBtZW51U2hhZG93U3R5bGUob3B0aW9ucylcbiAgICAgIH0pKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGVlc2VidXJnZXJNZW51O1xufShleHRlcm5hbF9jb21tb25qc19yZWFjdF9jb21tb25qczJfcmVhY3RfYW1kX1JlYWN0X3Jvb3RfUmVhY3RfW1wiQ29tcG9uZW50XCJdKTtcblxuc3JjX0NoZWVzZWJ1cmdlck1lbnUucHJvcFR5cGVzID0ge1xuICBpc09wZW46IGV4dGVybmFsX3Byb3BfdHlwZXNfZGVmYXVsdC5hLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2xvc2VDYWxsYmFjazogZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEuZnVuYy5pc1JlcXVpcmVkLFxuICByaWdodDogZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEuYm9vbCxcbiAgdHJhbnNpdGlvblRpbWU6IGV4dGVybmFsX3Byb3BfdHlwZXNfZGVmYXVsdC5hLm51bWJlcixcbiAgdG9wT2Zmc2V0OiBleHRlcm5hbF9wcm9wX3R5cGVzX2RlZmF1bHQuYS5vbmVPZlR5cGUoW2V4dGVybmFsX3Byb3BfdHlwZXNfZGVmYXVsdC5hLm51bWJlciwgZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEuc3RyaW5nXSksXG4gIGJvdHRvbU9mZnNldDogZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEub25lT2ZUeXBlKFtleHRlcm5hbF9wcm9wX3R5cGVzX2RlZmF1bHQuYS5udW1iZXIsIGV4dGVybmFsX3Byb3BfdHlwZXNfZGVmYXVsdC5hLnN0cmluZ10pLFxuICB3aWR0aDogZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEubnVtYmVyLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGV4dGVybmFsX3Byb3BfdHlwZXNfZGVmYXVsdC5hLnN0cmluZyxcbiAgc2tld1k6IGV4dGVybmFsX3Byb3BfdHlwZXNfZGVmYXVsdC5hLm51bWJlcixcbiAgbm9TaGFkb3c6IGV4dGVybmFsX3Byb3BfdHlwZXNfZGVmYXVsdC5hLmJvb2wsXG4gIGNsYXNzTmFtZTogZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEuc3RyaW5nLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBleHRlcm5hbF9wcm9wX3R5cGVzX2RlZmF1bHQuYS5zdHJpbmcsXG4gIG91dGVyQ2xhc3NOYW1lOiBleHRlcm5hbF9wcm9wX3R5cGVzX2RlZmF1bHQuYS5zdHJpbmcsXG4gIGlubmVyQ2xhc3NOYW1lOiBleHRlcm5hbF9wcm9wX3R5cGVzX2RlZmF1bHQuYS5zdHJpbmcsXG4gIHNoYWRvd0NsYXNzTmFtZTogZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEuc3RyaW5nLFxuICBjaGlsZHJlbjogZXh0ZXJuYWxfcHJvcF90eXBlc19kZWZhdWx0LmEubm9kZVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNyYyA9IF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHNyY19DaGVlc2VidXJnZXJNZW51KTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJjb25zdCBDaGVlc2VidXJnZXJNZW51ID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlZXNlYnVyZ2VyTWVudTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sYXlvdXRfY29udGFpbmVyX18ydDR2MiB7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0byA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0X2hlYWRlcl9fMnJoV3Ege1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0X2hlYWRlckltYWdlX18yaDVPbiB7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxheW91dF9oZWFkZXJIb21lSW1hZ2VfXzNxbzFfIHtcXHJcXG4gIHdpZHRoOiA4cmVtO1xcclxcbiAgaGVpZ2h0OiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0X2JhY2tUb0hvbWVfXzF2WnNwIHtcXHJcXG4gIG1hcmdpbjogM3JlbSAwIDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0byA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlckltYWdlIHtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVySG9tZUltYWdlIHtcXHJcXG4gIHdpZHRoOiA4cmVtO1xcclxcbiAgaGVpZ2h0OiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja1RvSG9tZSB7XFxyXFxuICBtYXJnaW46IDNyZW0gMCAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJsYXlvdXRfY29udGFpbmVyX18ydDR2MlwiLFxuXHRcImhlYWRlclwiOiBcImxheW91dF9oZWFkZXJfXzJyaFdxXCIsXG5cdFwiaGVhZGVySW1hZ2VcIjogXCJsYXlvdXRfaGVhZGVySW1hZ2VfXzJoNU9uXCIsXG5cdFwiaGVhZGVySG9tZUltYWdlXCI6IFwibGF5b3V0X2hlYWRlckhvbWVJbWFnZV9fM3FvMV9cIixcblx0XCJiYWNrVG9Ib21lXCI6IFwibGF5b3V0X2JhY2tUb0hvbWVfXzF2WnNwXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1lbnVfbWVudV9fMnA4TUYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtIDFlbSAwLjVlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC44KTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjgpO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMmVtO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDc5LCA3OSk7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDUlLCAyMCUpO1xcclxcblxcclxcbiAgICAvKiB0cmFuc2l0aW9uOiAwLjNzOyAqL1xcclxcbiAgICBcXHJcXG59XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9tZW51Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87O0lBRVAsNEJBQTRCO0lBQzVCLGlEQUFpRDtJQUNqRCxnREFBZ0Q7SUFDaEQsK0JBQStCO0lBQy9CLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsbUNBQW1DOztJQUVuQyxzQkFBc0I7O0FBRTFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxZW0gMC41ZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuOCk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC44KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJlbTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA3OSwgNzkpOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA1JSwgMjAlKTtcXHJcXG5cXHJcXG4gICAgLyogdHJhbnNpdGlvbjogMC4zczsgKi9cXHJcXG4gICAgXFxyXFxufVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWVudVwiOiBcIm1lbnVfbWVudV9fMnA4TUZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWVudUNvbnRlbnRfbWVudV9fTDhibnkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgNjUsIDY1KTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNSUsIDE1JSk7XFxyXFxufVxcclxcbiAgXFxyXFxuLm1lbnVDb250ZW50X21lbnUtaXRlbV9fMXplLU0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVDb250ZW50X21lbnUtaXRlbV9fMXplLU0gYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbSAxNXB4O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUNvbnRlbnRfbWVudS1pdGVtX18xemUtTSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUNvbnRlbnRfbWVudS1pdGVtX18xemUtTSBhOmZvY3VzIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUNvbnRlbnRfbWVudS1pdGVtX18xemUtTSBhOnZpc2l0ZWQge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVDb250ZW50X2FjdGl2ZS1tZW51LWl0ZW1fXzN6a0V3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThmOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVDb250ZW50X2hpbnRfX1dadHpSIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBmb250LXNpemU6IDAuN2VtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9tZW51Q29udGVudC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCA2NSwgNjUpOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA1JSwgMTUlKTtcXHJcXG59XFxyXFxuICBcXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAuN3JlbSAxNXB4O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gYTpmb2N1cyB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSBhOnZpc2l0ZWQge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1tZW51LWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGY5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGludCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWVudVwiOiBcIm1lbnVDb250ZW50X21lbnVfX0w4Ym55XCIsXG5cdFwibWVudS1pdGVtXCI6IFwibWVudUNvbnRlbnRfbWVudS1pdGVtX18xemUtTVwiLFxuXHRcImFjdGl2ZS1tZW51LWl0ZW1cIjogXCJtZW51Q29udGVudF9hY3RpdmUtbWVudS1pdGVtX18zemtFd1wiLFxuXHRcImhpbnRcIjogXCJtZW51Q29udGVudF9oaW50X19XWnR6UlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHBhZGRpbmc6IDFyZW07ICovXFxyXFxuXFxyXFxuLyogVGFibGUgUm91bmRpbmcgKi9cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdGhlYWRfXzJkZXV2ICAge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogaHNsKDI0MCwgNSUsIDE1JSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90Ym9keV9fM0xTaV8gICB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdHJfXzJETDljIC5UYWJsZV90ZF9fMW9DbDcsIC5UYWJsZV90YWJsZV9fMUVDNmIgLlRhYmxlX3RyX18yREw5YyAuVGFibGVfdGhfXzZ3OXRFIHtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdHJfXzJETDljIC5UYWJsZV90ZF9fMW9DbDc6bGFzdC1vZi10eXBlLCAuVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90cl9fMkRMOWMgLlRhYmxlX3RoX182dzl0RTpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90YWJsZV9fMUVDNmIgLlRhYmxlX3Rib2R5X18zTFNpXyAuVGFibGVfdHJfXzJETDljIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxufVxcclxcbi5UYWJsZV90YWJsZV9fMUVDNmIgLlRhYmxlX3Rib2R5X18zTFNpXyAuVGFibGVfdHJfXzJETDljOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RoX182dzl0RSwgLlRhYmxlX3RkX18xb0NsNyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90aF9fNnc5dEUgLlRhYmxlX3Jlc2l6ZXJfXzJBcXNOLCAuVGFibGVfdGRfXzFvQ2w3IC5UYWJsZV9yZXNpemVyX18yQXFzTiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgxMCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoMTAlKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOm5vbmU7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90aF9fNnc5dEUgLlRhYmxlX3Jlc2l6ZXJfXzJBcXNOLlRhYmxlX2lzUmVzaXppbmdfX1dfekk1LCAuVGFibGVfdGRfXzFvQ2w3IC5UYWJsZV9yZXNpemVyX18yQXFzTi5UYWJsZV9pc1Jlc2l6aW5nX19XX3pJNSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvdG9vbHMvVGFibGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7O0FBRW5CLG1CQUFtQjtBQUNuQjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixrREFBMEM7WUFBMUMsMENBQTBDO0lBQzFDLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHBhZGRpbmc6IDFyZW07ICovXFxyXFxuXFxyXFxuLyogVGFibGUgUm91bmRpbmcgKi9cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLnRoZWFkICAge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogaHNsKDI0MCwgNSUsIDE1JSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLnRib2R5ICAge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSAudHIgLnRkLCAudGFibGUgLnRyIC50aCB7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxufVxcclxcbi50YWJsZSAudHIgLnRkOmxhc3Qtb2YtdHlwZSwgLnRhYmxlIC50ciAudGg6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLnRib2R5IC50ciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udGFibGUgLnRib2R5IC50cjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aCwgLnRkIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoIC5yZXNpemVyLCAudGQgLnJlc2l6ZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDEwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvdWNoLWFjdGlvbjpub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGggLnJlc2l6ZXIuaXNSZXNpemluZywgLnRkIC5yZXNpemVyLmlzUmVzaXppbmcge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRhYmxlXCI6IFwiVGFibGVfdGFibGVfXzFFQzZiXCIsXG5cdFwidGhlYWRcIjogXCJUYWJsZV90aGVhZF9fMmRldXZcIixcblx0XCJ0Ym9keVwiOiBcIlRhYmxlX3Rib2R5X18zTFNpX1wiLFxuXHRcInRyXCI6IFwiVGFibGVfdHJfXzJETDljXCIsXG5cdFwidGRcIjogXCJUYWJsZV90ZF9fMW9DbDdcIixcblx0XCJ0aFwiOiBcIlRhYmxlX3RoX182dzl0RVwiLFxuXHRcInJlc2l6ZXJcIjogXCJUYWJsZV9yZXNpemVyX18yQXFzTlwiLFxuXHRcImlzUmVzaXppbmdcIjogXCJUYWJsZV9pc1Jlc2l6aW5nX19XX3pJNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi51dGlsc19oZWFkaW5nMlhsX18xSTY1bSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuLnV0aWxzX2hlYWRpbmdYbF9fMVhlY04ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzX2hlYWRpbmdMZ19fZGU3cDAge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi51dGlsc19oZWFkaW5nTWRfXzNkZTZHIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzX2JvcmRlckNpcmNsZV9fMTNxZEoge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXRpbHNfY29sb3JJbmhlcml0X18zR3VkZiB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzX3BhZGRpbmcxcHhfX29Dbnk4IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi51dGlsc19saXN0X19TN19wZSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzX2xpc3RJdGVtX18yZUpwSiB7XFxyXFxuICBtYXJnaW46IDAgMCAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXRpbHNfbGlzdEl0ZW1fXzJlSnBKOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udXRpbHNfbGlnaHRUZXh0X18xMkNrbSB7XFxyXFxuICBjb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG4udXRpbHNfc3RpY2t5X18xSTdWNCB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzX2ZsZXhHcmlkX18yeHBOcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udXRpbHNfZmxleENvbHVtbl9fMjlySFcge1xcclxcbiAgZmxleDogMSAxO1xcclxcbn1cXHJcXG5cXHJcXG4udXRpbHNfaW5wdXRfXzNIaWdTW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDUlLCAyMCUpO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi51dGlsc19pbnB1dF9fM0hpZ1NbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAqL1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA1JSwgMjAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzX2lucHV0X18zSGlnU1t0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcclxcbiAgY29sb3I6IGhzbCgyNDAsIDUlLCAyMCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzX2lucHV0X18zSGlnU1t0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNSUsIDIwJSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0VBQ2hCOztBQUVGO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztBQUNYOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUV0QixnQkFBZ0I7RUFDaEIsTUFBTTtBQUNSOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBTztBQUNUOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxpQkFBaUI7RUFDakIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRpbmcyWGwge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbi5oZWFkaW5nWGwge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmdMZyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmdNZCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXJDaXJjbGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3JJbmhlcml0IHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFkZGluZzFweCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RJdGVtIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0SXRlbTpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxpZ2h0VGV4dCB7XFxyXFxuICBjb2xvcjogcmdiKDE5MCwgMTkwLCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RpY2t5IHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleEdyaWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhDb2x1bW4ge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDUlLCAyMCUpO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7ICovXFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDUlLCAyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBoc2woMjQwLCA1JSwgMjAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgNSUsIDIwJSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRpbmcyWGxcIjogXCJ1dGlsc19oZWFkaW5nMlhsX18xSTY1bVwiLFxuXHRcImhlYWRpbmdYbFwiOiBcInV0aWxzX2hlYWRpbmdYbF9fMVhlY05cIixcblx0XCJoZWFkaW5nTGdcIjogXCJ1dGlsc19oZWFkaW5nTGdfX2RlN3AwXCIsXG5cdFwiaGVhZGluZ01kXCI6IFwidXRpbHNfaGVhZGluZ01kX18zZGU2R1wiLFxuXHRcImJvcmRlckNpcmNsZVwiOiBcInV0aWxzX2JvcmRlckNpcmNsZV9fMTNxZEpcIixcblx0XCJjb2xvckluaGVyaXRcIjogXCJ1dGlsc19jb2xvckluaGVyaXRfXzNHdWRmXCIsXG5cdFwicGFkZGluZzFweFwiOiBcInV0aWxzX3BhZGRpbmcxcHhfX29Dbnk4XCIsXG5cdFwibGlzdFwiOiBcInV0aWxzX2xpc3RfX1M3X3BlXCIsXG5cdFwibGlzdEl0ZW1cIjogXCJ1dGlsc19saXN0SXRlbV9fMmVKcEpcIixcblx0XCJsaWdodFRleHRcIjogXCJ1dGlsc19saWdodFRleHRfXzEyQ2ttXCIsXG5cdFwic3RpY2t5XCI6IFwidXRpbHNfc3RpY2t5X18xSTdWNFwiLFxuXHRcImZsZXhHcmlkXCI6IFwidXRpbHNfZmxleEdyaWRfXzJ4cE5wXCIsXG5cdFwiZmxleENvbHVtblwiOiBcInV0aWxzX2ZsZXhDb2x1bW5fXzI5ckhXXCIsXG5cdFwiaW5wdXRcIjogXCJ1dGlsc19pbnB1dF9fM0hpZ1NcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAnLi9yZWFjdC1zd2lwZSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnLi9yZWFjdC1zd2lwZScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdFN3aXBlKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdFN3aXBlKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0U3dpcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RTd2lwZSk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFN3aXBlMi5kZWZhdWx0O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdwcm9wLXR5cGVzJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJykpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwucmVhY3RTd2lwZSA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5zZXRIYXNTdXBwb3J0VG9DYXB0dXJlT3B0aW9uID0gc2V0SGFzU3VwcG9ydFRvQ2FwdHVyZU9wdGlvbjtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgc3VwcG9ydHNDYXB0dXJlT3B0aW9uID0gZmFsc2U7XG4gIGZ1bmN0aW9uIHNldEhhc1N1cHBvcnRUb0NhcHR1cmVPcHRpb24oaGFzU3VwcG9ydCkge1xuICAgIHN1cHBvcnRzQ2FwdHVyZU9wdGlvbiA9IGhhc1N1cHBvcnQ7XG4gIH1cblxuICB0cnkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2NhcHR1cmUnLCB7IGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBzZXRIYXNTdXBwb3J0VG9DYXB0dXJlT3B0aW9uKHRydWUpO1xuICAgICAgfSB9KSk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgZnVuY3Rpb24gZ2V0U2FmZUV2ZW50SGFuZGxlck9wdHMoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHsgY2FwdHVyZTogdHJ1ZSB9O1xuXG4gICAgcmV0dXJuIHN1cHBvcnRzQ2FwdHVyZU9wdGlvbiA/IG9wdGlvbnMgOiBvcHRpb25zLmNhcHR1cmU7XG4gIH1cblxuICAvKipcbiAgICogW2dldFBvc2l0aW9uIHJldHVybnMgYSBwb3NpdGlvbiBlbGVtZW50IHRoYXQgd29ya3MgZm9yIG1vdXNlIG9yIHRvdWNoIGV2ZW50c11cbiAgICogQHBhcmFtICB7W0V2ZW50XX0gZXZlbnQgW3RoZSByZWNlaXZlZCBldmVudF1cbiAgICogQHJldHVybiB7W09iamVjdF19ICAgICAgW3ggYW5kIHkgY29vcmRzXVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oZXZlbnQpIHtcbiAgICBpZiAoJ3RvdWNoZXMnIGluIGV2ZW50KSB7XG4gICAgICB2YXIgX2V2ZW50JHRvdWNoZXMkID0gZXZlbnQudG91Y2hlc1swXSxcbiAgICAgICAgICBwYWdlWCA9IF9ldmVudCR0b3VjaGVzJC5wYWdlWCxcbiAgICAgICAgICBwYWdlWSA9IF9ldmVudCR0b3VjaGVzJC5wYWdlWTtcblxuICAgICAgcmV0dXJuIHsgeDogcGFnZVgsIHk6IHBhZ2VZIH07XG4gICAgfVxuXG4gICAgdmFyIHNjcmVlblggPSBldmVudC5zY3JlZW5YLFxuICAgICAgICBzY3JlZW5ZID0gZXZlbnQuc2NyZWVuWTtcblxuICAgIHJldHVybiB7IHg6IHNjcmVlblgsIHk6IHNjcmVlblkgfTtcbiAgfVxuXG4gIHZhciBSZWFjdFN3aXBlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmVhY3RTd2lwZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSZWFjdFN3aXBlKCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFjdFN3aXBlKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBSZWFjdFN3aXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RTd2lwZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICBfdGhpcy5faGFuZGxlU3dpcGVTdGFydCA9IF90aGlzLl9oYW5kbGVTd2lwZVN0YXJ0LmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuX2hhbmRsZVN3aXBlTW92ZSA9IF90aGlzLl9oYW5kbGVTd2lwZU1vdmUuYmluZChfdGhpcyk7XG4gICAgICBfdGhpcy5faGFuZGxlU3dpcGVFbmQgPSBfdGhpcy5faGFuZGxlU3dpcGVFbmQuYmluZChfdGhpcyk7XG5cbiAgICAgIF90aGlzLl9vbk1vdXNlRG93biA9IF90aGlzLl9vbk1vdXNlRG93bi5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLl9vbk1vdXNlTW92ZSA9IF90aGlzLl9vbk1vdXNlTW92ZS5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLl9vbk1vdXNlVXAgPSBfdGhpcy5fb25Nb3VzZVVwLmJpbmQoX3RoaXMpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZWFjdFN3aXBlLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zd2lwZXIpIHtcbiAgICAgICAgICB0aGlzLnN3aXBlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVTd2lwZU1vdmUsIGdldFNhZmVFdmVudEhhbmRsZXJPcHRzKHtcbiAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3dpcGVyKSB7XG4gICAgICAgICAgdGhpcy5zd2lwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlU3dpcGVNb3ZlLCBnZXRTYWZlRXZlbnRIYW5kbGVyT3B0cyh7XG4gICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfb25Nb3VzZURvd24nLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYWxsb3dNb3VzZUV2ZW50cykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbk1vdXNlTW92ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVTd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbk1vdXNlVXAnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVN3aXBlRW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVTdGFydCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVN3aXBlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9nZXRQb3NpdGlvbiA9IGdldFBvc2l0aW9uKGV2ZW50KSxcbiAgICAgICAgICAgIHggPSBfZ2V0UG9zaXRpb24ueCxcbiAgICAgICAgICAgIHkgPSBfZ2V0UG9zaXRpb24ueTtcblxuICAgICAgICB0aGlzLm1vdmVTdGFydCA9IHsgeDogeCwgeTogeSB9O1xuICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX2hhbmRsZVN3aXBlTW92ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVN3aXBlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMubW92ZVN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9nZXRQb3NpdGlvbjIgPSBnZXRQb3NpdGlvbihldmVudCksXG4gICAgICAgICAgICB4ID0gX2dldFBvc2l0aW9uMi54LFxuICAgICAgICAgICAgeSA9IF9nZXRQb3NpdGlvbjIueTtcblxuICAgICAgICB2YXIgZGVsdGFYID0geCAtIHRoaXMubW92ZVN0YXJ0Lng7XG4gICAgICAgIHZhciBkZWx0YVkgPSB5IC0gdGhpcy5tb3ZlU3RhcnQueTtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIGhhbmRsaW5nIHRoZSByZXNwb25zYWJpbGl0eSBvZiBjYW5jZWxsaW5nIHRoZSBzY3JvbGwgdG9cbiAgICAgICAgLy8gdGhlIGNvbXBvbmVudCBoYW5kbGluZyB0aGUgZXZlbnRcbiAgICAgICAgdmFyIHNob3VsZFByZXZlbnREZWZhdWx0ID0gdGhpcy5wcm9wcy5vblN3aXBlTW92ZSh7XG4gICAgICAgICAgeDogZGVsdGFYLFxuICAgICAgICAgIHk6IGRlbHRhWVxuICAgICAgICB9LCBldmVudCk7XG5cbiAgICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZVBvc2l0aW9uID0geyBkZWx0YVg6IGRlbHRhWCwgZGVsdGFZOiBkZWx0YVkgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVFbmQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVTd2lwZUVuZChldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVFbmQoZXZlbnQpO1xuXG4gICAgICAgIHZhciB0b2xlcmFuY2UgPSB0aGlzLnByb3BzLnRvbGVyYW5jZTtcblxuXG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiB0aGlzLm1vdmVQb3NpdGlvbikge1xuICAgICAgICAgIGlmICh0aGlzLm1vdmVQb3NpdGlvbi5kZWx0YVggPCAtdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVMZWZ0KDEsIGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZVBvc2l0aW9uLmRlbHRhWCA+IHRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlUmlnaHQoMSwgZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFZIDwgLXRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlVXAoMSwgZXZlbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFZID4gdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3dpcGVEb3duKDEsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVTdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92ZVBvc2l0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB0YWdOYW1lID0gX3Byb3BzLnRhZ05hbWUsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGFsbG93TW91c2VFdmVudHMgPSBfcHJvcHMuYWxsb3dNb3VzZUV2ZW50cyxcbiAgICAgICAgICAgIG9uU3dpcGVVcCA9IF9wcm9wcy5vblN3aXBlVXAsXG4gICAgICAgICAgICBvblN3aXBlRG93biA9IF9wcm9wcy5vblN3aXBlRG93bixcbiAgICAgICAgICAgIG9uU3dpcGVMZWZ0ID0gX3Byb3BzLm9uU3dpcGVMZWZ0LFxuICAgICAgICAgICAgb25Td2lwZVJpZ2h0ID0gX3Byb3BzLm9uU3dpcGVSaWdodCxcbiAgICAgICAgICAgIG9uU3dpcGVTdGFydCA9IF9wcm9wcy5vblN3aXBlU3RhcnQsXG4gICAgICAgICAgICBvblN3aXBlTW92ZSA9IF9wcm9wcy5vblN3aXBlTW92ZSxcbiAgICAgICAgICAgIG9uU3dpcGVFbmQgPSBfcHJvcHMub25Td2lwZUVuZCxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0YWdOYW1lJywgJ2NsYXNzTmFtZScsICdzdHlsZScsICdjaGlsZHJlbicsICdhbGxvd01vdXNlRXZlbnRzJywgJ29uU3dpcGVVcCcsICdvblN3aXBlRG93bicsICdvblN3aXBlTGVmdCcsICdvblN3aXBlUmlnaHQnLCAnb25Td2lwZVN0YXJ0JywgJ29uU3dpcGVNb3ZlJywgJ29uU3dpcGVFbmQnXSk7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIHRoaXMucHJvcHMudGFnTmFtZSxcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc3dpcGVyID0gbm9kZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5fb25Nb3VzZURvd24sXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuX2hhbmRsZVN3aXBlU3RhcnQsXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLl9oYW5kbGVTd2lwZUVuZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgICAgfSwgcHJvcHMpLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlYWN0U3dpcGU7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgUmVhY3RTd2lwZS5kaXNwbGF5TmFtZSA9ICdSZWFjdFN3aXBlJztcbiAgUmVhY3RTd2lwZS5wcm9wVHlwZXMgPSB7XG4gICAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgICBhbGxvd01vdXNlRXZlbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgb25Td2lwZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Td2lwZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvblN3aXBlTGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uU3dpcGVSaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uU3dpcGVTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uU3dpcGVNb3ZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Td2lwZUVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHRvbGVyYW5jZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuICBSZWFjdFN3aXBlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICBhbGxvd01vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICBvblN3aXBlVXA6IGZ1bmN0aW9uIG9uU3dpcGVVcCgpIHt9LFxuICAgIG9uU3dpcGVEb3duOiBmdW5jdGlvbiBvblN3aXBlRG93bigpIHt9LFxuICAgIG9uU3dpcGVMZWZ0OiBmdW5jdGlvbiBvblN3aXBlTGVmdCgpIHt9LFxuICAgIG9uU3dpcGVSaWdodDogZnVuY3Rpb24gb25Td2lwZVJpZ2h0KCkge30sXG4gICAgb25Td2lwZVN0YXJ0OiBmdW5jdGlvbiBvblN3aXBlU3RhcnQoKSB7fSxcbiAgICBvblN3aXBlTW92ZTogZnVuY3Rpb24gb25Td2lwZU1vdmUoKSB7fSxcbiAgICBvblN3aXBlRW5kOiBmdW5jdGlvbiBvblN3aXBlRW5kKCkge30sXG5cbiAgICB0b2xlcmFuY2U6IDBcbiAgfTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gUmVhY3RTd2lwZTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIYW1idXJnZXJNZW51O1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gSGFtYnVyZ2VyTWVudShwcm9wcykge1xuICB2YXIgd2lkdGggPSAocHJvcHMud2lkdGggfHwgMzYpICsgXCJweFwiLFxuICAgICAgaGVpZ2h0ID0gKHByb3BzLmhlaWdodCB8fCAzMCkgKyBcInB4XCIsXG4gICAgICBoYWxmSGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LnJlcGxhY2UoXCJweFwiLCBcIlwiKSkgLyAyICsgXCJweFwiLFxuICAgICAgaXNPcGVuID0gcHJvcHMuaXNPcGVuIHx8IGZhbHNlLFxuICAgICAgc3Ryb2tlV2lkdGggPSBwcm9wcy5zdHJva2VXaWR0aCB8fCAyLFxuICAgICAgaGFsZlN0cm9rZVdpZHRoID0gXCItXCIgKyBzdHJva2VXaWR0aCAvIDIgKyBcInB4XCIsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbiA9IHByb3BzLmFuaW1hdGlvbkR1cmF0aW9uIHx8IFwiMC40XCI7XG5cbiAgdmFyIGdldFRyYW5zZm9ybVZhbHVlID0gZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVmFsdWUoaXNPcGVuLCBkZWZhdWx0UG9zLCByb3RhdGVWYWwpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUzZCgwLFwiICsgKGlzT3BlbiA/IGhhbGZIZWlnaHQgOiBkZWZhdWx0UG9zKSArIFwiLDApIHJvdGF0ZShcIiArIChpc09wZW4gPyByb3RhdGVWYWwgKyBcImRlZ1wiIDogXCIwXCIpICsgXCIpXCI7XG4gIH07XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoXCIgKyAocHJvcHMucm90YXRlIHx8IDApICsgXCJkZWcpXCJcbiAgICB9LFxuICAgIGxpbmVCYXNlOiB7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBoZWlnaHQ6IHN0cm9rZVdpZHRoICsgXCJweFwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYmFja2dyb3VuZDogcHJvcHMuY29sb3IgfHwgXCIjMDAwXCIsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiZWFzZVwiLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBhbmltYXRpb25EdXJhdGlvbiArIFwic1wiLFxuICAgICAgYm9yZGVyUmFkaXVzOiAocHJvcHMuYm9yZGVyUmFkaXVzIHx8IDApICsgXCJweFwiLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICAgIH0sXG4gICAgZmlyc3RMaW5lOiB7XG4gICAgICB0cmFuc2Zvcm06IGdldFRyYW5zZm9ybVZhbHVlKGlzT3BlbiwgMCwgNDUpLFxuICAgICAgbWFyZ2luVG9wOiBoYWxmU3Ryb2tlV2lkdGhcbiAgICB9LFxuICAgIHNlY29uZExpbmU6IHtcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJlYXNlLW91dFwiLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBhbmltYXRpb25EdXJhdGlvbiAvIDQgKyBcInNcIixcbiAgICAgIG9wYWNpdHk6IGlzT3BlbiA/IFwiMFwiIDogXCIxXCIsXG4gICAgICB0b3A6IGhhbGZIZWlnaHQsXG4gICAgICBtYXJnaW5Ub3A6IGhhbGZTdHJva2VXaWR0aFxuICAgIH0sXG4gICAgdGhpcmRMaW5lOiB7XG4gICAgICB0cmFuc2Zvcm06IGdldFRyYW5zZm9ybVZhbHVlKGlzT3BlbiwgaGVpZ2h0LCAtNDUpLFxuICAgICAgbWFyZ2luVG9wOiBoYWxmU3Ryb2tlV2lkdGhcbiAgICB9XG4gIH07XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogc3R5bGVzLmNvbnRhaW5lcixcbiAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICBvbkNsaWNrOiBwcm9wcy5tZW51Q2xpY2tlZFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlcy5saW5lQmFzZSwgc3R5bGVzLmZpcnN0TGluZSlcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLmxpbmVCYXNlLCBzdHlsZXMuc2Vjb25kTGluZSlcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLmxpbmVCYXNlLCBzdHlsZXMudGhpcmRMaW5lKVxuICB9KSk7XG59XG5cbkhhbWJ1cmdlck1lbnUucHJvcFR5cGVzID0ge1xuICBpc09wZW46IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wuaXNSZXF1aXJlZCxcbiAgbWVudUNsaWNrZWQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIHN0cm9rZVdpZHRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIHJvdGF0ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBjb2xvcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBib3JkZXJSYWRpdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgYW5pbWF0aW9uRHVyYXRpb246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLlJlYWN0VGFibGUgPSB7fSwgZ2xvYmFsLlJlYWN0KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cywgUmVhY3QpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIFJlYWN0ID0gUmVhY3QgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFJlYWN0LCAnZGVmYXVsdCcpID8gUmVhY3RbJ2RlZmF1bHQnXSA6IFJlYWN0O1xuXG4gIGZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG5cbiAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gICAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuXG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbiAgfVxuXG4gIHZhciByZW5kZXJFcnIgPSAnUmVuZGVyZXIgRXJyb3Ig4pid77iPJztcbiAgdmFyIGFjdGlvbnMgPSB7XG4gICAgaW5pdDogJ2luaXQnXG4gIH07XG4gIHZhciBkZWZhdWx0UmVuZGVyZXIgPSBmdW5jdGlvbiBkZWZhdWx0UmVuZGVyZXIoX3JlZikge1xuICAgIHZhciBfcmVmJHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgdmFsdWUgPSBfcmVmJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICB2YXIgZW1wdHlSZW5kZXJlciA9IGZ1bmN0aW9uIGVtcHR5UmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFwiXFx4QTBcIik7XG4gIH07XG4gIHZhciBkZWZhdWx0Q29sdW1uID0ge1xuICAgIENlbGw6IGRlZmF1bHRSZW5kZXJlcixcbiAgICB3aWR0aDogMTUwLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIG1heFdpZHRoOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICB9O1xuXG4gIGZ1bmN0aW9uIG1lcmdlUHJvcHMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BMaXN0ID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcHJvcExpc3RbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BMaXN0LnJlZHVjZShmdW5jdGlvbiAocHJvcHMsIG5leHQpIHtcbiAgICAgIHZhciBzdHlsZSA9IG5leHQuc3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gbmV4dC5jbGFzc05hbWUsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG5leHQsIFtcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICAgICAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHt9LCByZXN0KTtcblxuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHByb3BzLnN0eWxlID0gcHJvcHMuc3R5bGUgPyBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUgfHwge30sIHt9LCBzdHlsZSB8fCB7fSkgOiBzdHlsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWUgOiBjbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUgPT09ICcnKSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9LCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcm9wR2V0dGVyKHByZXZQcm9wcywgdXNlclByb3BzLCBtZXRhKSB7XG4gICAgLy8gSGFuZGxlIGEgbGFtYmRhLCBwYXNzIGl0IHRoZSBwcmV2aW91cyBwcm9wc1xuICAgIGlmICh0eXBlb2YgdXNlclByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaGFuZGxlUHJvcEdldHRlcih7fSwgdXNlclByb3BzKHByZXZQcm9wcywgbWV0YSkpO1xuICAgIH0gLy8gSGFuZGxlIGFuIGFycmF5LCBtZXJnZSBlYWNoIGl0ZW0gYXMgc2VwYXJhdGUgcHJvcHNcblxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclByb3BzKSkge1xuICAgICAgcmV0dXJuIG1lcmdlUHJvcHMuYXBwbHkodm9pZCAwLCBbcHJldlByb3BzXS5jb25jYXQodXNlclByb3BzKSk7XG4gICAgfSAvLyBIYW5kbGUgYW4gb2JqZWN0IGJ5IGRlZmF1bHQsIG1lcmdlIHRoZSB0d28gb2JqZWN0c1xuXG5cbiAgICByZXR1cm4gbWVyZ2VQcm9wcyhwcmV2UHJvcHMsIHVzZXJQcm9wcyk7XG4gIH1cblxuICB2YXIgbWFrZVByb3BHZXR0ZXIgPSBmdW5jdGlvbiBtYWtlUHJvcEdldHRlcihob29rcywgbWV0YSkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHVzZXJQcm9wcykge1xuICAgICAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVzZXJQcm9wcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW10uY29uY2F0KGhvb2tzLCBbdXNlclByb3BzXSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVQcm9wR2V0dGVyKHByZXYsIG5leHQsIF9leHRlbmRzKHt9LCBtZXRhLCB7XG4gICAgICAgICAgdXNlclByb3BzOiB1c2VyUHJvcHNcbiAgICAgICAgfSkpO1xuICAgICAgfSwge30pO1xuICAgIH07XG4gIH07XG4gIHZhciByZWR1Y2VIb29rcyA9IGZ1bmN0aW9uIHJlZHVjZUhvb2tzKGhvb2tzLCBpbml0aWFsLCBtZXRhLCBhbGxvd1VuZGVmaW5lZCkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3MucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgICB2YXIgbmV4dFZhbHVlID0gbmV4dChwcmV2LCBtZXRhKTtcblxuICAgICAge1xuICAgICAgICBpZiAoIWFsbG93VW5kZWZpbmVkICYmIHR5cGVvZiBuZXh0VmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKG5leHQpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgVGFibGU6IEEgcmVkdWNlciBob29rIOKYne+4jyBqdXN0IHJldHVybmVkIHVuZGVmaW5lZCEgVGhpcyBpcyBub3QgYWxsb3dlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgIH0sIGluaXRpYWwpO1xuICB9O1xuICB2YXIgbG9vcEhvb2tzID0gZnVuY3Rpb24gbG9vcEhvb2tzKGhvb2tzLCBjb250ZXh0LCBtZXRhKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICB2YXIgbmV4dFZhbHVlID0gaG9vayhjb250ZXh0LCBtZXRhKTtcblxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIG5leHRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oaG9vaywgbmV4dFZhbHVlKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IFRhYmxlOiBBIGxvb3AtdHlwZSBob29rIOKYne+4jyBqdXN0IHJldHVybmVkIGEgdmFsdWUhIFRoaXMgaXMgbm90IGFsbG93ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZnVuY3Rpb24gZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgYmVmb3JlcywgcGx1Z2luTmFtZSwgYWZ0ZXJzKSB7XG4gICAgaWYgKCBhZnRlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlZmluaW5nIHBsdWdpbnMgaW4gdGhlIFxcXCJhZnRlclxcXCIgc2VjdGlvbiBvZiBlbnN1cmVQbHVnaW5PcmRlciBpcyBubyBsb25nZXIgc3VwcG9ydGVkIChzZWUgcGx1Z2luIFwiICsgcGx1Z2luTmFtZSArIFwiKVwiKTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2luSW5kZXggPSBwbHVnaW5zLmZpbmRJbmRleChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICByZXR1cm4gcGx1Z2luLnBsdWdpbk5hbWUgPT09IHBsdWdpbk5hbWU7XG4gICAgfSk7XG5cbiAgICBpZiAocGx1Z2luSW5kZXggPT09IC0xKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwbHVnaW4gXFxcIlwiICsgcGx1Z2luTmFtZSArIFwiXFxcIiB3YXMgbm90IGZvdW5kIGluIHRoZSBwbHVnaW4gbGlzdCFcXG5UaGlzIHVzdWFsbHkgbWVhbnMgeW91IG5lZWQgdG8gbmVlZCB0byBuYW1lIHlvdXIgcGx1Z2luIGhvb2sgYnkgc2V0dGluZyB0aGUgJ3BsdWdpbk5hbWUnIHByb3BlcnR5IG9mIHRoZSBob29rIGZ1bmN0aW9uLCBlZzpcXG5cXG4gIFwiICsgcGx1Z2luTmFtZSArIFwiLnBsdWdpbk5hbWUgPSAnXCIgKyBwbHVnaW5OYW1lICsgXCInXFxuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJlZm9yZXMuZm9yRWFjaChmdW5jdGlvbiAoYmVmb3JlKSB7XG4gICAgICB2YXIgYmVmb3JlSW5kZXggPSBwbHVnaW5zLmZpbmRJbmRleChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4ucGx1Z2luTmFtZSA9PT0gYmVmb3JlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChiZWZvcmVJbmRleCA+IC0xICYmIGJlZm9yZUluZGV4ID4gcGx1Z2luSW5kZXgpIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0IFRhYmxlOiBUaGUgXCIgKyBwbHVnaW5OYW1lICsgXCIgcGx1Z2luIGhvb2sgbXVzdCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIFwiICsgYmVmb3JlICsgXCIgcGx1Z2luIGhvb2shXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZnVuY3Rpb25hbFVwZGF0ZSh1cGRhdGVyLCBvbGQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKG9sZCkgOiB1cGRhdGVyO1xuICB9XG4gIGZ1bmN0aW9uIHVzZUdldExhdGVzdChvYmopIHtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKCk7XG4gICAgcmVmLmN1cnJlbnQgPSBvYmo7XG4gICAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG4gIH0gLy8gU1NSIGhhcyBpc3N1ZXMgd2l0aCB1c2VMYXlvdXRFZmZlY3Qgc3RpbGwsIHNvIHVzZSB1c2VFZmZlY3QgZHVyaW5nIFNTUlxuXG4gIHZhciBzYWZlVXNlTGF5b3V0RWZmZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbiAgZnVuY3Rpb24gdXNlTW91bnRlZExheW91dEVmZmVjdChmbiwgZGVwcykge1xuICAgIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICBzYWZlVXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH1cblxuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSwgZGVwcyk7XG4gIH1cbiAgZnVuY3Rpb24gdXNlQXN5bmNEZWJvdW5jZShkZWZhdWx0Rm4sIGRlZmF1bHRXYWl0KSB7XG4gICAgaWYgKGRlZmF1bHRXYWl0ID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRXYWl0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgZGVib3VuY2VSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICAgIHZhciBnZXREZWZhdWx0Rm4gPSB1c2VHZXRMYXRlc3QoZGVmYXVsdEZuKTtcbiAgICB2YXIgZ2V0RGVmYXVsdFdhaXQgPSB1c2VHZXRMYXRlc3QoZGVmYXVsdFdhaXQpO1xuICAgIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoXG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICByZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgICAgdmFyIF9sZW4yLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIF9rZXkyLFxuICAgICAgICAgICAgX2FyZ3MyID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZm9yIChfbGVuMiA9IF9hcmdzMi5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gX2FyZ3MyW19rZXkyXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRlYm91bmNlUmVmLmN1cnJlbnQucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQudGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgICAgIF9hc3luY1RvR2VuZXJhdG9yKFxuICAgICAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgICAgICByZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBkZWJvdW5jZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldERlZmF1bHRGbigpLmFwcGx5KHZvaWQgMCwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDEgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwLnJlc29sdmUuY2FsbChfY29udGV4dC50MCwgX2NvbnRleHQudDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQyID0gX2NvbnRleHRbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZWplY3QoX2NvbnRleHQudDIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5maW5pc2goMTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1sxLCA5LCAxMiwgMTVdXSk7XG4gICAgICAgICAgICAgICAgfSkpLCBnZXREZWZhdWx0V2FpdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIpO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpLCBbZ2V0RGVmYXVsdEZuLCBnZXREZWZhdWx0V2FpdF0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VSZW5kZXJlcihpbnN0YW5jZSwgY29sdW1uLCBtZXRhKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwgdXNlclByb3BzKSB7XG4gICAgICBpZiAodXNlclByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgdXNlclByb3BzID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciBDb21wID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gY29sdW1uW3R5cGVdIDogdHlwZTtcblxuICAgICAgaWYgKHR5cGVvZiBDb21wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmluZm8oY29sdW1uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlbmRlckVycik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbGV4UmVuZGVyKENvbXAsIF9leHRlbmRzKHt9LCBpbnN0YW5jZSwge1xuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSwgbWV0YSwge30sIHVzZXJQcm9wcykpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZmxleFJlbmRlcihDb21wLCBwcm9wcykge1xuICAgIHJldHVybiBpc1JlYWN0Q29tcG9uZW50KENvbXApID8gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wLCBwcm9wcykgOiBDb21wO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNSZWFjdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gaXNDbGFzc0NvbXBvbmVudChjb21wb25lbnQpIHx8IHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgfHwgaXNFeG90aWNDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvbXBvbmVudCk7XG4gICAgICByZXR1cm4gcHJvdG8ucHJvdG90eXBlICYmIHByb3RvLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xuICAgIH0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXhvdGljQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY29tcG9uZW50LiQkdHlwZW9mID09PSAnc3ltYm9sJyAmJiBbJ3JlYWN0Lm1lbW8nLCAncmVhY3QuZm9yd2FyZF9yZWYnXS5pbmNsdWRlcyhjb21wb25lbnQuJCR0eXBlb2YuZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlua0NvbHVtblN0cnVjdHVyZShjb2x1bW5zLCBwYXJlbnQsIGRlcHRoKSB7XG4gICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgIGRlcHRoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uID0gX2V4dGVuZHMoe30sIGNvbHVtbiwge1xuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgZGVwdGg6IGRlcHRoXG4gICAgICB9KTtcbiAgICAgIGFzc2lnbkNvbHVtbkFjY2Vzc29yKGNvbHVtbik7XG5cbiAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xuICAgICAgICBjb2x1bW4uY29sdW1ucyA9IGxpbmtDb2x1bW5TdHJ1Y3R1cmUoY29sdW1uLmNvbHVtbnMsIGNvbHVtbiwgZGVwdGggKyAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBmbGF0dGVuQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5CeShjb2x1bW5zLCAnY29sdW1ucycpO1xuICB9XG4gIGZ1bmN0aW9uIGFzc2lnbkNvbHVtbkFjY2Vzc29yKGNvbHVtbikge1xuICAgIC8vIEZpcnN0IGNoZWNrIGZvciBzdHJpbmcgYWNjZXNzb3JcbiAgICB2YXIgaWQgPSBjb2x1bW4uaWQsXG4gICAgICAgIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICBIZWFkZXIgPSBjb2x1bW4uSGVhZGVyO1xuXG4gICAgaWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlkID0gaWQgfHwgYWNjZXNzb3I7XG4gICAgICB2YXIgYWNjZXNzb3JQYXRoID0gYWNjZXNzb3Iuc3BsaXQoJy4nKTtcblxuICAgICAgYWNjZXNzb3IgPSBmdW5jdGlvbiBhY2Nlc3Nvcihyb3cpIHtcbiAgICAgICAgcmV0dXJuIGdldEJ5KHJvdywgYWNjZXNzb3JQYXRoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFpZCAmJiB0eXBlb2YgSGVhZGVyID09PSAnc3RyaW5nJyAmJiBIZWFkZXIpIHtcbiAgICAgIGlkID0gSGVhZGVyO1xuICAgIH1cblxuICAgIGlmICghaWQgJiYgY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoY29sdW1uKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBjb2x1bW4gSUQgKG9yIHVuaXF1ZSBcIkhlYWRlclwiIHZhbHVlKSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGNvbHVtbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY29sdW1uIElEIChvciBzdHJpbmcgYWNjZXNzb3IpIGlzIHJlcXVpcmVkIScpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oY29sdW1uLCB7XG4gICAgICBpZDogaWQsXG4gICAgICBhY2Nlc3NvcjogYWNjZXNzb3JcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG4gIGZ1bmN0aW9uIGRlY29yYXRlQ29sdW1uKGNvbHVtbiwgdXNlckRlZmF1bHRDb2x1bW4pIHtcbiAgICBpZiAoIXVzZXJEZWZhdWx0Q29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbHVtbiwgX2V4dGVuZHMoe1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIGEgZmFsbGJhY2sgaGVhZGVyLCBqdXN0IGluIGNhc2VcbiAgICAgIEhlYWRlcjogZW1wdHlSZW5kZXJlcixcbiAgICAgIEZvb3RlcjogZW1wdHlSZW5kZXJlclxuICAgIH0sIGRlZmF1bHRDb2x1bW4sIHt9LCB1c2VyRGVmYXVsdENvbHVtbiwge30sIGNvbHVtbikpO1xuICAgIE9iamVjdC5hc3NpZ24oY29sdW1uLCB7XG4gICAgICBvcmlnaW5hbFdpZHRoOiBjb2x1bW4ud2lkdGhcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9IC8vIEJ1aWxkIHRoZSBoZWFkZXIgZ3JvdXBzIGZyb20gdGhlIGJvdHRvbSB1cFxuXG4gIGZ1bmN0aW9uIG1ha2VIZWFkZXJHcm91cHMoYWxsQ29sdW1ucywgZGVmYXVsdENvbHVtbiwgYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMpIHtcbiAgICBpZiAoYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMgPT09IHZvaWQgMCkge1xuICAgICAgYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbiBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZGVyR3JvdXBzID0gW107XG4gICAgdmFyIHNjYW5Db2x1bW5zID0gYWxsQ29sdW1ucztcbiAgICB2YXIgdWlkID0gMDtcblxuICAgIHZhciBnZXRVSUQgPSBmdW5jdGlvbiBnZXRVSUQoKSB7XG4gICAgICByZXR1cm4gdWlkKys7XG4gICAgfTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgLy8gVGhlIGhlYWRlciBncm91cCB3ZSBhcmUgY3JlYXRpbmdcbiAgICAgIHZhciBoZWFkZXJHcm91cCA9IHtcbiAgICAgICAgaGVhZGVyczogW11cbiAgICAgIH07IC8vIFRoZSBwYXJlbnQgY29sdW1ucyB3ZSdyZSBnb2luZyB0byBzY2FuIG5leHRcblxuICAgICAgdmFyIHBhcmVudENvbHVtbnMgPSBbXTtcbiAgICAgIHZhciBoYXNQYXJlbnRzID0gc2NhbkNvbHVtbnMuc29tZShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5wYXJlbnQ7XG4gICAgICB9KTsgLy8gU2NhbiBlYWNoIGNvbHVtbiBmb3IgcGFyZW50c1xuXG4gICAgICBzY2FuQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgLy8gV2hhdCBpcyB0aGUgbGF0ZXN0IChsYXN0KSBwYXJlbnQgY29sdW1uP1xuICAgICAgICB2YXIgbGF0ZXN0UGFyZW50Q29sdW1uID0gW10uY29uY2F0KHBhcmVudENvbHVtbnMpLnJldmVyc2UoKVswXTtcbiAgICAgICAgdmFyIG5ld1BhcmVudDtcblxuICAgICAgICBpZiAoaGFzUGFyZW50cykge1xuICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gaGFzIGEgcGFyZW50LCBhZGQgaXQgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgaWYgKGNvbHVtbi5wYXJlbnQpIHtcbiAgICAgICAgICAgIG5ld1BhcmVudCA9IF9leHRlbmRzKHt9LCBjb2x1bW4ucGFyZW50LCB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsSWQ6IGNvbHVtbi5wYXJlbnQuaWQsXG4gICAgICAgICAgICAgIGlkOiBjb2x1bW4ucGFyZW50LmlkICsgXCJfXCIgKyBnZXRVSUQoKSxcbiAgICAgICAgICAgICAgaGVhZGVyczogW2NvbHVtbl1cbiAgICAgICAgICAgIH0sIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzKGNvbHVtbikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBvdGhlciBjb2x1bW5zIGhhdmUgcGFyZW50cywgd2UnbGwgbmVlZCB0byBhZGQgYSBwbGFjZSBob2xkZXIgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxJZCA9IGNvbHVtbi5pZCArIFwiX3BsYWNlaG9sZGVyXCI7XG4gICAgICAgICAgICBuZXdQYXJlbnQgPSBkZWNvcmF0ZUNvbHVtbihfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIG9yaWdpbmFsSWQ6IG9yaWdpbmFsSWQsXG4gICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQgKyBcIl9wbGFjZWhvbGRlcl9cIiArIGdldFVJRCgpLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlck9mOiBjb2x1bW4sXG4gICAgICAgICAgICAgIGhlYWRlcnM6IFtjb2x1bW5dXG4gICAgICAgICAgICB9LCBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcyhjb2x1bW4pKSwgZGVmYXVsdENvbHVtbik7XG4gICAgICAgICAgfSAvLyBJZiB0aGUgcmVzdWx0aW5nIHBhcmVudCBjb2x1bW5zIGFyZSB0aGUgc2FtZSwganVzdCBhZGRcbiAgICAgICAgICAvLyB0aGUgY29sdW1uIGFuZCBpbmNyZW1lbnQgdGhlIGhlYWRlciBzcGFuXG5cblxuICAgICAgICAgIGlmIChsYXRlc3RQYXJlbnRDb2x1bW4gJiYgbGF0ZXN0UGFyZW50Q29sdW1uLm9yaWdpbmFsSWQgPT09IG5ld1BhcmVudC5vcmlnaW5hbElkKSB7XG4gICAgICAgICAgICBsYXRlc3RQYXJlbnRDb2x1bW4uaGVhZGVycy5wdXNoKGNvbHVtbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudENvbHVtbnMucHVzaChuZXdQYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlckdyb3VwLmhlYWRlcnMucHVzaChjb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBoZWFkZXJHcm91cHMucHVzaChoZWFkZXJHcm91cCk7IC8vIFN0YXJ0IHNjYW5uaW5nIHRoZSBwYXJlbnQgY29sdW1uc1xuXG4gICAgICBzY2FuQ29sdW1ucyA9IHBhcmVudENvbHVtbnM7XG4gICAgfTtcblxuICAgIHdoaWxlIChzY2FuQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIF9sb29wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlckdyb3Vwcy5yZXZlcnNlKCk7XG4gIH1cbiAgdmFyIHBhdGhPYmpDYWNoZSA9IG5ldyBNYXAoKTtcbiAgZnVuY3Rpb24gZ2V0Qnkob2JqLCBwYXRoLCBkZWYpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlS2V5ID0gdHlwZW9mIHBhdGggPT09ICdmdW5jdGlvbicgPyBwYXRoIDogSlNPTi5zdHJpbmdpZnkocGF0aCk7XG5cbiAgICB2YXIgcGF0aE9iaiA9IHBhdGhPYmpDYWNoZS5nZXQoY2FjaGVLZXkpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRoT2JqID0gbWFrZVBhdGhBcnJheShwYXRoKTtcbiAgICAgIHBhdGhPYmpDYWNoZS5zZXQoY2FjaGVLZXksIHBhdGhPYmopO1xuICAgICAgcmV0dXJuIHBhdGhPYmo7XG4gICAgfSgpO1xuXG4gICAgdmFyIHZhbDtcblxuICAgIHRyeSB7XG4gICAgICB2YWwgPSBwYXRoT2JqLnJlZHVjZShmdW5jdGlvbiAoY3Vyc29yLCBwYXRoUGFydCkge1xuICAgICAgICByZXR1cm4gY3Vyc29yW3BhdGhQYXJ0XTtcbiAgICAgIH0sIG9iaik7XG4gICAgfSBjYXRjaCAoZSkgey8vIGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgZXJyb3JcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWwgOiBkZWY7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0Rmlyc3REZWZpbmVkKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGZsYXR0ZW5CeShhcnIsIGtleSkge1xuICAgIHZhciBmbGF0ID0gW107XG5cbiAgICB2YXIgcmVjdXJzZSA9IGZ1bmN0aW9uIHJlY3Vyc2UoYXJyKSB7XG4gICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoIWRba2V5XSkge1xuICAgICAgICAgIGZsYXQucHVzaChkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWN1cnNlKGRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZWN1cnNlKGFycik7XG4gICAgcmV0dXJuIGZsYXQ7XG4gIH1cbiAgZnVuY3Rpb24gZXhwYW5kUm93cyhyb3dzLCBfcmVmKSB7XG4gICAgdmFyIG1hbnVhbEV4cGFuZGVkS2V5ID0gX3JlZi5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgZXhwYW5kZWQgPSBfcmVmLmV4cGFuZGVkLFxuICAgICAgICBfcmVmJGV4cGFuZFN1YlJvd3MgPSBfcmVmLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfcmVmJGV4cGFuZFN1YlJvd3MgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGV4cGFuZFN1YlJvd3M7XG4gICAgdmFyIGV4cGFuZGVkUm93cyA9IFtdO1xuXG4gICAgdmFyIGhhbmRsZVJvdyA9IGZ1bmN0aW9uIGhhbmRsZVJvdyhyb3csIGFkZFRvRXhwYW5kZWRSb3dzKSB7XG4gICAgICBpZiAoYWRkVG9FeHBhbmRlZFJvd3MgPT09IHZvaWQgMCkge1xuICAgICAgICBhZGRUb0V4cGFuZGVkUm93cyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJvdy5pc0V4cGFuZGVkID0gcm93Lm9yaWdpbmFsICYmIHJvdy5vcmlnaW5hbFttYW51YWxFeHBhbmRlZEtleV0gfHwgZXhwYW5kZWRbcm93LmlkXTtcbiAgICAgIHJvdy5jYW5FeHBhbmQgPSByb3cuc3ViUm93cyAmJiAhIXJvdy5zdWJSb3dzLmxlbmd0aDtcblxuICAgICAgaWYgKGFkZFRvRXhwYW5kZWRSb3dzKSB7XG4gICAgICAgIGV4cGFuZGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3cuc3ViUm93cyAmJiByb3cuc3ViUm93cy5sZW5ndGggJiYgcm93LmlzRXhwYW5kZWQpIHtcbiAgICAgICAgcm93LnN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVJvdyhyb3csIGV4cGFuZFN1YlJvd3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBoYW5kbGVSb3cocm93KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXhwYW5kZWRSb3dzO1xuICB9XG4gIGZ1bmN0aW9uIGdldEZpbHRlck1ldGhvZChmaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcywgZmlsdGVyVHlwZXMpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihmaWx0ZXIpIHx8IHVzZXJGaWx0ZXJUeXBlc1tmaWx0ZXJdIHx8IGZpbHRlclR5cGVzW2ZpbHRlcl0gfHwgZmlsdGVyVHlwZXMudGV4dDtcbiAgfVxuICBmdW5jdGlvbiBzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGF1dG9SZW1vdmUsIHZhbHVlLCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYXV0b1JlbW92ZSA/IGF1dG9SZW1vdmUodmFsdWUsIGNvbHVtbikgOiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG4gIGZ1bmN0aW9uIHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QtVGFibGU6IFlvdSBoYXZlIG5vdCBjYWxsZWQgcHJlcGFyZVJvdyhyb3cpIG9uZSBvciBtb3JlIHJvd3MgeW91IGFyZSBhdHRlbXB0aW5nIHRvIHJlbmRlci4nKTtcbiAgfVxuICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IG51bGw7XG4gIGZ1bmN0aW9uIHBhc3NpdmVFdmVudFN1cHBvcnRlZCgpIHtcbiAgICAvLyBtZW1vaXplIHN1cHBvcnQgdG8gYXZvaWQgYWRkaW5nIG11bHRpcGxlIHRlc3QgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBwYXNzaXZlU3VwcG9ydGVkID09PSAnYm9vbGVhbicpIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xuICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0aW9ucyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc3VwcG9ydGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbiAgICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcbiAgfSAvL1xuXG4gIHZhciByZU9wZW5CcmFja2V0ID0gL1xcWy9nO1xuICB2YXIgcmVDbG9zZUJyYWNrZXQgPSAvXFxdL2c7XG5cbiAgZnVuY3Rpb24gbWFrZVBhdGhBcnJheShvYmopIHtcbiAgICByZXR1cm4gZmxhdHRlbkRlZXAob2JqKSAvLyByZW1vdmUgYWxsIHBlcmlvZHMgaW4gcGFydHNcbiAgICAubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGQpLnJlcGxhY2UoJy4nLCAnXycpO1xuICAgIH0pIC8vIGpvaW4gcGFydHMgdXNpbmcgcGVyaW9kXG4gICAgLmpvaW4oJy4nKSAvLyByZXBsYWNlIGJyYWNrZXRzIHdpdGggcGVyaW9kc1xuICAgIC5yZXBsYWNlKHJlT3BlbkJyYWNrZXQsICcuJykucmVwbGFjZShyZUNsb3NlQnJhY2tldCwgJycpIC8vIHNwbGl0IGl0IGJhY2sgb3V0IG9uIHBlcmlvZHNcbiAgICAuc3BsaXQoJy4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXR0ZW5EZWVwKGFyciwgbmV3QXJyKSB7XG4gICAgaWYgKG5ld0FyciA9PT0gdm9pZCAwKSB7XG4gICAgICBuZXdBcnIgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgbmV3QXJyLnB1c2goYXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZmxhdHRlbkRlZXAoYXJyW2ldLCBuZXdBcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdBcnI7XG4gIH1cblxuICB2YXIgZGVmYXVsdEdldFRhYmxlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VGFibGVQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICByb2xlOiAndGFibGUnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VGFibGVCb2R5UHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VGFibGVCb2R5UHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgcm9sZTogJ3Jvd2dyb3VwJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEhlYWRlclByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEhlYWRlclByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYuY29sdW1uO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiaGVhZGVyX1wiICsgY29sdW1uLmlkLFxuICAgICAgY29sU3BhbjogY29sdW1uLnRvdGFsVmlzaWJsZUhlYWRlckNvdW50LFxuICAgICAgcm9sZTogJ2NvbHVtbmhlYWRlcidcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRGb290ZXJQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRGb290ZXJQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiZm9vdGVyX1wiICsgY29sdW1uLmlkLFxuICAgICAgY29sU3BhbjogY29sdW1uLnRvdGFsVmlzaWJsZUhlYWRlckNvdW50XG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0SGVhZGVyR3JvdXBQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRIZWFkZXJHcm91cFByb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBpbmRleCA9IF9yZWYzLmluZGV4O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiaGVhZGVyR3JvdXBfXCIgKyBpbmRleCxcbiAgICAgIHJvbGU6ICdyb3cnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Rm9vdGVyR3JvdXBQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRGb290ZXJHcm91cFByb3BzKHByb3BzLCBfcmVmNCkge1xuICAgIHZhciBpbmRleCA9IF9yZWY0LmluZGV4O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiZm9vdGVyR3JvdXBfXCIgKyBpbmRleFxuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFJvd1Byb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFJvd1Byb3BzKHByb3BzLCBfcmVmNSkge1xuICAgIHZhciByb3cgPSBfcmVmNS5yb3c7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJyb3dfXCIgKyByb3cuaWQsXG4gICAgICByb2xlOiAncm93J1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldENlbGxQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRDZWxsUHJvcHMocHJvcHMsIF9yZWY2KSB7XG4gICAgdmFyIGNlbGwgPSBfcmVmNi5jZWxsO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiY2VsbF9cIiArIGNlbGwucm93LmlkICsgXCJfXCIgKyBjZWxsLmNvbHVtbi5pZCxcbiAgICAgIHJvbGU6ICdjZWxsJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlRGVmYXVsdFBsdWdpbkhvb2tzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VPcHRpb25zOiBbXSxcbiAgICAgIHN0YXRlUmVkdWNlcnM6IFtdLFxuICAgICAgdXNlQ29udHJvbGxlZFN0YXRlOiBbXSxcbiAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgY29sdW1uc0RlcHM6IFtdLFxuICAgICAgYWxsQ29sdW1uczogW10sXG4gICAgICBhbGxDb2x1bW5zRGVwczogW10sXG4gICAgICBhY2Nlc3NWYWx1ZTogW10sXG4gICAgICBtYXRlcmlhbGl6ZWRDb2x1bW5zOiBbXSxcbiAgICAgIG1hdGVyaWFsaXplZENvbHVtbnNEZXBzOiBbXSxcbiAgICAgIHVzZUluc3RhbmNlQWZ0ZXJEYXRhOiBbXSxcbiAgICAgIHZpc2libGVDb2x1bW5zOiBbXSxcbiAgICAgIHZpc2libGVDb2x1bW5zRGVwczogW10sXG4gICAgICBoZWFkZXJHcm91cHM6IFtdLFxuICAgICAgaGVhZGVyR3JvdXBzRGVwczogW10sXG4gICAgICB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnM6IFtdLFxuICAgICAgdXNlSW5zdGFuY2U6IFtdLFxuICAgICAgcHJlcGFyZVJvdzogW10sXG4gICAgICBnZXRUYWJsZVByb3BzOiBbZGVmYXVsdEdldFRhYmxlUHJvcHNdLFxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHM6IFtkZWZhdWx0R2V0VGFibGVCb2R5UHJvcHNdLFxuICAgICAgZ2V0SGVhZGVyR3JvdXBQcm9wczogW2RlZmF1bHRHZXRIZWFkZXJHcm91cFByb3BzXSxcbiAgICAgIGdldEZvb3Rlckdyb3VwUHJvcHM6IFtkZWZhdWx0R2V0Rm9vdGVyR3JvdXBQcm9wc10sXG4gICAgICBnZXRIZWFkZXJQcm9wczogW2RlZmF1bHRHZXRIZWFkZXJQcm9wc10sXG4gICAgICBnZXRGb290ZXJQcm9wczogW2RlZmF1bHRHZXRGb290ZXJQcm9wc10sXG4gICAgICBnZXRSb3dQcm9wczogW2RlZmF1bHRHZXRSb3dQcm9wc10sXG4gICAgICBnZXRDZWxsUHJvcHM6IFtkZWZhdWx0R2V0Q2VsbFByb3BzXSxcbiAgICAgIHVzZUZpbmFsSW5zdGFuY2U6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRIaWRkZW5Db2x1bW5zID0gJ3Jlc2V0SGlkZGVuQ29sdW1ucyc7XG4gIGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbiA9ICd0b2dnbGVIaWRlQ29sdW1uJztcbiAgYWN0aW9ucy5zZXRIaWRkZW5Db2x1bW5zID0gJ3NldEhpZGRlbkNvbHVtbnMnO1xuICBhY3Rpb25zLnRvZ2dsZUhpZGVBbGxDb2x1bW5zID0gJ3RvZ2dsZUhpZGVBbGxDb2x1bW5zJztcbiAgdmFyIHVzZUNvbHVtblZpc2liaWxpdHkgPSBmdW5jdGlvbiB1c2VDb2x1bW5WaXNpYmlsaXR5KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VG9nZ2xlSGlkZGVuUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUhpZGRlblByb3BzXTtcbiAgICBob29rcy5nZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlcik7XG4gICAgaG9va3MudXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zLnB1c2godXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zKTtcbiAgICBob29rcy5oZWFkZXJHcm91cHNEZXBzLnB1c2goZnVuY3Rpb24gKGRlcHMsIF9yZWYpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zXSk7XG4gICAgfSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSk7XG4gIH07XG4gIHVzZUNvbHVtblZpc2liaWxpdHkucGx1Z2luTmFtZSA9ICd1c2VDb2x1bW5WaXNpYmlsaXR5JztcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUhpZGRlblByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUhpZGRlblByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgY29sdW1uLnRvZ2dsZUhpZGRlbighZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBjb2x1bW4uaXNWaXNpYmxlLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQ29sdW1uIFZpc2libGUnXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMocHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjMuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgaW5zdGFuY2UudG9nZ2xlSGlkZUFsbENvbHVtbnMoIWUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogIWluc3RhbmNlLmFsbENvbHVtbnNIaWRkZW4gJiYgIWluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnMubGVuZ3RoLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQWxsIENvbHVtbnMgSGlkZGVuJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6ICFpbnN0YW5jZS5hbGxDb2x1bW5zSGlkZGVuICYmIGluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnMubGVuZ3RoXG4gICAgfV07XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEhpZGRlbkNvbHVtbnMpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmhpZGRlbkNvbHVtbnMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uKSB7XG4gICAgICB2YXIgc2hvdWxkID0gdHlwZW9mIGFjdGlvbi52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBhY3Rpb24udmFsdWUgOiAhc3RhdGUuaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhhY3Rpb24uY29sdW1uSWQpO1xuICAgICAgdmFyIGhpZGRlbkNvbHVtbnMgPSBzaG91bGQgPyBbXS5jb25jYXQoc3RhdGUuaGlkZGVuQ29sdW1ucywgW2FjdGlvbi5jb2x1bW5JZF0pIDogc3RhdGUuaGlkZGVuQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQgIT09IGFjdGlvbi5jb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBoaWRkZW5Db2x1bW5zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0SGlkZGVuQ29sdW1ucykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBmdW5jdGlvbmFsVXBkYXRlKGFjdGlvbi52YWx1ZSwgc3RhdGUuaGlkZGVuQ29sdW1ucylcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVIaWRlQWxsQ29sdW1ucykge1xuICAgICAgdmFyIHNob3VsZEFsbCA9IHR5cGVvZiBhY3Rpb24udmFsdWUgIT09ICd1bmRlZmluZWQnID8gYWN0aW9uLnZhbHVlIDogIXN0YXRlLmhpZGRlbkNvbHVtbnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBzaG91bGRBbGwgPyBpbnN0YW5jZS5hbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICB9KSA6IFtdXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMoaW5zdGFuY2UpIHtcbiAgICB2YXIgaGVhZGVycyA9IGluc3RhbmNlLmhlYWRlcnMsXG4gICAgICAgIGhpZGRlbkNvbHVtbnMgPSBpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zO1xuICAgIHZhciBpc01vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gICAgaWYgKCFpc01vdW50ZWRSZWYuY3VycmVudCkgO1xuXG4gICAgdmFyIGhhbmRsZUNvbHVtbiA9IGZ1bmN0aW9uIGhhbmRsZUNvbHVtbihjb2x1bW4sIHBhcmVudFZpc2libGUpIHtcbiAgICAgIGNvbHVtbi5pc1Zpc2libGUgPSBwYXJlbnRWaXNpYmxlICYmICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgICB2YXIgdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSAwO1xuXG4gICAgICBpZiAoY29sdW1uLmhlYWRlcnMgJiYgY29sdW1uLmhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbHVtbi5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YkNvbHVtbikge1xuICAgICAgICAgIHJldHVybiB0b3RhbFZpc2libGVIZWFkZXJDb3VudCArPSBoYW5kbGVDb2x1bW4oc3ViQ29sdW1uLCBjb2x1bW4uaXNWaXNpYmxlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IGNvbHVtbi5pc1Zpc2libGUgPyAxIDogMDtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLnRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQ7XG4gICAgICByZXR1cm4gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQ7XG4gICAgfTtcblxuICAgIHZhciB0b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IDA7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJIZWFkZXIpIHtcbiAgICAgIHJldHVybiB0b3RhbFZpc2libGVIZWFkZXJDb3VudCArPSBoYW5kbGVDb2x1bW4oc3ViSGVhZGVyLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgdmFyIGNvbHVtbnMgPSBpbnN0YW5jZS5jb2x1bW5zLFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgaGlkZGVuQ29sdW1ucyA9IGluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnMsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRIaSA9IGluc3RhbmNlLmF1dG9SZXNldEhpZGRlbkNvbHVtbnMsXG4gICAgICAgIGF1dG9SZXNldEhpZGRlbkNvbHVtbnMgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0SGkgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0SGk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICB2YXIgYWxsQ29sdW1uc0hpZGRlbiA9IGFsbENvbHVtbnMubGVuZ3RoID09PSBoaWRkZW5Db2x1bW5zLmxlbmd0aDtcbiAgICB2YXIgdG9nZ2xlSGlkZUNvbHVtbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbixcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBzZXRIaWRkZW5Db2x1bW5zID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEhpZGRlbkNvbHVtbnMsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZUhpZGVBbGxDb2x1bW5zID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUhpZGVBbGxDb2x1bW5zLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBnZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uLnRvZ2dsZUhpZGRlbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uLFxuICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29sdW1uLmdldFRvZ2dsZUhpZGRlblByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVIaWRkZW5Qcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBnZXRBdXRvUmVzZXRIaWRkZW5Db2x1bW5zID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEhpZGRlbkNvbHVtbnMpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEhpZGRlbkNvbHVtbnMoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEhpZGRlbkNvbHVtbnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBjb2x1bW5zXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgYWxsQ29sdW1uc0hpZGRlbjogYWxsQ29sdW1uc0hpZGRlbixcbiAgICAgIHRvZ2dsZUhpZGVDb2x1bW46IHRvZ2dsZUhpZGVDb2x1bW4sXG4gICAgICBzZXRIaWRkZW5Db2x1bW5zOiBzZXRIaWRkZW5Db2x1bW5zLFxuICAgICAgdG9nZ2xlSGlkZUFsbENvbHVtbnM6IHRvZ2dsZUhpZGVBbGxDb2x1bW5zLFxuICAgICAgZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wczogZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wc1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRJbml0aWFsU3RhdGUgPSB7fTtcbiAgdmFyIGRlZmF1bHRDb2x1bW5JbnN0YW5jZSA9IHt9O1xuXG4gIHZhciBkZWZhdWx0UmVkdWNlciA9IGZ1bmN0aW9uIGRlZmF1bHRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24sIHByZXZTdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFN1YlJvd3MgPSBmdW5jdGlvbiBkZWZhdWx0R2V0U3ViUm93cyhyb3csIGluZGV4KSB7XG4gICAgcmV0dXJuIHJvdy5zdWJSb3dzIHx8IFtdO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Um93SWQgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Um93SWQocm93LCBpbmRleCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIFwiXCIgKyAocGFyZW50ID8gW3BhcmVudC5pZCwgaW5kZXhdLmpvaW4oJy4nKSA6IGluZGV4KTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdFVzZUNvbnRyb2xsZWRTdGF0ZSA9IGZ1bmN0aW9uIGRlZmF1bHRVc2VDb250cm9sbGVkU3RhdGUoZCkge1xuICAgIHJldHVybiBkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFwcGx5RGVmYXVsdHMocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGluaXRpYWxTdGF0ZSA9IHByb3BzLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gX3Byb3BzJGluaXRpYWxTdGF0ZSA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxTdGF0ZSA6IF9wcm9wcyRpbml0aWFsU3RhdGUsXG4gICAgICAgIF9wcm9wcyRkZWZhdWx0Q29sdW1uID0gcHJvcHMuZGVmYXVsdENvbHVtbixcbiAgICAgICAgZGVmYXVsdENvbHVtbiA9IF9wcm9wcyRkZWZhdWx0Q29sdW1uID09PSB2b2lkIDAgPyBkZWZhdWx0Q29sdW1uSW5zdGFuY2UgOiBfcHJvcHMkZGVmYXVsdENvbHVtbixcbiAgICAgICAgX3Byb3BzJGdldFN1YlJvd3MgPSBwcm9wcy5nZXRTdWJSb3dzLFxuICAgICAgICBnZXRTdWJSb3dzID0gX3Byb3BzJGdldFN1YlJvd3MgPT09IHZvaWQgMCA/IGRlZmF1bHRHZXRTdWJSb3dzIDogX3Byb3BzJGdldFN1YlJvd3MsXG4gICAgICAgIF9wcm9wcyRnZXRSb3dJZCA9IHByb3BzLmdldFJvd0lkLFxuICAgICAgICBnZXRSb3dJZCA9IF9wcm9wcyRnZXRSb3dJZCA9PT0gdm9pZCAwID8gZGVmYXVsdEdldFJvd0lkIDogX3Byb3BzJGdldFJvd0lkLFxuICAgICAgICBfcHJvcHMkc3RhdGVSZWR1Y2VyID0gcHJvcHMuc3RhdGVSZWR1Y2VyLFxuICAgICAgICBzdGF0ZVJlZHVjZXIgPSBfcHJvcHMkc3RhdGVSZWR1Y2VyID09PSB2b2lkIDAgPyBkZWZhdWx0UmVkdWNlciA6IF9wcm9wcyRzdGF0ZVJlZHVjZXIsXG4gICAgICAgIF9wcm9wcyR1c2VDb250cm9sbGVkUyA9IHByb3BzLnVzZUNvbnRyb2xsZWRTdGF0ZSxcbiAgICAgICAgdXNlQ29udHJvbGxlZFN0YXRlID0gX3Byb3BzJHVzZUNvbnRyb2xsZWRTID09PSB2b2lkIDAgPyBkZWZhdWx0VXNlQ29udHJvbGxlZFN0YXRlIDogX3Byb3BzJHVzZUNvbnRyb2xsZWRTLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImluaXRpYWxTdGF0ZVwiLCBcImRlZmF1bHRDb2x1bW5cIiwgXCJnZXRTdWJSb3dzXCIsIFwiZ2V0Um93SWRcIiwgXCJzdGF0ZVJlZHVjZXJcIiwgXCJ1c2VDb250cm9sbGVkU3RhdGVcIl0pO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICAgIGRlZmF1bHRDb2x1bW46IGRlZmF1bHRDb2x1bW4sXG4gICAgICBnZXRTdWJSb3dzOiBnZXRTdWJSb3dzLFxuICAgICAgZ2V0Um93SWQ6IGdldFJvd0lkLFxuICAgICAgc3RhdGVSZWR1Y2VyOiBzdGF0ZVJlZHVjZXIsXG4gICAgICB1c2VDb250cm9sbGVkU3RhdGU6IHVzZUNvbnRyb2xsZWRTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHVzZVRhYmxlID0gZnVuY3Rpb24gdXNlVGFibGUocHJvcHMpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBwbHVnaW5zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBkZWZhdWx0IHByb3BzXG4gICAgcHJvcHMgPSBhcHBseURlZmF1bHRzKHByb3BzKTsgLy8gQWRkIGNvcmUgcGx1Z2luc1xuXG4gICAgcGx1Z2lucyA9IFt1c2VDb2x1bW5WaXNpYmlsaXR5XS5jb25jYXQocGx1Z2lucyk7IC8vIENyZWF0ZSB0aGUgdGFibGUgaW5zdGFuY2VcblxuICAgIHZhciBpbnN0YW5jZVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7IC8vIENyZWF0ZSBhIGdldHRlciBmb3IgdGhlIGluc3RhbmNlIChoZWxwcyBhdm9pZCBhIGxvdCBvZiBwb3RlbnRpYWwgbWVtb3J5IGxlYWtzKVxuXG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlUmVmLmN1cnJlbnQpOyAvLyBBc3NpZ24gdGhlIHByb3BzLCBwbHVnaW5zIGFuZCBob29rcyB0byB0aGUgaW5zdGFuY2VcblxuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgaG9va3M6IG1ha2VEZWZhdWx0UGx1Z2luSG9va3MoKVxuICAgIH0pKTsgLy8gQWxsb3cgcGx1Z2lucyB0byByZWdpc3RlciBob29rcyBhcyBlYXJseSBhcyBwb3NzaWJsZVxuXG4gICAgcGx1Z2lucy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBwbHVnaW4oZ2V0SW5zdGFuY2UoKS5ob29rcyk7XG4gICAgfSk7IC8vIENvbnN1bWUgYWxsIGhvb2tzIGFuZCBtYWtlIGEgZ2V0dGVyIGZvciB0aGVtXG5cbiAgICB2YXIgZ2V0SG9va3MgPSB1c2VHZXRMYXRlc3QoZ2V0SW5zdGFuY2UoKS5ob29rcyk7XG4gICAgZ2V0SW5zdGFuY2UoKS5nZXRIb29rcyA9IGdldEhvb2tzO1xuICAgIGRlbGV0ZSBnZXRJbnN0YW5jZSgpLmhvb2tzOyAvLyBBbGxvdyB1c2VPcHRpb25zIGhvb2tzIHRvIG1vZGlmeSB0aGUgb3B0aW9ucyBjb21pbmcgaW50byB0aGUgdGFibGVcblxuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwgcmVkdWNlSG9va3MoZ2V0SG9va3MoKS51c2VPcHRpb25zLCBhcHBseURlZmF1bHRzKHByb3BzKSkpO1xuXG4gICAgdmFyIF9nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlKCksXG4gICAgICAgIGRhdGEgPSBfZ2V0SW5zdGFuY2UuZGF0YSxcbiAgICAgICAgdXNlckNvbHVtbnMgPSBfZ2V0SW5zdGFuY2UuY29sdW1ucyxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gX2dldEluc3RhbmNlLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgZGVmYXVsdENvbHVtbiA9IF9nZXRJbnN0YW5jZS5kZWZhdWx0Q29sdW1uLFxuICAgICAgICBnZXRTdWJSb3dzID0gX2dldEluc3RhbmNlLmdldFN1YlJvd3MsXG4gICAgICAgIGdldFJvd0lkID0gX2dldEluc3RhbmNlLmdldFJvd0lkLFxuICAgICAgICBzdGF0ZVJlZHVjZXIgPSBfZ2V0SW5zdGFuY2Uuc3RhdGVSZWR1Y2VyLFxuICAgICAgICB1c2VDb250cm9sbGVkU3RhdGUgPSBfZ2V0SW5zdGFuY2UudXNlQ29udHJvbGxlZFN0YXRlOyAvLyBTZXR1cCB1c2VyIHJlZHVjZXIgcmVmXG5cblxuICAgIHZhciBnZXRTdGF0ZVJlZHVjZXIgPSB1c2VHZXRMYXRlc3Qoc3RhdGVSZWR1Y2VyKTsgLy8gQnVpbGQgdGhlIHJlZHVjZXJcblxuICAgIHZhciByZWR1Y2VyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIC8vIERldGVjdCBpbnZhbGlkIGFjdGlvbnNcbiAgICAgIGlmICghYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIEFjdGlvbiDwn5GGJyk7XG4gICAgICB9IC8vIFJlZHVjZSB0aGUgc3RhdGUgZnJvbSBhbGwgcGx1Z2luIHJlZHVjZXJzXG5cblxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChnZXRIb29rcygpLnN0YXRlUmVkdWNlcnMsIEFycmF5LmlzQXJyYXkoZ2V0U3RhdGVSZWR1Y2VyKCkpID8gZ2V0U3RhdGVSZWR1Y2VyKCkgOiBbZ2V0U3RhdGVSZWR1Y2VyKCldKS5yZWR1Y2UoZnVuY3Rpb24gKHMsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIocywgYWN0aW9uLCBzdGF0ZSwgZ2V0SW5zdGFuY2UoKSkgfHwgcztcbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9LCBbZ2V0SG9va3MsIGdldFN0YXRlUmVkdWNlciwgZ2V0SW5zdGFuY2VdKTsgLy8gU3RhcnQgdGhlIHJlZHVjZXJcblxuICAgIHZhciBfUmVhY3QkdXNlUmVkdWNlciA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlcihpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5pbml0XG4gICAgICB9KTtcbiAgICB9KSxcbiAgICAgICAgcmVkdWNlclN0YXRlID0gX1JlYWN0JHVzZVJlZHVjZXJbMF0sXG4gICAgICAgIGRpc3BhdGNoID0gX1JlYWN0JHVzZVJlZHVjZXJbMV07IC8vIEFsbG93IHRoZSB1c2VyIHRvIGNvbnRyb2wgdGhlIGZpbmFsIHN0YXRlIHdpdGggaG9va3NcblxuXG4gICAgdmFyIHN0YXRlID0gcmVkdWNlSG9va3MoW10uY29uY2F0KGdldEhvb2tzKCkudXNlQ29udHJvbGxlZFN0YXRlLCBbdXNlQ29udHJvbGxlZFN0YXRlXSksIHJlZHVjZXJTdGF0ZSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgIH0pOyAvLyBEZWNvcmF0ZSBBbGwgdGhlIGNvbHVtbnNcblxuICAgIHZhciBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbGlua0NvbHVtblN0cnVjdHVyZShyZWR1Y2VIb29rcyhnZXRIb29rcygpLmNvbHVtbnMsIHVzZXJDb2x1bW5zLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KSk7XG4gICAgfSwgW2dldEhvb2tzLCBnZXRJbnN0YW5jZSwgdXNlckNvbHVtbnNdLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLmNvbHVtbnNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpO1xuICAgIGdldEluc3RhbmNlKCkuY29sdW1ucyA9IGNvbHVtbnM7IC8vIEdldCB0aGUgZmxhdCBsaXN0IG9mIGFsbCBjb2x1bW5zIGFuZCBhbGxvdyBob29rcyB0byBkZWNvcmF0ZVxuICAgIC8vIHRob3NlIGNvbHVtbnMgKGFuZCB0cmlnZ2VyIHRoaXMgbWVtb2l6YXRpb24gdmlhIGRlcHMpXG5cbiAgICB2YXIgYWxsQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuYWxsQ29sdW1ucywgZmxhdHRlbkNvbHVtbnMoY29sdW1ucyksIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0pLm1hcChhc3NpZ25Db2x1bW5BY2Nlc3Nvcik7XG4gICAgfSwgW2NvbHVtbnMsIGdldEhvb2tzLCBnZXRJbnN0YW5jZV0uY29uY2F0KHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuYWxsQ29sdW1uc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5hbGxDb2x1bW5zID0gYWxsQ29sdW1uczsgLy8gQWNjZXNzIHRoZSByb3cgbW9kZWwgdXNpbmcgaW5pdGlhbCBjb2x1bW5zXG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByb3dzID0gW107XG4gICAgICB2YXIgZmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciByb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIGFsbENvbHVtbnNRdWV1ZSA9IFtdLmNvbmNhdChhbGxDb2x1bW5zKTtcblxuICAgICAgd2hpbGUgKGFsbENvbHVtbnNRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnNRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBhY2Nlc3NSb3dzRm9yQ29sdW1uKHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgZmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgICAgIHJvd3NCeUlkOiByb3dzQnlJZCxcbiAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICBnZXRSb3dJZDogZ2V0Um93SWQsXG4gICAgICAgICAgZ2V0U3ViUm93czogZ2V0U3ViUm93cyxcbiAgICAgICAgICBhY2Nlc3NWYWx1ZUhvb2tzOiBnZXRIb29rcygpLmFjY2Vzc1ZhbHVlLFxuICAgICAgICAgIGdldEluc3RhbmNlOiBnZXRJbnN0YW5jZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93cywgcm93c0J5SWRdO1xuICAgIH0sIFthbGxDb2x1bW5zLCBkYXRhLCBnZXRSb3dJZCwgZ2V0U3ViUm93cywgZ2V0SG9va3MsIGdldEluc3RhbmNlXSksXG4gICAgICAgIHJvd3MgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgZmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgcm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXTtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwge1xuICAgICAgcm93czogcm93cyxcbiAgICAgIGluaXRpYWxSb3dzOiBbXS5jb25jYXQocm93cyksXG4gICAgICBmbGF0Um93czogZmxhdFJvd3MsXG4gICAgICByb3dzQnlJZDogcm93c0J5SWQgLy8gbWF0ZXJpYWxpemVkQ29sdW1ucyxcblxuICAgIH0pO1xuICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnVzZUluc3RhbmNlQWZ0ZXJEYXRhLCBnZXRJbnN0YW5jZSgpKTsgLy8gR2V0IHRoZSBmbGF0IGxpc3Qgb2YgYWxsIGNvbHVtbnMgQUZURVIgdGhlIHJvd3NcbiAgICAvLyBoYXZlIGJlZW4gYWNjZXNzLCBhbmQgYWxsb3cgaG9va3MgdG8gZGVjb3JhdGVcbiAgICAvLyB0aG9zZSBjb2x1bW5zIChhbmQgdHJpZ2dlciB0aGlzIG1lbW9pemF0aW9uIHZpYSBkZXBzKVxuXG4gICAgdmFyIHZpc2libGVDb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlSG9va3MoZ2V0SG9va3MoKS52aXNpYmxlQ29sdW1ucywgYWxsQ29sdW1ucywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSkubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkZWNvcmF0ZUNvbHVtbihkLCBkZWZhdWx0Q29sdW1uKTtcbiAgICAgIH0pO1xuICAgIH0sIFtnZXRIb29rcywgYWxsQ29sdW1ucywgZ2V0SW5zdGFuY2UsIGRlZmF1bHRDb2x1bW5dLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLnZpc2libGVDb2x1bW5zRGVwcywgW10sIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSkpKTsgLy8gQ29tYmluZSBuZXcgdmlzaWJsZSBjb2x1bW5zIHdpdGggYWxsIGNvbHVtbnNcblxuICAgIGFsbENvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gW10uY29uY2F0KHZpc2libGVDb2x1bW5zKTtcbiAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIGlmICghY29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbi5pZDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBjb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9LCBbYWxsQ29sdW1ucywgdmlzaWJsZUNvbHVtbnNdKTtcbiAgICBnZXRJbnN0YW5jZSgpLmFsbENvbHVtbnMgPSBhbGxDb2x1bW5zO1xuXG4gICAge1xuICAgICAgdmFyIGR1cGxpY2F0ZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG4gICAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pICE9PSBpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkdXBsaWNhdGVDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmluZm8oYWxsQ29sdW1ucyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZSBjb2x1bW5zIHdlcmUgZm91bmQgd2l0aCBpZHM6IFxcXCJcIiArIGR1cGxpY2F0ZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pLmpvaW4oJywgJykgKyBcIlxcXCIgaW4gdGhlIGNvbHVtbnMgYXJyYXkgYWJvdmVcIik7XG4gICAgICB9XG4gICAgfSAvLyBNYWtlIHRoZSBoZWFkZXJHcm91cHNcblxuXG4gICAgdmFyIGhlYWRlckdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuaGVhZGVyR3JvdXBzLCBtYWtlSGVhZGVyR3JvdXBzKHZpc2libGVDb2x1bW5zLCBkZWZhdWx0Q29sdW1uKSwgZ2V0SW5zdGFuY2UoKSk7XG4gICAgfSwgW2dldEhvb2tzLCB2aXNpYmxlQ29sdW1ucywgZGVmYXVsdENvbHVtbiwgZ2V0SW5zdGFuY2VdLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLmhlYWRlckdyb3Vwc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJHcm91cHMgPSBoZWFkZXJHcm91cHM7IC8vIEdldCB0aGUgZmlyc3QgbGV2ZWwgb2YgaGVhZGVyc1xuXG4gICAgdmFyIGhlYWRlcnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoZWFkZXJHcm91cHMubGVuZ3RoID8gaGVhZGVyR3JvdXBzWzBdLmhlYWRlcnMgOiBbXTtcbiAgICB9LCBbaGVhZGVyR3JvdXBzXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJzID0gaGVhZGVyczsgLy8gUHJvdmlkZSBhIGZsYXQgaGVhZGVyIGxpc3QgZm9yIHV0aWxpdGllc1xuXG4gICAgZ2V0SW5zdGFuY2UoKS5mbGF0SGVhZGVycyA9IGhlYWRlckdyb3Vwcy5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgaGVhZGVyR3JvdXApIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoYWxsLCBoZWFkZXJHcm91cC5oZWFkZXJzKTtcbiAgICB9LCBbXSk7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zLCBnZXRJbnN0YW5jZSgpKTsgLy8gRmlsdGVyIGNvbHVtbnMgZG93biB0byB2aXNpYmxlIG9uZXNcblxuICAgIHZhciB2aXNpYmxlQ29sdW1uc0RlcCA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuaXNWaXNpYmxlO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgfSkuc29ydCgpLmpvaW4oJ18nKTtcbiAgICB2aXNpYmxlQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pc1Zpc2libGU7XG4gICAgICB9KTtcbiAgICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW3Zpc2libGVDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc0RlcF0pO1xuICAgIGdldEluc3RhbmNlKCkudmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1uczsgLy8gSGVhZGVyIFZpc2liaWxpdHkgaXMgbmVlZGVkIGJ5IHRoaXMgcG9pbnRcblxuICAgIHZhciBfY2FsY3VsYXRlSGVhZGVyV2lkdGggPSBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoaGVhZGVycyksXG4gICAgICAgIHRvdGFsQ29sdW1uc01pbldpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoWzBdLFxuICAgICAgICB0b3RhbENvbHVtbnNXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aFsxXSxcbiAgICAgICAgdG90YWxDb2x1bW5zTWF4V2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGhbMl07XG5cbiAgICBnZXRJbnN0YW5jZSgpLnRvdGFsQ29sdW1uc01pbldpZHRoID0gdG90YWxDb2x1bW5zTWluV2lkdGg7XG4gICAgZ2V0SW5zdGFuY2UoKS50b3RhbENvbHVtbnNXaWR0aCA9IHRvdGFsQ29sdW1uc1dpZHRoO1xuICAgIGdldEluc3RhbmNlKCkudG90YWxDb2x1bW5zTWF4V2lkdGggPSB0b3RhbENvbHVtbnNNYXhXaWR0aDtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VJbnN0YW5jZSwgZ2V0SW5zdGFuY2UoKSkgLy8gRWFjaCBtYXRlcmlhbGl6ZWQgaGVhZGVyIG5lZWRzIHRvIGJlIGFzc2lnbmVkIGEgcmVuZGVyIGZ1bmN0aW9uIGFuZCBvdGhlclxuICAgIC8vIHByb3AgZ2V0dGVyIHByb3BlcnRpZXMgaGVyZS5cbiAgICA7XG4gICAgW10uY29uY2F0KGdldEluc3RhbmNlKCkuZmxhdEhlYWRlcnMsIGdldEluc3RhbmNlKCkuYWxsQ29sdW1ucykuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAvLyBHaXZlIGNvbHVtbnMvaGVhZGVycyByZW5kZXJpbmcgcG93ZXJcbiAgICAgIGNvbHVtbi5yZW5kZXIgPSBtYWtlUmVuZGVyZXIoZ2V0SW5zdGFuY2UoKSwgY29sdW1uKTsgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgYSBkZWZhdWx0IGdldEhlYWRlclByb3BzXG5cbiAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0SGVhZGVyUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTsgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgYSBkZWZhdWx0IGdldEZvb3RlclByb3BzXG5cbiAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Rm9vdGVyUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBnZXRJbnN0YW5jZSgpLmhlYWRlckdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhlYWRlckdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24gKGhlYWRlckdyb3VwLCBpKSB7XG4gICAgICAgIC8vIEZpbHRlciBvdXQgYW55IGhlYWRlcnMgYW5kIGhlYWRlckdyb3VwcyB0aGF0IGRvbid0IGhhdmUgdmlzaWJsZSBjb2x1bW5zXG4gICAgICAgIGhlYWRlckdyb3VwLmhlYWRlcnMgPSBoZWFkZXJHcm91cC5oZWFkZXJzLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgdmFyIHJlY3Vyc2UgPSBmdW5jdGlvbiByZWN1cnNlKGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgIGlmIChjb2x1bW4uaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNlKGNvbHVtbi5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4uaXNWaXNpYmxlO1xuICAgICAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoY29sdW1uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN1cnNlKGNvbHVtbi5oZWFkZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29sdW1uLmlzVmlzaWJsZTtcbiAgICAgICAgfSk7IC8vIEdpdmUgaGVhZGVyR3JvdXBzIGdldFJvd1Byb3BzXG5cbiAgICAgICAgaWYgKGhlYWRlckdyb3VwLmhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0SGVhZGVyR3JvdXBQcm9wcywge1xuICAgICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgICBoZWFkZXJHcm91cDogaGVhZGVyR3JvdXAsXG4gICAgICAgICAgICBpbmRleDogaVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhlYWRlckdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEZvb3Rlckdyb3VwUHJvcHMsIHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgICAgaGVhZGVyR3JvdXA6IGhlYWRlckdyb3VwLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sIFtoZWFkZXJHcm91cHMsIGdldEluc3RhbmNlLCBnZXRIb29rc10pO1xuICAgIGdldEluc3RhbmNlKCkuZm9vdGVyR3JvdXBzID0gW10uY29uY2F0KGdldEluc3RhbmNlKCkuaGVhZGVyR3JvdXBzKS5yZXZlcnNlKCk7IC8vIFRoZSBwcmVwYXJlUm93IGZ1bmN0aW9uIGlzIGFic29sdXRlbHkgbmVjZXNzYXJ5IGFuZCBNVVNUIGJlIGNhbGxlZCBvblxuICAgIC8vIGFueSByb3dzIHRoZSB1c2VyIHdpc2hlcyB0byBiZSBkaXNwbGF5ZWQuXG5cbiAgICBnZXRJbnN0YW5jZSgpLnByZXBhcmVSb3cgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocm93KSB7XG4gICAgICByb3cuZ2V0Um93UHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFJvd1Byb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICByb3c6IHJvd1xuICAgICAgfSk7IC8vIEJ1aWxkIHRoZSB2aXNpYmxlIGNlbGxzIGZvciBlYWNoIHJvd1xuXG4gICAgICByb3cuYWxsQ2VsbHMgPSBhbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJvdy52YWx1ZXNbY29sdW1uLmlkXTtcbiAgICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07IC8vIEdpdmUgZWFjaCBjZWxsIGEgZ2V0Q2VsbFByb3BzIGJhc2VcblxuICAgICAgICBjZWxsLmdldENlbGxQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Q2VsbFByb3BzLCB7XG4gICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgY2VsbDogY2VsbFxuICAgICAgICB9KTsgLy8gR2l2ZSBlYWNoIGNlbGwgYSByZW5kZXJlciBmdW5jdGlvbiAoc3VwcG9ydHMgbXVsdGlwbGUgcmVuZGVyZXJzKVxuXG4gICAgICAgIGNlbGwucmVuZGVyID0gbWFrZVJlbmRlcmVyKGdldEluc3RhbmNlKCksIGNvbHVtbiwge1xuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgIH0pO1xuICAgICAgcm93LmNlbGxzID0gdmlzaWJsZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIHJvdy5hbGxDZWxscy5maW5kKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGNlbGwuY29sdW1uLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIG5lZWQgdG8gYXBwbHkgYW55IHJvdyBzcGVjaWZpYyBob29rcyAodXNlRXhwYW5kZWQgcmVxdWlyZXMgdGhpcylcblxuICAgICAgbG9vcEhvb2tzKGdldEhvb2tzKCkucHJlcGFyZVJvdywgcm93LCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KTtcbiAgICB9LCBbZ2V0SG9va3MsIGdldEluc3RhbmNlLCBhbGxDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc10pO1xuICAgIGdldEluc3RhbmNlKCkuZ2V0VGFibGVQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VGFibGVQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBnZXRJbnN0YW5jZSgpLmdldFRhYmxlQm9keVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUYWJsZUJvZHlQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VGaW5hbEluc3RhbmNlLCBnZXRJbnN0YW5jZSgpKTtcbiAgICByZXR1cm4gZ2V0SW5zdGFuY2UoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoaGVhZGVycywgbGVmdCkge1xuICAgIGlmIChsZWZ0ID09PSB2b2lkIDApIHtcbiAgICAgIGxlZnQgPSAwO1xuICAgIH1cblxuICAgIHZhciBzdW1Ub3RhbE1pbldpZHRoID0gMDtcbiAgICB2YXIgc3VtVG90YWxXaWR0aCA9IDA7XG4gICAgdmFyIHN1bVRvdGFsTWF4V2lkdGggPSAwO1xuICAgIHZhciBzdW1Ub3RhbEZsZXhXaWR0aCA9IDA7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIHZhciBzdWJIZWFkZXJzID0gaGVhZGVyLmhlYWRlcnM7XG4gICAgICBoZWFkZXIudG90YWxMZWZ0ID0gbGVmdDtcblxuICAgICAgaWYgKHN1YkhlYWRlcnMgJiYgc3ViSGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9jYWxjdWxhdGVIZWFkZXJXaWR0aDIgPSBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoc3ViSGVhZGVycywgbGVmdCksXG4gICAgICAgICAgICB0b3RhbE1pbldpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoMlswXSxcbiAgICAgICAgICAgIHRvdGFsV2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzFdLFxuICAgICAgICAgICAgdG90YWxNYXhXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbMl0sXG4gICAgICAgICAgICB0b3RhbEZsZXhXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbM107XG5cbiAgICAgICAgaGVhZGVyLnRvdGFsTWluV2lkdGggPSB0b3RhbE1pbldpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxXaWR0aCA9IHRvdGFsV2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbE1heFdpZHRoID0gdG90YWxNYXhXaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsRmxleFdpZHRoID0gdG90YWxGbGV4V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIudG90YWxNaW5XaWR0aCA9IGhlYWRlci5taW5XaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsV2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChoZWFkZXIubWluV2lkdGgsIGhlYWRlci53aWR0aCksIGhlYWRlci5tYXhXaWR0aCk7XG4gICAgICAgIGhlYWRlci50b3RhbE1heFdpZHRoID0gaGVhZGVyLm1heFdpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxGbGV4V2lkdGggPSBoZWFkZXIuY2FuUmVzaXplID8gaGVhZGVyLnRvdGFsV2lkdGggOiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVhZGVyLmlzVmlzaWJsZSkge1xuICAgICAgICBsZWZ0ICs9IGhlYWRlci50b3RhbFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbE1pbldpZHRoICs9IGhlYWRlci50b3RhbE1pbldpZHRoO1xuICAgICAgICBzdW1Ub3RhbFdpZHRoICs9IGhlYWRlci50b3RhbFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbE1heFdpZHRoICs9IGhlYWRlci50b3RhbE1heFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbEZsZXhXaWR0aCArPSBoZWFkZXIudG90YWxGbGV4V2lkdGg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtzdW1Ub3RhbE1pbldpZHRoLCBzdW1Ub3RhbFdpZHRoLCBzdW1Ub3RhbE1heFdpZHRoLCBzdW1Ub3RhbEZsZXhXaWR0aF07XG4gIH1cblxuICBmdW5jdGlvbiBhY2Nlc3NSb3dzRm9yQ29sdW1uKF9yZWYpIHtcbiAgICB2YXIgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgICAgcm93cyA9IF9yZWYucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBfcmVmLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IF9yZWYucm93c0J5SWQsXG4gICAgICAgIGNvbHVtbiA9IF9yZWYuY29sdW1uLFxuICAgICAgICBnZXRSb3dJZCA9IF9yZWYuZ2V0Um93SWQsXG4gICAgICAgIGdldFN1YlJvd3MgPSBfcmVmLmdldFN1YlJvd3MsXG4gICAgICAgIGFjY2Vzc1ZhbHVlSG9va3MgPSBfcmVmLmFjY2Vzc1ZhbHVlSG9va3MsXG4gICAgICAgIGdldEluc3RhbmNlID0gX3JlZi5nZXRJbnN0YW5jZTtcblxuICAgIC8vIEFjY2VzcyB0aGUgcm93J3MgZGF0YSBjb2x1bW4tYnktY29sdW1uXG4gICAgLy8gV2UgZG8gaXQgdGhpcyB3YXkgc28gd2UgY2FuIGluY3JlbWVudGFsbHkgYWRkIG1hdGVyaWFsaXplZFxuICAgIC8vIGNvbHVtbnMgYWZ0ZXIgdGhlIGZpcnN0IHBhc3MgYW5kIGF2b2lkIGV4Y2Vzc2l2ZSBsb29waW5nXG4gICAgdmFyIGFjY2Vzc1JvdyA9IGZ1bmN0aW9uIGFjY2Vzc1JvdyhvcmlnaW5hbFJvdywgcm93SW5kZXgsIGRlcHRoLCBwYXJlbnQsIHBhcmVudFJvd3MpIHtcbiAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gS2VlcCB0aGUgb3JpZ2luYWwgcmVmZXJlbmNlIGFyb3VuZFxuICAgICAgdmFyIG9yaWdpbmFsID0gb3JpZ2luYWxSb3c7XG4gICAgICB2YXIgaWQgPSBnZXRSb3dJZChvcmlnaW5hbFJvdywgcm93SW5kZXgsIHBhcmVudCk7XG4gICAgICB2YXIgcm93ID0gcm93c0J5SWRbaWRdOyAvLyBJZiB0aGUgcm93IGhhc24ndCBiZWVuIGNyZWF0ZWQsIGxldCdzIG1ha2UgaXRcblxuICAgICAgaWYgKCFyb3cpIHtcbiAgICAgICAgcm93ID0ge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBvcmlnaW5hbDogb3JpZ2luYWwsXG4gICAgICAgICAgaW5kZXg6IHJvd0luZGV4LFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBjZWxsczogW3t9XSAvLyBUaGlzIGlzIGEgZHVtbXkgY2VsbFxuXG4gICAgICAgIH07IC8vIE92ZXJyaWRlIGNvbW1vbiBhcnJheSBmdW5jdGlvbnMgKGFuZCB0aGUgZHVtbXkgY2VsbCdzIGdldENlbGxQcm9wcyBmdW5jdGlvbilcbiAgICAgICAgLy8gdG8gc2hvdyBhbiBlcnJvciBpZiBpdCBpcyBhY2Nlc3NlZCB3aXRob3V0IGNhbGxpbmcgcHJlcGFyZVJvd1xuXG4gICAgICAgIHJvdy5jZWxscy5tYXAgPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZztcbiAgICAgICAgcm93LmNlbGxzLmZpbHRlciA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nO1xuICAgICAgICByb3cuY2VsbHMuZm9yRWFjaCA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nO1xuICAgICAgICByb3cuY2VsbHNbMF0uZ2V0Q2VsbFByb3BzID0gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmc7IC8vIENyZWF0ZSB0aGUgY2VsbHMgYW5kIHZhbHVlc1xuXG4gICAgICAgIHJvdy52YWx1ZXMgPSB7fTsgLy8gUHVzaCB0aGlzIHJvdyBpbnRvIHRoZSBwYXJlbnRSb3dzIGFycmF5XG5cbiAgICAgICAgcGFyZW50Um93cy5wdXNoKHJvdyk7IC8vIEtlZXAgdHJhY2sgb2YgZXZlcnkgcm93IGluIGEgZmxhdCBhcnJheVxuXG4gICAgICAgIGZsYXRSb3dzLnB1c2gocm93KTsgLy8gQWxzbyBrZWVwIHRyYWNrIG9mIGV2ZXJ5IHJvdyBieSBpdHMgSURcblxuICAgICAgICByb3dzQnlJZFtpZF0gPSByb3c7IC8vIEdldCB0aGUgb3JpZ2luYWwgc3Vicm93c1xuXG4gICAgICAgIHJvdy5vcmlnaW5hbFN1YlJvd3MgPSBnZXRTdWJSb3dzKG9yaWdpbmFsUm93LCByb3dJbmRleCk7IC8vIFRoZW4gcmVjdXJzaXZlbHkgYWNjZXNzIHRoZW1cblxuICAgICAgICBpZiAocm93Lm9yaWdpbmFsU3ViUm93cykge1xuICAgICAgICAgIHZhciBzdWJSb3dzID0gW107XG4gICAgICAgICAgcm93Lm9yaWdpbmFsU3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzUm93KGQsIGksIGRlcHRoICsgMSwgcm93LCBzdWJSb3dzKTtcbiAgICAgICAgICB9KTsgLy8gS2VlcCB0aGUgbmV3IHN1YlJvd3MgYXJyYXkgb24gdGhlIHJvd1xuXG4gICAgICAgICAgcm93LnN1YlJvd3MgPSBzdWJSb3dzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJvdy5zdWJSb3dzKSB7XG4gICAgICAgIC8vIElmIHRoZSByb3cgZXhpc3RzLCB0aGVuIGl0J3MgYWxyZWFkeSBiZWVuIGFjY2Vzc2VkXG4gICAgICAgIC8vIEtlZXAgcmVjdXJzaW5nLCBidXQgZG9uJ3Qgd29ycnkgYWJvdXQgcGFzc2luZyB0aGVcbiAgICAgICAgLy8gYWNjdW1sYXRvciBhcnJheSAodGhvc2Ugcm93cyBhbHJlYWR5IGV4aXN0KVxuICAgICAgICByb3cub3JpZ2luYWxTdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYWNjZXNzUm93KGQsIGksIGRlcHRoICsgMSwgcm93KTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIElmIHRoZSBjb2x1bW4gaGFzIGFuIGFjY2Vzc29yLCB1c2UgaXQgdG8gZ2V0IGEgdmFsdWVcblxuXG4gICAgICBpZiAoY29sdW1uLmFjY2Vzc29yKSB7XG4gICAgICAgIHJvdy52YWx1ZXNbY29sdW1uLmlkXSA9IGNvbHVtbi5hY2Nlc3NvcihvcmlnaW5hbFJvdywgcm93SW5kZXgsIHJvdywgcGFyZW50Um93cywgZGF0YSk7XG4gICAgICB9IC8vIEFsbG93IHBsdWdpbnMgdG8gbWFuaXB1bGF0ZSB0aGUgY29sdW1uIHZhbHVlXG5cblxuICAgICAgcm93LnZhbHVlc1tjb2x1bW4uaWRdID0gcmVkdWNlSG9va3MoYWNjZXNzVmFsdWVIb29rcywgcm93LnZhbHVlc1tjb2x1bW4uaWRdLCB7XG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0sIHRydWUpO1xuICAgIH07XG5cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKG9yaWdpbmFsUm93LCByb3dJbmRleCkge1xuICAgICAgcmV0dXJuIGFjY2Vzc1JvdyhvcmlnaW5hbFJvdywgcm93SW5kZXgsIDAsIHVuZGVmaW5lZCwgcm93cyk7XG4gICAgfSk7XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0RXhwYW5kZWQgPSAncmVzZXRFeHBhbmRlZCc7XG4gIGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQgPSAndG9nZ2xlUm93RXhwYW5kZWQnO1xuICBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCA9ICd0b2dnbGVBbGxSb3dzRXhwYW5kZWQnO1xuICB2YXIgdXNlRXhwYW5kZWQgPSBmdW5jdGlvbiB1c2VFeHBhbmRlZChob29rcykge1xuICAgIGhvb2tzLmdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkMSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQxKTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyk7XG4gIH07XG4gIHVzZUV4cGFuZGVkLnBsdWdpbk5hbWUgPSAndXNlRXhwYW5kZWQnO1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxSb3dzRXhwYW5kZWQoKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBSb3dzIEV4cGFuZGVkJ1xuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciByb3cgPSBfcmVmMi5yb3c7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgcm93LnRvZ2dsZVJvd0V4cGFuZGVkKCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBSb3cgRXhwYW5kZWQnXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBleHBhbmRlZDoge31cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBleHBhbmRlZDogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmV4cGFuZGVkIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlQWxsUm93c0V4cGFuZGVkKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgaXNBbGxSb3dzRXhwYW5kZWQgPSBpbnN0YW5jZS5pc0FsbFJvd3NFeHBhbmRlZCxcbiAgICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkO1xuICAgICAgdmFyIGV4cGFuZEFsbCA9IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6ICFpc0FsbFJvd3NFeHBhbmRlZDtcblxuICAgICAgaWYgKGV4cGFuZEFsbCkge1xuICAgICAgICB2YXIgZXhwYW5kZWQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocm93c0J5SWQpLmZvckVhY2goZnVuY3Rpb24gKHJvd0lkKSB7XG4gICAgICAgICAgZXhwYW5kZWRbcm93SWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXhwYW5kZWQ6IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQpIHtcbiAgICAgIHZhciBpZCA9IGFjdGlvbi5pZCxcbiAgICAgICAgICBzZXRFeHBhbmRlZCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBleGlzdHMgPSBzdGF0ZS5leHBhbmRlZFtpZF07XG4gICAgICB2YXIgc2hvdWxkRXhpc3QgPSB0eXBlb2Ygc2V0RXhwYW5kZWQgIT09ICd1bmRlZmluZWQnID8gc2V0RXhwYW5kZWQgOiAhZXhpc3RzO1xuXG4gICAgICBpZiAoIWV4aXN0cyAmJiBzaG91bGRFeGlzdCkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogX2V4dGVuZHMoe30sIHN0YXRlLmV4cGFuZGVkLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltpZF0gPSB0cnVlLCBfZXh0ZW5kczIpKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RzICYmICFzaG91bGRFeGlzdCkge1xuICAgICAgICB2YXIgX3N0YXRlJGV4cGFuZGVkID0gc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgICAgICBfID0gX3N0YXRlJGV4cGFuZGVkW2lkXSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfc3RhdGUkZXhwYW5kZWQsIFtpZF0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGV4cGFuZGVkOiByZXN0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDEoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPSBpbnN0YW5jZS5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgbWFudWFsRXhwYW5kZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPT09IHZvaWQgMCA/ICdleHBhbmRlZCcgOiBfaW5zdGFuY2UkbWFudWFsRXhwYW4sXG4gICAgICAgIF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9IGluc3RhbmNlLnBhZ2luYXRlRXhwYW5kZWRSb3dzLFxuICAgICAgICBwYWdpbmF0ZUV4cGFuZGVkUm93cyA9IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCxcbiAgICAgICAgX2luc3RhbmNlJGV4cGFuZFN1YlJvID0gaW5zdGFuY2UuZXhwYW5kU3ViUm93cyxcbiAgICAgICAgZXhwYW5kU3ViUm93cyA9IF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRleHBhbmRTdWJSbyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEV4ID0gaW5zdGFuY2UuYXV0b1Jlc2V0RXhwYW5kZWQsXG4gICAgICAgIGF1dG9SZXNldEV4cGFuZGVkID0gX2luc3RhbmNlJGF1dG9SZXNldEV4ID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEV4LFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZXhwYW5kZWQgPSBpbnN0YW5jZS5zdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZVNvcnRCeScsICd1c2VHcm91cEJ5JywgJ3VzZVBpdm90Q29sdW1ucycsICd1c2VHbG9iYWxGaWx0ZXInXSwgJ3VzZUV4cGFuZGVkJyk7XG4gICAgdmFyIGdldEF1dG9SZXNldEV4cGFuZGVkID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEV4cGFuZGVkKTtcbiAgICB2YXIgaXNBbGxSb3dzRXhwYW5kZWQgPSBCb29sZWFuKE9iamVjdC5rZXlzKHJvd3NCeUlkKS5sZW5ndGggJiYgT2JqZWN0LmtleXMoZXhwYW5kZWQpLmxlbmd0aCk7XG5cbiAgICBpZiAoaXNBbGxSb3dzRXhwYW5kZWQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyb3dzQnlJZCkuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuICFleHBhbmRlZFtpZF07XG4gICAgICB9KSkge1xuICAgICAgICBpc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gLy8gQnlwYXNzIGFueSBlZmZlY3RzIGZyb20gZmlyaW5nIHdoZW4gdGhpcyBjaGFuZ2VzXG5cblxuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEV4cGFuZGVkKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRFeHBhbmRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIGRhdGFdKTtcbiAgICB2YXIgdG9nZ2xlUm93RXhwYW5kZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlQWxsUm93c0V4cGFuZGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZXhwYW5kZWRSb3dzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocGFnaW5hdGVFeHBhbmRlZFJvd3MpIHtcbiAgICAgICAgcmV0dXJuIGV4cGFuZFJvd3Mocm93cywge1xuICAgICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5OiBtYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXG4gICAgICAgICAgZXhwYW5kU3ViUm93czogZXhwYW5kU3ViUm93c1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSwgW3BhZ2luYXRlRXhwYW5kZWRSb3dzLCByb3dzLCBtYW51YWxFeHBhbmRlZEtleSwgZXhwYW5kZWQsIGV4cGFuZFN1YlJvd3NdKTtcbiAgICB2YXIgZXhwYW5kZWREZXB0aCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZpbmRFeHBhbmRlZERlcHRoKGV4cGFuZGVkKTtcbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIHZhciBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlRXhwYW5kZWRSb3dzOiByb3dzLFxuICAgICAgZXhwYW5kZWRSb3dzOiBleHBhbmRlZFJvd3MsXG4gICAgICByb3dzOiBleHBhbmRlZFJvd3MsXG4gICAgICBleHBhbmRlZERlcHRoOiBleHBhbmRlZERlcHRoLFxuICAgICAgaXNBbGxSb3dzRXhwYW5kZWQ6IGlzQWxsUm93c0V4cGFuZGVkLFxuICAgICAgdG9nZ2xlUm93RXhwYW5kZWQ6IHRvZ2dsZVJvd0V4cGFuZGVkLFxuICAgICAgdG9nZ2xlQWxsUm93c0V4cGFuZGVkOiB0b2dnbGVBbGxSb3dzRXhwYW5kZWQsXG4gICAgICBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wczogZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3cocm93LCBfcmVmMykge1xuICAgIHZhciBnZXRIb29rcyA9IF9yZWYzLmluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuXG4gICAgcm93LnRvZ2dsZVJvd0V4cGFuZGVkID0gZnVuY3Rpb24gKHNldCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZVJvd0V4cGFuZGVkKHJvdy5pZCwgc2V0KTtcbiAgICB9O1xuXG4gICAgcm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgIHJvdzogcm93XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRXhwYW5kZWREZXB0aChleHBhbmRlZCkge1xuICAgIHZhciBtYXhEZXB0aCA9IDA7XG4gICAgT2JqZWN0LmtleXMoZXhwYW5kZWQpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICB2YXIgc3BsaXRJZCA9IGlkLnNwbGl0KCcuJyk7XG4gICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBzcGxpdElkLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heERlcHRoO1xuICB9XG5cbiAgdmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByb3dzID0gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhyb3dWYWx1ZSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvd3M7XG4gIH07XG5cbiAgdGV4dC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBleGFjdFRleHQgPSBmdW5jdGlvbiBleGFjdFRleHQocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZCA/IFN0cmluZyhyb3dWYWx1ZSkudG9Mb3dlckNhc2UoKSA9PT0gU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpIDogdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGV4YWN0VGV4dC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBleGFjdFRleHRDYXNlID0gZnVuY3Rpb24gZXhhY3RUZXh0Q2FzZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkID8gU3RyaW5nKHJvd1ZhbHVlKSA9PT0gU3RyaW5nKGZpbHRlclZhbHVlKSA6IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdFRleHRDYXNlLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWw7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUuaW5jbHVkZXMoZmlsdGVyVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXMuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgaW5jbHVkZXNBbGwgPSBmdW5jdGlvbiBpbmNsdWRlc0FsbChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAmJiByb3dWYWx1ZS5sZW5ndGggJiYgZmlsdGVyVmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiByb3dWYWx1ZS5pbmNsdWRlcyh2YWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzQWxsLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzU29tZSA9IGZ1bmN0aW9uIGluY2x1ZGVzU29tZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAmJiByb3dWYWx1ZS5sZW5ndGggJiYgZmlsdGVyVmFsdWUuc29tZShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXNTb21lLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzVmFsdWUgPSBmdW5jdGlvbiBpbmNsdWRlc1ZhbHVlKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIGZpbHRlclZhbHVlLmluY2x1ZGVzKHJvd1ZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzVmFsdWUuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgZXhhY3QgPSBmdW5jdGlvbiBleGFjdChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA9PT0gZmlsdGVyVmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbiAgfTtcblxuICB2YXIgZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA9PSBmaWx0ZXJWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGVxdWFscy5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbDtcbiAgfTtcblxuICB2YXIgYmV0d2VlbiA9IGZ1bmN0aW9uIGJldHdlZW4ocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHZhciBfcmVmID0gZmlsdGVyVmFsdWUgfHwgW10sXG4gICAgICAgIG1pbiA9IF9yZWZbMF0sXG4gICAgICAgIG1heCA9IF9yZWZbMV07XG5cbiAgICBtaW4gPSB0eXBlb2YgbWluID09PSAnbnVtYmVyJyA/IG1pbiA6IC1JbmZpbml0eTtcbiAgICBtYXggPSB0eXBlb2YgbWF4ID09PSAnbnVtYmVyJyA/IG1heCA6IEluZmluaXR5O1xuXG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgdmFyIHRlbXAgPSBtaW47XG4gICAgICBtaW4gPSBtYXg7XG4gICAgICBtYXggPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgPj0gbWluICYmIHJvd1ZhbHVlIDw9IG1heDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGJldHdlZW4uYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCB0eXBlb2YgdmFsWzBdICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsWzFdICE9PSAnbnVtYmVyJztcbiAgfTtcblxuICB2YXIgZmlsdGVyVHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHRleHQ6IHRleHQsXG4gICAgZXhhY3RUZXh0OiBleGFjdFRleHQsXG4gICAgZXhhY3RUZXh0Q2FzZTogZXhhY3RUZXh0Q2FzZSxcbiAgICBpbmNsdWRlczogaW5jbHVkZXMsXG4gICAgaW5jbHVkZXNBbGw6IGluY2x1ZGVzQWxsLFxuICAgIGluY2x1ZGVzU29tZTogaW5jbHVkZXNTb21lLFxuICAgIGluY2x1ZGVzVmFsdWU6IGluY2x1ZGVzVmFsdWUsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIGVxdWFsczogZXF1YWxzLFxuICAgIGJldHdlZW46IGJldHdlZW5cbiAgfSk7XG5cbiAgYWN0aW9ucy5yZXNldEZpbHRlcnMgPSAncmVzZXRGaWx0ZXJzJztcbiAgYWN0aW9ucy5zZXRGaWx0ZXIgPSAnc2V0RmlsdGVyJztcbiAgYWN0aW9ucy5zZXRBbGxGaWx0ZXJzID0gJ3NldEFsbEZpbHRlcnMnO1xuICB2YXIgdXNlRmlsdGVycyA9IGZ1bmN0aW9uIHVzZUZpbHRlcnMoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQyKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDIpO1xuICB9O1xuICB1c2VGaWx0ZXJzLnBsdWdpbk5hbWUgPSAndXNlRmlsdGVycyc7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQyKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGZpbHRlcnM6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0RmlsdGVycykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBmaWx0ZXJzOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZmlsdGVycyB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEZpbHRlcikge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIGZpbHRlclZhbHVlID0gYWN0aW9uLmZpbHRlclZhbHVlO1xuICAgICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzO1xuICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QtVGFibGU6IENvdWxkIG5vdCBmaW5kIGEgY29sdW1uIHdpdGggaWQ6IFwiICsgY29sdW1uSWQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGNvbHVtbi5maWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuICAgICAgdmFyIHByZXZpb3VzZmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld0ZpbHRlciA9IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVyVmFsdWUsIHByZXZpb3VzZmlsdGVyICYmIHByZXZpb3VzZmlsdGVyLnZhbHVlKTsgLy9cblxuICAgICAgaWYgKHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoZmlsdGVyTWV0aG9kLmF1dG9SZW1vdmUsIG5ld0ZpbHRlciwgY29sdW1uKSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZpb3VzZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQuaWQgPT09IGNvbHVtbklkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdGaWx0ZXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZmlsdGVyczogW10uY29uY2F0KHN0YXRlLmZpbHRlcnMsIFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIHZhbHVlOiBuZXdGaWx0ZXJcbiAgICAgICAgfV0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0QWxsRmlsdGVycykge1xuICAgICAgdmFyIGZpbHRlcnMgPSBhY3Rpb24uZmlsdGVycztcbiAgICAgIHZhciBfYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgICAgX3VzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgZmlsdGVyczogZnVuY3Rpb25hbFVwZGF0ZShmaWx0ZXJzLCBzdGF0ZS5maWx0ZXJzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgIHZhciBjb2x1bW4gPSBfYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gZmlsdGVyLmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChjb2x1bW4uZmlsdGVyLCBfdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihmaWx0ZXJNZXRob2QuYXV0b1JlbW92ZSwgZmlsdGVyLnZhbHVlLCBjb2x1bW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQyKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzLFxuICAgICAgICBtYW51YWxGaWx0ZXJzID0gaW5zdGFuY2UubWFudWFsRmlsdGVycyxcbiAgICAgICAgX2luc3RhbmNlJGRlZmF1bHRDYW5GID0gaW5zdGFuY2UuZGVmYXVsdENhbkZpbHRlcixcbiAgICAgICAgZGVmYXVsdENhbkZpbHRlciA9IF9pbnN0YW5jZSRkZWZhdWx0Q2FuRiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaW5zdGFuY2UkZGVmYXVsdENhbkYsXG4gICAgICAgIGRpc2FibGVGaWx0ZXJzID0gaW5zdGFuY2UuZGlzYWJsZUZpbHRlcnMsXG4gICAgICAgIGZpbHRlcnMgPSBpbnN0YW5jZS5zdGF0ZS5maWx0ZXJzLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0RmkgPSBpbnN0YW5jZS5hdXRvUmVzZXRGaWx0ZXJzLFxuICAgICAgICBhdXRvUmVzZXRGaWx0ZXJzID0gX2luc3RhbmNlJGF1dG9SZXNldEZpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEZpO1xuICAgIHZhciBzZXRGaWx0ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIGZpbHRlclZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0RmlsdGVyLFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIGZpbHRlclZhbHVlOiBmaWx0ZXJWYWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldEFsbEZpbHRlcnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZmlsdGVycykge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEFsbEZpbHRlcnMsXG4gICAgICAgIGZpbHRlcnM6IGZpbHRlcnNcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgaWQgPSBjb2x1bW4uaWQsXG4gICAgICAgICAgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgY29sdW1uRGVmYXVsdENhbkZpbHRlciA9IGNvbHVtbi5kZWZhdWx0Q2FuRmlsdGVyLFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVGaWx0ZXJzID0gY29sdW1uLmRpc2FibGVGaWx0ZXJzOyAvLyBEZXRlcm1pbmUgaWYgYSBjb2x1bW4gaXMgZmlsdGVyYWJsZVxuXG4gICAgICBjb2x1bW4uY2FuRmlsdGVyID0gYWNjZXNzb3IgPyBnZXRGaXJzdERlZmluZWQoY29sdW1uRGlzYWJsZUZpbHRlcnMgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUZpbHRlcnMgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uRGVmYXVsdENhbkZpbHRlciwgZGVmYXVsdENhbkZpbHRlciwgZmFsc2UpOyAvLyBQcm92aWRlIHRoZSBjb2x1bW4gYSB3YXkgb2YgdXBkYXRpbmcgdGhlIGZpbHRlciB2YWx1ZVxuXG4gICAgICBjb2x1bW4uc2V0RmlsdGVyID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gc2V0RmlsdGVyKGNvbHVtbi5pZCwgdmFsKTtcbiAgICAgIH07IC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgZmlsdGVyIHZhbHVlIHRvIHRoZSBjb2x1bW4gZm9yXG4gICAgICAvLyBjb252ZW5pZW5jZVxuXG5cbiAgICAgIHZhciBmb3VuZCA9IGZpbHRlcnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5maWx0ZXJWYWx1ZSA9IGZvdW5kICYmIGZvdW5kLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWFudWFsRmlsdGVycyB8fCAhZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93cywgcm93c0J5SWRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsdGVyZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIGZpbHRlcmVkUm93c0J5SWQgPSB7fTsgLy8gRmlsdGVycyB0b3AgbGV2ZWwgYW5kIG5lc3RlZCByb3dzXG5cbiAgICAgIHZhciBmaWx0ZXJSb3dzID0gZnVuY3Rpb24gZmlsdGVyUm93cyhyb3dzLCBkZXB0aCkge1xuICAgICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaWx0ZXJlZFJvd3MgPSByb3dzO1xuICAgICAgICBmaWx0ZXJlZFJvd3MgPSBmaWx0ZXJzLnJlZHVjZShmdW5jdGlvbiAoZmlsdGVyZWRTb0ZhciwgX3JlZikge1xuICAgICAgICAgIHZhciBjb2x1bW5JZCA9IF9yZWYuaWQsXG4gICAgICAgICAgICAgIGZpbHRlclZhbHVlID0gX3JlZi52YWx1ZTtcbiAgICAgICAgICAvLyBGaW5kIHRoZSBmaWx0ZXJzIGNvbHVtblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbHVtbi5wcmVGaWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFNvRmFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoY29sdW1uLmZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgICAgICBpZiAoIWZpbHRlck1ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGZpbmQgYSB2YWxpZCAnY29sdW1uLmZpbHRlcicgZm9yIGNvbHVtbiB3aXRoIHRoZSBJRDogXCIgKyBjb2x1bW4uaWQgKyBcIi5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9IC8vIFBhc3MgdGhlIHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSBhbmQgY29sdW1uIHRvIHRoZSBmaWx0ZXJNZXRob2RcbiAgICAgICAgICAvLyB0byBnZXQgdGhlIGZpbHRlcmVkIHJvd3MgYmFja1xuXG5cbiAgICAgICAgICBjb2x1bW4uZmlsdGVyZWRSb3dzID0gZmlsdGVyTWV0aG9kKGZpbHRlcmVkU29GYXIsIFtjb2x1bW5JZF0sIGZpbHRlclZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLmZpbHRlcmVkUm93cztcbiAgICAgICAgfSwgcm93cyk7IC8vIEFwcGx5IHRoZSBmaWx0ZXIgdG8gYW55IHN1YlJvd3NcbiAgICAgICAgLy8gV2UgdGVjaG5pY2FsbHkgY291bGQgZG8gdGhpcyByZWN1cnNpdmVseSBpbiB0aGUgYWJvdmUgbG9vcCxcbiAgICAgICAgLy8gYnV0IHRoYXQgd291bGQgc2V2ZXJlbHkgaGluZGVyIHRoZSBBUEkgZm9yIHRoZSB1c2VyLCBzaW5jZSB0aGV5XG4gICAgICAgIC8vIHdvdWxkIGJlIHJlcXVpcmVkIHRvIGRvIHRoYXQgcmVjdXJzaW9uIGluIHNvbWUgc2NlbmFyaW9zXG5cbiAgICAgICAgZmlsdGVyZWRSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIGZpbHRlcmVkRmxhdFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGZpbHRlcmVkUm93c0J5SWRbcm93LmlkXSA9IHJvdztcblxuICAgICAgICAgIGlmICghcm93LnN1YlJvd3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3cuc3ViUm93cyA9IHJvdy5zdWJSb3dzICYmIHJvdy5zdWJSb3dzLmxlbmd0aCA+IDAgPyBmaWx0ZXJSb3dzKHJvdy5zdWJSb3dzLCBkZXB0aCArIDEpIDogcm93LnN1YlJvd3M7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFtmaWx0ZXJSb3dzKHJvd3MpLCBmaWx0ZXJlZEZsYXRSb3dzLCBmaWx0ZXJlZFJvd3NCeUlkXTtcbiAgICB9LCBbbWFudWFsRmlsdGVycywgZmlsdGVycywgcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBhbGxDb2x1bW5zLCB1c2VyRmlsdGVyVHlwZXNdKSxcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGZpbHRlcmVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZmlsdGVyZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBOb3cgdGhhdCBlYWNoIGZpbHRlcmVkIGNvbHVtbiBoYXMgaXQncyBwYXJ0aWFsbHkgZmlsdGVyZWQgcm93cyxcbiAgICAgIC8vIGxldHMgYXNzaWduIHRoZSBmaW5hbCBmaWx0ZXJlZCByb3dzIHRvIGFsbCBvZiB0aGUgb3RoZXIgY29sdW1uc1xuICAgICAgdmFyIG5vbkZpbHRlcmVkQ29sdW1ucyA9IGFsbENvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuICFmaWx0ZXJzLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBUaGlzIGVzc2VudGlhbGx5IGVuYWJsZXMgZmFjZXRlZCBmaWx0ZXIgb3B0aW9ucyB0byBiZSBidWlsdCBlYXNpbHlcbiAgICAgIC8vIHVzaW5nIGV2ZXJ5IGNvbHVtbidzIHByZUZpbHRlcmVkUm93cyB2YWx1ZVxuXG4gICAgICBub25GaWx0ZXJlZENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIGNvbHVtbi5wcmVGaWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFJvd3M7XG4gICAgICAgIGNvbHVtbi5maWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFJvd3M7XG4gICAgICB9KTtcbiAgICB9LCBbZmlsdGVyZWRSb3dzLCBmaWx0ZXJzLCBhbGxDb2x1bW5zXSk7XG4gICAgdmFyIGdldEF1dG9SZXNldEZpbHRlcnMgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0RmlsdGVycyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0RmlsdGVycygpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0RmlsdGVyc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbnVhbEZpbHRlcnMgPyBudWxsIDogZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZUZpbHRlcmVkUm93czogcm93cyxcbiAgICAgIHByZUZpbHRlcmVkRmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgcHJlRmlsdGVyZWRSb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICBmaWx0ZXJlZFJvd3M6IGZpbHRlcmVkUm93cyxcbiAgICAgIGZpbHRlcmVkRmxhdFJvd3M6IGZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICBmaWx0ZXJlZFJvd3NCeUlkOiBmaWx0ZXJlZFJvd3NCeUlkLFxuICAgICAgcm93czogZmlsdGVyZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IGZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICByb3dzQnlJZDogZmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHNldEZpbHRlcjogc2V0RmlsdGVyLFxuICAgICAgc2V0QWxsRmlsdGVyczogc2V0QWxsRmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlciA9ICdyZXNldEdsb2JhbEZpbHRlcic7XG4gIGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyID0gJ3NldEdsb2JhbEZpbHRlcic7XG4gIHZhciB1c2VHbG9iYWxGaWx0ZXIgPSBmdW5jdGlvbiB1c2VHbG9iYWxGaWx0ZXIoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQzKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDMpO1xuICB9O1xuICB1c2VHbG9iYWxGaWx0ZXIucGx1Z2luTmFtZSA9ICd1c2VHbG9iYWxGaWx0ZXInO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMyhzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlcikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBnbG9iYWxGaWx0ZXI6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5nbG9iYWxGaWx0ZXIgfHwgdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyKSB7XG4gICAgICB2YXIgZmlsdGVyVmFsdWUgPSBhY3Rpb24uZmlsdGVyVmFsdWU7XG4gICAgICB2YXIgdXNlckZpbHRlclR5cGVzID0gaW5zdGFuY2UudXNlckZpbHRlclR5cGVzO1xuICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChpbnN0YW5jZS5nbG9iYWxGaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuICAgICAgdmFyIG5ld0ZpbHRlciA9IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVyVmFsdWUsIHN0YXRlLmdsb2JhbEZpbHRlcik7IC8vXG5cbiAgICAgIGlmIChzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGZpbHRlck1ldGhvZC5hdXRvUmVtb3ZlLCBuZXdGaWx0ZXIpKSB7XG4gICAgICAgIHZhciBnbG9iYWxGaWx0ZXIgPSBzdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgICAgICBzdGF0ZVdpdGhvdXRHbG9iYWxGaWx0ZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzdGF0ZSwgW1wiZ2xvYmFsRmlsdGVyXCJdKTtcblxuICAgICAgICByZXR1cm4gc3RhdGVXaXRob3V0R2xvYmFsRmlsdGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdsb2JhbEZpbHRlcjogbmV3RmlsdGVyXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQzKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzLFxuICAgICAgICBnbG9iYWxGaWx0ZXIgPSBpbnN0YW5jZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIG1hbnVhbEdsb2JhbEZpbHRlciA9IGluc3RhbmNlLm1hbnVhbEdsb2JhbEZpbHRlcixcbiAgICAgICAgZ2xvYmFsRmlsdGVyVmFsdWUgPSBpbnN0YW5jZS5zdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRHbCA9IGluc3RhbmNlLmF1dG9SZXNldEdsb2JhbEZpbHRlcixcbiAgICAgICAgYXV0b1Jlc2V0R2xvYmFsRmlsdGVyID0gX2luc3RhbmNlJGF1dG9SZXNldEdsID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEdsLFxuICAgICAgICBkaXNhYmxlR2xvYmFsRmlsdGVyID0gaW5zdGFuY2UuZGlzYWJsZUdsb2JhbEZpbHRlcjtcbiAgICB2YXIgc2V0R2xvYmFsRmlsdGVyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGZpbHRlclZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyLFxuICAgICAgICBmaWx0ZXJWYWx1ZTogZmlsdGVyVmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pOyAvLyBUT0RPOiBDcmVhdGUgYSBmaWx0ZXIgY2FjaGUgZm9yIGluY3JlbWVudGFsIGhpZ2ggc3BlZWQgbXVsdGktZmlsdGVyaW5nXG4gICAgLy8gVGhpcyBnZXRzIHByZXR0eSBjb21wbGljYXRlZCBwcmV0dHkgZmFzdCwgc2luY2UgeW91IGhhdmUgdG8gbWFpbnRhaW4gYVxuICAgIC8vIGNhY2hlIGZvciBlYWNoIHJvdyBncm91cCAodG9wLWxldmVsIHJvd3MsIGFuZCBlYWNoIHJvdydzIHJlY3Vyc2l2ZSBzdWJyb3dzKVxuICAgIC8vIFRoaXMgd291bGQgbWFrZSBtdWx0aS1maWx0ZXJpbmcgYSBsb3QgZmFzdGVyIHRob3VnaC4gVG9vIGZhcj9cblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEdsb2JhbEZpbHRlciB8fCB0eXBlb2YgZ2xvYmFsRmlsdGVyVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlcmVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBmaWx0ZXJlZFJvd3NCeUlkID0ge307XG4gICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGdsb2JhbEZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgIGlmICghZmlsdGVyTWV0aG9kKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBmaW5kIGEgdmFsaWQgJ2dsb2JhbEZpbHRlcicgb3B0aW9uLlwiKTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG5cbiAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHZhciBjb2x1bW5EaXNhYmxlR2xvYmFsRmlsdGVyID0gY29sdW1uLmRpc2FibGVHbG9iYWxGaWx0ZXI7XG4gICAgICAgIGNvbHVtbi5jYW5GaWx0ZXIgPSBnZXRGaXJzdERlZmluZWQoY29sdW1uRGlzYWJsZUdsb2JhbEZpbHRlciA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlR2xvYmFsRmlsdGVyID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgZmlsdGVyYWJsZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYy5jYW5GaWx0ZXIgPT09IHRydWU7XG4gICAgICB9KTsgLy8gRmlsdGVycyB0b3AgbGV2ZWwgYW5kIG5lc3RlZCByb3dzXG5cbiAgICAgIHZhciBmaWx0ZXJSb3dzID0gZnVuY3Rpb24gZmlsdGVyUm93cyhmaWx0ZXJlZFJvd3MpIHtcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gZmlsdGVyTWV0aG9kKGZpbHRlcmVkUm93cywgZmlsdGVyYWJsZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pLCBnbG9iYWxGaWx0ZXJWYWx1ZSk7XG4gICAgICAgIGZpbHRlcmVkUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBmaWx0ZXJlZEZsYXRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgICBmaWx0ZXJlZFJvd3NCeUlkW3Jvdy5pZF0gPSByb3c7XG4gICAgICAgICAgcm93LnN1YlJvd3MgPSByb3cuc3ViUm93cyAmJiByb3cuc3ViUm93cy5sZW5ndGggPyBmaWx0ZXJSb3dzKHJvdy5zdWJSb3dzKSA6IHJvdy5zdWJSb3dzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBbZmlsdGVyUm93cyhyb3dzKSwgZmlsdGVyZWRGbGF0Um93cywgZmlsdGVyZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEdsb2JhbEZpbHRlciwgZ2xvYmFsRmlsdGVyVmFsdWUsIGdsb2JhbEZpbHRlciwgdXNlckZpbHRlclR5cGVzLCBhbGxDb2x1bW5zLCByb3dzLCBmbGF0Um93cywgcm93c0J5SWQsIGRpc2FibGVHbG9iYWxGaWx0ZXJdKSxcbiAgICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGdsb2JhbEZpbHRlcmVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgdmFyIGdldEF1dG9SZXNldEdsb2JhbEZpbHRlciA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRHbG9iYWxGaWx0ZXIpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEdsb2JhbEZpbHRlcigpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0R2xvYmFsRmlsdGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsR2xvYmFsRmlsdGVyID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZEZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHByZUdsb2JhbEZpbHRlcmVkUm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzOiBnbG9iYWxGaWx0ZXJlZFJvd3MsXG4gICAgICBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzOiBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZDogZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHJvd3M6IGdsb2JhbEZpbHRlcmVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGdsb2JhbEZpbHRlcmVkUm93c0J5SWQsXG4gICAgICBzZXRHbG9iYWxGaWx0ZXI6IHNldEdsb2JhbEZpbHRlcixcbiAgICAgIGRpc2FibGVHbG9iYWxGaWx0ZXI6IGRpc2FibGVHbG9iYWxGaWx0ZXJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1bSh2YWx1ZXMsIGFnZ3JlZ2F0ZWRWYWx1ZXMpIHtcbiAgICAvLyBJdCdzIGZhc3RlciB0byBqdXN0IGFkZCB0aGUgYWdncmVnYXRpb25zIHRvZ2V0aGVyIGluc3RlYWQgb2ZcbiAgICAvLyBwcm9jZXNzIGxlYWYgbm9kZXMgaW5kaXZpZHVhbGx5XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRWYWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIG5leHQpIHtcbiAgICAgIHJldHVybiBzdW0gKyAodHlwZW9mIG5leHQgPT09ICdudW1iZXInID8gbmV4dCA6IDApO1xuICAgIH0sIDApO1xuICB9XG4gIGZ1bmN0aW9uIG1pbih2YWx1ZXMpIHtcbiAgICB2YXIgbWluID0gdmFsdWVzWzBdIHx8IDA7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGZ1bmN0aW9uIG1heCh2YWx1ZXMpIHtcbiAgICB2YXIgbWF4ID0gdmFsdWVzWzBdIHx8IDA7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIGZ1bmN0aW9uIG1pbk1heCh2YWx1ZXMpIHtcbiAgICB2YXIgbWluID0gdmFsdWVzWzBdIHx8IDA7XG4gICAgdmFyIG1heCA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSk7XG4gICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtaW4gKyBcIi4uXCIgKyBtYXg7XG4gIH1cbiAgZnVuY3Rpb24gYXZlcmFnZSh2YWx1ZXMpIHtcbiAgICByZXR1cm4gc3VtKG51bGwsIHZhbHVlcykgLyB2YWx1ZXMubGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIG1lZGlhbih2YWx1ZXMpIHtcbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKHZhbHVlcy5sZW5ndGggLyAyKTtcbiAgICB2YXIgbnVtcyA9IFtdLmNvbmNhdCh2YWx1ZXMpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzLmxlbmd0aCAlIDIgIT09IDAgPyBudW1zW21pZF0gOiAobnVtc1ttaWQgLSAxXSArIG51bXNbbWlkXSkgLyAyO1xuICB9XG4gIGZ1bmN0aW9uIHVuaXF1ZSh2YWx1ZXMpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcykudmFsdWVzKCkpO1xuICB9XG4gIGZ1bmN0aW9uIHVuaXF1ZUNvdW50KHZhbHVlcykge1xuICAgIHJldHVybiBuZXcgU2V0KHZhbHVlcykuc2l6ZTtcbiAgfVxuICBmdW5jdGlvbiBjb3VudCh2YWx1ZXMpIHtcbiAgICByZXR1cm4gdmFsdWVzLmxlbmd0aDtcbiAgfVxuXG4gIHZhciBhZ2dyZWdhdGlvbnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHN1bTogc3VtLFxuICAgIG1pbjogbWluLFxuICAgIG1heDogbWF4LFxuICAgIG1pbk1heDogbWluTWF4LFxuICAgIGF2ZXJhZ2U6IGF2ZXJhZ2UsXG4gICAgbWVkaWFuOiBtZWRpYW4sXG4gICAgdW5pcXVlOiB1bmlxdWUsXG4gICAgdW5pcXVlQ291bnQ6IHVuaXF1ZUNvdW50LFxuICAgIGNvdW50OiBjb3VudFxuICB9KTtcblxuICB2YXIgZW1wdHlBcnJheSA9IFtdO1xuICB2YXIgZW1wdHlPYmplY3QgPSB7fTsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMucmVzZXRHcm91cEJ5ID0gJ3Jlc2V0R3JvdXBCeSc7XG4gIGFjdGlvbnMuc2V0R3JvdXBCeSA9ICdzZXRHcm91cEJ5JztcbiAgYWN0aW9ucy50b2dnbGVHcm91cEJ5ID0gJ3RvZ2dsZUdyb3VwQnknO1xuICB2YXIgdXNlR3JvdXBCeSA9IGZ1bmN0aW9uIHVzZUdyb3VwQnkoaG9va3MpIHtcbiAgICBob29rcy5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMgPSBbZGVmYXVsdEdldEdyb3VwQnlUb2dnbGVQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkNCk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2goZnVuY3Rpb24gKGRlcHMsIF9yZWYpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5ncm91cEJ5XSk7XG4gICAgfSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaCh2aXNpYmxlQ29sdW1ucyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ0KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQxKTtcbiAgfTtcbiAgdXNlR3JvdXBCeS5wbHVnaW5OYW1lID0gJ3VzZUdyb3VwQnknO1xuXG4gIHZhciBkZWZhdWx0R2V0R3JvdXBCeVRvZ2dsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEdyb3VwQnlUb2dnbGVQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgaGVhZGVyID0gX3JlZjIuaGVhZGVyO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGhlYWRlci5jYW5Hcm91cEJ5ID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIGhlYWRlci50b2dnbGVHcm91cEJ5KCk7XG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBoZWFkZXIuY2FuR3JvdXBCeSA/ICdwb2ludGVyJyA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEdyb3VwQnknXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNChzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBncm91cEJ5OiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEdyb3VwQnkpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ3JvdXBCeTogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmdyb3VwQnkgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRHcm91cEJ5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyb3VwQnk6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlR3JvdXBCeSkge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIHNldEdyb3VwQnkgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgcmVzb2x2ZWRHcm91cEJ5ID0gdHlwZW9mIHNldEdyb3VwQnkgIT09ICd1bmRlZmluZWQnID8gc2V0R3JvdXBCeSA6ICFzdGF0ZS5ncm91cEJ5LmluY2x1ZGVzKGNvbHVtbklkKTtcblxuICAgICAgaWYgKHJlc29sdmVkR3JvdXBCeSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZ3JvdXBCeTogW10uY29uY2F0KHN0YXRlLmdyb3VwQnksIFtjb2x1bW5JZF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyb3VwQnk6IHN0YXRlLmdyb3VwQnkuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQgIT09IGNvbHVtbklkO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMoY29sdW1ucywgX3JlZjMpIHtcbiAgICB2YXIgZ3JvdXBCeSA9IF9yZWYzLmluc3RhbmNlLnN0YXRlLmdyb3VwQnk7XG4gICAgLy8gU29ydCBncm91cGVkIGNvbHVtbnMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjb2x1bW4gbGlzdFxuICAgIC8vIGJlZm9yZSB0aGUgaGVhZGVycyBhcmUgYnVpbHRcbiAgICB2YXIgZ3JvdXBCeUNvbHVtbnMgPSBncm91cEJ5Lm1hcChmdW5jdGlvbiAoZykge1xuICAgICAgcmV0dXJuIGNvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIHJldHVybiBjb2wuaWQgPT09IGc7XG4gICAgICB9KTtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgdmFyIG5vbkdyb3VwQnlDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgcmV0dXJuICFncm91cEJ5LmluY2x1ZGVzKGNvbC5pZCk7XG4gICAgfSk7XG4gICAgY29sdW1ucyA9IFtdLmNvbmNhdChncm91cEJ5Q29sdW1ucywgbm9uR3JvdXBCeUNvbHVtbnMpO1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4uaXNHcm91cGVkID0gZ3JvdXBCeS5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgICAgY29sdW1uLmdyb3VwZWRJbmRleCA9IGdyb3VwQnkuaW5kZXhPZihjb2x1bW4uaWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRVc2VyQWdncmVnYXRpb25zID0ge307XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkNChpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBfaW5zdGFuY2UkZ3JvdXBCeUZuID0gaW5zdGFuY2UuZ3JvdXBCeUZuLFxuICAgICAgICBncm91cEJ5Rm4gPSBfaW5zdGFuY2UkZ3JvdXBCeUZuID09PSB2b2lkIDAgPyBkZWZhdWx0R3JvdXBCeUZuIDogX2luc3RhbmNlJGdyb3VwQnlGbixcbiAgICAgICAgbWFudWFsR3JvdXBCeSA9IGluc3RhbmNlLm1hbnVhbEdyb3VwQnksXG4gICAgICAgIF9pbnN0YW5jZSRhZ2dyZWdhdGlvbiA9IGluc3RhbmNlLmFnZ3JlZ2F0aW9ucyxcbiAgICAgICAgdXNlckFnZ3JlZ2F0aW9ucyA9IF9pbnN0YW5jZSRhZ2dyZWdhdGlvbiA9PT0gdm9pZCAwID8gZGVmYXVsdFVzZXJBZ2dyZWdhdGlvbnMgOiBfaW5zdGFuY2UkYWdncmVnYXRpb24sXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICBncm91cEJ5ID0gaW5zdGFuY2Uuc3RhdGUuZ3JvdXBCeSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEdyID0gaW5zdGFuY2UuYXV0b1Jlc2V0R3JvdXBCeSxcbiAgICAgICAgYXV0b1Jlc2V0R3JvdXBCeSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRHciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRHcixcbiAgICAgICAgZGlzYWJsZUdyb3VwQnkgPSBpbnN0YW5jZS5kaXNhYmxlR3JvdXBCeSxcbiAgICAgICAgZGVmYXVsdENhbkdyb3VwQnkgPSBpbnN0YW5jZS5kZWZhdWx0Q2FuR3JvdXBCeSxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUNvbHVtbk9yZGVyJywgJ3VzZUZpbHRlcnMnXSwgJ3VzZUdyb3VwQnknKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgZGVmYXVsdENvbHVtbkdyb3VwQnkgPSBjb2x1bW4uZGVmYXVsdEdyb3VwQnksXG4gICAgICAgICAgY29sdW1uRGlzYWJsZUdyb3VwQnkgPSBjb2x1bW4uZGlzYWJsZUdyb3VwQnk7XG4gICAgICBjb2x1bW4uY2FuR3JvdXBCeSA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5jYW5Hcm91cEJ5LCBjb2x1bW5EaXNhYmxlR3JvdXBCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlR3JvdXBCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKSA6IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuR3JvdXBCeSwgZGVmYXVsdENvbHVtbkdyb3VwQnksIGRlZmF1bHRDYW5Hcm91cEJ5LCBmYWxzZSk7XG5cbiAgICAgIGlmIChjb2x1bW4uY2FuR3JvdXBCeSkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlR3JvdXBCeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlR3JvdXBCeShjb2x1bW4uaWQpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4uQWdncmVnYXRlZCA9IGNvbHVtbi5BZ2dyZWdhdGVkIHx8IGNvbHVtbi5DZWxsO1xuICAgIH0pO1xuICAgIHZhciB0b2dnbGVHcm91cEJ5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUdyb3VwQnksXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgc2V0R3JvdXBCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEdyb3VwQnksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICBoZWFkZXIuZ2V0R3JvdXBCeVRvZ2dsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEdyb3VwQnkgfHwgIWdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBlbXB0eUFycmF5LCBlbXB0eU9iamVjdCwgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH0gLy8gRW5zdXJlIHRoYXQgdGhlIGxpc3Qgb2YgZmlsdGVyZWQgY29sdW1ucyBleGlzdFxuXG5cbiAgICAgIHZhciBleGlzdGluZ0dyb3VwQnkgPSBncm91cEJ5LmZpbHRlcihmdW5jdGlvbiAoZykge1xuICAgICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gY29sLmlkID09PSBnO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBGaW5kIHRoZSBjb2x1bW5zIHRoYXQgY2FuIG9yIGFyZSBhZ2dyZWdhdGluZ1xuICAgICAgLy8gVXNlcyBlYWNoIGNvbHVtbiB0byBhZ2dyZWdhdGUgcm93cyBpbnRvIGEgc2luZ2xlIHZhbHVlXG5cbiAgICAgIHZhciBhZ2dyZWdhdGVSb3dzVG9WYWx1ZXMgPSBmdW5jdGlvbiBhZ2dyZWdhdGVSb3dzVG9WYWx1ZXMobGVhZlJvd3MsIGdyb3VwZWRSb3dzLCBkZXB0aCkge1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG4gICAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgLy8gRG9uJ3QgYWdncmVnYXRlIGNvbHVtbnMgdGhhdCBhcmUgaW4gdGhlIGdyb3VwQnlcbiAgICAgICAgICBpZiAoZXhpc3RpbmdHcm91cEJ5LmluY2x1ZGVzKGNvbHVtbi5pZCkpIHtcbiAgICAgICAgICAgIHZhbHVlc1tjb2x1bW4uaWRdID0gZ3JvdXBlZFJvd3NbMF0gPyBncm91cGVkUm93c1swXS52YWx1ZXNbY29sdW1uLmlkXSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBBZ2dyZWdhdGUgdGhlIHZhbHVlc1xuXG5cbiAgICAgICAgICB2YXIgYWdncmVnYXRlRm4gPSB0eXBlb2YgY29sdW1uLmFnZ3JlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5hZ2dyZWdhdGUgOiB1c2VyQWdncmVnYXRpb25zW2NvbHVtbi5hZ2dyZWdhdGVdIHx8IGFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlXTtcblxuICAgICAgICAgIGlmIChhZ2dyZWdhdGVGbikge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb2x1bW5WYWx1ZXMgdG8gYWdncmVnYXRlXG4gICAgICAgICAgICB2YXIgZ3JvdXBlZFZhbHVlcyA9IGdyb3VwZWRSb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW2NvbHVtbi5pZF07XG4gICAgICAgICAgICB9KTsgLy8gR2V0IHRoZSBjb2x1bW5WYWx1ZXMgdG8gYWdncmVnYXRlXG5cbiAgICAgICAgICAgIHZhciBsZWFmVmFsdWVzID0gbGVhZlJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbHVtblZhbHVlID0gcm93LnZhbHVlc1tjb2x1bW4uaWRdO1xuXG4gICAgICAgICAgICAgIGlmICghZGVwdGggJiYgY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFnZ3JlZ2F0ZVZhbHVlRm4gPSB0eXBlb2YgY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlID09PSAnZnVuY3Rpb24nID8gY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlIDogdXNlckFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlVmFsdWVdIHx8IGFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlVmFsdWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFhZ2dyZWdhdGVWYWx1ZUZuKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oe1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdCBUYWJsZTogSW52YWxpZCBjb2x1bW4uYWdncmVnYXRlVmFsdWUgb3B0aW9uIGZvciBjb2x1bW4gbGlzdGVkIGFib3ZlXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gYWdncmVnYXRlVmFsdWVGbihjb2x1bW5WYWx1ZSwgcm93LCBjb2x1bW4pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtblZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWx1ZXNbY29sdW1uLmlkXSA9IGFnZ3JlZ2F0ZUZuKGxlYWZWYWx1ZXMsIGdyb3VwZWRWYWx1ZXMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLmFnZ3JlZ2F0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKHtcbiAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QgVGFibGU6IEludmFsaWQgY29sdW1uLmFnZ3JlZ2F0ZSBvcHRpb24gZm9yIGNvbHVtbiBsaXN0ZWQgYWJvdmVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlc1tjb2x1bW4uaWRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfTtcblxuICAgICAgdmFyIGdyb3VwZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIGdyb3VwZWRSb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIG9ubHlHcm91cGVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBvbmx5R3JvdXBlZFJvd3NCeUlkID0ge307XG4gICAgICB2YXIgbm9uR3JvdXBlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgbm9uR3JvdXBlZFJvd3NCeUlkID0ge307IC8vIFJlY3Vyc2l2ZWx5IGdyb3VwIHRoZSBkYXRhXG5cbiAgICAgIHZhciBncm91cFVwUmVjdXJzaXZlbHkgPSBmdW5jdGlvbiBncm91cFVwUmVjdXJzaXZlbHkocm93cywgZGVwdGgsIHBhcmVudElkKSB7XG4gICAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGVwdGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbGFzdCBsZXZlbCwganVzdCByZXR1cm4gdGhlIHJvd3NcbiAgICAgICAgaWYgKGRlcHRoID09PSBleGlzdGluZ0dyb3VwQnkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29sdW1uSWQgPSBleGlzdGluZ0dyb3VwQnlbZGVwdGhdOyAvLyBHcm91cCB0aGUgcm93cyB0b2dldGhlciBmb3IgdGhpcyBsZXZlbFxuXG4gICAgICAgIHZhciByb3dHcm91cHNNYXAgPSBncm91cEJ5Rm4ocm93cywgY29sdW1uSWQpOyAvLyBQZWZvcm0gYWdncmVnYXRpb25zIGZvciBlYWNoIGdyb3VwXG5cbiAgICAgICAgdmFyIGFnZ3JlZ2F0ZWRHcm91cGVkUm93cyA9IE9iamVjdC5lbnRyaWVzKHJvd0dyb3Vwc01hcCkubWFwKGZ1bmN0aW9uIChfcmVmNCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgZ3JvdXBCeVZhbCA9IF9yZWY0WzBdLFxuICAgICAgICAgICAgICBncm91cGVkUm93cyA9IF9yZWY0WzFdO1xuICAgICAgICAgIHZhciBpZCA9IGNvbHVtbklkICsgXCI6XCIgKyBncm91cEJ5VmFsO1xuICAgICAgICAgIGlkID0gcGFyZW50SWQgPyBwYXJlbnRJZCArIFwiPlwiICsgaWQgOiBpZDsgLy8gRmlyc3QsIFJlY3Vyc2UgdG8gZ3JvdXAgc3ViIHJvd3MgYmVmb3JlIGFnZ3JlZ2F0aW9uXG5cbiAgICAgICAgICB2YXIgc3ViUm93cyA9IGdyb3VwVXBSZWN1cnNpdmVseShncm91cGVkUm93cywgZGVwdGggKyAxLCBpZCk7IC8vIEZsYXR0ZW4gdGhlIGxlYWYgcm93cyBvZiB0aGUgcm93cyBpbiB0aGlzIGdyb3VwXG5cbiAgICAgICAgICB2YXIgbGVhZlJvd3MgPSBkZXB0aCA/IGZsYXR0ZW5CeShncm91cGVkUm93cywgJ2xlYWZSb3dzJykgOiBncm91cGVkUm93cztcbiAgICAgICAgICB2YXIgdmFsdWVzID0gYWdncmVnYXRlUm93c1RvVmFsdWVzKGxlYWZSb3dzLCBncm91cGVkUm93cywgZGVwdGgpO1xuICAgICAgICAgIHZhciByb3cgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBpc0dyb3VwZWQ6IHRydWUsXG4gICAgICAgICAgICBncm91cEJ5SUQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgZ3JvdXBCeVZhbDogZ3JvdXBCeVZhbCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgc3ViUm93czogc3ViUm93cyxcbiAgICAgICAgICAgIGxlYWZSb3dzOiBsZWFmUm93cyxcbiAgICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgIH07XG4gICAgICAgICAgc3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJSb3cpIHtcbiAgICAgICAgICAgIGdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICBncm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcblxuICAgICAgICAgICAgaWYgKHN1YlJvdy5pc0dyb3VwZWQpIHtcbiAgICAgICAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICAgIG9ubHlHcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWdncmVnYXRlZEdyb3VwZWRSb3dzO1xuICAgICAgfTtcblxuICAgICAgdmFyIGdyb3VwZWRSb3dzID0gZ3JvdXBVcFJlY3Vyc2l2ZWx5KHJvd3MpO1xuICAgICAgZ3JvdXBlZFJvd3MuZm9yRWFjaChmdW5jdGlvbiAoc3ViUm93KSB7XG4gICAgICAgIGdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgIGdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuXG4gICAgICAgIGlmIChzdWJSb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgb25seUdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBBc3NpZ24gdGhlIG5ldyBkYXRhXG5cbiAgICAgIHJldHVybiBbZ3JvdXBlZFJvd3MsIGdyb3VwZWRGbGF0Um93cywgZ3JvdXBlZFJvd3NCeUlkLCBvbmx5R3JvdXBlZEZsYXRSb3dzLCBvbmx5R3JvdXBlZFJvd3NCeUlkLCBub25Hcm91cGVkRmxhdFJvd3MsIG5vbkdyb3VwZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEdyb3VwQnksIGdyb3VwQnksIHJvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgYWxsQ29sdW1ucywgdXNlckFnZ3JlZ2F0aW9ucywgZ3JvdXBCeUZuXSksXG4gICAgICAgIGdyb3VwZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdLFxuICAgICAgICBncm91cGVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXSxcbiAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzNdLFxuICAgICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bNF0sXG4gICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzVdLFxuICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1s2XTtcblxuICAgIHZhciBnZXRBdXRvUmVzZXRHcm91cEJ5ID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEdyb3VwQnkpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEdyb3VwQnkoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEdyb3VwQnlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxHcm91cEJ5ID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVHcm91cGVkUm93czogcm93cyxcbiAgICAgIHByZUdyb3VwZWRGbGF0Um93OiBmbGF0Um93cyxcbiAgICAgIHByZUdyb3VwZWRSb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICBncm91cGVkUm93czogZ3JvdXBlZFJvd3MsXG4gICAgICBncm91cGVkRmxhdFJvd3M6IGdyb3VwZWRGbGF0Um93cyxcbiAgICAgIGdyb3VwZWRSb3dzQnlJZDogZ3JvdXBlZFJvd3NCeUlkLFxuICAgICAgb25seUdyb3VwZWRGbGF0Um93czogb25seUdyb3VwZWRGbGF0Um93cyxcbiAgICAgIG9ubHlHcm91cGVkUm93c0J5SWQ6IG9ubHlHcm91cGVkUm93c0J5SWQsXG4gICAgICBub25Hcm91cGVkRmxhdFJvd3M6IG5vbkdyb3VwZWRGbGF0Um93cyxcbiAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZDogbm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgcm93czogZ3JvdXBlZFJvd3MsXG4gICAgICBmbGF0Um93czogZ3JvdXBlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIHRvZ2dsZUdyb3VwQnk6IHRvZ2dsZUdyb3VwQnksXG4gICAgICBzZXRHcm91cEJ5OiBzZXRHcm91cEJ5XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93JDEocm93KSB7XG4gICAgcm93LmFsbENlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgIHZhciBfcm93JHN1YlJvd3M7XG5cbiAgICAgIC8vIEdyb3VwZWQgY2VsbHMgYXJlIGluIHRoZSBncm91cEJ5IGFuZCB0aGUgcGl2b3QgY2VsbCBmb3IgdGhlIHJvd1xuICAgICAgY2VsbC5pc0dyb3VwZWQgPSBjZWxsLmNvbHVtbi5pc0dyb3VwZWQgJiYgY2VsbC5jb2x1bW4uaWQgPT09IHJvdy5ncm91cEJ5SUQ7IC8vIFBsYWNlaG9sZGVyIGNlbGxzIGFyZSBhbnkgY29sdW1ucyBpbiB0aGUgZ3JvdXBCeSB0aGF0IGFyZSBub3QgZ3JvdXBlZFxuXG4gICAgICBjZWxsLmlzUGxhY2Vob2xkZXIgPSAhY2VsbC5pc0dyb3VwZWQgJiYgY2VsbC5jb2x1bW4uaXNHcm91cGVkOyAvLyBBZ2dyZWdhdGVkIGNlbGxzIGFyZSBub3QgZ3JvdXBlZCwgbm90IHJlcGVhdGVkLCBidXQgc3RpbGwgaGF2ZSBzdWJSb3dzXG5cbiAgICAgIGNlbGwuaXNBZ2dyZWdhdGVkID0gIWNlbGwuaXNHcm91cGVkICYmICFjZWxsLmlzUGxhY2Vob2xkZXIgJiYgKChfcm93JHN1YlJvd3MgPSByb3cuc3ViUm93cykgPT0gbnVsbCA/IHZvaWQgMCA6IF9yb3ckc3ViUm93cy5sZW5ndGgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdEdyb3VwQnlGbihyb3dzLCBjb2x1bW5JZCkge1xuICAgIHJldHVybiByb3dzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgcm93LCBpKSB7XG4gICAgICAvLyBUT0RPOiBNaWdodCB3YW50IHRvIGltcGxlbWVudCBhIGtleSBzZXJpYWxpemVyIGhlcmUgc29cbiAgICAgIC8vIGlycmVndWxhciBjb2x1bW4gdmFsdWVzIGNhbiBzdGlsbCBiZSBncm91cGVkIGlmIG5lZWRlZD9cbiAgICAgIHZhciByZXNLZXkgPSBcIlwiICsgcm93LnZhbHVlc1tjb2x1bW5JZF07XG4gICAgICBwcmV2W3Jlc0tleV0gPSBBcnJheS5pc0FycmF5KHByZXZbcmVzS2V5XSkgPyBwcmV2W3Jlc0tleV0gOiBbXTtcbiAgICAgIHByZXZbcmVzS2V5XS5wdXNoKHJvdyk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIH1cblxuICB2YXIgcmVTcGxpdEFscGhhTnVtZXJpYyA9IC8oWzAtOV0rKS9nbTsgLy8gTWl4ZWQgc29ydGluZyBpcyBzbG93LCBidXQgdmVyeSBpbmNsdXNpdmUgb2YgbWFueSBlZGdlIGNhc2VzLlxuICAvLyBJdCBoYW5kbGVzIG51bWJlcnMsIG1peGVkIGFscGhhbnVtZXJpYyBjb21iaW5hdGlvbnMsIGFuZCBldmVuXG4gIC8vIG51bGwsIHVuZGVmaW5lZCwgYW5kIEluZmluaXR5XG5cbiAgdmFyIGFscGhhbnVtZXJpYyA9IGZ1bmN0aW9uIGFscGhhbnVtZXJpYyhyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBfZ2V0Um93VmFsdWVzQnlDb2x1bW4gPSBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvd0EsIHJvd0IsIGNvbHVtbklkKSxcbiAgICAgICAgYSA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtblswXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtblsxXTsgLy8gRm9yY2UgdG8gc3RyaW5ncyAob3IgXCJcIiBmb3IgdW5zdXBwb3J0ZWQgdHlwZXMpXG5cblxuICAgIGEgPSB0b1N0cmluZyhhKTtcbiAgICBiID0gdG9TdHJpbmcoYik7IC8vIFNwbGl0IG9uIG51bWJlciBncm91cHMsIGJ1dCBrZWVwIHRoZSBkZWxpbWl0ZXJcbiAgICAvLyBUaGVuIHJlbW92ZSBmYWxzZXkgc3BsaXQgdmFsdWVzXG5cbiAgICBhID0gYS5zcGxpdChyZVNwbGl0QWxwaGFOdW1lcmljKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgYiA9IGIuc3BsaXQocmVTcGxpdEFscGhhTnVtZXJpYykuZmlsdGVyKEJvb2xlYW4pOyAvLyBXaGlsZVxuXG4gICAgd2hpbGUgKGEubGVuZ3RoICYmIGIubGVuZ3RoKSB7XG4gICAgICB2YXIgYWEgPSBhLnNoaWZ0KCk7XG4gICAgICB2YXIgYmIgPSBiLnNoaWZ0KCk7XG4gICAgICB2YXIgYW4gPSBwYXJzZUludChhYSwgMTApO1xuICAgICAgdmFyIGJuID0gcGFyc2VJbnQoYmIsIDEwKTtcbiAgICAgIHZhciBjb21ibyA9IFthbiwgYm5dLnNvcnQoKTsgLy8gQm90aCBhcmUgc3RyaW5nXG5cbiAgICAgIGlmIChpc05hTihjb21ib1swXSkpIHtcbiAgICAgICAgaWYgKGFhID4gYmIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYiA+IGFhKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIE9uZSBpcyBhIHN0cmluZywgb25lIGlzIGEgbnVtYmVyXG5cblxuICAgICAgaWYgKGlzTmFOKGNvbWJvWzFdKSkge1xuICAgICAgICByZXR1cm4gaXNOYU4oYW4pID8gLTEgOiAxO1xuICAgICAgfSAvLyBCb3RoIGFyZSBudW1iZXJzXG5cblxuICAgICAgaWYgKGFuID4gYm4pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChibiA+IGFuKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgfTtcbiAgZnVuY3Rpb24gZGF0ZXRpbWUocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uMiA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uMlswXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjJbMV07XG5cbiAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgIHJldHVybiBjb21wYXJlQmFzaWMoYSwgYik7XG4gIH1cbiAgZnVuY3Rpb24gYmFzaWMocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uMyA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uM1swXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjNbMV07XG5cbiAgICByZXR1cm4gY29tcGFyZUJhc2ljKGEsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIHN0cmluZyhyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBfZ2V0Um93VmFsdWVzQnlDb2x1bW40ID0gZ2V0Um93VmFsdWVzQnlDb2x1bW5JRChyb3dBLCByb3dCLCBjb2x1bW5JZCksXG4gICAgICAgIGEgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW40WzBdLFxuICAgICAgICBiID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uNFsxXTtcblxuICAgIGEgPSBhLnNwbGl0KCcnKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgYiA9IGIuc3BsaXQoJycpLmZpbHRlcihCb29sZWFuKTtcblxuICAgIHdoaWxlIChhLmxlbmd0aCAmJiBiLmxlbmd0aCkge1xuICAgICAgdmFyIGFhID0gYS5zaGlmdCgpO1xuICAgICAgdmFyIGJiID0gYi5zaGlmdCgpO1xuICAgICAgdmFyIGFsb3dlciA9IGFhLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgYmxvd2VyID0gYmIudG9Mb3dlckNhc2UoKTsgLy8gQ2FzZSBpbnNlbnNpdGl2ZSBjb21wYXJpc29uIHVudGlsIGNoYXJhY3RlcnMgbWF0Y2hcblxuICAgICAgaWYgKGFsb3dlciA+IGJsb3dlcikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJsb3dlciA+IGFsb3dlcikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IC8vIElmIGxvd2VyY2FzZSBjaGFyYWN0ZXJzIGFyZSBpZGVudGljYWxcblxuXG4gICAgICBpZiAoYWEgPiBiYikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJiID4gYWEpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBudW1iZXIocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uNSA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uNVswXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjVbMV07XG5cbiAgICB2YXIgcmVwbGFjZU5vbk51bWVyaWMgPSAvW14wLTkuXS9naTtcbiAgICBhID0gTnVtYmVyKFN0cmluZyhhKS5yZXBsYWNlKHJlcGxhY2VOb25OdW1lcmljLCAnJykpO1xuICAgIGIgPSBOdW1iZXIoU3RyaW5nKGIpLnJlcGxhY2UocmVwbGFjZU5vbk51bWVyaWMsICcnKSk7XG4gICAgcmV0dXJuIGNvbXBhcmVCYXNpYyhhLCBiKTtcbiAgfSAvLyBVdGlsc1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVCYXNpYyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvdzEsIHJvdzIsIGNvbHVtbklkKSB7XG4gICAgcmV0dXJuIFtyb3cxLnZhbHVlc1tjb2x1bW5JZF0sIHJvdzIudmFsdWVzW2NvbHVtbklkXV07XG4gIH1cblxuICBmdW5jdGlvbiB0b1N0cmluZyhhKSB7XG4gICAgaWYgKHR5cGVvZiBhID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGlzTmFOKGEpIHx8IGEgPT09IEluZmluaXR5IHx8IGEgPT09IC1JbmZpbml0eSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBTdHJpbmcoYSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHNvcnRUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgYWxwaGFudW1lcmljOiBhbHBoYW51bWVyaWMsXG4gICAgZGF0ZXRpbWU6IGRhdGV0aW1lLFxuICAgIGJhc2ljOiBiYXNpYyxcbiAgICBzdHJpbmc6IHN0cmluZyxcbiAgICBudW1iZXI6IG51bWJlclxuICB9KTtcblxuICBhY3Rpb25zLnJlc2V0U29ydEJ5ID0gJ3Jlc2V0U29ydEJ5JztcbiAgYWN0aW9ucy5zZXRTb3J0QnkgPSAnc2V0U29ydEJ5JztcbiAgYWN0aW9ucy50b2dnbGVTb3J0QnkgPSAndG9nZ2xlU29ydEJ5JztcbiAgYWN0aW9ucy5jbGVhclNvcnRCeSA9ICdjbGVhclNvcnRCeSc7XG4gIGRlZmF1bHRDb2x1bW4uc29ydFR5cGUgPSAnYWxwaGFudW1lcmljJztcbiAgZGVmYXVsdENvbHVtbi5zb3J0RGVzY0ZpcnN0ID0gZmFsc2U7XG4gIHZhciB1c2VTb3J0QnkgPSBmdW5jdGlvbiB1c2VTb3J0QnkoaG9va3MpIHtcbiAgICBob29rcy5nZXRTb3J0QnlUb2dnbGVQcm9wcyA9IFtkZWZhdWx0R2V0U29ydEJ5VG9nZ2xlUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDUpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNSk7XG4gIH07XG4gIHVzZVNvcnRCeS5wbHVnaW5OYW1lID0gJ3VzZVNvcnRCeSc7XG5cbiAgdmFyIGRlZmF1bHRHZXRTb3J0QnlUb2dnbGVQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRTb3J0QnlUb2dnbGVQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIGNvbHVtbiA9IF9yZWYuY29sdW1uO1xuICAgIHZhciBfaW5zdGFuY2UkaXNNdWx0aVNvcnQgPSBpbnN0YW5jZS5pc011bHRpU29ydEV2ZW50LFxuICAgICAgICBpc011bHRpU29ydEV2ZW50ID0gX2luc3RhbmNlJGlzTXVsdGlTb3J0ID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuc2hpZnRLZXk7XG4gICAgfSA6IF9pbnN0YW5jZSRpc011bHRpU29ydDtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBjb2x1bW4uY2FuU29ydCA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBjb2x1bW4udG9nZ2xlU29ydEJ5KHVuZGVmaW5lZCwgIWluc3RhbmNlLmRpc2FibGVNdWx0aVNvcnQgJiYgaXNNdWx0aVNvcnRFdmVudChlKSk7XG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBjb2x1bW4uY2FuU29ydCA/ICdwb2ludGVyJyA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiBjb2x1bW4uY2FuU29ydCA/ICdUb2dnbGUgU29ydEJ5JyA6IHVuZGVmaW5lZFxuICAgIH1dO1xuICB9OyAvLyBSZWR1Y2VyXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDUoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgc29ydEJ5OiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFNvcnRCeSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5zb3J0QnkgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jbGVhclNvcnRCeSkge1xuICAgICAgdmFyIHNvcnRCeSA9IHN0YXRlLnNvcnRCeTtcbiAgICAgIHZhciBuZXdTb3J0QnkgPSBzb3J0QnkuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkICE9PSBhY3Rpb24uY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBuZXdTb3J0QnlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRTb3J0QnkpIHtcbiAgICAgIHZhciBfc29ydEJ5ID0gYWN0aW9uLnNvcnRCeTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBfc29ydEJ5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlU29ydEJ5KSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgZGVzYyA9IGFjdGlvbi5kZXNjLFxuICAgICAgICAgIG11bHRpID0gYWN0aW9uLm11bHRpO1xuICAgICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIGRpc2FibGVNdWx0aVNvcnQgPSBpbnN0YW5jZS5kaXNhYmxlTXVsdGlTb3J0LFxuICAgICAgICAgIGRpc2FibGVTb3J0UmVtb3ZlID0gaW5zdGFuY2UuZGlzYWJsZVNvcnRSZW1vdmUsXG4gICAgICAgICAgZGlzYWJsZU11bHRpUmVtb3ZlID0gaW5zdGFuY2UuZGlzYWJsZU11bHRpUmVtb3ZlLFxuICAgICAgICAgIF9pbnN0YW5jZSRtYXhNdWx0aVNvciA9IGluc3RhbmNlLm1heE11bHRpU29ydENvbENvdW50LFxuICAgICAgICAgIG1heE11bHRpU29ydENvbENvdW50ID0gX2luc3RhbmNlJG1heE11bHRpU29yID09PSB2b2lkIDAgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IF9pbnN0YW5jZSRtYXhNdWx0aVNvcjtcbiAgICAgIHZhciBfc29ydEJ5MiA9IHN0YXRlLnNvcnRCeTsgLy8gRmluZCB0aGUgY29sdW1uIGZvciB0aGlzIGNvbHVtbklkXG5cbiAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICB2YXIgc29ydERlc2NGaXJzdCA9IGNvbHVtbi5zb3J0RGVzY0ZpcnN0OyAvLyBGaW5kIGFueSBleGlzdGluZyBzb3J0QnkgZm9yIHRoaXMgY29sdW1uXG5cbiAgICAgIHZhciBleGlzdGluZ1NvcnRCeSA9IF9zb3J0QnkyLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBleGlzdGluZ0luZGV4ID0gX3NvcnRCeTIuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgaGFzRGVzY0RlZmluZWQgPSB0eXBlb2YgZGVzYyAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVzYyAhPT0gbnVsbDtcbiAgICAgIHZhciBfbmV3U29ydEJ5ID0gW107IC8vIFdoYXQgc2hvdWxkIHdlIGRvIHdpdGggdGhpcyBzb3J0IGFjdGlvbj9cblxuICAgICAgdmFyIHNvcnRBY3Rpb247XG5cbiAgICAgIGlmICghZGlzYWJsZU11bHRpU29ydCAmJiBtdWx0aSkge1xuICAgICAgICBpZiAoZXhpc3RpbmdTb3J0QnkpIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3RvZ2dsZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICdhZGQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3JtYWwgbW9kZVxuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCAhPT0gX3NvcnRCeTIubGVuZ3RoIC0gMSB8fCBfc29ydEJ5Mi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3JlcGxhY2UnO1xuICAgICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nU29ydEJ5KSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICd0b2dnbGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAncmVwbGFjZSc7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSGFuZGxlIHRvZ2dsZSBzdGF0ZXMgdGhhdCB3aWxsIHJlbW92ZSB0aGUgc29ydEJ5XG5cblxuICAgICAgaWYgKHNvcnRBY3Rpb24gPT09ICd0b2dnbGUnICYmIC8vIE11c3QgYmUgdG9nZ2xpbmdcbiAgICAgICFkaXNhYmxlU29ydFJlbW92ZSAmJiAvLyBJZiBkaXNhYmxlU29ydFJlbW92ZSwgZGlzYWJsZSBpbiBnZW5lcmFsXG4gICAgICAhaGFzRGVzY0RlZmluZWQgJiYgKCAvLyBNdXN0IG5vdCBiZSBzZXR0aW5nIGRlc2NcbiAgICAgIG11bHRpID8gIWRpc2FibGVNdWx0aVJlbW92ZSA6IHRydWUpICYmICggLy8gSWYgbXVsdGksIGRvbid0IGFsbG93IGlmIGRpc2FibGVNdWx0aVJlbW92ZVxuICAgICAgZXhpc3RpbmdTb3J0QnkgJiYgLy8gRmluYWxseSwgZGV0ZWN0IGlmIGl0IHNob3VsZCBpbmRlZWQgYmUgcmVtb3ZlZFxuICAgICAgZXhpc3RpbmdTb3J0QnkuZGVzYyAmJiAhc29ydERlc2NGaXJzdCB8fCAhZXhpc3RpbmdTb3J0QnkuZGVzYyAmJiBzb3J0RGVzY0ZpcnN0KSkge1xuICAgICAgICBzb3J0QWN0aW9uID0gJ3JlbW92ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0QWN0aW9uID09PSAncmVwbGFjZScpIHtcbiAgICAgICAgX25ld1NvcnRCeSA9IFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6IHNvcnREZXNjRmlyc3RcbiAgICAgICAgfV07XG4gICAgICB9IGVsc2UgaWYgKHNvcnRBY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgICAgIF9uZXdTb3J0QnkgPSBbXS5jb25jYXQoX3NvcnRCeTIsIFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6IHNvcnREZXNjRmlyc3RcbiAgICAgICAgfV0pOyAvLyBUYWtlIGxhdGVzdCBuIGNvbHVtbnNcblxuICAgICAgICBfbmV3U29ydEJ5LnNwbGljZSgwLCBfbmV3U29ydEJ5Lmxlbmd0aCAtIG1heE11bHRpU29ydENvbENvdW50KTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEFjdGlvbiA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgLy8gVGhpcyBmbGlwcyAob3Igc2V0cykgdGhlXG4gICAgICAgIF9uZXdTb3J0QnkgPSBfc29ydEJ5Mi5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBpZiAoZC5pZCA9PT0gY29sdW1uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZCwge1xuICAgICAgICAgICAgICBkZXNjOiBoYXNEZXNjRGVmaW5lZCA/IGRlc2MgOiAhZXhpc3RpbmdTb3J0QnkuZGVzY1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzb3J0QWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICBfbmV3U29ydEJ5ID0gX3NvcnRCeTIuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQgIT09IGNvbHVtbklkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IF9uZXdTb3J0QnlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDUoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IGluc3RhbmNlLmZsYXRSb3dzLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgX2luc3RhbmNlJG9yZGVyQnlGbiA9IGluc3RhbmNlLm9yZGVyQnlGbixcbiAgICAgICAgb3JkZXJCeUZuID0gX2luc3RhbmNlJG9yZGVyQnlGbiA9PT0gdm9pZCAwID8gZGVmYXVsdE9yZGVyQnlGbiA6IF9pbnN0YW5jZSRvcmRlckJ5Rm4sXG4gICAgICAgIHVzZXJTb3J0VHlwZXMgPSBpbnN0YW5jZS5zb3J0VHlwZXMsXG4gICAgICAgIG1hbnVhbFNvcnRCeSA9IGluc3RhbmNlLm1hbnVhbFNvcnRCeSxcbiAgICAgICAgZGVmYXVsdENhblNvcnQgPSBpbnN0YW5jZS5kZWZhdWx0Q2FuU29ydCxcbiAgICAgICAgZGlzYWJsZVNvcnRCeSA9IGluc3RhbmNlLmRpc2FibGVTb3J0QnksXG4gICAgICAgIGZsYXRIZWFkZXJzID0gaW5zdGFuY2UuZmxhdEhlYWRlcnMsXG4gICAgICAgIHNvcnRCeSA9IGluc3RhbmNlLnN0YXRlLnNvcnRCeSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRTbyA9IGluc3RhbmNlLmF1dG9SZXNldFNvcnRCeSxcbiAgICAgICAgYXV0b1Jlc2V0U29ydEJ5ID0gX2luc3RhbmNlJGF1dG9SZXNldFNvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFNvO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlRmlsdGVycycsICd1c2VHbG9iYWxGaWx0ZXInLCAndXNlR3JvdXBCeScsICd1c2VQaXZvdENvbHVtbnMnXSwgJ3VzZVNvcnRCeScpO1xuICAgIHZhciBzZXRTb3J0QnkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc29ydEJ5KSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0U29ydEJ5LFxuICAgICAgICBzb3J0Qnk6IHNvcnRCeVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7IC8vIFVwZGF0ZXMgc29ydGluZyBiYXNlZCBvbiBhIGNvbHVtbklkLCBkZXNjIGZsYWcgYW5kIG11bHRpIGZsYWdcblxuICAgIHZhciB0b2dnbGVTb3J0QnkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIGRlc2MsIG11bHRpKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlU29ydEJ5LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIGRlc2M6IGRlc2MsXG4gICAgICAgIG11bHRpOiBtdWx0aVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7IC8vIHVzZSByZWZlcmVuY2UgdG8gYXZvaWQgbWVtb3J5IGxlYWsgaW4gIzE2MDhcblxuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7IC8vIEFkZCB0aGUgZ2V0U29ydEJ5VG9nZ2xlUHJvcHMgbWV0aG9kIHRvIGNvbHVtbnMgYW5kIGhlYWRlcnNcblxuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGRlZmF1bHRDb2x1bW5DYW5Tb3J0ID0gY29sdW1uLmNhblNvcnQsXG4gICAgICAgICAgY29sdW1uRGlzYWJsZVNvcnRCeSA9IGNvbHVtbi5kaXNhYmxlU29ydEJ5LFxuICAgICAgICAgIGlkID0gY29sdW1uLmlkO1xuICAgICAgdmFyIGNhblNvcnQgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW5EaXNhYmxlU29ydEJ5ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVTb3J0QnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoZGVmYXVsdENhblNvcnQsIGRlZmF1bHRDb2x1bW5DYW5Tb3J0LCBmYWxzZSk7XG4gICAgICBjb2x1bW4uY2FuU29ydCA9IGNhblNvcnQ7XG5cbiAgICAgIGlmIChjb2x1bW4uY2FuU29ydCkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlU29ydEJ5ID0gZnVuY3Rpb24gKGRlc2MsIG11bHRpKSB7XG4gICAgICAgICAgcmV0dXJuIHRvZ2dsZVNvcnRCeShjb2x1bW4uaWQsIGRlc2MsIG11bHRpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb2x1bW4uY2xlYXJTb3J0QnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5jbGVhclNvcnRCeSxcbiAgICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW4uaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRTb3J0QnlUb2dnbGVQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0pO1xuICAgICAgdmFyIGNvbHVtblNvcnQgPSBzb3J0QnkuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5pc1NvcnRlZCA9ICEhY29sdW1uU29ydDtcbiAgICAgIGNvbHVtbi5zb3J0ZWRJbmRleCA9IHNvcnRCeS5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGlkO1xuICAgICAgfSk7XG4gICAgICBjb2x1bW4uaXNTb3J0ZWREZXNjID0gY29sdW1uLmlzU29ydGVkID8gY29sdW1uU29ydC5kZXNjIDogdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWFudWFsU29ydEJ5IHx8ICFzb3J0QnkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3NdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc29ydGVkRmxhdFJvd3MgPSBbXTsgLy8gRmlsdGVyIG91dCBzb3J0QnlzIHRoYXQgY29ycmVzcG9uZCB0byBub24gZXhpc3RpbmcgY29sdW1uc1xuXG4gICAgICB2YXIgYXZhaWxhYmxlU29ydEJ5ID0gc29ydEJ5LmZpbHRlcihmdW5jdGlvbiAoc29ydCkge1xuICAgICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gY29sLmlkID09PSBzb3J0LmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc29ydERhdGEgPSBmdW5jdGlvbiBzb3J0RGF0YShyb3dzKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgb3JkZXJCeUZuIHRvIGNvbXBvc2UgbXVsdGlwbGUgc29ydEJ5J3MgdG9nZXRoZXIuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBhbHNvIHBlcmZvcm0gYSBzdGFibGUgc29ydGluZyB1c2luZyB0aGUgcm93IGluZGV4XG4gICAgICAgIC8vIGlmIG5lZWRlZC5cbiAgICAgICAgdmFyIHNvcnRlZERhdGEgPSBvcmRlckJ5Rm4ocm93cywgYXZhaWxhYmxlU29ydEJ5Lm1hcChmdW5jdGlvbiAoc29ydCkge1xuICAgICAgICAgIC8vIFN1cHBvcnQgY3VzdG9tIHNvcnRpbmcgbWV0aG9kcyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gc29ydC5pZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC1UYWJsZTogQ291bGQgbm90IGZpbmQgYSBjb2x1bW4gd2l0aCBpZDogXCIgKyBzb3J0LmlkICsgXCIgd2hpbGUgc29ydGluZ1wiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc29ydFR5cGUgPSBjb2x1bW4uc29ydFR5cGU7IC8vIExvb2sgdXAgc29ydEJ5IGZ1bmN0aW9ucyBpbiB0aGlzIG9yZGVyOlxuICAgICAgICAgIC8vIGNvbHVtbiBmdW5jdGlvblxuICAgICAgICAgIC8vIGNvbHVtbiBzdHJpbmcgbG9va3VwIG9uIHVzZXIgc29ydFR5cGVcbiAgICAgICAgICAvLyBjb2x1bW4gc3RyaW5nIGxvb2t1cCBvbiBidWlsdC1pbiBzb3J0VHlwZVxuICAgICAgICAgIC8vIGRlZmF1bHQgZnVuY3Rpb25cbiAgICAgICAgICAvLyBkZWZhdWx0IHN0cmluZyBsb29rdXAgb24gdXNlciBzb3J0VHlwZVxuICAgICAgICAgIC8vIGRlZmF1bHQgc3RyaW5nIGxvb2t1cCBvbiBidWlsdC1pbiBzb3J0VHlwZVxuXG4gICAgICAgICAgdmFyIHNvcnRNZXRob2QgPSBpc0Z1bmN0aW9uKHNvcnRUeXBlKSB8fCAodXNlclNvcnRUeXBlcyB8fCB7fSlbc29ydFR5cGVdIHx8IHNvcnRUeXBlc1tzb3J0VHlwZV07XG5cbiAgICAgICAgICBpZiAoIXNvcnRNZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LVRhYmxlOiBDb3VsZCBub3QgZmluZCBhIHZhbGlkIHNvcnRUeXBlIG9mICdcIiArIHNvcnRUeXBlICsgXCInIGZvciBjb2x1bW4gJ1wiICsgc29ydC5pZCArIFwiJy5cIik7XG4gICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGNvcnJlY3Qgc29ydEZuLlxuICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGFsd2F5cyByZXR1cm4gaW4gYXNjZW5kaW5nIG9yZGVyXG5cblxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRNZXRob2QoYSwgYiwgc29ydC5pZCwgc29ydC5kZXNjKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSwgLy8gTWFwIHRoZSBkaXJlY3Rpb25zXG4gICAgICAgIGF2YWlsYWJsZVNvcnRCeS5tYXAoZnVuY3Rpb24gKHNvcnQpIHtcbiAgICAgICAgICAvLyBEZXRlY3QgYW5kIHVzZSB0aGUgc29ydEludmVydGVkIG9wdGlvblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBzb3J0LmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4uc29ydEludmVydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydC5kZXNjO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAhc29ydC5kZXNjO1xuICAgICAgICB9KSk7IC8vIElmIHRoZXJlIGFyZSBzdWItcm93cywgc29ydCB0aGVtXG5cbiAgICAgICAgc29ydGVkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBzb3J0ZWRGbGF0Um93cy5wdXNoKHJvdyk7XG5cbiAgICAgICAgICBpZiAoIXJvdy5zdWJSb3dzIHx8IHJvdy5zdWJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdy5zdWJSb3dzID0gc29ydERhdGEocm93LnN1YlJvd3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNvcnRlZERhdGE7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gW3NvcnREYXRhKHJvd3MpLCBzb3J0ZWRGbGF0Um93c107XG4gICAgfSwgW21hbnVhbFNvcnRCeSwgc29ydEJ5LCByb3dzLCBmbGF0Um93cywgYWxsQ29sdW1ucywgb3JkZXJCeUZuLCB1c2VyU29ydFR5cGVzXSksXG4gICAgICAgIHNvcnRlZFJvd3MgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgc29ydGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXTtcblxuICAgIHZhciBnZXRBdXRvUmVzZXRTb3J0QnkgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0U29ydEJ5KTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRTb3J0QnkoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFNvcnRCeVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbbWFudWFsU29ydEJ5ID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVTb3J0ZWRSb3dzOiByb3dzLFxuICAgICAgcHJlU29ydGVkRmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgc29ydGVkUm93czogc29ydGVkUm93cyxcbiAgICAgIHNvcnRlZEZsYXRSb3dzOiBzb3J0ZWRGbGF0Um93cyxcbiAgICAgIHJvd3M6IHNvcnRlZFJvd3MsXG4gICAgICBmbGF0Um93czogc29ydGVkRmxhdFJvd3MsXG4gICAgICBzZXRTb3J0Qnk6IHNldFNvcnRCeSxcbiAgICAgIHRvZ2dsZVNvcnRCeTogdG9nZ2xlU29ydEJ5XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0T3JkZXJCeUZuKGFyciwgZnVuY3MsIGRpcnMpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGFycikuc29ydChmdW5jdGlvbiAocm93QSwgcm93Qikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgc29ydEZuID0gZnVuY3NbaV07XG4gICAgICAgIHZhciBkZXNjID0gZGlyc1tpXSA9PT0gZmFsc2UgfHwgZGlyc1tpXSA9PT0gJ2Rlc2MnO1xuICAgICAgICB2YXIgc29ydEludCA9IHNvcnRGbihyb3dBLCByb3dCKTtcblxuICAgICAgICBpZiAoc29ydEludCAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiBkZXNjID8gLXNvcnRJbnQgOiBzb3J0SW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJzWzBdID8gcm93QS5pbmRleCAtIHJvd0IuaW5kZXggOiByb3dCLmluZGV4IC0gcm93QS5pbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwbHVnaW5OYW1lID0gJ3VzZVBhZ2luYXRpb24nOyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5yZXNldFBhZ2UgPSAncmVzZXRQYWdlJztcbiAgYWN0aW9ucy5nb3RvUGFnZSA9ICdnb3RvUGFnZSc7XG4gIGFjdGlvbnMuc2V0UGFnZVNpemUgPSAnc2V0UGFnZVNpemUnO1xuICB2YXIgdXNlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIHVzZVBhZ2luYXRpb24oaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ2KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDYpO1xuICB9O1xuICB1c2VQYWdpbmF0aW9uLnBsdWdpbk5hbWUgPSBwbHVnaW5OYW1lO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNihzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgIHBhZ2VJbmRleDogMFxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFBhZ2UpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUluZGV4OiBpbnN0YW5jZS5pbml0aWFsU3RhdGUucGFnZUluZGV4IHx8IDBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5nb3RvUGFnZSkge1xuICAgICAgdmFyIHBhZ2VDb3VudCA9IGluc3RhbmNlLnBhZ2VDb3VudCxcbiAgICAgICAgICBwYWdlID0gaW5zdGFuY2UucGFnZTtcbiAgICAgIHZhciBuZXdQYWdlSW5kZXggPSBmdW5jdGlvbmFsVXBkYXRlKGFjdGlvbi5wYWdlSW5kZXgsIHN0YXRlLnBhZ2VJbmRleCk7XG4gICAgICB2YXIgY2FuTmF2aWdhdGUgPSBmYWxzZTtcblxuICAgICAgaWYgKG5ld1BhZ2VJbmRleCA+IHN0YXRlLnBhZ2VJbmRleCkge1xuICAgICAgICAvLyBuZXh0IHBhZ2VcbiAgICAgICAgY2FuTmF2aWdhdGUgPSBwYWdlQ291bnQgPT09IC0xID8gcGFnZS5sZW5ndGggPj0gc3RhdGUucGFnZVNpemUgOiBuZXdQYWdlSW5kZXggPCBwYWdlQ291bnQ7XG4gICAgICB9IGVsc2UgaWYgKG5ld1BhZ2VJbmRleCA8IHN0YXRlLnBhZ2VJbmRleCkge1xuICAgICAgICAvLyBwcmV2IHBhZ2VcbiAgICAgICAgY2FuTmF2aWdhdGUgPSBuZXdQYWdlSW5kZXggPiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYW5OYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUluZGV4OiBuZXdQYWdlSW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRQYWdlU2l6ZSkge1xuICAgICAgdmFyIHBhZ2VTaXplID0gYWN0aW9uLnBhZ2VTaXplO1xuICAgICAgdmFyIHRvcFJvd0luZGV4ID0gc3RhdGUucGFnZVNpemUgKiBzdGF0ZS5wYWdlSW5kZXg7XG4gICAgICB2YXIgcGFnZUluZGV4ID0gTWF0aC5mbG9vcih0b3BSb3dJbmRleCAvIHBhZ2VTaXplKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUluZGV4OiBwYWdlSW5kZXgsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkNihpbnN0YW5jZSkge1xuICAgIHZhciByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFBhID0gaW5zdGFuY2UuYXV0b1Jlc2V0UGFnZSxcbiAgICAgICAgYXV0b1Jlc2V0UGFnZSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRQYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRQYSxcbiAgICAgICAgX2luc3RhbmNlJG1hbnVhbEV4cGFuID0gaW5zdGFuY2UubWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5ID0gX2luc3RhbmNlJG1hbnVhbEV4cGFuID09PSB2b2lkIDAgPyAnZXhwYW5kZWQnIDogX2luc3RhbmNlJG1hbnVhbEV4cGFuLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgdXNlclBhZ2VDb3VudCA9IGluc3RhbmNlLnBhZ2VDb3VudCxcbiAgICAgICAgX2luc3RhbmNlJHBhZ2luYXRlRXhwID0gaW5zdGFuY2UucGFnaW5hdGVFeHBhbmRlZFJvd3MsXG4gICAgICAgIHBhZ2luYXRlRXhwYW5kZWRSb3dzID0gX2luc3RhbmNlJHBhZ2luYXRlRXhwID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHBhZ2luYXRlRXhwLFxuICAgICAgICBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPSBpbnN0YW5jZS5leHBhbmRTdWJSb3dzLFxuICAgICAgICBleHBhbmRTdWJSb3dzID0gX2luc3RhbmNlJGV4cGFuZFN1YlJvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGV4cGFuZFN1YlJvLFxuICAgICAgICBfaW5zdGFuY2Ukc3RhdGUgPSBpbnN0YW5jZS5zdGF0ZSxcbiAgICAgICAgcGFnZVNpemUgPSBfaW5zdGFuY2Ukc3RhdGUucGFnZVNpemUsXG4gICAgICAgIHBhZ2VJbmRleCA9IF9pbnN0YW5jZSRzdGF0ZS5wYWdlSW5kZXgsXG4gICAgICAgIGV4cGFuZGVkID0gX2luc3RhbmNlJHN0YXRlLmV4cGFuZGVkLFxuICAgICAgICBnbG9iYWxGaWx0ZXIgPSBfaW5zdGFuY2Ukc3RhdGUuZ2xvYmFsRmlsdGVyLFxuICAgICAgICBmaWx0ZXJzID0gX2luc3RhbmNlJHN0YXRlLmZpbHRlcnMsXG4gICAgICAgIGdyb3VwQnkgPSBfaW5zdGFuY2Ukc3RhdGUuZ3JvdXBCeSxcbiAgICAgICAgc29ydEJ5ID0gX2luc3RhbmNlJHN0YXRlLnNvcnRCeSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIG1hbnVhbFBhZ2luYXRpb24gPSBpbnN0YW5jZS5tYW51YWxQYWdpbmF0aW9uO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlR2xvYmFsRmlsdGVyJywgJ3VzZUZpbHRlcnMnLCAndXNlR3JvdXBCeScsICd1c2VTb3J0QnknLCAndXNlRXhwYW5kZWQnXSwgJ3VzZVBhZ2luYXRpb24nKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0UGFnZSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRQYWdlKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRQYWdlKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRQYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsUGFnaW5hdGlvbiA/IG51bGwgOiBkYXRhLCBnbG9iYWxGaWx0ZXIsIGZpbHRlcnMsIGdyb3VwQnksIHNvcnRCeV0pO1xuICAgIHZhciBwYWdlQ291bnQgPSBtYW51YWxQYWdpbmF0aW9uID8gdXNlclBhZ2VDb3VudCA6IE1hdGguY2VpbChyb3dzLmxlbmd0aCAvIHBhZ2VTaXplKTtcbiAgICB2YXIgcGFnZU9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYWdlQ291bnQgPiAwID8gW10uY29uY2F0KG5ldyBBcnJheShwYWdlQ291bnQpKS5maWxsKG51bGwpLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pIDogW107XG4gICAgfSwgW3BhZ2VDb3VudF0pO1xuICAgIHZhciBwYWdlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFnZTtcblxuICAgICAgaWYgKG1hbnVhbFBhZ2luYXRpb24pIHtcbiAgICAgICAgcGFnZSA9IHJvd3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFnZVN0YXJ0ID0gcGFnZVNpemUgKiBwYWdlSW5kZXg7XG4gICAgICAgIHZhciBwYWdlRW5kID0gcGFnZVN0YXJ0ICsgcGFnZVNpemU7XG4gICAgICAgIHBhZ2UgPSByb3dzLnNsaWNlKHBhZ2VTdGFydCwgcGFnZUVuZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdpbmF0ZUV4cGFuZGVkUm93cykge1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV4cGFuZFJvd3MocGFnZSwge1xuICAgICAgICBtYW51YWxFeHBhbmRlZEtleTogbWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgZXhwYW5kU3ViUm93czogZXhwYW5kU3ViUm93c1xuICAgICAgfSk7XG4gICAgfSwgW2V4cGFuZFN1YlJvd3MsIGV4cGFuZGVkLCBtYW51YWxFeHBhbmRlZEtleSwgbWFudWFsUGFnaW5hdGlvbiwgcGFnZUluZGV4LCBwYWdlU2l6ZSwgcGFnaW5hdGVFeHBhbmRlZFJvd3MsIHJvd3NdKTtcbiAgICB2YXIgY2FuUHJldmlvdXNQYWdlID0gcGFnZUluZGV4ID4gMDtcbiAgICB2YXIgY2FuTmV4dFBhZ2UgPSBwYWdlQ291bnQgPT09IC0xID8gcGFnZS5sZW5ndGggPj0gcGFnZVNpemUgOiBwYWdlSW5kZXggPCBwYWdlQ291bnQgLSAxO1xuICAgIHZhciBnb3RvUGFnZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYWdlSW5kZXgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5nb3RvUGFnZSxcbiAgICAgICAgcGFnZUluZGV4OiBwYWdlSW5kZXhcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBwcmV2aW91c1BhZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ290b1BhZ2UoZnVuY3Rpb24gKG9sZCkge1xuICAgICAgICByZXR1cm4gb2xkIC0gMTtcbiAgICAgIH0pO1xuICAgIH0sIFtnb3RvUGFnZV0pO1xuICAgIHZhciBuZXh0UGFnZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnb3RvUGFnZShmdW5jdGlvbiAob2xkKSB7XG4gICAgICAgIHJldHVybiBvbGQgKyAxO1xuICAgICAgfSk7XG4gICAgfSwgW2dvdG9QYWdlXSk7XG4gICAgdmFyIHNldFBhZ2VTaXplID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBhZ2VTaXplKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0UGFnZVNpemUsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcGFnZU9wdGlvbnM6IHBhZ2VPcHRpb25zLFxuICAgICAgcGFnZUNvdW50OiBwYWdlQ291bnQsXG4gICAgICBwYWdlOiBwYWdlLFxuICAgICAgY2FuUHJldmlvdXNQYWdlOiBjYW5QcmV2aW91c1BhZ2UsXG4gICAgICBjYW5OZXh0UGFnZTogY2FuTmV4dFBhZ2UsXG4gICAgICBnb3RvUGFnZTogZ290b1BhZ2UsXG4gICAgICBwcmV2aW91c1BhZ2U6IHByZXZpb3VzUGFnZSxcbiAgICAgIG5leHRQYWdlOiBuZXh0UGFnZSxcbiAgICAgIHNldFBhZ2VTaXplOiBzZXRQYWdlU2l6ZVxuICAgIH0pO1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldFBpdm90ID0gJ3Jlc2V0UGl2b3QnO1xuICBhY3Rpb25zLnRvZ2dsZVBpdm90ID0gJ3RvZ2dsZVBpdm90JztcbiAgdmFyIF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMgPSBmdW5jdGlvbiBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zKGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0UGl2b3RUb2dnbGVQcm9wcyA9IFtkZWZhdWx0R2V0UGl2b3RUb2dnbGVQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkNyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2VBZnRlckRhdGEucHVzaCh1c2VJbnN0YW5jZUFmdGVyRGF0YSk7XG4gICAgaG9va3MuYWxsQ29sdW1ucy5wdXNoKGFsbENvbHVtbnMpO1xuICAgIGhvb2tzLmFjY2Vzc1ZhbHVlLnB1c2goYWNjZXNzVmFsdWUpO1xuICAgIGhvb2tzLm1hdGVyaWFsaXplZENvbHVtbnMucHVzaChtYXRlcmlhbGl6ZWRDb2x1bW5zKTtcbiAgICBob29rcy5tYXRlcmlhbGl6ZWRDb2x1bW5zRGVwcy5wdXNoKG1hdGVyaWFsaXplZENvbHVtbnNEZXBzKTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKHZpc2libGVDb2x1bW5zJDEpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zRGVwcy5wdXNoKHZpc2libGVDb2x1bW5zRGVwcyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ3KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQyKTtcbiAgfTtcbiAgX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucy5wbHVnaW5OYW1lID0gJ3VzZVBpdm90Q29sdW1ucyc7XG4gIHZhciBkZWZhdWx0UGl2b3RDb2x1bW5zID0gW107XG5cbiAgdmFyIGRlZmF1bHRHZXRQaXZvdFRvZ2dsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFBpdm90VG9nZ2xlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaGVhZGVyID0gX3JlZi5oZWFkZXI7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogaGVhZGVyLmNhblBpdm90ID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIGhlYWRlci50b2dnbGVQaXZvdCgpO1xuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogaGVhZGVyLmNhblBpdm90ID8gJ3BvaW50ZXInIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgdGl0bGU6ICdUb2dnbGUgUGl2b3QnXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNyhzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwaXZvdENvbHVtbnM6IGRlZmF1bHRQaXZvdENvbHVtbnNcbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRQaXZvdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwaXZvdENvbHVtbnM6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5waXZvdENvbHVtbnMgfHwgZGVmYXVsdFBpdm90Q29sdW1uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZVBpdm90KSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgc2V0UGl2b3QgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgcmVzb2x2ZWRQaXZvdCA9IHR5cGVvZiBzZXRQaXZvdCAhPT0gJ3VuZGVmaW5lZCcgPyBzZXRQaXZvdCA6ICFzdGF0ZS5waXZvdENvbHVtbnMuaW5jbHVkZXMoY29sdW1uSWQpO1xuXG4gICAgICBpZiAocmVzb2x2ZWRQaXZvdCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgcGl2b3RDb2x1bW5zOiBbXS5jb25jYXQoc3RhdGUucGl2b3RDb2x1bW5zLCBbY29sdW1uSWRdKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwaXZvdENvbHVtbnM6IHN0YXRlLnBpdm90Q29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZCAhPT0gY29sdW1uSWQ7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZUFmdGVyRGF0YShpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4uaXNQaXZvdFNvdXJjZSA9IGluc3RhbmNlLnN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsQ29sdW1ucyhjb2x1bW5zLCBfcmVmMikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYyLmluc3RhbmNlO1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4uaXNQaXZvdFNvdXJjZSA9IGluc3RhbmNlLnN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgICAgY29sdW1uLnVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY2Vzc1ZhbHVlKHZhbHVlLCBfcmVmMykge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMy5jb2x1bW47XG5cbiAgICBpZiAoY29sdW1uLnVuaXF1ZVZhbHVlcyAmJiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb2x1bW4udW5pcXVlVmFsdWVzLmFkZCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0ZXJpYWxpemVkQ29sdW1ucyhtYXRlcmlhbGl6ZWQsIF9yZWY0KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjQuaW5zdGFuY2U7XG4gICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBzdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuXG4gICAgaWYgKCFzdGF0ZS5waXZvdENvbHVtbnMubGVuZ3RoIHx8ICFzdGF0ZS5ncm91cEJ5IHx8ICFzdGF0ZS5ncm91cEJ5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG1hdGVyaWFsaXplZDtcbiAgICB9XG5cbiAgICB2YXIgcGl2b3RDb2x1bW5zID0gc3RhdGUucGl2b3RDb2x1bW5zLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGlkO1xuICAgICAgfSk7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIHZhciBzb3VyY2VDb2x1bW5zID0gYWxsQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiAhZC5pc1Bpdm90U291cmNlICYmICFzdGF0ZS5ncm91cEJ5LmluY2x1ZGVzKGQuaWQpICYmICFzdGF0ZS5waXZvdENvbHVtbnMuaW5jbHVkZXMoZC5pZCk7XG4gICAgfSk7XG5cbiAgICB2YXIgYnVpbGRQaXZvdENvbHVtbnMgPSBmdW5jdGlvbiBidWlsZFBpdm90Q29sdW1ucyhkZXB0aCwgcGFyZW50LCBwaXZvdEZpbHRlcnMpIHtcbiAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpdm90RmlsdGVycyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHBpdm90RmlsdGVycyA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGl2b3RDb2x1bW4gPSBwaXZvdENvbHVtbnNbZGVwdGhdO1xuXG4gICAgICBpZiAoIXBpdm90Q29sdW1uKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2VDb2x1bW5zLm1hcChmdW5jdGlvbiAoc291cmNlQ29sdW1uKSB7XG4gICAgICAgICAgLy8gVE9ETzogV2UgY291bGQgb2ZmZXIgc3VwcG9ydCBoZXJlIGZvciByZW5lc3RpbmcgcGl2b3RlZFxuICAgICAgICAgIC8vIGNvbHVtbnMgaW5zaWRlIGNvcGllcyBvZiB0aGVpciBoZWFkZXIgZ3JvdXBzLiBGb3Igbm93LFxuICAgICAgICAgIC8vIHRoYXQgc2VlbXMgbGlrZSBpdCB3b3VsZCBiZSAoMSkgb3ZlcmtpbGwgb24gbmVzdGluZywgY29uc2lkZXJpbmdcbiAgICAgICAgICAvLyB5b3UgYWxyZWFkeSBnZXQgbmVzdGluZyBmb3IgZXZlcnkgcGl2b3QgbGV2ZWwgYW5kICgyKVxuICAgICAgICAgIC8vIHJlYWxseSBoYXJkLiA6KVxuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc291cmNlQ29sdW1uLCB7XG4gICAgICAgICAgICBjYW5QaXZvdDogZmFsc2UsXG4gICAgICAgICAgICBpc1Bpdm90ZWQ6IHRydWUsXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICAgIGlkOiBcIlwiICsgKHBhcmVudCA/IHBhcmVudC5pZCArIFwiLlwiICsgc291cmNlQ29sdW1uLmlkIDogc291cmNlQ29sdW1uLmlkKSxcbiAgICAgICAgICAgIGFjY2Vzc29yOiBmdW5jdGlvbiBhY2Nlc3NvcihvcmlnaW5hbFJvdywgaSwgcm93KSB7XG4gICAgICAgICAgICAgIGlmIChwaXZvdEZpbHRlcnMuZXZlcnkoZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXIocm93KTtcbiAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93LnZhbHVlc1tzb3VyY2VDb2x1bW4uaWRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgdW5pcXVlVmFsdWVzID0gQXJyYXkuZnJvbShwaXZvdENvbHVtbi51bmlxdWVWYWx1ZXMpLnNvcnQoKTtcbiAgICAgIHJldHVybiB1bmlxdWVWYWx1ZXMubWFwKGZ1bmN0aW9uICh1bmlxdWVWYWx1ZSkge1xuICAgICAgICB2YXIgY29sdW1uR3JvdXAgPSBfZXh0ZW5kcyh7fSwgcGl2b3RDb2x1bW4sIHtcbiAgICAgICAgICBIZWFkZXI6IHBpdm90Q29sdW1uLlBpdm90SGVhZGVyIHx8IHR5cGVvZiBwaXZvdENvbHVtbi5oZWFkZXIgPT09ICdzdHJpbmcnID8gcGl2b3RDb2x1bW4uSGVhZGVyICsgXCI6IFwiICsgdW5pcXVlVmFsdWUgOiB1bmlxdWVWYWx1ZSxcbiAgICAgICAgICBpc1Bpdm90R3JvdXA6IHRydWUsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGlkOiBwYXJlbnQgPyBwYXJlbnQuaWQgKyBcIi5cIiArIHBpdm90Q29sdW1uLmlkICsgXCIuXCIgKyB1bmlxdWVWYWx1ZSA6IHBpdm90Q29sdW1uLmlkICsgXCIuXCIgKyB1bmlxdWVWYWx1ZSxcbiAgICAgICAgICBwaXZvdFZhbHVlOiB1bmlxdWVWYWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb2x1bW5Hcm91cC5jb2x1bW5zID0gYnVpbGRQaXZvdENvbHVtbnMoZGVwdGggKyAxLCBjb2x1bW5Hcm91cCwgW10uY29uY2F0KHBpdm90RmlsdGVycywgW2Z1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gcm93LnZhbHVlc1twaXZvdENvbHVtbi5pZF0gPT09IHVuaXF1ZVZhbHVlO1xuICAgICAgICB9XSkpO1xuICAgICAgICByZXR1cm4gY29sdW1uR3JvdXA7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIG5ld01hdGVyaWFsaXplZCA9IGZsYXR0ZW5Db2x1bW5zKGJ1aWxkUGl2b3RDb2x1bW5zKCkpO1xuICAgIHJldHVybiBbXS5jb25jYXQobWF0ZXJpYWxpemVkLCBuZXdNYXRlcmlhbGl6ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0ZXJpYWxpemVkQ29sdW1uc0RlcHMoZGVwcywgX3JlZjUpIHtcbiAgICB2YXIgX3JlZjUkaW5zdGFuY2Ukc3RhdGUgPSBfcmVmNS5pbnN0YW5jZS5zdGF0ZSxcbiAgICAgICAgcGl2b3RDb2x1bW5zID0gX3JlZjUkaW5zdGFuY2Ukc3RhdGUucGl2b3RDb2x1bW5zLFxuICAgICAgICBncm91cEJ5ID0gX3JlZjUkaW5zdGFuY2Ukc3RhdGUuZ3JvdXBCeTtcbiAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtwaXZvdENvbHVtbnMsIGdyb3VwQnldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGVDb2x1bW5zJDEodmlzaWJsZUNvbHVtbnMsIF9yZWY2KSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjYuaW5zdGFuY2Uuc3RhdGU7XG4gICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiAhZC5pc1Bpdm90U291cmNlO1xuICAgIH0pO1xuXG4gICAgaWYgKHN0YXRlLnBpdm90Q29sdW1ucy5sZW5ndGggJiYgc3RhdGUuZ3JvdXBCeSAmJiBzdGF0ZS5ncm91cEJ5Lmxlbmd0aCkge1xuICAgICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gY29sdW1uLmlzR3JvdXBlZCB8fCBjb2x1bW4uaXNQaXZvdGVkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2libGVDb2x1bW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnNEZXBzKGRlcHMsIF9yZWY3KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjcuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLCBpbnN0YW5jZS5zdGF0ZS5ncm91cEJ5XSk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ3KGluc3RhbmNlKSB7XG4gICAgdmFyIGNvbHVtbnMgPSBpbnN0YW5jZS5jb2x1bW5zLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRQaSA9IGluc3RhbmNlLmF1dG9SZXNldFBpdm90LFxuICAgICAgICBhdXRvUmVzZXRQaXZvdCA9IF9pbnN0YW5jZSRhdXRvUmVzZXRQaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRQaSxcbiAgICAgICAgbWFuYXVsUGl2b3QgPSBpbnN0YW5jZS5tYW5hdWxQaXZvdCxcbiAgICAgICAgZGlzYWJsZVBpdm90ID0gaW5zdGFuY2UuZGlzYWJsZVBpdm90LFxuICAgICAgICBkZWZhdWx0Q2FuUGl2b3QgPSBpbnN0YW5jZS5kZWZhdWx0Q2FuUGl2b3Q7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VHcm91cEJ5J10sICd1c2VQaXZvdENvbHVtbnMnKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgZGVmYXVsdENvbHVtblBpdm90ID0gY29sdW1uLmRlZmF1bHRQaXZvdCxcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlUGl2b3QgPSBjb2x1bW4uZGlzYWJsZVBpdm90O1xuICAgICAgY29sdW1uLmNhblBpdm90ID0gYWNjZXNzb3IgPyBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhblBpdm90LCBjb2x1bW5EaXNhYmxlUGl2b3QgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZVBpdm90ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpIDogZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5jYW5QaXZvdCwgZGVmYXVsdENvbHVtblBpdm90LCBkZWZhdWx0Q2FuUGl2b3QsIGZhbHNlKTtcblxuICAgICAgaWYgKGNvbHVtbi5jYW5QaXZvdCkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlUGl2b3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZVBpdm90KGNvbHVtbi5pZCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi5BZ2dyZWdhdGVkID0gY29sdW1uLkFnZ3JlZ2F0ZWQgfHwgY29sdW1uLkNlbGw7XG4gICAgfSk7XG5cbiAgICB2YXIgdG9nZ2xlUGl2b3QgPSBmdW5jdGlvbiB0b2dnbGVQaXZvdChjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVQaXZvdCxcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIGhlYWRlci5nZXRQaXZvdFRvZ2dsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRQaXZvdFRvZ2dsZVByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGdldEF1dG9SZXNldFBpdm90ID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFBpdm90KTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRQaXZvdCgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0UGl2b3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW5hdWxQaXZvdCA/IG51bGwgOiBjb2x1bW5zXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgdG9nZ2xlUGl2b3Q6IHRvZ2dsZVBpdm90XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93JDIocm93KSB7XG4gICAgcm93LmFsbENlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgIC8vIEdyb3VwZWQgY2VsbHMgYXJlIGluIHRoZSBwaXZvdENvbHVtbnMgYW5kIHRoZSBwaXZvdCBjZWxsIGZvciB0aGUgcm93XG4gICAgICBjZWxsLmlzUGl2b3RlZCA9IGNlbGwuY29sdW1uLmlzUGl2b3RlZDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwbHVnaW5OYW1lJDEgPSAndXNlUm93U2VsZWN0JzsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMucmVzZXRTZWxlY3RlZFJvd3MgPSAncmVzZXRTZWxlY3RlZFJvd3MnO1xuICBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NTZWxlY3RlZCA9ICd0b2dnbGVBbGxSb3dzU2VsZWN0ZWQnO1xuICBhY3Rpb25zLnRvZ2dsZVJvd1NlbGVjdGVkID0gJ3RvZ2dsZVJvd1NlbGVjdGVkJztcbiAgYWN0aW9ucy50b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkID0gJ3RvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQnO1xuICB2YXIgdXNlUm93U2VsZWN0ID0gZnVuY3Rpb24gdXNlUm93U2VsZWN0KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzXTtcbiAgICBob29rcy5nZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkOCk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ4KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQzKTtcbiAgfTtcbiAgdXNlUm93U2VsZWN0LnBsdWdpbk5hbWUgPSBwbHVnaW5OYW1lJDE7XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgICByb3cgPSBfcmVmLnJvdztcbiAgICB2YXIgX2luc3RhbmNlJG1hbnVhbFJvd1NlID0gaW5zdGFuY2UubWFudWFsUm93U2VsZWN0ZWRLZXksXG4gICAgICAgIG1hbnVhbFJvd1NlbGVjdGVkS2V5ID0gX2luc3RhbmNlJG1hbnVhbFJvd1NlID09PSB2b2lkIDAgPyAnaXNTZWxlY3RlZCcgOiBfaW5zdGFuY2UkbWFudWFsUm93U2U7XG4gICAgdmFyIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIGlmIChyb3cub3JpZ2luYWwgJiYgcm93Lm9yaWdpbmFsW21hbnVhbFJvd1NlbGVjdGVkS2V5XSkge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrZWQgPSByb3cuaXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICByb3cudG9nZ2xlUm93U2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgUm93IFNlbGVjdGVkJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHJvdy5pc1NvbWVTZWxlY3RlZFxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgaW5zdGFuY2UudG9nZ2xlQWxsUm93c1NlbGVjdGVkKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogaW5zdGFuY2UuaXNBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgUm93cyBTZWxlY3RlZCcsXG4gICAgICBpbmRldGVybWluYXRlOiBCb29sZWFuKCFpbnN0YW5jZS5pc0FsbFJvd3NTZWxlY3RlZCAmJiBPYmplY3Qua2V5cyhpbnN0YW5jZS5zdGF0ZS5zZWxlY3RlZFJvd0lkcykubGVuZ3RoKVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMy5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogaW5zdGFuY2UuaXNBbGxQYWdlUm93c1NlbGVjdGVkLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQWxsIEN1cnJlbnQgUGFnZSBSb3dzIFNlbGVjdGVkJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4oIWluc3RhbmNlLmlzQWxsUGFnZVJvd3NTZWxlY3RlZCAmJiBpbnN0YW5jZS5wYWdlLnNvbWUoZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICAgIHZhciBpZCA9IF9yZWY0LmlkO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc3RhdGUuc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgfSkpXG4gICAgfV07XG4gIH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDgoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHt9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0U2VsZWN0ZWRSb3dzKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuc2VsZWN0ZWRSb3dJZHMgfHwge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVBbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIHZhciBzZXRTZWxlY3RlZCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBpc0FsbFJvd3NTZWxlY3RlZCA9IGluc3RhbmNlLmlzQWxsUm93c1NlbGVjdGVkLFxuICAgICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgICAgX2luc3RhbmNlJG5vbkdyb3VwZWRSID0gaW5zdGFuY2Uubm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZCA9IF9pbnN0YW5jZSRub25Hcm91cGVkUiA9PT0gdm9pZCAwID8gcm93c0J5SWQgOiBfaW5zdGFuY2Ukbm9uR3JvdXBlZFI7XG4gICAgICB2YXIgc2VsZWN0QWxsID0gdHlwZW9mIHNldFNlbGVjdGVkICE9PSAndW5kZWZpbmVkJyA/IHNldFNlbGVjdGVkIDogIWlzQWxsUm93c1NlbGVjdGVkOyAvLyBPbmx5IHJlbW92ZS9hZGQgdGhlIHJvd3MgdGhhdCBhcmUgdmlzaWJsZSBvbiB0aGUgc2NyZWVuXG4gICAgICAvLyAgTGVhdmUgYWxsIHRoZSBvdGhlciByb3dzIHRoYXQgYXJlIHNlbGVjdGVkIGFsb25lLlxuXG4gICAgICB2YXIgc2VsZWN0ZWRSb3dJZHMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zZWxlY3RlZFJvd0lkcyk7XG5cbiAgICAgIGlmIChzZWxlY3RBbGwpIHtcbiAgICAgICAgT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3dJZCkge1xuICAgICAgICAgIHNlbGVjdGVkUm93SWRzW3Jvd0lkXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3dJZCkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxlY3RlZFJvd0lkc1tyb3dJZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBzZWxlY3RlZFJvd0lkc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZVJvd1NlbGVjdGVkKSB7XG4gICAgICB2YXIgaWQgPSBhY3Rpb24uaWQsXG4gICAgICAgICAgX3NldFNlbGVjdGVkID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIF9yb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICAgIF9pbnN0YW5jZSRzZWxlY3RTdWJSbyA9IGluc3RhbmNlLnNlbGVjdFN1YlJvd3MsXG4gICAgICAgICAgc2VsZWN0U3ViUm93cyA9IF9pbnN0YW5jZSRzZWxlY3RTdWJSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRzZWxlY3RTdWJSbyxcbiAgICAgICAgICBnZXRTdWJSb3dzID0gaW5zdGFuY2UuZ2V0U3ViUm93cztcbiAgICAgIHZhciBpc1NlbGVjdGVkID0gc3RhdGUuc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgdmFyIHNob3VsZEV4aXN0ID0gdHlwZW9mIF9zZXRTZWxlY3RlZCAhPT0gJ3VuZGVmaW5lZCcgPyBfc2V0U2VsZWN0ZWQgOiAhaXNTZWxlY3RlZDtcblxuICAgICAgaWYgKGlzU2VsZWN0ZWQgPT09IHNob3VsZEV4aXN0KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1NlbGVjdGVkUm93SWRzID0gX2V4dGVuZHMoe30sIHN0YXRlLnNlbGVjdGVkUm93SWRzKTtcblxuICAgICAgdmFyIGhhbmRsZVJvd0J5SWQgPSBmdW5jdGlvbiBoYW5kbGVSb3dCeUlkKGlkKSB7XG4gICAgICAgIHZhciByb3cgPSBfcm93c0J5SWRbaWRdO1xuXG4gICAgICAgIGlmICghcm93LmlzR3JvdXBlZCkge1xuICAgICAgICAgIGlmIChzaG91bGRFeGlzdCkge1xuICAgICAgICAgICAgbmV3U2VsZWN0ZWRSb3dJZHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIG5ld1NlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0U3ViUm93cyAmJiBnZXRTdWJSb3dzKHJvdykpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0U3ViUm93cyhyb3cpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJvd0J5SWQocm93LmlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaGFuZGxlUm93QnlJZChpZCk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBuZXdTZWxlY3RlZFJvd0lkc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIHZhciBfc2V0U2VsZWN0ZWQyID0gYWN0aW9uLnZhbHVlO1xuXG4gICAgICB2YXIgcGFnZSA9IGluc3RhbmNlLnBhZ2UsXG4gICAgICAgICAgX3Jvd3NCeUlkMiA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICAgIF9pbnN0YW5jZSRzZWxlY3RTdWJSbzIgPSBpbnN0YW5jZS5zZWxlY3RTdWJSb3dzLFxuICAgICAgICAgIF9zZWxlY3RTdWJSb3dzID0gX2luc3RhbmNlJHNlbGVjdFN1YlJvMiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzIsXG4gICAgICAgICAgaXNBbGxQYWdlUm93c1NlbGVjdGVkID0gaW5zdGFuY2UuaXNBbGxQYWdlUm93c1NlbGVjdGVkLFxuICAgICAgICAgIF9nZXRTdWJSb3dzID0gaW5zdGFuY2UuZ2V0U3ViUm93cztcblxuICAgICAgdmFyIF9zZWxlY3RBbGwgPSB0eXBlb2YgX3NldFNlbGVjdGVkMiAhPT0gJ3VuZGVmaW5lZCcgPyBfc2V0U2VsZWN0ZWQyIDogIWlzQWxsUGFnZVJvd3NTZWxlY3RlZDtcblxuICAgICAgdmFyIF9uZXdTZWxlY3RlZFJvd0lkcyA9IF9leHRlbmRzKHt9LCBzdGF0ZS5zZWxlY3RlZFJvd0lkcyk7XG5cbiAgICAgIHZhciBfaGFuZGxlUm93QnlJZCA9IGZ1bmN0aW9uIF9oYW5kbGVSb3dCeUlkKGlkKSB7XG4gICAgICAgIHZhciByb3cgPSBfcm93c0J5SWQyW2lkXTtcblxuICAgICAgICBpZiAoIXJvdy5pc0dyb3VwZWQpIHtcbiAgICAgICAgICBpZiAoX3NlbGVjdEFsbCkge1xuICAgICAgICAgICAgX25ld1NlbGVjdGVkUm93SWRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfbmV3U2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfc2VsZWN0U3ViUm93cyAmJiBfZ2V0U3ViUm93cyhyb3cpKSB7XG4gICAgICAgICAgcmV0dXJuIF9nZXRTdWJSb3dzKHJvdykuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gX2hhbmRsZVJvd0J5SWQocm93LmlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcGFnZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgcmV0dXJuIF9oYW5kbGVSb3dCeUlkKHJvdy5pZCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IF9uZXdTZWxlY3RlZFJvd0lkc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkOChpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIyID0gaW5zdGFuY2Uubm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIyID09PSB2b2lkIDAgPyByb3dzQnlJZCA6IF9pbnN0YW5jZSRub25Hcm91cGVkUjIsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRTZSA9IGluc3RhbmNlLmF1dG9SZXNldFNlbGVjdGVkUm93cyxcbiAgICAgICAgYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzID0gX2luc3RhbmNlJGF1dG9SZXNldFNlID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFNlLFxuICAgICAgICBzZWxlY3RlZFJvd0lkcyA9IGluc3RhbmNlLnN0YXRlLnNlbGVjdGVkUm93SWRzLFxuICAgICAgICBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8zID0gaW5zdGFuY2Uuc2VsZWN0U3ViUm93cyxcbiAgICAgICAgc2VsZWN0U3ViUm93cyA9IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzMgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8zLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBwYWdlID0gaW5zdGFuY2UucGFnZSxcbiAgICAgICAgZ2V0U3ViUm93cyA9IGluc3RhbmNlLmdldFN1YlJvd3M7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VGaWx0ZXJzJywgJ3VzZUdyb3VwQnknLCAndXNlU29ydEJ5JywgJ3VzZUV4cGFuZGVkJywgJ3VzZVBhZ2luYXRpb24nXSwgJ3VzZVJvd1NlbGVjdCcpO1xuICAgIHZhciBzZWxlY3RlZEZsYXRSb3dzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRGbGF0Um93cyA9IFtdO1xuICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBzZWxlY3RTdWJSb3dzID8gZ2V0Um93SXNTZWxlY3RlZChyb3csIHNlbGVjdGVkUm93SWRzLCBnZXRTdWJSb3dzKSA6ICEhc2VsZWN0ZWRSb3dJZHNbcm93LmlkXTtcbiAgICAgICAgcm93LmlzU2VsZWN0ZWQgPSAhIWlzU2VsZWN0ZWQ7XG4gICAgICAgIHJvdy5pc1NvbWVTZWxlY3RlZCA9IGlzU2VsZWN0ZWQgPT09IG51bGw7XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZEZsYXRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRGbGF0Um93cztcbiAgICB9LCBbcm93cywgc2VsZWN0U3ViUm93cywgc2VsZWN0ZWRSb3dJZHMsIGdldFN1YlJvd3NdKTtcbiAgICB2YXIgaXNBbGxSb3dzU2VsZWN0ZWQgPSBCb29sZWFuKE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkubGVuZ3RoICYmIE9iamVjdC5rZXlzKHNlbGVjdGVkUm93SWRzKS5sZW5ndGgpO1xuICAgIHZhciBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBpc0FsbFJvd3NTZWxlY3RlZDtcblxuICAgIGlmIChpc0FsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuICFzZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB9KSkge1xuICAgICAgICBpc0FsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNBbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIGlmIChwYWdlICYmIHBhZ2UubGVuZ3RoICYmIHBhZ2Uuc29tZShmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgdmFyIGlkID0gX3JlZjUuaWQ7XG4gICAgICAgIHJldHVybiAhc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgfSkpIHtcbiAgICAgICAgaXNBbGxQYWdlUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdldEF1dG9SZXNldFNlbGVjdGVkUm93cyA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRTZWxlY3RlZFJvd3MpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFNlbGVjdGVkUm93cygpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0U2VsZWN0ZWRSb3dzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgZGF0YV0pO1xuICAgIHZhciB0b2dnbGVBbGxSb3dzU2VsZWN0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlQWxsUm93c1NlbGVjdGVkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciB0b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZVJvd1NlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVSb3dTZWxlY3RlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgdmFyIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICB2YXIgZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgc2VsZWN0ZWRGbGF0Um93czogc2VsZWN0ZWRGbGF0Um93cyxcbiAgICAgIGlzQWxsUm93c1NlbGVjdGVkOiBpc0FsbFJvd3NTZWxlY3RlZCxcbiAgICAgIGlzQWxsUGFnZVJvd3NTZWxlY3RlZDogaXNBbGxQYWdlUm93c1NlbGVjdGVkLFxuICAgICAgdG9nZ2xlUm93U2VsZWN0ZWQ6IHRvZ2dsZVJvd1NlbGVjdGVkLFxuICAgICAgdG9nZ2xlQWxsUm93c1NlbGVjdGVkOiB0b2dnbGVBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wczogZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMsXG4gICAgICBnZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHM6IGdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyxcbiAgICAgIHRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQ6IHRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMyhyb3csIF9yZWY2KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjYuaW5zdGFuY2U7XG5cbiAgICByb3cudG9nZ2xlUm93U2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2V0KSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlUm93U2VsZWN0ZWQocm93LmlkLCBzZXQpO1xuICAgIH07XG5cbiAgICByb3cuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGluc3RhbmNlLmdldEhvb2tzKCkuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgcm93OiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJvd0lzU2VsZWN0ZWQocm93LCBzZWxlY3RlZFJvd0lkcywgZ2V0U3ViUm93cykge1xuICAgIGlmIChzZWxlY3RlZFJvd0lkc1tyb3cuaWRdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3ViUm93cyA9IGdldFN1YlJvd3Mocm93KTtcblxuICAgIGlmIChzdWJSb3dzICYmIHN1YlJvd3MubGVuZ3RoKSB7XG4gICAgICB2YXIgYWxsQ2hpbGRyZW5TZWxlY3RlZCA9IHRydWU7XG4gICAgICB2YXIgc29tZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBzdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHN1YlJvdykge1xuICAgICAgICAvLyBCYWlsIG91dCBlYXJseSBpZiB3ZSBrbm93IGJvdGggb2YgdGhlc2VcbiAgICAgICAgaWYgKHNvbWVTZWxlY3RlZCAmJiAhYWxsQ2hpbGRyZW5TZWxlY3RlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXRSb3dJc1NlbGVjdGVkKHN1YlJvdywgc2VsZWN0ZWRSb3dJZHMsIGdldFN1YlJvd3MpKSB7XG4gICAgICAgICAgc29tZVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxDaGlsZHJlblNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFsbENoaWxkcmVuU2VsZWN0ZWQgPyB0cnVlIDogc29tZVNlbGVjdGVkID8gbnVsbCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgPSBmdW5jdGlvbiBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9O1xuXG4gIHZhciBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yID0gZnVuY3Rpb24gZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcihjZWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9OyAvLyBBY3Rpb25zXG5cblxuICBhY3Rpb25zLnNldFJvd1N0YXRlID0gJ3NldFJvd1N0YXRlJztcbiAgYWN0aW9ucy5zZXRDZWxsU3RhdGUgPSAnc2V0Q2VsbFN0YXRlJztcbiAgYWN0aW9ucy5yZXNldFJvd1N0YXRlID0gJ3Jlc2V0Um93U3RhdGUnO1xuICB2YXIgdXNlUm93U3RhdGUgPSBmdW5jdGlvbiB1c2VSb3dTdGF0ZShob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDkpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkOSk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3ckNCk7XG4gIH07XG4gIHVzZVJvd1N0YXRlLnBsdWdpbk5hbWUgPSAndXNlUm93U3RhdGUnO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkOShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIHZhciBfaW5zdGFuY2UkaW5pdGlhbFJvd1MgPSBpbnN0YW5jZS5pbml0aWFsUm93U3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbFJvd1MgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsUm93UyxcbiAgICAgICAgX2luc3RhbmNlJGluaXRpYWxDZWxsID0gaW5zdGFuY2UuaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbENlbGwgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbENlbGwsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQ7XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcm93U3RhdGU6IHt9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0Um93U3RhdGUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcm93U3RhdGU6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5yb3dTdGF0ZSB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldFJvd1N0YXRlKSB7XG4gICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICB2YXIgcm93SWQgPSBhY3Rpb24ucm93SWQsXG4gICAgICAgICAgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgb2xkUm93U3RhdGUgPSB0eXBlb2Ygc3RhdGUucm93U3RhdGVbcm93SWRdICE9PSAndW5kZWZpbmVkJyA/IHN0YXRlLnJvd1N0YXRlW3Jvd0lkXSA6IGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKHJvd3NCeUlkW3Jvd0lkXSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHJvd1N0YXRlOiBfZXh0ZW5kcyh7fSwgc3RhdGUucm93U3RhdGUsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3Jvd0lkXSA9IGZ1bmN0aW9uYWxVcGRhdGUodmFsdWUsIG9sZFJvd1N0YXRlKSwgX2V4dGVuZHMyKSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRDZWxsU3RhdGUpIHtcbiAgICAgIHZhciBfb2xkUm93U3RhdGUkY2VsbFN0YXQsIF9yb3dzQnlJZCRfcm93SWQsIF9yb3dzQnlJZCRfcm93SWQkY2VsbCwgX2V4dGVuZHMzLCBfZXh0ZW5kczQ7XG5cbiAgICAgIHZhciBfcm93SWQgPSBhY3Rpb24ucm93SWQsXG4gICAgICAgICAgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgX3ZhbHVlID0gYWN0aW9uLnZhbHVlO1xuXG4gICAgICB2YXIgX29sZFJvd1N0YXRlID0gdHlwZW9mIHN0YXRlLnJvd1N0YXRlW19yb3dJZF0gIT09ICd1bmRlZmluZWQnID8gc3RhdGUucm93U3RhdGVbX3Jvd0lkXSA6IGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKHJvd3NCeUlkW19yb3dJZF0pO1xuXG4gICAgICB2YXIgb2xkQ2VsbFN0YXRlID0gdHlwZW9mIChfb2xkUm93U3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IChfb2xkUm93U3RhdGUkY2VsbFN0YXQgPSBfb2xkUm93U3RhdGUuY2VsbFN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX29sZFJvd1N0YXRlJGNlbGxTdGF0W2NvbHVtbklkXSkgIT09ICd1bmRlZmluZWQnID8gX29sZFJvd1N0YXRlLmNlbGxTdGF0ZVtjb2x1bW5JZF0gOiBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IoKF9yb3dzQnlJZCRfcm93SWQgPSByb3dzQnlJZFtfcm93SWRdKSA9PSBudWxsID8gdm9pZCAwIDogKF9yb3dzQnlJZCRfcm93SWQkY2VsbCA9IF9yb3dzQnlJZCRfcm93SWQuY2VsbHMpID09IG51bGwgPyB2b2lkIDAgOiBfcm93c0J5SWQkX3Jvd0lkJGNlbGwuZmluZChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICByZXR1cm4gY2VsbC5jb2x1bW4uaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICByb3dTdGF0ZTogX2V4dGVuZHMoe30sIHN0YXRlLnJvd1N0YXRlLCAoX2V4dGVuZHM0ID0ge30sIF9leHRlbmRzNFtfcm93SWRdID0gX2V4dGVuZHMoe30sIF9vbGRSb3dTdGF0ZSwge1xuICAgICAgICAgIGNlbGxTdGF0ZTogX2V4dGVuZHMoe30sIF9vbGRSb3dTdGF0ZS5jZWxsU3RhdGUgfHwge30sIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2NvbHVtbklkXSA9IGZ1bmN0aW9uYWxVcGRhdGUoX3ZhbHVlLCBvbGRDZWxsU3RhdGUpLCBfZXh0ZW5kczMpKVxuICAgICAgICB9KSwgX2V4dGVuZHM0KSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDkoaW5zdGFuY2UpIHtcbiAgICB2YXIgX2luc3RhbmNlJGF1dG9SZXNldFJvID0gaW5zdGFuY2UuYXV0b1Jlc2V0Um93U3RhdGUsXG4gICAgICAgIGF1dG9SZXNldFJvd1N0YXRlID0gX2luc3RhbmNlJGF1dG9SZXNldFJvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFJvLFxuICAgICAgICBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICB2YXIgc2V0Um93U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocm93SWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldFJvd1N0YXRlLFxuICAgICAgICByb3dJZDogcm93SWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldENlbGxTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyb3dJZCwgY29sdW1uSWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldENlbGxTdGF0ZSxcbiAgICAgICAgcm93SWQ6IHJvd0lkLFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGdldEF1dG9SZXNldFJvd1N0YXRlID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFJvd1N0YXRlKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRSb3dTdGF0ZSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0Um93U3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2RhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBzZXRSb3dTdGF0ZTogc2V0Um93U3RhdGUsXG4gICAgICBzZXRDZWxsU3RhdGU6IHNldENlbGxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyQ0KHJvdywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgdmFyIF9pbnN0YW5jZSRpbml0aWFsUm93UzIgPSBpbnN0YW5jZS5pbml0aWFsUm93U3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbFJvd1MyID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbFJvd1MyLFxuICAgICAgICBfaW5zdGFuY2UkaW5pdGlhbENlbGwyID0gaW5zdGFuY2UuaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbENlbGwyID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxDZWxsMixcbiAgICAgICAgcm93U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZS5yb3dTdGF0ZTtcblxuICAgIGlmIChyb3cpIHtcbiAgICAgIHJvdy5zdGF0ZSA9IHR5cGVvZiByb3dTdGF0ZVtyb3cuaWRdICE9PSAndW5kZWZpbmVkJyA/IHJvd1N0YXRlW3Jvdy5pZF0gOiBpbml0aWFsUm93U3RhdGVBY2Nlc3Nvcihyb3cpO1xuXG4gICAgICByb3cuc2V0U3RhdGUgPSBmdW5jdGlvbiAodXBkYXRlcikge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc2V0Um93U3RhdGUocm93LmlkLCB1cGRhdGVyKTtcbiAgICAgIH07XG5cbiAgICAgIHJvdy5jZWxscy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIGlmICghcm93LnN0YXRlLmNlbGxTdGF0ZSkge1xuICAgICAgICAgIHJvdy5zdGF0ZS5jZWxsU3RhdGUgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuc3RhdGUgPSB0eXBlb2Ygcm93LnN0YXRlLmNlbGxTdGF0ZVtjZWxsLmNvbHVtbi5pZF0gIT09ICd1bmRlZmluZWQnID8gcm93LnN0YXRlLmNlbGxTdGF0ZVtjZWxsLmNvbHVtbi5pZF0gOiBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IoY2VsbCk7XG5cbiAgICAgICAgY2VsbC5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnNldENlbGxTdGF0ZShyb3cuaWQsIGNlbGwuY29sdW1uLmlkLCB1cGRhdGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRDb2x1bW5PcmRlciA9ICdyZXNldENvbHVtbk9yZGVyJztcbiAgYWN0aW9ucy5zZXRDb2x1bW5PcmRlciA9ICdzZXRDb2x1bW5PcmRlcic7XG4gIHZhciB1c2VDb2x1bW5PcmRlciA9IGZ1bmN0aW9uIHVzZUNvbHVtbk9yZGVyKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2goZnVuY3Rpb24gKGRlcHMsIF9yZWYpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5jb2x1bW5PcmRlcl0pO1xuICAgIH0pO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMkMik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSRhKTtcbiAgfTtcbiAgdXNlQ29sdW1uT3JkZXIucGx1Z2luTmFtZSA9ICd1c2VDb2x1bW5PcmRlcic7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciRhKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldENvbHVtbk9yZGVyKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuY29sdW1uT3JkZXIgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRDb2x1bW5PcmRlcikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5PcmRlcjogZnVuY3Rpb25hbFVwZGF0ZShhY3Rpb24uY29sdW1uT3JkZXIsIHN0YXRlLmNvbHVtbk9yZGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMkMihjb2x1bW5zLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW5PcmRlciA9IF9yZWYyLmluc3RhbmNlLnN0YXRlLmNvbHVtbk9yZGVyO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gb3JkZXIsIHJldHVybiB0aGUgbm9ybWFsIGNvbHVtbnNcbiAgICBpZiAoIWNvbHVtbk9yZGVyIHx8ICFjb2x1bW5PcmRlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5PcmRlckNvcHkgPSBbXS5jb25jYXQoY29sdW1uT3JkZXIpOyAvLyBJZiB0aGVyZSBpcyBhbiBvcmRlciwgbWFrZSBhIGNvcHkgb2YgdGhlIGNvbHVtbnNcblxuICAgIHZhciBjb2x1bW5zQ29weSA9IFtdLmNvbmNhdChjb2x1bW5zKTsgLy8gQW5kIG1ha2UgYSBuZXcgb3JkZXJlZCBhcnJheSBvZiB0aGUgY29sdW1uc1xuXG4gICAgdmFyIGNvbHVtbnNJbk9yZGVyID0gW107IC8vIExvb3Agb3ZlciB0aGUgY29sdW1ucyBhbmQgcGxhY2UgdGhlbSBpbiBvcmRlciBpbnRvIHRoZSBuZXcgYXJyYXlcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgdmFyIHRhcmdldENvbHVtbklkID0gY29sdW1uT3JkZXJDb3B5LnNoaWZ0KCk7XG4gICAgICB2YXIgZm91bmRJbmRleCA9IGNvbHVtbnNDb3B5LmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gdGFyZ2V0Q29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZvdW5kSW5kZXggPiAtMSkge1xuICAgICAgICBjb2x1bW5zSW5PcmRlci5wdXNoKGNvbHVtbnNDb3B5LnNwbGljZShmb3VuZEluZGV4LCAxKVswXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdoaWxlIChjb2x1bW5zQ29weS5sZW5ndGggJiYgY29sdW1uT3JkZXJDb3B5Lmxlbmd0aCkge1xuICAgICAgX2xvb3AoKTtcbiAgICB9IC8vIElmIHRoZXJlIGFyZSBhbnkgY29sdW1ucyBsZWZ0LCBhZGQgdGhlbSB0byB0aGUgZW5kXG5cblxuICAgIHJldHVybiBbXS5jb25jYXQoY29sdW1uc0luT3JkZXIsIGNvbHVtbnNDb3B5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJGEoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICBpbnN0YW5jZS5zZXRDb2x1bW5PcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5PcmRlcikge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRDb2x1bW5PcmRlcixcbiAgICAgICAgY29sdW1uT3JkZXI6IGNvbHVtbk9yZGVyXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgfVxuXG4gIGRlZmF1bHRDb2x1bW4uY2FuUmVzaXplID0gdHJ1ZTsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMuY29sdW1uU3RhcnRSZXNpemluZyA9ICdjb2x1bW5TdGFydFJlc2l6aW5nJztcbiAgYWN0aW9ucy5jb2x1bW5SZXNpemluZyA9ICdjb2x1bW5SZXNpemluZyc7XG4gIGFjdGlvbnMuY29sdW1uRG9uZVJlc2l6aW5nID0gJ2NvbHVtbkRvbmVSZXNpemluZyc7XG4gIGFjdGlvbnMucmVzZXRSZXNpemUgPSAncmVzZXRSZXNpemUnO1xuICB2YXIgdXNlUmVzaXplQ29sdW1ucyA9IGZ1bmN0aW9uIHVzZVJlc2l6ZUNvbHVtbnMoaG9va3MpIHtcbiAgICBob29rcy5nZXRSZXNpemVyUHJvcHMgPSBbZGVmYXVsdEdldFJlc2l6ZXJQcm9wc107XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaCh7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJGIpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkYik7XG4gICAgaG9va3MudXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zLnB1c2godXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zJDEpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0UmVzaXplclByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFJlc2l6ZXJQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyO1xuICAgIHZhciBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuXG4gICAgdmFyIG9uUmVzaXplU3RhcnQgPSBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KGUsIGhlYWRlcikge1xuICAgICAgdmFyIGlzVG91Y2hFdmVudCA9IGZhbHNlO1xuXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgLy8gbGV0cyBub3QgcmVzcG9uZCB0byBtdWx0aXBsZSB0b3VjaGVzIChlLmcuIDIgb3IgMyBmaW5nZXJzKVxuICAgICAgICBpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNUb3VjaEV2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhlYWRlcnNUb1Jlc2l6ZSA9IGdldExlYWZIZWFkZXJzKGhlYWRlcik7XG4gICAgICB2YXIgaGVhZGVySWRXaWR0aHMgPSBoZWFkZXJzVG9SZXNpemUubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBbZC5pZCwgZC50b3RhbFdpZHRoXTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNsaWVudFggPSBpc1RvdWNoRXZlbnQgPyBNYXRoLnJvdW5kKGUudG91Y2hlc1swXS5jbGllbnRYKSA6IGUuY2xpZW50WDtcblxuICAgICAgdmFyIGRpc3BhdGNoTW92ZSA9IGZ1bmN0aW9uIGRpc3BhdGNoTW92ZShjbGllbnRYUG9zKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLmNvbHVtblJlc2l6aW5nLFxuICAgICAgICAgIGNsaWVudFg6IGNsaWVudFhQb3NcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZGlzcGF0Y2hFbmQgPSBmdW5jdGlvbiBkaXNwYXRjaEVuZCgpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLmNvbHVtbkRvbmVSZXNpemluZ1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYW5kbGVyc0FuZEV2ZW50cyA9IHtcbiAgICAgICAgbW91c2U6IHtcbiAgICAgICAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgICAgICAgIG1vdmVIYW5kbGVyOiBmdW5jdGlvbiBtb3ZlSGFuZGxlcihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2hNb3ZlKGUuY2xpZW50WCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cEV2ZW50OiAnbW91c2V1cCcsXG4gICAgICAgICAgdXBIYW5kbGVyOiBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlcnNBbmRFdmVudHMubW91c2UubW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXJzQW5kRXZlbnRzLm1vdXNlLnVwSGFuZGxlcik7XG4gICAgICAgICAgICBkaXNwYXRjaEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgICAgICAgIG1vdmVIYW5kbGVyOiBmdW5jdGlvbiBtb3ZlSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGF0Y2hNb3ZlKGUudG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwRXZlbnQ6ICd0b3VjaGVuZCcsXG4gICAgICAgICAgdXBIYW5kbGVyOiBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC5tb3ZlRXZlbnQsIGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoLm1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcnNBbmRFdmVudHMudG91Y2gudXBFdmVudCwgaGFuZGxlcnNBbmRFdmVudHMudG91Y2gubW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZGlzcGF0Y2hFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgZXZlbnRzID0gaXNUb3VjaEV2ZW50ID8gaGFuZGxlcnNBbmRFdmVudHMudG91Y2ggOiBoYW5kbGVyc0FuZEV2ZW50cy5tb3VzZTtcbiAgICAgIHZhciBwYXNzaXZlSWZTdXBwb3J0ZWQgPSBwYXNzaXZlRXZlbnRTdXBwb3J0ZWQoKSA/IHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0gOiBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdmVFdmVudCwgZXZlbnRzLm1vdmVIYW5kbGVyLCBwYXNzaXZlSWZTdXBwb3J0ZWQpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMudXBFdmVudCwgZXZlbnRzLnVwSGFuZGxlciwgcGFzc2l2ZUlmU3VwcG9ydGVkKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5jb2x1bW5TdGFydFJlc2l6aW5nLFxuICAgICAgICBjb2x1bW5JZDogaGVhZGVyLmlkLFxuICAgICAgICBjb2x1bW5XaWR0aDogaGVhZGVyLnRvdGFsV2lkdGgsXG4gICAgICAgIGhlYWRlcklkV2lkdGhzOiBoZWFkZXJJZFdpZHRocyxcbiAgICAgICAgY2xpZW50WDogY2xpZW50WFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIHJldHVybiBlLnBlcnNpc3QoKSB8fCBvblJlc2l6ZVN0YXJ0KGUsIGhlYWRlcik7XG4gICAgICB9LFxuICAgICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICByZXR1cm4gZS5wZXJzaXN0KCkgfHwgb25SZXNpemVTdGFydChlLCBoZWFkZXIpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXG4gICAgICB9LFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHJvbGU6ICdzZXBhcmF0b3InXG4gICAgfV07XG4gIH07XG5cbiAgdXNlUmVzaXplQ29sdW1ucy5wbHVnaW5OYW1lID0gJ3VzZVJlc2l6ZUNvbHVtbnMnO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkYihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGNvbHVtblJlc2l6aW5nOiB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiB7fVxuICAgICAgICB9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0UmVzaXplKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtblJlc2l6aW5nOiB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiB7fVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuY29sdW1uU3RhcnRSZXNpemluZykge1xuICAgICAgdmFyIGNsaWVudFggPSBhY3Rpb24uY2xpZW50WCxcbiAgICAgICAgICBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBjb2x1bW5XaWR0aCA9IGFjdGlvbi5jb2x1bW5XaWR0aCxcbiAgICAgICAgICBoZWFkZXJJZFdpZHRocyA9IGFjdGlvbi5oZWFkZXJJZFdpZHRocztcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IF9leHRlbmRzKHt9LCBzdGF0ZS5jb2x1bW5SZXNpemluZywge1xuICAgICAgICAgIHN0YXJ0WDogY2xpZW50WCxcbiAgICAgICAgICBoZWFkZXJJZFdpZHRoczogaGVhZGVySWRXaWR0aHMsXG4gICAgICAgICAgY29sdW1uV2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgIGlzUmVzaXppbmdDb2x1bW46IGNvbHVtbklkXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuY29sdW1uUmVzaXppbmcpIHtcbiAgICAgIHZhciBfY2xpZW50WCA9IGFjdGlvbi5jbGllbnRYO1xuXG4gICAgICB2YXIgX3N0YXRlJGNvbHVtblJlc2l6aW5nID0gc3RhdGUuY29sdW1uUmVzaXppbmcsXG4gICAgICAgICAgc3RhcnRYID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nLnN0YXJ0WCxcbiAgICAgICAgICBfY29sdW1uV2lkdGggPSBfc3RhdGUkY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGgsXG4gICAgICAgICAgX3N0YXRlJGNvbHVtblJlc2l6aW5nMiA9IF9zdGF0ZSRjb2x1bW5SZXNpemluZy5oZWFkZXJJZFdpZHRocyxcbiAgICAgICAgICBfaGVhZGVySWRXaWR0aHMgPSBfc3RhdGUkY29sdW1uUmVzaXppbmcyID09PSB2b2lkIDAgPyBbXSA6IF9zdGF0ZSRjb2x1bW5SZXNpemluZzI7XG5cbiAgICAgIHZhciBkZWx0YVggPSBfY2xpZW50WCAtIHN0YXJ0WDtcbiAgICAgIHZhciBwZXJjZW50YWdlRGVsdGFYID0gZGVsdGFYIC8gX2NvbHVtbldpZHRoO1xuICAgICAgdmFyIG5ld0NvbHVtbldpZHRocyA9IHt9O1xuXG4gICAgICBfaGVhZGVySWRXaWR0aHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGhlYWRlcklkID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBoZWFkZXJXaWR0aCA9IF9yZWYyWzFdO1xuICAgICAgICBuZXdDb2x1bW5XaWR0aHNbaGVhZGVySWRdID0gTWF0aC5tYXgoaGVhZGVyV2lkdGggKyBoZWFkZXJXaWR0aCAqIHBlcmNlbnRhZ2VEZWx0YVgsIDApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IF9leHRlbmRzKHt9LCBzdGF0ZS5jb2x1bW5SZXNpemluZywge1xuICAgICAgICAgIGNvbHVtbldpZHRoczogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLmNvbHVtbldpZHRocywge30sIG5ld0NvbHVtbldpZHRocylcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5Eb25lUmVzaXppbmcpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IF9leHRlbmRzKHt9LCBzdGF0ZS5jb2x1bW5SZXNpemluZywge1xuICAgICAgICAgIHN0YXJ0WDogbnVsbCxcbiAgICAgICAgICBpc1Jlc2l6aW5nQ29sdW1uOiBudWxsXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zJDEgPSBmdW5jdGlvbiB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMoaW5zdGFuY2UpIHtcbiAgICB2YXIgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgZGlzYWJsZVJlc2l6aW5nID0gaW5zdGFuY2UuZGlzYWJsZVJlc2l6aW5nLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBjb2x1bW5SZXNpemluZyA9IGluc3RhbmNlLnN0YXRlLmNvbHVtblJlc2l6aW5nO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICB2YXIgY2FuUmVzaXplID0gZ2V0Rmlyc3REZWZpbmVkKGhlYWRlci5kaXNhYmxlUmVzaXppbmcgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZVJlc2l6aW5nID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgaGVhZGVyLmNhblJlc2l6ZSA9IGNhblJlc2l6ZTtcbiAgICAgIGhlYWRlci53aWR0aCA9IGNvbHVtblJlc2l6aW5nLmNvbHVtbldpZHRoc1toZWFkZXIuaWRdIHx8IGhlYWRlci5vcmlnaW5hbFdpZHRoIHx8IGhlYWRlci53aWR0aDtcbiAgICAgIGhlYWRlci5pc1Jlc2l6aW5nID0gY29sdW1uUmVzaXppbmcuaXNSZXNpemluZ0NvbHVtbiA9PT0gaGVhZGVyLmlkO1xuXG4gICAgICBpZiAoY2FuUmVzaXplKSB7XG4gICAgICAgIGhlYWRlci5nZXRSZXNpemVyUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFJlc2l6ZXJQcm9wcywge1xuICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJGIoaW5zdGFuY2UpIHtcbiAgICB2YXIgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRSZSA9IGluc3RhbmNlLmF1dG9SZXNldFJlc2l6ZSxcbiAgICAgICAgYXV0b1Jlc2V0UmVzaXplID0gX2luc3RhbmNlJGF1dG9SZXNldFJlID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFJlLFxuICAgICAgICBjb2x1bW5zID0gaW5zdGFuY2UuY29sdW1ucztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUFic29sdXRlTGF5b3V0J10sICd1c2VSZXNpemVDb2x1bW5zJyk7XG4gICAgdmFyIGdldEF1dG9SZXNldFJlc2l6ZSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRSZXNpemUpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFJlc2l6ZSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0UmVzaXplXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtjb2x1bW5zXSk7XG4gICAgdmFyIHJlc2V0UmVzaXppbmcgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0UmVzaXplXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICByZXNldFJlc2l6aW5nOiByZXNldFJlc2l6aW5nXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZWFmSGVhZGVycyhoZWFkZXIpIHtcbiAgICB2YXIgbGVhZkhlYWRlcnMgPSBbXTtcblxuICAgIHZhciByZWN1cnNlSGVhZGVyID0gZnVuY3Rpb24gcmVjdXJzZUhlYWRlcihoZWFkZXIpIHtcbiAgICAgIGlmIChoZWFkZXIuY29sdW1ucyAmJiBoZWFkZXIuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgaGVhZGVyLmNvbHVtbnMubWFwKHJlY3Vyc2VIZWFkZXIpO1xuICAgICAgfVxuXG4gICAgICBsZWFmSGVhZGVycy5wdXNoKGhlYWRlcik7XG4gICAgfTtcblxuICAgIHJlY3Vyc2VIZWFkZXIoaGVhZGVyKTtcbiAgICByZXR1cm4gbGVhZkhlYWRlcnM7XG4gIH1cblxuICB2YXIgY2VsbFN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDBcbiAgfTtcbiAgdmFyIHVzZUFic29sdXRlTGF5b3V0ID0gZnVuY3Rpb24gdXNlQWJzb2x1dGVMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5nZXRUYWJsZUJvZHlQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0Um93UHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEhlYWRlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZi5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNvbHVtbi50b3RhbExlZnQgKyBcInB4XCIsXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRDZWxsUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgY2VsbCA9IF9yZWYyLmNlbGw7XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNlbGwuY29sdW1uLnRvdGFsTGVmdCArIFwicHhcIixcbiAgICAgICAgICB3aWR0aDogY2VsbC5jb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYzKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZjMuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMsIHtcbiAgICAgICAgICBsZWZ0OiBjb2x1bW4udG90YWxMZWZ0ICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gIH07XG4gIHVzZUFic29sdXRlTGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlQWJzb2x1dGVMYXlvdXQnO1xuXG4gIHZhciBnZXRSb3dTdHlsZXMgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWY0KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjQuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBjZWxsU3R5bGVzJDEgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfTtcblxuICB2YXIgZ2V0Um93U3R5bGVzJDEgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2lkdGg6IGluc3RhbmNlLnRvdGFsQ29sdW1uc1dpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIHVzZUJsb2NrTGF5b3V0ID0gZnVuY3Rpb24gdXNlQmxvY2tMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQxKTtcbiAgICBob29rcy5nZXRIZWFkZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDEpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMSk7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMkMSwge1xuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Q2VsbFByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmMykge1xuICAgICAgdmFyIGNlbGwgPSBfcmVmMy5jZWxsO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMkMSwge1xuICAgICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjQpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmNC5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcyQxLCB7XG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgfTtcbiAgdXNlQmxvY2tMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VCbG9ja0xheW91dCc7XG5cbiAgZnVuY3Rpb24gdXNlRmxleExheW91dChob29rcykge1xuICAgIGhvb2tzLmdldFRhYmxlUHJvcHMucHVzaChnZXRUYWJsZVByb3BzKTtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQyKTtcbiAgICBob29rcy5nZXRIZWFkZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDIpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMik7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChnZXRIZWFkZXJQcm9wcyk7XG4gICAgaG9va3MuZ2V0Q2VsbFByb3BzLnB1c2goZ2V0Q2VsbFByb3BzKTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGdldEZvb3RlclByb3BzKTtcbiAgfVxuICB1c2VGbGV4TGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlRmxleExheW91dCc7XG5cbiAgdmFyIGdldFRhYmxlUHJvcHMgPSBmdW5jdGlvbiBnZXRUYWJsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBtaW5XaWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zTWluV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Um93U3R5bGVzJDIgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgICBtaW5XaWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zTWluV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0SGVhZGVyUHJvcHMgPSBmdW5jdGlvbiBnZXRIZWFkZXJQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjMuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4OiBjb2x1bW4udG90YWxGbGV4V2lkdGggPyBjb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWluV2lkdGg6IGNvbHVtbi50b3RhbE1pbldpZHRoICsgXCJweFwiLFxuICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Q2VsbFByb3BzID0gZnVuY3Rpb24gZ2V0Q2VsbFByb3BzKHByb3BzLCBfcmVmNCkge1xuICAgIHZhciBjZWxsID0gX3JlZjQuY2VsbDtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleDogY2VsbC5jb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIixcbiAgICAgICAgbWluV2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsTWluV2lkdGggKyBcInB4XCIsXG4gICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldEZvb3RlclByb3BzID0gZnVuY3Rpb24gZ2V0Rm9vdGVyUHJvcHMocHJvcHMsIF9yZWY1KSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWY1LmNvbHVtbjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleDogY29sdW1uLnRvdGFsRmxleFdpZHRoID8gY29sdW1uLnRvdGFsRmxleFdpZHRoICsgXCIgMCBhdXRvXCIgOiB1bmRlZmluZWQsXG4gICAgICAgIG1pbldpZHRoOiBjb2x1bW4udG90YWxNaW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgZnVuY3Rpb24gdXNlR3JpZExheW91dChob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJGMpO1xuICAgIGhvb2tzLmdldFRhYmxlUHJvcHMucHVzaChnZXRUYWJsZVByb3BzJDEpO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goZ2V0SGVhZGVyUHJvcHMkMSk7XG4gIH1cbiAgdXNlR3JpZExheW91dC5wbHVnaW5OYW1lID0gJ3VzZUdyaWRMYXlvdXQnO1xuXG4gIHZhciBnZXRUYWJsZVByb3BzJDEgPSBmdW5jdGlvbiBnZXRUYWJsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogaW5zdGFuY2Uuc3RhdGUuZ3JpZExheW91dC5jb2x1bW5XaWR0aHMubWFwKGZ1bmN0aW9uICh3KSB7XG4gICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH0pLmpvaW4oXCIgXCIpXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldEhlYWRlclByb3BzJDEgPSBmdW5jdGlvbiBnZXRIZWFkZXJQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIGlkOiBcImhlYWRlci1jZWxsLVwiICsgY29sdW1uLmlkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246IFwic3RpY2t5XCIgLy9lbmFibGVzIGEgc2Nyb2xsIHdyYXBwZXIgdG8gYmUgcGxhY2VkIGFyb3VuZCB0aGUgdGFibGUgYW5kIGhhdmUgc3RpY2t5IGhlYWRlcnNcblxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkYyhzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJpbml0XCIpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGdyaWRMYXlvdXQ6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IGluc3RhbmNlLmNvbHVtbnMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBcImNvbHVtblN0YXJ0UmVzaXppbmdcIikge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkO1xuICAgICAgdmFyIGNvbHVtbkluZGV4ID0gaW5zdGFuY2UudmlzaWJsZUNvbHVtbnMuZmluZEluZGV4KGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgcmV0dXJuIGNvbC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBlbFdpZHRoID0gZ2V0RWxlbWVudFdpZHRoKGNvbHVtbklkKTtcblxuICAgICAgaWYgKGVsV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZ3JpZExheW91dDogX2V4dGVuZHMoe30sIHN0YXRlLmdyaWRMYXlvdXQsIHtcbiAgICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2x1bW5JbmRleCxcbiAgICAgICAgICAgIHN0YXJ0aW5nV2lkdGg6IGVsV2lkdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiY29sdW1uUmVzaXppbmdcIikge1xuICAgICAgdmFyIF9zdGF0ZSRncmlkTGF5b3V0ID0gc3RhdGUuZ3JpZExheW91dCxcbiAgICAgICAgICBfY29sdW1uSW5kZXggPSBfc3RhdGUkZ3JpZExheW91dC5jb2x1bW5JbmRleCxcbiAgICAgICAgICBzdGFydGluZ1dpZHRoID0gX3N0YXRlJGdyaWRMYXlvdXQuc3RhcnRpbmdXaWR0aCxcbiAgICAgICAgICBjb2x1bW5XaWR0aHMgPSBfc3RhdGUkZ3JpZExheW91dC5jb2x1bW5XaWR0aHM7XG4gICAgICB2YXIgY2hhbmdlID0gc3RhdGUuY29sdW1uUmVzaXppbmcuc3RhcnRYIC0gYWN0aW9uLmNsaWVudFg7XG4gICAgICB2YXIgbmV3V2lkdGggPSBzdGFydGluZ1dpZHRoIC0gY2hhbmdlO1xuICAgICAgdmFyIGNvbHVtbldpZHRoc0NvcHkgPSBbXS5jb25jYXQoY29sdW1uV2lkdGhzKTtcbiAgICAgIGNvbHVtbldpZHRoc0NvcHlbX2NvbHVtbkluZGV4XSA9IG5ld1dpZHRoICsgXCJweFwiO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncmlkTGF5b3V0OiBfZXh0ZW5kcyh7fSwgc3RhdGUuZ3JpZExheW91dCwge1xuICAgICAgICAgIGNvbHVtbldpZHRoczogY29sdW1uV2lkdGhzQ29weVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudFdpZHRoKGNvbHVtbklkKSB7XG4gICAgdmFyIF9kb2N1bWVudCRnZXRFbGVtZW50QjtcblxuICAgIHZhciB3aWR0aCA9IChfZG9jdW1lbnQkZ2V0RWxlbWVudEIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1jZWxsLVwiICsgY29sdW1uSWQpKSA9PSBudWxsID8gdm9pZCAwIDogX2RvY3VtZW50JGdldEVsZW1lbnRCLm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKHdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gIH1cblxuICBleHBvcnRzLl9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMgPSBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zO1xuICBleHBvcnRzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICBleHBvcnRzLmRlZmF1bHRDb2x1bW4gPSBkZWZhdWx0Q29sdW1uO1xuICBleHBvcnRzLmRlZmF1bHRHcm91cEJ5Rm4gPSBkZWZhdWx0R3JvdXBCeUZuO1xuICBleHBvcnRzLmRlZmF1bHRPcmRlckJ5Rm4gPSBkZWZhdWx0T3JkZXJCeUZuO1xuICBleHBvcnRzLmRlZmF1bHRSZW5kZXJlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgZXhwb3J0cy5lbXB0eVJlbmRlcmVyID0gZW1wdHlSZW5kZXJlcjtcbiAgZXhwb3J0cy5lbnN1cmVQbHVnaW5PcmRlciA9IGVuc3VyZVBsdWdpbk9yZGVyO1xuICBleHBvcnRzLmZsZXhSZW5kZXIgPSBmbGV4UmVuZGVyO1xuICBleHBvcnRzLmZ1bmN0aW9uYWxVcGRhdGUgPSBmdW5jdGlvbmFsVXBkYXRlO1xuICBleHBvcnRzLmxvb3BIb29rcyA9IGxvb3BIb29rcztcbiAgZXhwb3J0cy5tYWtlUHJvcEdldHRlciA9IG1ha2VQcm9wR2V0dGVyO1xuICBleHBvcnRzLm1ha2VSZW5kZXJlciA9IG1ha2VSZW5kZXJlcjtcbiAgZXhwb3J0cy5yZWR1Y2VIb29rcyA9IHJlZHVjZUhvb2tzO1xuICBleHBvcnRzLnNhZmVVc2VMYXlvdXRFZmZlY3QgPSBzYWZlVXNlTGF5b3V0RWZmZWN0O1xuICBleHBvcnRzLnVzZUFic29sdXRlTGF5b3V0ID0gdXNlQWJzb2x1dGVMYXlvdXQ7XG4gIGV4cG9ydHMudXNlQXN5bmNEZWJvdW5jZSA9IHVzZUFzeW5jRGVib3VuY2U7XG4gIGV4cG9ydHMudXNlQmxvY2tMYXlvdXQgPSB1c2VCbG9ja0xheW91dDtcbiAgZXhwb3J0cy51c2VDb2x1bW5PcmRlciA9IHVzZUNvbHVtbk9yZGVyO1xuICBleHBvcnRzLnVzZUV4cGFuZGVkID0gdXNlRXhwYW5kZWQ7XG4gIGV4cG9ydHMudXNlRmlsdGVycyA9IHVzZUZpbHRlcnM7XG4gIGV4cG9ydHMudXNlRmxleExheW91dCA9IHVzZUZsZXhMYXlvdXQ7XG4gIGV4cG9ydHMudXNlR2V0TGF0ZXN0ID0gdXNlR2V0TGF0ZXN0O1xuICBleHBvcnRzLnVzZUdsb2JhbEZpbHRlciA9IHVzZUdsb2JhbEZpbHRlcjtcbiAgZXhwb3J0cy51c2VHcmlkTGF5b3V0ID0gdXNlR3JpZExheW91dDtcbiAgZXhwb3J0cy51c2VHcm91cEJ5ID0gdXNlR3JvdXBCeTtcbiAgZXhwb3J0cy51c2VNb3VudGVkTGF5b3V0RWZmZWN0ID0gdXNlTW91bnRlZExheW91dEVmZmVjdDtcbiAgZXhwb3J0cy51c2VQYWdpbmF0aW9uID0gdXNlUGFnaW5hdGlvbjtcbiAgZXhwb3J0cy51c2VSZXNpemVDb2x1bW5zID0gdXNlUmVzaXplQ29sdW1ucztcbiAgZXhwb3J0cy51c2VSb3dTZWxlY3QgPSB1c2VSb3dTZWxlY3Q7XG4gIGV4cG9ydHMudXNlUm93U3RhdGUgPSB1c2VSb3dTdGF0ZTtcbiAgZXhwb3J0cy51c2VTb3J0QnkgPSB1c2VTb3J0Qnk7XG4gIGV4cG9ydHMudXNlVGFibGUgPSB1c2VUYWJsZTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtdGFibGUuZGV2ZWxvcG1lbnQuanMubWFwXG4iLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC10YWJsZS5wcm9kdWN0aW9uLm1pbi5qcycpXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC10YWJsZS5kZXZlbG9wbWVudC5qcycpXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJbXBsZW1lbnRhdGlvbiBmcm9tICdAY29tcG9uZW50cy9pbXBsZW1lbnRhdGlvbic7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGVcIjtcclxuaW1wb3J0IHsgdXNlQm9vbWlBUEkgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvQm9vbWlBUElcIjtcclxuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gXCJAbGliL2hvb2tzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbCB7XHJcbiAgXCJwcm9kdWN0LWNvZGVcIjogc3RyaW5nLFxyXG4gIFwicXVhbnRpdHlcIjogbnVtYmVyLFxyXG59XHJcbmludGVyZmFjZSBTdG9yZVN0b2NrTGV2ZWwge1xyXG4gIFwibG9jYXRpb24taWRcIjogc3RyaW5nLFxyXG4gIFwibG9jYXRpb24tbmFtZVwiOiBzdHJpbmcsXHJcbiAgXCJhdmFpbGFiaWxpdHlcIjogU3RvY2tMZXZlbFtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdG9ja0xldmVsUmVzcG9uc2Uge1xyXG4gIHJlc3VsdHM6IFN0b3JlU3RvY2tMZXZlbFtdXHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmNvbnN0IFN0b2NrTG9va3VwOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBib29taUFQSSA9IHVzZUJvb21pQVBJKCk7XHJcbiAgY29uc3QgW3N0b3Jlcywgc2V0U3RvcmVzXSA9IHVzZVN0YXRlKFwiMTIxMDAgMTIwNzdcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShcIkxUVzkxNDEgTFRXOTI1MiBMVFc5MTM1XCIpO1xyXG4gIGNvbnN0IHsgcmVzcG9uc2UsIGVycm9yLCBpc0xvYWRpbmcsIGxvYWQgfSA9IHVzZUxvYWQ8U3RvY2tMZXZlbFJlc3BvbnNlLCBzdHJpbmcgfCBFcnJvciB8IEF4aW9zRXJyb3I+KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWRlcigpOiBQcm9taXNlPFN0b2NrTGV2ZWxSZXNwb25zZT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gKGlucHV0OiBzdHJpbmcpID0+IHsgcmV0dXJuIGlucHV0LnNwbGl0KC9cXHMqLFxccyp8XFxzKy8pLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0gIT0gXCJcIikgJiYgKGl0ZW0pKTsgfTtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgXCJsb2NhdGlvbi1pZHNcIjogcGFyc2VyKHN0b3JlcyksXHJcbiAgICAgICAgICBcIlNLVXNcIjogcGFyc2VyKHByb2R1Y3RzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgQXhpb3MucG9zdChgJHtib29taUFQSS5lbmRwb2ludC51cml9L3dzL3NpbXBsZS9nZXRQcm9kdWN0QXZhaWxhYmlsaXR5YCwgcGF5bG9hZClcclxuICAgICAgICByZXNvbHZlKHJlc3AuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IFNvSCA9IHJlc3BvbnNlPy5yZXN1bHRzLm1hcCgoc3RvcmU6IFN0b3JlU3RvY2tMZXZlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sIHN0b3JlTmFtZTogc3RvcmVbXCJsb2NhdGlvbi1uYW1lXCJdLCAuLi5zdG9yZS5hdmFpbGFiaWxpdHkucmVkdWNlKChvYmo6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4sIGl0ZW06IFN0b2NrTGV2ZWwpID0+IHsgb2JqW2l0ZW1bXCJwcm9kdWN0LWNvZGVcIl1dID0gaXRlbVtcInF1YW50aXR5XCJdOyByZXR1cm4gb2JqOyB9LCB7fSkgfTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIFNvSDtcclxuICAgIH1cclxuICAgIHJldHVybiBbIHttc2c6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCJ9LCBdO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlID0gWyB7IEhlYWRlcjogJ1N0b3JlIElEJywgYWNjZXNzb3I6ICdzdG9yZUlEJyB9LCB7IEhlYWRlcjogJ1N0b3JlIE5hbWUnLCBhY2Nlc3NvcjogJ3N0b3JlTmFtZScgfSBdO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IG5ldyBTZXQoKTtcclxuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiByZXNwb25zZT8ucmVzdWx0cykge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzdG9yZS5hdmFpbGFiaWxpdHkpIHtcclxuICAgICAgICAgIHByb2R1Y3RzLmFkZChpdGVtW1wicHJvZHVjdC1jb2RlXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9kdWN0cy5rZXlzKCkpIHtcclxuICAgICAgICBiYXNlLnB1c2goeyBIZWFkZXI6IGl0ZW0gYXMgc3RyaW5nLCBhY2Nlc3NvcjogaXRlbSBhcyBzdHJpbmcgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsgeyBIZWFkZXI6IFwiRXJyb3IgLyBNZXNzYWdlXCIsIGFjY2Vzb3I6IFwibXNnXCIgfSBdO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdDogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVN0b3JlczogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRTdG9yZXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2VQcm9kdWN0czogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0cyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGEgPSAgQXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSAmJiBlcnJvci5yZXNwb25zZT8uZGF0YT8udG9TdHJpbmcoKVxyXG4gIGNvbnNvbGUubG9nKGEpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIyMHJlbVwifX0+XHJcbiAgICAgICAgPGxhYmVsPlN0b3JlczogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtzdG9yZXN9IG9uQ2hhbmdlPXtvbkNoYW5nZVN0b3Jlc30gcGxhY2Vob2xkZXI9XCJTdG9yZSBJRHMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIwMHB4XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGxhYmVsPlByb2R1Y3RzOiA8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH0gdmFsdWU9e3Byb2R1Y3RzfSBvbkNoYW5nZT17b25DaGFuZ2VQcm9kdWN0c30gcGxhY2Vob2xkZXI9XCJJdGVtIE51bWJlcnMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIyNXB4XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPVwiQ2hlY2sgQXZhaWxhYmlsaXRpZXNcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyBcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+TG9hZGluZyB5b3VyIGRhdGEuLi48L2gyPlxyXG4gICAgICA6IHJlc3BvbnNlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSBzdHlsZT17e21hcmdpbjogXCJhdXRvXCIsIG1heFdpZHRoOiBcIjEwMCVcIn19Lz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPD48aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+RXJyb3I6IHtlcnJvcj8udG9TdHJpbmcoKX08L2gyPjxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthfT48L3A+PC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L0ltcGxlbWVudGF0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTG9va3VwOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vdXRpbHMubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vdXRpbHMubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL3V0aWxzLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==