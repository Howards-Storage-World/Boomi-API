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
      style = _ref.style;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS50c3giXSwibmFtZXMiOlsiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInN0eWxlIiwidXNlVGFibGUiLCJ1c2VCbG9ja0xheW91dCIsInVzZVNvcnRCeSIsInVzZVJlc2l6ZUNvbHVtbnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInN0eWxlcyIsInRhYmxlIiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwidHIiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJ0aCIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJnZXRSZXNpemVyUHJvcHMiLCJyZXNpemVyIiwiaXNSZXNpemluZyIsInJvdyIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwidGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBK0UsR0FBRyxTQUFsRkEsS0FBa0YsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFPOUdDLDREQUFRLENBQ1Y7QUFDRUgsV0FBTyxFQUFQQSxPQURGO0FBRUVDLFFBQUksRUFBSkE7QUFGRixHQURVLEVBS1ZHLDBEQUxVLEVBTVZDLHFEQU5VLEVBT1ZDLDREQVBVLENBUHNHO0FBQUEsTUFFaEhDLGFBRmdILGFBRWhIQSxhQUZnSDtBQUFBLE1BR2hIQyxpQkFIZ0gsYUFHaEhBLGlCQUhnSDtBQUFBLE1BSWhIQyxZQUpnSCxhQUloSEEsWUFKZ0g7QUFBQSxNQUtoSEMsSUFMZ0gsYUFLaEhBLElBTGdIO0FBQUEsTUFNaEhDLFVBTmdILGFBTWhIQSxVQU5nSDs7QUFpQmxILFNBQ0Usa0lBQVdKLGFBQWEsRUFBeEI7QUFBNEIsYUFBUyxFQUFFSyx5RUFBTSxDQUFDQyxLQUE5QztBQUFxRCxTQUFLLEVBQUVYLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dPLFlBQVksQ0FBQ0ssR0FBYixDQUFpQixVQUFBQyxXQUFXO0FBQUEsV0FDM0IsK0hBQVFBLFdBQVcsQ0FBQ0MsbUJBQVosRUFBUjtBQUE0QyxlQUFTLEVBQUVKLHlFQUFNLENBQUNLLEVBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDR0YsV0FBVyxDQUFDRyxPQUFaLENBQW9CSixHQUFwQixDQUF3QixVQUFDSyxNQUFEO0FBQUEsYUFDdkI7QUFDQTtBQUNBLHVJQUFRQSxNQUFNLENBQUNDLGNBQVAsRUFBUjtBQUFrQyxtQkFBUyxFQUFFUix5RUFBTSxDQUFDUyxFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ0ksaUlBQVVGLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkQsTUFBTSxDQUFDRyxvQkFBUCxFQUF0QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDR0gsTUFBTSxDQUFDSSxNQUFQLENBQWMsUUFBZCxDQURILEVBRUdKLE1BQU0sQ0FBQ0ssUUFBUCxHQUNDTCxNQUFNLENBQUNNLFlBQVAsR0FDRSxLQURGLEdBRUUsS0FISCxHQUlDLEVBTkosQ0FESixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFWRixFQWFFLGdJQUNRTixNQUFNLENBQUNPLGVBQVAsRUFEUjtBQUVJLG1CQUFTLFlBQUtkLHlFQUFNLENBQUNlLE9BQVosY0FDUFIsTUFBTSxDQUFDUyxVQUFQLEdBQW9CaEIseUVBQU0sQ0FBQ2dCLFVBQTNCLEdBQXdDLEVBRGpDLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWJGO0FBSHVCO0FBQUEsS0FBeEIsQ0FESCxDQUQyQjtBQUFBLEdBQTVCLENBREgsQ0FERixFQStCRSxrSUFBV3BCLGlCQUFpQixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dFLElBQUksQ0FBQ0ksR0FBTCxDQUNDLFVBQUNlLEdBQUQsRUFBUztBQUNQbEIsY0FBVSxDQUFDa0IsR0FBRCxDQUFWO0FBQ0EsV0FDRSwrSEFBUUEsR0FBRyxDQUFDQyxXQUFKLEVBQVI7QUFBNEIsZUFBUyxFQUFFbEIseUVBQU0sQ0FBQ0ssRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNHWSxHQUFHLENBQUNFLEtBQUosQ0FBVWpCLEdBQVYsQ0FBYyxVQUFBa0IsSUFBSSxFQUFJO0FBQ3JCLGFBQ0UsK0hBQVFBLElBQUksQ0FBQ0MsWUFBTCxFQUFSO0FBQThCLGlCQUFTLEVBQUVyQix5RUFBTSxDQUFDc0IsRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFxREYsSUFBSSxDQUFDVCxNQUFMLENBQVksTUFBWixDQUFyRCxDQURGO0FBR0QsS0FKQSxDQURILENBREY7QUFRRSxHQVhMLENBREgsQ0EvQkYsQ0FERjtBQWlESCxDQWxFRDs7R0FBTXhCLEs7VUFPRUksb0Q7OztLQVBGSixLO0FBb0VTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLjFkZGRjMGNkMTljZmNhMGJiODU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlU29ydEJ5LCB1c2VCbG9ja0xheW91dCwgdXNlUmVzaXplQ29sdW1ucywgQ29sdW1uIH0gZnJvbSAncmVhY3QtdGFibGUnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVGFibGU6IEZDPHsgY29sdW1uczogQ29sdW1uPGFueT5bXSwgZGF0YTogYW55W10sIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIH0gPiA9ICh7IGNvbHVtbnMsIGRhdGEsIHN0eWxlIH0pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgIGhlYWRlckdyb3VwcyxcclxuICAgICAgcm93cyxcclxuICAgICAgcHJlcGFyZVJvdyxcclxuICAgIH0gPSB1c2VUYWJsZShcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSxcclxuICAgICAgdXNlQmxvY2tMYXlvdXQsXHJcbiAgICAgIHVzZVNvcnRCeSxcclxuICAgICAgdXNlUmVzaXplQ29sdW1uc1xyXG4gICAgKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50cn0+XHJcbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW46IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBzb3J0aW5nIHByb3BzIHRvIGNvbnRyb2wgc29ydGluZy4gRm9yIHRoaXMgZXhhbXBsZVxyXG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIGFkZCB0aGVtIGludG8gdGhlIGhlYWRlciBwcm9wc1xyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRofT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnIPCflL0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyDwn5S8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBBZGQgYSBzb3J0IGRpcmVjdGlvbiBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0UmVzaXplclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5yZXNpemVyfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uaXNSZXNpemluZyA/IHN0eWxlcy5pc1Jlc2l6aW5nIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3Jvd3MubWFwKFxyXG4gICAgICAgICAgICAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudHJ9PlxyXG4gICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudGR9PntjZWxsLnJlbmRlcignQ2VsbCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGU7Il0sInNvdXJjZVJvb3QiOiIifQ==