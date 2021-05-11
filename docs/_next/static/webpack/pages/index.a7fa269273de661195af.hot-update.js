webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb2N1bWVudGF0aW9uLnRzeCJdLCJuYW1lcyI6WyJEb2N1bWVudGF0aW9uTGlzdEVudHJ5IiwiZG9jdW1lbnQiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImlzVW5yZWxlYXNlZCIsInV0aWxTdHlsZXMiLCJsaXN0SXRlbSIsImxpZ2h0VGV4dCIsIkRvY3VtZW50YXRpb25MaXN0IiwiZG9jdW1lbnRzIiwic3R5bGUiLCJpc1JlY2VudCIsImhlYWRpbmdNZCIsInBhZGRpbmcxcHgiLCJoZWFkaW5nTGciLCJsaXN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsc0JBQWtGLEdBQUcsU0FBckZBLHNCQUFxRixPQUE2RDtBQUFBLDJCQUExREMsUUFBMEQ7QUFBQSxNQUE5Q0MsRUFBOEMsaUJBQTlDQSxFQUE4QztBQUFBLE1BQTFDQyxJQUEwQyxpQkFBMUNBLElBQTBDO0FBQUEsTUFBcENDLEtBQW9DLGlCQUFwQ0EsS0FBb0M7QUFBQSwrQkFBM0JDLFlBQTJCO0FBQUEsTUFBM0JBLFlBQTJCLGtDQUFaLEtBQVk7QUFDN0osU0FDRTtBQUFJLGFBQVMsRUFBRUMsK0RBQVUsQ0FBQ0MsUUFBMUI7QUFBb0MsT0FBRyxFQUFFTCxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxDQUFDRyxZQUFELEdBQWdCLHFCQUFoQixHQUF3QyxnQ0FBcEQ7QUFBc0YsTUFBRSxFQUFFLENBQUNBLFlBQUQsNEJBQWtDSCxFQUFsQyx3Q0FBc0VBLEVBQXRFLENBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlFLEtBQUosQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTyxhQUFTLEVBQUVFLCtEQUFVLENBQUNFLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU0sY0FBVSxFQUFFTCxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURGO0FBV0QsQ0FaTTtLQUFNSCxzQjtBQWNOLElBQU1TLGlCQUFnSSxHQUFHLFNBQW5JQSxpQkFBbUksUUFBa0U7QUFBQSxNQUEvREMsU0FBK0QsU0FBL0RBLFNBQStEO0FBQUEsTUFBcERDLEtBQW9ELFNBQXBEQSxLQUFvRDtBQUFBLGlDQUE3Q04sWUFBNkM7QUFBQSxNQUE3Q0EsWUFBNkMsbUNBQTlCLEtBQThCO0FBQUEsNkJBQXZCTyxRQUF1QjtBQUFBLE1BQXZCQSxRQUF1QiwrQkFBWixLQUFZO0FBQ2hOLFNBQ0U7QUFBUyxhQUFTLFlBQUtOLCtEQUFVLENBQUNPLFNBQWhCLGNBQTZCUCwrREFBVSxDQUFDUSxVQUF4QyxDQUFsQjtBQUF3RSxTQUFLLEVBQUVILEtBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUwsK0RBQVUsQ0FBQ1MsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0gsUUFBUSxHQUFHLHNCQUFILEdBQTRCLG1CQUExRSxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVOLCtEQUFVLENBQUNVLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sU0FBUyxDQUFDTyxHQUFWLENBQWMsVUFBQ2hCLFFBQUQ7QUFBQSxXQUNiLE1BQUMsc0JBQUQ7QUFBd0IsY0FBUSxFQUFFQSxRQUFsQztBQUE0QyxrQkFBWSxFQUFFSSxZQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFkLENBREgsQ0FGRixFQU9HTyxRQUFRLElBQ1AsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILENBQTVCLENBUkosQ0FERjtBQWFELENBZE07TUFBTUgsaUI7QUFnQkVBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3ZmEyNjkyNzNkZTY2MTE5NWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IERhdGUgZnJvbSAnLi9kYXRlJztcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgRG9jdW1lbnRNZXRhRGF0YSB9IGZyb20gXCJAbGliL2RvY3VtZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgRG9jdW1lbnRhdGlvbkxpc3RFbnRyeTogRkM8eyBkb2N1bWVudDogRG9jdW1lbnRNZXRhRGF0YSwgaXNVbnJlbGVhc2VkPzogYm9vbGVhbiB9PiA9ICh7IGRvY3VtZW50OiB7IGlkLCBkYXRlLCB0aXRsZSB9LCBpc1VucmVsZWFzZWQgPSBmYWxzZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxyXG4gICAgICA8TGluayBocmVmPXshaXNVbnJlbGVhc2VkID8gXCIvZG9jdW1lbnRhdGlvbi9baWRdXCIgOiBcIi9kb2N1bWVudGF0aW9uL3VucmVsZWFzZWQvW2lkXVwifSBhcz17IWlzVW5yZWxlYXNlZCA/IGAvZG9jdW1lbnRhdGlvbi8ke2lkfWAgOiBgL2RvY3VtZW50YXRpb24vdW5yZWxlYXNlZC8ke2lkfWB9PlxyXG4gICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5cclxuICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxyXG4gICAgICA8L3NtYWxsPlxyXG4gICAgPC9saT5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRG9jdW1lbnRhdGlvbkxpc3Q6IEZDPHsgZG9jdW1lbnRzOiBEb2N1bWVudE1ldGFEYXRhW10sIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzLCBpc1VucmVsZWFzZWQ/OiBib29sZWFuLCBpc1JlY2VudD86IGJvb2xlYW4gfT4gPSAoeyBkb2N1bWVudHMsIHN0eWxlLCBpc1VucmVsZWFzZWQgPSBmYWxzZSwgaXNSZWNlbnQgPSBmYWxzZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT57aXNSZWNlbnQgPyBcIlJlY2VudCBEb2N1bWVudGF0aW9uXCIgOiBcIkFsbCBEb2N1bWVudGF0aW9uXCJ9PC9oMj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cclxuICAgICAgICB7ZG9jdW1lbnRzLm1hcCgoZG9jdW1lbnQpID0+IChcclxuICAgICAgICAgIDxEb2N1bWVudGF0aW9uTGlzdEVudHJ5IGRvY3VtZW50PXtkb2N1bWVudH0gaXNVbnJlbGVhc2VkPXtpc1VucmVsZWFzZWR9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAge2lzUmVjZW50ICYmIChcclxuICAgICAgICA8TGluayBocmVmPVwiL2RvY3VtZW50YXRpb25cIj48YT48c21hbGw+U2VlIGFsbCBkb2NzPC9zbWFsbD48L2E+PC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50YXRpb25MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=