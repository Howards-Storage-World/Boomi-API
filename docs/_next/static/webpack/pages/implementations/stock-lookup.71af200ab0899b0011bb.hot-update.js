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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/implementation */ "./components/implementation.tsx");
/* harmony import */ var _components_tools_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/tools/Table */ "./components/tools/Table.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/hooks */ "./lib/hooks.ts");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_tools_iframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/tools/iframe */ "./components/tools/iframe.tsx");
/* harmony import */ var _components_tools_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/tools/loading */ "./components/tools/loading.tsx");


var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











// eslint-disable-next-line max-lines-per-function
var StockLookup = function StockLookup() {
  _s();

  var _error$response, _error$response$data, _error$response2, _error$response2$data;

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__["useBoomiAPI"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("12100 12077"),
      stores = _useState[0],
      setStores = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("LTW9141 LTW9252 LTW9135"),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useLoad = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_6__["useLoad"])(),
      response = _useLoad.response,
      error = _useLoad.error,
      isLoading = _useLoad.isLoading,
      load = _useLoad.load;

  function loader() {
    var parser = function parser(input) {
      return input.split(/\s*,\s*|\s+/).filter(function (item) {
        return item != "" && item;
      });
    };

    var payload = {
      "location-ids": parser(stores),
      "SKUs": parser(products)
    };
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload).then(function (response) {
      return response.data;
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    load(loader);
  }, []);

  function getProductsAsObject(store) {
    var addProduct = function addProduct(products_obj, item) {
      products_obj[item["product-code"]] = item["quantity"];
      return products_obj;
    };

    return (store.availability || []).reduce(addProduct, {});
  }

  var data = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    if (error || !response) return [{
      msg: "Something went wrong."
    }];
    return response === null || response === void 0 ? void 0 : response.results.map(function (store) {
      return _objectSpread({
        storeID: store["location-id"],
        storeName: store["location-name"]
      }, getProductsAsObject(store));
    });
  }, [response]);
  var columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    if (error || !response) return Object(_components_tools_Table__WEBPACK_IMPORTED_MODULE_4__["headers"])([["Error / Message", "msg"]], data);
    var base = [['Store ID', 'storeID'], ['Store Name', 'storeName']];
    var products = new Set();

    var _iterator = _createForOfIteratorHelper(response === null || response === void 0 ? void 0 : response.results),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var store = _step.value;
        Object.keys(getProductsAsObject(store)).forEach(function (sku) {
          return products.add(sku);
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(products.keys()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        base.push([item, item]);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return Object(_components_tools_Table__WEBPACK_IMPORTED_MODULE_4__["headers"])(base, data);
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

  var a = axios__WEBPACK_IMPORTED_MODULE_2___default.a.isAxiosError(error) ? (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.toString() : "No detailed error message from the server.";
  console.log(a);
  return __jsx(_components_implementation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Stores: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
    value: stores,
    onChange: onChangeStores,
    placeholder: "Store IDs seperated by spaces",
    style: {
      "width": "200px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 194
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Products: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
    value: products,
    onChange: onChangeProducts,
    placeholder: "Item Numbers seperated by spaces",
    style: {
      "width": "225px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 203
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), isLoading ? __jsx(_components_tools_loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }) : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 112,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Error: ", error === null || error === void 0 ? void 0 : error.toString()), __jsx(_components_tools_iframe__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: axios__WEBPACK_IMPORTED_MODULE_2___default.a.isAxiosError(error) ? (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.toString() : "No detailed error message from the server.",
    style: {
      background: "white",
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 79
    }
  })));
};

