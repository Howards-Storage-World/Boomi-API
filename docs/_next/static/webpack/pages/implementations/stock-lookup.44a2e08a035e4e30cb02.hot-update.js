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
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
                resolve(resp);
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
      console.log(response);
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
      lineNumber: 95,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Error:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJ1c2VMb2FkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwibG9hZCIsImZuIiwicGF5bG9hZCIsImlzTG9hZGluZyIsIlN0b2NrTG9va3VwIiwiYm9vbWlBUEkiLCJ1c2VCb29taUFQSSIsImxvYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiQXhpb3MiLCJwb3N0IiwiZW5kcG9pbnQiLCJ1cmkiLCJyZXNwIiwidXNlRWZmZWN0IiwiZGF0YSIsIlJlYWN0IiwidXNlTWVtbyIsImNvbnNvbGUiLCJsb2ciLCJTb0giLCJyZXN1bHRzIiwibWFwIiwic3RvcmUiLCJzdG9yZUlEIiwic3RvcmVOYW1lIiwiYXZhaWxhYmlsaXR5IiwicmVkdWNlIiwib2JqIiwiaXRlbSIsIm1zZyIsImNvbHVtbnMiLCJiYXNlIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJwcm9kdWN0cyIsIlNldCIsImFkZCIsImtleXMiLCJwdXNoIiwiYWNjZXNvciIsImhlYWRpbmdNZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGNBQW9DLEdBQUcsU0FBdkNBLGNBQXVDLE9BQXdCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuRSxNQUFNQyxJQUFJLEdBQUc7QUFBRUMsU0FBSyxFQUFF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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsR0FHQSxtRUFBRTtBQUFJLGFBQVMsRUFBRTVCLCtEQUFVLENBQUNzRCxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUYsRUFBa0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJN0MsS0FBSixDQUFsRCxDQVBKLENBREY7QUFhRCxDQWhFRDs7SUFBTU0sVztVQUNhRSxzRSxFQUM0QmYsTzs7O01BRnpDYSxXO0FBa0VTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLjQ0YTJlMDhhMDM1ZTRlMzBjYjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgSW1wbGVtZW50YXRpb246IEZDPHsgbmFtZTogc3RyaW5nIH0+ID0gKHsgbmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSB7IHRpdGxlOiBuYW1lLCBkZXNjcmlwdGlvbjogYEFuIGltcGxtZW50YXRpb24gb2YgdGhlIEhTVydzIEJvb21pIEFQSSAke25hbWV9IEZ1bmN0aW9uYWxpdHlgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtgSW1wbGVtZW50YXRpb246ICR7bmFtZX0gfCBIU1cgQm9vbWkgQVBJYH0gbWV0YT17bWV0YX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PntuYW1lfSBJbXBsZW1lbnRhdGlvbnM8L2gyPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlTG9hZCgpIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZChmbjogKCkgPT4gUHJvbWlzZTxhbnk+KSB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGZuKCk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRSZXNwb25zZShwYXlsb2FkKTtcclxuICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgIHNldFJlc3BvbnNlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyByZXNwb25zZSwgZXJyb3IsIGlzTG9hZGluZzogbG9hZGluZywgbG9hZCB9O1xyXG59XHJcblxyXG5cclxuY29uc3QgU3RvY2tMb29rdXA6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvb21pQVBJID0gdXNlQm9vbWlBUEkoKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkKCk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHsgXCJsb2NhdGlvbi1pZHNcIiA6IFtcIjEyMTAwXCIsIFwiMTIwNzdcIl0sIFwiU0tVc1wiIDogW1wiTFRXOTE0MVwiLFwiTFRXOTI1MlwiLFwiTFRXOTEzNVwiXSB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2dldFByb2R1Y3RBdmFpbGFiaWxpdHlgLCBwYXlsb2FkKVxyXG4gICAgICAgIHJlc29sdmUocmVzcCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICBjb25zdCBTb0ggPSByZXNwb25zZT8ucmVzdWx0cy5tYXAoKHN0b3JlOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4geyBzdG9yZUlEOiBzdG9yZVtcImxvY2F0aW9uLWlkXCJdLCBzdG9yZU5hbWU6IHN0b3JlW1wibG9jYXRpb24tbmFtZVwiXSwgLi4uc3RvcmUuYXZhaWxhYmlsaXR5LnJlZHVjZSgob2JqOiBhbnksIGl0ZW06IGFueSkgPT4geyBvYmpbaXRlbVtcInByb2R1Y3QtY29kZVwiXV0gPSBpdGVtW1wicXVhbnRpdHlcIl07IHJldHVybiBvYmo7IH0sIHt9KSB9O1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gU29IO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsge21zZzogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIn0sIF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZSA9IFsgeyBIZWFkZXI6ICdTdG9yZSBJRCcsIGFjY2Vzc29yOiAnc3RvcmVJRCcgfSwgeyBIZWFkZXI6ICdTdG9yZSBOYW1lJywgYWNjZXNzb3I6ICdzdG9yZU5hbWUnIH0gXTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgcHJvZHVjdHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RvcmUgb2YgcmVzcG9uc2U/LnJlc3VsdHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RvcmUuYXZhaWxhYmlsaXR5KSB7XHJcbiAgICAgICAgICBwcm9kdWN0cy5hZGQoaXRlbVtcInByb2R1Y3QtY29kZVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvZHVjdHMua2V5cygpKSB7XHJcbiAgICAgICAgYmFzZS5wdXNoKHsgSGVhZGVyOiBpdGVtLCBhY2Nlc3NvcjogaXRlbSB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYmFzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWyB7IEhlYWRlcjogXCJFcnJvciAvIE1lc3NhZ2VcIiwgYWNjZXNvcjogXCJtc2dcIiB9IF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICB7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfVxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkxvYWRpbmcgeW91ciBkYXRhLi4uPC9oMj5cclxuICAgICAgOiByZXNwb25zZSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPD48aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+RXJyb3I6PC9oMj48cD57ZXJyb3J9PC9wPjwvPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9