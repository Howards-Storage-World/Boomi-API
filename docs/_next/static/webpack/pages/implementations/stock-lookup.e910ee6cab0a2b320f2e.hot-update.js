webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./components/tools/Table.tsx":
/*!************************************!*\
  !*** ./components/tools/Table.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/tools/Table.module.css */ "./components/tools/Table.module.css");
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\dev\\Boomi-API\\components\\tools\\Table.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable max-lines-per-function, @typescript-eslint/no-explicit-any */




var Table = function Table(_ref) {
  _s();

  var columns = _ref.columns,
      data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_2__["useBlockLayout"], react_table__WEBPACK_IMPORTED_MODULE_2__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_2__["useResizeColumns"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  return __jsx("table", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("thead", {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.thead,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(), {
          className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }), __jsx("span", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }
        }), column.render('Header'), column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 19
          }
        }), __jsx("div", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getResizerProps(), {
          className: "".concat(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resizer, " ").concat(column.isResizing ? _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.isResizing : ''),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }
        })))
      );
    }));
  })), __jsx("tbody", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tbody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), rows.map(function (row) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
        className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 23
        }
      }), cell.render('Cell'));
    }));
  })));
};

_s(Table, "OJj1dHRwcT5lX75qp47EC5rQD0M=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"]];
});

_c = Table;
/* harmony default export */ __webpack_exports__["default"] = (Table);

var _c;

