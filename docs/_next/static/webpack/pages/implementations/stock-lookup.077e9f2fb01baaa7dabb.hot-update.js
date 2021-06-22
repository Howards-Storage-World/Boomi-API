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

  var _error$response, _error$response$data;

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
        }, store.availability.reduce(function (obj, item) {
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
    var base = [{
      Header: 'Store ID',
      accessor: 'storeID'
    }, {
      Header: 'Store Name',
      accessor: 'storeName'
    }];

    if (response && !error) {
      var _products = new Set();

      var _iterator = _createForOfIteratorHelper(response === null || response === void 0 ? void 0 : response.results),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var store = _step.value;

          var _iterator3 = _createForOfIteratorHelper(store.availability),
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
          base.push({
            Header: _item,
            accessor: _item
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return base;
    }

    return [{
      Header: "Error / Message",
      accesor: "msg"
    }];
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
  }; // console.log(error.response)


  return __jsx(_components_implementation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 97,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 194
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 98,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 203
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    style: {
      margin: "auto",
      maxWidth: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Error: ", error === null || error === void 0 ? void 0 : error.toString()), __jsx("p", {
    dangerouslySetInnerHTML: axios__WEBPACK_IMPORTED_MODULE_4___default.a.isAxiosError(error) && ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.toString()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwidXNlU3RhdGUiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlTG9hZCIsInJlc3BvbnNlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJsb2FkIiwibG9hZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZXIiLCJpbnB1dCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInBheWxvYWQiLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJkYXRhIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsIm1hcCIsInN0b3JlIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImF2YWlsYWJpbGl0eSIsInJlZHVjZSIsIm9iaiIsIm1zZyIsImNvbHVtbnMiLCJiYXNlIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJTZXQiLCJhZGQiLCJrZXlzIiwicHVzaCIsImFjY2Vzb3IiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlU3RvcmVzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQcm9kdWN0cyIsIm1hcmdpbiIsIm1heFdpZHRoIiwidXRpbFN0eWxlcyIsImhlYWRpbmdNZCIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiaXNBeGlvc0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkE7QUFDQSxJQUFNQSxXQUFlLEdBQUcsU0FBbEJBLFdBQWtCLEdBQU07QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMs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Q2FFLHNFLEVBRzRCTSxrRDs7O0tBSnpDUixXO0FBMEZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLjA3N2U5ZjJmYjAxYmFhYTdkYWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJbXBsZW1lbnRhdGlvbiBmcm9tICdAY29tcG9uZW50cy9pbXBsZW1lbnRhdGlvbic7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGVcIjtcclxuaW1wb3J0IHsgdXNlQm9vbWlBUEkgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvQm9vbWlBUElcIjtcclxuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gXCJAbGliL2hvb2tzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbCB7XHJcbiAgXCJwcm9kdWN0LWNvZGVcIjogc3RyaW5nLFxyXG4gIFwicXVhbnRpdHlcIjogbnVtYmVyLFxyXG59XHJcbmludGVyZmFjZSBTdG9yZVN0b2NrTGV2ZWwge1xyXG4gIFwibG9jYXRpb24taWRcIjogc3RyaW5nLFxyXG4gIFwibG9jYXRpb24tbmFtZVwiOiBzdHJpbmcsXHJcbiAgXCJhdmFpbGFiaWxpdHlcIjogU3RvY2tMZXZlbFtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdG9ja0xldmVsUmVzcG9uc2Uge1xyXG4gIHJlc3VsdHM6IFN0b3JlU3RvY2tMZXZlbFtdXHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmNvbnN0IFN0b2NrTG9va3VwOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBib29taUFQSSA9IHVzZUJvb21pQVBJKCk7XHJcbiAgY29uc3QgW3N0b3Jlcywgc2V0U3RvcmVzXSA9IHVzZVN0YXRlKFwiMTIxMDAgMTIwNzdcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShcIkxUVzkxNDEgTFRXOTI1MiBMVFc5MTM1XCIpO1xyXG4gIGNvbnN0IHsgcmVzcG9uc2UsIGVycm9yLCBpc0xvYWRpbmcsIGxvYWQgfSA9IHVzZUxvYWQ8U3RvY2tMZXZlbFJlc3BvbnNlLCBzdHJpbmcgfCBFcnJvciB8IEF4aW9zRXJyb3I+KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWRlcigpOiBQcm9taXNlPFN0b2NrTGV2ZWxSZXNwb25zZT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gKGlucHV0OiBzdHJpbmcpID0+IHsgcmV0dXJuIGlucHV0LnNwbGl0KC9cXHMqLFxccyp8XFxzKy8pLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0gIT0gXCJcIikgJiYgKGl0ZW0pKTsgfTtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgXCJsb2NhdGlvbi1pZHNcIjogcGFyc2VyKHN0b3JlcyksXHJcbiAgICAgICAgICBcIlNLVXNcIjogcGFyc2VyKHByb2R1Y3RzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgQXhpb3MucG9zdChgJHtib29taUFQSS5lbmRwb2ludC51cml9L3dzL3NpbXBsZS9nZXRQcm9kdWN0QXZhaWxhYmlsaXR5YCwgcGF5bG9hZClcclxuICAgICAgICByZXNvbHZlKHJlc3AuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IFNvSCA9IHJlc3BvbnNlPy5yZXN1bHRzLm1hcCgoc3RvcmU6IFN0b3JlU3RvY2tMZXZlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sIHN0b3JlTmFtZTogc3RvcmVbXCJsb2NhdGlvbi1uYW1lXCJdLCAuLi5zdG9yZS5hdmFpbGFiaWxpdHkucmVkdWNlKChvYmo6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4sIGl0ZW06IFN0b2NrTGV2ZWwpID0+IHsgb2JqW2l0ZW1bXCJwcm9kdWN0LWNvZGVcIl1dID0gaXRlbVtcInF1YW50aXR5XCJdOyByZXR1cm4gb2JqOyB9LCB7fSkgfTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIFNvSDtcclxuICAgIH1cclxuICAgIHJldHVybiBbIHttc2c6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCJ9LCBdO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlID0gWyB7IEhlYWRlcjogJ1N0b3JlIElEJywgYWNjZXNzb3I6ICdzdG9yZUlEJyB9LCB7IEhlYWRlcjogJ1N0b3JlIE5hbWUnLCBhY2Nlc3NvcjogJ3N0b3JlTmFtZScgfSBdO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IG5ldyBTZXQoKTtcclxuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiByZXNwb25zZT8ucmVzdWx0cykge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzdG9yZS5hdmFpbGFiaWxpdHkpIHtcclxuICAgICAgICAgIHByb2R1Y3RzLmFkZChpdGVtW1wicHJvZHVjdC1jb2RlXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9kdWN0cy5rZXlzKCkpIHtcclxuICAgICAgICBiYXNlLnB1c2goeyBIZWFkZXI6IGl0ZW0gYXMgc3RyaW5nLCBhY2Nlc3NvcjogaXRlbSBhcyBzdHJpbmcgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsgeyBIZWFkZXI6IFwiRXJyb3IgLyBNZXNzYWdlXCIsIGFjY2Vzb3I6IFwibXNnXCIgfSBdO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdDogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVN0b3JlczogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRTdG9yZXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2VQcm9kdWN0czogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0cyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMjByZW1cIn19PlxyXG4gICAgICAgIDxsYWJlbD5TdG9yZXM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17c3RvcmVzfSBvbkNoYW5nZT17b25DaGFuZ2VTdG9yZXN9IHBsYWNlaG9sZGVyPVwiU3RvcmUgSURzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMDBweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0czogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtwcm9kdWN0c30gb25DaGFuZ2U9e29uQ2hhbmdlUHJvZHVjdHN9IHBsYWNlaG9sZGVyPVwiSXRlbSBOdW1iZXJzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMjVweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT1cIkNoZWNrIEF2YWlsYWJpbGl0aWVzXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkxvYWRpbmcgeW91ciBkYXRhLi4uPC9oMj5cclxuICAgICAgOiByZXNwb25zZSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIxMDAlXCJ9fS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkVycm9yOiB7ZXJyb3I/LnRvU3RyaW5nKCl9PC9oMj48cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17QXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSAmJiBlcnJvci5yZXNwb25zZT8uZGF0YT8udG9TdHJpbmcoKX0+PC9wPjwvPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9