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
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./components/date.tsx");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ "./components/layout.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\dev\\Boomi-API\\components\\documentation.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var DocumentationListEntry = function DocumentationListEntry(_ref) {
  var _ref$document = _ref.document,
      id = _ref$document.id,
      date = _ref$document.date,
      title = _ref$document.title,
      _ref$isUnreleased = _ref.isUnreleased,
      isUnreleased = _ref$isUnreleased === void 0 ? false : _ref$isUnreleased;
  return __jsx("li", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem,
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
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lightText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_date__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding1px),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, isRecent ? "Recent Documentation" : "All Documentation"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
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
var meta = {
  title: "HSW Boomi API Documentation",
  description: "A place collection of documentation on HSW's Boomi APIs."
};

var Documentation = function Documentation(_ref3) {
  _s();

  var documents = _ref3.documents,
      _ref3$isUnreleased = _ref3.isUnreleased,
      isUnreleased = _ref3$isUnreleased === void 0 ? false : _ref3$isUnreleased;
  var shouldBe2Cols = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])({
    minWidth: '40rem'
  });
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Documentation | HSW Boomi API",
    meta: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, shouldBe2Cols ? __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.flexGrid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(DocumentationList, {
    documents: documents,
    isUnreleased: isUnreleased,
    style: {
      maxWidth: "20rem",
      padding: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "DOcumentation Intro"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque quae architecto, praesentium, sapiente ratione quia dolorum labore nobis nostrum porro vero aliquam vitae totam iste excepturi dolorem fugiat doloribus."))) : __jsx(DocumentationList, {
    documents: documents,
    isUnreleased: isUnreleased,
    style: {
      maxWidth: "20rem",
      margin: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }));
};

