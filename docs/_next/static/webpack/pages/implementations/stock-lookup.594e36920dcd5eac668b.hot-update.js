webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/implementations/stock-lookup.tsx":
/*!************************************************!*\
  !*** ./pages/implementations/stock-lookup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, name, " Implementations"), children);
};

_c = Implementation;

var Table = function Table(_ref2) {
  _s();

  var columns = _ref2.columns,
      data = _ref2.data;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_3__["useSortBy"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case


  var firstPageRows = rows.slice(0, 20);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("table", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTableProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, headerGroup.getHeaderGroupProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }
        }), column.render('Header'), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 19
          }
        }, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''))
      );
    }));
  })), __jsx("tbody", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTableBodyProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), firstPageRows.map(function (row, i) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, row.getRowProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cell.getCellProps(), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 23
        }
      }), cell.render('Cell'));
    }));
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Showing the first 20 results of ", rows.length, " rows"));
};

_s(Table, "BYNTWeoXdryq+6lvDEiS5kf/9Fc=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"]];
});

_c2 = Table;

var StockLookup = function StockLookup() {
  _s2();

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_6__["useBoomiAPI"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      response = _useState[0],
      setResponse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      error = _useState2[0],
      setError = _useState2[1];

  var payload = {
    "location-ids": ["12100", "12077"],
    "SKUs": ["LTW9141", "LTW9252", "LTW9135"]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload).then(function (res) {
      return setResponse(res.data);
    })["catch"](function (err) {
      return setError(err);
    });
  }, []);
  var data = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    if (response && !error) {
      var SoH = response === null || response === void 0 ? void 0 : response.results.map(function (store) {
        console.log(store);
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
      storeID: "a"
    }, {
      storeID: "b"
    }];
  }, [response]);
  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
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

      return base.concat();
    }

    base.push({
      Header: 'LTW9135',
      accessor: 'LTW9135'
    });
    return base;
  }, [response]); // console.log(response)

  return __jsx(Implementation, {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx(Table, {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }));
};

_s2(StockLookup, "CYR5UlE/UvgPsrtN+j7jnGp/BVQ=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_6__["useBoomiAPI"]];
});

_c3 = StockLookup;
/* harmony default export */ __webpack_exports__["default"] = (StockLookup);

var _c, _c2, _c3;

