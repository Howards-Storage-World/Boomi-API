webpackHotUpdate_N_E("pages/documentation",{

/***/ "./components/documentation.tsx":
/*!**************************************!*\
  !*** ./components/documentation.tsx ***!
  \**************************************/
/*! exports provided: DocumentationListEntry, DocumentationList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationListEntry", function() { return DocumentationListEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationList", function() { return DocumentationList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date */ "./components/date.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\dev\\Boomi-API\\components\\documentation.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DocumentationListEntry = function DocumentationListEntry(_ref) {
  var _ref$document = _ref.document,
      id = _ref$document.id,
      date = _ref$document.date,
      title = _ref$document.title,
      _ref$isUnreleased = _ref.isUnreleased,
      isUnreleased = _ref$isUnreleased === void 0 ? false : _ref$isUnreleased;
  return __jsx("li", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
    key: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: !isUnreleased ? "/documentation/[id]" : "/documentation/unreleased/[id]",
    as: !isUnreleased ? "/documentation/".concat(id) : "/documentation/unreleased/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, title)), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("small", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lightText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_date__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
};
_c = DocumentationListEntry;
var DocumentationList = function DocumentationList(_ref2) {
  var documents = _ref2.documents,
      style = _ref2.style,
      _ref2$isUnreleased = _ref2.isUnreleased,
      isUnreleased = _ref2$isUnreleased === void 0 ? false : _ref2$isUnreleased,
      _ref2$isRecent = _ref2.isRecent,
      isRecent = _ref2$isRecent === void 0 ? false : _ref2$isRecent;
  return __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.padding1px),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, isRecent ? "Recent Documentation" : "All Documentation"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, documents.map(function (document) {
    return __jsx(DocumentationListEntry, {
      document: document,
      isUnreleased: isUnreleased,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    });
  })), isRecent && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/documentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 40
    }
  }, "See all docs"))));
};
_c2 = DocumentationList;
/* harmony default export */ __webpack_exports__["default"] = (DocumentationList);

var _c, _c2;

$RefreshReg$(_c, "DocumentationListEntry");
$RefreshReg$(_c2, "DocumentationList");

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
false,

/***/ "./components/layout.tsx":
false,

/***/ "./components/menu.module.css":
false,

/***/ "./components/menu.tsx":
false,

/***/ "./components/menuContent.module.css":
false,

/***/ "./components/menuContent.tsx":
false,

/***/ "./components/meta.tsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/cheeseburger-menu/dist/index.js":
false,

/***/ "./node_modules/cheeseburger-menu/index.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menu.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/menuContent.module.css":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-easy-swipe/lib/index.js":
false,

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
false,

/***/ "./node_modules/react-hamburger-menu/dist/HamburgerMenu.js":
false,