_s(StockLookup, "nXXQk1GbxV3/JUQqdGG+OVInjdY=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__["useBoomiAPI"], _lib_hooks__WEBPACK_IMPORTED_MODULE_6__["useLoad"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwidXNlU3RhdGUiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlTG9hZCIsInJlc3BvbnNlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJsb2FkIiwibG9hZGVyIiwicGFyc2VyIiwiaW5wdXQiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJwYXlsb2FkIiwiQXhpb3MiLCJwb3N0IiwiZW5kcG9pbnQiLCJ1cmkiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsImdldFByb2R1Y3RzQXNPYmplY3QiLCJzdG9yZSIsImFkZFByb2R1Y3QiLCJwcm9kdWN0c19vYmoiLCJhdmFpbGFiaWxpdHkiLCJyZWR1Y2UiLCJSZWFjdCIsInVzZU1lbW8iLCJtc2ciLCJyZXN1bHRzIiwibWFwIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImNvbHVtbnMiLCJoZWFkZXJzIiwiYmFzZSIsIlNldCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2t1IiwiYWRkIiwicHVzaCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2VTdG9yZXMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVByb2R1Y3RzIiwiYSIsImlzQXhpb3NFcnJvciIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsIm1heFdpZHRoIiwidXRpbFN0eWxlcyIsInVuZGVmaW5lZCIsImhlYWRpbmdNZCIsImJhY2tncm91bmQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWdCQTtB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O0FBQThILFNBQUssRUFBRTtBQUFFUSxnQkFBVSxFQUFFLE9BQWQ7QUFBdUJDLFdBQUssRUFBRTtBQUE5QixLQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXRFLENBWkosQ0FERjtBQWtCRCxDQTdGRDs7R0FBTXBFLFc7VUFDYUUsc0UsRUFHNEJNLGtEOzs7S0FKekNSLFc7QUErRlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAuNzFhZjIwMGFiMDg5OWIwMDExYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEltcGxlbWVudGF0aW9uIGZyb20gJ0Bjb21wb25lbnRzL2ltcGxlbWVudGF0aW9uJztcclxuaW1wb3J0IFRhYmxlLCB7IGhlYWRlcnMgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGVcIjtcclxuaW1wb3J0IHsgdXNlQm9vbWlBUEkgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvQm9vbWlBUElcIjtcclxuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gXCJAbGliL2hvb2tzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBJRnJhbWUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL2lmcmFtZVwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAY29tcG9uZW50cy90b29scy9sb2FkaW5nJztcclxuXHJcbmludGVyZmFjZSBTdG9ja0xldmVsIHtcclxuICBcInByb2R1Y3QtY29kZVwiOiBzdHJpbmcsXHJcbiAgXCJxdWFudGl0eVwiOiBudW1iZXIsXHJcbn1cclxuaW50ZXJmYWNlIFN0b3JlU3RvY2tMZXZlbCB7XHJcbiAgXCJsb2NhdGlvbi1pZFwiOiBzdHJpbmcsXHJcbiAgXCJsb2NhdGlvbi1uYW1lXCI6IHN0cmluZyxcclxuICBcImF2YWlsYWJpbGl0eVwiPzogU3RvY2tMZXZlbFtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdG9ja0xldmVsUmVzcG9uc2Uge1xyXG4gIHJlc3VsdHM6IFN0b3JlU3RvY2tMZXZlbFtdXHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmNvbnN0IFN0b2NrTG9va3VwOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBib29taUFQSSA9IHVzZUJvb21pQVBJKCk7XHJcbiAgY29uc3QgW3N0b3Jlcywgc2V0U3RvcmVzXSA9IHVzZVN0YXRlKFwiMTIxMDAgMTIwNzdcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShcIkxUVzkxNDEgTFRXOTI1MiBMVFc5MTM1XCIpO1xyXG4gIGNvbnN0IHsgcmVzcG9uc2UsIGVycm9yLCBpc0xvYWRpbmcsIGxvYWQgfSA9IHVzZUxvYWQ8U3RvY2tMZXZlbFJlc3BvbnNlLCBzdHJpbmcgfCBFcnJvciB8IEF4aW9zRXJyb3I+KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWRlcigpOiBQcm9taXNlPFN0b2NrTGV2ZWxSZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcGFyc2VyID0gKGlucHV0OiBzdHJpbmcpID0+IHsgcmV0dXJuIGlucHV0LnNwbGl0KC9cXHMqLFxccyp8XFxzKy8pLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0gIT0gXCJcIikgJiYgKGl0ZW0pKTsgfTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIFwibG9jYXRpb24taWRzXCI6IHBhcnNlcihzdG9yZXMpLFxyXG4gICAgICBcIlNLVXNcIjogcGFyc2VyKHByb2R1Y3RzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpO1xyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZChsb2FkZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UHJvZHVjdHNBc09iamVjdChzdG9yZTogU3RvcmVTdG9ja0xldmVsKTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiB7XHJcbiAgICBjb25zdCBhZGRQcm9kdWN0ID0gKHByb2R1Y3RzX29iajogUmVjb3JkPHN0cmluZywgbnVtYmVyPiwgaXRlbTogU3RvY2tMZXZlbCkgPT4ge1xyXG4gICAgICBwcm9kdWN0c19vYmpbaXRlbVtcInByb2R1Y3QtY29kZVwiXV0gPSBpdGVtW1wicXVhbnRpdHlcIl07XHJcbiAgICAgIHJldHVybiBwcm9kdWN0c19vYmo7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHN0b3JlLmF2YWlsYWJpbGl0eSB8fCBbXSkucmVkdWNlKGFkZFByb2R1Y3QsIHt9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChlcnJvciB8fCAhcmVzcG9uc2UpXHJcbiAgICAgIHJldHVybiBbIHttc2c6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCJ9LCBdO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2U/LnJlc3VsdHMubWFwKChzdG9yZTogU3RvcmVTdG9ja0xldmVsKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sXHJcbiAgICAgICAgc3RvcmVOYW1lOiBzdG9yZVtcImxvY2F0aW9uLW5hbWVcIl0sXHJcbiAgICAgICAgLi4uZ2V0UHJvZHVjdHNBc09iamVjdChzdG9yZSlcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKVxyXG4gICAgICByZXR1cm4gaGVhZGVycyhbIFtcIkVycm9yIC8gTWVzc2FnZVwiLCBcIm1zZ1wiXSBdLCBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBiYXNlID0gWyBcclxuICAgICAgWydTdG9yZSBJRCcsICdzdG9yZUlEJ10sXHJcbiAgICAgIFsnU3RvcmUgTmFtZScsICdzdG9yZU5hbWUnXVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gbmV3IFNldCgpO1xyXG4gICAgZm9yIChjb25zdCBzdG9yZSBvZiByZXNwb25zZT8ucmVzdWx0cykge1xyXG4gICAgICBPYmplY3Qua2V5cyhnZXRQcm9kdWN0c0FzT2JqZWN0KHN0b3JlKSkuZm9yRWFjaChza3UgPT4gcHJvZHVjdHMuYWRkKHNrdSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9kdWN0cy5rZXlzKCkpIHtcclxuICAgICAgYmFzZS5wdXNoKFsgaXRlbSBhcyBzdHJpbmcsIGl0ZW0gYXMgc3RyaW5nIF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlYWRlcnMoYmFzZSwgZGF0YSk7XHJcbiAgICBcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQ6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBsb2FkKGxvYWRlcik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTdG9yZXM6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RvcmVzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2hhbmdlUHJvZHVjdHM6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdHMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhID0gQXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSA/IGVycm9yLnJlc3BvbnNlPy5kYXRhPy50b1N0cmluZygpIDogXCJObyBkZXRhaWxlZCBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNlcnZlci5cIjtcclxuICBjb25zb2xlLmxvZyhhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMjByZW1cIn19PlxyXG4gICAgICAgIDxsYWJlbD5TdG9yZXM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17c3RvcmVzfSBvbkNoYW5nZT17b25DaGFuZ2VTdG9yZXN9IHBsYWNlaG9sZGVyPVwiU3RvcmUgSURzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMDBweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0czogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtwcm9kdWN0c30gb25DaGFuZ2U9e29uQ2hhbmdlUHJvZHVjdHN9IHBsYWNlaG9sZGVyPVwiSXRlbSBOdW1iZXJzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMjVweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT1cIkNoZWNrIEF2YWlsYWJpbGl0aWVzXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPExvYWRpbmcvPlxyXG4gICAgICA6IHJlc3BvbnNlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSBnZXRSb3dQcm9wcz17KCkgPT4gKHt9KX0gc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIxMDAlXCJ9fS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkVycm9yOiB7ZXJyb3I/LnRvU3RyaW5nKCl9PC9oMj48SUZyYW1lIGNvbnRlbnQ9e0F4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikgPyBlcnJvci5yZXNwb25zZT8uZGF0YT8udG9TdHJpbmcoKSA6IFwiTm8gZGV0YWlsZWQgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIuXCJ9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgd2lkdGg6IFwiMTAwJVwifX0+PC9JRnJhbWU+PC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L0ltcGxlbWVudGF0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTG9va3VwOyJdLCJzb3VyY2VSb290IjoiIn0=