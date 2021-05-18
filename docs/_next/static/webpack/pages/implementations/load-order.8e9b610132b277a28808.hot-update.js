webpackHotUpdate_N_E("pages/implementations/load-order",{

/***/ "./pages/implementations/load-order.tsx":
/*!**********************************************!*\
  !*** ./pages/implementations/load-order.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_xml_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-xml-viewer */ "./node_modules/react-xml-viewer/dist/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_implementation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/implementation */ "./components/implementation.tsx");
/* harmony import */ var _components_tools_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/tools/iframe */ "./components/tools/iframe.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lib/hooks */ "./lib/hooks.ts");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\load-order.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







 // eslint-disable-next-line max-lines-per-function

var StockLookup = function StockLookup() {
  _s();

  var _error$response;

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0"),
      orderID = _useState[0],
      setOrderID = _useState[1];

  var _useLoad = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_8__["useLoad"])(),
      response = _useLoad.response,
      error = _useLoad.error,
      isLoading = _useLoad.isLoading,
      load = _useLoad.load;

  function loader() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise( /*#__PURE__*/function () {
      var _ref = Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
        var resp;
        return C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/executeTestOrderCreation"), orderID, {});

              case 3:
                resp = _context.sent;
                resolve(resp.data);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  var onSubmit = function onSubmit(e) {
    load(loader);
    e.preventDefault();
  };

  function onChange(setter) {
    var handler = function handler(e) {
      setter(e.currentTarget.value);
    };

    return handler;
  }

  return __jsx(_components_implementation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Load Order",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Order ID: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: orderID,
    onChange: onChange(setOrderID),
    placeholder: "Store IDs seperated by spaces",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 176
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: "Load Order",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Loading your order...") : response !== undefined ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Loaded:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 60
    }
  }, __jsx(react_xml_viewer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xml: response,
    collapsible: true,
    theme: {
      separatorColor: "#f5f5f5",
      textColor: "#d09f00"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 63
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Error: ", error === null || error === void 0 ? void 0 : error.message), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 76
    }
  }, __jsx(_components_tools_iframe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data,
    style: {
      background: "white",
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 79
    }
  }))));
};

