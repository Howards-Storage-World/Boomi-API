webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./components/tools/Table.tsx":
/*!************************************!*\
  !*** ./components/tools/Table.tsx ***!
  \************************************/
/*! exports provided: headers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/tools/Table.module.css */ "./components/tools/Table.module.css");
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\tools\\Table.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

/* eslint-disable max-lines-per-function, @typescript-eslint/no-explicit-any */




var Table = function Table(_ref) {
  _s();

  var columns = _ref.columns,
      data = _ref.data,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$getRowProps = _ref.getRowProps,
      getRowProps = _ref$getRowProps === void 0 ? function () {
    return null;
  } : _ref$getRowProps;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_4__["useBlockLayout"], react_table__WEBPACK_IMPORTED_MODULE_4__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_4__["useResizeColumns"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  return __jsx("table", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getTableProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.table,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("thead", {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.thead,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, headerGroup.getHeaderGroupProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, column.getHeaderProps(), {
          className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.th,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }), __jsx("span", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
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
            lineNumber: 41,
            columnNumber: 19
          }
        }), __jsx("div", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, column.getResizerProps(), {
          className: "".concat(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.resizer, " ").concat(column.isResizing ? _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.isResizing : ''),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 19
          }
        })))
      );
    }));
  })), __jsx("tbody", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getTableBodyProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tbody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), rows.map(function (row) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, row.getRowProps(getRowProps(row)), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, cell.getCellProps(), {
        className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.td,
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
  return [react_table__WEBPACK_IMPORTED_MODULE_4__["useTable"]];
});

_c = Table;

var getColumnWidth = function getColumnWidth(rows, accessor, headerText) {
  var maxWidth = 800;
  var magicSpacing = 15;
  var cellLength = Math.max.apply(Math, Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rows.map(function (row) {
    return ("".concat(row[accessor]) || '').length;
  })).concat([headerText.length]));
  return Math.min(maxWidth, cellLength * magicSpacing);
};

