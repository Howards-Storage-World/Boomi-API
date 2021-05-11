webpackHotUpdate_N_E("pages/documentation",{

/***/ "./pages/documentation/index.tsx":
/*!***************************************!*\
  !*** ./pages/documentation/index.tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/documentation */ "./components/documentation.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\documentation\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var meta = {
  title: "HSW Boomi API Documentation",
  description: "A place collection of documentation on HSW's Boomi APIs."
};

var Documentation = function Documentation(_ref) {
  _s();

  var allDocumentation = _ref.allDocumentation;
  var shouldBe2Cols = Object(react_responsive__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])({
    minWidth: '40rem'
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Documentation | HSW Boomi API",
    meta: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, shouldBe2Cols ? __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexGrid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_components_documentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    documents: allDocumentation,
    style: {
      maxWidth: "20rem",
      padding: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexColumn, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sticky),
    style: {
      maxWidth: "20rem",
      padding: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "DOcumentation Intro"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque quae architecto, praesentium, sapiente ratione quia dolorum labore nobis nostrum porro vero aliquam vitae totam iste excepturi dolorem fugiat doloribus."))) : __jsx(_components_documentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    documents: allDocumentation,
    style: {
      maxWidth: "20rem",
      margin: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }));
};

_s(Documentation, "FZNTCrnEOmYKKDuGJ6LeXIXXofQ=", false, function () {
  return [react_responsive__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"]];
});

_c = Documentation;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Documentation);

var _c;

$RefreshReg$(_c, "Documentation");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jdW1lbnRhdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJEb2N1bWVudGF0aW9uIiwiYWxsRG9jdW1lbnRhdGlvbiIsInNob3VsZEJlMkNvbHMiLCJ1c2VNZWRpYVF1ZXJ5IiwibWluV2lkdGgiLCJ1dGlsU3R5bGVzIiwiZmxleEdyaWQiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJoZWFkaW5nTWQiLCJmbGV4Q29sdW1uIiwic3RpY2t5IiwiaGVhZGluZ0xnIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBV0EsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLE9BQUssRUFBRSw2QkFESTtBQUVYQyxhQUFXLEVBQUU7QUFGRixDQUFiOztBQUtBLElBQU1DLGFBQTJELEdBQUcsU0FBOURBLGFBQThELE9BQTBCO0FBQUE7O0FBQUEsTUFBdkJDLGdCQUF1QixRQUF2QkEsZ0JBQXVCO0FBQzVGLE1BQU1DLGFBQWEsR0FBR0Msc0VBQWEsQ0FBQztBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUFELENBQW5DO0FBQ0EsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLCtCQUFkO0FBQThDLFFBQUksRUFBRVAsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSyxhQUFhLEdBQ1o7QUFBSyxhQUFTLEVBQUVHLCtEQUFVLENBQUNDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQW1CLGFBQVMsRUFBRUwsZ0JBQTlCO0FBQWdELFNBQUssRUFBRTtBQUFFTSxjQUFRLEVBQUUsT0FBWjtBQUFzQkMsYUFBTyxFQUFFO0FBQS9CLEtBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVMsYUFBUyxZQUFLSCwrREFBVSxDQUFDSSxTQUFoQixjQUE2QkosK0RBQVUsQ0FBQ0ssVUFBeEMsY0FBc0RMLCtEQUFVLENBQUNNLE1BQWpFLENBQWxCO0FBQTZGLFNBQUssRUFBRTtBQUFFSixjQUFRLEVBQUUsT0FBWjtBQUFzQkMsYUFBTyxFQUFFO0FBQS9CLEtBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUgsK0RBQVUsQ0FBQ08sU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbU9BRkYsQ0FGRixDQURZLEdBU1osTUFBQyxpRUFBRDtBQUFtQixhQUFTLEVBQUVYLGdCQUE5QjtBQUFnRCxTQUFLLEVBQUU7QUFBRU0sY0FBUSxFQUFFLE9BQVo7QUFBcUJNLFlBQU0sRUFBRTtBQUE3QixLQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVk4sQ0FERjtBQWVELENBakJEOztHQUFNYixhO1VBQ2tCRyw4RDs7O0tBRGxCSCxhOztBQW1CU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jdW1lbnRhdGlvbi5iODA2OTMyYzBkNjRmZmY2ZWZmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBEb2N1bWVudGF0aW9uTGlzdCBmcm9tICdAY29tcG9uZW50cy9kb2N1bWVudGF0aW9uJztcbmltcG9ydCB7IGdldFNvcnRlZERvY3VtZW50YXRpb25EYXRhLCBEb2N1bWVudE1ldGFEYXRhIH0gZnJvbSAnQGxpYi9kb2N1bWVudHMnO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsRG9jdW1lbnRhdGlvbiA9IGF3YWl0IGdldFNvcnRlZERvY3VtZW50YXRpb25EYXRhKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsRG9jdW1lbnRhdGlvblxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtZXRhID0ge1xuICB0aXRsZTogXCJIU1cgQm9vbWkgQVBJIERvY3VtZW50YXRpb25cIixcbiAgZGVzY3JpcHRpb246IFwiQSBwbGFjZSBjb2xsZWN0aW9uIG9mIGRvY3VtZW50YXRpb24gb24gSFNXJ3MgQm9vbWkgQVBJcy5cIlxufTtcblxuY29uc3QgRG9jdW1lbnRhdGlvbjogRkM8eyBhbGxEb2N1bWVudGF0aW9uOiBEb2N1bWVudE1ldGFEYXRhW10gfT4gPSAoeyBhbGxEb2N1bWVudGF0aW9uIH0pID0+IHtcbiAgY29uc3Qgc2hvdWxkQmUyQ29scyA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogJzQwcmVtJyB9KTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiRG9jdW1lbnRhdGlvbiB8IEhTVyBCb29taSBBUElcIiBtZXRhPXttZXRhfT5cbiAgICAgICAge3Nob3VsZEJlMkNvbHMgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZmxleEdyaWR9PlxuICAgICAgICAgICAgPERvY3VtZW50YXRpb25MaXN0IGRvY3VtZW50cz17YWxsRG9jdW1lbnRhdGlvbn0gc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjByZW1cIiAsIHBhZGRpbmc6ICcwLjVyZW0nIH19IC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMuZmxleENvbHVtbn0gJHt1dGlsU3R5bGVzLnN0aWNreX1gfSBzdHlsZT17eyBtYXhXaWR0aDogXCIyMHJlbVwiICwgcGFkZGluZzogJzAuNXJlbScgfX0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5ET2N1bWVudGF0aW9uIEludHJvPC9oMj5cbiAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2VkIGVhcXVlIHF1YWUgYXJjaGl0ZWN0bywgcHJhZXNlbnRpdW0sIHNhcGllbnRlIHJhdGlvbmUgcXVpYSBkb2xvcnVtIGxhYm9yZSBub2JpcyBub3N0cnVtIHBvcnJvIHZlcm8gYWxpcXVhbSB2aXRhZSB0b3RhbSBpc3RlIGV4Y2VwdHVyaSBkb2xvcmVtIGZ1Z2lhdCBkb2xvcmlidXMuPC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxEb2N1bWVudGF0aW9uTGlzdCBkb2N1bWVudHM9e2FsbERvY3VtZW50YXRpb259IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIwcmVtXCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gLz5cbiAgICAgICAgKX0gXG4gICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50YXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==