$RefreshReg$(_c, "Implementation");
$RefreshReg$(_c2, "Table");
$RefreshReg$(_c3, "StockLookup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwidXNlVGFibGUiLCJ1c2VTb3J0QnkiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJsZW5ndGgiLCJTdG9ja0xvb2t1cCIsImJvb21pQVBJIiwidXNlQm9vbWlBUEkiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwicGF5bG9hZCIsInVzZUVmZmVjdCIsIkF4aW9zIiwicG9zdCIsImVuZHBvaW50IiwidXJpIiwidGhlbiIsInJlcyIsImVyciIsIlJlYWN0IiwidXNlTWVtbyIsIlNvSCIsInJlc3VsdHMiLCJzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZUlEIiwic3RvcmVOYW1lIiwiYXZhaWxhYmlsaXR5IiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImJhc2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsInByb2R1Y3RzIiwiU2V0IiwiYWRkIiwia2V5cyIsInB1c2giLCJjb25jYXQiXSwibWFwcGlu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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQWxERDs7SUFBTTJCLFc7VUFDYUUsc0U7OztNQURiRixXO0FBb0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLjU5NGUzNjkyMGRjZDVlYWM2NjhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VTb3J0QnkgfSBmcm9tICdyZWFjdC10YWJsZSc7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHsgdXNlQm9vbWlBUEkgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvQm9vbWlBUElcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5jb25zdCBJbXBsZW1lbnRhdGlvbjogRkM8eyBuYW1lOiBzdHJpbmcgfT4gPSAoeyBuYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IHsgdGl0bGU6IG5hbWUsIGRlc2NyaXB0aW9uOiBgQW4gaW1wbG1lbnRhdGlvbiBvZiB0aGUgSFNXJ3MgQm9vbWkgQVBJICR7bmFtZX0gRnVuY3Rpb25hbGl0eWAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2BJbXBsZW1lbnRhdGlvbjogJHtuYW1lfSB8IEhTVyBCb29taSBBUElgfSBtZXRhPXttZXRhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+e25hbWV9IEltcGxlbWVudGF0aW9uczwvaDI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgVGFibGU6IEZDPHsgY29sdW1uczogYW55LCBkYXRhOiBhbnl9ID4gPSAoeyBjb2x1bW5zLCBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICByb3dzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICB9ID0gdXNlVGFibGUoXHJcbiAgICB7XHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gICAgdXNlU29ydEJ5XHJcbiAgKVxyXG5cclxuICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbmRlciBhbGwgMjAwMCByb3dzIGZvciB0aGlzIGV4YW1wbGUsIHNvIGNhcFxyXG4gIC8vIGl0IGF0IDIwIGZvciB0aGlzIHVzZSBjYXNlXHJcbiAgY29uc3QgZmlyc3RQYWdlUm93cyA9IHJvd3Muc2xpY2UoMCwgMjApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW46IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBzb3J0aW5nIHByb3BzIHRvIGNvbnRyb2wgc29ydGluZy4gRm9yIHRoaXMgZXhhbXBsZVxyXG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIGFkZCB0aGVtIGludG8gdGhlIGhlYWRlciBwcm9wc1xyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfT5cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnIPCflL0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyDwn5S8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtmaXJzdFBhZ2VSb3dzLm1hcChcclxuICAgICAgICAgICAgKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PntjZWxsLnJlbmRlcignQ2VsbCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXY+U2hvd2luZyB0aGUgZmlyc3QgMjAgcmVzdWx0cyBvZiB7cm93cy5sZW5ndGh9IHJvd3M8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3RvY2tMb29rdXA6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvb21pQVBJID0gdXNlQm9vbWlBUEkoKTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPGFueSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuICBjb25zdCBwYXlsb2FkID0geyBcImxvY2F0aW9uLWlkc1wiIDogW1wiMTIxMDBcIiwgXCIxMjA3N1wiXSwgXCJTS1VzXCIgOiBbXCJMVFc5MTQxXCIsXCJMVFc5MjUyXCIsXCJMVFc5MTM1XCJdIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2dldFByb2R1Y3RBdmFpbGFiaWxpdHlgLCBwYXlsb2FkKVxyXG4gICAgICAudGhlbihyZXMgPT4gc2V0UmVzcG9uc2UocmVzLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHNldEVycm9yKGVycikpXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBTb0ggPSByZXNwb25zZT8ucmVzdWx0cy5tYXAoKHN0b3JlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdG9yZSlcclxuICAgICAgICByZXR1cm4geyBzdG9yZUlEOiBzdG9yZVtcImxvY2F0aW9uLWlkXCJdLCBzdG9yZU5hbWU6IHN0b3JlW1wibG9jYXRpb24tbmFtZVwiXSwgLi4uc3RvcmUuYXZhaWxhYmlsaXR5LnJlZHVjZSgob2JqOiBhbnksIGl0ZW06IGFueSkgPT4geyBvYmpbaXRlbVtcInByb2R1Y3QtY29kZVwiXV0gPSBpdGVtW1wicXVhbnRpdHlcIl07IHJldHVybiBvYmo7IH0sIHt9KSB9O1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gU29IO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsge3N0b3JlSUQ6IFwiYVwifSwge3N0b3JlSUQ6IFwiYlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlID0gWyB7IEhlYWRlcjogJ1N0b3JlIElEJywgYWNjZXNzb3I6ICdzdG9yZUlEJyB9LCB7IEhlYWRlcjogJ1N0b3JlIE5hbWUnLCBhY2Nlc3NvcjogJ3N0b3JlTmFtZScgfSBdO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IG5ldyBTZXQoKTtcclxuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiByZXNwb25zZT8ucmVzdWx0cykge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzdG9yZS5hdmFpbGFiaWxpdHkpIHtcclxuICAgICAgICAgIHByb2R1Y3RzLmFkZChpdGVtW1wicHJvZHVjdC1jb2RlXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9kdWN0cy5rZXlzKCkpIHtcclxuICAgICAgICBiYXNlLnB1c2goeyBIZWFkZXI6IGl0ZW0sIGFjY2Vzc29yOiBpdGVtIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJhc2UuY29uY2F0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFzZS5wdXNoKHsgSGVhZGVyOiAnTFRXOTEzNScsIGFjY2Vzc29yOiAnTFRXOTEzNScgfSk7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIHtib29taUFQSS5lbmRwb2ludC51cml9XHJcbiAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9