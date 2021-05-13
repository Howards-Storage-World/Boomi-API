webpackHotUpdate_N_E("pages/implementations",{

/***/ "./pages/implementations/index.tsx":
/*!*****************************************!*\
  !*** ./pages/implementations/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/date */ "./components/date.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var meta = {
  title: "HSW Boomi API Documentation",
  description: "A place collection of documentation on HSW's Boomi APIs."
};
var navigation_links = [{
  name: 'Stock Lookup',
  path: "/stock-lookup",
  last_updated: "2021-05-13"
}];

var ImplementationsListEntry = function ImplementationsListEntry(_ref) {
  var _ref$link = _ref.link,
      name = _ref$link.name,
      path = _ref$link.path,
      last_updated = _ref$link.last_updated;
  return __jsx("li", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/implementations".concat(path),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, name)), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("small", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lightText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, last_updated ? __jsx(_components_date__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dateString: last_updated,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }) : "never updated"));
};

_c = ImplementationsListEntry;

var ImplementationsList = function ImplementationsList(_ref2) {
  var links = _ref2.links,
      style = _ref2.style;
  return __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding1px),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "All Implementations"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, links.map(function (link) {
    return __jsx(ImplementationsListEntry, {
      link: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    });
  })));
};

_c2 = ImplementationsList;

