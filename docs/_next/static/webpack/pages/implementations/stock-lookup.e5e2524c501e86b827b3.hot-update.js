webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./components/tools/Table.module.css":
/*!*******************************************!*\
  !*** ./components/tools/Table.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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
  }, react_table__WEBPACK_IMPORTED_MODULE_2__["useBlockLayout"], react_table__WEBPACK_IMPORTED_MODULE_2__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_2__["useResizeColumns"]),
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
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
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
            lineNumber: 35,
            columnNumber: 17
          }
        }), __jsx("span", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }
        }), column.render('Header'), column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }
        }), __jsx("div", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getResizerProps(), {
          className: "".concat(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resizer, " ").concat(column.isResizing ? _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.isResizing : ''),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }
        })))
      );
    }));
  })), __jsx("tbody", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), firstPageRows.map(function (row, i) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
        className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/Table.module.css":
/*!*******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/tools/Table.module.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* padding: 1rem; */\r\n\r\n\r\n/* Table Rounding */\r\n.Table_th__6w9tE:first-of-type {\r\n    border-top-left-radius: 10px;\r\n}\r\n.Table_th__6w9tE:last-of-type {\r\n    border-top-right-radius: 10px;\r\n}\r\n.Table_tr__2DL9c:last-of-type td:first-of-type {\r\n    border-bottom-left-radius: 10px;\r\n}\r\n.Table_tr__2DL9c:last-of-type td:last-of-type {\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.Table_table__1EC6b {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n    border: 1px solid black;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tr__2DL9c:last-child .Table_td__1oCl7 {\r\n    border-bottom: 0;\r\n}\r\n\r\n.Table_th__6w9tE, .Table_td__1oCl7 {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid black;\r\n    border-right: 1px solid black;\r\n    position: relative;\r\n}\r\n.Table_th__6w9tE:last-child, .Table_td__1oCl7:last-child {\r\n    border-right: 0;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN, .Table_td__1oCl7 .Table_resizer__2AqsN {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translateX(50%);\r\n            transform: translateX(50%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN .Table_isResizing__W_zI5, .Table_td__1oCl7 .Table_resizer__2AqsN .Table_isResizing__W_zI5 {\r\n    background: red;\r\n}", "",{"version":3,"sources":["webpack://components/tools/Table.module.css"],"names":[],"mappings":"AAAA,mBAAmB;;;AAGnB,mBAAmB;AACnB;IACI,4BAA4B;AAChC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,8BAA8B;IAC9B,6BAA6B;IAC7B,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,kCAA0B;YAA1B,0BAA0B;IAC1B,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* padding: 1rem; */\r\n\r\n\r\n/* Table Rounding */\r\n.th:first-of-type {\r\n    border-top-left-radius: 10px;\r\n}\r\n.th:last-of-type {\r\n    border-top-right-radius: 10px;\r\n}\r\n.tr:last-of-type td:first-of-type {\r\n    border-bottom-left-radius: 10px;\r\n}\r\n.tr:last-of-type td:last-of-type {\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.table {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n    border: 1px solid black;\r\n}\r\n\r\n.table .tr:last-child .td {\r\n    border-bottom: 0;\r\n}\r\n\r\n.th, .td {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid black;\r\n    border-right: 1px solid black;\r\n    position: relative;\r\n}\r\n.th:last-child, .td:last-child {\r\n    border-right: 0;\r\n}\r\n\r\n.th .resizer, .td .resizer {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transform: translateX(50%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.th .resizer .isResizing, .td .resizer .isResizing {\r\n    background: red;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"th": "Table_th__6w9tE",
	"tr": "Table_tr__2DL9c",
	"table": "Table_table__1EC6b",
	"td": "Table_td__1oCl7",
	"resizer": "Table_resizer__2AqsN",
	"isResizing": "Table_isResizing__W_zI5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  undefined;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultRenderer = function defaultRenderer(_ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
    return value;
  };
  var emptyRenderer = function emptyRenderer() {
    return React.createElement(React.Fragment, null, "\xA0");
  };
  var defaultColumn = {
    Cell: defaultRenderer,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: emptyRenderer,
      Footer: emptyRenderer
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    Object.assign(column, {
      originalWidth: column.width
    });
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
    if (additionalHeaderProperties === void 0) {
      additionalHeaderProperties = function additionalHeaderProperties() {
        return {};
      };
    }

    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            }, additionalHeaderProperties(column));
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn(_extends({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, additionalHeaderProperties(column)), defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row, addToExpandedRows) {
      if (addToExpandedRows === void 0) {
        addToExpandedRows = true;
      }

      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;

      if (addToExpandedRows) {
        expandedRows.push(row);
      }

      if (row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(function (row) {
          return handleRow(row, expandSubRows);
        });
      }
    };

    rows.forEach(function (row) {
      return handleRow(row);
    });
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var isAllRowsExpanded = instance.isAllRowsExpanded,
          rowsById = instance.rowsById;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = values[0] || 0;
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var mid = Math.floor(values.length / 2);
    var nums = [].concat(values).sort(function (a, b) {
      return a - b;
    });
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.setGroupBy = 'setGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.setGroupBy) {
      var value = action.value;
      return _extends({}, state, {
        groupBy: value
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setGroupBy = React.useCallback(function (value) {
      dispatch({
        type: actions.setGroupBy,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Aggregate the values


          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            // Get the columnValues to aggregate
            var groupedValues = groupedRows.map(function (row) {
              return row.values[column.id];
            }); // Get the columnValues to aggregate

            var leafValues = leafRows.map(function (row) {
              var columnValue = row.values[column.id];

              if (!depth && column.aggregateValue) {
                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

                if (!aggregateValueFn) {
                  console.info({
                    column: column
                  });
                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                }

                columnValue = aggregateValueFn(columnValue, row, column);
              }

              return columnValue;
            });
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows;
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy,
      setGroupBy: setGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      var _row$subRows;

      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var _getRowValuesByColumn = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn[0],
        b = _getRowValuesByColumn[1]; // Force to strings (or "" for unsupported types)


    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var _getRowValuesByColumn2 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn2[0],
        b = _getRowValuesByColumn2[1];

    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var _getRowValuesByColumn3 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn3[0],
        b = _getRowValuesByColumn3[1];

    return compareBasic(a, b);
  }
  function string(rowA, rowB, columnId) {
    var _getRowValuesByColumn4 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn4[0],
        b = _getRowValuesByColumn4[1];

    a = a.split('').filter(Boolean);
    b = b.split('').filter(Boolean);

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var alower = aa.toLowerCase();
      var blower = bb.toLowerCase(); // Case insensitive comparison until characters match

      if (alower > blower) {
        return 1;
      }

      if (blower > alower) {
        return -1;
      } // If lowercase characters are identical


      if (aa > bb) {
        return 1;
      }

      if (bb > aa) {
        return -1;
      }

      continue;
    }

    return a.length - b.length;
  }
  function number(rowA, rowB, columnId) {
    var _getRowValuesByColumn5 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn5[0],
        b = _getRowValuesByColumn5[1];

    var replaceNonNumeric = /[^0-9.]/gi;
    a = Number(String(a).replace(replaceNonNumeric, ''));
    b = Number(String(b).replace(replaceNonNumeric, ''));
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValuesByColumnID(row1, row2, columnId) {
    return [row1.values[columnId], row2.values[columnId]];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic,
    string: string,
    number: number
  });

  actions.resetSortBy = 'resetSortBy';
  actions.setSortBy = 'setSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.setSortBy) {
      var _sortBy = action.sortBy;
      return _extends({}, state, {
        sortBy: _sortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy2 = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy2.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy2.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy2, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy2.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy2.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
    var setSortBy = React.useCallback(function (sortBy) {
      dispatch({
        type: actions.setSortBy,
        sortBy: sortBy
      });
    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length === 0) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      setSortBy: setSortBy,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllPageRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllPageRowsSelected,
      title: 'Toggle All Current Page Rows Selected',
      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
        var id = _ref4.id;
        return instance.state.selectedRowIds[id];
      }))
    }];
  }; // eslint-disable-next-line max-params


  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
          getSubRows = instance.getSubRows;
      var isSelected = state.selectedRowIds[id];
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[id] = true;
          } else {
            delete newSelectedRowIds[id];
          }
        }

        if (selectSubRows && getSubRows(row)) {
          return getSubRows(row).forEach(function (row) {
            return handleRowById(row.id);
          });
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }

    if (action.type === actions.toggleAllPageRowsSelected) {
      var _setSelected2 = action.value;

      var page = instance.page,
          _rowsById2 = instance.rowsById,
          _instance$selectSubRo2 = instance.selectSubRows,
          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
          isAllPageRowsSelected = instance.isAllPageRowsSelected,
          _getSubRows = instance.getSubRows;

      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

      var _handleRowById = function _handleRowById(id) {
        var row = _rowsById2[id];

        if (!row.isGrouped) {
          if (_selectAll) {
            _newSelectedRowIds[id] = true;
          } else {
            delete _newSelectedRowIds[id];
          }
        }

        if (_selectSubRows && _getSubRows(row)) {
          return _getSubRows(row).forEach(function (row) {
            return _handleRowById(row.id);
          });
        }
      };

      page.forEach(function (row) {
        return _handleRowById(row.id);
      });
      return _extends({}, state, {
        selectedRowIds: _newSelectedRowIds
      });
    }

    return state;
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo3 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
        dispatch = instance.dispatch,
        page = instance.page,
        getSubRows = instance.getSubRows;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
    var isAllPageRowsSelected = isAllRowsSelected;

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    if (!isAllRowsSelected) {
      if (page && page.length && page.some(function (_ref5) {
        var id = _ref5.id;
        return !selectedRowIds[id];
      })) {
        isAllPageRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleAllPageRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllPageRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      isAllPageRowsSelected: isAllPageRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
      toggleAllPageRowsSelected: toggleAllPageRowsSelected
    });
  }

  function prepareRow$3(row, _ref6) {
    var instance = _ref6.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds, getSubRows) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    var subRows = getSubRows(row);

    if (subRows && subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
        return cell.column.id === columnId;
      }));
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

      var dispatchMove = function dispatchMove(clientXPos) {
        dispatch({
          type: actions.columnResizing,
          clientX: clientXPos
        });
      };

      var dispatchEnd = function dispatchEnd() {
        return dispatch({
          type: actions.columnDoneResizing
        });
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return dispatchMove(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            dispatchMove(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        columnResizing: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;

      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(instance) {
    var plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetRe = instance.autoResetResize,
        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
        columns = instance.columns;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
    var getAutoResetResize = useGetLatest(autoResetResize);
    useMountedLayoutEffect(function () {
      if (getAutoResetResize()) {
        dispatch({
          type: actions.resetResize
        });
      }
    }, [columns]);
    var resetResizing = React.useCallback(function () {
      return dispatch({
        type: actions.resetResize
      });
    }, [dispatch]);
    Object.assign(instance, {
      resetResizing: resetResizing
    });
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  function useGridLayout(hooks) {
    hooks.stateReducers.push(reducer$c);
    hooks.getTableProps.push(getTableProps$1);
    hooks.getHeaderProps.push(getHeaderProps$1);
  }
  useGridLayout.pluginName = 'useGridLayout';

  var getTableProps$1 = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: "grid",
        gridTemplateColumns: instance.state.gridLayout.columnWidths.map(function (w) {
          return w;
        }).join(" ")
      }
    }];
  };

  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      id: "header-cell-" + column.id,
      style: {
        position: "sticky" //enables a scroll wrapper to be placed around the table and have sticky headers

      }
    }];
  };

  function reducer$c(state, action, previousState, instance) {
    if (action.type === "init") {
      return _extends({
        gridLayout: {
          columnWidths: instance.columns.map(function () {
            return "auto";
          })
        }
      }, state);
    }

    if (action.type === "columnStartResizing") {
      var columnId = action.columnId;
      var columnIndex = instance.visibleColumns.findIndex(function (col) {
        return col.id === columnId;
      });
      var elWidth = getElementWidth(columnId);

      if (elWidth !== undefined) {
        return _extends({}, state, {
          gridLayout: _extends({}, state.gridLayout, {
            columnId: columnId,
            columnIndex: columnIndex,
            startingWidth: elWidth
          })
        });
      } else {
        return state;
      }
    }

    if (action.type === "columnResizing") {
      var _state$gridLayout = state.gridLayout,
          _columnIndex = _state$gridLayout.columnIndex,
          startingWidth = _state$gridLayout.startingWidth,
          columnWidths = _state$gridLayout.columnWidths;
      var change = state.columnResizing.startX - action.clientX;
      var newWidth = startingWidth - change;
      var columnWidthsCopy = [].concat(columnWidths);
      columnWidthsCopy[_columnIndex] = newWidth + "px";
      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          columnWidths: columnWidthsCopy
        })
      });
    }
  }

  function getElementWidth(columnId) {
    var _document$getElementB;

    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

    if (width !== undefined) {
      return width;
    }
  }

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.defaultRenderer = defaultRenderer;
  exports.emptyRenderer = emptyRenderer;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGridLayout = useGridLayout;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ }),

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
      lineNumber: 94,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 83
    }
  }, "Error:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 131
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS5tb2R1bGUuY3NzP2FmYjIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9vbHMvVGFibGUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10YWJsZS9kaXN0L3JlYWN0LXRhYmxlLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAudHN4Il0sIm5hbWVzIjpbIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VUYWJsZSIsInVzZUJsb2NrTGF5b3V0IiwidXNlU29ydEJ5IiwidXNlUmVzaXplQ29sdW1ucyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwiZmlyc3RQYWdlUm93cyIsInNsaWNlIiwic3R5bGVzIiwidGFibGUiLCJtYXAiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJ0ciIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInRoIiwiZ2V0U29ydEJ5VG9nZ2xlUHJvcHMiLCJyZW5kZXIiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsImdldFJlc2l6ZXJQcm9wcyIsInJlc2l6ZXIiLCJpc1Jlc2l6aW5nIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwidGQiLCJJbXBsZW1lbnRhdGlvbiIsIm5hbWUiLCJjaGlsZHJlbiIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXRpbFN0eWxlcyIsImhlYWRpbmdMZyIsInVzZUxvYWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5kZWZpbmVkIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkIiwiZm4iLCJwYXlsb2FkIiwiaXNMb2FkaW5nIiwiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwibG9hZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsInVzZU1lbW8iLCJTb0giLCJyZXN1bHRzIiwic3RvcmUiLCJzdG9yZUlEIiwic3RvcmVOYW1lIiwiYXZhaWxhYmlsaXR5IiwicmVkdWNlIiwib2JqIiwiaXRlbSIsIm1zZyIsImJhc2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsInByb2R1Y3RzIiwiU2V0IiwiYWRkIiwia2V5cyIsInB1c2giLCJhY2Nlc29yIiwiaGVhZGluZ01kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsc05BQTJHO0FBQzdILDBCQUEwQixtQkFBTyxDQUFDLHNVQUE4Szs7QUFFaE47O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0Esa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQTtBQUNBLE1BQU0sc1VBQThLO0FBQ3BMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsc1VBQThLOztBQUV4TTs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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QUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDZGQUE2RixhQUFhO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7O0FBRWpDLG9EQUFvRDs7QUFFcEQscUNBQXFDLEVBQUU7O0FBRXZDLHdEQUF3RDs7QUFFeEQsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEOzs7QUFHN0QscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLDRDQUE0Qzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLHdDQUF3Qzs7O0FBR3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0wsOERBQThEO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUssSUFBSTs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsOENBQThDOztBQUU5QztBQUNBO0FBQ0EsS0FBSztBQUNMLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxxRUFBcUU7O0FBRXJFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLGlGQUFpRjtBQUNqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEIsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQsd0JBQXdCOztBQUV4Qiw2QkFBNkI7O0FBRTdCLDJCQUEyQjs7QUFFM0IsMkJBQTJCOztBQUUzQixnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFOztBQUViO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUIsK0JBQStCLGlDQUFpQztBQUNoRSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxjQUFjO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVDs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPLEVBQUU7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdY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Q0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVDs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7O0FBRUEsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VSxDQUFDaUQsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEUSxHQUVQMUMsUUFBUSxLQUFLRCxTQUFkLEdBQTRCLE1BQUMsK0RBQUQ7QUFBTyxXQUFPLEVBQUVqRCxPQUFoQjtBQUF5QixRQUFJLEVBQUVDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBNUIsR0FBd0UsbUVBQUU7QUFBSSxhQUFTLEVBQUUwQywrREFBVSxDQUFDaUQsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFGLEVBQWtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSXhDLEtBQUosQ0FBbEQsQ0FKNUUsQ0FERjtBQVNELENBM0REOztJQUFNTSxXO1VBQ2FFLHNFLEVBQzRCZixPOzs7TUFGekNhLFc7QUE2RFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAuZTVlMjUyNGM1MDFlODZiODI3YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vVGFibGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vVGFibGUubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1RhYmxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVNvcnRCeSwgdXNlQmxvY2tMYXlvdXQsIHVzZVJlc2l6ZUNvbHVtbnMgfSBmcm9tICdyZWFjdC10YWJsZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAY29tcG9uZW50cy90b29scy9UYWJsZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBUYWJsZTogRkM8eyBjb2x1bW5zOiBhbnksIGRhdGE6IGFueX0gPiA9ICh7IGNvbHVtbnMsIGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgICByb3dzLFxyXG4gICAgICBwcmVwYXJlUm93LFxyXG4gICAgfSA9IHVzZVRhYmxlKFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1ucyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICB9LFxyXG4gICAgICB1c2VCbG9ja0xheW91dCxcclxuICAgICAgdXNlU29ydEJ5LFxyXG4gICAgICB1c2VSZXNpemVDb2x1bW5zXHJcbiAgICApXHJcbiAgXHJcbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbmRlciBhbGwgMjAwMCByb3dzIGZvciB0aGlzIGV4YW1wbGUsIHNvIGNhcFxyXG4gICAgLy8gaXQgYXQgMjAgZm9yIHRoaXMgdXNlIGNhc2VcclxuICAgIGNvbnN0IGZpcnN0UGFnZVJvd3MgPSByb3dzLnNsaWNlKDAsIDIwKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudHJ9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgc29ydGluZyBwcm9wcyB0byBjb250cm9sIHNvcnRpbmcuIEZvciB0aGlzIGV4YW1wbGVcclxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBhZGQgdGhlbSBpbnRvIHRoZSBoZWFkZXIgcHJvcHNcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldFJlc2l6ZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVzaXplcn0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzUmVzaXppbmcgPyBzdHlsZXMuaXNSZXNpemluZyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtmaXJzdFBhZ2VSb3dzLm1hcChcclxuICAgICAgICAgICAgKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRyfT5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRkfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHBhZGRpbmc6IDFyZW07ICovXFxyXFxuXFxyXFxuXFxyXFxuLyogVGFibGUgUm91bmRpbmcgKi9cXHJcXG4uVGFibGVfdGhfXzZ3OXRFOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uVGFibGVfdGhfXzZ3OXRFOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uVGFibGVfdHJfXzJETDljOmxhc3Qtb2YtdHlwZSB0ZDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLlRhYmxlX3RyX18yREw5YzpsYXN0LW9mLXR5cGUgdGQ6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90YWJsZV9fMUVDNmIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdHJfXzJETDljOmxhc3QtY2hpbGQgLlRhYmxlX3RkX18xb0NsNyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90aF9fNnc5dEUsIC5UYWJsZV90ZF9fMW9DbDcge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uVGFibGVfdGhfXzZ3OXRFOmxhc3QtY2hpbGQsIC5UYWJsZV90ZF9fMW9DbDc6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RoX182dzl0RSAuVGFibGVfcmVzaXplcl9fMkFxc04sIC5UYWJsZV90ZF9fMW9DbDcgLlRhYmxlX3Jlc2l6ZXJfXzJBcXNOIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvdWNoLWFjdGlvbjpub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGhfXzZ3OXRFIC5UYWJsZV9yZXNpemVyX18yQXFzTiAuVGFibGVfaXNSZXNpemluZ19fV196STUsIC5UYWJsZV90ZF9fMW9DbDcgLlRhYmxlX3Jlc2l6ZXJfXzJBcXNOIC5UYWJsZV9pc1Jlc2l6aW5nX19XX3pJNSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvdG9vbHMvVGFibGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7OztBQUduQixtQkFBbUI7QUFDbkI7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBwYWRkaW5nOiAxcmVtOyAqL1xcclxcblxcclxcblxcclxcbi8qIFRhYmxlIFJvdW5kaW5nICovXFxyXFxuLnRoOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4udGg6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50cjpsYXN0LW9mLXR5cGUgdGQ6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50cjpsYXN0LW9mLXR5cGUgdGQ6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLnRyOmxhc3QtY2hpbGQgLnRkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRoLCAudGQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4udGg6bGFzdC1jaGlsZCwgLnRkOmxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi50aCAucmVzaXplciwgLnRkIC5yZXNpemVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3VjaC1hY3Rpb246bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoIC5yZXNpemVyIC5pc1Jlc2l6aW5nLCAudGQgLnJlc2l6ZXIgLmlzUmVzaXppbmcge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRoXCI6IFwiVGFibGVfdGhfXzZ3OXRFXCIsXG5cdFwidHJcIjogXCJUYWJsZV90cl9fMkRMOWNcIixcblx0XCJ0YWJsZVwiOiBcIlRhYmxlX3RhYmxlX18xRUM2YlwiLFxuXHRcInRkXCI6IFwiVGFibGVfdGRfXzFvQ2w3XCIsXG5cdFwicmVzaXplclwiOiBcIlRhYmxlX3Jlc2l6ZXJfXzJBcXNOXCIsXG5cdFwiaXNSZXNpemluZ1wiOiBcIlRhYmxlX2lzUmVzaXppbmdfX1dfekk1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLlJlYWN0VGFibGUgPSB7fSwgZ2xvYmFsLlJlYWN0KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cywgUmVhY3QpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIFJlYWN0ID0gUmVhY3QgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFJlYWN0LCAnZGVmYXVsdCcpID8gUmVhY3RbJ2RlZmF1bHQnXSA6IFJlYWN0O1xuXG4gIGZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG5cbiAgICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gICAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuXG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbiAgfVxuXG4gIHZhciByZW5kZXJFcnIgPSAnUmVuZGVyZXIgRXJyb3Ig4pid77iPJztcbiAgdmFyIGFjdGlvbnMgPSB7XG4gICAgaW5pdDogJ2luaXQnXG4gIH07XG4gIHZhciBkZWZhdWx0UmVuZGVyZXIgPSBmdW5jdGlvbiBkZWZhdWx0UmVuZGVyZXIoX3JlZikge1xuICAgIHZhciBfcmVmJHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgdmFsdWUgPSBfcmVmJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICB2YXIgZW1wdHlSZW5kZXJlciA9IGZ1bmN0aW9uIGVtcHR5UmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFwiXFx4QTBcIik7XG4gIH07XG4gIHZhciBkZWZhdWx0Q29sdW1uID0ge1xuICAgIENlbGw6IGRlZmF1bHRSZW5kZXJlcixcbiAgICB3aWR0aDogMTUwLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIG1heFdpZHRoOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICB9O1xuXG4gIGZ1bmN0aW9uIG1lcmdlUHJvcHMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BMaXN0ID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcHJvcExpc3RbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BMaXN0LnJlZHVjZShmdW5jdGlvbiAocHJvcHMsIG5leHQpIHtcbiAgICAgIHZhciBzdHlsZSA9IG5leHQuc3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gbmV4dC5jbGFzc05hbWUsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG5leHQsIFtcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICAgICAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHt9LCByZXN0KTtcblxuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHByb3BzLnN0eWxlID0gcHJvcHMuc3R5bGUgPyBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUgfHwge30sIHt9LCBzdHlsZSB8fCB7fSkgOiBzdHlsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWUgOiBjbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUgPT09ICcnKSB7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9LCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcm9wR2V0dGVyKHByZXZQcm9wcywgdXNlclByb3BzLCBtZXRhKSB7XG4gICAgLy8gSGFuZGxlIGEgbGFtYmRhLCBwYXNzIGl0IHRoZSBwcmV2aW91cyBwcm9wc1xuICAgIGlmICh0eXBlb2YgdXNlclByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaGFuZGxlUHJvcEdldHRlcih7fSwgdXNlclByb3BzKHByZXZQcm9wcywgbWV0YSkpO1xuICAgIH0gLy8gSGFuZGxlIGFuIGFycmF5LCBtZXJnZSBlYWNoIGl0ZW0gYXMgc2VwYXJhdGUgcHJvcHNcblxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclByb3BzKSkge1xuICAgICAgcmV0dXJuIG1lcmdlUHJvcHMuYXBwbHkodm9pZCAwLCBbcHJldlByb3BzXS5jb25jYXQodXNlclByb3BzKSk7XG4gICAgfSAvLyBIYW5kbGUgYW4gb2JqZWN0IGJ5IGRlZmF1bHQsIG1lcmdlIHRoZSB0d28gb2JqZWN0c1xuXG5cbiAgICByZXR1cm4gbWVyZ2VQcm9wcyhwcmV2UHJvcHMsIHVzZXJQcm9wcyk7XG4gIH1cblxuICB2YXIgbWFrZVByb3BHZXR0ZXIgPSBmdW5jdGlvbiBtYWtlUHJvcEdldHRlcihob29rcywgbWV0YSkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHVzZXJQcm9wcykge1xuICAgICAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVzZXJQcm9wcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW10uY29uY2F0KGhvb2tzLCBbdXNlclByb3BzXSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVQcm9wR2V0dGVyKHByZXYsIG5leHQsIF9leHRlbmRzKHt9LCBtZXRhLCB7XG4gICAgICAgICAgdXNlclByb3BzOiB1c2VyUHJvcHNcbiAgICAgICAgfSkpO1xuICAgICAgfSwge30pO1xuICAgIH07XG4gIH07XG4gIHZhciByZWR1Y2VIb29rcyA9IGZ1bmN0aW9uIHJlZHVjZUhvb2tzKGhvb2tzLCBpbml0aWFsLCBtZXRhLCBhbGxvd1VuZGVmaW5lZCkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3MucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgICB2YXIgbmV4dFZhbHVlID0gbmV4dChwcmV2LCBtZXRhKTtcblxuICAgICAge1xuICAgICAgICBpZiAoIWFsbG93VW5kZWZpbmVkICYmIHR5cGVvZiBuZXh0VmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKG5leHQpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgVGFibGU6IEEgcmVkdWNlciBob29rIOKYne+4jyBqdXN0IHJldHVybmVkIHVuZGVmaW5lZCEgVGhpcyBpcyBub3QgYWxsb3dlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgIH0sIGluaXRpYWwpO1xuICB9O1xuICB2YXIgbG9vcEhvb2tzID0gZnVuY3Rpb24gbG9vcEhvb2tzKGhvb2tzLCBjb250ZXh0LCBtZXRhKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICB2YXIgbmV4dFZhbHVlID0gaG9vayhjb250ZXh0LCBtZXRhKTtcblxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIG5leHRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oaG9vaywgbmV4dFZhbHVlKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IFRhYmxlOiBBIGxvb3AtdHlwZSBob29rIOKYne+4jyBqdXN0IHJldHVybmVkIGEgdmFsdWUhIFRoaXMgaXMgbm90IGFsbG93ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZnVuY3Rpb24gZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgYmVmb3JlcywgcGx1Z2luTmFtZSwgYWZ0ZXJzKSB7XG4gICAgaWYgKCBhZnRlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlZmluaW5nIHBsdWdpbnMgaW4gdGhlIFxcXCJhZnRlclxcXCIgc2VjdGlvbiBvZiBlbnN1cmVQbHVnaW5PcmRlciBpcyBubyBsb25nZXIgc3VwcG9ydGVkIChzZWUgcGx1Z2luIFwiICsgcGx1Z2luTmFtZSArIFwiKVwiKTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2luSW5kZXggPSBwbHVnaW5zLmZpbmRJbmRleChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICByZXR1cm4gcGx1Z2luLnBsdWdpbk5hbWUgPT09IHBsdWdpbk5hbWU7XG4gICAgfSk7XG5cbiAgICBpZiAocGx1Z2luSW5kZXggPT09IC0xKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwbHVnaW4gXFxcIlwiICsgcGx1Z2luTmFtZSArIFwiXFxcIiB3YXMgbm90IGZvdW5kIGluIHRoZSBwbHVnaW4gbGlzdCFcXG5UaGlzIHVzdWFsbHkgbWVhbnMgeW91IG5lZWQgdG8gbmVlZCB0byBuYW1lIHlvdXIgcGx1Z2luIGhvb2sgYnkgc2V0dGluZyB0aGUgJ3BsdWdpbk5hbWUnIHByb3BlcnR5IG9mIHRoZSBob29rIGZ1bmN0aW9uLCBlZzpcXG5cXG4gIFwiICsgcGx1Z2luTmFtZSArIFwiLnBsdWdpbk5hbWUgPSAnXCIgKyBwbHVnaW5OYW1lICsgXCInXFxuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJlZm9yZXMuZm9yRWFjaChmdW5jdGlvbiAoYmVmb3JlKSB7XG4gICAgICB2YXIgYmVmb3JlSW5kZXggPSBwbHVnaW5zLmZpbmRJbmRleChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4ucGx1Z2luTmFtZSA9PT0gYmVmb3JlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChiZWZvcmVJbmRleCA+IC0xICYmIGJlZm9yZUluZGV4ID4gcGx1Z2luSW5kZXgpIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0IFRhYmxlOiBUaGUgXCIgKyBwbHVnaW5OYW1lICsgXCIgcGx1Z2luIGhvb2sgbXVzdCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIFwiICsgYmVmb3JlICsgXCIgcGx1Z2luIGhvb2shXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZnVuY3Rpb25hbFVwZGF0ZSh1cGRhdGVyLCBvbGQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKG9sZCkgOiB1cGRhdGVyO1xuICB9XG4gIGZ1bmN0aW9uIHVzZUdldExhdGVzdChvYmopIHtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKCk7XG4gICAgcmVmLmN1cnJlbnQgPSBvYmo7XG4gICAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG4gIH0gLy8gU1NSIGhhcyBpc3N1ZXMgd2l0aCB1c2VMYXlvdXRFZmZlY3Qgc3RpbGwsIHNvIHVzZSB1c2VFZmZlY3QgZHVyaW5nIFNTUlxuXG4gIHZhciBzYWZlVXNlTGF5b3V0RWZmZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbiAgZnVuY3Rpb24gdXNlTW91bnRlZExheW91dEVmZmVjdChmbiwgZGVwcykge1xuICAgIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICBzYWZlVXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH1cblxuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSwgZGVwcyk7XG4gIH1cbiAgZnVuY3Rpb24gdXNlQXN5bmNEZWJvdW5jZShkZWZhdWx0Rm4sIGRlZmF1bHRXYWl0KSB7XG4gICAgaWYgKGRlZmF1bHRXYWl0ID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRXYWl0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgZGVib3VuY2VSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICAgIHZhciBnZXREZWZhdWx0Rm4gPSB1c2VHZXRMYXRlc3QoZGVmYXVsdEZuKTtcbiAgICB2YXIgZ2V0RGVmYXVsdFdhaXQgPSB1c2VHZXRMYXRlc3QoZGVmYXVsdFdhaXQpO1xuICAgIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoXG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICByZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgICAgdmFyIF9sZW4yLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIF9rZXkyLFxuICAgICAgICAgICAgX2FyZ3MyID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZm9yIChfbGVuMiA9IF9hcmdzMi5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gX2FyZ3MyW19rZXkyXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRlYm91bmNlUmVmLmN1cnJlbnQucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQudGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgICAgIF9hc3luY1RvR2VuZXJhdG9yKFxuICAgICAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgICAgICByZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBkZWJvdW5jZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldERlZmF1bHRGbigpLmFwcGx5KHZvaWQgMCwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDEgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwLnJlc29sdmUuY2FsbChfY29udGV4dC50MCwgX2NvbnRleHQudDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQyID0gX2NvbnRleHRbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZWplY3QoX2NvbnRleHQudDIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5maW5pc2goMTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1sxLCA5LCAxMiwgMTVdXSk7XG4gICAgICAgICAgICAgICAgfSkpLCBnZXREZWZhdWx0V2FpdCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIpO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpLCBbZ2V0RGVmYXVsdEZuLCBnZXREZWZhdWx0V2FpdF0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VSZW5kZXJlcihpbnN0YW5jZSwgY29sdW1uLCBtZXRhKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwgdXNlclByb3BzKSB7XG4gICAgICBpZiAodXNlclByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgdXNlclByb3BzID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciBDb21wID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gY29sdW1uW3R5cGVdIDogdHlwZTtcblxuICAgICAgaWYgKHR5cGVvZiBDb21wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmluZm8oY29sdW1uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlbmRlckVycik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbGV4UmVuZGVyKENvbXAsIF9leHRlbmRzKHt9LCBpbnN0YW5jZSwge1xuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSwgbWV0YSwge30sIHVzZXJQcm9wcykpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZmxleFJlbmRlcihDb21wLCBwcm9wcykge1xuICAgIHJldHVybiBpc1JlYWN0Q29tcG9uZW50KENvbXApID8gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wLCBwcm9wcykgOiBDb21wO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNSZWFjdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gaXNDbGFzc0NvbXBvbmVudChjb21wb25lbnQpIHx8IHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgfHwgaXNFeG90aWNDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvbXBvbmVudCk7XG4gICAgICByZXR1cm4gcHJvdG8ucHJvdG90eXBlICYmIHByb3RvLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xuICAgIH0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXhvdGljQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY29tcG9uZW50LiQkdHlwZW9mID09PSAnc3ltYm9sJyAmJiBbJ3JlYWN0Lm1lbW8nLCAncmVhY3QuZm9yd2FyZF9yZWYnXS5pbmNsdWRlcyhjb21wb25lbnQuJCR0eXBlb2YuZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlua0NvbHVtblN0cnVjdHVyZShjb2x1bW5zLCBwYXJlbnQsIGRlcHRoKSB7XG4gICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgIGRlcHRoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uID0gX2V4dGVuZHMoe30sIGNvbHVtbiwge1xuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgZGVwdGg6IGRlcHRoXG4gICAgICB9KTtcbiAgICAgIGFzc2lnbkNvbHVtbkFjY2Vzc29yKGNvbHVtbik7XG5cbiAgICAgIGlmIChjb2x1bW4uY29sdW1ucykge1xuICAgICAgICBjb2x1bW4uY29sdW1ucyA9IGxpbmtDb2x1bW5TdHJ1Y3R1cmUoY29sdW1uLmNvbHVtbnMsIGNvbHVtbiwgZGVwdGggKyAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBmbGF0dGVuQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5CeShjb2x1bW5zLCAnY29sdW1ucycpO1xuICB9XG4gIGZ1bmN0aW9uIGFzc2lnbkNvbHVtbkFjY2Vzc29yKGNvbHVtbikge1xuICAgIC8vIEZpcnN0IGNoZWNrIGZvciBzdHJpbmcgYWNjZXNzb3JcbiAgICB2YXIgaWQgPSBjb2x1bW4uaWQsXG4gICAgICAgIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICBIZWFkZXIgPSBjb2x1bW4uSGVhZGVyO1xuXG4gICAgaWYgKHR5cGVvZiBhY2Nlc3NvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlkID0gaWQgfHwgYWNjZXNzb3I7XG4gICAgICB2YXIgYWNjZXNzb3JQYXRoID0gYWNjZXNzb3Iuc3BsaXQoJy4nKTtcblxuICAgICAgYWNjZXNzb3IgPSBmdW5jdGlvbiBhY2Nlc3Nvcihyb3cpIHtcbiAgICAgICAgcmV0dXJuIGdldEJ5KHJvdywgYWNjZXNzb3JQYXRoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFpZCAmJiB0eXBlb2YgSGVhZGVyID09PSAnc3RyaW5nJyAmJiBIZWFkZXIpIHtcbiAgICAgIGlkID0gSGVhZGVyO1xuICAgIH1cblxuICAgIGlmICghaWQgJiYgY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoY29sdW1uKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBjb2x1bW4gSUQgKG9yIHVuaXF1ZSBcIkhlYWRlclwiIHZhbHVlKSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGNvbHVtbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY29sdW1uIElEIChvciBzdHJpbmcgYWNjZXNzb3IpIGlzIHJlcXVpcmVkIScpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oY29sdW1uLCB7XG4gICAgICBpZDogaWQsXG4gICAgICBhY2Nlc3NvcjogYWNjZXNzb3JcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG4gIGZ1bmN0aW9uIGRlY29yYXRlQ29sdW1uKGNvbHVtbiwgdXNlckRlZmF1bHRDb2x1bW4pIHtcbiAgICBpZiAoIXVzZXJEZWZhdWx0Q29sdW1uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbHVtbiwgX2V4dGVuZHMoe1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGlzIGEgZmFsbGJhY2sgaGVhZGVyLCBqdXN0IGluIGNhc2VcbiAgICAgIEhlYWRlcjogZW1wdHlSZW5kZXJlcixcbiAgICAgIEZvb3RlcjogZW1wdHlSZW5kZXJlclxuICAgIH0sIGRlZmF1bHRDb2x1bW4sIHt9LCB1c2VyRGVmYXVsdENvbHVtbiwge30sIGNvbHVtbikpO1xuICAgIE9iamVjdC5hc3NpZ24oY29sdW1uLCB7XG4gICAgICBvcmlnaW5hbFdpZHRoOiBjb2x1bW4ud2lkdGhcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9IC8vIEJ1aWxkIHRoZSBoZWFkZXIgZ3JvdXBzIGZyb20gdGhlIGJvdHRvbSB1cFxuXG4gIGZ1bmN0aW9uIG1ha2VIZWFkZXJHcm91cHMoYWxsQ29sdW1ucywgZGVmYXVsdENvbHVtbiwgYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMpIHtcbiAgICBpZiAoYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMgPT09IHZvaWQgMCkge1xuICAgICAgYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbiBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZGVyR3JvdXBzID0gW107XG4gICAgdmFyIHNjYW5Db2x1bW5zID0gYWxsQ29sdW1ucztcbiAgICB2YXIgdWlkID0gMDtcblxuICAgIHZhciBnZXRVSUQgPSBmdW5jdGlvbiBnZXRVSUQoKSB7XG4gICAgICByZXR1cm4gdWlkKys7XG4gICAgfTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgLy8gVGhlIGhlYWRlciBncm91cCB3ZSBhcmUgY3JlYXRpbmdcbiAgICAgIHZhciBoZWFkZXJHcm91cCA9IHtcbiAgICAgICAgaGVhZGVyczogW11cbiAgICAgIH07IC8vIFRoZSBwYXJlbnQgY29sdW1ucyB3ZSdyZSBnb2luZyB0byBzY2FuIG5leHRcblxuICAgICAgdmFyIHBhcmVudENvbHVtbnMgPSBbXTtcbiAgICAgIHZhciBoYXNQYXJlbnRzID0gc2NhbkNvbHVtbnMuc29tZShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5wYXJlbnQ7XG4gICAgICB9KTsgLy8gU2NhbiBlYWNoIGNvbHVtbiBmb3IgcGFyZW50c1xuXG4gICAgICBzY2FuQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgLy8gV2hhdCBpcyB0aGUgbGF0ZXN0IChsYXN0KSBwYXJlbnQgY29sdW1uP1xuICAgICAgICB2YXIgbGF0ZXN0UGFyZW50Q29sdW1uID0gW10uY29uY2F0KHBhcmVudENvbHVtbnMpLnJldmVyc2UoKVswXTtcbiAgICAgICAgdmFyIG5ld1BhcmVudDtcblxuICAgICAgICBpZiAoaGFzUGFyZW50cykge1xuICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gaGFzIGEgcGFyZW50LCBhZGQgaXQgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgaWYgKGNvbHVtbi5wYXJlbnQpIHtcbiAgICAgICAgICAgIG5ld1BhcmVudCA9IF9leHRlbmRzKHt9LCBjb2x1bW4ucGFyZW50LCB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsSWQ6IGNvbHVtbi5wYXJlbnQuaWQsXG4gICAgICAgICAgICAgIGlkOiBjb2x1bW4ucGFyZW50LmlkICsgXCJfXCIgKyBnZXRVSUQoKSxcbiAgICAgICAgICAgICAgaGVhZGVyczogW2NvbHVtbl1cbiAgICAgICAgICAgIH0sIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzKGNvbHVtbikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBvdGhlciBjb2x1bW5zIGhhdmUgcGFyZW50cywgd2UnbGwgbmVlZCB0byBhZGQgYSBwbGFjZSBob2xkZXIgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxJZCA9IGNvbHVtbi5pZCArIFwiX3BsYWNlaG9sZGVyXCI7XG4gICAgICAgICAgICBuZXdQYXJlbnQgPSBkZWNvcmF0ZUNvbHVtbihfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIG9yaWdpbmFsSWQ6IG9yaWdpbmFsSWQsXG4gICAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQgKyBcIl9wbGFjZWhvbGRlcl9cIiArIGdldFVJRCgpLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlck9mOiBjb2x1bW4sXG4gICAgICAgICAgICAgIGhlYWRlcnM6IFtjb2x1bW5dXG4gICAgICAgICAgICB9LCBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcyhjb2x1bW4pKSwgZGVmYXVsdENvbHVtbik7XG4gICAgICAgICAgfSAvLyBJZiB0aGUgcmVzdWx0aW5nIHBhcmVudCBjb2x1bW5zIGFyZSB0aGUgc2FtZSwganVzdCBhZGRcbiAgICAgICAgICAvLyB0aGUgY29sdW1uIGFuZCBpbmNyZW1lbnQgdGhlIGhlYWRlciBzcGFuXG5cblxuICAgICAgICAgIGlmIChsYXRlc3RQYXJlbnRDb2x1bW4gJiYgbGF0ZXN0UGFyZW50Q29sdW1uLm9yaWdpbmFsSWQgPT09IG5ld1BhcmVudC5vcmlnaW5hbElkKSB7XG4gICAgICAgICAgICBsYXRlc3RQYXJlbnRDb2x1bW4uaGVhZGVycy5wdXNoKGNvbHVtbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudENvbHVtbnMucHVzaChuZXdQYXJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlckdyb3VwLmhlYWRlcnMucHVzaChjb2x1bW4pO1xuICAgICAgfSk7XG4gICAgICBoZWFkZXJHcm91cHMucHVzaChoZWFkZXJHcm91cCk7IC8vIFN0YXJ0IHNjYW5uaW5nIHRoZSBwYXJlbnQgY29sdW1uc1xuXG4gICAgICBzY2FuQ29sdW1ucyA9IHBhcmVudENvbHVtbnM7XG4gICAgfTtcblxuICAgIHdoaWxlIChzY2FuQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIF9sb29wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlckdyb3Vwcy5yZXZlcnNlKCk7XG4gIH1cbiAgdmFyIHBhdGhPYmpDYWNoZSA9IG5ldyBNYXAoKTtcbiAgZnVuY3Rpb24gZ2V0Qnkob2JqLCBwYXRoLCBkZWYpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlS2V5ID0gdHlwZW9mIHBhdGggPT09ICdmdW5jdGlvbicgPyBwYXRoIDogSlNPTi5zdHJpbmdpZnkocGF0aCk7XG5cbiAgICB2YXIgcGF0aE9iaiA9IHBhdGhPYmpDYWNoZS5nZXQoY2FjaGVLZXkpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRoT2JqID0gbWFrZVBhdGhBcnJheShwYXRoKTtcbiAgICAgIHBhdGhPYmpDYWNoZS5zZXQoY2FjaGVLZXksIHBhdGhPYmopO1xuICAgICAgcmV0dXJuIHBhdGhPYmo7XG4gICAgfSgpO1xuXG4gICAgdmFyIHZhbDtcblxuICAgIHRyeSB7XG4gICAgICB2YWwgPSBwYXRoT2JqLnJlZHVjZShmdW5jdGlvbiAoY3Vyc29yLCBwYXRoUGFydCkge1xuICAgICAgICByZXR1cm4gY3Vyc29yW3BhdGhQYXJ0XTtcbiAgICAgIH0sIG9iaik7XG4gICAgfSBjYXRjaCAoZSkgey8vIGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgZXJyb3JcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgPyB2YWwgOiBkZWY7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0Rmlyc3REZWZpbmVkKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGZsYXR0ZW5CeShhcnIsIGtleSkge1xuICAgIHZhciBmbGF0ID0gW107XG5cbiAgICB2YXIgcmVjdXJzZSA9IGZ1bmN0aW9uIHJlY3Vyc2UoYXJyKSB7XG4gICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoIWRba2V5XSkge1xuICAgICAgICAgIGZsYXQucHVzaChkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWN1cnNlKGRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZWN1cnNlKGFycik7XG4gICAgcmV0dXJuIGZsYXQ7XG4gIH1cbiAgZnVuY3Rpb24gZXhwYW5kUm93cyhyb3dzLCBfcmVmKSB7XG4gICAgdmFyIG1hbnVhbEV4cGFuZGVkS2V5ID0gX3JlZi5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgZXhwYW5kZWQgPSBfcmVmLmV4cGFuZGVkLFxuICAgICAgICBfcmVmJGV4cGFuZFN1YlJvd3MgPSBfcmVmLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfcmVmJGV4cGFuZFN1YlJvd3MgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGV4cGFuZFN1YlJvd3M7XG4gICAgdmFyIGV4cGFuZGVkUm93cyA9IFtdO1xuXG4gICAgdmFyIGhhbmRsZVJvdyA9IGZ1bmN0aW9uIGhhbmRsZVJvdyhyb3csIGFkZFRvRXhwYW5kZWRSb3dzKSB7XG4gICAgICBpZiAoYWRkVG9FeHBhbmRlZFJvd3MgPT09IHZvaWQgMCkge1xuICAgICAgICBhZGRUb0V4cGFuZGVkUm93cyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJvdy5pc0V4cGFuZGVkID0gcm93Lm9yaWdpbmFsICYmIHJvdy5vcmlnaW5hbFttYW51YWxFeHBhbmRlZEtleV0gfHwgZXhwYW5kZWRbcm93LmlkXTtcbiAgICAgIHJvdy5jYW5FeHBhbmQgPSByb3cuc3ViUm93cyAmJiAhIXJvdy5zdWJSb3dzLmxlbmd0aDtcblxuICAgICAgaWYgKGFkZFRvRXhwYW5kZWRSb3dzKSB7XG4gICAgICAgIGV4cGFuZGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3cuc3ViUm93cyAmJiByb3cuc3ViUm93cy5sZW5ndGggJiYgcm93LmlzRXhwYW5kZWQpIHtcbiAgICAgICAgcm93LnN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVJvdyhyb3csIGV4cGFuZFN1YlJvd3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBoYW5kbGVSb3cocm93KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXhwYW5kZWRSb3dzO1xuICB9XG4gIGZ1bmN0aW9uIGdldEZpbHRlck1ldGhvZChmaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcywgZmlsdGVyVHlwZXMpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihmaWx0ZXIpIHx8IHVzZXJGaWx0ZXJUeXBlc1tmaWx0ZXJdIHx8IGZpbHRlclR5cGVzW2ZpbHRlcl0gfHwgZmlsdGVyVHlwZXMudGV4dDtcbiAgfVxuICBmdW5jdGlvbiBzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGF1dG9SZW1vdmUsIHZhbHVlLCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYXV0b1JlbW92ZSA/IGF1dG9SZW1vdmUodmFsdWUsIGNvbHVtbikgOiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG4gIGZ1bmN0aW9uIHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QtVGFibGU6IFlvdSBoYXZlIG5vdCBjYWxsZWQgcHJlcGFyZVJvdyhyb3cpIG9uZSBvciBtb3JlIHJvd3MgeW91IGFyZSBhdHRlbXB0aW5nIHRvIHJlbmRlci4nKTtcbiAgfVxuICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IG51bGw7XG4gIGZ1bmN0aW9uIHBhc3NpdmVFdmVudFN1cHBvcnRlZCgpIHtcbiAgICAvLyBtZW1vaXplIHN1cHBvcnQgdG8gYXZvaWQgYWRkaW5nIG11bHRpcGxlIHRlc3QgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBwYXNzaXZlU3VwcG9ydGVkID09PSAnYm9vbGVhbicpIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xuICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0aW9ucyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc3VwcG9ydGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbiAgICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcbiAgfSAvL1xuXG4gIHZhciByZU9wZW5CcmFja2V0ID0gL1xcWy9nO1xuICB2YXIgcmVDbG9zZUJyYWNrZXQgPSAvXFxdL2c7XG5cbiAgZnVuY3Rpb24gbWFrZVBhdGhBcnJheShvYmopIHtcbiAgICByZXR1cm4gZmxhdHRlbkRlZXAob2JqKSAvLyByZW1vdmUgYWxsIHBlcmlvZHMgaW4gcGFydHNcbiAgICAubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGQpLnJlcGxhY2UoJy4nLCAnXycpO1xuICAgIH0pIC8vIGpvaW4gcGFydHMgdXNpbmcgcGVyaW9kXG4gICAgLmpvaW4oJy4nKSAvLyByZXBsYWNlIGJyYWNrZXRzIHdpdGggcGVyaW9kc1xuICAgIC5yZXBsYWNlKHJlT3BlbkJyYWNrZXQsICcuJykucmVwbGFjZShyZUNsb3NlQnJhY2tldCwgJycpIC8vIHNwbGl0IGl0IGJhY2sgb3V0IG9uIHBlcmlvZHNcbiAgICAuc3BsaXQoJy4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXR0ZW5EZWVwKGFyciwgbmV3QXJyKSB7XG4gICAgaWYgKG5ld0FyciA9PT0gdm9pZCAwKSB7XG4gICAgICBuZXdBcnIgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgbmV3QXJyLnB1c2goYXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZmxhdHRlbkRlZXAoYXJyW2ldLCBuZXdBcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdBcnI7XG4gIH1cblxuICB2YXIgZGVmYXVsdEdldFRhYmxlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VGFibGVQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICByb2xlOiAndGFibGUnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VGFibGVCb2R5UHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VGFibGVCb2R5UHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgcm9sZTogJ3Jvd2dyb3VwJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEhlYWRlclByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEhlYWRlclByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYuY29sdW1uO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiaGVhZGVyX1wiICsgY29sdW1uLmlkLFxuICAgICAgY29sU3BhbjogY29sdW1uLnRvdGFsVmlzaWJsZUhlYWRlckNvdW50LFxuICAgICAgcm9sZTogJ2NvbHVtbmhlYWRlcidcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRGb290ZXJQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRGb290ZXJQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiZm9vdGVyX1wiICsgY29sdW1uLmlkLFxuICAgICAgY29sU3BhbjogY29sdW1uLnRvdGFsVmlzaWJsZUhlYWRlckNvdW50XG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0SGVhZGVyR3JvdXBQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRIZWFkZXJHcm91cFByb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBpbmRleCA9IF9yZWYzLmluZGV4O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiaGVhZGVyR3JvdXBfXCIgKyBpbmRleCxcbiAgICAgIHJvbGU6ICdyb3cnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Rm9vdGVyR3JvdXBQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRGb290ZXJHcm91cFByb3BzKHByb3BzLCBfcmVmNCkge1xuICAgIHZhciBpbmRleCA9IF9yZWY0LmluZGV4O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiZm9vdGVyR3JvdXBfXCIgKyBpbmRleFxuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFJvd1Byb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFJvd1Byb3BzKHByb3BzLCBfcmVmNSkge1xuICAgIHZhciByb3cgPSBfcmVmNS5yb3c7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJyb3dfXCIgKyByb3cuaWQsXG4gICAgICByb2xlOiAncm93J1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldENlbGxQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRDZWxsUHJvcHMocHJvcHMsIF9yZWY2KSB7XG4gICAgdmFyIGNlbGwgPSBfcmVmNi5jZWxsO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwiY2VsbF9cIiArIGNlbGwucm93LmlkICsgXCJfXCIgKyBjZWxsLmNvbHVtbi5pZCxcbiAgICAgIHJvbGU6ICdjZWxsJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlRGVmYXVsdFBsdWdpbkhvb2tzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VPcHRpb25zOiBbXSxcbiAgICAgIHN0YXRlUmVkdWNlcnM6IFtdLFxuICAgICAgdXNlQ29udHJvbGxlZFN0YXRlOiBbXSxcbiAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgY29sdW1uc0RlcHM6IFtdLFxuICAgICAgYWxsQ29sdW1uczogW10sXG4gICAgICBhbGxDb2x1bW5zRGVwczogW10sXG4gICAgICBhY2Nlc3NWYWx1ZTogW10sXG4gICAgICBtYXRlcmlhbGl6ZWRDb2x1bW5zOiBbXSxcbiAgICAgIG1hdGVyaWFsaXplZENvbHVtbnNEZXBzOiBbXSxcbiAgICAgIHVzZUluc3RhbmNlQWZ0ZXJEYXRhOiBbXSxcbiAgICAgIHZpc2libGVDb2x1bW5zOiBbXSxcbiAgICAgIHZpc2libGVDb2x1bW5zRGVwczogW10sXG4gICAgICBoZWFkZXJHcm91cHM6IFtdLFxuICAgICAgaGVhZGVyR3JvdXBzRGVwczogW10sXG4gICAgICB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnM6IFtdLFxuICAgICAgdXNlSW5zdGFuY2U6IFtdLFxuICAgICAgcHJlcGFyZVJvdzogW10sXG4gICAgICBnZXRUYWJsZVByb3BzOiBbZGVmYXVsdEdldFRhYmxlUHJvcHNdLFxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHM6IFtkZWZhdWx0R2V0VGFibGVCb2R5UHJvcHNdLFxuICAgICAgZ2V0SGVhZGVyR3JvdXBQcm9wczogW2RlZmF1bHRHZXRIZWFkZXJHcm91cFByb3BzXSxcbiAgICAgIGdldEZvb3Rlckdyb3VwUHJvcHM6IFtkZWZhdWx0R2V0Rm9vdGVyR3JvdXBQcm9wc10sXG4gICAgICBnZXRIZWFkZXJQcm9wczogW2RlZmF1bHRHZXRIZWFkZXJQcm9wc10sXG4gICAgICBnZXRGb290ZXJQcm9wczogW2RlZmF1bHRHZXRGb290ZXJQcm9wc10sXG4gICAgICBnZXRSb3dQcm9wczogW2RlZmF1bHRHZXRSb3dQcm9wc10sXG4gICAgICBnZXRDZWxsUHJvcHM6IFtkZWZhdWx0R2V0Q2VsbFByb3BzXSxcbiAgICAgIHVzZUZpbmFsSW5zdGFuY2U6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRIaWRkZW5Db2x1bW5zID0gJ3Jlc2V0SGlkZGVuQ29sdW1ucyc7XG4gIGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbiA9ICd0b2dnbGVIaWRlQ29sdW1uJztcbiAgYWN0aW9ucy5zZXRIaWRkZW5Db2x1bW5zID0gJ3NldEhpZGRlbkNvbHVtbnMnO1xuICBhY3Rpb25zLnRvZ2dsZUhpZGVBbGxDb2x1bW5zID0gJ3RvZ2dsZUhpZGVBbGxDb2x1bW5zJztcbiAgdmFyIHVzZUNvbHVtblZpc2liaWxpdHkgPSBmdW5jdGlvbiB1c2VDb2x1bW5WaXNpYmlsaXR5KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VG9nZ2xlSGlkZGVuUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUhpZGRlblByb3BzXTtcbiAgICBob29rcy5nZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlcik7XG4gICAgaG9va3MudXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zLnB1c2godXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zKTtcbiAgICBob29rcy5oZWFkZXJHcm91cHNEZXBzLnB1c2goZnVuY3Rpb24gKGRlcHMsIF9yZWYpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zXSk7XG4gICAgfSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSk7XG4gIH07XG4gIHVzZUNvbHVtblZpc2liaWxpdHkucGx1Z2luTmFtZSA9ICd1c2VDb2x1bW5WaXNpYmlsaXR5JztcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUhpZGRlblByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUhpZGRlblByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgY29sdW1uLnRvZ2dsZUhpZGRlbighZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBjb2x1bW4uaXNWaXNpYmxlLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQ29sdW1uIFZpc2libGUnXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMocHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjMuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgaW5zdGFuY2UudG9nZ2xlSGlkZUFsbENvbHVtbnMoIWUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogIWluc3RhbmNlLmFsbENvbHVtbnNIaWRkZW4gJiYgIWluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnMubGVuZ3RoLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQWxsIENvbHVtbnMgSGlkZGVuJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6ICFpbnN0YW5jZS5hbGxDb2x1bW5zSGlkZGVuICYmIGluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnMubGVuZ3RoXG4gICAgfV07XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEhpZGRlbkNvbHVtbnMpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmhpZGRlbkNvbHVtbnMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uKSB7XG4gICAgICB2YXIgc2hvdWxkID0gdHlwZW9mIGFjdGlvbi52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBhY3Rpb24udmFsdWUgOiAhc3RhdGUuaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhhY3Rpb24uY29sdW1uSWQpO1xuICAgICAgdmFyIGhpZGRlbkNvbHVtbnMgPSBzaG91bGQgPyBbXS5jb25jYXQoc3RhdGUuaGlkZGVuQ29sdW1ucywgW2FjdGlvbi5jb2x1bW5JZF0pIDogc3RhdGUuaGlkZGVuQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQgIT09IGFjdGlvbi5jb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBoaWRkZW5Db2x1bW5zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0SGlkZGVuQ29sdW1ucykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBmdW5jdGlvbmFsVXBkYXRlKGFjdGlvbi52YWx1ZSwgc3RhdGUuaGlkZGVuQ29sdW1ucylcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVIaWRlQWxsQ29sdW1ucykge1xuICAgICAgdmFyIHNob3VsZEFsbCA9IHR5cGVvZiBhY3Rpb24udmFsdWUgIT09ICd1bmRlZmluZWQnID8gYWN0aW9uLnZhbHVlIDogIXN0YXRlLmhpZGRlbkNvbHVtbnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBzaG91bGRBbGwgPyBpbnN0YW5jZS5hbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICB9KSA6IFtdXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMoaW5zdGFuY2UpIHtcbiAgICB2YXIgaGVhZGVycyA9IGluc3RhbmNlLmhlYWRlcnMsXG4gICAgICAgIGhpZGRlbkNvbHVtbnMgPSBpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zO1xuICAgIHZhciBpc01vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gICAgaWYgKCFpc01vdW50ZWRSZWYuY3VycmVudCkgO1xuXG4gICAgdmFyIGhhbmRsZUNvbHVtbiA9IGZ1bmN0aW9uIGhhbmRsZUNvbHVtbihjb2x1bW4sIHBhcmVudFZpc2libGUpIHtcbiAgICAgIGNvbHVtbi5pc1Zpc2libGUgPSBwYXJlbnRWaXNpYmxlICYmICFoaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgICB2YXIgdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSAwO1xuXG4gICAgICBpZiAoY29sdW1uLmhlYWRlcnMgJiYgY29sdW1uLmhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbHVtbi5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YkNvbHVtbikge1xuICAgICAgICAgIHJldHVybiB0b3RhbFZpc2libGVIZWFkZXJDb3VudCArPSBoYW5kbGVDb2x1bW4oc3ViQ29sdW1uLCBjb2x1bW4uaXNWaXNpYmxlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IGNvbHVtbi5pc1Zpc2libGUgPyAxIDogMDtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLnRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQ7XG4gICAgICByZXR1cm4gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQ7XG4gICAgfTtcblxuICAgIHZhciB0b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IDA7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJIZWFkZXIpIHtcbiAgICAgIHJldHVybiB0b3RhbFZpc2libGVIZWFkZXJDb3VudCArPSBoYW5kbGVDb2x1bW4oc3ViSGVhZGVyLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgdmFyIGNvbHVtbnMgPSBpbnN0YW5jZS5jb2x1bW5zLFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgaGlkZGVuQ29sdW1ucyA9IGluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnMsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRIaSA9IGluc3RhbmNlLmF1dG9SZXNldEhpZGRlbkNvbHVtbnMsXG4gICAgICAgIGF1dG9SZXNldEhpZGRlbkNvbHVtbnMgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0SGkgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0SGk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICB2YXIgYWxsQ29sdW1uc0hpZGRlbiA9IGFsbENvbHVtbnMubGVuZ3RoID09PSBoaWRkZW5Db2x1bW5zLmxlbmd0aDtcbiAgICB2YXIgdG9nZ2xlSGlkZUNvbHVtbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbixcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBzZXRIaWRkZW5Db2x1bW5zID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEhpZGRlbkNvbHVtbnMsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZUhpZGVBbGxDb2x1bW5zID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUhpZGVBbGxDb2x1bW5zLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBnZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uLnRvZ2dsZUhpZGRlbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uLFxuICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW4uaWQsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29sdW1uLmdldFRvZ2dsZUhpZGRlblByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVIaWRkZW5Qcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBnZXRBdXRvUmVzZXRIaWRkZW5Db2x1bW5zID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEhpZGRlbkNvbHVtbnMpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEhpZGRlbkNvbHVtbnMoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEhpZGRlbkNvbHVtbnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBjb2x1bW5zXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgYWxsQ29sdW1uc0hpZGRlbjogYWxsQ29sdW1uc0hpZGRlbixcbiAgICAgIHRvZ2dsZUhpZGVDb2x1bW46IHRvZ2dsZUhpZGVDb2x1bW4sXG4gICAgICBzZXRIaWRkZW5Db2x1bW5zOiBzZXRIaWRkZW5Db2x1bW5zLFxuICAgICAgdG9nZ2xlSGlkZUFsbENvbHVtbnM6IHRvZ2dsZUhpZGVBbGxDb2x1bW5zLFxuICAgICAgZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wczogZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wc1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRJbml0aWFsU3RhdGUgPSB7fTtcbiAgdmFyIGRlZmF1bHRDb2x1bW5JbnN0YW5jZSA9IHt9O1xuXG4gIHZhciBkZWZhdWx0UmVkdWNlciA9IGZ1bmN0aW9uIGRlZmF1bHRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24sIHByZXZTdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFN1YlJvd3MgPSBmdW5jdGlvbiBkZWZhdWx0R2V0U3ViUm93cyhyb3csIGluZGV4KSB7XG4gICAgcmV0dXJuIHJvdy5zdWJSb3dzIHx8IFtdO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Um93SWQgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Um93SWQocm93LCBpbmRleCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIFwiXCIgKyAocGFyZW50ID8gW3BhcmVudC5pZCwgaW5kZXhdLmpvaW4oJy4nKSA6IGluZGV4KTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdFVzZUNvbnRyb2xsZWRTdGF0ZSA9IGZ1bmN0aW9uIGRlZmF1bHRVc2VDb250cm9sbGVkU3RhdGUoZCkge1xuICAgIHJldHVybiBkO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFwcGx5RGVmYXVsdHMocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGluaXRpYWxTdGF0ZSA9IHByb3BzLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gX3Byb3BzJGluaXRpYWxTdGF0ZSA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxTdGF0ZSA6IF9wcm9wcyRpbml0aWFsU3RhdGUsXG4gICAgICAgIF9wcm9wcyRkZWZhdWx0Q29sdW1uID0gcHJvcHMuZGVmYXVsdENvbHVtbixcbiAgICAgICAgZGVmYXVsdENvbHVtbiA9IF9wcm9wcyRkZWZhdWx0Q29sdW1uID09PSB2b2lkIDAgPyBkZWZhdWx0Q29sdW1uSW5zdGFuY2UgOiBfcHJvcHMkZGVmYXVsdENvbHVtbixcbiAgICAgICAgX3Byb3BzJGdldFN1YlJvd3MgPSBwcm9wcy5nZXRTdWJSb3dzLFxuICAgICAgICBnZXRTdWJSb3dzID0gX3Byb3BzJGdldFN1YlJvd3MgPT09IHZvaWQgMCA/IGRlZmF1bHRHZXRTdWJSb3dzIDogX3Byb3BzJGdldFN1YlJvd3MsXG4gICAgICAgIF9wcm9wcyRnZXRSb3dJZCA9IHByb3BzLmdldFJvd0lkLFxuICAgICAgICBnZXRSb3dJZCA9IF9wcm9wcyRnZXRSb3dJZCA9PT0gdm9pZCAwID8gZGVmYXVsdEdldFJvd0lkIDogX3Byb3BzJGdldFJvd0lkLFxuICAgICAgICBfcHJvcHMkc3RhdGVSZWR1Y2VyID0gcHJvcHMuc3RhdGVSZWR1Y2VyLFxuICAgICAgICBzdGF0ZVJlZHVjZXIgPSBfcHJvcHMkc3RhdGVSZWR1Y2VyID09PSB2b2lkIDAgPyBkZWZhdWx0UmVkdWNlciA6IF9wcm9wcyRzdGF0ZVJlZHVjZXIsXG4gICAgICAgIF9wcm9wcyR1c2VDb250cm9sbGVkUyA9IHByb3BzLnVzZUNvbnRyb2xsZWRTdGF0ZSxcbiAgICAgICAgdXNlQ29udHJvbGxlZFN0YXRlID0gX3Byb3BzJHVzZUNvbnRyb2xsZWRTID09PSB2b2lkIDAgPyBkZWZhdWx0VXNlQ29udHJvbGxlZFN0YXRlIDogX3Byb3BzJHVzZUNvbnRyb2xsZWRTLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImluaXRpYWxTdGF0ZVwiLCBcImRlZmF1bHRDb2x1bW5cIiwgXCJnZXRTdWJSb3dzXCIsIFwiZ2V0Um93SWRcIiwgXCJzdGF0ZVJlZHVjZXJcIiwgXCJ1c2VDb250cm9sbGVkU3RhdGVcIl0pO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICAgIGRlZmF1bHRDb2x1bW46IGRlZmF1bHRDb2x1bW4sXG4gICAgICBnZXRTdWJSb3dzOiBnZXRTdWJSb3dzLFxuICAgICAgZ2V0Um93SWQ6IGdldFJvd0lkLFxuICAgICAgc3RhdGVSZWR1Y2VyOiBzdGF0ZVJlZHVjZXIsXG4gICAgICB1c2VDb250cm9sbGVkU3RhdGU6IHVzZUNvbnRyb2xsZWRTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHVzZVRhYmxlID0gZnVuY3Rpb24gdXNlVGFibGUocHJvcHMpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBwbHVnaW5zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBkZWZhdWx0IHByb3BzXG4gICAgcHJvcHMgPSBhcHBseURlZmF1bHRzKHByb3BzKTsgLy8gQWRkIGNvcmUgcGx1Z2luc1xuXG4gICAgcGx1Z2lucyA9IFt1c2VDb2x1bW5WaXNpYmlsaXR5XS5jb25jYXQocGx1Z2lucyk7IC8vIENyZWF0ZSB0aGUgdGFibGUgaW5zdGFuY2VcblxuICAgIHZhciBpbnN0YW5jZVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7IC8vIENyZWF0ZSBhIGdldHRlciBmb3IgdGhlIGluc3RhbmNlIChoZWxwcyBhdm9pZCBhIGxvdCBvZiBwb3RlbnRpYWwgbWVtb3J5IGxlYWtzKVxuXG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlUmVmLmN1cnJlbnQpOyAvLyBBc3NpZ24gdGhlIHByb3BzLCBwbHVnaW5zIGFuZCBob29rcyB0byB0aGUgaW5zdGFuY2VcblxuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgaG9va3M6IG1ha2VEZWZhdWx0UGx1Z2luSG9va3MoKVxuICAgIH0pKTsgLy8gQWxsb3cgcGx1Z2lucyB0byByZWdpc3RlciBob29rcyBhcyBlYXJseSBhcyBwb3NzaWJsZVxuXG4gICAgcGx1Z2lucy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBwbHVnaW4oZ2V0SW5zdGFuY2UoKS5ob29rcyk7XG4gICAgfSk7IC8vIENvbnN1bWUgYWxsIGhvb2tzIGFuZCBtYWtlIGEgZ2V0dGVyIGZvciB0aGVtXG5cbiAgICB2YXIgZ2V0SG9va3MgPSB1c2VHZXRMYXRlc3QoZ2V0SW5zdGFuY2UoKS5ob29rcyk7XG4gICAgZ2V0SW5zdGFuY2UoKS5nZXRIb29rcyA9IGdldEhvb2tzO1xuICAgIGRlbGV0ZSBnZXRJbnN0YW5jZSgpLmhvb2tzOyAvLyBBbGxvdyB1c2VPcHRpb25zIGhvb2tzIHRvIG1vZGlmeSB0aGUgb3B0aW9ucyBjb21pbmcgaW50byB0aGUgdGFibGVcblxuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwgcmVkdWNlSG9va3MoZ2V0SG9va3MoKS51c2VPcHRpb25zLCBhcHBseURlZmF1bHRzKHByb3BzKSkpO1xuXG4gICAgdmFyIF9nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlKCksXG4gICAgICAgIGRhdGEgPSBfZ2V0SW5zdGFuY2UuZGF0YSxcbiAgICAgICAgdXNlckNvbHVtbnMgPSBfZ2V0SW5zdGFuY2UuY29sdW1ucyxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gX2dldEluc3RhbmNlLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgZGVmYXVsdENvbHVtbiA9IF9nZXRJbnN0YW5jZS5kZWZhdWx0Q29sdW1uLFxuICAgICAgICBnZXRTdWJSb3dzID0gX2dldEluc3RhbmNlLmdldFN1YlJvd3MsXG4gICAgICAgIGdldFJvd0lkID0gX2dldEluc3RhbmNlLmdldFJvd0lkLFxuICAgICAgICBzdGF0ZVJlZHVjZXIgPSBfZ2V0SW5zdGFuY2Uuc3RhdGVSZWR1Y2VyLFxuICAgICAgICB1c2VDb250cm9sbGVkU3RhdGUgPSBfZ2V0SW5zdGFuY2UudXNlQ29udHJvbGxlZFN0YXRlOyAvLyBTZXR1cCB1c2VyIHJlZHVjZXIgcmVmXG5cblxuICAgIHZhciBnZXRTdGF0ZVJlZHVjZXIgPSB1c2VHZXRMYXRlc3Qoc3RhdGVSZWR1Y2VyKTsgLy8gQnVpbGQgdGhlIHJlZHVjZXJcblxuICAgIHZhciByZWR1Y2VyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIC8vIERldGVjdCBpbnZhbGlkIGFjdGlvbnNcbiAgICAgIGlmICghYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIEFjdGlvbiDwn5GGJyk7XG4gICAgICB9IC8vIFJlZHVjZSB0aGUgc3RhdGUgZnJvbSBhbGwgcGx1Z2luIHJlZHVjZXJzXG5cblxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChnZXRIb29rcygpLnN0YXRlUmVkdWNlcnMsIEFycmF5LmlzQXJyYXkoZ2V0U3RhdGVSZWR1Y2VyKCkpID8gZ2V0U3RhdGVSZWR1Y2VyKCkgOiBbZ2V0U3RhdGVSZWR1Y2VyKCldKS5yZWR1Y2UoZnVuY3Rpb24gKHMsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIocywgYWN0aW9uLCBzdGF0ZSwgZ2V0SW5zdGFuY2UoKSkgfHwgcztcbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9LCBbZ2V0SG9va3MsIGdldFN0YXRlUmVkdWNlciwgZ2V0SW5zdGFuY2VdKTsgLy8gU3RhcnQgdGhlIHJlZHVjZXJcblxuICAgIHZhciBfUmVhY3QkdXNlUmVkdWNlciA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlcihpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5pbml0XG4gICAgICB9KTtcbiAgICB9KSxcbiAgICAgICAgcmVkdWNlclN0YXRlID0gX1JlYWN0JHVzZVJlZHVjZXJbMF0sXG4gICAgICAgIGRpc3BhdGNoID0gX1JlYWN0JHVzZVJlZHVjZXJbMV07IC8vIEFsbG93IHRoZSB1c2VyIHRvIGNvbnRyb2wgdGhlIGZpbmFsIHN0YXRlIHdpdGggaG9va3NcblxuXG4gICAgdmFyIHN0YXRlID0gcmVkdWNlSG9va3MoW10uY29uY2F0KGdldEhvb2tzKCkudXNlQ29udHJvbGxlZFN0YXRlLCBbdXNlQ29udHJvbGxlZFN0YXRlXSksIHJlZHVjZXJTdGF0ZSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgIH0pOyAvLyBEZWNvcmF0ZSBBbGwgdGhlIGNvbHVtbnNcblxuICAgIHZhciBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbGlua0NvbHVtblN0cnVjdHVyZShyZWR1Y2VIb29rcyhnZXRIb29rcygpLmNvbHVtbnMsIHVzZXJDb2x1bW5zLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KSk7XG4gICAgfSwgW2dldEhvb2tzLCBnZXRJbnN0YW5jZSwgdXNlckNvbHVtbnNdLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLmNvbHVtbnNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpO1xuICAgIGdldEluc3RhbmNlKCkuY29sdW1ucyA9IGNvbHVtbnM7IC8vIEdldCB0aGUgZmxhdCBsaXN0IG9mIGFsbCBjb2x1bW5zIGFuZCBhbGxvdyBob29rcyB0byBkZWNvcmF0ZVxuICAgIC8vIHRob3NlIGNvbHVtbnMgKGFuZCB0cmlnZ2VyIHRoaXMgbWVtb2l6YXRpb24gdmlhIGRlcHMpXG5cbiAgICB2YXIgYWxsQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuYWxsQ29sdW1ucywgZmxhdHRlbkNvbHVtbnMoY29sdW1ucyksIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0pLm1hcChhc3NpZ25Db2x1bW5BY2Nlc3Nvcik7XG4gICAgfSwgW2NvbHVtbnMsIGdldEhvb2tzLCBnZXRJbnN0YW5jZV0uY29uY2F0KHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuYWxsQ29sdW1uc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5hbGxDb2x1bW5zID0gYWxsQ29sdW1uczsgLy8gQWNjZXNzIHRoZSByb3cgbW9kZWwgdXNpbmcgaW5pdGlhbCBjb2x1bW5zXG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByb3dzID0gW107XG4gICAgICB2YXIgZmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciByb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIGFsbENvbHVtbnNRdWV1ZSA9IFtdLmNvbmNhdChhbGxDb2x1bW5zKTtcblxuICAgICAgd2hpbGUgKGFsbENvbHVtbnNRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnNRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBhY2Nlc3NSb3dzRm9yQ29sdW1uKHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgZmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgICAgIHJvd3NCeUlkOiByb3dzQnlJZCxcbiAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICBnZXRSb3dJZDogZ2V0Um93SWQsXG4gICAgICAgICAgZ2V0U3ViUm93czogZ2V0U3ViUm93cyxcbiAgICAgICAgICBhY2Nlc3NWYWx1ZUhvb2tzOiBnZXRIb29rcygpLmFjY2Vzc1ZhbHVlLFxuICAgICAgICAgIGdldEluc3RhbmNlOiBnZXRJbnN0YW5jZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93cywgcm93c0J5SWRdO1xuICAgIH0sIFthbGxDb2x1bW5zLCBkYXRhLCBnZXRSb3dJZCwgZ2V0U3ViUm93cywgZ2V0SG9va3MsIGdldEluc3RhbmNlXSksXG4gICAgICAgIHJvd3MgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgZmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgcm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXTtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwge1xuICAgICAgcm93czogcm93cyxcbiAgICAgIGluaXRpYWxSb3dzOiBbXS5jb25jYXQocm93cyksXG4gICAgICBmbGF0Um93czogZmxhdFJvd3MsXG4gICAgICByb3dzQnlJZDogcm93c0J5SWQgLy8gbWF0ZXJpYWxpemVkQ29sdW1ucyxcblxuICAgIH0pO1xuICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnVzZUluc3RhbmNlQWZ0ZXJEYXRhLCBnZXRJbnN0YW5jZSgpKTsgLy8gR2V0IHRoZSBmbGF0IGxpc3Qgb2YgYWxsIGNvbHVtbnMgQUZURVIgdGhlIHJvd3NcbiAgICAvLyBoYXZlIGJlZW4gYWNjZXNzLCBhbmQgYWxsb3cgaG9va3MgdG8gZGVjb3JhdGVcbiAgICAvLyB0aG9zZSBjb2x1bW5zIChhbmQgdHJpZ2dlciB0aGlzIG1lbW9pemF0aW9uIHZpYSBkZXBzKVxuXG4gICAgdmFyIHZpc2libGVDb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlSG9va3MoZ2V0SG9va3MoKS52aXNpYmxlQ29sdW1ucywgYWxsQ29sdW1ucywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSkubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkZWNvcmF0ZUNvbHVtbihkLCBkZWZhdWx0Q29sdW1uKTtcbiAgICAgIH0pO1xuICAgIH0sIFtnZXRIb29rcywgYWxsQ29sdW1ucywgZ2V0SW5zdGFuY2UsIGRlZmF1bHRDb2x1bW5dLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLnZpc2libGVDb2x1bW5zRGVwcywgW10sIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSkpKTsgLy8gQ29tYmluZSBuZXcgdmlzaWJsZSBjb2x1bW5zIHdpdGggYWxsIGNvbHVtbnNcblxuICAgIGFsbENvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb2x1bW5zID0gW10uY29uY2F0KHZpc2libGVDb2x1bW5zKTtcbiAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIGlmICghY29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbi5pZDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBjb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9LCBbYWxsQ29sdW1ucywgdmlzaWJsZUNvbHVtbnNdKTtcbiAgICBnZXRJbnN0YW5jZSgpLmFsbENvbHVtbnMgPSBhbGxDb2x1bW5zO1xuXG4gICAge1xuICAgICAgdmFyIGR1cGxpY2F0ZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG4gICAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pICE9PSBpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkdXBsaWNhdGVDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmluZm8oYWxsQ29sdW1ucyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZSBjb2x1bW5zIHdlcmUgZm91bmQgd2l0aCBpZHM6IFxcXCJcIiArIGR1cGxpY2F0ZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pLmpvaW4oJywgJykgKyBcIlxcXCIgaW4gdGhlIGNvbHVtbnMgYXJyYXkgYWJvdmVcIik7XG4gICAgICB9XG4gICAgfSAvLyBNYWtlIHRoZSBoZWFkZXJHcm91cHNcblxuXG4gICAgdmFyIGhlYWRlckdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuaGVhZGVyR3JvdXBzLCBtYWtlSGVhZGVyR3JvdXBzKHZpc2libGVDb2x1bW5zLCBkZWZhdWx0Q29sdW1uKSwgZ2V0SW5zdGFuY2UoKSk7XG4gICAgfSwgW2dldEhvb2tzLCB2aXNpYmxlQ29sdW1ucywgZGVmYXVsdENvbHVtbiwgZ2V0SW5zdGFuY2VdLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLmhlYWRlckdyb3Vwc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJHcm91cHMgPSBoZWFkZXJHcm91cHM7IC8vIEdldCB0aGUgZmlyc3QgbGV2ZWwgb2YgaGVhZGVyc1xuXG4gICAgdmFyIGhlYWRlcnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoZWFkZXJHcm91cHMubGVuZ3RoID8gaGVhZGVyR3JvdXBzWzBdLmhlYWRlcnMgOiBbXTtcbiAgICB9LCBbaGVhZGVyR3JvdXBzXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJzID0gaGVhZGVyczsgLy8gUHJvdmlkZSBhIGZsYXQgaGVhZGVyIGxpc3QgZm9yIHV0aWxpdGllc1xuXG4gICAgZ2V0SW5zdGFuY2UoKS5mbGF0SGVhZGVycyA9IGhlYWRlckdyb3Vwcy5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgaGVhZGVyR3JvdXApIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoYWxsLCBoZWFkZXJHcm91cC5oZWFkZXJzKTtcbiAgICB9LCBbXSk7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zLCBnZXRJbnN0YW5jZSgpKTsgLy8gRmlsdGVyIGNvbHVtbnMgZG93biB0byB2aXNpYmxlIG9uZXNcblxuICAgIHZhciB2aXNpYmxlQ29sdW1uc0RlcCA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuaXNWaXNpYmxlO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgfSkuc29ydCgpLmpvaW4oJ18nKTtcbiAgICB2aXNpYmxlQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pc1Zpc2libGU7XG4gICAgICB9KTtcbiAgICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW3Zpc2libGVDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc0RlcF0pO1xuICAgIGdldEluc3RhbmNlKCkudmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1uczsgLy8gSGVhZGVyIFZpc2liaWxpdHkgaXMgbmVlZGVkIGJ5IHRoaXMgcG9pbnRcblxuICAgIHZhciBfY2FsY3VsYXRlSGVhZGVyV2lkdGggPSBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoaGVhZGVycyksXG4gICAgICAgIHRvdGFsQ29sdW1uc01pbldpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoWzBdLFxuICAgICAgICB0b3RhbENvbHVtbnNXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aFsxXSxcbiAgICAgICAgdG90YWxDb2x1bW5zTWF4V2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGhbMl07XG5cbiAgICBnZXRJbnN0YW5jZSgpLnRvdGFsQ29sdW1uc01pbldpZHRoID0gdG90YWxDb2x1bW5zTWluV2lkdGg7XG4gICAgZ2V0SW5zdGFuY2UoKS50b3RhbENvbHVtbnNXaWR0aCA9IHRvdGFsQ29sdW1uc1dpZHRoO1xuICAgIGdldEluc3RhbmNlKCkudG90YWxDb2x1bW5zTWF4V2lkdGggPSB0b3RhbENvbHVtbnNNYXhXaWR0aDtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VJbnN0YW5jZSwgZ2V0SW5zdGFuY2UoKSkgLy8gRWFjaCBtYXRlcmlhbGl6ZWQgaGVhZGVyIG5lZWRzIHRvIGJlIGFzc2lnbmVkIGEgcmVuZGVyIGZ1bmN0aW9uIGFuZCBvdGhlclxuICAgIC8vIHByb3AgZ2V0dGVyIHByb3BlcnRpZXMgaGVyZS5cbiAgICA7XG4gICAgW10uY29uY2F0KGdldEluc3RhbmNlKCkuZmxhdEhlYWRlcnMsIGdldEluc3RhbmNlKCkuYWxsQ29sdW1ucykuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAvLyBHaXZlIGNvbHVtbnMvaGVhZGVycyByZW5kZXJpbmcgcG93ZXJcbiAgICAgIGNvbHVtbi5yZW5kZXIgPSBtYWtlUmVuZGVyZXIoZ2V0SW5zdGFuY2UoKSwgY29sdW1uKTsgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgYSBkZWZhdWx0IGdldEhlYWRlclByb3BzXG5cbiAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0SGVhZGVyUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTsgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgYSBkZWZhdWx0IGdldEZvb3RlclByb3BzXG5cbiAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Rm9vdGVyUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBnZXRJbnN0YW5jZSgpLmhlYWRlckdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhlYWRlckdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24gKGhlYWRlckdyb3VwLCBpKSB7XG4gICAgICAgIC8vIEZpbHRlciBvdXQgYW55IGhlYWRlcnMgYW5kIGhlYWRlckdyb3VwcyB0aGF0IGRvbid0IGhhdmUgdmlzaWJsZSBjb2x1bW5zXG4gICAgICAgIGhlYWRlckdyb3VwLmhlYWRlcnMgPSBoZWFkZXJHcm91cC5oZWFkZXJzLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgdmFyIHJlY3Vyc2UgPSBmdW5jdGlvbiByZWN1cnNlKGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgIGlmIChjb2x1bW4uaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNlKGNvbHVtbi5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4uaXNWaXNpYmxlO1xuICAgICAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoY29sdW1uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN1cnNlKGNvbHVtbi5oZWFkZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29sdW1uLmlzVmlzaWJsZTtcbiAgICAgICAgfSk7IC8vIEdpdmUgaGVhZGVyR3JvdXBzIGdldFJvd1Byb3BzXG5cbiAgICAgICAgaWYgKGhlYWRlckdyb3VwLmhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0SGVhZGVyR3JvdXBQcm9wcywge1xuICAgICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgICBoZWFkZXJHcm91cDogaGVhZGVyR3JvdXAsXG4gICAgICAgICAgICBpbmRleDogaVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhlYWRlckdyb3VwLmdldEZvb3Rlckdyb3VwUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEZvb3Rlckdyb3VwUHJvcHMsIHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgICAgaGVhZGVyR3JvdXA6IGhlYWRlckdyb3VwLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sIFtoZWFkZXJHcm91cHMsIGdldEluc3RhbmNlLCBnZXRIb29rc10pO1xuICAgIGdldEluc3RhbmNlKCkuZm9vdGVyR3JvdXBzID0gW10uY29uY2F0KGdldEluc3RhbmNlKCkuaGVhZGVyR3JvdXBzKS5yZXZlcnNlKCk7IC8vIFRoZSBwcmVwYXJlUm93IGZ1bmN0aW9uIGlzIGFic29sdXRlbHkgbmVjZXNzYXJ5IGFuZCBNVVNUIGJlIGNhbGxlZCBvblxuICAgIC8vIGFueSByb3dzIHRoZSB1c2VyIHdpc2hlcyB0byBiZSBkaXNwbGF5ZWQuXG5cbiAgICBnZXRJbnN0YW5jZSgpLnByZXBhcmVSb3cgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocm93KSB7XG4gICAgICByb3cuZ2V0Um93UHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFJvd1Byb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICByb3c6IHJvd1xuICAgICAgfSk7IC8vIEJ1aWxkIHRoZSB2aXNpYmxlIGNlbGxzIGZvciBlYWNoIHJvd1xuXG4gICAgICByb3cuYWxsQ2VsbHMgPSBhbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJvdy52YWx1ZXNbY29sdW1uLmlkXTtcbiAgICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07IC8vIEdpdmUgZWFjaCBjZWxsIGEgZ2V0Q2VsbFByb3BzIGJhc2VcblxuICAgICAgICBjZWxsLmdldENlbGxQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Q2VsbFByb3BzLCB7XG4gICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgY2VsbDogY2VsbFxuICAgICAgICB9KTsgLy8gR2l2ZSBlYWNoIGNlbGwgYSByZW5kZXJlciBmdW5jdGlvbiAoc3VwcG9ydHMgbXVsdGlwbGUgcmVuZGVyZXJzKVxuXG4gICAgICAgIGNlbGwucmVuZGVyID0gbWFrZVJlbmRlcmVyKGdldEluc3RhbmNlKCksIGNvbHVtbiwge1xuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgIH0pO1xuICAgICAgcm93LmNlbGxzID0gdmlzaWJsZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIHJvdy5hbGxDZWxscy5maW5kKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGNlbGwuY29sdW1uLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIG5lZWQgdG8gYXBwbHkgYW55IHJvdyBzcGVjaWZpYyBob29rcyAodXNlRXhwYW5kZWQgcmVxdWlyZXMgdGhpcylcblxuICAgICAgbG9vcEhvb2tzKGdldEhvb2tzKCkucHJlcGFyZVJvdywgcm93LCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KTtcbiAgICB9LCBbZ2V0SG9va3MsIGdldEluc3RhbmNlLCBhbGxDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc10pO1xuICAgIGdldEluc3RhbmNlKCkuZ2V0VGFibGVQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VGFibGVQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBnZXRJbnN0YW5jZSgpLmdldFRhYmxlQm9keVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUYWJsZUJvZHlQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VGaW5hbEluc3RhbmNlLCBnZXRJbnN0YW5jZSgpKTtcbiAgICByZXR1cm4gZ2V0SW5zdGFuY2UoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoaGVhZGVycywgbGVmdCkge1xuICAgIGlmIChsZWZ0ID09PSB2b2lkIDApIHtcbiAgICAgIGxlZnQgPSAwO1xuICAgIH1cblxuICAgIHZhciBzdW1Ub3RhbE1pbldpZHRoID0gMDtcbiAgICB2YXIgc3VtVG90YWxXaWR0aCA9IDA7XG4gICAgdmFyIHN1bVRvdGFsTWF4V2lkdGggPSAwO1xuICAgIHZhciBzdW1Ub3RhbEZsZXhXaWR0aCA9IDA7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIHZhciBzdWJIZWFkZXJzID0gaGVhZGVyLmhlYWRlcnM7XG4gICAgICBoZWFkZXIudG90YWxMZWZ0ID0gbGVmdDtcblxuICAgICAgaWYgKHN1YkhlYWRlcnMgJiYgc3ViSGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9jYWxjdWxhdGVIZWFkZXJXaWR0aDIgPSBjYWxjdWxhdGVIZWFkZXJXaWR0aHMoc3ViSGVhZGVycywgbGVmdCksXG4gICAgICAgICAgICB0b3RhbE1pbldpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoMlswXSxcbiAgICAgICAgICAgIHRvdGFsV2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzFdLFxuICAgICAgICAgICAgdG90YWxNYXhXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbMl0sXG4gICAgICAgICAgICB0b3RhbEZsZXhXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbM107XG5cbiAgICAgICAgaGVhZGVyLnRvdGFsTWluV2lkdGggPSB0b3RhbE1pbldpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxXaWR0aCA9IHRvdGFsV2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbE1heFdpZHRoID0gdG90YWxNYXhXaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsRmxleFdpZHRoID0gdG90YWxGbGV4V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIudG90YWxNaW5XaWR0aCA9IGhlYWRlci5taW5XaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsV2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChoZWFkZXIubWluV2lkdGgsIGhlYWRlci53aWR0aCksIGhlYWRlci5tYXhXaWR0aCk7XG4gICAgICAgIGhlYWRlci50b3RhbE1heFdpZHRoID0gaGVhZGVyLm1heFdpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxGbGV4V2lkdGggPSBoZWFkZXIuY2FuUmVzaXplID8gaGVhZGVyLnRvdGFsV2lkdGggOiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVhZGVyLmlzVmlzaWJsZSkge1xuICAgICAgICBsZWZ0ICs9IGhlYWRlci50b3RhbFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbE1pbldpZHRoICs9IGhlYWRlci50b3RhbE1pbldpZHRoO1xuICAgICAgICBzdW1Ub3RhbFdpZHRoICs9IGhlYWRlci50b3RhbFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbE1heFdpZHRoICs9IGhlYWRlci50b3RhbE1heFdpZHRoO1xuICAgICAgICBzdW1Ub3RhbEZsZXhXaWR0aCArPSBoZWFkZXIudG90YWxGbGV4V2lkdGg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFtzdW1Ub3RhbE1pbldpZHRoLCBzdW1Ub3RhbFdpZHRoLCBzdW1Ub3RhbE1heFdpZHRoLCBzdW1Ub3RhbEZsZXhXaWR0aF07XG4gIH1cblxuICBmdW5jdGlvbiBhY2Nlc3NSb3dzRm9yQ29sdW1uKF9yZWYpIHtcbiAgICB2YXIgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgICAgcm93cyA9IF9yZWYucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBfcmVmLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IF9yZWYucm93c0J5SWQsXG4gICAgICAgIGNvbHVtbiA9IF9yZWYuY29sdW1uLFxuICAgICAgICBnZXRSb3dJZCA9IF9yZWYuZ2V0Um93SWQsXG4gICAgICAgIGdldFN1YlJvd3MgPSBfcmVmLmdldFN1YlJvd3MsXG4gICAgICAgIGFjY2Vzc1ZhbHVlSG9va3MgPSBfcmVmLmFjY2Vzc1ZhbHVlSG9va3MsXG4gICAgICAgIGdldEluc3RhbmNlID0gX3JlZi5nZXRJbnN0YW5jZTtcblxuICAgIC8vIEFjY2VzcyB0aGUgcm93J3MgZGF0YSBjb2x1bW4tYnktY29sdW1uXG4gICAgLy8gV2UgZG8gaXQgdGhpcyB3YXkgc28gd2UgY2FuIGluY3JlbWVudGFsbHkgYWRkIG1hdGVyaWFsaXplZFxuICAgIC8vIGNvbHVtbnMgYWZ0ZXIgdGhlIGZpcnN0IHBhc3MgYW5kIGF2b2lkIGV4Y2Vzc2l2ZSBsb29waW5nXG4gICAgdmFyIGFjY2Vzc1JvdyA9IGZ1bmN0aW9uIGFjY2Vzc1JvdyhvcmlnaW5hbFJvdywgcm93SW5kZXgsIGRlcHRoLCBwYXJlbnQsIHBhcmVudFJvd3MpIHtcbiAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gS2VlcCB0aGUgb3JpZ2luYWwgcmVmZXJlbmNlIGFyb3VuZFxuICAgICAgdmFyIG9yaWdpbmFsID0gb3JpZ2luYWxSb3c7XG4gICAgICB2YXIgaWQgPSBnZXRSb3dJZChvcmlnaW5hbFJvdywgcm93SW5kZXgsIHBhcmVudCk7XG4gICAgICB2YXIgcm93ID0gcm93c0J5SWRbaWRdOyAvLyBJZiB0aGUgcm93IGhhc24ndCBiZWVuIGNyZWF0ZWQsIGxldCdzIG1ha2UgaXRcblxuICAgICAgaWYgKCFyb3cpIHtcbiAgICAgICAgcm93ID0ge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBvcmlnaW5hbDogb3JpZ2luYWwsXG4gICAgICAgICAgaW5kZXg6IHJvd0luZGV4LFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBjZWxsczogW3t9XSAvLyBUaGlzIGlzIGEgZHVtbXkgY2VsbFxuXG4gICAgICAgIH07IC8vIE92ZXJyaWRlIGNvbW1vbiBhcnJheSBmdW5jdGlvbnMgKGFuZCB0aGUgZHVtbXkgY2VsbCdzIGdldENlbGxQcm9wcyBmdW5jdGlvbilcbiAgICAgICAgLy8gdG8gc2hvdyBhbiBlcnJvciBpZiBpdCBpcyBhY2Nlc3NlZCB3aXRob3V0IGNhbGxpbmcgcHJlcGFyZVJvd1xuXG4gICAgICAgIHJvdy5jZWxscy5tYXAgPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZztcbiAgICAgICAgcm93LmNlbGxzLmZpbHRlciA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nO1xuICAgICAgICByb3cuY2VsbHMuZm9yRWFjaCA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nO1xuICAgICAgICByb3cuY2VsbHNbMF0uZ2V0Q2VsbFByb3BzID0gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmc7IC8vIENyZWF0ZSB0aGUgY2VsbHMgYW5kIHZhbHVlc1xuXG4gICAgICAgIHJvdy52YWx1ZXMgPSB7fTsgLy8gUHVzaCB0aGlzIHJvdyBpbnRvIHRoZSBwYXJlbnRSb3dzIGFycmF5XG5cbiAgICAgICAgcGFyZW50Um93cy5wdXNoKHJvdyk7IC8vIEtlZXAgdHJhY2sgb2YgZXZlcnkgcm93IGluIGEgZmxhdCBhcnJheVxuXG4gICAgICAgIGZsYXRSb3dzLnB1c2gocm93KTsgLy8gQWxzbyBrZWVwIHRyYWNrIG9mIGV2ZXJ5IHJvdyBieSBpdHMgSURcblxuICAgICAgICByb3dzQnlJZFtpZF0gPSByb3c7IC8vIEdldCB0aGUgb3JpZ2luYWwgc3Vicm93c1xuXG4gICAgICAgIHJvdy5vcmlnaW5hbFN1YlJvd3MgPSBnZXRTdWJSb3dzKG9yaWdpbmFsUm93LCByb3dJbmRleCk7IC8vIFRoZW4gcmVjdXJzaXZlbHkgYWNjZXNzIHRoZW1cblxuICAgICAgICBpZiAocm93Lm9yaWdpbmFsU3ViUm93cykge1xuICAgICAgICAgIHZhciBzdWJSb3dzID0gW107XG4gICAgICAgICAgcm93Lm9yaWdpbmFsU3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzUm93KGQsIGksIGRlcHRoICsgMSwgcm93LCBzdWJSb3dzKTtcbiAgICAgICAgICB9KTsgLy8gS2VlcCB0aGUgbmV3IHN1YlJvd3MgYXJyYXkgb24gdGhlIHJvd1xuXG4gICAgICAgICAgcm93LnN1YlJvd3MgPSBzdWJSb3dzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJvdy5zdWJSb3dzKSB7XG4gICAgICAgIC8vIElmIHRoZSByb3cgZXhpc3RzLCB0aGVuIGl0J3MgYWxyZWFkeSBiZWVuIGFjY2Vzc2VkXG4gICAgICAgIC8vIEtlZXAgcmVjdXJzaW5nLCBidXQgZG9uJ3Qgd29ycnkgYWJvdXQgcGFzc2luZyB0aGVcbiAgICAgICAgLy8gYWNjdW1sYXRvciBhcnJheSAodGhvc2Ugcm93cyBhbHJlYWR5IGV4aXN0KVxuICAgICAgICByb3cub3JpZ2luYWxTdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYWNjZXNzUm93KGQsIGksIGRlcHRoICsgMSwgcm93KTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIElmIHRoZSBjb2x1bW4gaGFzIGFuIGFjY2Vzc29yLCB1c2UgaXQgdG8gZ2V0IGEgdmFsdWVcblxuXG4gICAgICBpZiAoY29sdW1uLmFjY2Vzc29yKSB7XG4gICAgICAgIHJvdy52YWx1ZXNbY29sdW1uLmlkXSA9IGNvbHVtbi5hY2Nlc3NvcihvcmlnaW5hbFJvdywgcm93SW5kZXgsIHJvdywgcGFyZW50Um93cywgZGF0YSk7XG4gICAgICB9IC8vIEFsbG93IHBsdWdpbnMgdG8gbWFuaXB1bGF0ZSB0aGUgY29sdW1uIHZhbHVlXG5cblxuICAgICAgcm93LnZhbHVlc1tjb2x1bW4uaWRdID0gcmVkdWNlSG9va3MoYWNjZXNzVmFsdWVIb29rcywgcm93LnZhbHVlc1tjb2x1bW4uaWRdLCB7XG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0sIHRydWUpO1xuICAgIH07XG5cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKG9yaWdpbmFsUm93LCByb3dJbmRleCkge1xuICAgICAgcmV0dXJuIGFjY2Vzc1JvdyhvcmlnaW5hbFJvdywgcm93SW5kZXgsIDAsIHVuZGVmaW5lZCwgcm93cyk7XG4gICAgfSk7XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0RXhwYW5kZWQgPSAncmVzZXRFeHBhbmRlZCc7XG4gIGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQgPSAndG9nZ2xlUm93RXhwYW5kZWQnO1xuICBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCA9ICd0b2dnbGVBbGxSb3dzRXhwYW5kZWQnO1xuICB2YXIgdXNlRXhwYW5kZWQgPSBmdW5jdGlvbiB1c2VFeHBhbmRlZChob29rcykge1xuICAgIGhvb2tzLmdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkMSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQxKTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyk7XG4gIH07XG4gIHVzZUV4cGFuZGVkLnBsdWdpbk5hbWUgPSAndXNlRXhwYW5kZWQnO1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxSb3dzRXhwYW5kZWQoKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBSb3dzIEV4cGFuZGVkJ1xuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciByb3cgPSBfcmVmMi5yb3c7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgcm93LnRvZ2dsZVJvd0V4cGFuZGVkKCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBSb3cgRXhwYW5kZWQnXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBleHBhbmRlZDoge31cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBleHBhbmRlZDogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmV4cGFuZGVkIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlQWxsUm93c0V4cGFuZGVkKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgaXNBbGxSb3dzRXhwYW5kZWQgPSBpbnN0YW5jZS5pc0FsbFJvd3NFeHBhbmRlZCxcbiAgICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkO1xuICAgICAgdmFyIGV4cGFuZEFsbCA9IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6ICFpc0FsbFJvd3NFeHBhbmRlZDtcblxuICAgICAgaWYgKGV4cGFuZEFsbCkge1xuICAgICAgICB2YXIgZXhwYW5kZWQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocm93c0J5SWQpLmZvckVhY2goZnVuY3Rpb24gKHJvd0lkKSB7XG4gICAgICAgICAgZXhwYW5kZWRbcm93SWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXhwYW5kZWQ6IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQpIHtcbiAgICAgIHZhciBpZCA9IGFjdGlvbi5pZCxcbiAgICAgICAgICBzZXRFeHBhbmRlZCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBleGlzdHMgPSBzdGF0ZS5leHBhbmRlZFtpZF07XG4gICAgICB2YXIgc2hvdWxkRXhpc3QgPSB0eXBlb2Ygc2V0RXhwYW5kZWQgIT09ICd1bmRlZmluZWQnID8gc2V0RXhwYW5kZWQgOiAhZXhpc3RzO1xuXG4gICAgICBpZiAoIWV4aXN0cyAmJiBzaG91bGRFeGlzdCkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogX2V4dGVuZHMoe30sIHN0YXRlLmV4cGFuZGVkLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltpZF0gPSB0cnVlLCBfZXh0ZW5kczIpKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RzICYmICFzaG91bGRFeGlzdCkge1xuICAgICAgICB2YXIgX3N0YXRlJGV4cGFuZGVkID0gc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgICAgICBfID0gX3N0YXRlJGV4cGFuZGVkW2lkXSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfc3RhdGUkZXhwYW5kZWQsIFtpZF0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGV4cGFuZGVkOiByZXN0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDEoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPSBpbnN0YW5jZS5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgbWFudWFsRXhwYW5kZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPT09IHZvaWQgMCA/ICdleHBhbmRlZCcgOiBfaW5zdGFuY2UkbWFudWFsRXhwYW4sXG4gICAgICAgIF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9IGluc3RhbmNlLnBhZ2luYXRlRXhwYW5kZWRSb3dzLFxuICAgICAgICBwYWdpbmF0ZUV4cGFuZGVkUm93cyA9IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCxcbiAgICAgICAgX2luc3RhbmNlJGV4cGFuZFN1YlJvID0gaW5zdGFuY2UuZXhwYW5kU3ViUm93cyxcbiAgICAgICAgZXhwYW5kU3ViUm93cyA9IF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRleHBhbmRTdWJSbyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEV4ID0gaW5zdGFuY2UuYXV0b1Jlc2V0RXhwYW5kZWQsXG4gICAgICAgIGF1dG9SZXNldEV4cGFuZGVkID0gX2luc3RhbmNlJGF1dG9SZXNldEV4ID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEV4LFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZXhwYW5kZWQgPSBpbnN0YW5jZS5zdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZVNvcnRCeScsICd1c2VHcm91cEJ5JywgJ3VzZVBpdm90Q29sdW1ucycsICd1c2VHbG9iYWxGaWx0ZXInXSwgJ3VzZUV4cGFuZGVkJyk7XG4gICAgdmFyIGdldEF1dG9SZXNldEV4cGFuZGVkID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEV4cGFuZGVkKTtcbiAgICB2YXIgaXNBbGxSb3dzRXhwYW5kZWQgPSBCb29sZWFuKE9iamVjdC5rZXlzKHJvd3NCeUlkKS5sZW5ndGggJiYgT2JqZWN0LmtleXMoZXhwYW5kZWQpLmxlbmd0aCk7XG5cbiAgICBpZiAoaXNBbGxSb3dzRXhwYW5kZWQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyb3dzQnlJZCkuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuICFleHBhbmRlZFtpZF07XG4gICAgICB9KSkge1xuICAgICAgICBpc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gLy8gQnlwYXNzIGFueSBlZmZlY3RzIGZyb20gZmlyaW5nIHdoZW4gdGhpcyBjaGFuZ2VzXG5cblxuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEV4cGFuZGVkKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRFeHBhbmRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIGRhdGFdKTtcbiAgICB2YXIgdG9nZ2xlUm93RXhwYW5kZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlUm93RXhwYW5kZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlQWxsUm93c0V4cGFuZGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZXhwYW5kZWRSb3dzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocGFnaW5hdGVFeHBhbmRlZFJvd3MpIHtcbiAgICAgICAgcmV0dXJuIGV4cGFuZFJvd3Mocm93cywge1xuICAgICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5OiBtYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXG4gICAgICAgICAgZXhwYW5kU3ViUm93czogZXhwYW5kU3ViUm93c1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSwgW3BhZ2luYXRlRXhwYW5kZWRSb3dzLCByb3dzLCBtYW51YWxFeHBhbmRlZEtleSwgZXhwYW5kZWQsIGV4cGFuZFN1YlJvd3NdKTtcbiAgICB2YXIgZXhwYW5kZWREZXB0aCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZpbmRFeHBhbmRlZERlcHRoKGV4cGFuZGVkKTtcbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIHZhciBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlRXhwYW5kZWRSb3dzOiByb3dzLFxuICAgICAgZXhwYW5kZWRSb3dzOiBleHBhbmRlZFJvd3MsXG4gICAgICByb3dzOiBleHBhbmRlZFJvd3MsXG4gICAgICBleHBhbmRlZERlcHRoOiBleHBhbmRlZERlcHRoLFxuICAgICAgaXNBbGxSb3dzRXhwYW5kZWQ6IGlzQWxsUm93c0V4cGFuZGVkLFxuICAgICAgdG9nZ2xlUm93RXhwYW5kZWQ6IHRvZ2dsZVJvd0V4cGFuZGVkLFxuICAgICAgdG9nZ2xlQWxsUm93c0V4cGFuZGVkOiB0b2dnbGVBbGxSb3dzRXhwYW5kZWQsXG4gICAgICBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wczogZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3cocm93LCBfcmVmMykge1xuICAgIHZhciBnZXRIb29rcyA9IF9yZWYzLmluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuXG4gICAgcm93LnRvZ2dsZVJvd0V4cGFuZGVkID0gZnVuY3Rpb24gKHNldCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZVJvd0V4cGFuZGVkKHJvdy5pZCwgc2V0KTtcbiAgICB9O1xuXG4gICAgcm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgIHJvdzogcm93XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRXhwYW5kZWREZXB0aChleHBhbmRlZCkge1xuICAgIHZhciBtYXhEZXB0aCA9IDA7XG4gICAgT2JqZWN0LmtleXMoZXhwYW5kZWQpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICB2YXIgc3BsaXRJZCA9IGlkLnNwbGl0KCcuJyk7XG4gICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBzcGxpdElkLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heERlcHRoO1xuICB9XG5cbiAgdmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByb3dzID0gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhyb3dWYWx1ZSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvd3M7XG4gIH07XG5cbiAgdGV4dC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBleGFjdFRleHQgPSBmdW5jdGlvbiBleGFjdFRleHQocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZCA/IFN0cmluZyhyb3dWYWx1ZSkudG9Mb3dlckNhc2UoKSA9PT0gU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpIDogdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGV4YWN0VGV4dC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBleGFjdFRleHRDYXNlID0gZnVuY3Rpb24gZXhhY3RUZXh0Q2FzZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkID8gU3RyaW5nKHJvd1ZhbHVlKSA9PT0gU3RyaW5nKGZpbHRlclZhbHVlKSA6IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdFRleHRDYXNlLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWw7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUuaW5jbHVkZXMoZmlsdGVyVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXMuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgaW5jbHVkZXNBbGwgPSBmdW5jdGlvbiBpbmNsdWRlc0FsbChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAmJiByb3dWYWx1ZS5sZW5ndGggJiYgZmlsdGVyVmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiByb3dWYWx1ZS5pbmNsdWRlcyh2YWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzQWxsLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzU29tZSA9IGZ1bmN0aW9uIGluY2x1ZGVzU29tZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAmJiByb3dWYWx1ZS5sZW5ndGggJiYgZmlsdGVyVmFsdWUuc29tZShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXNTb21lLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzVmFsdWUgPSBmdW5jdGlvbiBpbmNsdWRlc1ZhbHVlKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIGZpbHRlclZhbHVlLmluY2x1ZGVzKHJvd1ZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzVmFsdWUuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgZXhhY3QgPSBmdW5jdGlvbiBleGFjdChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA9PT0gZmlsdGVyVmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbiAgfTtcblxuICB2YXIgZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA9PSBmaWx0ZXJWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGVxdWFscy5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbDtcbiAgfTtcblxuICB2YXIgYmV0d2VlbiA9IGZ1bmN0aW9uIGJldHdlZW4ocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHZhciBfcmVmID0gZmlsdGVyVmFsdWUgfHwgW10sXG4gICAgICAgIG1pbiA9IF9yZWZbMF0sXG4gICAgICAgIG1heCA9IF9yZWZbMV07XG5cbiAgICBtaW4gPSB0eXBlb2YgbWluID09PSAnbnVtYmVyJyA/IG1pbiA6IC1JbmZpbml0eTtcbiAgICBtYXggPSB0eXBlb2YgbWF4ID09PSAnbnVtYmVyJyA/IG1heCA6IEluZmluaXR5O1xuXG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgdmFyIHRlbXAgPSBtaW47XG4gICAgICBtaW4gPSBtYXg7XG4gICAgICBtYXggPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgPj0gbWluICYmIHJvd1ZhbHVlIDw9IG1heDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGJldHdlZW4uYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCB0eXBlb2YgdmFsWzBdICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsWzFdICE9PSAnbnVtYmVyJztcbiAgfTtcblxuICB2YXIgZmlsdGVyVHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHRleHQ6IHRleHQsXG4gICAgZXhhY3RUZXh0OiBleGFjdFRleHQsXG4gICAgZXhhY3RUZXh0Q2FzZTogZXhhY3RUZXh0Q2FzZSxcbiAgICBpbmNsdWRlczogaW5jbHVkZXMsXG4gICAgaW5jbHVkZXNBbGw6IGluY2x1ZGVzQWxsLFxuICAgIGluY2x1ZGVzU29tZTogaW5jbHVkZXNTb21lLFxuICAgIGluY2x1ZGVzVmFsdWU6IGluY2x1ZGVzVmFsdWUsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIGVxdWFsczogZXF1YWxzLFxuICAgIGJldHdlZW46IGJldHdlZW5cbiAgfSk7XG5cbiAgYWN0aW9ucy5yZXNldEZpbHRlcnMgPSAncmVzZXRGaWx0ZXJzJztcbiAgYWN0aW9ucy5zZXRGaWx0ZXIgPSAnc2V0RmlsdGVyJztcbiAgYWN0aW9ucy5zZXRBbGxGaWx0ZXJzID0gJ3NldEFsbEZpbHRlcnMnO1xuICB2YXIgdXNlRmlsdGVycyA9IGZ1bmN0aW9uIHVzZUZpbHRlcnMoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQyKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDIpO1xuICB9O1xuICB1c2VGaWx0ZXJzLnBsdWdpbk5hbWUgPSAndXNlRmlsdGVycyc7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQyKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGZpbHRlcnM6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0RmlsdGVycykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBmaWx0ZXJzOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZmlsdGVycyB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEZpbHRlcikge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIGZpbHRlclZhbHVlID0gYWN0aW9uLmZpbHRlclZhbHVlO1xuICAgICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzO1xuICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QtVGFibGU6IENvdWxkIG5vdCBmaW5kIGEgY29sdW1uIHdpdGggaWQ6IFwiICsgY29sdW1uSWQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGNvbHVtbi5maWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuICAgICAgdmFyIHByZXZpb3VzZmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld0ZpbHRlciA9IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVyVmFsdWUsIHByZXZpb3VzZmlsdGVyICYmIHByZXZpb3VzZmlsdGVyLnZhbHVlKTsgLy9cblxuICAgICAgaWYgKHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoZmlsdGVyTWV0aG9kLmF1dG9SZW1vdmUsIG5ld0ZpbHRlciwgY29sdW1uKSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZpb3VzZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGQuaWQgPT09IGNvbHVtbklkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdGaWx0ZXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZmlsdGVyczogW10uY29uY2F0KHN0YXRlLmZpbHRlcnMsIFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIHZhbHVlOiBuZXdGaWx0ZXJcbiAgICAgICAgfV0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0QWxsRmlsdGVycykge1xuICAgICAgdmFyIGZpbHRlcnMgPSBhY3Rpb24uZmlsdGVycztcbiAgICAgIHZhciBfYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgICAgX3VzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgZmlsdGVyczogZnVuY3Rpb25hbFVwZGF0ZShmaWx0ZXJzLCBzdGF0ZS5maWx0ZXJzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgIHZhciBjb2x1bW4gPSBfYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gZmlsdGVyLmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChjb2x1bW4uZmlsdGVyLCBfdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihmaWx0ZXJNZXRob2QuYXV0b1JlbW92ZSwgZmlsdGVyLnZhbHVlLCBjb2x1bW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQyKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzLFxuICAgICAgICBtYW51YWxGaWx0ZXJzID0gaW5zdGFuY2UubWFudWFsRmlsdGVycyxcbiAgICAgICAgX2luc3RhbmNlJGRlZmF1bHRDYW5GID0gaW5zdGFuY2UuZGVmYXVsdENhbkZpbHRlcixcbiAgICAgICAgZGVmYXVsdENhbkZpbHRlciA9IF9pbnN0YW5jZSRkZWZhdWx0Q2FuRiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaW5zdGFuY2UkZGVmYXVsdENhbkYsXG4gICAgICAgIGRpc2FibGVGaWx0ZXJzID0gaW5zdGFuY2UuZGlzYWJsZUZpbHRlcnMsXG4gICAgICAgIGZpbHRlcnMgPSBpbnN0YW5jZS5zdGF0ZS5maWx0ZXJzLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0RmkgPSBpbnN0YW5jZS5hdXRvUmVzZXRGaWx0ZXJzLFxuICAgICAgICBhdXRvUmVzZXRGaWx0ZXJzID0gX2luc3RhbmNlJGF1dG9SZXNldEZpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEZpO1xuICAgIHZhciBzZXRGaWx0ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIGZpbHRlclZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0RmlsdGVyLFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIGZpbHRlclZhbHVlOiBmaWx0ZXJWYWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldEFsbEZpbHRlcnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZmlsdGVycykge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEFsbEZpbHRlcnMsXG4gICAgICAgIGZpbHRlcnM6IGZpbHRlcnNcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgaWQgPSBjb2x1bW4uaWQsXG4gICAgICAgICAgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgY29sdW1uRGVmYXVsdENhbkZpbHRlciA9IGNvbHVtbi5kZWZhdWx0Q2FuRmlsdGVyLFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVGaWx0ZXJzID0gY29sdW1uLmRpc2FibGVGaWx0ZXJzOyAvLyBEZXRlcm1pbmUgaWYgYSBjb2x1bW4gaXMgZmlsdGVyYWJsZVxuXG4gICAgICBjb2x1bW4uY2FuRmlsdGVyID0gYWNjZXNzb3IgPyBnZXRGaXJzdERlZmluZWQoY29sdW1uRGlzYWJsZUZpbHRlcnMgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUZpbHRlcnMgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uRGVmYXVsdENhbkZpbHRlciwgZGVmYXVsdENhbkZpbHRlciwgZmFsc2UpOyAvLyBQcm92aWRlIHRoZSBjb2x1bW4gYSB3YXkgb2YgdXBkYXRpbmcgdGhlIGZpbHRlciB2YWx1ZVxuXG4gICAgICBjb2x1bW4uc2V0RmlsdGVyID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gc2V0RmlsdGVyKGNvbHVtbi5pZCwgdmFsKTtcbiAgICAgIH07IC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgZmlsdGVyIHZhbHVlIHRvIHRoZSBjb2x1bW4gZm9yXG4gICAgICAvLyBjb252ZW5pZW5jZVxuXG5cbiAgICAgIHZhciBmb3VuZCA9IGZpbHRlcnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5maWx0ZXJWYWx1ZSA9IGZvdW5kICYmIGZvdW5kLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWFudWFsRmlsdGVycyB8fCAhZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93cywgcm93c0J5SWRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsdGVyZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIGZpbHRlcmVkUm93c0J5SWQgPSB7fTsgLy8gRmlsdGVycyB0b3AgbGV2ZWwgYW5kIG5lc3RlZCByb3dzXG5cbiAgICAgIHZhciBmaWx0ZXJSb3dzID0gZnVuY3Rpb24gZmlsdGVyUm93cyhyb3dzLCBkZXB0aCkge1xuICAgICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaWx0ZXJlZFJvd3MgPSByb3dzO1xuICAgICAgICBmaWx0ZXJlZFJvd3MgPSBmaWx0ZXJzLnJlZHVjZShmdW5jdGlvbiAoZmlsdGVyZWRTb0ZhciwgX3JlZikge1xuICAgICAgICAgIHZhciBjb2x1bW5JZCA9IF9yZWYuaWQsXG4gICAgICAgICAgICAgIGZpbHRlclZhbHVlID0gX3JlZi52YWx1ZTtcbiAgICAgICAgICAvLyBGaW5kIHRoZSBmaWx0ZXJzIGNvbHVtblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbHVtbi5wcmVGaWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFNvRmFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoY29sdW1uLmZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgICAgICBpZiAoIWZpbHRlck1ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGZpbmQgYSB2YWxpZCAnY29sdW1uLmZpbHRlcicgZm9yIGNvbHVtbiB3aXRoIHRoZSBJRDogXCIgKyBjb2x1bW4uaWQgKyBcIi5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9IC8vIFBhc3MgdGhlIHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSBhbmQgY29sdW1uIHRvIHRoZSBmaWx0ZXJNZXRob2RcbiAgICAgICAgICAvLyB0byBnZXQgdGhlIGZpbHRlcmVkIHJvd3MgYmFja1xuXG5cbiAgICAgICAgICBjb2x1bW4uZmlsdGVyZWRSb3dzID0gZmlsdGVyTWV0aG9kKGZpbHRlcmVkU29GYXIsIFtjb2x1bW5JZF0sIGZpbHRlclZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLmZpbHRlcmVkUm93cztcbiAgICAgICAgfSwgcm93cyk7IC8vIEFwcGx5IHRoZSBmaWx0ZXIgdG8gYW55IHN1YlJvd3NcbiAgICAgICAgLy8gV2UgdGVjaG5pY2FsbHkgY291bGQgZG8gdGhpcyByZWN1cnNpdmVseSBpbiB0aGUgYWJvdmUgbG9vcCxcbiAgICAgICAgLy8gYnV0IHRoYXQgd291bGQgc2V2ZXJlbHkgaGluZGVyIHRoZSBBUEkgZm9yIHRoZSB1c2VyLCBzaW5jZSB0aGV5XG4gICAgICAgIC8vIHdvdWxkIGJlIHJlcXVpcmVkIHRvIGRvIHRoYXQgcmVjdXJzaW9uIGluIHNvbWUgc2NlbmFyaW9zXG5cbiAgICAgICAgZmlsdGVyZWRSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIGZpbHRlcmVkRmxhdFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGZpbHRlcmVkUm93c0J5SWRbcm93LmlkXSA9IHJvdztcblxuICAgICAgICAgIGlmICghcm93LnN1YlJvd3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3cuc3ViUm93cyA9IHJvdy5zdWJSb3dzICYmIHJvdy5zdWJSb3dzLmxlbmd0aCA+IDAgPyBmaWx0ZXJSb3dzKHJvdy5zdWJSb3dzLCBkZXB0aCArIDEpIDogcm93LnN1YlJvd3M7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFtmaWx0ZXJSb3dzKHJvd3MpLCBmaWx0ZXJlZEZsYXRSb3dzLCBmaWx0ZXJlZFJvd3NCeUlkXTtcbiAgICB9LCBbbWFudWFsRmlsdGVycywgZmlsdGVycywgcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBhbGxDb2x1bW5zLCB1c2VyRmlsdGVyVHlwZXNdKSxcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGZpbHRlcmVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZmlsdGVyZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBOb3cgdGhhdCBlYWNoIGZpbHRlcmVkIGNvbHVtbiBoYXMgaXQncyBwYXJ0aWFsbHkgZmlsdGVyZWQgcm93cyxcbiAgICAgIC8vIGxldHMgYXNzaWduIHRoZSBmaW5hbCBmaWx0ZXJlZCByb3dzIHRvIGFsbCBvZiB0aGUgb3RoZXIgY29sdW1uc1xuICAgICAgdmFyIG5vbkZpbHRlcmVkQ29sdW1ucyA9IGFsbENvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuICFmaWx0ZXJzLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBUaGlzIGVzc2VudGlhbGx5IGVuYWJsZXMgZmFjZXRlZCBmaWx0ZXIgb3B0aW9ucyB0byBiZSBidWlsdCBlYXNpbHlcbiAgICAgIC8vIHVzaW5nIGV2ZXJ5IGNvbHVtbidzIHByZUZpbHRlcmVkUm93cyB2YWx1ZVxuXG4gICAgICBub25GaWx0ZXJlZENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIGNvbHVtbi5wcmVGaWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFJvd3M7XG4gICAgICAgIGNvbHVtbi5maWx0ZXJlZFJvd3MgPSBmaWx0ZXJlZFJvd3M7XG4gICAgICB9KTtcbiAgICB9LCBbZmlsdGVyZWRSb3dzLCBmaWx0ZXJzLCBhbGxDb2x1bW5zXSk7XG4gICAgdmFyIGdldEF1dG9SZXNldEZpbHRlcnMgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0RmlsdGVycyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0RmlsdGVycygpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0RmlsdGVyc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbnVhbEZpbHRlcnMgPyBudWxsIDogZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZUZpbHRlcmVkUm93czogcm93cyxcbiAgICAgIHByZUZpbHRlcmVkRmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgcHJlRmlsdGVyZWRSb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICBmaWx0ZXJlZFJvd3M6IGZpbHRlcmVkUm93cyxcbiAgICAgIGZpbHRlcmVkRmxhdFJvd3M6IGZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICBmaWx0ZXJlZFJvd3NCeUlkOiBmaWx0ZXJlZFJvd3NCeUlkLFxuICAgICAgcm93czogZmlsdGVyZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IGZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICByb3dzQnlJZDogZmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHNldEZpbHRlcjogc2V0RmlsdGVyLFxuICAgICAgc2V0QWxsRmlsdGVyczogc2V0QWxsRmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlciA9ICdyZXNldEdsb2JhbEZpbHRlcic7XG4gIGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyID0gJ3NldEdsb2JhbEZpbHRlcic7XG4gIHZhciB1c2VHbG9iYWxGaWx0ZXIgPSBmdW5jdGlvbiB1c2VHbG9iYWxGaWx0ZXIoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQzKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDMpO1xuICB9O1xuICB1c2VHbG9iYWxGaWx0ZXIucGx1Z2luTmFtZSA9ICd1c2VHbG9iYWxGaWx0ZXInO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMyhzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlcikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBnbG9iYWxGaWx0ZXI6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5nbG9iYWxGaWx0ZXIgfHwgdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyKSB7XG4gICAgICB2YXIgZmlsdGVyVmFsdWUgPSBhY3Rpb24uZmlsdGVyVmFsdWU7XG4gICAgICB2YXIgdXNlckZpbHRlclR5cGVzID0gaW5zdGFuY2UudXNlckZpbHRlclR5cGVzO1xuICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChpbnN0YW5jZS5nbG9iYWxGaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuICAgICAgdmFyIG5ld0ZpbHRlciA9IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVyVmFsdWUsIHN0YXRlLmdsb2JhbEZpbHRlcik7IC8vXG5cbiAgICAgIGlmIChzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGZpbHRlck1ldGhvZC5hdXRvUmVtb3ZlLCBuZXdGaWx0ZXIpKSB7XG4gICAgICAgIHZhciBnbG9iYWxGaWx0ZXIgPSBzdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgICAgICBzdGF0ZVdpdGhvdXRHbG9iYWxGaWx0ZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzdGF0ZSwgW1wiZ2xvYmFsRmlsdGVyXCJdKTtcblxuICAgICAgICByZXR1cm4gc3RhdGVXaXRob3V0R2xvYmFsRmlsdGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdsb2JhbEZpbHRlcjogbmV3RmlsdGVyXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQzKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLmZpbHRlclR5cGVzLFxuICAgICAgICBnbG9iYWxGaWx0ZXIgPSBpbnN0YW5jZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIG1hbnVhbEdsb2JhbEZpbHRlciA9IGluc3RhbmNlLm1hbnVhbEdsb2JhbEZpbHRlcixcbiAgICAgICAgZ2xvYmFsRmlsdGVyVmFsdWUgPSBpbnN0YW5jZS5zdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRHbCA9IGluc3RhbmNlLmF1dG9SZXNldEdsb2JhbEZpbHRlcixcbiAgICAgICAgYXV0b1Jlc2V0R2xvYmFsRmlsdGVyID0gX2luc3RhbmNlJGF1dG9SZXNldEdsID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEdsLFxuICAgICAgICBkaXNhYmxlR2xvYmFsRmlsdGVyID0gaW5zdGFuY2UuZGlzYWJsZUdsb2JhbEZpbHRlcjtcbiAgICB2YXIgc2V0R2xvYmFsRmlsdGVyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGZpbHRlclZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0R2xvYmFsRmlsdGVyLFxuICAgICAgICBmaWx0ZXJWYWx1ZTogZmlsdGVyVmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pOyAvLyBUT0RPOiBDcmVhdGUgYSBmaWx0ZXIgY2FjaGUgZm9yIGluY3JlbWVudGFsIGhpZ2ggc3BlZWQgbXVsdGktZmlsdGVyaW5nXG4gICAgLy8gVGhpcyBnZXRzIHByZXR0eSBjb21wbGljYXRlZCBwcmV0dHkgZmFzdCwgc2luY2UgeW91IGhhdmUgdG8gbWFpbnRhaW4gYVxuICAgIC8vIGNhY2hlIGZvciBlYWNoIHJvdyBncm91cCAodG9wLWxldmVsIHJvd3MsIGFuZCBlYWNoIHJvdydzIHJlY3Vyc2l2ZSBzdWJyb3dzKVxuICAgIC8vIFRoaXMgd291bGQgbWFrZSBtdWx0aS1maWx0ZXJpbmcgYSBsb3QgZmFzdGVyIHRob3VnaC4gVG9vIGZhcj9cblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEdsb2JhbEZpbHRlciB8fCB0eXBlb2YgZ2xvYmFsRmlsdGVyVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlcmVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBmaWx0ZXJlZFJvd3NCeUlkID0ge307XG4gICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGdsb2JhbEZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG5cbiAgICAgIGlmICghZmlsdGVyTWV0aG9kKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBmaW5kIGEgdmFsaWQgJ2dsb2JhbEZpbHRlcicgb3B0aW9uLlwiKTtcbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICB9XG5cbiAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHZhciBjb2x1bW5EaXNhYmxlR2xvYmFsRmlsdGVyID0gY29sdW1uLmRpc2FibGVHbG9iYWxGaWx0ZXI7XG4gICAgICAgIGNvbHVtbi5jYW5GaWx0ZXIgPSBnZXRGaXJzdERlZmluZWQoY29sdW1uRGlzYWJsZUdsb2JhbEZpbHRlciA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlR2xvYmFsRmlsdGVyID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICB2YXIgZmlsdGVyYWJsZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYy5jYW5GaWx0ZXIgPT09IHRydWU7XG4gICAgICB9KTsgLy8gRmlsdGVycyB0b3AgbGV2ZWwgYW5kIG5lc3RlZCByb3dzXG5cbiAgICAgIHZhciBmaWx0ZXJSb3dzID0gZnVuY3Rpb24gZmlsdGVyUm93cyhmaWx0ZXJlZFJvd3MpIHtcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gZmlsdGVyTWV0aG9kKGZpbHRlcmVkUm93cywgZmlsdGVyYWJsZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pLCBnbG9iYWxGaWx0ZXJWYWx1ZSk7XG4gICAgICAgIGZpbHRlcmVkUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBmaWx0ZXJlZEZsYXRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgICBmaWx0ZXJlZFJvd3NCeUlkW3Jvdy5pZF0gPSByb3c7XG4gICAgICAgICAgcm93LnN1YlJvd3MgPSByb3cuc3ViUm93cyAmJiByb3cuc3ViUm93cy5sZW5ndGggPyBmaWx0ZXJSb3dzKHJvdy5zdWJSb3dzKSA6IHJvdy5zdWJSb3dzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBbZmlsdGVyUm93cyhyb3dzKSwgZmlsdGVyZWRGbGF0Um93cywgZmlsdGVyZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEdsb2JhbEZpbHRlciwgZ2xvYmFsRmlsdGVyVmFsdWUsIGdsb2JhbEZpbHRlciwgdXNlckZpbHRlclR5cGVzLCBhbGxDb2x1bW5zLCByb3dzLCBmbGF0Um93cywgcm93c0J5SWQsIGRpc2FibGVHbG9iYWxGaWx0ZXJdKSxcbiAgICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGdsb2JhbEZpbHRlcmVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgdmFyIGdldEF1dG9SZXNldEdsb2JhbEZpbHRlciA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRHbG9iYWxGaWx0ZXIpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEdsb2JhbEZpbHRlcigpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0R2xvYmFsRmlsdGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsR2xvYmFsRmlsdGVyID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZEZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHByZUdsb2JhbEZpbHRlcmVkUm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzOiBnbG9iYWxGaWx0ZXJlZFJvd3MsXG4gICAgICBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzOiBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZDogZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHJvd3M6IGdsb2JhbEZpbHRlcmVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGdsb2JhbEZpbHRlcmVkUm93c0J5SWQsXG4gICAgICBzZXRHbG9iYWxGaWx0ZXI6IHNldEdsb2JhbEZpbHRlcixcbiAgICAgIGRpc2FibGVHbG9iYWxGaWx0ZXI6IGRpc2FibGVHbG9iYWxGaWx0ZXJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1bSh2YWx1ZXMsIGFnZ3JlZ2F0ZWRWYWx1ZXMpIHtcbiAgICAvLyBJdCdzIGZhc3RlciB0byBqdXN0IGFkZCB0aGUgYWdncmVnYXRpb25zIHRvZ2V0aGVyIGluc3RlYWQgb2ZcbiAgICAvLyBwcm9jZXNzIGxlYWYgbm9kZXMgaW5kaXZpZHVhbGx5XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRWYWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIG5leHQpIHtcbiAgICAgIHJldHVybiBzdW0gKyAodHlwZW9mIG5leHQgPT09ICdudW1iZXInID8gbmV4dCA6IDApO1xuICAgIH0sIDApO1xuICB9XG4gIGZ1bmN0aW9uIG1pbih2YWx1ZXMpIHtcbiAgICB2YXIgbWluID0gdmFsdWVzWzBdIHx8IDA7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGZ1bmN0aW9uIG1heCh2YWx1ZXMpIHtcbiAgICB2YXIgbWF4ID0gdmFsdWVzWzBdIHx8IDA7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIGZ1bmN0aW9uIG1pbk1heCh2YWx1ZXMpIHtcbiAgICB2YXIgbWluID0gdmFsdWVzWzBdIHx8IDA7XG4gICAgdmFyIG1heCA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSk7XG4gICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtaW4gKyBcIi4uXCIgKyBtYXg7XG4gIH1cbiAgZnVuY3Rpb24gYXZlcmFnZSh2YWx1ZXMpIHtcbiAgICByZXR1cm4gc3VtKG51bGwsIHZhbHVlcykgLyB2YWx1ZXMubGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIG1lZGlhbih2YWx1ZXMpIHtcbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtaWQgPSBNYXRoLmZsb29yKHZhbHVlcy5sZW5ndGggLyAyKTtcbiAgICB2YXIgbnVtcyA9IFtdLmNvbmNhdCh2YWx1ZXMpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzLmxlbmd0aCAlIDIgIT09IDAgPyBudW1zW21pZF0gOiAobnVtc1ttaWQgLSAxXSArIG51bXNbbWlkXSkgLyAyO1xuICB9XG4gIGZ1bmN0aW9uIHVuaXF1ZSh2YWx1ZXMpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcykudmFsdWVzKCkpO1xuICB9XG4gIGZ1bmN0aW9uIHVuaXF1ZUNvdW50KHZhbHVlcykge1xuICAgIHJldHVybiBuZXcgU2V0KHZhbHVlcykuc2l6ZTtcbiAgfVxuICBmdW5jdGlvbiBjb3VudCh2YWx1ZXMpIHtcbiAgICByZXR1cm4gdmFsdWVzLmxlbmd0aDtcbiAgfVxuXG4gIHZhciBhZ2dyZWdhdGlvbnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHN1bTogc3VtLFxuICAgIG1pbjogbWluLFxuICAgIG1heDogbWF4LFxuICAgIG1pbk1heDogbWluTWF4LFxuICAgIGF2ZXJhZ2U6IGF2ZXJhZ2UsXG4gICAgbWVkaWFuOiBtZWRpYW4sXG4gICAgdW5pcXVlOiB1bmlxdWUsXG4gICAgdW5pcXVlQ291bnQ6IHVuaXF1ZUNvdW50LFxuICAgIGNvdW50OiBjb3VudFxuICB9KTtcblxuICB2YXIgZW1wdHlBcnJheSA9IFtdO1xuICB2YXIgZW1wdHlPYmplY3QgPSB7fTsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMucmVzZXRHcm91cEJ5ID0gJ3Jlc2V0R3JvdXBCeSc7XG4gIGFjdGlvbnMuc2V0R3JvdXBCeSA9ICdzZXRHcm91cEJ5JztcbiAgYWN0aW9ucy50b2dnbGVHcm91cEJ5ID0gJ3RvZ2dsZUdyb3VwQnknO1xuICB2YXIgdXNlR3JvdXBCeSA9IGZ1bmN0aW9uIHVzZUdyb3VwQnkoaG9va3MpIHtcbiAgICBob29rcy5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMgPSBbZGVmYXVsdEdldEdyb3VwQnlUb2dnbGVQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkNCk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2goZnVuY3Rpb24gKGRlcHMsIF9yZWYpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5ncm91cEJ5XSk7XG4gICAgfSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaCh2aXNpYmxlQ29sdW1ucyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ0KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQxKTtcbiAgfTtcbiAgdXNlR3JvdXBCeS5wbHVnaW5OYW1lID0gJ3VzZUdyb3VwQnknO1xuXG4gIHZhciBkZWZhdWx0R2V0R3JvdXBCeVRvZ2dsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEdyb3VwQnlUb2dnbGVQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgaGVhZGVyID0gX3JlZjIuaGVhZGVyO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGhlYWRlci5jYW5Hcm91cEJ5ID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIGhlYWRlci50b2dnbGVHcm91cEJ5KCk7XG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBoZWFkZXIuY2FuR3JvdXBCeSA/ICdwb2ludGVyJyA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEdyb3VwQnknXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNChzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBncm91cEJ5OiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEdyb3VwQnkpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ3JvdXBCeTogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmdyb3VwQnkgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRHcm91cEJ5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyb3VwQnk6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlR3JvdXBCeSkge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIHNldEdyb3VwQnkgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgcmVzb2x2ZWRHcm91cEJ5ID0gdHlwZW9mIHNldEdyb3VwQnkgIT09ICd1bmRlZmluZWQnID8gc2V0R3JvdXBCeSA6ICFzdGF0ZS5ncm91cEJ5LmluY2x1ZGVzKGNvbHVtbklkKTtcblxuICAgICAgaWYgKHJlc29sdmVkR3JvdXBCeSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZ3JvdXBCeTogW10uY29uY2F0KHN0YXRlLmdyb3VwQnksIFtjb2x1bW5JZF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyb3VwQnk6IHN0YXRlLmdyb3VwQnkuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQgIT09IGNvbHVtbklkO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMoY29sdW1ucywgX3JlZjMpIHtcbiAgICB2YXIgZ3JvdXBCeSA9IF9yZWYzLmluc3RhbmNlLnN0YXRlLmdyb3VwQnk7XG4gICAgLy8gU29ydCBncm91cGVkIGNvbHVtbnMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjb2x1bW4gbGlzdFxuICAgIC8vIGJlZm9yZSB0aGUgaGVhZGVycyBhcmUgYnVpbHRcbiAgICB2YXIgZ3JvdXBCeUNvbHVtbnMgPSBncm91cEJ5Lm1hcChmdW5jdGlvbiAoZykge1xuICAgICAgcmV0dXJuIGNvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIHJldHVybiBjb2wuaWQgPT09IGc7XG4gICAgICB9KTtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgdmFyIG5vbkdyb3VwQnlDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgcmV0dXJuICFncm91cEJ5LmluY2x1ZGVzKGNvbC5pZCk7XG4gICAgfSk7XG4gICAgY29sdW1ucyA9IFtdLmNvbmNhdChncm91cEJ5Q29sdW1ucywgbm9uR3JvdXBCeUNvbHVtbnMpO1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4uaXNHcm91cGVkID0gZ3JvdXBCeS5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgICAgY29sdW1uLmdyb3VwZWRJbmRleCA9IGdyb3VwQnkuaW5kZXhPZihjb2x1bW4uaWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRVc2VyQWdncmVnYXRpb25zID0ge307XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkNChpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBfaW5zdGFuY2UkZ3JvdXBCeUZuID0gaW5zdGFuY2UuZ3JvdXBCeUZuLFxuICAgICAgICBncm91cEJ5Rm4gPSBfaW5zdGFuY2UkZ3JvdXBCeUZuID09PSB2b2lkIDAgPyBkZWZhdWx0R3JvdXBCeUZuIDogX2luc3RhbmNlJGdyb3VwQnlGbixcbiAgICAgICAgbWFudWFsR3JvdXBCeSA9IGluc3RhbmNlLm1hbnVhbEdyb3VwQnksXG4gICAgICAgIF9pbnN0YW5jZSRhZ2dyZWdhdGlvbiA9IGluc3RhbmNlLmFnZ3JlZ2F0aW9ucyxcbiAgICAgICAgdXNlckFnZ3JlZ2F0aW9ucyA9IF9pbnN0YW5jZSRhZ2dyZWdhdGlvbiA9PT0gdm9pZCAwID8gZGVmYXVsdFVzZXJBZ2dyZWdhdGlvbnMgOiBfaW5zdGFuY2UkYWdncmVnYXRpb24sXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICBncm91cEJ5ID0gaW5zdGFuY2Uuc3RhdGUuZ3JvdXBCeSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEdyID0gaW5zdGFuY2UuYXV0b1Jlc2V0R3JvdXBCeSxcbiAgICAgICAgYXV0b1Jlc2V0R3JvdXBCeSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRHciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRHcixcbiAgICAgICAgZGlzYWJsZUdyb3VwQnkgPSBpbnN0YW5jZS5kaXNhYmxlR3JvdXBCeSxcbiAgICAgICAgZGVmYXVsdENhbkdyb3VwQnkgPSBpbnN0YW5jZS5kZWZhdWx0Q2FuR3JvdXBCeSxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUNvbHVtbk9yZGVyJywgJ3VzZUZpbHRlcnMnXSwgJ3VzZUdyb3VwQnknKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgZGVmYXVsdENvbHVtbkdyb3VwQnkgPSBjb2x1bW4uZGVmYXVsdEdyb3VwQnksXG4gICAgICAgICAgY29sdW1uRGlzYWJsZUdyb3VwQnkgPSBjb2x1bW4uZGlzYWJsZUdyb3VwQnk7XG4gICAgICBjb2x1bW4uY2FuR3JvdXBCeSA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5jYW5Hcm91cEJ5LCBjb2x1bW5EaXNhYmxlR3JvdXBCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlR3JvdXBCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKSA6IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuR3JvdXBCeSwgZGVmYXVsdENvbHVtbkdyb3VwQnksIGRlZmF1bHRDYW5Hcm91cEJ5LCBmYWxzZSk7XG5cbiAgICAgIGlmIChjb2x1bW4uY2FuR3JvdXBCeSkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlR3JvdXBCeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlR3JvdXBCeShjb2x1bW4uaWQpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4uQWdncmVnYXRlZCA9IGNvbHVtbi5BZ2dyZWdhdGVkIHx8IGNvbHVtbi5DZWxsO1xuICAgIH0pO1xuICAgIHZhciB0b2dnbGVHcm91cEJ5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUdyb3VwQnksXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgc2V0R3JvdXBCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEdyb3VwQnksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICBoZWFkZXIuZ2V0R3JvdXBCeVRvZ2dsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEdyb3VwQnkgfHwgIWdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBlbXB0eUFycmF5LCBlbXB0eU9iamVjdCwgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH0gLy8gRW5zdXJlIHRoYXQgdGhlIGxpc3Qgb2YgZmlsdGVyZWQgY29sdW1ucyBleGlzdFxuXG5cbiAgICAgIHZhciBleGlzdGluZ0dyb3VwQnkgPSBncm91cEJ5LmZpbHRlcihmdW5jdGlvbiAoZykge1xuICAgICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gY29sLmlkID09PSBnO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBGaW5kIHRoZSBjb2x1bW5zIHRoYXQgY2FuIG9yIGFyZSBhZ2dyZWdhdGluZ1xuICAgICAgLy8gVXNlcyBlYWNoIGNvbHVtbiB0byBhZ2dyZWdhdGUgcm93cyBpbnRvIGEgc2luZ2xlIHZhbHVlXG5cbiAgICAgIHZhciBhZ2dyZWdhdGVSb3dzVG9WYWx1ZXMgPSBmdW5jdGlvbiBhZ2dyZWdhdGVSb3dzVG9WYWx1ZXMobGVhZlJvd3MsIGdyb3VwZWRSb3dzLCBkZXB0aCkge1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG4gICAgICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgLy8gRG9uJ3QgYWdncmVnYXRlIGNvbHVtbnMgdGhhdCBhcmUgaW4gdGhlIGdyb3VwQnlcbiAgICAgICAgICBpZiAoZXhpc3RpbmdHcm91cEJ5LmluY2x1ZGVzKGNvbHVtbi5pZCkpIHtcbiAgICAgICAgICAgIHZhbHVlc1tjb2x1bW4uaWRdID0gZ3JvdXBlZFJvd3NbMF0gPyBncm91cGVkUm93c1swXS52YWx1ZXNbY29sdW1uLmlkXSA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBBZ2dyZWdhdGUgdGhlIHZhbHVlc1xuXG5cbiAgICAgICAgICB2YXIgYWdncmVnYXRlRm4gPSB0eXBlb2YgY29sdW1uLmFnZ3JlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5hZ2dyZWdhdGUgOiB1c2VyQWdncmVnYXRpb25zW2NvbHVtbi5hZ2dyZWdhdGVdIHx8IGFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlXTtcblxuICAgICAgICAgIGlmIChhZ2dyZWdhdGVGbikge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb2x1bW5WYWx1ZXMgdG8gYWdncmVnYXRlXG4gICAgICAgICAgICB2YXIgZ3JvdXBlZFZhbHVlcyA9IGdyb3VwZWRSb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW2NvbHVtbi5pZF07XG4gICAgICAgICAgICB9KTsgLy8gR2V0IHRoZSBjb2x1bW5WYWx1ZXMgdG8gYWdncmVnYXRlXG5cbiAgICAgICAgICAgIHZhciBsZWFmVmFsdWVzID0gbGVhZlJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbHVtblZhbHVlID0gcm93LnZhbHVlc1tjb2x1bW4uaWRdO1xuXG4gICAgICAgICAgICAgIGlmICghZGVwdGggJiYgY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFnZ3JlZ2F0ZVZhbHVlRm4gPSB0eXBlb2YgY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlID09PSAnZnVuY3Rpb24nID8gY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlIDogdXNlckFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlVmFsdWVdIHx8IGFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlVmFsdWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFhZ2dyZWdhdGVWYWx1ZUZuKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oe1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdCBUYWJsZTogSW52YWxpZCBjb2x1bW4uYWdncmVnYXRlVmFsdWUgb3B0aW9uIGZvciBjb2x1bW4gbGlzdGVkIGFib3ZlXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gYWdncmVnYXRlVmFsdWVGbihjb2x1bW5WYWx1ZSwgcm93LCBjb2x1bW4pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtblZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWx1ZXNbY29sdW1uLmlkXSA9IGFnZ3JlZ2F0ZUZuKGxlYWZWYWx1ZXMsIGdyb3VwZWRWYWx1ZXMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLmFnZ3JlZ2F0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKHtcbiAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QgVGFibGU6IEludmFsaWQgY29sdW1uLmFnZ3JlZ2F0ZSBvcHRpb24gZm9yIGNvbHVtbiBsaXN0ZWQgYWJvdmVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlc1tjb2x1bW4uaWRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfTtcblxuICAgICAgdmFyIGdyb3VwZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIGdyb3VwZWRSb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIG9ubHlHcm91cGVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBvbmx5R3JvdXBlZFJvd3NCeUlkID0ge307XG4gICAgICB2YXIgbm9uR3JvdXBlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgbm9uR3JvdXBlZFJvd3NCeUlkID0ge307IC8vIFJlY3Vyc2l2ZWx5IGdyb3VwIHRoZSBkYXRhXG5cbiAgICAgIHZhciBncm91cFVwUmVjdXJzaXZlbHkgPSBmdW5jdGlvbiBncm91cFVwUmVjdXJzaXZlbHkocm93cywgZGVwdGgsIHBhcmVudElkKSB7XG4gICAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGVwdGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbGFzdCBsZXZlbCwganVzdCByZXR1cm4gdGhlIHJvd3NcbiAgICAgICAgaWYgKGRlcHRoID09PSBleGlzdGluZ0dyb3VwQnkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29sdW1uSWQgPSBleGlzdGluZ0dyb3VwQnlbZGVwdGhdOyAvLyBHcm91cCB0aGUgcm93cyB0b2dldGhlciBmb3IgdGhpcyBsZXZlbFxuXG4gICAgICAgIHZhciByb3dHcm91cHNNYXAgPSBncm91cEJ5Rm4ocm93cywgY29sdW1uSWQpOyAvLyBQZWZvcm0gYWdncmVnYXRpb25zIGZvciBlYWNoIGdyb3VwXG5cbiAgICAgICAgdmFyIGFnZ3JlZ2F0ZWRHcm91cGVkUm93cyA9IE9iamVjdC5lbnRyaWVzKHJvd0dyb3Vwc01hcCkubWFwKGZ1bmN0aW9uIChfcmVmNCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgZ3JvdXBCeVZhbCA9IF9yZWY0WzBdLFxuICAgICAgICAgICAgICBncm91cGVkUm93cyA9IF9yZWY0WzFdO1xuICAgICAgICAgIHZhciBpZCA9IGNvbHVtbklkICsgXCI6XCIgKyBncm91cEJ5VmFsO1xuICAgICAgICAgIGlkID0gcGFyZW50SWQgPyBwYXJlbnRJZCArIFwiPlwiICsgaWQgOiBpZDsgLy8gRmlyc3QsIFJlY3Vyc2UgdG8gZ3JvdXAgc3ViIHJvd3MgYmVmb3JlIGFnZ3JlZ2F0aW9uXG5cbiAgICAgICAgICB2YXIgc3ViUm93cyA9IGdyb3VwVXBSZWN1cnNpdmVseShncm91cGVkUm93cywgZGVwdGggKyAxLCBpZCk7IC8vIEZsYXR0ZW4gdGhlIGxlYWYgcm93cyBvZiB0aGUgcm93cyBpbiB0aGlzIGdyb3VwXG5cbiAgICAgICAgICB2YXIgbGVhZlJvd3MgPSBkZXB0aCA/IGZsYXR0ZW5CeShncm91cGVkUm93cywgJ2xlYWZSb3dzJykgOiBncm91cGVkUm93cztcbiAgICAgICAgICB2YXIgdmFsdWVzID0gYWdncmVnYXRlUm93c1RvVmFsdWVzKGxlYWZSb3dzLCBncm91cGVkUm93cywgZGVwdGgpO1xuICAgICAgICAgIHZhciByb3cgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBpc0dyb3VwZWQ6IHRydWUsXG4gICAgICAgICAgICBncm91cEJ5SUQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgZ3JvdXBCeVZhbDogZ3JvdXBCeVZhbCxcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgc3ViUm93czogc3ViUm93cyxcbiAgICAgICAgICAgIGxlYWZSb3dzOiBsZWFmUm93cyxcbiAgICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgIH07XG4gICAgICAgICAgc3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJSb3cpIHtcbiAgICAgICAgICAgIGdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICBncm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcblxuICAgICAgICAgICAgaWYgKHN1YlJvdy5pc0dyb3VwZWQpIHtcbiAgICAgICAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICAgIG9ubHlHcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWdncmVnYXRlZEdyb3VwZWRSb3dzO1xuICAgICAgfTtcblxuICAgICAgdmFyIGdyb3VwZWRSb3dzID0gZ3JvdXBVcFJlY3Vyc2l2ZWx5KHJvd3MpO1xuICAgICAgZ3JvdXBlZFJvd3MuZm9yRWFjaChmdW5jdGlvbiAoc3ViUm93KSB7XG4gICAgICAgIGdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgIGdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuXG4gICAgICAgIGlmIChzdWJSb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgb25seUdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cy5wdXNoKHN1YlJvdyk7XG4gICAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBBc3NpZ24gdGhlIG5ldyBkYXRhXG5cbiAgICAgIHJldHVybiBbZ3JvdXBlZFJvd3MsIGdyb3VwZWRGbGF0Um93cywgZ3JvdXBlZFJvd3NCeUlkLCBvbmx5R3JvdXBlZEZsYXRSb3dzLCBvbmx5R3JvdXBlZFJvd3NCeUlkLCBub25Hcm91cGVkRmxhdFJvd3MsIG5vbkdyb3VwZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEdyb3VwQnksIGdyb3VwQnksIHJvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgYWxsQ29sdW1ucywgdXNlckFnZ3JlZ2F0aW9ucywgZ3JvdXBCeUZuXSksXG4gICAgICAgIGdyb3VwZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdLFxuICAgICAgICBncm91cGVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXSxcbiAgICAgICAgb25seUdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzNdLFxuICAgICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bNF0sXG4gICAgICAgIG5vbkdyb3VwZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzVdLFxuICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1s2XTtcblxuICAgIHZhciBnZXRBdXRvUmVzZXRHcm91cEJ5ID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEdyb3VwQnkpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEdyb3VwQnkoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEdyb3VwQnlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxHcm91cEJ5ID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVHcm91cGVkUm93czogcm93cyxcbiAgICAgIHByZUdyb3VwZWRGbGF0Um93OiBmbGF0Um93cyxcbiAgICAgIHByZUdyb3VwZWRSb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICBncm91cGVkUm93czogZ3JvdXBlZFJvd3MsXG4gICAgICBncm91cGVkRmxhdFJvd3M6IGdyb3VwZWRGbGF0Um93cyxcbiAgICAgIGdyb3VwZWRSb3dzQnlJZDogZ3JvdXBlZFJvd3NCeUlkLFxuICAgICAgb25seUdyb3VwZWRGbGF0Um93czogb25seUdyb3VwZWRGbGF0Um93cyxcbiAgICAgIG9ubHlHcm91cGVkUm93c0J5SWQ6IG9ubHlHcm91cGVkUm93c0J5SWQsXG4gICAgICBub25Hcm91cGVkRmxhdFJvd3M6IG5vbkdyb3VwZWRGbGF0Um93cyxcbiAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZDogbm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgcm93czogZ3JvdXBlZFJvd3MsXG4gICAgICBmbGF0Um93czogZ3JvdXBlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIHRvZ2dsZUdyb3VwQnk6IHRvZ2dsZUdyb3VwQnksXG4gICAgICBzZXRHcm91cEJ5OiBzZXRHcm91cEJ5XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93JDEocm93KSB7XG4gICAgcm93LmFsbENlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgIHZhciBfcm93JHN1YlJvd3M7XG5cbiAgICAgIC8vIEdyb3VwZWQgY2VsbHMgYXJlIGluIHRoZSBncm91cEJ5IGFuZCB0aGUgcGl2b3QgY2VsbCBmb3IgdGhlIHJvd1xuICAgICAgY2VsbC5pc0dyb3VwZWQgPSBjZWxsLmNvbHVtbi5pc0dyb3VwZWQgJiYgY2VsbC5jb2x1bW4uaWQgPT09IHJvdy5ncm91cEJ5SUQ7IC8vIFBsYWNlaG9sZGVyIGNlbGxzIGFyZSBhbnkgY29sdW1ucyBpbiB0aGUgZ3JvdXBCeSB0aGF0IGFyZSBub3QgZ3JvdXBlZFxuXG4gICAgICBjZWxsLmlzUGxhY2Vob2xkZXIgPSAhY2VsbC5pc0dyb3VwZWQgJiYgY2VsbC5jb2x1bW4uaXNHcm91cGVkOyAvLyBBZ2dyZWdhdGVkIGNlbGxzIGFyZSBub3QgZ3JvdXBlZCwgbm90IHJlcGVhdGVkLCBidXQgc3RpbGwgaGF2ZSBzdWJSb3dzXG5cbiAgICAgIGNlbGwuaXNBZ2dyZWdhdGVkID0gIWNlbGwuaXNHcm91cGVkICYmICFjZWxsLmlzUGxhY2Vob2xkZXIgJiYgKChfcm93JHN1YlJvd3MgPSByb3cuc3ViUm93cykgPT0gbnVsbCA/IHZvaWQgMCA6IF9yb3ckc3ViUm93cy5sZW5ndGgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdEdyb3VwQnlGbihyb3dzLCBjb2x1bW5JZCkge1xuICAgIHJldHVybiByb3dzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgcm93LCBpKSB7XG4gICAgICAvLyBUT0RPOiBNaWdodCB3YW50IHRvIGltcGxlbWVudCBhIGtleSBzZXJpYWxpemVyIGhlcmUgc29cbiAgICAgIC8vIGlycmVndWxhciBjb2x1bW4gdmFsdWVzIGNhbiBzdGlsbCBiZSBncm91cGVkIGlmIG5lZWRlZD9cbiAgICAgIHZhciByZXNLZXkgPSBcIlwiICsgcm93LnZhbHVlc1tjb2x1bW5JZF07XG4gICAgICBwcmV2W3Jlc0tleV0gPSBBcnJheS5pc0FycmF5KHByZXZbcmVzS2V5XSkgPyBwcmV2W3Jlc0tleV0gOiBbXTtcbiAgICAgIHByZXZbcmVzS2V5XS5wdXNoKHJvdyk7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIH1cblxuICB2YXIgcmVTcGxpdEFscGhhTnVtZXJpYyA9IC8oWzAtOV0rKS9nbTsgLy8gTWl4ZWQgc29ydGluZyBpcyBzbG93LCBidXQgdmVyeSBpbmNsdXNpdmUgb2YgbWFueSBlZGdlIGNhc2VzLlxuICAvLyBJdCBoYW5kbGVzIG51bWJlcnMsIG1peGVkIGFscGhhbnVtZXJpYyBjb21iaW5hdGlvbnMsIGFuZCBldmVuXG4gIC8vIG51bGwsIHVuZGVmaW5lZCwgYW5kIEluZmluaXR5XG5cbiAgdmFyIGFscGhhbnVtZXJpYyA9IGZ1bmN0aW9uIGFscGhhbnVtZXJpYyhyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBfZ2V0Um93VmFsdWVzQnlDb2x1bW4gPSBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvd0EsIHJvd0IsIGNvbHVtbklkKSxcbiAgICAgICAgYSA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtblswXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtblsxXTsgLy8gRm9yY2UgdG8gc3RyaW5ncyAob3IgXCJcIiBmb3IgdW5zdXBwb3J0ZWQgdHlwZXMpXG5cblxuICAgIGEgPSB0b1N0cmluZyhhKTtcbiAgICBiID0gdG9TdHJpbmcoYik7IC8vIFNwbGl0IG9uIG51bWJlciBncm91cHMsIGJ1dCBrZWVwIHRoZSBkZWxpbWl0ZXJcbiAgICAvLyBUaGVuIHJlbW92ZSBmYWxzZXkgc3BsaXQgdmFsdWVzXG5cbiAgICBhID0gYS5zcGxpdChyZVNwbGl0QWxwaGFOdW1lcmljKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgYiA9IGIuc3BsaXQocmVTcGxpdEFscGhhTnVtZXJpYykuZmlsdGVyKEJvb2xlYW4pOyAvLyBXaGlsZVxuXG4gICAgd2hpbGUgKGEubGVuZ3RoICYmIGIubGVuZ3RoKSB7XG4gICAgICB2YXIgYWEgPSBhLnNoaWZ0KCk7XG4gICAgICB2YXIgYmIgPSBiLnNoaWZ0KCk7XG4gICAgICB2YXIgYW4gPSBwYXJzZUludChhYSwgMTApO1xuICAgICAgdmFyIGJuID0gcGFyc2VJbnQoYmIsIDEwKTtcbiAgICAgIHZhciBjb21ibyA9IFthbiwgYm5dLnNvcnQoKTsgLy8gQm90aCBhcmUgc3RyaW5nXG5cbiAgICAgIGlmIChpc05hTihjb21ib1swXSkpIHtcbiAgICAgICAgaWYgKGFhID4gYmIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYiA+IGFhKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIE9uZSBpcyBhIHN0cmluZywgb25lIGlzIGEgbnVtYmVyXG5cblxuICAgICAgaWYgKGlzTmFOKGNvbWJvWzFdKSkge1xuICAgICAgICByZXR1cm4gaXNOYU4oYW4pID8gLTEgOiAxO1xuICAgICAgfSAvLyBCb3RoIGFyZSBudW1iZXJzXG5cblxuICAgICAgaWYgKGFuID4gYm4pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChibiA+IGFuKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgfTtcbiAgZnVuY3Rpb24gZGF0ZXRpbWUocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uMiA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uMlswXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjJbMV07XG5cbiAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgIHJldHVybiBjb21wYXJlQmFzaWMoYSwgYik7XG4gIH1cbiAgZnVuY3Rpb24gYmFzaWMocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uMyA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uM1swXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjNbMV07XG5cbiAgICByZXR1cm4gY29tcGFyZUJhc2ljKGEsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIHN0cmluZyhyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBfZ2V0Um93VmFsdWVzQnlDb2x1bW40ID0gZ2V0Um93VmFsdWVzQnlDb2x1bW5JRChyb3dBLCByb3dCLCBjb2x1bW5JZCksXG4gICAgICAgIGEgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW40WzBdLFxuICAgICAgICBiID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uNFsxXTtcblxuICAgIGEgPSBhLnNwbGl0KCcnKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgYiA9IGIuc3BsaXQoJycpLmZpbHRlcihCb29sZWFuKTtcblxuICAgIHdoaWxlIChhLmxlbmd0aCAmJiBiLmxlbmd0aCkge1xuICAgICAgdmFyIGFhID0gYS5zaGlmdCgpO1xuICAgICAgdmFyIGJiID0gYi5zaGlmdCgpO1xuICAgICAgdmFyIGFsb3dlciA9IGFhLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgYmxvd2VyID0gYmIudG9Mb3dlckNhc2UoKTsgLy8gQ2FzZSBpbnNlbnNpdGl2ZSBjb21wYXJpc29uIHVudGlsIGNoYXJhY3RlcnMgbWF0Y2hcblxuICAgICAgaWYgKGFsb3dlciA+IGJsb3dlcikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJsb3dlciA+IGFsb3dlcikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IC8vIElmIGxvd2VyY2FzZSBjaGFyYWN0ZXJzIGFyZSBpZGVudGljYWxcblxuXG4gICAgICBpZiAoYWEgPiBiYikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJiID4gYWEpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBudW1iZXIocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uNSA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uNVswXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjVbMV07XG5cbiAgICB2YXIgcmVwbGFjZU5vbk51bWVyaWMgPSAvW14wLTkuXS9naTtcbiAgICBhID0gTnVtYmVyKFN0cmluZyhhKS5yZXBsYWNlKHJlcGxhY2VOb25OdW1lcmljLCAnJykpO1xuICAgIGIgPSBOdW1iZXIoU3RyaW5nKGIpLnJlcGxhY2UocmVwbGFjZU5vbk51bWVyaWMsICcnKSk7XG4gICAgcmV0dXJuIGNvbXBhcmVCYXNpYyhhLCBiKTtcbiAgfSAvLyBVdGlsc1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVCYXNpYyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvdzEsIHJvdzIsIGNvbHVtbklkKSB7XG4gICAgcmV0dXJuIFtyb3cxLnZhbHVlc1tjb2x1bW5JZF0sIHJvdzIudmFsdWVzW2NvbHVtbklkXV07XG4gIH1cblxuICBmdW5jdGlvbiB0b1N0cmluZyhhKSB7XG4gICAgaWYgKHR5cGVvZiBhID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGlzTmFOKGEpIHx8IGEgPT09IEluZmluaXR5IHx8IGEgPT09IC1JbmZpbml0eSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBTdHJpbmcoYSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHNvcnRUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgYWxwaGFudW1lcmljOiBhbHBoYW51bWVyaWMsXG4gICAgZGF0ZXRpbWU6IGRhdGV0aW1lLFxuICAgIGJhc2ljOiBiYXNpYyxcbiAgICBzdHJpbmc6IHN0cmluZyxcbiAgICBudW1iZXI6IG51bWJlclxuICB9KTtcblxuICBhY3Rpb25zLnJlc2V0U29ydEJ5ID0gJ3Jlc2V0U29ydEJ5JztcbiAgYWN0aW9ucy5zZXRTb3J0QnkgPSAnc2V0U29ydEJ5JztcbiAgYWN0aW9ucy50b2dnbGVTb3J0QnkgPSAndG9nZ2xlU29ydEJ5JztcbiAgYWN0aW9ucy5jbGVhclNvcnRCeSA9ICdjbGVhclNvcnRCeSc7XG4gIGRlZmF1bHRDb2x1bW4uc29ydFR5cGUgPSAnYWxwaGFudW1lcmljJztcbiAgZGVmYXVsdENvbHVtbi5zb3J0RGVzY0ZpcnN0ID0gZmFsc2U7XG4gIHZhciB1c2VTb3J0QnkgPSBmdW5jdGlvbiB1c2VTb3J0QnkoaG9va3MpIHtcbiAgICBob29rcy5nZXRTb3J0QnlUb2dnbGVQcm9wcyA9IFtkZWZhdWx0R2V0U29ydEJ5VG9nZ2xlUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDUpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNSk7XG4gIH07XG4gIHVzZVNvcnRCeS5wbHVnaW5OYW1lID0gJ3VzZVNvcnRCeSc7XG5cbiAgdmFyIGRlZmF1bHRHZXRTb3J0QnlUb2dnbGVQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRTb3J0QnlUb2dnbGVQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIGNvbHVtbiA9IF9yZWYuY29sdW1uO1xuICAgIHZhciBfaW5zdGFuY2UkaXNNdWx0aVNvcnQgPSBpbnN0YW5jZS5pc011bHRpU29ydEV2ZW50LFxuICAgICAgICBpc011bHRpU29ydEV2ZW50ID0gX2luc3RhbmNlJGlzTXVsdGlTb3J0ID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuc2hpZnRLZXk7XG4gICAgfSA6IF9pbnN0YW5jZSRpc011bHRpU29ydDtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBjb2x1bW4uY2FuU29ydCA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBjb2x1bW4udG9nZ2xlU29ydEJ5KHVuZGVmaW5lZCwgIWluc3RhbmNlLmRpc2FibGVNdWx0aVNvcnQgJiYgaXNNdWx0aVNvcnRFdmVudChlKSk7XG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBjb2x1bW4uY2FuU29ydCA/ICdwb2ludGVyJyA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiBjb2x1bW4uY2FuU29ydCA/ICdUb2dnbGUgU29ydEJ5JyA6IHVuZGVmaW5lZFxuICAgIH1dO1xuICB9OyAvLyBSZWR1Y2VyXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDUoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgc29ydEJ5OiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFNvcnRCeSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5zb3J0QnkgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jbGVhclNvcnRCeSkge1xuICAgICAgdmFyIHNvcnRCeSA9IHN0YXRlLnNvcnRCeTtcbiAgICAgIHZhciBuZXdTb3J0QnkgPSBzb3J0QnkuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkICE9PSBhY3Rpb24uY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBuZXdTb3J0QnlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRTb3J0QnkpIHtcbiAgICAgIHZhciBfc29ydEJ5ID0gYWN0aW9uLnNvcnRCeTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBfc29ydEJ5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlU29ydEJ5KSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgZGVzYyA9IGFjdGlvbi5kZXNjLFxuICAgICAgICAgIG11bHRpID0gYWN0aW9uLm11bHRpO1xuICAgICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIGRpc2FibGVNdWx0aVNvcnQgPSBpbnN0YW5jZS5kaXNhYmxlTXVsdGlTb3J0LFxuICAgICAgICAgIGRpc2FibGVTb3J0UmVtb3ZlID0gaW5zdGFuY2UuZGlzYWJsZVNvcnRSZW1vdmUsXG4gICAgICAgICAgZGlzYWJsZU11bHRpUmVtb3ZlID0gaW5zdGFuY2UuZGlzYWJsZU11bHRpUmVtb3ZlLFxuICAgICAgICAgIF9pbnN0YW5jZSRtYXhNdWx0aVNvciA9IGluc3RhbmNlLm1heE11bHRpU29ydENvbENvdW50LFxuICAgICAgICAgIG1heE11bHRpU29ydENvbENvdW50ID0gX2luc3RhbmNlJG1heE11bHRpU29yID09PSB2b2lkIDAgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IF9pbnN0YW5jZSRtYXhNdWx0aVNvcjtcbiAgICAgIHZhciBfc29ydEJ5MiA9IHN0YXRlLnNvcnRCeTsgLy8gRmluZCB0aGUgY29sdW1uIGZvciB0aGlzIGNvbHVtbklkXG5cbiAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICB2YXIgc29ydERlc2NGaXJzdCA9IGNvbHVtbi5zb3J0RGVzY0ZpcnN0OyAvLyBGaW5kIGFueSBleGlzdGluZyBzb3J0QnkgZm9yIHRoaXMgY29sdW1uXG5cbiAgICAgIHZhciBleGlzdGluZ1NvcnRCeSA9IF9zb3J0QnkyLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBleGlzdGluZ0luZGV4ID0gX3NvcnRCeTIuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgaGFzRGVzY0RlZmluZWQgPSB0eXBlb2YgZGVzYyAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVzYyAhPT0gbnVsbDtcbiAgICAgIHZhciBfbmV3U29ydEJ5ID0gW107IC8vIFdoYXQgc2hvdWxkIHdlIGRvIHdpdGggdGhpcyBzb3J0IGFjdGlvbj9cblxuICAgICAgdmFyIHNvcnRBY3Rpb247XG5cbiAgICAgIGlmICghZGlzYWJsZU11bHRpU29ydCAmJiBtdWx0aSkge1xuICAgICAgICBpZiAoZXhpc3RpbmdTb3J0QnkpIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3RvZ2dsZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICdhZGQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3JtYWwgbW9kZVxuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCAhPT0gX3NvcnRCeTIubGVuZ3RoIC0gMSB8fCBfc29ydEJ5Mi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3JlcGxhY2UnO1xuICAgICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nU29ydEJ5KSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICd0b2dnbGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAncmVwbGFjZSc7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSGFuZGxlIHRvZ2dsZSBzdGF0ZXMgdGhhdCB3aWxsIHJlbW92ZSB0aGUgc29ydEJ5XG5cblxuICAgICAgaWYgKHNvcnRBY3Rpb24gPT09ICd0b2dnbGUnICYmIC8vIE11c3QgYmUgdG9nZ2xpbmdcbiAgICAgICFkaXNhYmxlU29ydFJlbW92ZSAmJiAvLyBJZiBkaXNhYmxlU29ydFJlbW92ZSwgZGlzYWJsZSBpbiBnZW5lcmFsXG4gICAgICAhaGFzRGVzY0RlZmluZWQgJiYgKCAvLyBNdXN0IG5vdCBiZSBzZXR0aW5nIGRlc2NcbiAgICAgIG11bHRpID8gIWRpc2FibGVNdWx0aVJlbW92ZSA6IHRydWUpICYmICggLy8gSWYgbXVsdGksIGRvbid0IGFsbG93IGlmIGRpc2FibGVNdWx0aVJlbW92ZVxuICAgICAgZXhpc3RpbmdTb3J0QnkgJiYgLy8gRmluYWxseSwgZGV0ZWN0IGlmIGl0IHNob3VsZCBpbmRlZWQgYmUgcmVtb3ZlZFxuICAgICAgZXhpc3RpbmdTb3J0QnkuZGVzYyAmJiAhc29ydERlc2NGaXJzdCB8fCAhZXhpc3RpbmdTb3J0QnkuZGVzYyAmJiBzb3J0RGVzY0ZpcnN0KSkge1xuICAgICAgICBzb3J0QWN0aW9uID0gJ3JlbW92ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0QWN0aW9uID09PSAncmVwbGFjZScpIHtcbiAgICAgICAgX25ld1NvcnRCeSA9IFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6IHNvcnREZXNjRmlyc3RcbiAgICAgICAgfV07XG4gICAgICB9IGVsc2UgaWYgKHNvcnRBY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgICAgIF9uZXdTb3J0QnkgPSBbXS5jb25jYXQoX3NvcnRCeTIsIFt7XG4gICAgICAgICAgaWQ6IGNvbHVtbklkLFxuICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6IHNvcnREZXNjRmlyc3RcbiAgICAgICAgfV0pOyAvLyBUYWtlIGxhdGVzdCBuIGNvbHVtbnNcblxuICAgICAgICBfbmV3U29ydEJ5LnNwbGljZSgwLCBfbmV3U29ydEJ5Lmxlbmd0aCAtIG1heE11bHRpU29ydENvbENvdW50KTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEFjdGlvbiA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgLy8gVGhpcyBmbGlwcyAob3Igc2V0cykgdGhlXG4gICAgICAgIF9uZXdTb3J0QnkgPSBfc29ydEJ5Mi5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBpZiAoZC5pZCA9PT0gY29sdW1uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZCwge1xuICAgICAgICAgICAgICBkZXNjOiBoYXNEZXNjRGVmaW5lZCA/IGRlc2MgOiAhZXhpc3RpbmdTb3J0QnkuZGVzY1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzb3J0QWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICBfbmV3U29ydEJ5ID0gX3NvcnRCeTIuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQgIT09IGNvbHVtbklkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IF9uZXdTb3J0QnlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDUoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IGluc3RhbmNlLmZsYXRSb3dzLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgX2luc3RhbmNlJG9yZGVyQnlGbiA9IGluc3RhbmNlLm9yZGVyQnlGbixcbiAgICAgICAgb3JkZXJCeUZuID0gX2luc3RhbmNlJG9yZGVyQnlGbiA9PT0gdm9pZCAwID8gZGVmYXVsdE9yZGVyQnlGbiA6IF9pbnN0YW5jZSRvcmRlckJ5Rm4sXG4gICAgICAgIHVzZXJTb3J0VHlwZXMgPSBpbnN0YW5jZS5zb3J0VHlwZXMsXG4gICAgICAgIG1hbnVhbFNvcnRCeSA9IGluc3RhbmNlLm1hbnVhbFNvcnRCeSxcbiAgICAgICAgZGVmYXVsdENhblNvcnQgPSBpbnN0YW5jZS5kZWZhdWx0Q2FuU29ydCxcbiAgICAgICAgZGlzYWJsZVNvcnRCeSA9IGluc3RhbmNlLmRpc2FibGVTb3J0QnksXG4gICAgICAgIGZsYXRIZWFkZXJzID0gaW5zdGFuY2UuZmxhdEhlYWRlcnMsXG4gICAgICAgIHNvcnRCeSA9IGluc3RhbmNlLnN0YXRlLnNvcnRCeSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRTbyA9IGluc3RhbmNlLmF1dG9SZXNldFNvcnRCeSxcbiAgICAgICAgYXV0b1Jlc2V0U29ydEJ5ID0gX2luc3RhbmNlJGF1dG9SZXNldFNvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFNvO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlRmlsdGVycycsICd1c2VHbG9iYWxGaWx0ZXInLCAndXNlR3JvdXBCeScsICd1c2VQaXZvdENvbHVtbnMnXSwgJ3VzZVNvcnRCeScpO1xuICAgIHZhciBzZXRTb3J0QnkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc29ydEJ5KSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0U29ydEJ5LFxuICAgICAgICBzb3J0Qnk6IHNvcnRCeVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7IC8vIFVwZGF0ZXMgc29ydGluZyBiYXNlZCBvbiBhIGNvbHVtbklkLCBkZXNjIGZsYWcgYW5kIG11bHRpIGZsYWdcblxuICAgIHZhciB0b2dnbGVTb3J0QnkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIGRlc2MsIG11bHRpKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlU29ydEJ5LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIGRlc2M6IGRlc2MsXG4gICAgICAgIG11bHRpOiBtdWx0aVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7IC8vIHVzZSByZWZlcmVuY2UgdG8gYXZvaWQgbWVtb3J5IGxlYWsgaW4gIzE2MDhcblxuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7IC8vIEFkZCB0aGUgZ2V0U29ydEJ5VG9nZ2xlUHJvcHMgbWV0aG9kIHRvIGNvbHVtbnMgYW5kIGhlYWRlcnNcblxuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGRlZmF1bHRDb2x1bW5DYW5Tb3J0ID0gY29sdW1uLmNhblNvcnQsXG4gICAgICAgICAgY29sdW1uRGlzYWJsZVNvcnRCeSA9IGNvbHVtbi5kaXNhYmxlU29ydEJ5LFxuICAgICAgICAgIGlkID0gY29sdW1uLmlkO1xuICAgICAgdmFyIGNhblNvcnQgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW5EaXNhYmxlU29ydEJ5ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVTb3J0QnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoZGVmYXVsdENhblNvcnQsIGRlZmF1bHRDb2x1bW5DYW5Tb3J0LCBmYWxzZSk7XG4gICAgICBjb2x1bW4uY2FuU29ydCA9IGNhblNvcnQ7XG5cbiAgICAgIGlmIChjb2x1bW4uY2FuU29ydCkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlU29ydEJ5ID0gZnVuY3Rpb24gKGRlc2MsIG11bHRpKSB7XG4gICAgICAgICAgcmV0dXJuIHRvZ2dsZVNvcnRCeShjb2x1bW4uaWQsIGRlc2MsIG11bHRpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb2x1bW4uY2xlYXJTb3J0QnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5jbGVhclNvcnRCeSxcbiAgICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW4uaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRTb3J0QnlUb2dnbGVQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0pO1xuICAgICAgdmFyIGNvbHVtblNvcnQgPSBzb3J0QnkuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5pc1NvcnRlZCA9ICEhY29sdW1uU29ydDtcbiAgICAgIGNvbHVtbi5zb3J0ZWRJbmRleCA9IHNvcnRCeS5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGlkO1xuICAgICAgfSk7XG4gICAgICBjb2x1bW4uaXNTb3J0ZWREZXNjID0gY29sdW1uLmlzU29ydGVkID8gY29sdW1uU29ydC5kZXNjIDogdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWFudWFsU29ydEJ5IHx8ICFzb3J0QnkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3NdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc29ydGVkRmxhdFJvd3MgPSBbXTsgLy8gRmlsdGVyIG91dCBzb3J0QnlzIHRoYXQgY29ycmVzcG9uZCB0byBub24gZXhpc3RpbmcgY29sdW1uc1xuXG4gICAgICB2YXIgYXZhaWxhYmxlU29ydEJ5ID0gc29ydEJ5LmZpbHRlcihmdW5jdGlvbiAoc29ydCkge1xuICAgICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICByZXR1cm4gY29sLmlkID09PSBzb3J0LmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc29ydERhdGEgPSBmdW5jdGlvbiBzb3J0RGF0YShyb3dzKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgb3JkZXJCeUZuIHRvIGNvbXBvc2UgbXVsdGlwbGUgc29ydEJ5J3MgdG9nZXRoZXIuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBhbHNvIHBlcmZvcm0gYSBzdGFibGUgc29ydGluZyB1c2luZyB0aGUgcm93IGluZGV4XG4gICAgICAgIC8vIGlmIG5lZWRlZC5cbiAgICAgICAgdmFyIHNvcnRlZERhdGEgPSBvcmRlckJ5Rm4ocm93cywgYXZhaWxhYmxlU29ydEJ5Lm1hcChmdW5jdGlvbiAoc29ydCkge1xuICAgICAgICAgIC8vIFN1cHBvcnQgY3VzdG9tIHNvcnRpbmcgbWV0aG9kcyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gc29ydC5pZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC1UYWJsZTogQ291bGQgbm90IGZpbmQgYSBjb2x1bW4gd2l0aCBpZDogXCIgKyBzb3J0LmlkICsgXCIgd2hpbGUgc29ydGluZ1wiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc29ydFR5cGUgPSBjb2x1bW4uc29ydFR5cGU7IC8vIExvb2sgdXAgc29ydEJ5IGZ1bmN0aW9ucyBpbiB0aGlzIG9yZGVyOlxuICAgICAgICAgIC8vIGNvbHVtbiBmdW5jdGlvblxuICAgICAgICAgIC8vIGNvbHVtbiBzdHJpbmcgbG9va3VwIG9uIHVzZXIgc29ydFR5cGVcbiAgICAgICAgICAvLyBjb2x1bW4gc3RyaW5nIGxvb2t1cCBvbiBidWlsdC1pbiBzb3J0VHlwZVxuICAgICAgICAgIC8vIGRlZmF1bHQgZnVuY3Rpb25cbiAgICAgICAgICAvLyBkZWZhdWx0IHN0cmluZyBsb29rdXAgb24gdXNlciBzb3J0VHlwZVxuICAgICAgICAgIC8vIGRlZmF1bHQgc3RyaW5nIGxvb2t1cCBvbiBidWlsdC1pbiBzb3J0VHlwZVxuXG4gICAgICAgICAgdmFyIHNvcnRNZXRob2QgPSBpc0Z1bmN0aW9uKHNvcnRUeXBlKSB8fCAodXNlclNvcnRUeXBlcyB8fCB7fSlbc29ydFR5cGVdIHx8IHNvcnRUeXBlc1tzb3J0VHlwZV07XG5cbiAgICAgICAgICBpZiAoIXNvcnRNZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LVRhYmxlOiBDb3VsZCBub3QgZmluZCBhIHZhbGlkIHNvcnRUeXBlIG9mICdcIiArIHNvcnRUeXBlICsgXCInIGZvciBjb2x1bW4gJ1wiICsgc29ydC5pZCArIFwiJy5cIik7XG4gICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGNvcnJlY3Qgc29ydEZuLlxuICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGFsd2F5cyByZXR1cm4gaW4gYXNjZW5kaW5nIG9yZGVyXG5cblxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRNZXRob2QoYSwgYiwgc29ydC5pZCwgc29ydC5kZXNjKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSwgLy8gTWFwIHRoZSBkaXJlY3Rpb25zXG4gICAgICAgIGF2YWlsYWJsZVNvcnRCeS5tYXAoZnVuY3Rpb24gKHNvcnQpIHtcbiAgICAgICAgICAvLyBEZXRlY3QgYW5kIHVzZSB0aGUgc29ydEludmVydGVkIG9wdGlvblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBzb3J0LmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4uc29ydEludmVydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydC5kZXNjO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAhc29ydC5kZXNjO1xuICAgICAgICB9KSk7IC8vIElmIHRoZXJlIGFyZSBzdWItcm93cywgc29ydCB0aGVtXG5cbiAgICAgICAgc29ydGVkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBzb3J0ZWRGbGF0Um93cy5wdXNoKHJvdyk7XG5cbiAgICAgICAgICBpZiAoIXJvdy5zdWJSb3dzIHx8IHJvdy5zdWJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdy5zdWJSb3dzID0gc29ydERhdGEocm93LnN1YlJvd3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNvcnRlZERhdGE7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gW3NvcnREYXRhKHJvd3MpLCBzb3J0ZWRGbGF0Um93c107XG4gICAgfSwgW21hbnVhbFNvcnRCeSwgc29ydEJ5LCByb3dzLCBmbGF0Um93cywgYWxsQ29sdW1ucywgb3JkZXJCeUZuLCB1c2VyU29ydFR5cGVzXSksXG4gICAgICAgIHNvcnRlZFJvd3MgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgc29ydGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXTtcblxuICAgIHZhciBnZXRBdXRvUmVzZXRTb3J0QnkgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0U29ydEJ5KTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRTb3J0QnkoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFNvcnRCeVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbbWFudWFsU29ydEJ5ID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVTb3J0ZWRSb3dzOiByb3dzLFxuICAgICAgcHJlU29ydGVkRmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgc29ydGVkUm93czogc29ydGVkUm93cyxcbiAgICAgIHNvcnRlZEZsYXRSb3dzOiBzb3J0ZWRGbGF0Um93cyxcbiAgICAgIHJvd3M6IHNvcnRlZFJvd3MsXG4gICAgICBmbGF0Um93czogc29ydGVkRmxhdFJvd3MsXG4gICAgICBzZXRTb3J0Qnk6IHNldFNvcnRCeSxcbiAgICAgIHRvZ2dsZVNvcnRCeTogdG9nZ2xlU29ydEJ5XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0T3JkZXJCeUZuKGFyciwgZnVuY3MsIGRpcnMpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGFycikuc29ydChmdW5jdGlvbiAocm93QSwgcm93Qikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgc29ydEZuID0gZnVuY3NbaV07XG4gICAgICAgIHZhciBkZXNjID0gZGlyc1tpXSA9PT0gZmFsc2UgfHwgZGlyc1tpXSA9PT0gJ2Rlc2MnO1xuICAgICAgICB2YXIgc29ydEludCA9IHNvcnRGbihyb3dBLCByb3dCKTtcblxuICAgICAgICBpZiAoc29ydEludCAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiBkZXNjID8gLXNvcnRJbnQgOiBzb3J0SW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJzWzBdID8gcm93QS5pbmRleCAtIHJvd0IuaW5kZXggOiByb3dCLmluZGV4IC0gcm93QS5pbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwbHVnaW5OYW1lID0gJ3VzZVBhZ2luYXRpb24nOyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5yZXNldFBhZ2UgPSAncmVzZXRQYWdlJztcbiAgYWN0aW9ucy5nb3RvUGFnZSA9ICdnb3RvUGFnZSc7XG4gIGFjdGlvbnMuc2V0UGFnZVNpemUgPSAnc2V0UGFnZVNpemUnO1xuICB2YXIgdXNlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIHVzZVBhZ2luYXRpb24oaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ2KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDYpO1xuICB9O1xuICB1c2VQYWdpbmF0aW9uLnBsdWdpbk5hbWUgPSBwbHVnaW5OYW1lO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNihzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgIHBhZ2VJbmRleDogMFxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFBhZ2UpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUluZGV4OiBpbnN0YW5jZS5pbml0aWFsU3RhdGUucGFnZUluZGV4IHx8IDBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5nb3RvUGFnZSkge1xuICAgICAgdmFyIHBhZ2VDb3VudCA9IGluc3RhbmNlLnBhZ2VDb3VudCxcbiAgICAgICAgICBwYWdlID0gaW5zdGFuY2UucGFnZTtcbiAgICAgIHZhciBuZXdQYWdlSW5kZXggPSBmdW5jdGlvbmFsVXBkYXRlKGFjdGlvbi5wYWdlSW5kZXgsIHN0YXRlLnBhZ2VJbmRleCk7XG4gICAgICB2YXIgY2FuTmF2aWdhdGUgPSBmYWxzZTtcblxuICAgICAgaWYgKG5ld1BhZ2VJbmRleCA+IHN0YXRlLnBhZ2VJbmRleCkge1xuICAgICAgICAvLyBuZXh0IHBhZ2VcbiAgICAgICAgY2FuTmF2aWdhdGUgPSBwYWdlQ291bnQgPT09IC0xID8gcGFnZS5sZW5ndGggPj0gc3RhdGUucGFnZVNpemUgOiBuZXdQYWdlSW5kZXggPCBwYWdlQ291bnQ7XG4gICAgICB9IGVsc2UgaWYgKG5ld1BhZ2VJbmRleCA8IHN0YXRlLnBhZ2VJbmRleCkge1xuICAgICAgICAvLyBwcmV2IHBhZ2VcbiAgICAgICAgY2FuTmF2aWdhdGUgPSBuZXdQYWdlSW5kZXggPiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYW5OYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUluZGV4OiBuZXdQYWdlSW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRQYWdlU2l6ZSkge1xuICAgICAgdmFyIHBhZ2VTaXplID0gYWN0aW9uLnBhZ2VTaXplO1xuICAgICAgdmFyIHRvcFJvd0luZGV4ID0gc3RhdGUucGFnZVNpemUgKiBzdGF0ZS5wYWdlSW5kZXg7XG4gICAgICB2YXIgcGFnZUluZGV4ID0gTWF0aC5mbG9vcih0b3BSb3dJbmRleCAvIHBhZ2VTaXplKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUluZGV4OiBwYWdlSW5kZXgsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkNihpbnN0YW5jZSkge1xuICAgIHZhciByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFBhID0gaW5zdGFuY2UuYXV0b1Jlc2V0UGFnZSxcbiAgICAgICAgYXV0b1Jlc2V0UGFnZSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRQYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRQYSxcbiAgICAgICAgX2luc3RhbmNlJG1hbnVhbEV4cGFuID0gaW5zdGFuY2UubWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5ID0gX2luc3RhbmNlJG1hbnVhbEV4cGFuID09PSB2b2lkIDAgPyAnZXhwYW5kZWQnIDogX2luc3RhbmNlJG1hbnVhbEV4cGFuLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgdXNlclBhZ2VDb3VudCA9IGluc3RhbmNlLnBhZ2VDb3VudCxcbiAgICAgICAgX2luc3RhbmNlJHBhZ2luYXRlRXhwID0gaW5zdGFuY2UucGFnaW5hdGVFeHBhbmRlZFJvd3MsXG4gICAgICAgIHBhZ2luYXRlRXhwYW5kZWRSb3dzID0gX2luc3RhbmNlJHBhZ2luYXRlRXhwID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHBhZ2luYXRlRXhwLFxuICAgICAgICBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPSBpbnN0YW5jZS5leHBhbmRTdWJSb3dzLFxuICAgICAgICBleHBhbmRTdWJSb3dzID0gX2luc3RhbmNlJGV4cGFuZFN1YlJvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGV4cGFuZFN1YlJvLFxuICAgICAgICBfaW5zdGFuY2Ukc3RhdGUgPSBpbnN0YW5jZS5zdGF0ZSxcbiAgICAgICAgcGFnZVNpemUgPSBfaW5zdGFuY2Ukc3RhdGUucGFnZVNpemUsXG4gICAgICAgIHBhZ2VJbmRleCA9IF9pbnN0YW5jZSRzdGF0ZS5wYWdlSW5kZXgsXG4gICAgICAgIGV4cGFuZGVkID0gX2luc3RhbmNlJHN0YXRlLmV4cGFuZGVkLFxuICAgICAgICBnbG9iYWxGaWx0ZXIgPSBfaW5zdGFuY2Ukc3RhdGUuZ2xvYmFsRmlsdGVyLFxuICAgICAgICBmaWx0ZXJzID0gX2luc3RhbmNlJHN0YXRlLmZpbHRlcnMsXG4gICAgICAgIGdyb3VwQnkgPSBfaW5zdGFuY2Ukc3RhdGUuZ3JvdXBCeSxcbiAgICAgICAgc29ydEJ5ID0gX2luc3RhbmNlJHN0YXRlLnNvcnRCeSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIG1hbnVhbFBhZ2luYXRpb24gPSBpbnN0YW5jZS5tYW51YWxQYWdpbmF0aW9uO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlR2xvYmFsRmlsdGVyJywgJ3VzZUZpbHRlcnMnLCAndXNlR3JvdXBCeScsICd1c2VTb3J0QnknLCAndXNlRXhwYW5kZWQnXSwgJ3VzZVBhZ2luYXRpb24nKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0UGFnZSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRQYWdlKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRQYWdlKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRQYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsUGFnaW5hdGlvbiA/IG51bGwgOiBkYXRhLCBnbG9iYWxGaWx0ZXIsIGZpbHRlcnMsIGdyb3VwQnksIHNvcnRCeV0pO1xuICAgIHZhciBwYWdlQ291bnQgPSBtYW51YWxQYWdpbmF0aW9uID8gdXNlclBhZ2VDb3VudCA6IE1hdGguY2VpbChyb3dzLmxlbmd0aCAvIHBhZ2VTaXplKTtcbiAgICB2YXIgcGFnZU9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYWdlQ291bnQgPiAwID8gW10uY29uY2F0KG5ldyBBcnJheShwYWdlQ291bnQpKS5maWxsKG51bGwpLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pIDogW107XG4gICAgfSwgW3BhZ2VDb3VudF0pO1xuICAgIHZhciBwYWdlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFnZTtcblxuICAgICAgaWYgKG1hbnVhbFBhZ2luYXRpb24pIHtcbiAgICAgICAgcGFnZSA9IHJvd3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFnZVN0YXJ0ID0gcGFnZVNpemUgKiBwYWdlSW5kZXg7XG4gICAgICAgIHZhciBwYWdlRW5kID0gcGFnZVN0YXJ0ICsgcGFnZVNpemU7XG4gICAgICAgIHBhZ2UgPSByb3dzLnNsaWNlKHBhZ2VTdGFydCwgcGFnZUVuZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdpbmF0ZUV4cGFuZGVkUm93cykge1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV4cGFuZFJvd3MocGFnZSwge1xuICAgICAgICBtYW51YWxFeHBhbmRlZEtleTogbWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgZXhwYW5kU3ViUm93czogZXhwYW5kU3ViUm93c1xuICAgICAgfSk7XG4gICAgfSwgW2V4cGFuZFN1YlJvd3MsIGV4cGFuZGVkLCBtYW51YWxFeHBhbmRlZEtleSwgbWFudWFsUGFnaW5hdGlvbiwgcGFnZUluZGV4LCBwYWdlU2l6ZSwgcGFnaW5hdGVFeHBhbmRlZFJvd3MsIHJvd3NdKTtcbiAgICB2YXIgY2FuUHJldmlvdXNQYWdlID0gcGFnZUluZGV4ID4gMDtcbiAgICB2YXIgY2FuTmV4dFBhZ2UgPSBwYWdlQ291bnQgPT09IC0xID8gcGFnZS5sZW5ndGggPj0gcGFnZVNpemUgOiBwYWdlSW5kZXggPCBwYWdlQ291bnQgLSAxO1xuICAgIHZhciBnb3RvUGFnZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYWdlSW5kZXgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5nb3RvUGFnZSxcbiAgICAgICAgcGFnZUluZGV4OiBwYWdlSW5kZXhcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBwcmV2aW91c1BhZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ290b1BhZ2UoZnVuY3Rpb24gKG9sZCkge1xuICAgICAgICByZXR1cm4gb2xkIC0gMTtcbiAgICAgIH0pO1xuICAgIH0sIFtnb3RvUGFnZV0pO1xuICAgIHZhciBuZXh0UGFnZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnb3RvUGFnZShmdW5jdGlvbiAob2xkKSB7XG4gICAgICAgIHJldHVybiBvbGQgKyAxO1xuICAgICAgfSk7XG4gICAgfSwgW2dvdG9QYWdlXSk7XG4gICAgdmFyIHNldFBhZ2VTaXplID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBhZ2VTaXplKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0UGFnZVNpemUsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcGFnZU9wdGlvbnM6IHBhZ2VPcHRpb25zLFxuICAgICAgcGFnZUNvdW50OiBwYWdlQ291bnQsXG4gICAgICBwYWdlOiBwYWdlLFxuICAgICAgY2FuUHJldmlvdXNQYWdlOiBjYW5QcmV2aW91c1BhZ2UsXG4gICAgICBjYW5OZXh0UGFnZTogY2FuTmV4dFBhZ2UsXG4gICAgICBnb3RvUGFnZTogZ290b1BhZ2UsXG4gICAgICBwcmV2aW91c1BhZ2U6IHByZXZpb3VzUGFnZSxcbiAgICAgIG5leHRQYWdlOiBuZXh0UGFnZSxcbiAgICAgIHNldFBhZ2VTaXplOiBzZXRQYWdlU2l6ZVxuICAgIH0pO1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldFBpdm90ID0gJ3Jlc2V0UGl2b3QnO1xuICBhY3Rpb25zLnRvZ2dsZVBpdm90ID0gJ3RvZ2dsZVBpdm90JztcbiAgdmFyIF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMgPSBmdW5jdGlvbiBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zKGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0UGl2b3RUb2dnbGVQcm9wcyA9IFtkZWZhdWx0R2V0UGl2b3RUb2dnbGVQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkNyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2VBZnRlckRhdGEucHVzaCh1c2VJbnN0YW5jZUFmdGVyRGF0YSk7XG4gICAgaG9va3MuYWxsQ29sdW1ucy5wdXNoKGFsbENvbHVtbnMpO1xuICAgIGhvb2tzLmFjY2Vzc1ZhbHVlLnB1c2goYWNjZXNzVmFsdWUpO1xuICAgIGhvb2tzLm1hdGVyaWFsaXplZENvbHVtbnMucHVzaChtYXRlcmlhbGl6ZWRDb2x1bW5zKTtcbiAgICBob29rcy5tYXRlcmlhbGl6ZWRDb2x1bW5zRGVwcy5wdXNoKG1hdGVyaWFsaXplZENvbHVtbnNEZXBzKTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKHZpc2libGVDb2x1bW5zJDEpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zRGVwcy5wdXNoKHZpc2libGVDb2x1bW5zRGVwcyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ3KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQyKTtcbiAgfTtcbiAgX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucy5wbHVnaW5OYW1lID0gJ3VzZVBpdm90Q29sdW1ucyc7XG4gIHZhciBkZWZhdWx0UGl2b3RDb2x1bW5zID0gW107XG5cbiAgdmFyIGRlZmF1bHRHZXRQaXZvdFRvZ2dsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFBpdm90VG9nZ2xlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaGVhZGVyID0gX3JlZi5oZWFkZXI7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogaGVhZGVyLmNhblBpdm90ID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIGhlYWRlci50b2dnbGVQaXZvdCgpO1xuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogaGVhZGVyLmNhblBpdm90ID8gJ3BvaW50ZXInIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgdGl0bGU6ICdUb2dnbGUgUGl2b3QnXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNyhzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwaXZvdENvbHVtbnM6IGRlZmF1bHRQaXZvdENvbHVtbnNcbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRQaXZvdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwaXZvdENvbHVtbnM6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5waXZvdENvbHVtbnMgfHwgZGVmYXVsdFBpdm90Q29sdW1uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZVBpdm90KSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgc2V0UGl2b3QgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgcmVzb2x2ZWRQaXZvdCA9IHR5cGVvZiBzZXRQaXZvdCAhPT0gJ3VuZGVmaW5lZCcgPyBzZXRQaXZvdCA6ICFzdGF0ZS5waXZvdENvbHVtbnMuaW5jbHVkZXMoY29sdW1uSWQpO1xuXG4gICAgICBpZiAocmVzb2x2ZWRQaXZvdCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgcGl2b3RDb2x1bW5zOiBbXS5jb25jYXQoc3RhdGUucGl2b3RDb2x1bW5zLCBbY29sdW1uSWRdKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwaXZvdENvbHVtbnM6IHN0YXRlLnBpdm90Q29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZCAhPT0gY29sdW1uSWQ7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZUFmdGVyRGF0YShpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4uaXNQaXZvdFNvdXJjZSA9IGluc3RhbmNlLnN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsQ29sdW1ucyhjb2x1bW5zLCBfcmVmMikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYyLmluc3RhbmNlO1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4uaXNQaXZvdFNvdXJjZSA9IGluc3RhbmNlLnN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgICAgY29sdW1uLnVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY2Vzc1ZhbHVlKHZhbHVlLCBfcmVmMykge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMy5jb2x1bW47XG5cbiAgICBpZiAoY29sdW1uLnVuaXF1ZVZhbHVlcyAmJiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb2x1bW4udW5pcXVlVmFsdWVzLmFkZCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0ZXJpYWxpemVkQ29sdW1ucyhtYXRlcmlhbGl6ZWQsIF9yZWY0KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjQuaW5zdGFuY2U7XG4gICAgdmFyIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBzdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuXG4gICAgaWYgKCFzdGF0ZS5waXZvdENvbHVtbnMubGVuZ3RoIHx8ICFzdGF0ZS5ncm91cEJ5IHx8ICFzdGF0ZS5ncm91cEJ5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG1hdGVyaWFsaXplZDtcbiAgICB9XG5cbiAgICB2YXIgcGl2b3RDb2x1bW5zID0gc3RhdGUucGl2b3RDb2x1bW5zLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGlkO1xuICAgICAgfSk7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIHZhciBzb3VyY2VDb2x1bW5zID0gYWxsQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiAhZC5pc1Bpdm90U291cmNlICYmICFzdGF0ZS5ncm91cEJ5LmluY2x1ZGVzKGQuaWQpICYmICFzdGF0ZS5waXZvdENvbHVtbnMuaW5jbHVkZXMoZC5pZCk7XG4gICAgfSk7XG5cbiAgICB2YXIgYnVpbGRQaXZvdENvbHVtbnMgPSBmdW5jdGlvbiBidWlsZFBpdm90Q29sdW1ucyhkZXB0aCwgcGFyZW50LCBwaXZvdEZpbHRlcnMpIHtcbiAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpdm90RmlsdGVycyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHBpdm90RmlsdGVycyA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGl2b3RDb2x1bW4gPSBwaXZvdENvbHVtbnNbZGVwdGhdO1xuXG4gICAgICBpZiAoIXBpdm90Q29sdW1uKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2VDb2x1bW5zLm1hcChmdW5jdGlvbiAoc291cmNlQ29sdW1uKSB7XG4gICAgICAgICAgLy8gVE9ETzogV2UgY291bGQgb2ZmZXIgc3VwcG9ydCBoZXJlIGZvciByZW5lc3RpbmcgcGl2b3RlZFxuICAgICAgICAgIC8vIGNvbHVtbnMgaW5zaWRlIGNvcGllcyBvZiB0aGVpciBoZWFkZXIgZ3JvdXBzLiBGb3Igbm93LFxuICAgICAgICAgIC8vIHRoYXQgc2VlbXMgbGlrZSBpdCB3b3VsZCBiZSAoMSkgb3ZlcmtpbGwgb24gbmVzdGluZywgY29uc2lkZXJpbmdcbiAgICAgICAgICAvLyB5b3UgYWxyZWFkeSBnZXQgbmVzdGluZyBmb3IgZXZlcnkgcGl2b3QgbGV2ZWwgYW5kICgyKVxuICAgICAgICAgIC8vIHJlYWxseSBoYXJkLiA6KVxuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc291cmNlQ29sdW1uLCB7XG4gICAgICAgICAgICBjYW5QaXZvdDogZmFsc2UsXG4gICAgICAgICAgICBpc1Bpdm90ZWQ6IHRydWUsXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICAgIGlkOiBcIlwiICsgKHBhcmVudCA/IHBhcmVudC5pZCArIFwiLlwiICsgc291cmNlQ29sdW1uLmlkIDogc291cmNlQ29sdW1uLmlkKSxcbiAgICAgICAgICAgIGFjY2Vzc29yOiBmdW5jdGlvbiBhY2Nlc3NvcihvcmlnaW5hbFJvdywgaSwgcm93KSB7XG4gICAgICAgICAgICAgIGlmIChwaXZvdEZpbHRlcnMuZXZlcnkoZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXIocm93KTtcbiAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93LnZhbHVlc1tzb3VyY2VDb2x1bW4uaWRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgdW5pcXVlVmFsdWVzID0gQXJyYXkuZnJvbShwaXZvdENvbHVtbi51bmlxdWVWYWx1ZXMpLnNvcnQoKTtcbiAgICAgIHJldHVybiB1bmlxdWVWYWx1ZXMubWFwKGZ1bmN0aW9uICh1bmlxdWVWYWx1ZSkge1xuICAgICAgICB2YXIgY29sdW1uR3JvdXAgPSBfZXh0ZW5kcyh7fSwgcGl2b3RDb2x1bW4sIHtcbiAgICAgICAgICBIZWFkZXI6IHBpdm90Q29sdW1uLlBpdm90SGVhZGVyIHx8IHR5cGVvZiBwaXZvdENvbHVtbi5oZWFkZXIgPT09ICdzdHJpbmcnID8gcGl2b3RDb2x1bW4uSGVhZGVyICsgXCI6IFwiICsgdW5pcXVlVmFsdWUgOiB1bmlxdWVWYWx1ZSxcbiAgICAgICAgICBpc1Bpdm90R3JvdXA6IHRydWUsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGlkOiBwYXJlbnQgPyBwYXJlbnQuaWQgKyBcIi5cIiArIHBpdm90Q29sdW1uLmlkICsgXCIuXCIgKyB1bmlxdWVWYWx1ZSA6IHBpdm90Q29sdW1uLmlkICsgXCIuXCIgKyB1bmlxdWVWYWx1ZSxcbiAgICAgICAgICBwaXZvdFZhbHVlOiB1bmlxdWVWYWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb2x1bW5Hcm91cC5jb2x1bW5zID0gYnVpbGRQaXZvdENvbHVtbnMoZGVwdGggKyAxLCBjb2x1bW5Hcm91cCwgW10uY29uY2F0KHBpdm90RmlsdGVycywgW2Z1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gcm93LnZhbHVlc1twaXZvdENvbHVtbi5pZF0gPT09IHVuaXF1ZVZhbHVlO1xuICAgICAgICB9XSkpO1xuICAgICAgICByZXR1cm4gY29sdW1uR3JvdXA7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIG5ld01hdGVyaWFsaXplZCA9IGZsYXR0ZW5Db2x1bW5zKGJ1aWxkUGl2b3RDb2x1bW5zKCkpO1xuICAgIHJldHVybiBbXS5jb25jYXQobWF0ZXJpYWxpemVkLCBuZXdNYXRlcmlhbGl6ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0ZXJpYWxpemVkQ29sdW1uc0RlcHMoZGVwcywgX3JlZjUpIHtcbiAgICB2YXIgX3JlZjUkaW5zdGFuY2Ukc3RhdGUgPSBfcmVmNS5pbnN0YW5jZS5zdGF0ZSxcbiAgICAgICAgcGl2b3RDb2x1bW5zID0gX3JlZjUkaW5zdGFuY2Ukc3RhdGUucGl2b3RDb2x1bW5zLFxuICAgICAgICBncm91cEJ5ID0gX3JlZjUkaW5zdGFuY2Ukc3RhdGUuZ3JvdXBCeTtcbiAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtwaXZvdENvbHVtbnMsIGdyb3VwQnldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGVDb2x1bW5zJDEodmlzaWJsZUNvbHVtbnMsIF9yZWY2KSB7XG4gICAgdmFyIHN0YXRlID0gX3JlZjYuaW5zdGFuY2Uuc3RhdGU7XG4gICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiAhZC5pc1Bpdm90U291cmNlO1xuICAgIH0pO1xuXG4gICAgaWYgKHN0YXRlLnBpdm90Q29sdW1ucy5sZW5ndGggJiYgc3RhdGUuZ3JvdXBCeSAmJiBzdGF0ZS5ncm91cEJ5Lmxlbmd0aCkge1xuICAgICAgdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gY29sdW1uLmlzR3JvdXBlZCB8fCBjb2x1bW4uaXNQaXZvdGVkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2libGVDb2x1bW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnNEZXBzKGRlcHMsIF9yZWY3KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjcuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLCBpbnN0YW5jZS5zdGF0ZS5ncm91cEJ5XSk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ3KGluc3RhbmNlKSB7XG4gICAgdmFyIGNvbHVtbnMgPSBpbnN0YW5jZS5jb2x1bW5zLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRQaSA9IGluc3RhbmNlLmF1dG9SZXNldFBpdm90LFxuICAgICAgICBhdXRvUmVzZXRQaXZvdCA9IF9pbnN0YW5jZSRhdXRvUmVzZXRQaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRQaSxcbiAgICAgICAgbWFuYXVsUGl2b3QgPSBpbnN0YW5jZS5tYW5hdWxQaXZvdCxcbiAgICAgICAgZGlzYWJsZVBpdm90ID0gaW5zdGFuY2UuZGlzYWJsZVBpdm90LFxuICAgICAgICBkZWZhdWx0Q2FuUGl2b3QgPSBpbnN0YW5jZS5kZWZhdWx0Q2FuUGl2b3Q7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VHcm91cEJ5J10sICd1c2VQaXZvdENvbHVtbnMnKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIGFsbENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgZGVmYXVsdENvbHVtblBpdm90ID0gY29sdW1uLmRlZmF1bHRQaXZvdCxcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlUGl2b3QgPSBjb2x1bW4uZGlzYWJsZVBpdm90O1xuICAgICAgY29sdW1uLmNhblBpdm90ID0gYWNjZXNzb3IgPyBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhblBpdm90LCBjb2x1bW5EaXNhYmxlUGl2b3QgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZVBpdm90ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpIDogZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5jYW5QaXZvdCwgZGVmYXVsdENvbHVtblBpdm90LCBkZWZhdWx0Q2FuUGl2b3QsIGZhbHNlKTtcblxuICAgICAgaWYgKGNvbHVtbi5jYW5QaXZvdCkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlUGl2b3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZVBpdm90KGNvbHVtbi5pZCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi5BZ2dyZWdhdGVkID0gY29sdW1uLkFnZ3JlZ2F0ZWQgfHwgY29sdW1uLkNlbGw7XG4gICAgfSk7XG5cbiAgICB2YXIgdG9nZ2xlUGl2b3QgPSBmdW5jdGlvbiB0b2dnbGVQaXZvdChjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVQaXZvdCxcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIGhlYWRlci5nZXRQaXZvdFRvZ2dsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRQaXZvdFRvZ2dsZVByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGdldEF1dG9SZXNldFBpdm90ID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFBpdm90KTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRQaXZvdCgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0UGl2b3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW5hdWxQaXZvdCA/IG51bGwgOiBjb2x1bW5zXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgdG9nZ2xlUGl2b3Q6IHRvZ2dsZVBpdm90XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93JDIocm93KSB7XG4gICAgcm93LmFsbENlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgIC8vIEdyb3VwZWQgY2VsbHMgYXJlIGluIHRoZSBwaXZvdENvbHVtbnMgYW5kIHRoZSBwaXZvdCBjZWxsIGZvciB0aGUgcm93XG4gICAgICBjZWxsLmlzUGl2b3RlZCA9IGNlbGwuY29sdW1uLmlzUGl2b3RlZDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwbHVnaW5OYW1lJDEgPSAndXNlUm93U2VsZWN0JzsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMucmVzZXRTZWxlY3RlZFJvd3MgPSAncmVzZXRTZWxlY3RlZFJvd3MnO1xuICBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NTZWxlY3RlZCA9ICd0b2dnbGVBbGxSb3dzU2VsZWN0ZWQnO1xuICBhY3Rpb25zLnRvZ2dsZVJvd1NlbGVjdGVkID0gJ3RvZ2dsZVJvd1NlbGVjdGVkJztcbiAgYWN0aW9ucy50b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkID0gJ3RvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQnO1xuICB2YXIgdXNlUm93U2VsZWN0ID0gZnVuY3Rpb24gdXNlUm93U2VsZWN0KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzXTtcbiAgICBob29rcy5nZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkOCk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ4KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQzKTtcbiAgfTtcbiAgdXNlUm93U2VsZWN0LnBsdWdpbk5hbWUgPSBwbHVnaW5OYW1lJDE7XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgICByb3cgPSBfcmVmLnJvdztcbiAgICB2YXIgX2luc3RhbmNlJG1hbnVhbFJvd1NlID0gaW5zdGFuY2UubWFudWFsUm93U2VsZWN0ZWRLZXksXG4gICAgICAgIG1hbnVhbFJvd1NlbGVjdGVkS2V5ID0gX2luc3RhbmNlJG1hbnVhbFJvd1NlID09PSB2b2lkIDAgPyAnaXNTZWxlY3RlZCcgOiBfaW5zdGFuY2UkbWFudWFsUm93U2U7XG4gICAgdmFyIGNoZWNrZWQgPSBmYWxzZTtcblxuICAgIGlmIChyb3cub3JpZ2luYWwgJiYgcm93Lm9yaWdpbmFsW21hbnVhbFJvd1NlbGVjdGVkS2V5XSkge1xuICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrZWQgPSByb3cuaXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICByb3cudG9nZ2xlUm93U2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgUm93IFNlbGVjdGVkJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHJvdy5pc1NvbWVTZWxlY3RlZFxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgaW5zdGFuY2UudG9nZ2xlQWxsUm93c1NlbGVjdGVkKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogaW5zdGFuY2UuaXNBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgUm93cyBTZWxlY3RlZCcsXG4gICAgICBpbmRldGVybWluYXRlOiBCb29sZWFuKCFpbnN0YW5jZS5pc0FsbFJvd3NTZWxlY3RlZCAmJiBPYmplY3Qua2V5cyhpbnN0YW5jZS5zdGF0ZS5zZWxlY3RlZFJvd0lkcykubGVuZ3RoKVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMy5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogaW5zdGFuY2UuaXNBbGxQYWdlUm93c1NlbGVjdGVkLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQWxsIEN1cnJlbnQgUGFnZSBSb3dzIFNlbGVjdGVkJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4oIWluc3RhbmNlLmlzQWxsUGFnZVJvd3NTZWxlY3RlZCAmJiBpbnN0YW5jZS5wYWdlLnNvbWUoZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICAgIHZhciBpZCA9IF9yZWY0LmlkO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc3RhdGUuc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgfSkpXG4gICAgfV07XG4gIH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDgoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHt9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0U2VsZWN0ZWRSb3dzKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuc2VsZWN0ZWRSb3dJZHMgfHwge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVBbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIHZhciBzZXRTZWxlY3RlZCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBpc0FsbFJvd3NTZWxlY3RlZCA9IGluc3RhbmNlLmlzQWxsUm93c1NlbGVjdGVkLFxuICAgICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgICAgX2luc3RhbmNlJG5vbkdyb3VwZWRSID0gaW5zdGFuY2Uubm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZCA9IF9pbnN0YW5jZSRub25Hcm91cGVkUiA9PT0gdm9pZCAwID8gcm93c0J5SWQgOiBfaW5zdGFuY2Ukbm9uR3JvdXBlZFI7XG4gICAgICB2YXIgc2VsZWN0QWxsID0gdHlwZW9mIHNldFNlbGVjdGVkICE9PSAndW5kZWZpbmVkJyA/IHNldFNlbGVjdGVkIDogIWlzQWxsUm93c1NlbGVjdGVkOyAvLyBPbmx5IHJlbW92ZS9hZGQgdGhlIHJvd3MgdGhhdCBhcmUgdmlzaWJsZSBvbiB0aGUgc2NyZWVuXG4gICAgICAvLyAgTGVhdmUgYWxsIHRoZSBvdGhlciByb3dzIHRoYXQgYXJlIHNlbGVjdGVkIGFsb25lLlxuXG4gICAgICB2YXIgc2VsZWN0ZWRSb3dJZHMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zZWxlY3RlZFJvd0lkcyk7XG5cbiAgICAgIGlmIChzZWxlY3RBbGwpIHtcbiAgICAgICAgT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3dJZCkge1xuICAgICAgICAgIHNlbGVjdGVkUm93SWRzW3Jvd0lkXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3dJZCkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxlY3RlZFJvd0lkc1tyb3dJZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBzZWxlY3RlZFJvd0lkc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZVJvd1NlbGVjdGVkKSB7XG4gICAgICB2YXIgaWQgPSBhY3Rpb24uaWQsXG4gICAgICAgICAgX3NldFNlbGVjdGVkID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIF9yb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICAgIF9pbnN0YW5jZSRzZWxlY3RTdWJSbyA9IGluc3RhbmNlLnNlbGVjdFN1YlJvd3MsXG4gICAgICAgICAgc2VsZWN0U3ViUm93cyA9IF9pbnN0YW5jZSRzZWxlY3RTdWJSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRzZWxlY3RTdWJSbyxcbiAgICAgICAgICBnZXRTdWJSb3dzID0gaW5zdGFuY2UuZ2V0U3ViUm93cztcbiAgICAgIHZhciBpc1NlbGVjdGVkID0gc3RhdGUuc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgdmFyIHNob3VsZEV4aXN0ID0gdHlwZW9mIF9zZXRTZWxlY3RlZCAhPT0gJ3VuZGVmaW5lZCcgPyBfc2V0U2VsZWN0ZWQgOiAhaXNTZWxlY3RlZDtcblxuICAgICAgaWYgKGlzU2VsZWN0ZWQgPT09IHNob3VsZEV4aXN0KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1NlbGVjdGVkUm93SWRzID0gX2V4dGVuZHMoe30sIHN0YXRlLnNlbGVjdGVkUm93SWRzKTtcblxuICAgICAgdmFyIGhhbmRsZVJvd0J5SWQgPSBmdW5jdGlvbiBoYW5kbGVSb3dCeUlkKGlkKSB7XG4gICAgICAgIHZhciByb3cgPSBfcm93c0J5SWRbaWRdO1xuXG4gICAgICAgIGlmICghcm93LmlzR3JvdXBlZCkge1xuICAgICAgICAgIGlmIChzaG91bGRFeGlzdCkge1xuICAgICAgICAgICAgbmV3U2VsZWN0ZWRSb3dJZHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIG5ld1NlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0U3ViUm93cyAmJiBnZXRTdWJSb3dzKHJvdykpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0U3ViUm93cyhyb3cpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJvd0J5SWQocm93LmlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaGFuZGxlUm93QnlJZChpZCk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBuZXdTZWxlY3RlZFJvd0lkc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIHZhciBfc2V0U2VsZWN0ZWQyID0gYWN0aW9uLnZhbHVlO1xuXG4gICAgICB2YXIgcGFnZSA9IGluc3RhbmNlLnBhZ2UsXG4gICAgICAgICAgX3Jvd3NCeUlkMiA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICAgIF9pbnN0YW5jZSRzZWxlY3RTdWJSbzIgPSBpbnN0YW5jZS5zZWxlY3RTdWJSb3dzLFxuICAgICAgICAgIF9zZWxlY3RTdWJSb3dzID0gX2luc3RhbmNlJHNlbGVjdFN1YlJvMiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzIsXG4gICAgICAgICAgaXNBbGxQYWdlUm93c1NlbGVjdGVkID0gaW5zdGFuY2UuaXNBbGxQYWdlUm93c1NlbGVjdGVkLFxuICAgICAgICAgIF9nZXRTdWJSb3dzID0gaW5zdGFuY2UuZ2V0U3ViUm93cztcblxuICAgICAgdmFyIF9zZWxlY3RBbGwgPSB0eXBlb2YgX3NldFNlbGVjdGVkMiAhPT0gJ3VuZGVmaW5lZCcgPyBfc2V0U2VsZWN0ZWQyIDogIWlzQWxsUGFnZVJvd3NTZWxlY3RlZDtcblxuICAgICAgdmFyIF9uZXdTZWxlY3RlZFJvd0lkcyA9IF9leHRlbmRzKHt9LCBzdGF0ZS5zZWxlY3RlZFJvd0lkcyk7XG5cbiAgICAgIHZhciBfaGFuZGxlUm93QnlJZCA9IGZ1bmN0aW9uIF9oYW5kbGVSb3dCeUlkKGlkKSB7XG4gICAgICAgIHZhciByb3cgPSBfcm93c0J5SWQyW2lkXTtcblxuICAgICAgICBpZiAoIXJvdy5pc0dyb3VwZWQpIHtcbiAgICAgICAgICBpZiAoX3NlbGVjdEFsbCkge1xuICAgICAgICAgICAgX25ld1NlbGVjdGVkUm93SWRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfbmV3U2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfc2VsZWN0U3ViUm93cyAmJiBfZ2V0U3ViUm93cyhyb3cpKSB7XG4gICAgICAgICAgcmV0dXJuIF9nZXRTdWJSb3dzKHJvdykuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gX2hhbmRsZVJvd0J5SWQocm93LmlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcGFnZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgcmV0dXJuIF9oYW5kbGVSb3dCeUlkKHJvdy5pZCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IF9uZXdTZWxlY3RlZFJvd0lkc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkOChpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIyID0gaW5zdGFuY2Uubm9uR3JvdXBlZFJvd3NCeUlkLFxuICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIyID09PSB2b2lkIDAgPyByb3dzQnlJZCA6IF9pbnN0YW5jZSRub25Hcm91cGVkUjIsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRTZSA9IGluc3RhbmNlLmF1dG9SZXNldFNlbGVjdGVkUm93cyxcbiAgICAgICAgYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzID0gX2luc3RhbmNlJGF1dG9SZXNldFNlID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFNlLFxuICAgICAgICBzZWxlY3RlZFJvd0lkcyA9IGluc3RhbmNlLnN0YXRlLnNlbGVjdGVkUm93SWRzLFxuICAgICAgICBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8zID0gaW5zdGFuY2Uuc2VsZWN0U3ViUm93cyxcbiAgICAgICAgc2VsZWN0U3ViUm93cyA9IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzMgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8zLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBwYWdlID0gaW5zdGFuY2UucGFnZSxcbiAgICAgICAgZ2V0U3ViUm93cyA9IGluc3RhbmNlLmdldFN1YlJvd3M7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VGaWx0ZXJzJywgJ3VzZUdyb3VwQnknLCAndXNlU29ydEJ5JywgJ3VzZUV4cGFuZGVkJywgJ3VzZVBhZ2luYXRpb24nXSwgJ3VzZVJvd1NlbGVjdCcpO1xuICAgIHZhciBzZWxlY3RlZEZsYXRSb3dzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRGbGF0Um93cyA9IFtdO1xuICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBzZWxlY3RTdWJSb3dzID8gZ2V0Um93SXNTZWxlY3RlZChyb3csIHNlbGVjdGVkUm93SWRzLCBnZXRTdWJSb3dzKSA6ICEhc2VsZWN0ZWRSb3dJZHNbcm93LmlkXTtcbiAgICAgICAgcm93LmlzU2VsZWN0ZWQgPSAhIWlzU2VsZWN0ZWQ7XG4gICAgICAgIHJvdy5pc1NvbWVTZWxlY3RlZCA9IGlzU2VsZWN0ZWQgPT09IG51bGw7XG5cbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZEZsYXRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRGbGF0Um93cztcbiAgICB9LCBbcm93cywgc2VsZWN0U3ViUm93cywgc2VsZWN0ZWRSb3dJZHMsIGdldFN1YlJvd3NdKTtcbiAgICB2YXIgaXNBbGxSb3dzU2VsZWN0ZWQgPSBCb29sZWFuKE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkubGVuZ3RoICYmIE9iamVjdC5rZXlzKHNlbGVjdGVkUm93SWRzKS5sZW5ndGgpO1xuICAgIHZhciBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBpc0FsbFJvd3NTZWxlY3RlZDtcblxuICAgIGlmIChpc0FsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuICFzZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB9KSkge1xuICAgICAgICBpc0FsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNBbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIGlmIChwYWdlICYmIHBhZ2UubGVuZ3RoICYmIHBhZ2Uuc29tZShmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgdmFyIGlkID0gX3JlZjUuaWQ7XG4gICAgICAgIHJldHVybiAhc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgfSkpIHtcbiAgICAgICAgaXNBbGxQYWdlUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdldEF1dG9SZXNldFNlbGVjdGVkUm93cyA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRTZWxlY3RlZFJvd3MpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFNlbGVjdGVkUm93cygpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0U2VsZWN0ZWRSb3dzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgZGF0YV0pO1xuICAgIHZhciB0b2dnbGVBbGxSb3dzU2VsZWN0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlQWxsUm93c1NlbGVjdGVkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciB0b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZVJvd1NlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVSb3dTZWxlY3RlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgdmFyIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICB2YXIgZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgc2VsZWN0ZWRGbGF0Um93czogc2VsZWN0ZWRGbGF0Um93cyxcbiAgICAgIGlzQWxsUm93c1NlbGVjdGVkOiBpc0FsbFJvd3NTZWxlY3RlZCxcbiAgICAgIGlzQWxsUGFnZVJvd3NTZWxlY3RlZDogaXNBbGxQYWdlUm93c1NlbGVjdGVkLFxuICAgICAgdG9nZ2xlUm93U2VsZWN0ZWQ6IHRvZ2dsZVJvd1NlbGVjdGVkLFxuICAgICAgdG9nZ2xlQWxsUm93c1NlbGVjdGVkOiB0b2dnbGVBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wczogZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMsXG4gICAgICBnZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHM6IGdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyxcbiAgICAgIHRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQ6IHRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMyhyb3csIF9yZWY2KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjYuaW5zdGFuY2U7XG5cbiAgICByb3cudG9nZ2xlUm93U2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2V0KSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlUm93U2VsZWN0ZWQocm93LmlkLCBzZXQpO1xuICAgIH07XG5cbiAgICByb3cuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGluc3RhbmNlLmdldEhvb2tzKCkuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgcm93OiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJvd0lzU2VsZWN0ZWQocm93LCBzZWxlY3RlZFJvd0lkcywgZ2V0U3ViUm93cykge1xuICAgIGlmIChzZWxlY3RlZFJvd0lkc1tyb3cuaWRdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3ViUm93cyA9IGdldFN1YlJvd3Mocm93KTtcblxuICAgIGlmIChzdWJSb3dzICYmIHN1YlJvd3MubGVuZ3RoKSB7XG4gICAgICB2YXIgYWxsQ2hpbGRyZW5TZWxlY3RlZCA9IHRydWU7XG4gICAgICB2YXIgc29tZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBzdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHN1YlJvdykge1xuICAgICAgICAvLyBCYWlsIG91dCBlYXJseSBpZiB3ZSBrbm93IGJvdGggb2YgdGhlc2VcbiAgICAgICAgaWYgKHNvbWVTZWxlY3RlZCAmJiAhYWxsQ2hpbGRyZW5TZWxlY3RlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXRSb3dJc1NlbGVjdGVkKHN1YlJvdywgc2VsZWN0ZWRSb3dJZHMsIGdldFN1YlJvd3MpKSB7XG4gICAgICAgICAgc29tZVNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxDaGlsZHJlblNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFsbENoaWxkcmVuU2VsZWN0ZWQgPyB0cnVlIDogc29tZVNlbGVjdGVkID8gbnVsbCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgPSBmdW5jdGlvbiBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9O1xuXG4gIHZhciBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yID0gZnVuY3Rpb24gZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcihjZWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9OyAvLyBBY3Rpb25zXG5cblxuICBhY3Rpb25zLnNldFJvd1N0YXRlID0gJ3NldFJvd1N0YXRlJztcbiAgYWN0aW9ucy5zZXRDZWxsU3RhdGUgPSAnc2V0Q2VsbFN0YXRlJztcbiAgYWN0aW9ucy5yZXNldFJvd1N0YXRlID0gJ3Jlc2V0Um93U3RhdGUnO1xuICB2YXIgdXNlUm93U3RhdGUgPSBmdW5jdGlvbiB1c2VSb3dTdGF0ZShob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDkpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkOSk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3ckNCk7XG4gIH07XG4gIHVzZVJvd1N0YXRlLnBsdWdpbk5hbWUgPSAndXNlUm93U3RhdGUnO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkOShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIHZhciBfaW5zdGFuY2UkaW5pdGlhbFJvd1MgPSBpbnN0YW5jZS5pbml0aWFsUm93U3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbFJvd1MgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsUm93UyxcbiAgICAgICAgX2luc3RhbmNlJGluaXRpYWxDZWxsID0gaW5zdGFuY2UuaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbENlbGwgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbENlbGwsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQ7XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcm93U3RhdGU6IHt9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0Um93U3RhdGUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcm93U3RhdGU6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5yb3dTdGF0ZSB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldFJvd1N0YXRlKSB7XG4gICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICB2YXIgcm93SWQgPSBhY3Rpb24ucm93SWQsXG4gICAgICAgICAgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgb2xkUm93U3RhdGUgPSB0eXBlb2Ygc3RhdGUucm93U3RhdGVbcm93SWRdICE9PSAndW5kZWZpbmVkJyA/IHN0YXRlLnJvd1N0YXRlW3Jvd0lkXSA6IGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKHJvd3NCeUlkW3Jvd0lkXSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHJvd1N0YXRlOiBfZXh0ZW5kcyh7fSwgc3RhdGUucm93U3RhdGUsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3Jvd0lkXSA9IGZ1bmN0aW9uYWxVcGRhdGUodmFsdWUsIG9sZFJvd1N0YXRlKSwgX2V4dGVuZHMyKSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRDZWxsU3RhdGUpIHtcbiAgICAgIHZhciBfb2xkUm93U3RhdGUkY2VsbFN0YXQsIF9yb3dzQnlJZCRfcm93SWQsIF9yb3dzQnlJZCRfcm93SWQkY2VsbCwgX2V4dGVuZHMzLCBfZXh0ZW5kczQ7XG5cbiAgICAgIHZhciBfcm93SWQgPSBhY3Rpb24ucm93SWQsXG4gICAgICAgICAgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgX3ZhbHVlID0gYWN0aW9uLnZhbHVlO1xuXG4gICAgICB2YXIgX29sZFJvd1N0YXRlID0gdHlwZW9mIHN0YXRlLnJvd1N0YXRlW19yb3dJZF0gIT09ICd1bmRlZmluZWQnID8gc3RhdGUucm93U3RhdGVbX3Jvd0lkXSA6IGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKHJvd3NCeUlkW19yb3dJZF0pO1xuXG4gICAgICB2YXIgb2xkQ2VsbFN0YXRlID0gdHlwZW9mIChfb2xkUm93U3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IChfb2xkUm93U3RhdGUkY2VsbFN0YXQgPSBfb2xkUm93U3RhdGUuY2VsbFN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX29sZFJvd1N0YXRlJGNlbGxTdGF0W2NvbHVtbklkXSkgIT09ICd1bmRlZmluZWQnID8gX29sZFJvd1N0YXRlLmNlbGxTdGF0ZVtjb2x1bW5JZF0gOiBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IoKF9yb3dzQnlJZCRfcm93SWQgPSByb3dzQnlJZFtfcm93SWRdKSA9PSBudWxsID8gdm9pZCAwIDogKF9yb3dzQnlJZCRfcm93SWQkY2VsbCA9IF9yb3dzQnlJZCRfcm93SWQuY2VsbHMpID09IG51bGwgPyB2b2lkIDAgOiBfcm93c0J5SWQkX3Jvd0lkJGNlbGwuZmluZChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICByZXR1cm4gY2VsbC5jb2x1bW4uaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICByb3dTdGF0ZTogX2V4dGVuZHMoe30sIHN0YXRlLnJvd1N0YXRlLCAoX2V4dGVuZHM0ID0ge30sIF9leHRlbmRzNFtfcm93SWRdID0gX2V4dGVuZHMoe30sIF9vbGRSb3dTdGF0ZSwge1xuICAgICAgICAgIGNlbGxTdGF0ZTogX2V4dGVuZHMoe30sIF9vbGRSb3dTdGF0ZS5jZWxsU3RhdGUgfHwge30sIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2NvbHVtbklkXSA9IGZ1bmN0aW9uYWxVcGRhdGUoX3ZhbHVlLCBvbGRDZWxsU3RhdGUpLCBfZXh0ZW5kczMpKVxuICAgICAgICB9KSwgX2V4dGVuZHM0KSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDkoaW5zdGFuY2UpIHtcbiAgICB2YXIgX2luc3RhbmNlJGF1dG9SZXNldFJvID0gaW5zdGFuY2UuYXV0b1Jlc2V0Um93U3RhdGUsXG4gICAgICAgIGF1dG9SZXNldFJvd1N0YXRlID0gX2luc3RhbmNlJGF1dG9SZXNldFJvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFJvLFxuICAgICAgICBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICB2YXIgc2V0Um93U3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocm93SWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldFJvd1N0YXRlLFxuICAgICAgICByb3dJZDogcm93SWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldENlbGxTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyb3dJZCwgY29sdW1uSWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldENlbGxTdGF0ZSxcbiAgICAgICAgcm93SWQ6IHJvd0lkLFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGdldEF1dG9SZXNldFJvd1N0YXRlID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFJvd1N0YXRlKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRSb3dTdGF0ZSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0Um93U3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2RhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBzZXRSb3dTdGF0ZTogc2V0Um93U3RhdGUsXG4gICAgICBzZXRDZWxsU3RhdGU6IHNldENlbGxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyQ0KHJvdywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgdmFyIF9pbnN0YW5jZSRpbml0aWFsUm93UzIgPSBpbnN0YW5jZS5pbml0aWFsUm93U3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbFJvd1MyID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbFJvd1MyLFxuICAgICAgICBfaW5zdGFuY2UkaW5pdGlhbENlbGwyID0gaW5zdGFuY2UuaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgPSBfaW5zdGFuY2UkaW5pdGlhbENlbGwyID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxDZWxsMixcbiAgICAgICAgcm93U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZS5yb3dTdGF0ZTtcblxuICAgIGlmIChyb3cpIHtcbiAgICAgIHJvdy5zdGF0ZSA9IHR5cGVvZiByb3dTdGF0ZVtyb3cuaWRdICE9PSAndW5kZWZpbmVkJyA/IHJvd1N0YXRlW3Jvdy5pZF0gOiBpbml0aWFsUm93U3RhdGVBY2Nlc3Nvcihyb3cpO1xuXG4gICAgICByb3cuc2V0U3RhdGUgPSBmdW5jdGlvbiAodXBkYXRlcikge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc2V0Um93U3RhdGUocm93LmlkLCB1cGRhdGVyKTtcbiAgICAgIH07XG5cbiAgICAgIHJvdy5jZWxscy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIGlmICghcm93LnN0YXRlLmNlbGxTdGF0ZSkge1xuICAgICAgICAgIHJvdy5zdGF0ZS5jZWxsU3RhdGUgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuc3RhdGUgPSB0eXBlb2Ygcm93LnN0YXRlLmNlbGxTdGF0ZVtjZWxsLmNvbHVtbi5pZF0gIT09ICd1bmRlZmluZWQnID8gcm93LnN0YXRlLmNlbGxTdGF0ZVtjZWxsLmNvbHVtbi5pZF0gOiBpbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IoY2VsbCk7XG5cbiAgICAgICAgY2VsbC5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnNldENlbGxTdGF0ZShyb3cuaWQsIGNlbGwuY29sdW1uLmlkLCB1cGRhdGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRDb2x1bW5PcmRlciA9ICdyZXNldENvbHVtbk9yZGVyJztcbiAgYWN0aW9ucy5zZXRDb2x1bW5PcmRlciA9ICdzZXRDb2x1bW5PcmRlcic7XG4gIHZhciB1c2VDb2x1bW5PcmRlciA9IGZ1bmN0aW9uIHVzZUNvbHVtbk9yZGVyKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2goZnVuY3Rpb24gKGRlcHMsIF9yZWYpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5jb2x1bW5PcmRlcl0pO1xuICAgIH0pO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMkMik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSRhKTtcbiAgfTtcbiAgdXNlQ29sdW1uT3JkZXIucGx1Z2luTmFtZSA9ICd1c2VDb2x1bW5PcmRlcic7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciRhKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldENvbHVtbk9yZGVyKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuY29sdW1uT3JkZXIgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRDb2x1bW5PcmRlcikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5PcmRlcjogZnVuY3Rpb25hbFVwZGF0ZShhY3Rpb24uY29sdW1uT3JkZXIsIHN0YXRlLmNvbHVtbk9yZGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMkMihjb2x1bW5zLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW5PcmRlciA9IF9yZWYyLmluc3RhbmNlLnN0YXRlLmNvbHVtbk9yZGVyO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gb3JkZXIsIHJldHVybiB0aGUgbm9ybWFsIGNvbHVtbnNcbiAgICBpZiAoIWNvbHVtbk9yZGVyIHx8ICFjb2x1bW5PcmRlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5PcmRlckNvcHkgPSBbXS5jb25jYXQoY29sdW1uT3JkZXIpOyAvLyBJZiB0aGVyZSBpcyBhbiBvcmRlciwgbWFrZSBhIGNvcHkgb2YgdGhlIGNvbHVtbnNcblxuICAgIHZhciBjb2x1bW5zQ29weSA9IFtdLmNvbmNhdChjb2x1bW5zKTsgLy8gQW5kIG1ha2UgYSBuZXcgb3JkZXJlZCBhcnJheSBvZiB0aGUgY29sdW1uc1xuXG4gICAgdmFyIGNvbHVtbnNJbk9yZGVyID0gW107IC8vIExvb3Agb3ZlciB0aGUgY29sdW1ucyBhbmQgcGxhY2UgdGhlbSBpbiBvcmRlciBpbnRvIHRoZSBuZXcgYXJyYXlcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgdmFyIHRhcmdldENvbHVtbklkID0gY29sdW1uT3JkZXJDb3B5LnNoaWZ0KCk7XG4gICAgICB2YXIgZm91bmRJbmRleCA9IGNvbHVtbnNDb3B5LmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gdGFyZ2V0Q29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZvdW5kSW5kZXggPiAtMSkge1xuICAgICAgICBjb2x1bW5zSW5PcmRlci5wdXNoKGNvbHVtbnNDb3B5LnNwbGljZShmb3VuZEluZGV4LCAxKVswXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdoaWxlIChjb2x1bW5zQ29weS5sZW5ndGggJiYgY29sdW1uT3JkZXJDb3B5Lmxlbmd0aCkge1xuICAgICAgX2xvb3AoKTtcbiAgICB9IC8vIElmIHRoZXJlIGFyZSBhbnkgY29sdW1ucyBsZWZ0LCBhZGQgdGhlbSB0byB0aGUgZW5kXG5cblxuICAgIHJldHVybiBbXS5jb25jYXQoY29sdW1uc0luT3JkZXIsIGNvbHVtbnNDb3B5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJGEoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcbiAgICBpbnN0YW5jZS5zZXRDb2x1bW5PcmRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5PcmRlcikge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRDb2x1bW5PcmRlcixcbiAgICAgICAgY29sdW1uT3JkZXI6IGNvbHVtbk9yZGVyXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgfVxuXG4gIGRlZmF1bHRDb2x1bW4uY2FuUmVzaXplID0gdHJ1ZTsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMuY29sdW1uU3RhcnRSZXNpemluZyA9ICdjb2x1bW5TdGFydFJlc2l6aW5nJztcbiAgYWN0aW9ucy5jb2x1bW5SZXNpemluZyA9ICdjb2x1bW5SZXNpemluZyc7XG4gIGFjdGlvbnMuY29sdW1uRG9uZVJlc2l6aW5nID0gJ2NvbHVtbkRvbmVSZXNpemluZyc7XG4gIGFjdGlvbnMucmVzZXRSZXNpemUgPSAncmVzZXRSZXNpemUnO1xuICB2YXIgdXNlUmVzaXplQ29sdW1ucyA9IGZ1bmN0aW9uIHVzZVJlc2l6ZUNvbHVtbnMoaG9va3MpIHtcbiAgICBob29rcy5nZXRSZXNpemVyUHJvcHMgPSBbZGVmYXVsdEdldFJlc2l6ZXJQcm9wc107XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaCh7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJGIpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkYik7XG4gICAgaG9va3MudXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zLnB1c2godXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zJDEpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0UmVzaXplclByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFJlc2l6ZXJQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyO1xuICAgIHZhciBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuXG4gICAgdmFyIG9uUmVzaXplU3RhcnQgPSBmdW5jdGlvbiBvblJlc2l6ZVN0YXJ0KGUsIGhlYWRlcikge1xuICAgICAgdmFyIGlzVG91Y2hFdmVudCA9IGZhbHNlO1xuXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgLy8gbGV0cyBub3QgcmVzcG9uZCB0byBtdWx0aXBsZSB0b3VjaGVzIChlLmcuIDIgb3IgMyBmaW5nZXJzKVxuICAgICAgICBpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNUb3VjaEV2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhlYWRlcnNUb1Jlc2l6ZSA9IGdldExlYWZIZWFkZXJzKGhlYWRlcik7XG4gICAgICB2YXIgaGVhZGVySWRXaWR0aHMgPSBoZWFkZXJzVG9SZXNpemUubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBbZC5pZCwgZC50b3RhbFdpZHRoXTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNsaWVudFggPSBpc1RvdWNoRXZlbnQgPyBNYXRoLnJvdW5kKGUudG91Y2hlc1swXS5jbGllbnRYKSA6IGUuY2xpZW50WDtcblxuICAgICAgdmFyIGRpc3BhdGNoTW92ZSA9IGZ1bmN0aW9uIGRpc3BhdGNoTW92ZShjbGllbnRYUG9zKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLmNvbHVtblJlc2l6aW5nLFxuICAgICAgICAgIGNsaWVudFg6IGNsaWVudFhQb3NcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZGlzcGF0Y2hFbmQgPSBmdW5jdGlvbiBkaXNwYXRjaEVuZCgpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLmNvbHVtbkRvbmVSZXNpemluZ1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYW5kbGVyc0FuZEV2ZW50cyA9IHtcbiAgICAgICAgbW91c2U6IHtcbiAgICAgICAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgICAgICAgIG1vdmVIYW5kbGVyOiBmdW5jdGlvbiBtb3ZlSGFuZGxlcihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2hNb3ZlKGUuY2xpZW50WCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cEV2ZW50OiAnbW91c2V1cCcsXG4gICAgICAgICAgdXBIYW5kbGVyOiBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlcnNBbmRFdmVudHMubW91c2UubW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZXJzQW5kRXZlbnRzLm1vdXNlLnVwSGFuZGxlcik7XG4gICAgICAgICAgICBkaXNwYXRjaEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgICAgICAgIG1vdmVIYW5kbGVyOiBmdW5jdGlvbiBtb3ZlSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGF0Y2hNb3ZlKGUudG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwRXZlbnQ6ICd0b3VjaGVuZCcsXG4gICAgICAgICAgdXBIYW5kbGVyOiBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC5tb3ZlRXZlbnQsIGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoLm1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcnNBbmRFdmVudHMudG91Y2gudXBFdmVudCwgaGFuZGxlcnNBbmRFdmVudHMudG91Y2gubW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZGlzcGF0Y2hFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgZXZlbnRzID0gaXNUb3VjaEV2ZW50ID8gaGFuZGxlcnNBbmRFdmVudHMudG91Y2ggOiBoYW5kbGVyc0FuZEV2ZW50cy5tb3VzZTtcbiAgICAgIHZhciBwYXNzaXZlSWZTdXBwb3J0ZWQgPSBwYXNzaXZlRXZlbnRTdXBwb3J0ZWQoKSA/IHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0gOiBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdmVFdmVudCwgZXZlbnRzLm1vdmVIYW5kbGVyLCBwYXNzaXZlSWZTdXBwb3J0ZWQpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMudXBFdmVudCwgZXZlbnRzLnVwSGFuZGxlciwgcGFzc2l2ZUlmU3VwcG9ydGVkKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5jb2x1bW5TdGFydFJlc2l6aW5nLFxuICAgICAgICBjb2x1bW5JZDogaGVhZGVyLmlkLFxuICAgICAgICBjb2x1bW5XaWR0aDogaGVhZGVyLnRvdGFsV2lkdGgsXG4gICAgICAgIGhlYWRlcklkV2lkdGhzOiBoZWFkZXJJZFdpZHRocyxcbiAgICAgICAgY2xpZW50WDogY2xpZW50WFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIHJldHVybiBlLnBlcnNpc3QoKSB8fCBvblJlc2l6ZVN0YXJ0KGUsIGhlYWRlcik7XG4gICAgICB9LFxuICAgICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICByZXR1cm4gZS5wZXJzaXN0KCkgfHwgb25SZXNpemVTdGFydChlLCBoZWFkZXIpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXG4gICAgICB9LFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHJvbGU6ICdzZXBhcmF0b3InXG4gICAgfV07XG4gIH07XG5cbiAgdXNlUmVzaXplQ29sdW1ucy5wbHVnaW5OYW1lID0gJ3VzZVJlc2l6ZUNvbHVtbnMnO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkYihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGNvbHVtblJlc2l6aW5nOiB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiB7fVxuICAgICAgICB9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0UmVzaXplKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtblJlc2l6aW5nOiB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiB7fVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuY29sdW1uU3RhcnRSZXNpemluZykge1xuICAgICAgdmFyIGNsaWVudFggPSBhY3Rpb24uY2xpZW50WCxcbiAgICAgICAgICBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBjb2x1bW5XaWR0aCA9IGFjdGlvbi5jb2x1bW5XaWR0aCxcbiAgICAgICAgICBoZWFkZXJJZFdpZHRocyA9IGFjdGlvbi5oZWFkZXJJZFdpZHRocztcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IF9leHRlbmRzKHt9LCBzdGF0ZS5jb2x1bW5SZXNpemluZywge1xuICAgICAgICAgIHN0YXJ0WDogY2xpZW50WCxcbiAgICAgICAgICBoZWFkZXJJZFdpZHRoczogaGVhZGVySWRXaWR0aHMsXG4gICAgICAgICAgY29sdW1uV2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgIGlzUmVzaXppbmdDb2x1bW46IGNvbHVtbklkXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuY29sdW1uUmVzaXppbmcpIHtcbiAgICAgIHZhciBfY2xpZW50WCA9IGFjdGlvbi5jbGllbnRYO1xuXG4gICAgICB2YXIgX3N0YXRlJGNvbHVtblJlc2l6aW5nID0gc3RhdGUuY29sdW1uUmVzaXppbmcsXG4gICAgICAgICAgc3RhcnRYID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nLnN0YXJ0WCxcbiAgICAgICAgICBfY29sdW1uV2lkdGggPSBfc3RhdGUkY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGgsXG4gICAgICAgICAgX3N0YXRlJGNvbHVtblJlc2l6aW5nMiA9IF9zdGF0ZSRjb2x1bW5SZXNpemluZy5oZWFkZXJJZFdpZHRocyxcbiAgICAgICAgICBfaGVhZGVySWRXaWR0aHMgPSBfc3RhdGUkY29sdW1uUmVzaXppbmcyID09PSB2b2lkIDAgPyBbXSA6IF9zdGF0ZSRjb2x1bW5SZXNpemluZzI7XG5cbiAgICAgIHZhciBkZWx0YVggPSBfY2xpZW50WCAtIHN0YXJ0WDtcbiAgICAgIHZhciBwZXJjZW50YWdlRGVsdGFYID0gZGVsdGFYIC8gX2NvbHVtbldpZHRoO1xuICAgICAgdmFyIG5ld0NvbHVtbldpZHRocyA9IHt9O1xuXG4gICAgICBfaGVhZGVySWRXaWR0aHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGhlYWRlcklkID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBoZWFkZXJXaWR0aCA9IF9yZWYyWzFdO1xuICAgICAgICBuZXdDb2x1bW5XaWR0aHNbaGVhZGVySWRdID0gTWF0aC5tYXgoaGVhZGVyV2lkdGggKyBoZWFkZXJXaWR0aCAqIHBlcmNlbnRhZ2VEZWx0YVgsIDApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IF9leHRlbmRzKHt9LCBzdGF0ZS5jb2x1bW5SZXNpemluZywge1xuICAgICAgICAgIGNvbHVtbldpZHRoczogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLmNvbHVtbldpZHRocywge30sIG5ld0NvbHVtbldpZHRocylcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5Eb25lUmVzaXppbmcpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IF9leHRlbmRzKHt9LCBzdGF0ZS5jb2x1bW5SZXNpemluZywge1xuICAgICAgICAgIHN0YXJ0WDogbnVsbCxcbiAgICAgICAgICBpc1Jlc2l6aW5nQ29sdW1uOiBudWxsXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zJDEgPSBmdW5jdGlvbiB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMoaW5zdGFuY2UpIHtcbiAgICB2YXIgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgZGlzYWJsZVJlc2l6aW5nID0gaW5zdGFuY2UuZGlzYWJsZVJlc2l6aW5nLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBjb2x1bW5SZXNpemluZyA9IGluc3RhbmNlLnN0YXRlLmNvbHVtblJlc2l6aW5nO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICB2YXIgY2FuUmVzaXplID0gZ2V0Rmlyc3REZWZpbmVkKGhlYWRlci5kaXNhYmxlUmVzaXppbmcgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZVJlc2l6aW5nID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgaGVhZGVyLmNhblJlc2l6ZSA9IGNhblJlc2l6ZTtcbiAgICAgIGhlYWRlci53aWR0aCA9IGNvbHVtblJlc2l6aW5nLmNvbHVtbldpZHRoc1toZWFkZXIuaWRdIHx8IGhlYWRlci5vcmlnaW5hbFdpZHRoIHx8IGhlYWRlci53aWR0aDtcbiAgICAgIGhlYWRlci5pc1Jlc2l6aW5nID0gY29sdW1uUmVzaXppbmcuaXNSZXNpemluZ0NvbHVtbiA9PT0gaGVhZGVyLmlkO1xuXG4gICAgICBpZiAoY2FuUmVzaXplKSB7XG4gICAgICAgIGhlYWRlci5nZXRSZXNpemVyUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFJlc2l6ZXJQcm9wcywge1xuICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJGIoaW5zdGFuY2UpIHtcbiAgICB2YXIgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRSZSA9IGluc3RhbmNlLmF1dG9SZXNldFJlc2l6ZSxcbiAgICAgICAgYXV0b1Jlc2V0UmVzaXplID0gX2luc3RhbmNlJGF1dG9SZXNldFJlID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFJlLFxuICAgICAgICBjb2x1bW5zID0gaW5zdGFuY2UuY29sdW1ucztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUFic29sdXRlTGF5b3V0J10sICd1c2VSZXNpemVDb2x1bW5zJyk7XG4gICAgdmFyIGdldEF1dG9SZXNldFJlc2l6ZSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRSZXNpemUpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFJlc2l6ZSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0UmVzaXplXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtjb2x1bW5zXSk7XG4gICAgdmFyIHJlc2V0UmVzaXppbmcgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0UmVzaXplXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICByZXNldFJlc2l6aW5nOiByZXNldFJlc2l6aW5nXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZWFmSGVhZGVycyhoZWFkZXIpIHtcbiAgICB2YXIgbGVhZkhlYWRlcnMgPSBbXTtcblxuICAgIHZhciByZWN1cnNlSGVhZGVyID0gZnVuY3Rpb24gcmVjdXJzZUhlYWRlcihoZWFkZXIpIHtcbiAgICAgIGlmIChoZWFkZXIuY29sdW1ucyAmJiBoZWFkZXIuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgaGVhZGVyLmNvbHVtbnMubWFwKHJlY3Vyc2VIZWFkZXIpO1xuICAgICAgfVxuXG4gICAgICBsZWFmSGVhZGVycy5wdXNoKGhlYWRlcik7XG4gICAgfTtcblxuICAgIHJlY3Vyc2VIZWFkZXIoaGVhZGVyKTtcbiAgICByZXR1cm4gbGVhZkhlYWRlcnM7XG4gIH1cblxuICB2YXIgY2VsbFN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDBcbiAgfTtcbiAgdmFyIHVzZUFic29sdXRlTGF5b3V0ID0gZnVuY3Rpb24gdXNlQWJzb2x1dGVMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5nZXRUYWJsZUJvZHlQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0Um93UHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEhlYWRlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZi5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNvbHVtbi50b3RhbExlZnQgKyBcInB4XCIsXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRDZWxsUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgY2VsbCA9IF9yZWYyLmNlbGw7XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNlbGwuY29sdW1uLnRvdGFsTGVmdCArIFwicHhcIixcbiAgICAgICAgICB3aWR0aDogY2VsbC5jb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYzKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZjMuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMsIHtcbiAgICAgICAgICBsZWZ0OiBjb2x1bW4udG90YWxMZWZ0ICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gIH07XG4gIHVzZUFic29sdXRlTGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlQWJzb2x1dGVMYXlvdXQnO1xuXG4gIHZhciBnZXRSb3dTdHlsZXMgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWY0KSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjQuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBjZWxsU3R5bGVzJDEgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfTtcblxuICB2YXIgZ2V0Um93U3R5bGVzJDEgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2lkdGg6IGluc3RhbmNlLnRvdGFsQ29sdW1uc1dpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIHVzZUJsb2NrTGF5b3V0ID0gZnVuY3Rpb24gdXNlQmxvY2tMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQxKTtcbiAgICBob29rcy5nZXRIZWFkZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDEpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMSk7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMkMSwge1xuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Q2VsbFByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmMykge1xuICAgICAgdmFyIGNlbGwgPSBfcmVmMy5jZWxsO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMkMSwge1xuICAgICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjQpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmNC5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcyQxLCB7XG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgfTtcbiAgdXNlQmxvY2tMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VCbG9ja0xheW91dCc7XG5cbiAgZnVuY3Rpb24gdXNlRmxleExheW91dChob29rcykge1xuICAgIGhvb2tzLmdldFRhYmxlUHJvcHMucHVzaChnZXRUYWJsZVByb3BzKTtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQyKTtcbiAgICBob29rcy5nZXRIZWFkZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDIpO1xuICAgIGhvb2tzLmdldEZvb3Rlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMik7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChnZXRIZWFkZXJQcm9wcyk7XG4gICAgaG9va3MuZ2V0Q2VsbFByb3BzLnB1c2goZ2V0Q2VsbFByb3BzKTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGdldEZvb3RlclByb3BzKTtcbiAgfVxuICB1c2VGbGV4TGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlRmxleExheW91dCc7XG5cbiAgdmFyIGdldFRhYmxlUHJvcHMgPSBmdW5jdGlvbiBnZXRUYWJsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBtaW5XaWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zTWluV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Um93U3R5bGVzJDIgPSBmdW5jdGlvbiBnZXRSb3dTdHlsZXMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgICBtaW5XaWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zTWluV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0SGVhZGVyUHJvcHMgPSBmdW5jdGlvbiBnZXRIZWFkZXJQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjMuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4OiBjb2x1bW4udG90YWxGbGV4V2lkdGggPyBjb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWluV2lkdGg6IGNvbHVtbi50b3RhbE1pbldpZHRoICsgXCJweFwiLFxuICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Q2VsbFByb3BzID0gZnVuY3Rpb24gZ2V0Q2VsbFByb3BzKHByb3BzLCBfcmVmNCkge1xuICAgIHZhciBjZWxsID0gX3JlZjQuY2VsbDtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleDogY2VsbC5jb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIixcbiAgICAgICAgbWluV2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsTWluV2lkdGggKyBcInB4XCIsXG4gICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldEZvb3RlclByb3BzID0gZnVuY3Rpb24gZ2V0Rm9vdGVyUHJvcHMocHJvcHMsIF9yZWY1KSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWY1LmNvbHVtbjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleDogY29sdW1uLnRvdGFsRmxleFdpZHRoID8gY29sdW1uLnRvdGFsRmxleFdpZHRoICsgXCIgMCBhdXRvXCIgOiB1bmRlZmluZWQsXG4gICAgICAgIG1pbldpZHRoOiBjb2x1bW4udG90YWxNaW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgZnVuY3Rpb24gdXNlR3JpZExheW91dChob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJGMpO1xuICAgIGhvb2tzLmdldFRhYmxlUHJvcHMucHVzaChnZXRUYWJsZVByb3BzJDEpO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goZ2V0SGVhZGVyUHJvcHMkMSk7XG4gIH1cbiAgdXNlR3JpZExheW91dC5wbHVnaW5OYW1lID0gJ3VzZUdyaWRMYXlvdXQnO1xuXG4gIHZhciBnZXRUYWJsZVByb3BzJDEgPSBmdW5jdGlvbiBnZXRUYWJsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogaW5zdGFuY2Uuc3RhdGUuZ3JpZExheW91dC5jb2x1bW5XaWR0aHMubWFwKGZ1bmN0aW9uICh3KSB7XG4gICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH0pLmpvaW4oXCIgXCIpXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldEhlYWRlclByb3BzJDEgPSBmdW5jdGlvbiBnZXRIZWFkZXJQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIGlkOiBcImhlYWRlci1jZWxsLVwiICsgY29sdW1uLmlkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246IFwic3RpY2t5XCIgLy9lbmFibGVzIGEgc2Nyb2xsIHdyYXBwZXIgdG8gYmUgcGxhY2VkIGFyb3VuZCB0aGUgdGFibGUgYW5kIGhhdmUgc3RpY2t5IGhlYWRlcnNcblxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkYyhzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJpbml0XCIpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGdyaWRMYXlvdXQ6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IGluc3RhbmNlLmNvbHVtbnMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcImF1dG9cIjtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBcImNvbHVtblN0YXJ0UmVzaXppbmdcIikge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkO1xuICAgICAgdmFyIGNvbHVtbkluZGV4ID0gaW5zdGFuY2UudmlzaWJsZUNvbHVtbnMuZmluZEluZGV4KGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgcmV0dXJuIGNvbC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBlbFdpZHRoID0gZ2V0RWxlbWVudFdpZHRoKGNvbHVtbklkKTtcblxuICAgICAgaWYgKGVsV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZ3JpZExheW91dDogX2V4dGVuZHMoe30sIHN0YXRlLmdyaWRMYXlvdXQsIHtcbiAgICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2x1bW5JbmRleCxcbiAgICAgICAgICAgIHN0YXJ0aW5nV2lkdGg6IGVsV2lkdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiY29sdW1uUmVzaXppbmdcIikge1xuICAgICAgdmFyIF9zdGF0ZSRncmlkTGF5b3V0ID0gc3RhdGUuZ3JpZExheW91dCxcbiAgICAgICAgICBfY29sdW1uSW5kZXggPSBfc3RhdGUkZ3JpZExheW91dC5jb2x1bW5JbmRleCxcbiAgICAgICAgICBzdGFydGluZ1dpZHRoID0gX3N0YXRlJGdyaWRMYXlvdXQuc3RhcnRpbmdXaWR0aCxcbiAgICAgICAgICBjb2x1bW5XaWR0aHMgPSBfc3RhdGUkZ3JpZExheW91dC5jb2x1bW5XaWR0aHM7XG4gICAgICB2YXIgY2hhbmdlID0gc3RhdGUuY29sdW1uUmVzaXppbmcuc3RhcnRYIC0gYWN0aW9uLmNsaWVudFg7XG4gICAgICB2YXIgbmV3V2lkdGggPSBzdGFydGluZ1dpZHRoIC0gY2hhbmdlO1xuICAgICAgdmFyIGNvbHVtbldpZHRoc0NvcHkgPSBbXS5jb25jYXQoY29sdW1uV2lkdGhzKTtcbiAgICAgIGNvbHVtbldpZHRoc0NvcHlbX2NvbHVtbkluZGV4XSA9IG5ld1dpZHRoICsgXCJweFwiO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncmlkTGF5b3V0OiBfZXh0ZW5kcyh7fSwgc3RhdGUuZ3JpZExheW91dCwge1xuICAgICAgICAgIGNvbHVtbldpZHRoczogY29sdW1uV2lkdGhzQ29weVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RWxlbWVudFdpZHRoKGNvbHVtbklkKSB7XG4gICAgdmFyIF9kb2N1bWVudCRnZXRFbGVtZW50QjtcblxuICAgIHZhciB3aWR0aCA9IChfZG9jdW1lbnQkZ2V0RWxlbWVudEIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1jZWxsLVwiICsgY29sdW1uSWQpKSA9PSBudWxsID8gdm9pZCAwIDogX2RvY3VtZW50JGdldEVsZW1lbnRCLm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKHdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gIH1cblxuICBleHBvcnRzLl9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMgPSBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zO1xuICBleHBvcnRzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICBleHBvcnRzLmRlZmF1bHRDb2x1bW4gPSBkZWZhdWx0Q29sdW1uO1xuICBleHBvcnRzLmRlZmF1bHRHcm91cEJ5Rm4gPSBkZWZhdWx0R3JvdXBCeUZuO1xuICBleHBvcnRzLmRlZmF1bHRPcmRlckJ5Rm4gPSBkZWZhdWx0T3JkZXJCeUZuO1xuICBleHBvcnRzLmRlZmF1bHRSZW5kZXJlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgZXhwb3J0cy5lbXB0eVJlbmRlcmVyID0gZW1wdHlSZW5kZXJlcjtcbiAgZXhwb3J0cy5lbnN1cmVQbHVnaW5PcmRlciA9IGVuc3VyZVBsdWdpbk9yZGVyO1xuICBleHBvcnRzLmZsZXhSZW5kZXIgPSBmbGV4UmVuZGVyO1xuICBleHBvcnRzLmZ1bmN0aW9uYWxVcGRhdGUgPSBmdW5jdGlvbmFsVXBkYXRlO1xuICBleHBvcnRzLmxvb3BIb29rcyA9IGxvb3BIb29rcztcbiAgZXhwb3J0cy5tYWtlUHJvcEdldHRlciA9IG1ha2VQcm9wR2V0dGVyO1xuICBleHBvcnRzLm1ha2VSZW5kZXJlciA9IG1ha2VSZW5kZXJlcjtcbiAgZXhwb3J0cy5yZWR1Y2VIb29rcyA9IHJlZHVjZUhvb2tzO1xuICBleHBvcnRzLnNhZmVVc2VMYXlvdXRFZmZlY3QgPSBzYWZlVXNlTGF5b3V0RWZmZWN0O1xuICBleHBvcnRzLnVzZUFic29sdXRlTGF5b3V0ID0gdXNlQWJzb2x1dGVMYXlvdXQ7XG4gIGV4cG9ydHMudXNlQXN5bmNEZWJvdW5jZSA9IHVzZUFzeW5jRGVib3VuY2U7XG4gIGV4cG9ydHMudXNlQmxvY2tMYXlvdXQgPSB1c2VCbG9ja0xheW91dDtcbiAgZXhwb3J0cy51c2VDb2x1bW5PcmRlciA9IHVzZUNvbHVtbk9yZGVyO1xuICBleHBvcnRzLnVzZUV4cGFuZGVkID0gdXNlRXhwYW5kZWQ7XG4gIGV4cG9ydHMudXNlRmlsdGVycyA9IHVzZUZpbHRlcnM7XG4gIGV4cG9ydHMudXNlRmxleExheW91dCA9IHVzZUZsZXhMYXlvdXQ7XG4gIGV4cG9ydHMudXNlR2V0TGF0ZXN0ID0gdXNlR2V0TGF0ZXN0O1xuICBleHBvcnRzLnVzZUdsb2JhbEZpbHRlciA9IHVzZUdsb2JhbEZpbHRlcjtcbiAgZXhwb3J0cy51c2VHcmlkTGF5b3V0ID0gdXNlR3JpZExheW91dDtcbiAgZXhwb3J0cy51c2VHcm91cEJ5ID0gdXNlR3JvdXBCeTtcbiAgZXhwb3J0cy51c2VNb3VudGVkTGF5b3V0RWZmZWN0ID0gdXNlTW91bnRlZExheW91dEVmZmVjdDtcbiAgZXhwb3J0cy51c2VQYWdpbmF0aW9uID0gdXNlUGFnaW5hdGlvbjtcbiAgZXhwb3J0cy51c2VSZXNpemVDb2x1bW5zID0gdXNlUmVzaXplQ29sdW1ucztcbiAgZXhwb3J0cy51c2VSb3dTZWxlY3QgPSB1c2VSb3dTZWxlY3Q7XG4gIGV4cG9ydHMudXNlUm93U3RhdGUgPSB1c2VSb3dTdGF0ZTtcbiAgZXhwb3J0cy51c2VTb3J0QnkgPSB1c2VTb3J0Qnk7XG4gIGV4cG9ydHMudXNlVGFibGUgPSB1c2VUYWJsZTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtdGFibGUuZGV2ZWxvcG1lbnQuanMubWFwXG4iLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC10YWJsZS5wcm9kdWN0aW9uLm1pbi5qcycpXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC10YWJsZS5kZXZlbG9wbWVudC5qcycpXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgSW1wbGVtZW50YXRpb246IEZDPHsgbmFtZTogc3RyaW5nIH0+ID0gKHsgbmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSB7IHRpdGxlOiBuYW1lLCBkZXNjcmlwdGlvbjogYEFuIGltcGxtZW50YXRpb24gb2YgdGhlIEhTVydzIEJvb21pIEFQSSAke25hbWV9IEZ1bmN0aW9uYWxpdHlgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtgSW1wbGVtZW50YXRpb246ICR7bmFtZX0gfCBIU1cgQm9vbWkgQVBJYH0gbWV0YT17bWV0YX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PntuYW1lfSBJbXBsZW1lbnRhdGlvbnM8L2gyPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlTG9hZCgpIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZChmbjogKCkgPT4gUHJvbWlzZTxhbnk+KSB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGZuKCk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRSZXNwb25zZShwYXlsb2FkKTtcclxuICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgIHNldFJlc3BvbnNlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyByZXNwb25zZSwgZXJyb3IsIGlzTG9hZGluZzogbG9hZGluZywgbG9hZCB9O1xyXG59XHJcblxyXG5cclxuY29uc3QgU3RvY2tMb29rdXA6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvb21pQVBJID0gdXNlQm9vbWlBUEkoKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkKCk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHsgXCJsb2NhdGlvbi1pZHNcIiA6IFtcIjEyMTAwXCIsIFwiMTIwNzdcIl0sIFwiU0tVc1wiIDogW1wiTFRXOTE0MVwiLFwiTFRXOTI1MlwiLFwiTFRXOTEzNVwiXSB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2dldFByb2R1Y3RBdmFpbGFiaWxpdHlgLCBwYXlsb2FkKVxyXG4gICAgICAgIHJlc29sdmUocmVzcCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IFNvSCA9IHJlc3BvbnNlPy5yZXN1bHRzLm1hcCgoc3RvcmU6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sIHN0b3JlTmFtZTogc3RvcmVbXCJsb2NhdGlvbi1uYW1lXCJdLCAuLi5zdG9yZS5hdmFpbGFiaWxpdHkucmVkdWNlKChvYmo6IGFueSwgaXRlbTogYW55KSA9PiB7IG9ialtpdGVtW1wicHJvZHVjdC1jb2RlXCJdXSA9IGl0ZW1bXCJxdWFudGl0eVwiXTsgcmV0dXJuIG9iajsgfSwge30pIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBTb0g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB7bXNnOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlID0gWyB7IEhlYWRlcjogJ1N0b3JlIElEJywgYWNjZXNzb3I6ICdzdG9yZUlEJyB9LCB7IEhlYWRlcjogJ1N0b3JlIE5hbWUnLCBhY2Nlc3NvcjogJ3N0b3JlTmFtZScgfSBdO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IG5ldyBTZXQoKTtcclxuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiByZXNwb25zZT8ucmVzdWx0cykge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzdG9yZS5hdmFpbGFiaWxpdHkpIHtcclxuICAgICAgICAgIHByb2R1Y3RzLmFkZChpdGVtW1wicHJvZHVjdC1jb2RlXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9kdWN0cy5rZXlzKCkpIHtcclxuICAgICAgICBiYXNlLnB1c2goeyBIZWFkZXI6IGl0ZW0sIGFjY2Vzc29yOiBpdGVtIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbIHsgSGVhZGVyOiBcIkVycm9yIC8gTWVzc2FnZVwiLCBhY2Nlc29yOiBcIm1zZ1wiIH0gXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIHtib29taUFQSS5lbmRwb2ludC51cml9XHJcbiAgICAgIHtpc0xvYWRpbmcgPyBcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+TG9hZGluZyB5b3VyIGRhdGEuLi48L2gyPlxyXG4gICAgICA6IChyZXNwb25zZSAhPT0gdW5kZWZpbmVkKSA/ICg8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz4pIDogKDw+PGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkVycm9yOjwvaDI+PHA+e2Vycm9yfTwvcD48Lz4pfVxyXG4gICAgICBcclxuICAgIDwvSW1wbGVtZW50YXRpb24+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tMb29rdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==