/***/ "./node_modules/react-responsive/dist/react-responsive.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb2N1bWVudGF0aW9uLnRzeCJdLCJuYW1lcyI6WyJEb2N1bWVudGF0aW9uTGlzdEVudHJ5IiwiZG9jdW1lbnQiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImlzVW5yZWxlYXNlZCIsInV0aWxTdHlsZXMiLCJsaXN0SXRlbSIsImxpZ2h0VGV4dCIsIkRvY3VtZW50YXRpb25MaXN0IiwiZG9jdW1lbnRzIiwic3R5bGUiLCJpc1JlY2VudCIsImhlYWRpbmdNZCIsInBhZGRpbmcxcHgiLCJoZWFkaW5nTGciLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBR08sSUFBTUEsc0JBQWtGLEdBQUcsU0FBckZBLHNCQUFxRixPQUE2RDtBQUFBLDJCQUExREMsUUFBMEQ7QUFBQSxNQUE5Q0MsRUFBOEMsaUJBQTlDQSxFQUE4QztBQUFBLE1BQTFDQyxJQUEwQyxpQkFBMUNBLElBQTBDO0FBQUEsTUFBcENDLEtBQW9DLGlCQUFwQ0EsS0FBb0M7QUFBQSwrQkFBM0JDLFlBQTJCO0FBQUEsTUFBM0JBLFlBQTJCLGtDQUFaLEtBQVk7QUFDN0osU0FDRTtBQUFJLGFBQVMsRUFBRUMsK0RBQVUsQ0FBQ0MsUUFBMUI7QUFBb0MsT0FBRyxFQUFFTCxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxDQUFDRyxZQUFELEdBQWdCLHFCQUFoQixHQUF3QyxnQ0FBcEQ7QUFBc0YsTUFBRSxFQUFFLENBQUNBLFlBQUQsNEJBQWtDSCxFQUFsQyx3Q0FBc0VBLEVBQXRFLENBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlFLEtBQUosQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTyxhQUFTLEVBQUVFLCtEQUFVLENBQUNFLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU0sY0FBVSxFQUFFTCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURGO0FBV0QsQ0FaTTtLQUFNSCxzQjtBQWNOLElBQU1TLGlCQUFnSSxHQUFHLFNBQW5JQSxpQkFBbUksUUFBa0U7QUFBQSxNQUEvREMsU0FBK0QsU0FBL0RBLFNBQStEO0FBQUEsTUFBcERDLEtBQW9ELFNBQXBEQSxLQUFvRDtBQUFBLGlDQUE3Q04sWUFBNkM7QUFBQSxNQUE3Q0EsWUFBNkMsbUNBQTlCLEtBQThCO0FBQUEsNkJBQXZCTyxRQUF1QjtBQUFBLE1BQXZCQSxRQUF1QiwrQkFBWixLQUFZO0FBQ2hOLFNBQ0U7QUFBUyxhQUFTLFlBQUtOLCtEQUFVLENBQUNPLFNBQWhCLGNBQTZCUCwrREFBVSxDQUFDUSxVQUF4QyxDQUFsQjtBQUF3RSxTQUFLLEVBQUVILEtBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUwsK0RBQVUsQ0FBQ1MsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0gsUUFBUSxHQUFHLHNCQUFILEdBQTRCLG1CQUExRSxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVOLCtEQUFVLENBQUNVLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sU0FBUyxDQUFDTyxHQUFWLENBQWMsVUFBQ2hCLFFBQUQ7QUFBQSxXQUNiLE1BQUMsc0JBQUQ7QUFBd0IsY0FBUSxFQUFFQSxRQUFsQztBQUE0QyxrQkFBWSxFQUFFSSxZQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFkLENBREgsQ0FGRixFQU9HTyxRQUFRLElBQ1AsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILENBQTVCLENBUkosQ0FERjtBQWFELENBZE07TUFBTUgsaUI7QUFnQkVBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3VtZW50YXRpb24uNDc5OGVjNDliNGY5NzRkYWI5NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcclxuaW1wb3J0IERhdGUgZnJvbSAnLi9kYXRlJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IERvY3VtZW50TWV0YURhdGEgfSBmcm9tIFwiQGxpYi9kb2N1bWVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IERvY3VtZW50YXRpb25MaXN0RW50cnk6IEZDPHsgZG9jdW1lbnQ6IERvY3VtZW50TWV0YURhdGEsIGlzVW5yZWxlYXNlZD86IGJvb2xlYW4gfT4gPSAoeyBkb2N1bWVudDogeyBpZCwgZGF0ZSwgdGl0bGUgfSwgaXNVbnJlbGVhc2VkID0gZmFsc2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cclxuICAgICAgPExpbmsgaHJlZj17IWlzVW5yZWxlYXNlZCA/IFwiL2RvY3VtZW50YXRpb24vW2lkXVwiIDogXCIvZG9jdW1lbnRhdGlvbi91bnJlbGVhc2VkL1tpZF1cIn0gYXM9eyFpc1VucmVsZWFzZWQgPyBgL2RvY3VtZW50YXRpb24vJHtpZH1gIDogYC9kb2N1bWVudGF0aW9uL3VucmVsZWFzZWQvJHtpZH1gfT5cclxuICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8c21hbGwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XHJcbiAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cclxuICAgICAgPC9zbWFsbD5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERvY3VtZW50YXRpb25MaXN0OiBGQzx7IGRvY3VtZW50czogRG9jdW1lbnRNZXRhRGF0YVtdLCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcywgaXNVbnJlbGVhc2VkPzogYm9vbGVhbiwgaXNSZWNlbnQ/OiBib29sZWFuIH0+ID0gKHsgZG9jdW1lbnRzLCBzdHlsZSwgaXNVbnJlbGVhc2VkID0gZmFsc2UsIGlzUmVjZW50ID0gZmFsc2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+e2lzUmVjZW50ID8gXCJSZWNlbnQgRG9jdW1lbnRhdGlvblwiIDogXCJBbGwgRG9jdW1lbnRhdGlvblwifTwvaDI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdH0+XHJcbiAgICAgICAge2RvY3VtZW50cy5tYXAoKGRvY3VtZW50KSA9PiAoXHJcbiAgICAgICAgICA8RG9jdW1lbnRhdGlvbkxpc3RFbnRyeSBkb2N1bWVudD17ZG9jdW1lbnR9IGlzVW5yZWxlYXNlZD17aXNVbnJlbGVhc2VkfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtpc1JlY2VudCAmJiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9kb2N1bWVudGF0aW9uXCI+PGE+PHNtYWxsPlNlZSBhbGwgZG9jczwvc21hbGw+PC9hPjwvTGluaz5cclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudGF0aW9uTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9