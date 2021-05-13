webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./pages/implementations/stock-lookup.tsx":
/*!************************************************!*\
  !*** ./pages/implementations/stock-lookup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var Implementation = function Implementation(_ref) {
  var name = _ref.name,
      children = _ref.children;
  var meta = {
    title: name,
    description: "An implmentation of the HSW's Boomi API ".concat(name, " Functionality")
  };
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Implementation: ".concat(name, " | HSW Boomi API"),
    meta: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headingLg,
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

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_2__["useSortBy"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case


  var firstPageRows = rows.slice(0, 20);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("table", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableProps(), {
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
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
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
  })), __jsx("tbody", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), firstPageRows.map(function (row, i) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
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
  return [react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"]];
});

_c2 = Table;

var StockLookup = function StockLookup() {
  _s2();

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__["useBoomiAPI"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      response = _useState[0],
      setResponse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      error = _useState2[0],
      setError = _useState2[1];

  var payload = {
    "location-ids": ["12100", "12077"],
    "SKUs": ["LTW9141", "LTW9252", "LTW9135"]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload).then(function (res) {
      return setResponse(res.data);
    })["catch"](function (err) {
      return setError(err);
    });
  }, []);
  var data = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    if (response && !error) {
      console.log(response);

      var _iterator = _createForOfIteratorHelper(response === null || response === void 0 ? void 0 : response.results),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var a = _step.value;
          console.log(a);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {}

    return [{
      col1: "a",
      col2: "1"
    }, {
      col1: "b",
      col2: "2"
    }];
  }, [response]);
  var columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    return [{
      Header: 'Column 1',
      accessor: 'col1'
    }, {
      Header: 'Column 2',
      accessor: 'col2'
    }];
  }, [response]); // console.log(response)

  return __jsx(Implementation, {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx(Table, {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }));
};

_s2(StockLookup, "CYR5UlE/UvgPsrtN+j7jnGp/BVQ=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__["useBoomiAPI"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwidXNlVGFibGUiLCJ1c2VTb3J0QnkiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJsZW5ndGgiLCJTdG9ja0xvb2t1cCIsImJvb21pQVBJIiwidXNlQm9vbWlBUEkiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwicGF5bG9hZCIsInVzZUVmZmVjdCIsIkF4aW9zIiwicG9zdCIsImVuZHBvaW50IiwidXJpIiwidGhlbiIsInJlcyIsImVyciIsIlJlYWN0IiwidXNlTWVtbyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiYSIsImNvbDEiLCJjb2wyIiwiSGVhZGVyIiwiYWNjZXNzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBb0MsR0FBRyxTQUF2Q0EsY0FBdUMs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Z2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAuYjgwOTM0ODVhZGM4ZGY2ZmFkNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVNvcnRCeSB9IGZyb20gJ3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IEF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VCb29taUFQSSB9IGZyb20gXCJAY29tcG9uZW50cy90b29scy9Cb29taUFQSVwiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IEltcGxlbWVudGF0aW9uOiBGQzx7IG5hbWU6IHN0cmluZyB9PiA9ICh7IG5hbWUsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBtZXRhID0geyB0aXRsZTogbmFtZSwgZGVzY3JpcHRpb246IGBBbiBpbXBsbWVudGF0aW9uIG9mIHRoZSBIU1cncyBCb29taSBBUEkgJHtuYW1lfSBGdW5jdGlvbmFsaXR5YCB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17YEltcGxlbWVudGF0aW9uOiAke25hbWV9IHwgSFNXIEJvb21pIEFQSWB9IG1ldGE9e21ldGF9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT57bmFtZX0gSW1wbGVtZW50YXRpb25zPC9oMj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBUYWJsZTogRkM8eyBjb2x1bW5zOiBhbnksIGRhdGE6IGFueX0gPiA9ICh7IGNvbHVtbnMsIGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHJvd3MsXHJcbiAgICBwcmVwYXJlUm93LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgICB1c2VTb3J0QnlcclxuICApXHJcblxyXG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gcmVuZGVyIGFsbCAyMDAwIHJvd3MgZm9yIHRoaXMgZXhhbXBsZSwgc28gY2FwXHJcbiAgLy8gaXQgYXQgMjAgZm9yIHRoaXMgdXNlIGNhc2VcclxuICBjb25zdCBmaXJzdFBhZ2VSb3dzID0gcm93cy5zbGljZSgwLCAyMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbjogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHNvcnRpbmcgcHJvcHMgdG8gY29udHJvbCBzb3J0aW5nLiBGb3IgdGhpcyBleGFtcGxlXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gYWRkIHRoZW0gaW50byB0aGUgaGVhZGVyIHByb3BzXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBBZGQgYSBzb3J0IGRpcmVjdGlvbiBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICcg8J+UvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge2ZpcnN0UGFnZVJvd3MubWFwKFxyXG4gICAgICAgICAgICAocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdj5TaG93aW5nIHRoZSBmaXJzdCAyMCByZXN1bHRzIG9mIHtyb3dzLmxlbmd0aH0gcm93czwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8YW55IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IHBheWxvYWQgPSB7IFwibG9jYXRpb24taWRzXCIgOiBbXCIxMjEwMFwiLCBcIjEyMDc3XCJdLCBcIlNLVXNcIiA6IFtcIkxUVzkxNDFcIixcIkxUVzkyNTJcIixcIkxUVzkxMzVcIl0gfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgIC50aGVuKHJlcyA9PiBzZXRSZXNwb25zZShyZXMuZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyKSlcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICBmb3IgKGNvbnN0IGEgb2YgcmVzcG9uc2U/LnJlc3VsdHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBbIHtjb2wxOiBcImFcIiwgY29sMjogXCIxXCJ9LCB7Y29sMTogXCJiXCIsIGNvbDI6IFwiMlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiBbXHJcbiAgICAgIHsgSGVhZGVyOiAnQ29sdW1uIDEnLCBhY2Nlc3NvcjogJ2NvbDEnIH0sXHJcbiAgICAgIHsgSGVhZGVyOiAnQ29sdW1uIDInLCBhY2Nlc3NvcjogJ2NvbDInIH0sXHJcbiAgXSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICB7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfVxyXG4gICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvSW1wbGVtZW50YXRpb24+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tMb29rdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==