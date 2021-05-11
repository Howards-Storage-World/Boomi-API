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
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: !isUnreleased ? "/documentation/[id]" : "/documentation/unreleased/[id]",
    as: !isUnreleased ? "/documentation/".concat(id) : "/documentation/unreleased/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, title)), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("small", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lightText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_date__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, isRecent ? "Recent Documentation" : "All Documentation"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, documents.map(function (document) {
    return __jsx(DocumentationListEntry, {
      document: document,
      isUnreleased: isUnreleased,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    });
  })), isRecent && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/documentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 37
    }
  }, __jsx("small", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb2N1bWVudGF0aW9uLnRzeCJdLCJuYW1lcyI6WyJEb2N1bWVudGF0aW9uTGlzdEVudHJ5IiwiZG9jdW1lbnQiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImlzVW5yZWxlYXNlZCIsInV0aWxTdHlsZXMiLCJsaXN0SXRlbSIsImxpZ2h0VGV4dCIsIkRvY3VtZW50YXRpb25MaXN0IiwiZG9jdW1lbnRzIiwic3R5bGUiLCJpc1JlY2VudCIsImhlYWRpbmdNZCIsInBhZGRpbmcxcHgiLCJoZWFkaW5nTGciLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsc0JBQWtGLEdBQUcsU0FBckZBLHNCQUFxRixPQUE2RDtBQUFBLDJCQUExREMsUUFBMEQ7QUFBQSxNQUE5Q0MsRUFBOEMsaUJBQTlDQSxFQUE4QztBQUFBLE1BQTFDQyxJQUEwQyxpQkFBMUNBLElBQTBDO0FBQUEsTUFBcENDLEtBQW9DLGlCQUFwQ0EsS0FBb0M7QUFBQSwrQkFBM0JDLFlBQTJCO0FBQUEsTUFBM0JBLFlBQTJCLGtDQUFaLEtBQVk7QUFDN0osU0FDRTtBQUFJLGFBQVMsRUFBRUMsK0RBQVUsQ0FBQ0MsUUFBMUI7QUFBb0MsT0FBRyxFQUFFTCxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxDQUFDRyxZQUFELEdBQWdCLHFCQUFoQixHQUF3QyxnQ0FBcEQ7QUFBc0YsTUFBRSxFQUFFLENBQUNBLFlBQUQsNEJBQWtDSCxFQUFsQyx3Q0FBc0VBLEVBQXRFLENBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlFLEtBQUosQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTyxhQUFTLEVBQUVFLCtEQUFVLENBQUNFLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU0sY0FBVSxFQUFFTCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURGO0FBV0QsQ0FaTTtLQUFNSCxzQjtBQWNOLElBQU1TLGlCQUFnSSxHQUFHLFNBQW5JQSxpQkFBbUksUUFBa0U7QUFBQSxNQUEvREMsU0FBK0QsU0FBL0RBLFNBQStEO0FBQUEsTUFBcERDLEtBQW9ELFNBQXBEQSxLQUFvRDtBQUFBLGlDQUE3Q04sWUFBNkM7QUFBQSxNQUE3Q0EsWUFBNkMsbUNBQTlCLEtBQThCO0FBQUEsNkJBQXZCTyxRQUF1QjtBQUFBLE1BQXZCQSxRQUF1QiwrQkFBWixLQUFZO0FBQ2hOLFNBQ0U7QUFBUyxhQUFTLFlBQUtOLCtEQUFVLENBQUNPLFNBQWhCLGNBQTZCUCwrREFBVSxDQUFDUSxVQUF4QyxDQUFsQjtBQUF3RSxTQUFLLEVBQUVILEtBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUwsK0RBQVUsQ0FBQ1MsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0gsUUFBUSxHQUFHLHNCQUFILEdBQTRCLG1CQUExRSxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVOLCtEQUFVLENBQUNVLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sU0FBUyxDQUFDTyxHQUFWLENBQWMsVUFBQ2hCLFFBQUQ7QUFBQSxXQUNiLE1BQUMsc0JBQUQ7QUFBd0IsY0FBUSxFQUFFQSxRQUFsQztBQUE0QyxrQkFBWSxFQUFFSSxZQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFkLENBREgsQ0FGRixFQU9HTyxRQUFRLElBQ1AsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILENBQTVCLENBUkosQ0FERjtBQWFELENBZE07TUFBTUgsaUI7QUFnQkVBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3VtZW50YXRpb24uYTdmYTI2OTI3M2RlNjYxMTk1YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRGF0ZSBmcm9tICcuL2RhdGUnO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBEb2N1bWVudE1ldGFEYXRhIH0gZnJvbSBcIkBsaWIvZG9jdW1lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBEb2N1bWVudGF0aW9uTGlzdEVudHJ5OiBGQzx7IGRvY3VtZW50OiBEb2N1bWVudE1ldGFEYXRhLCBpc1VucmVsZWFzZWQ/OiBib29sZWFuIH0+ID0gKHsgZG9jdW1lbnQ6IHsgaWQsIGRhdGUsIHRpdGxlIH0sIGlzVW5yZWxlYXNlZCA9IGZhbHNlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0ga2V5PXtpZH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9eyFpc1VucmVsZWFzZWQgPyBcIi9kb2N1bWVudGF0aW9uL1tpZF1cIiA6IFwiL2RvY3VtZW50YXRpb24vdW5yZWxlYXNlZC9baWRdXCJ9IGFzPXshaXNVbnJlbGVhc2VkID8gYC9kb2N1bWVudGF0aW9uLyR7aWR9YCA6IGAvZG9jdW1lbnRhdGlvbi91bnJlbGVhc2VkLyR7aWR9YH0+XHJcbiAgICAgICAgPGE+e3RpdGxlfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHNtYWxsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saWdodFRleHR9PlxyXG4gICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XHJcbiAgICAgIDwvc21hbGw+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBEb2N1bWVudGF0aW9uTGlzdDogRkM8eyBkb2N1bWVudHM6IERvY3VtZW50TWV0YURhdGFbXSwgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMsIGlzVW5yZWxlYXNlZD86IGJvb2xlYW4sIGlzUmVjZW50PzogYm9vbGVhbiB9PiA9ICh7IGRvY3VtZW50cywgc3R5bGUsIGlzVW5yZWxlYXNlZCA9IGZhbHNlLCBpc1JlY2VudCA9IGZhbHNlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9Pntpc1JlY2VudCA/IFwiUmVjZW50IERvY3VtZW50YXRpb25cIiA6IFwiQWxsIERvY3VtZW50YXRpb25cIn08L2gyPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxyXG4gICAgICAgIHtkb2N1bWVudHMubWFwKChkb2N1bWVudCkgPT4gKFxyXG4gICAgICAgICAgPERvY3VtZW50YXRpb25MaXN0RW50cnkgZG9jdW1lbnQ9e2RvY3VtZW50fSBpc1VucmVsZWFzZWQ9e2lzVW5yZWxlYXNlZH0vPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICB7aXNSZWNlbnQgJiYgKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jdW1lbnRhdGlvblwiPjxhPjxzbWFsbD5TZWUgYWxsIGRvY3M8L3NtYWxsPjwvYT48L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRhdGlvbkxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==