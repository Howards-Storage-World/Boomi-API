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
        var resp;
        return C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload);

              case 3:
                resp = _context2.sent;
                resolve(resp.data);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                reject(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
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
      var products = new Set();

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
              products.add(item["product-code"]);
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

      var _iterator2 = _createForOfIteratorHelper(products.keys()),
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
  }, [response]); // console.log(response)

  return __jsx(Implementation, {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Stores: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    placeholder: "Store IDs seperated by spaces",
    style: {
      "width": "200px;"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 154
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "Products: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    placeholder: "Item Numbers seperated by spaces",
    style: {
      "width": "225px;"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 159
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Error:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 59
    }
  }, error)));
};

_s2(StockLookup, "nRzq2n++wYJnOlt/Xfq82UGqNxQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJ1c2VMb2FkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwibG9hZCIsImZuIiwicGF5bG9hZCIsImlzTG9hZGluZyIsIlN0b2NrTG9va3VwIiwiYm9vbWlBUEkiLCJ1c2VCb29taUFQSSIsImxvYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiQXhpb3MiLCJwb3N0IiwiZW5kcG9pbnQiLCJ1cmkiLCJyZXNwIiwiZGF0YSIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlTWVtbyIsIlNvSCIsInJlc3VsdHMiLCJtYXAiLCJzdG9yZSIsInN0b3JlSUQiLCJzdG9yZU5hbWUiLCJhdmFpbGFiaWxpdHkiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwibXNnIiwiY29sdW1ucyIsImJhc2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsInByb2R1Y3RzIiwiU2V0IiwiYWRkIiwia2V5cyIsInB1c2giLCJhY2Nlc29yIiwiaW5wdXQiLCJoZWFkaW5nTWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFvQyxHQUFHLFNBQXZDQSxjQUF1QyxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkUsTUFBTUMsSUFBSSxHQUFHO0FBQUVDLFNBQUssRUFBRUgsSUFBVDtB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QUFzRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAuZWJhYTVhYWE3ZDQxZTg3OGYzOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGVcIjtcclxuaW1wb3J0IHsgdXNlQm9vbWlBUEkgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvQm9vbWlBUElcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEltcGxlbWVudGF0aW9uOiBGQzx7IG5hbWU6IHN0cmluZyB9PiA9ICh7IG5hbWUsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBtZXRhID0geyB0aXRsZTogbmFtZSwgZGVzY3JpcHRpb246IGBBbiBpbXBsbWVudGF0aW9uIG9mIHRoZSBIU1cncyBCb29taSBBUEkgJHtuYW1lfSBGdW5jdGlvbmFsaXR5YCB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17YEltcGxlbWVudGF0aW9uOiAke25hbWV9IHwgSFNXIEJvb21pIEFQSWB9IG1ldGE9e21ldGF9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT57bmFtZX0gSW1wbGVtZW50YXRpb25zPC9oMj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUxvYWQoKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxhbnk+KHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxhbnk+KHVuZGVmaW5lZCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWQoZm46ICgpID0+IFByb21pc2U8YW55Pikge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBmbigpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0UmVzcG9uc2UocGF5bG9hZCk7XHJcbiAgICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRSZXNwb25zZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcmVzcG9uc2UsIGVycm9yLCBpc0xvYWRpbmc6IGxvYWRpbmcsIGxvYWQgfTtcclxufVxyXG5cclxuXHJcbmNvbnN0IFN0b2NrTG9va3VwOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBib29taUFQSSA9IHVzZUJvb21pQVBJKCk7XHJcbiAgY29uc3QgeyByZXNwb25zZSwgZXJyb3IsIGlzTG9hZGluZywgbG9hZCB9ID0gdXNlTG9hZCgpO1xyXG4gIGNvbnN0IHBheWxvYWQgPSB7IFwibG9jYXRpb24taWRzXCIgOiBbXCIxMjEwMFwiLCBcIjEyMDc3XCJdLCBcIlNLVXNcIiA6IFtcIkxUVzkxNDFcIixcIkxUVzkyNTJcIixcIkxUVzkxMzVcIl0gfTtcclxuXHJcbiAgZnVuY3Rpb24gbG9hZGVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgQXhpb3MucG9zdChgJHtib29taUFQSS5lbmRwb2ludC51cml9L3dzL3NpbXBsZS9nZXRQcm9kdWN0QXZhaWxhYmlsaXR5YCwgcGF5bG9hZClcclxuICAgICAgICByZXNvbHZlKHJlc3AuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IFNvSCA9IHJlc3BvbnNlPy5yZXN1bHRzLm1hcCgoc3RvcmU6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sIHN0b3JlTmFtZTogc3RvcmVbXCJsb2NhdGlvbi1uYW1lXCJdLCAuLi5zdG9yZS5hdmFpbGFiaWxpdHkucmVkdWNlKChvYmo6IGFueSwgaXRlbTogYW55KSA9PiB7IG9ialtpdGVtW1wicHJvZHVjdC1jb2RlXCJdXSA9IGl0ZW1bXCJxdWFudGl0eVwiXTsgcmV0dXJuIG9iajsgfSwge30pIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBTb0g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB7bXNnOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlID0gWyB7IEhlYWRlcjogJ1N0b3JlIElEJywgYWNjZXNzb3I6ICdzdG9yZUlEJyB9LCB7IEhlYWRlcjogJ1N0b3JlIE5hbWUnLCBhY2Nlc3NvcjogJ3N0b3JlTmFtZScgfSBdO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IG5ldyBTZXQoKTtcclxuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiByZXNwb25zZT8ucmVzdWx0cykge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzdG9yZS5hdmFpbGFiaWxpdHkpIHtcclxuICAgICAgICAgIHByb2R1Y3RzLmFkZChpdGVtW1wicHJvZHVjdC1jb2RlXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9kdWN0cy5rZXlzKCkpIHtcclxuICAgICAgICBiYXNlLnB1c2goeyBIZWFkZXI6IGl0ZW0sIGFjY2Vzc29yOiBpdGVtIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbIHsgSGVhZGVyOiBcIkVycm9yIC8gTWVzc2FnZVwiLCBhY2Nlc29yOiBcIm1zZ1wiIH0gXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIHtib29taUFQSS5lbmRwb2ludC51cml9XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxsYWJlbD5TdG9yZXM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSBwbGFjZWhvbGRlcj1cIlN0b3JlIElEcyBzZXBlcmF0ZWQgYnkgc3BhY2VzXCIgc3R5bGU9e3tcIndpZHRoXCI6IFwiMjAwcHg7XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGxhYmVsPlByb2R1Y3RzOiA8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbnB1dH0gcGxhY2Vob2xkZXI9XCJJdGVtIE51bWJlcnMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIyNXB4O1wifX0gLz48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT1cIkNoZWNrIEF2YWlsYWJpbGl0aWVzXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkxvYWRpbmcgeW91ciBkYXRhLi4uPC9oMj5cclxuICAgICAgOiByZXNwb25zZSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPD48aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+RXJyb3I6PC9oMj48cD57ZXJyb3J9PC9wPjwvPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9