$RefreshReg$(_c, "Table");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS50c3giXSwibmFtZXMiOlsiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInN0eWxlIiwidXNlVGFibGUiLCJ1c2VCbG9ja0xheW91dCIsInVzZVNvcnRCeSIsInVzZVJlc2l6ZUNvbHVtbnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInN0eWxlcyIsInRhYmxlIiwidGhlYWQiLCJtYXAiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJ0ciIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInRoIiwiZ2V0U29ydEJ5VG9nZ2xlUHJvcHMiLCJyZW5kZXIiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsImdldFJlc2l6ZXJQcm9wcyIsInJlc2l6ZXIiLCJpc1Jlc2l6aW5nIiwidGJvZHkiLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsInRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQStFLEdBQUcsU0FBbEZBLEtBQWtGLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLE9BQWdDLFFBQWhDQSxPQUFnQztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSx3QkFBakJDLEtBQWlCO0FBQUEsTUFBakJBLEtBQWlCLDJCQUFULEVBQVM7O0FBQUEsa0JBT25IQyw0REFBUSxDQUNWO0FBQ0VILFdBQU8sRUFBUEEsT0FERjtBQUVFQyxRQUFJLEVBQUpBO0FBRkYsR0FEVSxFQUtWRywwREFMVSxFQU1WQyxxREFOVSxFQU9WQyw0REFQVSxDQVAyRztBQUFBLE1BRXJIQyxhQUZxSCxhQUVySEEsYUFGcUg7QUFBQSxNQUdySEMsaUJBSHFILGFBR3JIQSxpQkFIcUg7QUFBQSxNQUlySEMsWUFKcUgsYUFJckhBLFlBSnFIO0FBQUEsTUFLckhDLElBTHFILGFBS3JIQSxJQUxxSDtBQUFBLE1BTXJIQyxVQU5xSCxhQU1ySEEsVUFOcUg7O0FBaUJ2SCxTQUNFLGtJQUFXSixhQUFhLEVBQXhCO0FBQTRCLGFBQVMsRUFBRUsseUVBQU0sQ0FBQ0MsS0FBOUM7QUFBcUQsU0FBSyxFQUFFWCxLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBTyxhQUFTLEVBQUVVLHlFQUFNLENBQUNFLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQUFDLFdBQVc7QUFBQSxXQUMzQiwrSEFBUUEsV0FBVyxDQUFDQyxtQkFBWixFQUFSO0FBQTRDLGVBQVMsRUFBRUwseUVBQU0sQ0FBQ00sRUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNHRixXQUFXLENBQUNHLE9BQVosQ0FBb0JKLEdBQXBCLENBQXdCLFVBQUNLLE1BQUQ7QUFBQSxhQUN2QjtBQUNBO0FBQ0EsdUlBQVFBLE1BQU0sQ0FBQ0MsY0FBUCxFQUFSO0FBQWtDLG1CQUFTLEVBQUVULHlFQUFNLENBQUNVLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDSSxpSUFBVUYsTUFBTSxDQUFDQyxjQUFQLENBQXNCRCxNQUFNLENBQUNHLG9CQUFQLEVBQXRCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNHSCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxRQUFkLENBREgsRUFFR0osTUFBTSxDQUFDSyxRQUFQLEdBQ0NMLE1BQU0sQ0FBQ00sWUFBUCxHQUNFLEtBREYsR0FFRSxLQUhILEdBSUMsRUFOSixDQURKLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVZGLEVBYUUsZ0lBQ1FOLE1BQU0sQ0FBQ08sZUFBUCxFQURSO0FBRUksbUJBQVMsWUFBS2YseUVBQU0sQ0FBQ2dCLE9BQVosY0FDUFIsTUFBTSxDQUFDUyxVQUFQLEdBQW9CakIseUVBQU0sQ0FBQ2lCLFVBQTNCLEdBQXdDLEVBRGpDLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWJGO0FBSHVCO0FBQUEsS0FBeEIsQ0FESCxDQUQyQjtBQUFBLEdBQTVCLENBREgsQ0FERixFQStCRSxrSUFBV3JCLGlCQUFpQixFQUE1QjtBQUFnQyxhQUFTLEVBQUVJLHlFQUFNLENBQUNrQixLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dwQixJQUFJLENBQUNLLEdBQUwsQ0FDQyxVQUFDZ0IsR0FBRCxFQUFTO0FBQ1BwQixjQUFVLENBQUNvQixHQUFELENBQVY7QUFDQSxXQUNFLCtIQUFRQSxHQUFHLENBQUNDLFdBQUosRUFBUjtBQUE0QixlQUFTLEVBQUVwQix5RUFBTSxDQUFDTSxFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0dhLEdBQUcsQ0FBQ0UsS0FBSixDQUFVbEIsR0FBVixDQUFjLFVBQUFtQixJQUFJLEVBQUk7QUFDckIsYUFDRSwrSEFBUUEsSUFBSSxDQUFDQyxZQUFMLEVBQVI7QUFBOEIsaUJBQVMsRUFBRXZCLHlFQUFNLENBQUN3QixFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXFERixJQUFJLENBQUNWLE1BQUwsQ0FBWSxNQUFaLENBQXJELENBREY7QUFHRCxLQUpBLENBREgsQ0FERjtBQVFFLEdBWEwsQ0FESCxDQS9CRixDQURGO0FBaURILENBbEVEOztHQUFNekIsSztVQU9FSSxvRDs7O0tBUEZKLEs7QUFvRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAuZTkxMGVlNmNhYjBhMmIzMjBmMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1saW5lcy1wZXItZnVuY3Rpb24sIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VTb3J0QnksIHVzZUJsb2NrTGF5b3V0LCB1c2VSZXNpemVDb2x1bW5zLCBDb2x1bW4gfSBmcm9tICdyZWFjdC10YWJsZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAY29tcG9uZW50cy90b29scy9UYWJsZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBUYWJsZTogRkM8eyBjb2x1bW5zOiBDb2x1bW48YW55PltdLCBkYXRhOiBhbnlbXSwgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgfSA+ID0gKHsgY29sdW1ucywgZGF0YSwgc3R5bGUgPSB7fSB9KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgIHJvd3MsXHJcbiAgICAgIHByZXBhcmVSb3csXHJcbiAgICB9ID0gdXNlVGFibGUoXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5zLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZUJsb2NrTGF5b3V0LFxyXG4gICAgICB1c2VTb3J0QnksXHJcbiAgICAgIHVzZVJlc2l6ZUNvbHVtbnNcclxuICAgIClcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPXtzdHlsZXMudGhlYWR9PlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRyfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbjogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHNvcnRpbmcgcHJvcHMgdG8gY29udHJvbCBzb3J0aW5nLiBGb3IgdGhpcyBleGFtcGxlXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gYWRkIHRoZW0gaW50byB0aGUgaGVhZGVyIHByb3BzXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICcg8J+UvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgey8qIEFkZCBhIHNvcnQgZGlyZWN0aW9uIGluZGljYXRvciAqL31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRSZXNpemVyUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlc2l6ZXJ9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5pc1Jlc2l6aW5nID8gc3R5bGVzLmlzUmVzaXppbmcgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0gY2xhc3NOYW1lPXtzdHlsZXMudGJvZHl9PlxyXG4gICAgICAgICAge3Jvd3MubWFwKFxyXG4gICAgICAgICAgICAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudHJ9PlxyXG4gICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudGR9PntjZWxsLnJlbmRlcignQ2VsbCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGU7Il0sInNvdXJjZVJvb3QiOiIifQ==