webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

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
/* harmony import */ var _components_tools_iframe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/tools/iframe */ "./components/tools/iframe.tsx");




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

  var _error$response, _error$response$data, _error$response2, _error$response2$data;

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
        }, (store.availability || []).reduce(function (obj, item) {
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
    var base = [['Store ID', 'storeID'], ['Store Name', 'storeName']];

    if (response && !error) {
      var _products = new Set();

      var _iterator = _createForOfIteratorHelper(response === null || response === void 0 ? void 0 : response.results),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var store = _step.value;

          var _iterator3 = _createForOfIteratorHelper(store.availability || []),
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
          base.push([_item, _item]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return Object(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["headers"])(base, data);
    }

    return Object(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["headers"])([["Error / Message", "msg"]], data);
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

  var a = axios__WEBPACK_IMPORTED_MODULE_4___default.a.isAxiosError(error) ? (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.toString() : "No detailed error message from the server.";
  console.log(a);
  return __jsx(_components_implementation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 108,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 194
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 109,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 203
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    getRowProps: function getRowProps() {
      return {};
    },
    style: {
      margin: "auto",
      maxWidth: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "Error: ", error === null || error === void 0 ? void 0 : error.toString()), __jsx(_components_tools_iframe__WEBPACK_IMPORTED_MODULE_10__["default"], {
    content: axios__WEBPACK_IMPORTED_MODULE_4___default.a.isAxiosError(error) ? (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.toString() : "No detailed error message from the server.",
    style: {
      background: "white",
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwidXNlU3RhdGUiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlTG9hZCIsInJlc3BvbnNlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJsb2FkIiwibG9hZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZXIiLCJpbnB1dCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInBheWxvYWQiLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJkYXRhIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsIm1hcCIsInN0b3JlIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImF2YWlsYWJpbGl0eSIsInJlZHVjZSIsIm9iaiIsIm1zZyIsImNvbHVtbnMiLCJiYXNlIiwiU2V0IiwiYWRkIiwia2V5cyIsInB1c2giLCJoZWFkZXJzIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZVN0b3JlcyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUHJvZHVjdHMiLCJhIiwiaXNBeGlvc0Vycm9yIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwibWF4V2lkdGgiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ01kIiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkE7QUFDQSxJQUFNQSxXQUFlLEdBQUcsU0FBbEJBLFdBQWtCLEdB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RixFQUFzRSxNQUFDLGlFQUFEO0FBQVEsV0FBTyxFQUFFbkMsNENBQUssQ0FBQ2tDLFlBQU4sQ0FBbUIvQyxLQUFuQix3QkFBNEJBLEtBQUssQ0FBQ0QsUUFBbEMsOEVBQTRCLGlCQUFnQm1CLElBQTVDLDBEQUE0QixzQkFBc0I4QixRQUF0QixFQUE1QixHQUErRCw0Q0FBaEY7QUFBOEgsU0FBSyxFQUFFO0FBQUVRLGdCQUFVLEVBQUUsT0FBZDtBQUF1QkMsV0FBSyxFQUFFO0FBQTlCLEtBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEUsQ0FaSixDQURGO0FBa0JELENBbEdEOztHQUFNbkUsVztVQUNhRSxzRSxFQUc0Qk0sa0Q7OztLQUp6Q1IsVztBQW9HU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC45NjhmYTQwNjExZTk1ZjUwODU4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSW1wbGVtZW50YXRpb24gZnJvbSAnQGNvbXBvbmVudHMvaW1wbGVtZW50YXRpb24nO1xyXG5pbXBvcnQgVGFibGUsIHsgaGVhZGVycyB9IGZyb20gXCJAY29tcG9uZW50cy90b29scy9UYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VCb29taUFQSSB9IGZyb20gXCJAY29tcG9uZW50cy90b29scy9Cb29taUFQSVwiO1xyXG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSBcIkBsaWIvaG9va3NcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IElGcmFtZSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvaWZyYW1lXCI7XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbCB7XHJcbiAgXCJwcm9kdWN0LWNvZGVcIjogc3RyaW5nLFxyXG4gIFwicXVhbnRpdHlcIjogbnVtYmVyLFxyXG59XHJcbmludGVyZmFjZSBTdG9yZVN0b2NrTGV2ZWwge1xyXG4gIFwibG9jYXRpb24taWRcIjogc3RyaW5nLFxyXG4gIFwibG9jYXRpb24tbmFtZVwiOiBzdHJpbmcsXHJcbiAgXCJhdmFpbGFiaWxpdHlcIj86IFN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbFJlc3BvbnNlIHtcclxuICByZXN1bHRzOiBTdG9yZVN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShcIjEyMTAwIDEyMDc3XCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoXCJMVFc5MTQxIExUVzkyNTIgTFRXOTEzNVwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkPFN0b2NrTGV2ZWxSZXNwb25zZSwgc3RyaW5nIHwgRXJyb3IgfCBBeGlvc0Vycm9yPigpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKTogUHJvbWlzZTxTdG9ja0xldmVsUmVzcG9uc2U+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IChpbnB1dDogc3RyaW5nKSA9PiB7IHJldHVybiBpbnB1dC5zcGxpdCgvXFxzKixcXHMqfFxccysvKS5maWx0ZXIoKGl0ZW0pID0+IChpdGVtICE9IFwiXCIpICYmIChpdGVtKSk7IH07XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgIFwibG9jYXRpb24taWRzXCI6IHBhcnNlcihzdG9yZXMpLFxyXG4gICAgICAgICAgXCJTS1VzXCI6IHBhcnNlcihwcm9kdWN0cylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgICAgcmVzb2x2ZShyZXNwLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkKGxvYWRlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBTb0ggPSByZXNwb25zZT8ucmVzdWx0cy5tYXAoKHN0b3JlOiBTdG9yZVN0b2NrTGV2ZWwpID0+IHtcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sXHJcbiAgICAgICAgICBzdG9yZU5hbWU6IHN0b3JlW1wibG9jYXRpb24tbmFtZVwiXSxcclxuICAgICAgICAgIC4uLihzdG9yZS5hdmFpbGFiaWxpdHkgfHwgW10pLnJlZHVjZSgob2JqOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LCBpdGVtOiBTdG9ja0xldmVsKSA9PiB7XHJcbiAgICAgICAgICAgIG9ialtpdGVtW1wicHJvZHVjdC1jb2RlXCJdXSA9IGl0ZW1bXCJxdWFudGl0eVwiXTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBTb0g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB7bXNnOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZSA9IFsgXHJcbiAgICAgIFsnU3RvcmUgSUQnLCAnc3RvcmVJRCddLFxyXG4gICAgICBbJ1N0b3JlIE5hbWUnLCAnc3RvcmVOYW1lJ11cclxuICAgIF07XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gbmV3IFNldCgpO1xyXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHJlc3BvbnNlPy5yZXN1bHRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHN0b3JlLmF2YWlsYWJpbGl0eSB8fCBbXSkge1xyXG4gICAgICAgICAgcHJvZHVjdHMuYWRkKGl0ZW1bXCJwcm9kdWN0LWNvZGVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2R1Y3RzLmtleXMoKSkge1xyXG4gICAgICAgIGJhc2UucHVzaChbIGl0ZW0gYXMgc3RyaW5nLCBpdGVtIGFzIHN0cmluZyBdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGVhZGVycyhiYXNlLCBkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZWFkZXJzKFsgW1wiRXJyb3IgLyBNZXNzYWdlXCIsIFwibXNnXCJdIF0sIGRhdGEpO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdDogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVN0b3JlczogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRTdG9yZXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2VQcm9kdWN0czogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0cyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGEgPSAgQXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSA/IGVycm9yLnJlc3BvbnNlPy5kYXRhPy50b1N0cmluZygpIDogXCJObyBkZXRhaWxlZCBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNlcnZlci5cIjtcclxuICBjb25zb2xlLmxvZyhhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMjByZW1cIn19PlxyXG4gICAgICAgIDxsYWJlbD5TdG9yZXM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17c3RvcmVzfSBvbkNoYW5nZT17b25DaGFuZ2VTdG9yZXN9IHBsYWNlaG9sZGVyPVwiU3RvcmUgSURzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMDBweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0czogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtwcm9kdWN0c30gb25DaGFuZ2U9e29uQ2hhbmdlUHJvZHVjdHN9IHBsYWNlaG9sZGVyPVwiSXRlbSBOdW1iZXJzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMjVweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT1cIkNoZWNrIEF2YWlsYWJpbGl0aWVzXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkxvYWRpbmcgeW91ciBkYXRhLi4uPC9oMj5cclxuICAgICAgOiByZXNwb25zZSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gZ2V0Um93UHJvcHM9eygpID0+ICh7fSl9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMTAwJVwifX0vPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8PjxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5FcnJvcjoge2Vycm9yPy50b1N0cmluZygpfTwvaDI+PElGcmFtZSBjb250ZW50PXtBeGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpID8gZXJyb3IucmVzcG9uc2U/LmRhdGE/LnRvU3RyaW5nKCkgOiBcIk5vIGRldGFpbGVkIGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyLlwifSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHdpZHRoOiBcIjEwMCVcIn19PjwvSUZyYW1lPjwvPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9