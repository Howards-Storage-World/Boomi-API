webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./pages/implementations/stock-lookup.tsx":
/*!************************************************!*\
  !*** ./pages/implementations/stock-lookup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_tools_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/tools/Table */ "./components/tools/Table.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Implementation = function Implementation(_ref) {
  var name = _ref.name,
      children = _ref.children;
  var meta = {
    title: name,
    description: "An implmentation of the HSW's Boomi API ".concat(name, " Functionality")
  };
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Implementation: ".concat(name, " | HSW Boomi API"),
    meta: meta,
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingLg,
    style: {
      margin: "auto",
      maxWidth: "36rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, name, " Implementations"), children);
};

_c = Implementation;

function useLoad() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      response = _useState2[0],
      setResponse = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      error = _useState3[0],
      setError = _useState3[1];

  function load(_x) {
    return _load.apply(this, arguments);
  }

  function _load() {
    _load = Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(fn) {
      var payload;
      return C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fn();

            case 4:
              payload = _context.sent;
              setLoading(false);
              setResponse(payload);
              setError(undefined);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              setLoading(false);
              setError(_context.t0);
              setResponse(undefined);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));
    return _load.apply(this, arguments);
  }

  return {
    response: response,
    error: error,
    isLoading: loading,
    load: load
  };
} // eslint-disable-next-line max-lines-per-function


_s(useLoad, "wtB9JeAQv2nP4T5dpgGbs44laYU=");

var StockLookup = function StockLookup() {
  _s2();

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"])();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("12100 12077"),
      stores = _useState4[0],
      setStores = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("LTW9141 LTW9252 LTW9135"),
      products = _useState5[0],
      setProducts = _useState5[1];

  var _useLoad = useLoad(),
      response = _useLoad.response,
      error = _useLoad.error,
      isLoading = _useLoad.isLoading,
      load = _useLoad.load;

  function loader() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(resolve, reject) {
        var parser, payload, resp;
        return C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                parser = function parser(input) {
                  return input.split(/\s*,\s*|\s+/).filter(function (item) {
                    return item != "" && item;
                  });
                };

                payload = {
                  "location-ids": parser(stores),
                  "SKUs": parser(products)
                };
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload);

              case 5:
                resp = _context2.sent;
                resolve(resp.data);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                reject(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
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


  return __jsx(Implementation, {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Stores: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    value: stores,
    onChange: onChangeStores,
    placeholder: "Store IDs seperated by spaces",
    style: {
      "width": "200px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 194
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Products: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    value: products,
    onChange: onChangeProducts,
    placeholder: "Item Numbers seperated by spaces",
    style: {
      "width": "225px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 203
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "Error:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 59
    }
  }, error)));
};

_s2(StockLookup, "nXXQk1GbxV3/JUQqdGG+OVInjdY=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"], useLoad];
});

_c2 = StockLookup;
/* harmony default export */ __webpack_exports__["default"] = (StockLookup);

var _c, _c2;