_s(StockLookup, "yz4W6rc2za//E7Cce9y87dyvkuE=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL2xvYWQtb3JkZXIudHN4Il0sIm5hbWVzIjpbIlN0b2NrTG9va3VwIiwiYm9vbWlBUEkiLCJ1c2VCb29taUFQSSIsInVzZVN0YXRlIiwib3JkZXJJRCIsInNldE9yZGVySUQiLCJ1c2VMb2FkIiwicmVzcG9uc2UiLCJlcnJvciIsImlzTG9hZGluZyIsImxvYWQiLCJsb2FkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkF4aW9zIiwicG9zdCIsImVuZHBvaW50IiwidXJpIiwicmVzcCIsImRhdGEiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwic2V0dGVyIiwiaGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbiIsIm1heFdpZHRoIiwidXRpbFN0eWxlcyIsImlucHV0IiwiaGVhZGluZ01kIiwidW5kZWZpbmVkIiwic2VwYXJhdG9yQ29sb3IiLCJ0ZXh0Q29sb3IiLCJtZXNzYWdlIiwiYmFja2dyb3VuZCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLFdBQWUsR0FBRyxTQUFsQkEsV0FBa0IsR0FBTTtBQUFBOztBQUFBOztBQUM1QixNQUFNQyxRQUFRLEdBQUdDLDhFQUFXLEVBQTVCOztBQUQ0QixrQkFFRUMsc0RBQVEsQ0FBQyxHQUFELENBRlY7QUFBQSxNQUVyQkMsT0FGcUI7QUFBQSxNQUVaQyxVQUZZOztBQUFBLGlCQUdpQkMsMERBQU8sRUFIeEI7QUFBQSxNQUdwQkMsUUFIb0IsWUFHcEJBLFFBSG9CO0FBQUEsTUFHVkMsS0FIVSxZQUdWQSxLQUhVO0FBQUEsTUFHSEMsU0FIRyxZQUdIQSxTQUhHO0FBQUEsTUFHUUMsSUFIUixZQUdRQSxJQUhSOztBQUs1QixXQUFTQyxN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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTZDekIsS0FBN0MsYUFBNkNBLEtBQTdDLHVCQUE2Q0EsS0FBSyxDQUFFNkIsT0FBcEQsQ0FBRixFQUFtRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUcsTUFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBRTdCLEtBQUYsYUFBRUEsS0FBRiwwQ0FBRUEsS0FBSyxDQUFFRCxRQUFULG9EQUFFLGdCQUFpQmEsSUFBbEM7QUFBd0MsU0FBSyxFQUFFO0FBQUVrQixnQkFBVSxFQUFFLE9BQWQ7QUFBdUJDLFdBQUssRUFBRTtBQUE5QixLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsQ0FBbkUsQ0FYSixDQURGO0FBaUJELENBOUNEOztHQUFNdkMsVztVQUNhRSxzRSxFQUU0Qkksa0Q7OztLQUh6Q04sVztBQWdEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL2xvYWQtb3JkZXIuOGU5YjYxMDEzMmIyNzdhMjg4MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBYTUxWaWV3ZXIgZnJvbSAncmVhY3QteG1sLXZpZXdlcic7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJbXBsZW1lbnRhdGlvbiBmcm9tICdAY29tcG9uZW50cy9pbXBsZW1lbnRhdGlvbic7XHJcbmltcG9ydCBJRnJhbWUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL2lmcmFtZVwiO1xyXG5pbXBvcnQgeyB1c2VCb29taUFQSSB9IGZyb20gXCJAY29tcG9uZW50cy90b29scy9Cb29taUFQSVwiO1xyXG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQGxpYi9ob29rcyc7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtvcmRlcklELCBzZXRPcmRlcklEXSA9IHVzZVN0YXRlKFwiMFwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkPHN0cmluZywgRXJyb3IgJiB7IHJlc3BvbnNlPzogQXhpb3NSZXNwb25zZSB9PigpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2V4ZWN1dGVUZXN0T3JkZXJDcmVhdGlvbmAsIG9yZGVySUQsIHsgfSlcclxuICAgICAgICByZXNvbHZlKHJlc3AuZGF0YSBhcyBzdHJpbmcpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdDogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBvbkNoYW5nZShzZXR0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKSB7XHJcbiAgICBjb25zdCBoYW5kbGVyOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgICAgc2V0dGVyKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIkxvYWQgT3JkZXJcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdHlsZT17e21hcmdpbjogXCJhdXRvXCIsIG1heFdpZHRoOiBcIjIwcmVtXCJ9fT5cclxuICAgICAgICA8bGFiZWw+T3JkZXIgSUQ6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17b3JkZXJJRH0gb25DaGFuZ2U9e29uQ2hhbmdlKHNldE9yZGVySUQpfSBwbGFjZWhvbGRlcj1cIlN0b3JlIElEcyBzZXBlcmF0ZWQgYnkgc3BhY2VzXCIgLz48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT1cIkxvYWQgT3JkZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyBcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+TG9hZGluZyB5b3VyIG9yZGVyLi4uPC9oMj5cclxuICAgICAgOiByZXNwb25zZSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICA8PjxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5Mb2FkZWQ6PC9oMj48cD48WE1MVmlld2VyIHhtbD17cmVzcG9uc2V9IGNvbGxhcHNpYmxlPXt0cnVlfSB0aGVtZT17eyBzZXBhcmF0b3JDb2xvcjogXCIjZjVmNWY1XCIsIHRleHRDb2xvcjogXCIjZDA5ZjAwXCIgfX0+PC9YTUxWaWV3ZXI+PC9wPjwvPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8PjxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5FcnJvcjoge2Vycm9yPy5tZXNzYWdlfTwvaDI+PHA+PElGcmFtZSBjb250ZW50PXtlcnJvcj8ucmVzcG9uc2U/LmRhdGF9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgd2lkdGg6IFwiMTAwJVwifX0+PC9JRnJhbWU+PC9wPjwvPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9