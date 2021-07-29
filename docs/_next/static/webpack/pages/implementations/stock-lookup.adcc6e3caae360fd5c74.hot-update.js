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

  var _error$response, _error$response$data;

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
  }; // const a = Axios.isAxiosError(error) ? error.response?.data?.toString() : "No detailed error message from the server.";
  // console.log(a)


  return __jsx(_components_implementation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 95,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 194
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 96,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 203
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), isLoading ? __jsx(_components_tools_loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 103,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Error: ", error === null || error === void 0 ? void 0 : error.toString()), __jsx(_components_tools_iframe__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: axios__WEBPACK_IMPORTED_MODULE_2___default.a.isAxiosError(error) ? (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.toString() : "No detailed error message from the server.",
    style: {
      background: "white",
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwidXNlU3RhdGUiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlTG9hZCIsInJlc3BvbnNlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJsb2FkIiwibG9hZGVyIiwicGFyc2VyIiwiaW5wdXQiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJwYXlsb2FkIiwiQXhpb3MiLCJwb3N0IiwiZW5kcG9pbnQiLCJ1cmkiLCJ0aGVuIiwiZGF0YSIsInVzZUVmZmVjdCIsImdldFByb2R1Y3RzQXNPYmplY3QiLCJzdG9yZSIsImFkZFByb2R1Y3QiLCJwcm9kdWN0c19vYmoiLCJhdmFpbGFiaWxpdHkiLCJyZWR1Y2UiLCJSZWFjdCIsInVzZU1lbW8iLCJtc2ciLCJyZXN1bHRzIiwibWFwIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImNvbHVtbnMiLCJoZWFkZXJzIiwiYmFzZSIsIlNldCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2t1IiwiYWRkIiwicHVzaCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2VTdG9yZXMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVByb2R1Y3RzIiwibWFyZ2luIiwibWF4V2lkdGgiLCJ1dGlsU3R5bGVzIiwidW5kZWZpbmVkIiwiaGVhZGluZ01kIiwidG9TdHJpbmciLCJpc0F4aW9zRXJyb3IiLCJiYWNrZ3JvdW5kIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkE7QUFDQSxJQUFNQSxXQUFlLEdBQUcs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c0ZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLmFkY2M2ZTNjYWFlMzYwZmQ1Yzc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJbXBsZW1lbnRhdGlvbiBmcm9tICdAY29tcG9uZW50cy9pbXBsZW1lbnRhdGlvbic7XHJcbmltcG9ydCBUYWJsZSwgeyBoZWFkZXJzIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tIFwiQGxpYi9ob29rc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSUZyYW1lIGZyb20gXCJAY29tcG9uZW50cy90b29scy9pZnJhbWVcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnQGNvbXBvbmVudHMvdG9vbHMvbG9hZGluZyc7XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbCB7XHJcbiAgXCJwcm9kdWN0LWNvZGVcIjogc3RyaW5nLFxyXG4gIFwicXVhbnRpdHlcIjogbnVtYmVyLFxyXG59XHJcbmludGVyZmFjZSBTdG9yZVN0b2NrTGV2ZWwge1xyXG4gIFwibG9jYXRpb24taWRcIjogc3RyaW5nLFxyXG4gIFwibG9jYXRpb24tbmFtZVwiOiBzdHJpbmcsXHJcbiAgXCJhdmFpbGFiaWxpdHlcIj86IFN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbFJlc3BvbnNlIHtcclxuICByZXN1bHRzOiBTdG9yZVN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShcIjEyMTAwIDEyMDc3XCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoXCJMVFc5MTQxIExUVzkyNTIgTFRXOTEzNVwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkPFN0b2NrTGV2ZWxSZXNwb25zZSwgc3RyaW5nIHwgRXJyb3IgfCBBeGlvc0Vycm9yPigpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKTogUHJvbWlzZTxTdG9ja0xldmVsUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHBhcnNlciA9IChpbnB1dDogc3RyaW5nKSA9PiB7IHJldHVybiBpbnB1dC5zcGxpdCgvXFxzKixcXHMqfFxccysvKS5maWx0ZXIoKGl0ZW0pID0+IChpdGVtICE9IFwiXCIpICYmIChpdGVtKSk7IH07XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBcImxvY2F0aW9uLWlkc1wiOiBwYXJzZXIoc3RvcmVzKSxcclxuICAgICAgXCJTS1VzXCI6IHBhcnNlcihwcm9kdWN0cylcclxuICAgIH1cclxuICAgIHJldHVybiBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2dldFByb2R1Y3RBdmFpbGFiaWxpdHlgLCBwYXlsb2FkKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKTtcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldFByb2R1Y3RzQXNPYmplY3Qoc3RvcmU6IFN0b3JlU3RvY2tMZXZlbCk6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4ge1xyXG4gICAgY29uc3QgYWRkUHJvZHVjdCA9IChwcm9kdWN0c19vYmo6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4sIGl0ZW06IFN0b2NrTGV2ZWwpID0+IHtcclxuICAgICAgcHJvZHVjdHNfb2JqW2l0ZW1bXCJwcm9kdWN0LWNvZGVcIl1dID0gaXRlbVtcInF1YW50aXR5XCJdO1xyXG4gICAgICByZXR1cm4gcHJvZHVjdHNfb2JqO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChzdG9yZS5hdmFpbGFiaWxpdHkgfHwgW10pLnJlZHVjZShhZGRQcm9kdWN0LCB7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKVxyXG4gICAgICByZXR1cm4gWyB7bXNnOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwifSwgXTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHJlc3BvbnNlPy5yZXN1bHRzLm1hcCgoc3RvcmU6IFN0b3JlU3RvY2tMZXZlbCkgPT4ge1xyXG4gICAgICByZXR1cm4geyBcclxuICAgICAgICBzdG9yZUlEOiBzdG9yZVtcImxvY2F0aW9uLWlkXCJdLFxyXG4gICAgICAgIHN0b3JlTmFtZTogc3RvcmVbXCJsb2NhdGlvbi1uYW1lXCJdLFxyXG4gICAgICAgIC4uLmdldFByb2R1Y3RzQXNPYmplY3Qoc3RvcmUpXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yIHx8ICFyZXNwb25zZSlcclxuICAgICAgcmV0dXJuIGhlYWRlcnMoWyBbXCJFcnJvciAvIE1lc3NhZ2VcIiwgXCJtc2dcIl0gXSwgZGF0YSk7XHJcblxyXG4gICAgY29uc3QgYmFzZSA9IFsgXHJcbiAgICAgIFsnU3RvcmUgSUQnLCAnc3RvcmVJRCddLFxyXG4gICAgICBbJ1N0b3JlIE5hbWUnLCAnc3RvcmVOYW1lJ11cclxuICAgIF07XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgZm9yIChjb25zdCBzdG9yZSBvZiByZXNwb25zZT8ucmVzdWx0cykge1xyXG4gICAgICBPYmplY3Qua2V5cyhnZXRQcm9kdWN0c0FzT2JqZWN0KHN0b3JlKSkuZm9yRWFjaChza3UgPT4gcHJvZHVjdHMuYWRkKHNrdSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9kdWN0cy5rZXlzKCkpIHtcclxuICAgICAgYmFzZS5wdXNoKFsgaXRlbSBhcyBzdHJpbmcsIGl0ZW0gYXMgc3RyaW5nIF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlYWRlcnMoYmFzZSwgZGF0YSk7XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0OiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSAoZSkgPT4geyBsb2FkKGxvYWRlcik7IGUucHJldmVudERlZmF1bHQoKTsgfTtcclxuICBjb25zdCBvbkNoYW5nZVN0b3JlczogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7IHNldFN0b3JlcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpOyB9O1xyXG4gIGNvbnN0IG9uQ2hhbmdlUHJvZHVjdHM6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4geyBzZXRQcm9kdWN0cyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpOyB9O1xyXG5cclxuICAvLyBjb25zdCBhID0gQXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSA/IGVycm9yLnJlc3BvbnNlPy5kYXRhPy50b1N0cmluZygpIDogXCJObyBkZXRhaWxlZCBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNlcnZlci5cIjtcclxuICAvLyBjb25zb2xlLmxvZyhhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMjByZW1cIn19PlxyXG4gICAgICAgIDxsYWJlbD5TdG9yZXM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17c3RvcmVzfSBvbkNoYW5nZT17b25DaGFuZ2VTdG9yZXN9IHBsYWNlaG9sZGVyPVwiU3RvcmUgSURzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMDBweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0czogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtwcm9kdWN0c30gb25DaGFuZ2U9e29uQ2hhbmdlUHJvZHVjdHN9IHBsYWNlaG9sZGVyPVwiSXRlbSBOdW1iZXJzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMjVweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT1cIkNoZWNrIEF2YWlsYWJpbGl0aWVzXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPExvYWRpbmcvPlxyXG4gICAgICA6IHJlc3BvbnNlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSBnZXRSb3dQcm9wcz17KCkgPT4gKHt9KX0gc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIxMDAlXCJ9fS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkVycm9yOiB7ZXJyb3I/LnRvU3RyaW5nKCl9PC9oMj48SUZyYW1lIGNvbnRlbnQ9e0F4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikgPyBlcnJvci5yZXNwb25zZT8uZGF0YT8udG9TdHJpbmcoKSA6IFwiTm8gZGV0YWlsZWQgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIuXCJ9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgd2lkdGg6IFwiMTAwJVwifX0+PC9JRnJhbWU+PC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L0ltcGxlbWVudGF0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTG9va3VwOyJdLCJzb3VyY2VSb290IjoiIn0=