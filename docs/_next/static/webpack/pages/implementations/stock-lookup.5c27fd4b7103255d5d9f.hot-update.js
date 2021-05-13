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



var Table = function Table(_ref) {
  _s();

  var columns = _ref.columns,
      data = _ref.data;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_2__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_2__["useResizeColumns"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case


  var firstPageRows = rows.slice(0, 20);
  return __jsx("table", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
          className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }
        }), column.render('Header'), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 19
          }
        }, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''), __jsx("div", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getResizerProps(), {
          className: "resizer ".concat(column.isResizing ? 'isResizing' : ''),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 19
          }
        })))
      );
    }));
  })), __jsx("tbody", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), firstPageRows.map(function (row, i) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
        className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS50c3giXSwibmFtZXMiOlsiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInVzZVRhYmxlIiwidXNlU29ydEJ5IiwidXNlUmVzaXplQ29sdW1ucyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwiZmlyc3RQYWdlUm93cyIsInNsaWNlIiwic3R5bGVzIiwidGFibGUiLCJtYXAiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJ0ciIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwidGgiLCJyZW5kZXIiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsImdldFJlc2l6ZXJQcm9wcyIsImlzUmVzaXppbmciLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJ0ZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQXNDLEdBQUcsU0FBekNBLEtBQXlDLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFPOURDLDREQUFRLENBQ1Y7QUFDRUYsV0FBTyxFQUFQQSxPQURGO0FBRUVDLFFBQUksRUFBSkE7QUFGRixHQURVLEVBS1ZFLHFEQUxVLEVBTVZDLDREQU5VLENBUHNEO0FBQUEsTUFFaEVDLGFBRmdFLGFBRWhFQSxhQUZnRTtBQUFBLE1BR2hFQyxpQkFIZ0UsYUFHaEVBLGlCQUhnRTtBQUFBLE1BSWhFQyxZQUpnRSxhQUloRUEsWUFKZ0U7QUFBQSxNQUtoRUMsSUFMZ0UsYUFLaEVBLElBTGdFO0FBQUEsTUFNaEVDLFVBTmdFLGFBTWhFQSxVQU5nRSxFQWdCbEU7QUFDQTs7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBVyxDQUFYLEVBQWMsRUFBZCxDQUF0QjtBQUVBLFNBQ0Usa0lBQVdOLGFBQWEsRUFBeEI7QUFBNEIsYUFBUyxFQUFFTyx5RUFBTSxDQUFDQyxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixZQUFZLENBQUNPLEdBQWIsQ0FBaUIsVUFBQUMsV0FBVztBQUFBLFdBQzNCLCtIQUFRQSxXQUFXLENBQUNDLG1CQUFaLEVBQVI7QUFBNEMsZUFBUyxFQUFFSix5RUFBTSxDQUFDSyxFQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0dGLFdBQVcsQ0FBQ0csT0FBWixDQUFvQkosR0FBcEIsQ0FBd0IsVUFBQ0ssTUFBRDtBQUFBLGFBQ3ZCO0FBQ0E7QUFDQSx1SUFBUUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCRCxNQUFNLENBQUNFLG9CQUFQLEVBQXRCLENBQVI7QUFBK0QsbUJBQVMsRUFBRVQseUVBQU0sQ0FBQ1UsRUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNHSCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxRQUFkLENBREgsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dKLE1BQU0sQ0FBQ0ssUUFBUCxHQUNHTCxNQUFNLENBQUNNLFlBQVAsR0FDRSxLQURGLEdBRUUsS0FITCxHQUlHLEVBTE4sQ0FIRixFQVVFLGdJQUNRTixNQUFNLENBQUNPLGVBQVAsRUFEUjtBQUVJLG1CQUFTLG9CQUNQUCxNQUFNLENBQUNRLFVBQVAsR0FBb0IsWUFBcEIsR0FBbUMsRUFENUIsQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVkY7QUFIdUI7QUFBQSxLQUF4QixDQURILENBRDJCO0FBQUEsR0FBNUIsQ0FESCxDQURGLEVBNEJFLGtJQUFXckIsaUJBQWlCLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR0ksYUFBYSxDQUFDSSxHQUFkLENBQ0MsVUFBQ2MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDVnBCLGNBQVUsQ0FBQ21CLEdBQUQsQ0FBVjtBQUNBLFdBQ0UsK0hBQVFBLEdBQUcsQ0FBQ0UsV0FBSixFQUFSO0FBQTRCLGVBQVMsRUFBRWxCLHlFQUFNLENBQUNLLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDR1csR0FBRyxDQUFDRyxLQUFKLENBQVVqQixHQUFWLENBQWMsVUFBQWtCLElBQUksRUFBSTtBQUNyQixhQUNFLCtIQUFRQSxJQUFJLENBQUNDLFlBQUwsRUFBUjtBQUE4QixpQkFBUyxFQUFFckIseUVBQU0sQ0FBQ3NCLEVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBcURGLElBQUksQ0FBQ1QsTUFBTCxDQUFZLE1BQVosQ0FBckQsQ0FERjtBQUdELEtBSkEsQ0FESCxDQURGO0FBUUUsR0FYTCxDQURILENBNUJGLENBREY7QUE4Q0gsQ0FsRUQ7O0dBQU14QixLO1VBT0VHLG9EOzs7S0FQRkgsSztBQW9FU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC41YzI3ZmQ0YjcxMDMyNTVkNWQ5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVNvcnRCeSwgdXNlUmVzaXplQ29sdW1ucyB9IGZyb20gJ3JlYWN0LXRhYmxlJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFRhYmxlOiBGQzx7IGNvbHVtbnM6IGFueSwgZGF0YTogYW55fSA+ID0gKHsgY29sdW1ucywgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgIHJvd3MsXHJcbiAgICAgIHByZXBhcmVSb3csXHJcbiAgICB9ID0gdXNlVGFibGUoXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5zLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZVNvcnRCeSxcclxuICAgICAgdXNlUmVzaXplQ29sdW1uc1xyXG4gICAgKVxyXG4gIFxyXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byByZW5kZXIgYWxsIDIwMDAgcm93cyBmb3IgdGhpcyBleGFtcGxlLCBzbyBjYXBcclxuICAgIC8vIGl0IGF0IDIwIGZvciB0aGlzIHVzZSBjYXNlXHJcbiAgICBjb25zdCBmaXJzdFBhZ2VSb3dzID0gcm93cy5zbGljZSgwLCAyMClcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRyfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbjogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHNvcnRpbmcgcHJvcHMgdG8gY29udHJvbCBzb3J0aW5nLiBGb3IgdGhpcyBleGFtcGxlXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gYWRkIHRoZW0gaW50byB0aGUgaGVhZGVyIHByb3BzXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9ICBjbGFzc05hbWU9e3N0eWxlcy50aH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuICAgICAgICAgICAgICAgICAgey8qIEFkZCBhIHNvcnQgZGlyZWN0aW9uIGluZGljYXRvciAqL31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRSZXNpemVyUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlc2l6ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzUmVzaXppbmcgPyAnaXNSZXNpemluZycgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgICB7Zmlyc3RQYWdlUm93cy5tYXAoXHJcbiAgICAgICAgICAgIChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50cn0+XHJcbiAgICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50ZH0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTsiXSwic291cmNlUm9vdCI6IiJ9