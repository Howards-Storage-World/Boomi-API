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

  var _error$response;

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
  }, "Error: ", error === null || error === void 0 ? void 0 : error.toString()), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 79
    }
  }, axios__WEBPACK_IMPORTED_MODULE_4___default.a.isAxiosError(error) && ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.toString()))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwidXNlU3RhdGUiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlTG9hZCIsInJlc3BvbnNlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJsb2FkIiwibG9hZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZXIiLCJpbnB1dCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInBheWxvYWQiLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJkYXRhIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsIm1hcCIsInN0b3JlIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImF2YWlsYWJpbGl0eSIsInJlZHVjZSIsIm9iaiIsIm1zZyIsImNvbHVtbnMiLCJiYXNlIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJTZXQiLCJhZGQiLCJrZXlzIiwicHVzaCIsImFjY2Vzb3IiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlU3RvcmVzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQcm9kdWN0cyIsIm1hcmdpbiIsIm1heFdpZHRoIiwidXRpbFN0eWxlcyIsImhlYWRpbmdNZCIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiaXNBeGlvc0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkE7QUFDQSxJQUFNQSxXQUFlLEdBQUcsU0FBbEJBLFdBQWtCLEdBQU07QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMs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MEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC41MzFkNTEyYjUwYmI5YTBjOTE5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSW1wbGVtZW50YXRpb24gZnJvbSAnQGNvbXBvbmVudHMvaW1wbGVtZW50YXRpb24nO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tIFwiQGxpYi9ob29rc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFN0b2NrTGV2ZWwge1xyXG4gIFwicHJvZHVjdC1jb2RlXCI6IHN0cmluZyxcclxuICBcInF1YW50aXR5XCI6IG51bWJlcixcclxufVxyXG5pbnRlcmZhY2UgU3RvcmVTdG9ja0xldmVsIHtcclxuICBcImxvY2F0aW9uLWlkXCI6IHN0cmluZyxcclxuICBcImxvY2F0aW9uLW5hbWVcIjogc3RyaW5nLFxyXG4gIFwiYXZhaWxhYmlsaXR5XCI6IFN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbFJlc3BvbnNlIHtcclxuICByZXN1bHRzOiBTdG9yZVN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShcIjEyMTAwIDEyMDc3XCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoXCJMVFc5MTQxIExUVzkyNTIgTFRXOTEzNVwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkPFN0b2NrTGV2ZWxSZXNwb25zZSwgc3RyaW5nIHwgRXJyb3IgfCBBeGlvc0Vycm9yPigpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKTogUHJvbWlzZTxTdG9ja0xldmVsUmVzcG9uc2U+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IChpbnB1dDogc3RyaW5nKSA9PiB7IHJldHVybiBpbnB1dC5zcGxpdCgvXFxzKixcXHMqfFxccysvKS5maWx0ZXIoKGl0ZW0pID0+IChpdGVtICE9IFwiXCIpICYmIChpdGVtKSk7IH07XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgIFwibG9jYXRpb24taWRzXCI6IHBhcnNlcihzdG9yZXMpLFxyXG4gICAgICAgICAgXCJTS1VzXCI6IHBhcnNlcihwcm9kdWN0cylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgICAgcmVzb2x2ZShyZXNwLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkKGxvYWRlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBTb0ggPSByZXNwb25zZT8ucmVzdWx0cy5tYXAoKHN0b3JlOiBTdG9yZVN0b2NrTGV2ZWwpID0+IHtcclxuICAgICAgICByZXR1cm4geyBzdG9yZUlEOiBzdG9yZVtcImxvY2F0aW9uLWlkXCJdLCBzdG9yZU5hbWU6IHN0b3JlW1wibG9jYXRpb24tbmFtZVwiXSwgLi4uc3RvcmUuYXZhaWxhYmlsaXR5LnJlZHVjZSgob2JqOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LCBpdGVtOiBTdG9ja0xldmVsKSA9PiB7IG9ialtpdGVtW1wicHJvZHVjdC1jb2RlXCJdXSA9IGl0ZW1bXCJxdWFudGl0eVwiXTsgcmV0dXJuIG9iajsgfSwge30pIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBTb0g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB7bXNnOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZSA9IFsgeyBIZWFkZXI6ICdTdG9yZSBJRCcsIGFjY2Vzc29yOiAnc3RvcmVJRCcgfSwgeyBIZWFkZXI6ICdTdG9yZSBOYW1lJywgYWNjZXNzb3I6ICdzdG9yZU5hbWUnIH0gXTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgcHJvZHVjdHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RvcmUgb2YgcmVzcG9uc2U/LnJlc3VsdHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RvcmUuYXZhaWxhYmlsaXR5KSB7XHJcbiAgICAgICAgICBwcm9kdWN0cy5hZGQoaXRlbVtcInByb2R1Y3QtY29kZVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvZHVjdHMua2V5cygpKSB7XHJcbiAgICAgICAgYmFzZS5wdXNoKHsgSGVhZGVyOiBpdGVtIGFzIHN0cmluZywgYWNjZXNzb3I6IGl0ZW0gYXMgc3RyaW5nIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbIHsgSGVhZGVyOiBcIkVycm9yIC8gTWVzc2FnZVwiLCBhY2Nlc29yOiBcIm1zZ1wiIH0gXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQ6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBsb2FkKGxvYWRlcik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTdG9yZXM6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RvcmVzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2hhbmdlUHJvZHVjdHM6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdHMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICByZXR1cm4gKFxyXG4gICAgPEltcGxlbWVudGF0aW9uIG5hbWU9XCJTdG9jayBMb29rdXBcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdHlsZT17e21hcmdpbjogXCJhdXRvXCIsIG1heFdpZHRoOiBcIjIwcmVtXCJ9fT5cclxuICAgICAgICA8bGFiZWw+U3RvcmVzOiA8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH0gdmFsdWU9e3N0b3Jlc30gb25DaGFuZ2U9e29uQ2hhbmdlU3RvcmVzfSBwbGFjZWhvbGRlcj1cIlN0b3JlIElEcyBzZXBlcmF0ZWQgYnkgc3BhY2VzXCIgc3R5bGU9e3tcIndpZHRoXCI6IFwiMjAwcHhcIn19IC8+PGJyLz5cclxuICAgICAgICA8bGFiZWw+UHJvZHVjdHM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17cHJvZHVjdHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVByb2R1Y3RzfSBwbGFjZWhvbGRlcj1cIkl0ZW0gTnVtYmVycyBzZXBlcmF0ZWQgYnkgc3BhY2VzXCIgc3R5bGU9e3tcIndpZHRoXCI6IFwiMjI1cHhcIn19IC8+PGJyLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH0gdmFsdWU9XCJDaGVjayBBdmFpbGFiaWxpdGllc1wiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGJyLz5cclxuICAgICAge2lzTG9hZGluZyA/IFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5Mb2FkaW5nIHlvdXIgZGF0YS4uLjwvaDI+XHJcbiAgICAgIDogcmVzcG9uc2UgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMTAwJVwifX0vPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8PjxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5FcnJvcjoge2Vycm9yPy50b1N0cmluZygpfTwvaDI+PHA+e0F4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikgJiYgZXJyb3IucmVzcG9uc2U/LnRvU3RyaW5nKCl9PC9wPjwvPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9