_s(Documentation, "FZNTCrnEOmYKKDuGJ6LeXIXXofQ=", false, function () {
  return [react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
});

_c3 = Documentation;
/* harmony default export */ __webpack_exports__["default"] = (Documentation);

var _c, _c2, _c3;

$RefreshReg$(_c, "DocumentationListEntry");
$RefreshReg$(_c2, "DocumentationList");
$RefreshReg$(_c3, "Documentation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb2N1bWVudGF0aW9uLnRzeCJdLCJuYW1lcyI6WyJEb2N1bWVudGF0aW9uTGlzdEVudHJ5IiwiZG9jdW1lbnQiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImlzVW5yZWxlYXNlZCIsInV0aWxTdHlsZXMiLCJsaXN0SXRlbSIsImxpZ2h0VGV4dCIsIkRvY3VtZW50YXRpb25MaXN0IiwiZG9jdW1lbnRzIiwic3R5bGUiLCJpc1JlY2VudCIsImhlYWRpbmdNZCIsInBhZGRpbmcxcHgiLCJoZWFkaW5nTGciLCJsaXN0IiwibWFwIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiRG9jdW1lbnRhdGlvbiIsInNob3VsZEJlMkNvbHMiLCJ1c2VNZWRpYVF1ZXJ5IiwibWluV2lkdGgiLCJmbGV4R3JpZCIsIm1heFdpZHRoIiwicGFkZGluZyIsImZsZXhDb2x1bW4iLCJzdGlja3kiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLHNCQUFrRixHQUFHLFNBQXJGQSxzQkFBcUYsT0FBNkQ7QUFBQSwyQkFBMURDLFFBQTBEO0FBQUEsTUFBOUNDLEVBQThDLGlCQUE5Q0EsRUFBOEM7QUFBQSxNQUExQ0MsSUFBMEMsaUJBQTFDQSxJQUEwQztBQUFBLE1BQXBDQyxLQUFvQyxpQkFBcENBLEtBQW9DO0FBQUEsK0JBQTNCQyxZQUEyQjtBQUFBLE1BQTNCQSxZQUEyQixrQ0FBWixLQUFZO0FBQzdKLFNBQ0U7QUFBSSxhQUFTLEVBQUVDLCtEQUFVLENBQUNDLFFBQTFCO0FBQW9DLE9BQUcsRUFBRUwsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsQ0FBQ0csWUFBRCxHQUFnQixxQkFBaEIsR0FBd0MsZ0NBQXBEO0FBQXNGLE1BQUUsRUFBRSxDQUFDQSxZ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QUFFLE9BQVo7QUFBc0JDLGFBQU8sRUFBRTtBQUEvQixLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFTLGFBQVMsWUFBS3BCLCtEQUFVLENBQUNPLFNBQWhCLGNBQTZCUCwrREFBVSxDQUFDcUIsVUFBeEMsY0FBc0RyQiwrREFBVSxDQUFDc0IsTUFBakUsQ0FBbEI7QUFBNkYsU0FBSyxFQUFFO0FBQUVILGNBQVEsRUFBRSxPQUFaO0FBQXNCQyxhQUFPLEVBQUU7QUFBL0IsS0FBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFcEIsK0RBQVUsQ0FBQ1MsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbU9BRkYsQ0FGRixDQURZLEdBU1osTUFBQyxpQkFBRDtBQUFtQixhQUFTLEVBQUVMLFNBQTlCO0FBQXlDLGdCQUFZLEVBQUVMLFlBQXZEO0FBQXFFLFNBQUssRUFBRTtBQUFFb0IsY0FBUSxFQUFFLE9BQVo7QUFBcUJJLFlBQU0sRUFBRTtBQUE3QixLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVk4sQ0FERjtBQWVELENBakJEOztHQUFNVCxhO1VBQ2tCRSw4RDs7O01BRGxCRixhO0FBa0JTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MDM0YWVkN2EwZTliMjQxZThmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xyXG5pbXBvcnQgRGF0ZSBmcm9tICcuL2RhdGUnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgRG9jdW1lbnRNZXRhRGF0YSB9IGZyb20gXCJAbGliL2RvY3VtZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgRG9jdW1lbnRhdGlvbkxpc3RFbnRyeTogRkM8eyBkb2N1bWVudDogRG9jdW1lbnRNZXRhRGF0YSwgaXNVbnJlbGVhc2VkPzogYm9vbGVhbiB9PiA9ICh7IGRvY3VtZW50OiB7IGlkLCBkYXRlLCB0aXRsZSB9LCBpc1VucmVsZWFzZWQgPSBmYWxzZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxyXG4gICAgICA8TGluayBocmVmPXshaXNVbnJlbGVhc2VkID8gXCIvZG9jdW1lbnRhdGlvbi9baWRdXCIgOiBcIi9kb2N1bWVudGF0aW9uL3VucmVsZWFzZWQvW2lkXVwifSBhcz17IWlzVW5yZWxlYXNlZCA/IGAvZG9jdW1lbnRhdGlvbi8ke2lkfWAgOiBgL2RvY3VtZW50YXRpb24vdW5yZWxlYXNlZC8ke2lkfWB9PlxyXG4gICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5cclxuICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxyXG4gICAgICA8L3NtYWxsPlxyXG4gICAgPC9saT5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRG9jdW1lbnRhdGlvbkxpc3Q6IEZDPHsgZG9jdW1lbnRzOiBEb2N1bWVudE1ldGFEYXRhW10sIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzLCBpc1VucmVsZWFzZWQ/OiBib29sZWFuLCBpc1JlY2VudD86IGJvb2xlYW4gfT4gPSAoeyBkb2N1bWVudHMsIHN0eWxlLCBpc1VucmVsZWFzZWQgPSBmYWxzZSwgaXNSZWNlbnQgPSBmYWxzZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT57aXNSZWNlbnQgPyBcIlJlY2VudCBEb2N1bWVudGF0aW9uXCIgOiBcIkFsbCBEb2N1bWVudGF0aW9uXCJ9PC9oMj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cclxuICAgICAgICB7ZG9jdW1lbnRzLm1hcCgoZG9jdW1lbnQpID0+IChcclxuICAgICAgICAgIDxEb2N1bWVudGF0aW9uTGlzdEVudHJ5IGRvY3VtZW50PXtkb2N1bWVudH0gaXNVbnJlbGVhc2VkPXtpc1VucmVsZWFzZWR9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAge2lzUmVjZW50ICYmIChcclxuICAgICAgICA8TGluayBocmVmPVwiL2RvY3VtZW50YXRpb25cIj48YT48c21hbGw+U2VlIGFsbCBkb2NzPC9zbWFsbD48L2E+PC9MaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufTtcclxuXHJcblxyXG5jb25zdCBtZXRhID0ge1xyXG4gIHRpdGxlOiBcIkhTVyBCb29taSBBUEkgRG9jdW1lbnRhdGlvblwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIkEgcGxhY2UgY29sbGVjdGlvbiBvZiBkb2N1bWVudGF0aW9uIG9uIEhTVydzIEJvb21pIEFQSXMuXCJcclxufTtcclxuXHJcbmNvbnN0IERvY3VtZW50YXRpb246IEZDPHsgZG9jdW1lbnRzOiBEb2N1bWVudE1ldGFEYXRhW10sIGlzVW5yZWxlYXNlZD86IGJvb2xlYW4gfT4gPSAoeyBkb2N1bWVudHMsIGlzVW5yZWxlYXNlZCA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCBzaG91bGRCZTJDb2xzID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiAnNDByZW0nIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiRG9jdW1lbnRhdGlvbiB8IEhTVyBCb29taSBBUElcIiBtZXRhPXttZXRhfT5cclxuICAgICAgICB7c2hvdWxkQmUyQ29scyA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmZsZXhHcmlkfT5cclxuICAgICAgICAgICAgPERvY3VtZW50YXRpb25MaXN0IGRvY3VtZW50cz17ZG9jdW1lbnRzfSBpc1VucmVsZWFzZWQ9e2lzVW5yZWxlYXNlZH0gc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjByZW1cIiAsIHBhZGRpbmc6ICcwLjVyZW0nIH19IC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5mbGV4Q29sdW1ufSAke3V0aWxTdHlsZXMuc3RpY2t5fWB9IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIwcmVtXCIgLCBwYWRkaW5nOiAnMC41cmVtJyB9fT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+RE9jdW1lbnRhdGlvbiBJbnRybzwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2VkIGVhcXVlIHF1YWUgYXJjaGl0ZWN0bywgcHJhZXNlbnRpdW0sIHNhcGllbnRlIHJhdGlvbmUgcXVpYSBkb2xvcnVtIGxhYm9yZSBub2JpcyBub3N0cnVtIHBvcnJvIHZlcm8gYWxpcXVhbSB2aXRhZSB0b3RhbSBpc3RlIGV4Y2VwdHVyaSBkb2xvcmVtIGZ1Z2lhdCBkb2xvcmlidXMuPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPERvY3VtZW50YXRpb25MaXN0IGRvY3VtZW50cz17ZG9jdW1lbnRzfSBpc1VucmVsZWFzZWQ9e2lzVW5yZWxlYXNlZH0gc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjByZW1cIiwgbWFyZ2luOiBcImF1dG9cIiB9fSAvPlxyXG4gICAgICAgICl9IFxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudGF0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=