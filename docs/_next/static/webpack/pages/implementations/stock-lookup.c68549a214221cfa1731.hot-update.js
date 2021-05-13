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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      response = _useState[0],
      setResponse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
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
    for (var _i = 0, _Object$keys = Object.keys(JSON.parse(response)); _i < _Object$keys.length; _i++) {
      var a = _Object$keys[_i];
      console.log(a);
    }

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
      lineNumber: 112,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx(Table, {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }));
};

_s2(StockLookup, "vwKlMqKZA1SwbUJ4+0tesh8ZXGY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwidXNlVGFibGUiLCJ1c2VTb3J0QnkiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJsZW5ndGgiLCJTdG9ja0xvb2t1cCIsImJvb21pQVBJIiwidXNlQm9vbWlBUEkiLCJ1c2VTdGF0ZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwicGF5bG9hZCIsInVzZUVmZmVjdCIsIkF4aW9zIiwicG9zdCIsImVuZHBvaW50IiwidXJpIiwidGhlbiIsInJlcyIsImVyciIsIlJlYWN0IiwidXNlTWVtbyIsIk9iamVjdCIsImtleXMiLCJKU09OIiwicGFyc2UiLCJhIiwiY29uc29sZSIsImxvZyIsImNvbDEiLCJjb2wyIiwiSGVhZGVyIiwiYWNjZXNzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxjQUFvQyxHQUFHLFNBQXZDQSxjQUF1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LEtBQUwsQ0FBV2xCLFFBQVgsQ0FBWixDQUFoQixrQ0FBbUQ7QUFBOUMsVUFBTW1CLENBQUMsbUJBQVA7QUFDSEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDs7QUFDRCxXQUFPLENBQUU7QUFBQ0csVUFBSSxFQUFFLEdBQVA7QUFBWUMsVUFBSSxFQUFFO0FBQWxCLEtBQUYsRUFBMEI7QUFBQ0QsVUFBSSxFQUFFLEdBQVA7QUFBWUMsVUFBSSxFQUFFO0FBQWxCLEtBQTFCLENBQVA7QUFDRCxHQUxZLEVBS1YsQ0FBQ3ZCLFFBQUQsQ0FMVSxDQUFiO0FBTUEsTUFBTWhDLE9BQU8sR0FBRzZDLDRDQUFLLENBQUNDLE9BQU4sQ0FBYztBQUFBLFdBQU0sQ0FDaEM7QUFBRVUsWUFBTSxFQUFFLFVBQVY7QUFBc0JDLGNBQVEsRUFBRTtBQUFoQyxLQURnQyxFQUVoQztBQUFFRCxZQUFNLEVBQUUsVUFBVjtBQUFzQkMsY0FBUSxFQUFFO0FBQWhDLEtBRmdDLENBQU47QUFBQSxHQUFkLEVBR2IsQ0FBQ3pCLFFBQUQsQ0FIYSxDQUFoQixDQW5CNEIsQ0F3QjVCOztBQUNBLFNBQ0UsTUFBQyxjQUFEO0FBQWdCLFFBQUksRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBQVEsQ0FBQ1csUUFBVCxDQUFrQkMsR0FEckIsRUFFRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUV6QyxPQUFoQjtBQUF5QixRQUFJLEVBQUVDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0EvQkQ7O0lBQU0yQixXO1VBQ2FFLHNFOzs7TUFEYkYsVztBQWlDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC5jNjg1NDlhMjE0MjIxY2ZhMTczMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlU29ydEJ5IH0gZnJvbSAncmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHsgdXNlQm9vbWlBUEkgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvQm9vbWlBUElcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5jb25zdCBJbXBsZW1lbnRhdGlvbjogRkM8eyBuYW1lOiBzdHJpbmcgfT4gPSAoeyBuYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IHsgdGl0bGU6IG5hbWUsIGRlc2NyaXB0aW9uOiBgQW4gaW1wbG1lbnRhdGlvbiBvZiB0aGUgSFNXJ3MgQm9vbWkgQVBJICR7bmFtZX0gRnVuY3Rpb25hbGl0eWAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2BJbXBsZW1lbnRhdGlvbjogJHtuYW1lfSB8IEhTVyBCb29taSBBUElgfSBtZXRhPXttZXRhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+e25hbWV9IEltcGxlbWVudGF0aW9uczwvaDI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgVGFibGU6IEZDPHsgY29sdW1uczogYW55LCBkYXRhOiBhbnl9ID4gPSAoeyBjb2x1bW5zLCBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICByb3dzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICB9ID0gdXNlVGFibGUoXHJcbiAgICB7XHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gICAgdXNlU29ydEJ5XHJcbiAgKVxyXG5cclxuICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbmRlciBhbGwgMjAwMCByb3dzIGZvciB0aGlzIGV4YW1wbGUsIHNvIGNhcFxyXG4gIC8vIGl0IGF0IDIwIGZvciB0aGlzIHVzZSBjYXNlXHJcbiAgY29uc3QgZmlyc3RQYWdlUm93cyA9IHJvd3Muc2xpY2UoMCwgMjApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW46IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBzb3J0aW5nIHByb3BzIHRvIGNvbnRyb2wgc29ydGluZy4gRm9yIHRoaXMgZXhhbXBsZVxyXG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIGFkZCB0aGVtIGludG8gdGhlIGhlYWRlciBwcm9wc1xyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfT5cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnIPCflL0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyDwn5S8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtmaXJzdFBhZ2VSb3dzLm1hcChcclxuICAgICAgICAgICAgKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PntjZWxsLnJlbmRlcignQ2VsbCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXY+U2hvd2luZyB0aGUgZmlyc3QgMjAgcmVzdWx0cyBvZiB7cm93cy5sZW5ndGh9IHJvd3M8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3RvY2tMb29rdXA6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvb21pQVBJID0gdXNlQm9vbWlBUEkoKTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHsgXCJsb2NhdGlvbi1pZHNcIiA6IFtcIjEyMTAwXCIsIFwiMTIwNzdcIl0sIFwiU0tVc1wiIDogW1wiTFRXOTE0MVwiLFwiTFRXOTI1MlwiLFwiTFRXOTEzNVwiXSB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQXhpb3MucG9zdChgJHtib29taUFQSS5lbmRwb2ludC51cml9L3dzL3NpbXBsZS9nZXRQcm9kdWN0QXZhaWxhYmlsaXR5YCwgcGF5bG9hZClcclxuICAgICAgLnRoZW4ocmVzID0+IHNldFJlc3BvbnNlKHJlcy5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBzZXRFcnJvcihlcnIpKVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGZvciAoY29uc3QgYSBvZiBPYmplY3Qua2V5cyhKU09OLnBhcnNlKHJlc3BvbnNlKSkpIHtcclxuICAgICAgY29uc29sZS5sb2coYSlcclxuICAgIH1cclxuICAgIHJldHVybiBbIHtjb2wxOiBcImFcIiwgY29sMjogXCIxXCJ9LCB7Y29sMTogXCJiXCIsIGNvbDI6IFwiMlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiBbXHJcbiAgICAgIHsgSGVhZGVyOiAnQ29sdW1uIDEnLCBhY2Nlc3NvcjogJ2NvbDEnIH0sXHJcbiAgICAgIHsgSGVhZGVyOiAnQ29sdW1uIDInLCBhY2Nlc3NvcjogJ2NvbDInIH0sXHJcbiAgXSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICB7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfVxyXG4gICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvSW1wbGVtZW50YXRpb24+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tMb29rdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==