var Implementations = function Implementations() {
  _s();

  var shouldBe2Cols = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])({
    minWidth: '40rem'
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Implementations | HSW Boomi API",
    meta: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, shouldBe2Cols ? __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flexGrid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(ImplementationsList, {
    links: navigation_links,
    style: {
      maxWidth: "20rem",
      padding: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flexColumn, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.sticky),
    style: {
      maxWidth: "20rem",
      padding: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "API Implementation Examples"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "These example are intended to provide a sample implementation of the Boomi API feature set. Ideally these will cover all the features (including webhooks) for testing by non-technical users and for reference when developers are consuming or implementing these API interfaces. "))) : __jsx(ImplementationsList, {
    links: navigation_links,
    style: {
      maxWidth: "20rem",
      margin: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }));
};

_s(Implementations, "FZNTCrnEOmYKKDuGJ6LeXIXXofQ=", false, function () {
  return [react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
});

_c3 = Implementations;
/* harmony default export */ __webpack_exports__["default"] = (Implementations);

var _c, _c2, _c3;

$RefreshReg$(_c, "ImplementationsListEntry");
$RefreshReg$(_c2, "ImplementationsList");
$RefreshReg$(_c3, "Implementations");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5hdmlnYXRpb25fbGlua3MiLCJuYW1lIiwicGF0aCIsImxhc3RfdXBkYXRlZCIsIkltcGxlbWVudGF0aW9uc0xpc3RFbnRyeSIsImxpbmsiLCJ1dGlsU3R5bGVzIiwibGlzdEl0ZW0iLCJsaWdodFRleHQiLCJJbXBsZW1lbnRhdGlvbnNMaXN0IiwibGlua3MiLCJzdHlsZSIsImhlYWRpbmdNZCIsInBhZGRpbmcxcHgiLCJoZWFkaW5nTGciLCJsaXN0IiwibWFwIiwiSW1wbGVtZW50YXRpb25zIiwic2hvdWxkQmUyQ29scyIsInVzZU1lZGlhUXVlcnkiLCJtaW5XaWR0aCIsImZsZXhHcmlkIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiZmxleENvbHVtbiIsInN0aWNreSIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsT0FBSyxFQUFFLDZCQURJO0FBRVhDLGFBQVcsRUFBRTtBQUZGLENBQWI7QUFXQSxJQUFNQyxnQkFBc0MsR0FBRyxDQUM3QztBQUFFQyxNQUFJLEVBQUUsY0FBUjtBQUF3QkMsTUFBSSxFQUFFLGVBQTlCO0FBQStDQyxjQUFZLEVBQUU7QUFBN0QsQ0FENkMsQ0FBL0M7O0FBSUEsSUFBTUMsd0JBQTBELEdBQUcsU0FBN0RBLHdCQUE2RCxPQUE0QztBQUFBLHVCQUF6Q0MsSUFBeUM7QUFBQSxNQUFqQ0osSUFBaUMsYUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLElBQTJCLGFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxZQUFxQixhQUFyQkEsWUFBcUI7QUFDN0csU0FDRTtBQUFJLGFBQVMsRUFBRUcsK0RBQVUsQ0FBQ0MsUUFBMUI7QUFBQTtBQUFB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QUE4QyxTQUFLLEVBQUU7QUFBRXNCLGNBQVEsRUFBRSxPQUFaO0FBQXFCSSxZQUFNLEVBQUU7QUFBN0IsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZOLENBREY7QUFlRCxDQWpCRDs7R0FBTVQsZTtVQUNrQkUsOEQ7OztNQURsQkYsZTtBQW1CU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zLjhjZTE5OGEzYjAzOWEzMjk0Njg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBEYXRlIGZyb20gJ0Bjb21wb25lbnRzL2RhdGUnO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgbWV0YSA9IHtcclxuICB0aXRsZTogXCJIU1cgQm9vbWkgQVBJIERvY3VtZW50YXRpb25cIixcclxuICBkZXNjcmlwdGlvbjogXCJBIHBsYWNlIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRhdGlvbiBvbiBIU1cncyBCb29taSBBUElzLlwiXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltcGxlbWVudGF0aW9uTGluayB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgcGF0aDogc3RyaW5nXHJcbiAgbGFzdF91cGRhdGVkPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IG5hdmlnYXRpb25fbGlua3M6IEltcGxlbWVudGF0aW9uTGlua1tdID0gW1xyXG4gIHsgbmFtZTogJ1N0b2NrIExvb2t1cCcsIHBhdGg6IFwiL3N0b2NrLWxvb2t1cFwiLCBsYXN0X3VwZGF0ZWQ6IFwiMjAyMS0wNS0xM1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBJbXBsZW1lbnRhdGlvbnNMaXN0RW50cnk6IEZDPHsgbGluazogSW1wbGVtZW50YXRpb25MaW5rIH0+ID0gKHsgbGluazogeyBuYW1lLCBwYXRoLCBsYXN0X3VwZGF0ZWQgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICA8TGluayBocmVmPXtgL2ltcGxlbWVudGF0aW9ucyR7cGF0aH1gfT5cclxuICAgICAgICA8YT57bmFtZX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5cclxuICAgICAgICB7bGFzdF91cGRhdGVkID8gPERhdGUgZGF0ZVN0cmluZz17bGFzdF91cGRhdGVkfSAvPiA6IFwibmV2ZXIgdXBkYXRlZFwifVxyXG4gICAgICA8L3NtYWxsPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSW1wbGVtZW50YXRpb25zTGlzdDogRkM8eyBsaW5rczogSW1wbGVtZW50YXRpb25MaW5rW10sIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIH0+ID0gKHsgbGlua3MsIHN0eWxlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkFsbCBJbXBsZW1lbnRhdGlvbnM8L2gyPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxyXG4gICAgICAgIHtsaW5rcy5tYXAobGluayA9PiAoXHJcbiAgICAgICAgICA8SW1wbGVtZW50YXRpb25zTGlzdEVudHJ5ICBsaW5rPXtsaW5rfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IEltcGxlbWVudGF0aW9uczogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2hvdWxkQmUyQ29scyA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogJzQwcmVtJyB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkltcGxlbWVudGF0aW9ucyB8IEhTVyBCb29taSBBUElcIiBtZXRhPXttZXRhfT5cclxuICAgICAgICB7c2hvdWxkQmUyQ29scyA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmZsZXhHcmlkfT5cclxuICAgICAgICAgICAgPEltcGxlbWVudGF0aW9uc0xpc3QgbGlua3M9e25hdmlnYXRpb25fbGlua3N9IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIwcmVtXCIgLCBwYWRkaW5nOiAnMC41cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMuZmxleENvbHVtbn0gJHt1dGlsU3R5bGVzLnN0aWNreX1gfSBzdHlsZT17eyBtYXhXaWR0aDogXCIyMHJlbVwiICwgcGFkZGluZzogJzAuNXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkFQSSBJbXBsZW1lbnRhdGlvbiBFeGFtcGxlczwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+VGhlc2UgZXhhbXBsZSBhcmUgaW50ZW5kZWQgdG8gcHJvdmlkZSBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgQm9vbWkgQVBJIGZlYXR1cmUgc2V0LiBJZGVhbGx5IHRoZXNlIHdpbGwgY292ZXIgYWxsIHRoZSBmZWF0dXJlcyAoaW5jbHVkaW5nIHdlYmhvb2tzKSBmb3IgdGVzdGluZyBieSBub24tdGVjaG5pY2FsIHVzZXJzIGFuZCBmb3IgcmVmZXJlbmNlIHdoZW4gZGV2ZWxvcGVycyBhcmUgY29uc3VtaW5nIG9yIGltcGxlbWVudGluZyB0aGVzZSBBUEkgaW50ZXJmYWNlcy4gPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEltcGxlbWVudGF0aW9uc0xpc3QgbGlua3M9e25hdmlnYXRpb25fbGlua3N9IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIwcmVtXCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gLz5cclxuICAgICAgICApfSBcclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltcGxlbWVudGF0aW9uczsiXSwic291cmNlUm9vdCI6IiJ9