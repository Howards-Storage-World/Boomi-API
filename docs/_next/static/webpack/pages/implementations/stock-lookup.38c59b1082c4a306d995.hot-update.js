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
  }; // console.log(response)


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
  }, "Error:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 59
    }
  }, console.log(error.toJSON()) || (error === null || error === void 0 ? void 0 : error.toString()))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwidXNlU3RhdGUiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlTG9hZCIsInJlc3BvbnNlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJsb2FkIiwibG9hZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZXIiLCJpbnB1dCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInBheWxvYWQiLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJkYXRhIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsIm1hcCIsInN0b3JlIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImF2YWlsYWJpbGl0eSIsInJlZHVjZSIsIm9iaiIsIm1zZyIsImNvbHVtbnMiLCJiYXNlIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJTZXQiLCJhZGQiLCJrZXlzIiwicHVzaCIsImFjY2Vzb3IiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlU3RvcmVzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQcm9kdWN0cyIsIm1hcmdpbiIsIm1heFdpZHRoIiwidXRpbFN0eWxlcyIsImhlYWRpbmdNZCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJ0b0pTT04iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0JBO0FBQ0EsSUFBTUEsV0FBZSxHQUFHLFNBQWxCQSxXQUFrQixHQUFNO0FBQUE7O0FBQzVCLE1B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cGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAuMzhjNTliMTA4MmM0YTMwNmQ5OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSW1wbGVtZW50YXRpb24gZnJvbSAnQGNvbXBvbmVudHMvaW1wbGVtZW50YXRpb24nO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tIFwiQGxpYi9ob29rc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFN0b2NrTGV2ZWwge1xyXG4gIFwicHJvZHVjdC1jb2RlXCI6IHN0cmluZyxcclxuICBcInF1YW50aXR5XCI6IG51bWJlcixcclxufVxyXG5pbnRlcmZhY2UgU3RvcmVTdG9ja0xldmVsIHtcclxuICBcImxvY2F0aW9uLWlkXCI6IHN0cmluZyxcclxuICBcImxvY2F0aW9uLW5hbWVcIjogc3RyaW5nLFxyXG4gIFwiYXZhaWxhYmlsaXR5XCI6IFN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbFJlc3BvbnNlIHtcclxuICByZXN1bHRzOiBTdG9yZVN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShcIjEyMTAwIDEyMDc3XCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoXCJMVFc5MTQxIExUVzkyNTIgTFRXOTEzNVwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkPFN0b2NrTGV2ZWxSZXNwb25zZT4oKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9hZGVyKCk6IFByb21pc2U8U3RvY2tMZXZlbFJlc3BvbnNlPiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXJzZXIgPSAoaW5wdXQ6IHN0cmluZykgPT4geyByZXR1cm4gaW5wdXQuc3BsaXQoL1xccyosXFxzKnxcXHMrLykuZmlsdGVyKChpdGVtKSA9PiAoaXRlbSAhPSBcIlwiKSAmJiAoaXRlbSkpOyB9O1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBcImxvY2F0aW9uLWlkc1wiOiBwYXJzZXIoc3RvcmVzKSxcclxuICAgICAgICAgIFwiU0tVc1wiOiBwYXJzZXIocHJvZHVjdHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2dldFByb2R1Y3RBdmFpbGFiaWxpdHlgLCBwYXlsb2FkKVxyXG4gICAgICAgIHJlc29sdmUocmVzcC5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZChsb2FkZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgU29IID0gcmVzcG9uc2U/LnJlc3VsdHMubWFwKChzdG9yZTogU3RvcmVTdG9ja0xldmVsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RvcmVJRDogc3RvcmVbXCJsb2NhdGlvbi1pZFwiXSwgc3RvcmVOYW1lOiBzdG9yZVtcImxvY2F0aW9uLW5hbWVcIl0sIC4uLnN0b3JlLmF2YWlsYWJpbGl0eS5yZWR1Y2UoKG9iajogUmVjb3JkPHN0cmluZywgbnVtYmVyPiwgaXRlbTogU3RvY2tMZXZlbCkgPT4geyBvYmpbaXRlbVtcInByb2R1Y3QtY29kZVwiXV0gPSBpdGVtW1wicXVhbnRpdHlcIl07IHJldHVybiBvYmo7IH0sIHt9KSB9O1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gU29IO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsge21zZzogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIn0sIF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJhc2UgPSBbIHsgSGVhZGVyOiAnU3RvcmUgSUQnLCBhY2Nlc3NvcjogJ3N0b3JlSUQnIH0sIHsgSGVhZGVyOiAnU3RvcmUgTmFtZScsIGFjY2Vzc29yOiAnc3RvcmVOYW1lJyB9IF07XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gbmV3IFNldCgpO1xyXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHJlc3BvbnNlPy5yZXN1bHRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHN0b3JlLmF2YWlsYWJpbGl0eSkge1xyXG4gICAgICAgICAgcHJvZHVjdHMuYWRkKGl0ZW1bXCJwcm9kdWN0LWNvZGVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2R1Y3RzLmtleXMoKSkge1xyXG4gICAgICAgIGJhc2UucHVzaCh7IEhlYWRlcjogaXRlbSBhcyBzdHJpbmcsIGFjY2Vzc29yOiBpdGVtIGFzIHN0cmluZyB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYmFzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWyB7IEhlYWRlcjogXCJFcnJvciAvIE1lc3NhZ2VcIiwgYWNjZXNvcjogXCJtc2dcIiB9IF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0OiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgbG9hZChsb2FkZXIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlU3RvcmVzOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIHNldFN0b3JlcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBvbkNoYW5nZVByb2R1Y3RzOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIHNldFByb2R1Y3RzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIyMHJlbVwifX0+XHJcbiAgICAgICAgPGxhYmVsPlN0b3JlczogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtzdG9yZXN9IG9uQ2hhbmdlPXtvbkNoYW5nZVN0b3Jlc30gcGxhY2Vob2xkZXI9XCJTdG9yZSBJRHMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIwMHB4XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGxhYmVsPlByb2R1Y3RzOiA8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH0gdmFsdWU9e3Byb2R1Y3RzfSBvbkNoYW5nZT17b25DaGFuZ2VQcm9kdWN0c30gcGxhY2Vob2xkZXI9XCJJdGVtIE51bWJlcnMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIyNXB4XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPVwiQ2hlY2sgQXZhaWxhYmlsaXRpZXNcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyBcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+TG9hZGluZyB5b3VyIGRhdGEuLi48L2gyPlxyXG4gICAgICA6IHJlc3BvbnNlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSBzdHlsZT17e21hcmdpbjogXCJhdXRvXCIsIG1heFdpZHRoOiBcIjEwMCVcIn19Lz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPD48aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+RXJyb3I6PC9oMj48cD57Y29uc29sZS5sb2coZXJyb3IudG9KU09OKCkpIHx8IGVycm9yPy50b1N0cmluZygpfTwvcD48Lz5cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIDwvSW1wbGVtZW50YXRpb24+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tMb29rdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==