$RefreshReg$(_c, "Implementation");
$RefreshReg$(_c2, "StockLookup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJtYXJnaW4iLCJtYXhXaWR0aCIsInVzZUxvYWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5kZWZpbmVkIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkIiwiZm4iLCJwYXlsb2FkIiwiaXNMb2FkaW5nIiwiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwic3RvcmVzIiwic2V0U3RvcmVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VyIiwiaW5wdXQiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJkYXRhIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsIm1hcCIsInN0b3JlIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImF2YWlsYWJpbGl0eSIsInJlZHVjZSIsIm9iaiIsIm1zZyIsImNvbHVtbnMiLCJiYXNlIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJTZXQiLCJhZGQiLCJrZXlzIiwicHVzaCIsImFjY2Vzb3IiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlU3RvcmVzIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQcm9kdWN0cyIsImhlYWRpbmdNZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxHQUdBLG1FQUFFO0FBQUksYUFBUyxFQUFFdEMsK0RBQVUsQ0FBQ29FLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBRixFQUFrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUl6RCxLQUFKLENBQWxELENBWkosQ0FERjtBQWtCRCxDQXhGRDs7SUFBTU0sVztVQUNhRSxzRSxFQUc0QmYsTzs7O01BSnpDYSxXO0FBMEZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLmRjNTRjOWFiMmU3YjE1YzU4ODdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBJbXBsZW1lbnRhdGlvbjogRkM8eyBuYW1lOiBzdHJpbmcgfT4gPSAoeyBuYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IHsgdGl0bGU6IG5hbWUsIGRlc2NyaXB0aW9uOiBgQW4gaW1wbG1lbnRhdGlvbiBvZiB0aGUgSFNXJ3MgQm9vbWkgQVBJICR7bmFtZX0gRnVuY3Rpb25hbGl0eWAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2BJbXBsZW1lbnRhdGlvbjogJHtuYW1lfSB8IEhTVyBCb29taSBBUElgfSBtZXRhPXttZXRhfSBzdHlsZT17e319PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfSBzdHlsZT17e21hcmdpbjogXCJhdXRvXCIsIG1heFdpZHRoOiBcIjM2cmVtXCJ9fT57bmFtZX0gSW1wbGVtZW50YXRpb25zPC9oMj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdG9ja0xldmVsIHtcclxuICBcInByb2R1Y3QtY29kZVwiOiBzdHJpbmcsXHJcbiAgXCJxdWFudGl0eVwiOiBudW1iZXIsXHJcbn1cclxuaW50ZXJmYWNlIFN0b3JlU3RvY2tMZXZlbCB7XHJcbiAgXCJsb2NhdGlvbi1pZFwiOiBzdHJpbmcsXHJcbiAgXCJsb2NhdGlvbi1uYW1lXCI6IHN0cmluZyxcclxuICBcImF2YWlsYWJpbGl0eVwiOiBTdG9ja0xldmVsW11cclxufVxyXG5cclxuaW50ZXJmYWNlIFN0b2NrTGV2ZWxSZXNwb25zZSB7XHJcbiAgcmVzdWx0czogU3RvcmVTdG9ja0xldmVsW11cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlTG9hZDxUPigpIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPFQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBFcnJvciB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZChmbjogKCkgPT4gUHJvbWlzZTxUPikge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBmbigpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0UmVzcG9uc2UocGF5bG9hZCk7XHJcbiAgICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRSZXNwb25zZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4geyByZXNwb25zZSwgZXJyb3IsIGlzTG9hZGluZzogbG9hZGluZywgbG9hZCB9O1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShcIjEyMTAwIDEyMDc3XCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoXCJMVFc5MTQxIExUVzkyNTIgTFRXOTEzNVwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkPFN0b2NrTGV2ZWxSZXNwb25zZT4oKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9hZGVyKCk6IFByb21pc2U8U3RvY2tMZXZlbFJlc3BvbnNlPiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXJzZXIgPSAoaW5wdXQ6IHN0cmluZykgPT4geyByZXR1cm4gaW5wdXQuc3BsaXQoL1xccyosXFxzKnxcXHMrLykuZmlsdGVyKChpdGVtKSA9PiAoaXRlbSAhPSBcIlwiKSAmJiAoaXRlbSkpOyB9O1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBcImxvY2F0aW9uLWlkc1wiOiBwYXJzZXIoc3RvcmVzKSxcclxuICAgICAgICAgIFwiU0tVc1wiOiBwYXJzZXIocHJvZHVjdHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2dldFByb2R1Y3RBdmFpbGFiaWxpdHlgLCBwYXlsb2FkKVxyXG4gICAgICAgIHJlc29sdmUocmVzcC5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZChsb2FkZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgU29IID0gcmVzcG9uc2U/LnJlc3VsdHMubWFwKChzdG9yZTogU3RvcmVTdG9ja0xldmVsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RvcmVJRDogc3RvcmVbXCJsb2NhdGlvbi1pZFwiXSwgc3RvcmVOYW1lOiBzdG9yZVtcImxvY2F0aW9uLW5hbWVcIl0sIC4uLnN0b3JlLmF2YWlsYWJpbGl0eS5yZWR1Y2UoKG9iajogUmVjb3JkPHN0cmluZywgbnVtYmVyPiwgaXRlbTogU3RvY2tMZXZlbCkgPT4geyBvYmpbaXRlbVtcInByb2R1Y3QtY29kZVwiXV0gPSBpdGVtW1wicXVhbnRpdHlcIl07IHJldHVybiBvYmo7IH0sIHt9KSB9O1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gU29IO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsge21zZzogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIn0sIF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJhc2UgPSBbIHsgSGVhZGVyOiAnU3RvcmUgSUQnLCBhY2Nlc3NvcjogJ3N0b3JlSUQnIH0sIHsgSGVhZGVyOiAnU3RvcmUgTmFtZScsIGFjY2Vzc29yOiAnc3RvcmVOYW1lJyB9IF07XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gbmV3IFNldCgpO1xyXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHJlc3BvbnNlPy5yZXN1bHRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHN0b3JlLmF2YWlsYWJpbGl0eSkge1xyXG4gICAgICAgICAgcHJvZHVjdHMuYWRkKGl0ZW1bXCJwcm9kdWN0LWNvZGVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2R1Y3RzLmtleXMoKSkge1xyXG4gICAgICAgIGJhc2UucHVzaCh7IEhlYWRlcjogaXRlbSBhcyBzdHJpbmcsIGFjY2Vzc29yOiBpdGVtIGFzIHN0cmluZyB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYmFzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWyB7IEhlYWRlcjogXCJFcnJvciAvIE1lc3NhZ2VcIiwgYWNjZXNvcjogXCJtc2dcIiB9IF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0OiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgbG9hZChsb2FkZXIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlU3RvcmVzOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIHNldFN0b3JlcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBvbkNoYW5nZVByb2R1Y3RzOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIHNldFByb2R1Y3RzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIyMHJlbVwifX0+XHJcbiAgICAgICAgPGxhYmVsPlN0b3JlczogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtzdG9yZXN9IG9uQ2hhbmdlPXtvbkNoYW5nZVN0b3Jlc30gcGxhY2Vob2xkZXI9XCJTdG9yZSBJRHMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIwMHB4XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGxhYmVsPlByb2R1Y3RzOiA8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH0gdmFsdWU9e3Byb2R1Y3RzfSBvbkNoYW5nZT17b25DaGFuZ2VQcm9kdWN0c30gcGxhY2Vob2xkZXI9XCJJdGVtIE51bWJlcnMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIyNXB4XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPVwiQ2hlY2sgQXZhaWxhYmlsaXRpZXNcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyBcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+TG9hZGluZyB5b3VyIGRhdGEuLi48L2gyPlxyXG4gICAgICA6IHJlc3BvbnNlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8PjxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5FcnJvcjo8L2gyPjxwPntlcnJvcn08L3A+PC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L0ltcGxlbWVudGF0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTG9va3VwOyJdLCJzb3VyY2VSb290IjoiIn0=