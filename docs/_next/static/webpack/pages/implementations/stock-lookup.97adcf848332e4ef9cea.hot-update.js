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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingLg,
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
}

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

  var payload = {
    "location-ids": ["12100", "12077"],
    "SKUs": ["LTW9141", "LTW9252", "LTW9135"]
  };

  function loader() {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(resolve, reject) {
        var parser, _payload, resp;

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

                _payload = {
                  "location-ids": parser(stores),
                  "SKUs": parser(products)
                };
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), _payload);

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
    e.preventDefault();
  };

  var onChangeStores = function onChangeStores(e) {
    setStores(e.target.value);
  };

  var onChangeProducts = function onChangeProducts(e) {
    setProducts(e.target.value);
  }; // console.log(response)


  return __jsx(Implementation, {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Stores: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    value: stores,
    onChange: onChangeStores,
    placeholder: "Store IDs seperated by spaces",
    style: {
      "width": "200px;"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 195
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Products: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    value: products,
    onChange: onChangeProducts,
    placeholder: "Item Numbers seperated by spaces",
    style: {
      "width": "225px;"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 204
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Error:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJ1c2VMb2FkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwibG9hZCIsImZuIiwicGF5bG9hZCIsImlzTG9hZGluZyIsIlN0b2NrTG9va3VwIiwiYm9vbWlBUEkiLCJ1c2VCb29taUFQSSIsInN0b3JlcyIsInNldFN0b3JlcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlciIsImlucHV0Iiwic3BsaXQiLCJmaWx0ZXIiLCJpdGVtIiwiQXhpb3MiLCJwb3N0IiwiZW5kcG9pbnQiLCJ1cmkiLCJyZXNwIiwiZGF0YSIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlTWVtbyIsIlNvSCIsInJlc3VsdHMiLCJtYXAiLCJzdG9yZSIsInN0b3JlSUQiLCJzdG9yZU5hbWUiLCJhdmFpbGFiaWxpdHkiLCJyZWR1Y2UiLCJvYmoiLCJtc2ciLCJjb2x1bW5zIiwiYmFzZSIsIkhlYWRlciIsImFjY2Vzc29yIiwiU2V0IiwiYWRkIiwia2V5cyIsInB1c2giLCJhY2Nlc29yIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZVN0b3JlcyIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQcm9kdWN0cyIsImhlYWRpbmdNZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUYsRUFBa0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJekQsS0FBSixDQUFsRCxDQWJKLENBREY7QUFtQkQsQ0F2RkQ7O0lBQU1NLFc7VUFDYUUsc0UsRUFHNEJmLE87OztNQUp6Q2EsVztBQXlGU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC45N2FkY2Y4NDgzMzJlNGVmOWNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBJbXBsZW1lbnRhdGlvbjogRkM8eyBuYW1lOiBzdHJpbmcgfT4gPSAoeyBuYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IHsgdGl0bGU6IG5hbWUsIGRlc2NyaXB0aW9uOiBgQW4gaW1wbG1lbnRhdGlvbiBvZiB0aGUgSFNXJ3MgQm9vbWkgQVBJICR7bmFtZX0gRnVuY3Rpb25hbGl0eWAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2BJbXBsZW1lbnRhdGlvbjogJHtuYW1lfSB8IEhTVyBCb29taSBBUElgfSBtZXRhPXttZXRhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+e25hbWV9IEltcGxlbWVudGF0aW9uczwvaDI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VMb2FkKCkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8YW55Pih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8YW55Pih1bmRlZmluZWQpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsb2FkKGZuOiAoKSA9PiBQcm9taXNlPGFueT4pIHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgZm4oKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFJlc3BvbnNlKHBheWxvYWQpO1xyXG4gICAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgc2V0UmVzcG9uc2UodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nOiBsb2FkaW5nLCBsb2FkIH07XHJcbn1cclxuXHJcblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShcIjEyMTAwIDEyMDc3XCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoXCJMVFc5MTQxIExUVzkyNTIgTFRXOTEzNVwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkKCk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHsgXCJsb2NhdGlvbi1pZHNcIiA6IFtcIjEyMTAwXCIsIFwiMTIwNzdcIl0sIFwiU0tVc1wiIDogW1wiTFRXOTE0MVwiLFwiTFRXOTI1MlwiLFwiTFRXOTEzNVwiXSB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IChpbnB1dDogc3RyaW5nKSA9PiB7IHJldHVybiBpbnB1dC5zcGxpdCgvXFxzKixcXHMqfFxccysvKS5maWx0ZXIoKGl0ZW0pID0+IChpdGVtICE9IFwiXCIpICYmIChpdGVtKSk7IH07XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgIFwibG9jYXRpb24taWRzXCI6IHBhcnNlcihzdG9yZXMpLFxyXG4gICAgICAgICAgXCJTS1VzXCI6IHBhcnNlcihwcm9kdWN0cylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgICAgcmVzb2x2ZShyZXNwLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkKGxvYWRlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBTb0ggPSByZXNwb25zZT8ucmVzdWx0cy5tYXAoKHN0b3JlOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyBzdG9yZUlEOiBzdG9yZVtcImxvY2F0aW9uLWlkXCJdLCBzdG9yZU5hbWU6IHN0b3JlW1wibG9jYXRpb24tbmFtZVwiXSwgLi4uc3RvcmUuYXZhaWxhYmlsaXR5LnJlZHVjZSgob2JqOiBhbnksIGl0ZW06IGFueSkgPT4geyBvYmpbaXRlbVtcInByb2R1Y3QtY29kZVwiXV0gPSBpdGVtW1wicXVhbnRpdHlcIl07IHJldHVybiBvYmo7IH0sIHt9KSB9O1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gU29IO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsge21zZzogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIn0sIF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZSA9IFsgeyBIZWFkZXI6ICdTdG9yZSBJRCcsIGFjY2Vzc29yOiAnc3RvcmVJRCcgfSwgeyBIZWFkZXI6ICdTdG9yZSBOYW1lJywgYWNjZXNzb3I6ICdzdG9yZU5hbWUnIH0gXTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgcHJvZHVjdHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RvcmUgb2YgcmVzcG9uc2U/LnJlc3VsdHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RvcmUuYXZhaWxhYmlsaXR5KSB7XHJcbiAgICAgICAgICBwcm9kdWN0cy5hZGQoaXRlbVtcInByb2R1Y3QtY29kZVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvZHVjdHMua2V5cygpKSB7XHJcbiAgICAgICAgYmFzZS5wdXNoKHsgSGVhZGVyOiBpdGVtLCBhY2Nlc3NvcjogaXRlbSB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYmFzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWyB7IEhlYWRlcjogXCJFcnJvciAvIE1lc3NhZ2VcIiwgYWNjZXNvcjogXCJtc2dcIiB9IF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0OiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlU3RvcmVzOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIHNldFN0b3JlcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2hhbmdlUHJvZHVjdHM6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdHMoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICB7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfVxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbD5TdG9yZXM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17c3RvcmVzfSBvbkNoYW5nZT17b25DaGFuZ2VTdG9yZXN9IHBsYWNlaG9sZGVyPVwiU3RvcmUgSURzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMDBweDtcIn19IC8+PGJyLz5cclxuICAgICAgICA8bGFiZWw+UHJvZHVjdHM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17cHJvZHVjdHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVByb2R1Y3RzfSBwbGFjZWhvbGRlcj1cIkl0ZW0gTnVtYmVycyBzZXBlcmF0ZWQgYnkgc3BhY2VzXCIgc3R5bGU9e3tcIndpZHRoXCI6IFwiMjI1cHg7XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPVwiQ2hlY2sgQXZhaWxhYmlsaXRpZXNcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyBcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+TG9hZGluZyB5b3VyIGRhdGEuLi48L2gyPlxyXG4gICAgICA6IHJlc3BvbnNlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8PjxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5FcnJvcjo8L2gyPjxwPntlcnJvcn08L3A+PC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L0ltcGxlbWVudGF0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTG9va3VwOyJdLCJzb3VyY2VSb290IjoiIn0=