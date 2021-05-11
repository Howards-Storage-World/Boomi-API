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

  var documents = _ref.documents,
      _ref$isUnreleased = _ref.isUnreleased,
      isUnreleased = _ref$isUnreleased === void 0 ? false : _ref$isUnreleased;
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
    documents: documents,
    isUnreleased: isUnreleased,
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
    documents: documents,
    isUnreleased: isUnreleased,
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

var Document = function Document(_ref2) {
  var allDocumentation = _ref2.allDocumentation;
  return __jsx(Documentation, {
    documents: allDocumentation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  });
};

_c2 = Document;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Document);

var _c, _c2;

$RefreshReg$(_c, "Documentation");
$RefreshReg$(_c2, "Document");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jdW1lbnRhdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJEb2N1bWVudGF0aW9uIiwiZG9jdW1lbnRzIiwiaXNVbnJlbGVhc2VkIiwic2hvdWxkQmUyQ29scyIsInVzZU1lZGlhUXVlcnkiLCJtaW5XaWR0aCIsInV0aWxTdHlsZXMiLCJmbGV4R3JpZCIsIm1heFdpZHRoIiwicGFkZGluZyIsImhlYWRpbmdNZCIsImZsZXhDb2x1bW4iLCJzdGlja3kiLCJoZWFkaW5nTGciLCJtYXJnaW4iLCJEb2N1bWVudCIsImFsbERvY3VtZW50YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFXQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsT0FBSyxFQUFFLDZCQURJO0FBRVhDLGFBQVcsRUFBRTtBQUZGLENBQWI7O0FBS0EsSUFBTUMsYUFBNEUsR0FBRyxTQUEvRUEsYUFBK0UsT0FBeUM7QUFBQTs7QUFBQSxNQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsK0JBQTNCQyxZQUEyQjtBQUFBLE1BQTNCQSxZQUEyQixrQ0FBWixLQUFZO0FBQzVILE1BQU1DLGFBQWEsR0FBR0Msc0VBQWEsQ0FBQztBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUFELENBQW5DO0FBQ0EsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLCtCQUFkO0FBQThDLFFBQUksRUFBRVIsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTSxhQUFhLEdBQ1o7QUFBSyxhQUFTLEVBQUVHLCtEQUFVLENBQUNDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQW1CLGFBQVMsRUFBRU4sU0FBOUI7QUFBeUMsZ0JBQVksRUFBRUMsWUFBdkQ7QUFBcUUsU0FBSyxFQUFFO0FBQUVNLGNBQVEsRUFBRSxPQUFaO0FBQXNCQyxhQUFPLEVBQUU7QUFBL0IsS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUyxhQUFTLFlBQUtILCtEQUFVLENBQUNJLFNBQWhCLGNBQTZCSiwrREFBVSxDQUFDSyxVQUF4QyxjQUFzREwsK0RBQVUsQ0FBQ00sTUFBakUsQ0FBbEI7QUFBNkYsU0FBSyxFQUFFO0FBQUVKLGNBQVEsRUFBRSxPQUFaO0FBQXNCQyxhQUFPLEVBQUU7QUFBL0IsS0FBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFSCwrREFBVSxDQUFDTyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtT0FGRixDQUZGLENBRFksR0FTWixNQUFDLGlFQUFEO0FBQW1CLGFBQVMsRUFBRVosU0FBOUI7QUFBeUMsZ0JBQVksRUFBRUMsWUFBdkQ7QUFBcUUsU0FBSyxFQUFFO0FBQUVNLGNBQVEsRUFBRSxPQUFaO0FBQXFCTSxZQUFNLEVBQUU7QUFBN0IsS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZOLENBREY7QUFlRCxDQWpCRDs7R0FBTWQsYTtVQUNrQkksOEQ7OztLQURsQkosYTs7QUFtQk4sSUFBTWUsUUFBc0QsR0FBRyxTQUF6REEsUUFBeUQsUUFBMEI7QUFBQSxNQUF2QkMsZ0JBQXVCLFNBQXZCQSxnQkFBdUI7QUFDdkYsU0FBUSxNQUFDLGFBQUQ7QUFBZSxhQUFTLEVBQUVBLGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVI7QUFDRCxDQUZEOztNQUFNRCxROztBQUlTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2N1bWVudGF0aW9uLjI2N2M0OWQ1ZjA2MWE1MzY3N2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IERvY3VtZW50YXRpb25MaXN0IGZyb20gJ0Bjb21wb25lbnRzL2RvY3VtZW50YXRpb24nO1xuaW1wb3J0IHsgZ2V0U29ydGVkRG9jdW1lbnRhdGlvbkRhdGEsIERvY3VtZW50TWV0YURhdGEgfSBmcm9tICdAbGliL2RvY3VtZW50cyc7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxEb2N1bWVudGF0aW9uID0gYXdhaXQgZ2V0U29ydGVkRG9jdW1lbnRhdGlvbkRhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxEb2N1bWVudGF0aW9uXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiBcIkhTVyBCb29taSBBUEkgRG9jdW1lbnRhdGlvblwiLFxuICBkZXNjcmlwdGlvbjogXCJBIHBsYWNlIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRhdGlvbiBvbiBIU1cncyBCb29taSBBUElzLlwiXG59O1xuXG5jb25zdCBEb2N1bWVudGF0aW9uOiBGQzx7IGRvY3VtZW50czogRG9jdW1lbnRNZXRhRGF0YVtdLCBpc1VucmVsZWFzZWQ/OiBib29sZWFuIH0+ID0gKHsgZG9jdW1lbnRzLCBpc1VucmVsZWFzZWQgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHNob3VsZEJlMkNvbHMgPSB1c2VNZWRpYVF1ZXJ5KHsgbWluV2lkdGg6ICc0MHJlbScgfSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkRvY3VtZW50YXRpb24gfCBIU1cgQm9vbWkgQVBJXCIgbWV0YT17bWV0YX0+XG4gICAgICAgIHtzaG91bGRCZTJDb2xzID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmZsZXhHcmlkfT5cbiAgICAgICAgICAgIDxEb2N1bWVudGF0aW9uTGlzdCBkb2N1bWVudHM9e2RvY3VtZW50c30gaXNVbnJlbGVhc2VkPXtpc1VucmVsZWFzZWR9IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIwcmVtXCIgLCBwYWRkaW5nOiAnMC41cmVtJyB9fSAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLmZsZXhDb2x1bW59ICR7dXRpbFN0eWxlcy5zdGlja3l9YH0gc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjByZW1cIiAsIHBhZGRpbmc6ICcwLjVyZW0nIH19PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+RE9jdW1lbnRhdGlvbiBJbnRybzwvaDI+XG4gICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNlZCBlYXF1ZSBxdWFlIGFyY2hpdGVjdG8sIHByYWVzZW50aXVtLCBzYXBpZW50ZSByYXRpb25lIHF1aWEgZG9sb3J1bSBsYWJvcmUgbm9iaXMgbm9zdHJ1bSBwb3JybyB2ZXJvIGFsaXF1YW0gdml0YWUgdG90YW0gaXN0ZSBleGNlcHR1cmkgZG9sb3JlbSBmdWdpYXQgZG9sb3JpYnVzLjwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RG9jdW1lbnRhdGlvbkxpc3QgZG9jdW1lbnRzPXtkb2N1bWVudHN9IGlzVW5yZWxlYXNlZD17aXNVbnJlbGVhc2VkfSBzdHlsZT17eyBtYXhXaWR0aDogXCIyMHJlbVwiLCBtYXJnaW46IFwiYXV0b1wiIH19IC8+XG4gICAgICAgICl9IFxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5jb25zdCBEb2N1bWVudDogRkM8eyBhbGxEb2N1bWVudGF0aW9uOiBEb2N1bWVudE1ldGFEYXRhW10gfT4gPSAoeyBhbGxEb2N1bWVudGF0aW9uIH0pID0+IHtcbiAgcmV0dXJuICg8RG9jdW1lbnRhdGlvbiBkb2N1bWVudHM9e2FsbERvY3VtZW50YXRpb259IC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudDsiXSwic291cmNlUm9vdCI6IiJ9