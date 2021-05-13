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
      var rawData = JSON.parse(response);
      console.log(rawData);

      for (var _i = 0, _Object$keys = Object.keys(rawData); _i < _Object$keys.length; _i++) {
        var a = _Object$keys[_i];
        console.log(a);
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
      lineNumber: 118,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx(Table, {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwidXNlVGFibGUiLCJ1c2VTb3J0QnkiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJsZW5ndGgiLCJTdG9ja0xvb2t1cCIsImJvb21pQVBJIiwidXNlQm9vbWlBUEkiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwicGF5bG9hZCIsInVzZUVmZmVjdCIsIkF4aW9zIiwicG9zdCIsImVuZHBvaW50IiwidXJpIiwidGhlbiIsInJlcyIsImVyciIsIlJlYWN0IiwidXNlTWVtbyIsInJhd0RhdGEiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImEiLCJjb2wxIiwiY29sMiIsIkhlYWRlciIsImFjY2Vzc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEs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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAuNzliNGFlZTIyMmYxYTcyNGM0OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVNvcnRCeSB9IGZyb20gJ3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgSW1wbGVtZW50YXRpb246IEZDPHsgbmFtZTogc3RyaW5nIH0+ID0gKHsgbmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSB7IHRpdGxlOiBuYW1lLCBkZXNjcmlwdGlvbjogYEFuIGltcGxtZW50YXRpb24gb2YgdGhlIEhTVydzIEJvb21pIEFQSSAke25hbWV9IEZ1bmN0aW9uYWxpdHlgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtgSW1wbGVtZW50YXRpb246ICR7bmFtZX0gfCBIU1cgQm9vbWkgQVBJYH0gbWV0YT17bWV0YX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PntuYW1lfSBJbXBsZW1lbnRhdGlvbnM8L2gyPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IFRhYmxlOiBGQzx7IGNvbHVtbnM6IGFueSwgZGF0YTogYW55fSA+ID0gKHsgY29sdW1ucywgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZ2V0VGFibGVQcm9wcyxcclxuICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgcm93cyxcclxuICAgIHByZXBhcmVSb3csXHJcbiAgfSA9IHVzZVRhYmxlKFxyXG4gICAge1xyXG4gICAgICBjb2x1bW5zLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICAgIHVzZVNvcnRCeVxyXG4gIClcclxuXHJcbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byByZW5kZXIgYWxsIDIwMDAgcm93cyBmb3IgdGhpcyBleGFtcGxlLCBzbyBjYXBcclxuICAvLyBpdCBhdCAyMCBmb3IgdGhpcyB1c2UgY2FzZVxyXG4gIGNvbnN0IGZpcnN0UGFnZVJvd3MgPSByb3dzLnNsaWNlKDAsIDIwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgc29ydGluZyBwcm9wcyB0byBjb250cm9sIHNvcnRpbmcuIEZvciB0aGlzIGV4YW1wbGVcclxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBhZGQgdGhlbSBpbnRvIHRoZSBoZWFkZXIgcHJvcHNcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuICAgICAgICAgICAgICAgICAgey8qIEFkZCBhIHNvcnQgZGlyZWN0aW9uIGluZGljYXRvciAqL31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgICB7Zmlyc3RQYWdlUm93cy5tYXAoXHJcbiAgICAgICAgICAgIChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2PlNob3dpbmcgdGhlIGZpcnN0IDIwIHJlc3VsdHMgb2Yge3Jvd3MubGVuZ3RofSByb3dzPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFN0b2NrTG9va3VwOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBib29taUFQSSA9IHVzZUJvb21pQVBJKCk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IHBheWxvYWQgPSB7IFwibG9jYXRpb24taWRzXCIgOiBbXCIxMjEwMFwiLCBcIjEyMDc3XCJdLCBcIlNLVXNcIiA6IFtcIkxUVzkxNDFcIixcIkxUVzkyNTJcIixcIkxUVzkxMzVcIl0gfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgIC50aGVuKHJlcyA9PiBzZXRSZXNwb25zZShyZXMuZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyKSlcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2cocmF3RGF0YSlcclxuICAgICAgZm9yIChjb25zdCBhIG9mIE9iamVjdC5rZXlzKHJhd0RhdGEpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB7Y29sMTogXCJhXCIsIGNvbDI6IFwiMVwifSwge2NvbDE6IFwiYlwiLCBjb2wyOiBcIjJcIn0sIF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICB7IEhlYWRlcjogJ0NvbHVtbiAxJywgYWNjZXNzb3I6ICdjb2wxJyB9LFxyXG4gICAgICB7IEhlYWRlcjogJ0NvbHVtbiAyJywgYWNjZXNzb3I6ICdjb2wyJyB9LFxyXG4gIF0sIFtyZXNwb25zZV0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICByZXR1cm4gKFxyXG4gICAgPEltcGxlbWVudGF0aW9uIG5hbWU9XCJTdG9jayBMb29rdXBcIj5cclxuICAgICAge2Jvb21pQVBJLmVuZHBvaW50LnVyaX1cclxuICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L0ltcGxlbWVudGF0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTG9va3VwOyJdLCJzb3VyY2VSb290IjoiIn0=