var headers = function headers(columns, data) {
  return columns.map(function (_ref2) {
    var _ref3 = Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 3),
        heading = _ref3[0],
        accessor = _ref3[1],
        width = _ref3[2];

    return {
      Header: heading,
      id: heading,
      accessor: accessor,
      width: width || getColumnWidth(data, accessor, heading)
    };
  });
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS50c3giXSwibmFtZXMiOlsiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInN0eWxlIiwiZ2V0Um93UHJvcHMiLCJ1c2VUYWJsZSIsInVzZUJsb2NrTGF5b3V0IiwidXNlU29ydEJ5IiwidXNlUmVzaXplQ29sdW1ucyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic3R5bGVzIiwidGFibGUiLCJ0aGVhZCIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsInRyIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwidGgiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsInJlbmRlciIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiZ2V0UmVzaXplclByb3BzIiwicmVzaXplciIsImlzUmVzaXppbmciLCJ0Ym9keSIsInJvdyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsInRkIiwiZ2V0Q29sdW1uV2lkdGgiLCJhY2Nlc3NvciIsImhlYWRlclRleHQiLCJtYXhXaWR0aCIsIm1hZ2ljU3BhY2luZyIsImNlbGxMZW5ndGgiLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwibWluIiwiaGVhZGluZyIsIndpZHRoIiwiSGVhZGVyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUErRyxHQUFHLFNBQWxIQSxLQUFrSCxPQUE4RDtBQUFBOztBQUFBLE1BQTNEQyxPQUEyRCxRQUEzREEsT0FBMkQ7QUFBQSxNQUFsREMsSUFBa0QsUUFBbERBLElBQWtEO0FBQUEsd0JBQTVDQyxLQUE0QztBQUFBLE1BQTVDQSxLQUE0QywyQkFBcEMsRUFBb0M7QUFBQSw4QkFBaENDLFdBQWdD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O0FBV1FoRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLjNjNjJmNTcxMzEwNDY0Mzg0MjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlU29ydEJ5LCB1c2VCbG9ja0xheW91dCwgdXNlUmVzaXplQ29sdW1ucywgQ29sdW1uIH0gZnJvbSAncmVhY3QtdGFibGUnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVGFibGU6IEZDPHsgY29sdW1uczogQ29sdW1uPGFueT5bXSwgZGF0YTogYW55W10sIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzLCBnZXRSb3dQcm9wczogKHJvdzogYW55KSA9PiBhbnkgfSA+ID0gKHsgY29sdW1ucywgZGF0YSwgc3R5bGUgPSB7fSwgZ2V0Um93UHJvcHMgPSAoKSA9PiBudWxsICB9KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgICBoZWFkZXJHcm91cHMsXHJcbiAgICAgIHJvd3MsXHJcbiAgICAgIHByZXBhcmVSb3csXHJcbiAgICB9ID0gdXNlVGFibGUoXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5zLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZUJsb2NrTGF5b3V0LFxyXG4gICAgICB1c2VTb3J0QnksXHJcbiAgICAgIHVzZVJlc2l6ZUNvbHVtbnNcclxuICAgIClcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPXtzdHlsZXMudGhlYWR9PlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRyfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbjogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHNvcnRpbmcgcHJvcHMgdG8gY29udHJvbCBzb3J0aW5nLiBGb3IgdGhpcyBleGFtcGxlXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gYWRkIHRoZW0gaW50byB0aGUgaGVhZGVyIHByb3BzXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICcg8J+UvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRSZXNpemVyUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlc2l6ZXJ9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5pc1Jlc2l6aW5nID8gc3R5bGVzLmlzUmVzaXppbmcgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0gY2xhc3NOYW1lPXtzdHlsZXMudGJvZHl9PlxyXG4gICAgICAgICAge3Jvd3MubWFwKFxyXG4gICAgICAgICAgICAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcyhnZXRSb3dQcm9wcyhyb3cpKX0gY2xhc3NOYW1lPXtzdHlsZXMudHJ9PlxyXG4gICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfSBjbGFzc05hbWU9e3N0eWxlcy50ZH0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IChyb3dzOiBhbnlbXSwgYWNjZXNzb3I6IHN0cmluZyB8IG51bWJlciwgaGVhZGVyVGV4dDogc3RyaW5nIHwgYW55W10pID0+IHtcclxuICBjb25zdCBtYXhXaWR0aCA9IDgwMDtcclxuICBjb25zdCBtYWdpY1NwYWNpbmcgPSAxNTtcclxuICBcclxuICBjb25zdCBjZWxsTGVuZ3RoID0gTWF0aC5tYXgoXHJcbiAgICAuLi5yb3dzLm1hcChyb3cgPT4gKGAke3Jvd1thY2Nlc3Nvcl19YCB8fCAnJykubGVuZ3RoKSxcclxuICAgIGhlYWRlclRleHQubGVuZ3RoLFxyXG4gICk7XHJcbiAgcmV0dXJuIE1hdGgubWluKG1heFdpZHRoLCBjZWxsTGVuZ3RoICogbWFnaWNTcGFjaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcnM6IChjb2x1bW5zOiBhbnlbXVtdLCBkYXRhOiBhbnlbXSkgPT4gQ29sdW1uPGFueT5bXSA9IChjb2x1bW5zLCBkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGNvbHVtbnMubWFwKChbaGVhZGluZywgYWNjZXNzb3IsIHdpZHRoXSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgSGVhZGVyOiBoZWFkaW5nLFxyXG4gICAgICBpZDogaGVhZGluZyxcclxuICAgICAgYWNjZXNzb3I6IGFjY2Vzc29yLFxyXG4gICAgICB3aWR0aDogd2lkdGggfHwgZ2V0Q29sdW1uV2lkdGgoZGF0YSwgYWNjZXNzb3IsIGhlYWRpbmcpLFxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGU7Il0sInNvdXJjZVJvb3QiOiIifQ==