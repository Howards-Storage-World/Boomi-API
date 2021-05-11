webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/menu */ "./components/menu.tsx");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/meta */ "./components/meta.tsx");
var _jsxFileName = "C:\\dev\\Boomi-API\\components\\layout.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var name = 'Home | HSW Boomi API';
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container, " ").concat(className),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), title && __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, title)), __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    options: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, home && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "/images/me.webp",
    className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerHomeImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderCircle),
    alt: name,
    priority: true,
    quality: "100%",
    width: 144,
    height: 144,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.heading2Xl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, name))), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwibWV0YSIsImhvbWUiLCJzdHlsZSIsIm1heFdpZHRoIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGVySG9tZUltYWdlIiwidXRpbFN0eWxlcyIsImJvcmRlckNpcmNsZSIsImhlYWRpbmcyWGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxzQkFBYjtBQUNBLElBQU1DLFNBQVMsR0FBRyxzQkFBbEI7O0FBRVAsSUFBTUMsTUFBbUgsR0FBRyxTQUF0SEEsTUFBc0gsT0FBZ0c7QUFBQSxNQUE3RkMsUUFBNkYsUUFBN0ZBLFFBQTZGO0FBQUEsd0JBQW5GQyxLQUFtRjtBQUFBLE1BQW5GQSxLQUFtRiwyQkFBM0VILFNBQTJFO0FBQUEsTUFBaEVJLElBQWdFLFFBQWhFQSxJQUFnRTtBQUFBLE1BQTFEQyxJQUEwRCxRQUExREEsSUFBMEQ7QUFBQSx3QkFBcERDLEtBQW9EO0FBQUEsTUFBcERBLEtBQW9ELDJCQUE1QztBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUE0QztBQUFBLDRCQUFyQkMsU0FBcUI7QUFBQSxNQUFyQkEsU0FBcUIsK0JBQVQsRUFBUztBQUMxTixTQUFRLG1FQUNOLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURNLEVBRU47QUFBSyxhQUFTLFlBQUtDLHlEQUFNLENBQUNDLFNBQVosY0FBeUJGLFNBQXpCLENBQWQ7QUFBb0QsU0FBSyxFQUFFRixLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUlILEtBQUssSUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNBLEtBQVQsQ0FGZCxDQURGLEVBS0UsTUFBQyx3REFBRDtBQUFNLFdBQU8sRUFBRUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFRLGFBQVMsRUFBRUsseURBQU0sQ0FBQ0UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixJQUFJLElBQUssbUVBQ1IsTUFBQyxpREFBRDtBQUFPLE9BQUcsRUFBQyxpQkFBWDtBQUE2QixhQUFTLFlBQUtJLHlEQUFNLENBQUNHLGVBQVosY0FBK0JDLCtEQUFVLENBQUNDLFlBQTFDLENBQXRDO0FBQWdHLE9BQUcsRUFBRWYsSUFBckc7QUFBMkcsWUFBUSxFQUFFLElBQXJIO0FBQTJILFdBQU8sRUFBRSxNQUFwSTtBQUE0SSxTQUFLLEVBQUUsR0FBbko7QUFBd0osVUFBTSxFQUFFLEdBQWhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUSxFQUVSO0FBQUksYUFBUyxFQUFFYywrREFBVSxDQUFDRSxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDaEIsSUFBdkMsQ0FGUSxDQURaLENBTkYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9HLFFBQVAsQ0FaRixDQUZNLENBQVI7QUFpQkQsQ0FsQkQ7O0tBQU1ELE07QUFvQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwZDVjNGNiNTM4YWNhMzc5MGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcbmltcG9ydCBNZW51IGZyb20gJ0Bjb21wb25lbnRzL21lbnUnO1xuaW1wb3J0IE1ldGEsIHsgTWV0YU9wdGlvbnMgfSBmcm9tIFwiQGNvbXBvbmVudHMvbWV0YVwiO1xuXG5leHBvcnQgY29uc3QgbmFtZSA9ICdIb21lIHwgSFNXIEJvb21pIEFQSSdcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnSG9tZSB8IEhTVyBCb29taSBBUEknXG5cbmNvbnN0IExheW91dDogRkM8eyB0aXRsZT86IHN0cmluZywgbWV0YT86IE1ldGFPcHRpb25zLCBob21lPzogYm9vbGVhbiwgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLCBjbGFzc05hbWU/OiBzdHJpbmcgfT4gPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSBzaXRlVGl0bGUsIG1ldGEsIGhvbWUsIHN0eWxlID0geyBtYXhXaWR0aDogXCIzNnJlbVwiIH0sIGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xuICByZXR1cm4gKDw+XG4gICAgPE1lbnUvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2NsYXNzTmFtZX1gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgeyB0aXRsZSAmJiAoPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+KSB9XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWV0YSBvcHRpb25zPXttZXRhfSAvPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICB7aG9tZSAmJiAoPD5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9tZS53ZWJwXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySG9tZUltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9IGFsdD17bmFtZX0gcHJpb3JpdHk9e3RydWV9IHF1YWxpdHk9e1wiMTAwJVwifSB3aWR0aD17MTQ0fSBoZWlnaHQ9ezE0NH0vPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZzJYbH0+e25hbWV9PC9oMT5cbiAgICAgICAgPC8+KX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgPC8+KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=