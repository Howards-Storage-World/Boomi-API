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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
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
___CSS_LOADER_EXPORT___.push([module.i, "/* padding: 1rem; */\r\n\r\n.Table_table__1EC6b {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n    border: 1px solid black;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tr__2DL9c:last-child .Table_td__1oCl7 {\r\n    border-bottom: 0;\r\n}\r\n\r\n.Table_th__6w9tE, .Table_td__1oCl7 {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid black;\r\n    border-right: 1px solid black;\r\n}\r\n.Table_th__6w9tE:last-child, .Table_td__1oCl7:last-child {\r\n    border-right: 0;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN, .Table_td__1oCl7 .Table_resizer__2AqsN {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translateX(50%);\r\n            transform: translateX(50%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN .Table_isResizing__W_zI5, .Table_td__1oCl7 .Table_resizer__2AqsN .Table_isResizing__W_zI5 {\r\n    background: red;\r\n}", "",{"version":3,"sources":["webpack://components/tools/Table.module.css"],"names":[],"mappings":"AAAA,mBAAmB;;AAEnB;IACI,qBAAqB;IACrB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,8BAA8B;IAC9B,6BAA6B;AACjC;AACA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,kCAA0B;YAA1B,0BAA0B;IAC1B,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* padding: 1rem; */\r\n\r\n.table {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n    border: 1px solid black;\r\n}\r\n\r\n.table .tr:last-child .td {\r\n    border-bottom: 0;\r\n}\r\n\r\n.th, .td {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid black;\r\n    border-right: 1px solid black;\r\n}\r\n.th:last-child, .td:last-child {\r\n    border-right: 0;\r\n}\r\n\r\n.th .resizer, .td .resizer {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transform: translateX(50%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.th .resizer .isResizing, .td .resizer .isResizing {\r\n    background: red;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"table": "Table_table__1EC6b",
	"tr": "Table_tr__2DL9c",
	"td": "Table_td__1oCl7",
	"th": "Table_th__6w9tE",
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_tools_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/tools/Table */ "./components/tools/Table.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

var StockLookup = function StockLookup() {
  _s();

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
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload).then(function (res) {
      return setResponse(res.data);
    })["catch"](function (err) {
      return setError(err);
    });
  }, []);
  var data = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
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
  var columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }));
};

_s(StockLookup, "CYR5UlE/UvgPsrtN+j7jnGp/BVQ=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_5__["useBoomiAPI"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS5tb2R1bGUuY3NzP2FmYjIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9vbHMvVGFibGUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10YWJsZS9kaXN0L3JlYWN0LXRhYmxlLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAudHN4Il0sIm5hbWVzIjpbIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VUYWJsZSIsInVzZVNvcnRCeSIsInVzZVJlc2l6ZUNvbHVtbnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsInN0eWxlcyIsInRhYmxlIiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwiZ2V0U29ydEJ5VG9nZ2xlUHJvcHMiLCJyZW5kZXIiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsImdldFJlc2l6ZXJQcm9wcyIsImlzUmVzaXppbmciLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJJbXBsZW1lbnRhdGlvbiIsIm5hbWUiLCJjaGlsZHJlbiIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXRpbFN0eWxlcyIsImhlYWRpbmdMZyIsIlN0b2NrTG9va3VwIiwiYm9vbWlBUEkiLCJ1c2VCb29taUFQSSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVycm9yIiwic2V0RXJyb3IiLCJwYXlsb2FkIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJwb3N0IiwiZW5kcG9pbnQiLCJ1cmkiLCJ0aGVuIiwicmVzIiwiZXJyIiwiUmVhY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsInN0b3JlSUQiLCJzdG9yZU5hbWUiLCJhdmFpbGFiaWxpdHkiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwiYmFzZSIsIkhlYWRlciIsImFjY2Vzc29yIiwicHJvZHVjdHMiLCJTZXQiLCJhZGQiLCJrZXlzIiwicHVzaCIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLHNOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyxzVUFBOEs7O0FBRWhOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHNVQUE4SztBQUNwTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNVQUE4Szs7QUFFeE07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBOztBQUVBLElBQU1BLEtBQXNDLEdBQUcsU0FBekNB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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSw2RkFBNkYsYUFBYTtBQUMxRztBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOztBQUVqQyxvREFBb0Q7O0FBRXBELHFDQUFxQyxFQUFFOztBQUV2Qyx3REFBd0Q7O0FBRXhELDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDs7O0FBRzdELHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyw0Q0FBNEM7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSx3Q0FBd0M7OztBQUd4QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLLElBQUk7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUVBQXFFOztBQUVyRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxpRkFBaUY7QUFDakY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVELHdCQUF3Qjs7QUFFeEIsNkJBQTZCOztBQUU3QiwyQkFBMkI7O0FBRTNCLDJCQUEyQjs7QUFFM0IsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTs7QUFFYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNUOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLCtCQUErQixpQ0FBaUM7QUFDaEUsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7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QUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FB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TztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFD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QTs7QUFXdEIsYUFBT0MsSUFBSSxDQUFDUSxNQUFMLEVBQVA7QUFDRDs7QUFFRFIsUUFBSSxDQUFDTyxJQUFMLENBQVU7QUFBRU4sWUFBTSxFQUFFLFNBQVY7QUFBcUJDLGNBQVEsRUFBRTtBQUEvQixLQUFWO0FBQ0EsV0FBT0YsSUFBUDtBQUNELEdBbEJlLEVBa0JiLENBQUMxQixRQUFELENBbEJhLENBQWhCLENBdkI0QixDQTJDNUI7O0FBQ0EsU0FDRSxNQUFDLGNBQUQ7QUFBZ0IsUUFBSSxFQUFDLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osUUFBUSxDQUFDWSxRQUFULENBQWtCQyxHQURyQixFQUVFLE1BQUMsK0RBQUQ7QUFBTyxXQUFPLEVBQUV0RCxPQUFoQjtBQUF5QixRQUFJLEVBQUVDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FsREQ7O0dBQU11QyxXO1VBQ2FFLHNFOzs7TUFEYkYsVztBQW9EU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC5lNTU4NzhhMGZkMTljYzU5OWJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9UYWJsZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9UYWJsZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vVGFibGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlU29ydEJ5LCB1c2VSZXNpemVDb2x1bW5zIH0gZnJvbSAncmVhY3QtdGFibGUnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVGFibGU6IEZDPHsgY29sdW1uczogYW55LCBkYXRhOiBhbnl9ID4gPSAoeyBjb2x1bW5zLCBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgIGhlYWRlckdyb3VwcyxcclxuICAgICAgcm93cyxcclxuICAgICAgcHJlcGFyZVJvdyxcclxuICAgIH0gPSB1c2VUYWJsZShcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSxcclxuICAgICAgdXNlU29ydEJ5LFxyXG4gICAgICB1c2VSZXNpemVDb2x1bW5zXHJcbiAgICApXHJcbiAgXHJcbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbmRlciBhbGwgMjAwMCByb3dzIGZvciB0aGlzIGV4YW1wbGUsIHNvIGNhcFxyXG4gICAgLy8gaXQgYXQgMjAgZm9yIHRoaXMgdXNlIGNhc2VcclxuICAgIGNvbnN0IGZpcnN0UGFnZVJvd3MgPSByb3dzLnNsaWNlKDAsIDIwKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbjogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHNvcnRpbmcgcHJvcHMgdG8gY29udHJvbCBzb3J0aW5nLiBGb3IgdGhpcyBleGFtcGxlXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gYWRkIHRoZW0gaW50byB0aGUgaGVhZGVyIHByb3BzXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBBZGQgYSBzb3J0IGRpcmVjdGlvbiBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICcg8J+UvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0UmVzaXplclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZXNpemVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5pc1Jlc2l6aW5nID8gJ2lzUmVzaXppbmcnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge2ZpcnN0UGFnZVJvd3MubWFwKFxyXG4gICAgICAgICAgICAocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBwYWRkaW5nOiAxcmVtOyAqL1xcclxcblxcclxcbi5UYWJsZV90YWJsZV9fMUVDNmIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdHJfXzJETDljOmxhc3QtY2hpbGQgLlRhYmxlX3RkX18xb0NsNyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90aF9fNnc5dEUsIC5UYWJsZV90ZF9fMW9DbDcge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLlRhYmxlX3RoX182dzl0RTpsYXN0LWNoaWxkLCAuVGFibGVfdGRfXzFvQ2w3Omxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90aF9fNnc5dEUgLlRhYmxlX3Jlc2l6ZXJfXzJBcXNOLCAuVGFibGVfdGRfXzFvQ2w3IC5UYWJsZV9yZXNpemVyX18yQXFzTiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3VjaC1hY3Rpb246bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RoX182dzl0RSAuVGFibGVfcmVzaXplcl9fMkFxc04gLlRhYmxlX2lzUmVzaXppbmdfX1dfekk1LCAuVGFibGVfdGRfXzFvQ2w3IC5UYWJsZV9yZXNpemVyX18yQXFzTiAuVGFibGVfaXNSZXNpemluZ19fV196STUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQW1COztBQUVuQjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogcGFkZGluZzogMXJlbTsgKi9cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIC50cjpsYXN0LWNoaWxkIC50ZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi50aCwgLnRkIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi50aDpsYXN0LWNoaWxkLCAudGQ6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRoIC5yZXNpemVyLCAudGQgLnJlc2l6ZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvdWNoLWFjdGlvbjpub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGggLnJlc2l6ZXIgLmlzUmVzaXppbmcsIC50ZCAucmVzaXplciAuaXNSZXNpemluZyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGFibGVcIjogXCJUYWJsZV90YWJsZV9fMUVDNmJcIixcblx0XCJ0clwiOiBcIlRhYmxlX3RyX18yREw5Y1wiLFxuXHRcInRkXCI6IFwiVGFibGVfdGRfXzFvQ2w3XCIsXG5cdFwidGhcIjogXCJUYWJsZV90aF9fNnc5dEVcIixcblx0XCJyZXNpemVyXCI6IFwiVGFibGVfcmVzaXplcl9fMkFxc05cIixcblx0XCJpc1Jlc2l6aW5nXCI6IFwiVGFibGVfaXNSZXNpemluZ19fV196STVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuUmVhY3RUYWJsZSA9IHt9LCBnbG9iYWwuUmVhY3QpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzLCBSZWFjdCkgeyAndXNlIHN0cmljdCc7XG5cbiAgUmVhY3QgPSBSZWFjdCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoUmVhY3QsICdkZWZhdWx0JykgPyBSZWFjdFsnZGVmYXVsdCddIDogUmVhY3Q7XG5cbiAgZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICAgIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcblxuICAgIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG5cbiAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xuICB9XG5cbiAgdmFyIHJlbmRlckVyciA9ICdSZW5kZXJlciBFcnJvciDimJ3vuI8nO1xuICB2YXIgYWN0aW9ucyA9IHtcbiAgICBpbml0OiAnaW5pdCdcbiAgfTtcbiAgdmFyIGRlZmF1bHRSZW5kZXJlciA9IGZ1bmN0aW9uIGRlZmF1bHRSZW5kZXJlcihfcmVmKSB7XG4gICAgdmFyIF9yZWYkdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgICB2YWx1ZSA9IF9yZWYkdmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3JlZiR2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIHZhciBlbXB0eVJlbmRlcmVyID0gZnVuY3Rpb24gZW1wdHlSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgXCJcXHhBMFwiKTtcbiAgfTtcbiAgdmFyIGRlZmF1bHRDb2x1bW4gPSB7XG4gICAgQ2VsbDogZGVmYXVsdFJlbmRlcmVyLFxuICAgIHdpZHRoOiAxNTAsXG4gICAgbWluV2lkdGg6IDAsXG4gICAgbWF4V2lkdGg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gIH07XG5cbiAgZnVuY3Rpb24gbWVyZ2VQcm9wcygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcExpc3QgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBwcm9wTGlzdFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcExpc3QucmVkdWNlKGZ1bmN0aW9uIChwcm9wcywgbmV4dCkge1xuICAgICAgdmFyIHN0eWxlID0gbmV4dC5zdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBuZXh0LmNsYXNzTmFtZSxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UobmV4dCwgW1wic3R5bGVcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gICAgICBwcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcywge30sIHJlc3QpO1xuXG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgcHJvcHMuc3R5bGUgPSBwcm9wcy5zdHlsZSA/IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSB8fCB7fSwge30sIHN0eWxlIHx8IHt9KSA6IHN0eWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmNsYXNzTmFtZSA9PT0gJycpIHtcbiAgICAgICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVByb3BHZXR0ZXIocHJldlByb3BzLCB1c2VyUHJvcHMsIG1ldGEpIHtcbiAgICAvLyBIYW5kbGUgYSBsYW1iZGEsIHBhc3MgaXQgdGhlIHByZXZpb3VzIHByb3BzXG4gICAgaWYgKHR5cGVvZiB1c2VyUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBoYW5kbGVQcm9wR2V0dGVyKHt9LCB1c2VyUHJvcHMocHJldlByb3BzLCBtZXRhKSk7XG4gICAgfSAvLyBIYW5kbGUgYW4gYXJyYXksIG1lcmdlIGVhY2ggaXRlbSBhcyBzZXBhcmF0ZSBwcm9wc1xuXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyUHJvcHMpKSB7XG4gICAgICByZXR1cm4gbWVyZ2VQcm9wcy5hcHBseSh2b2lkIDAsIFtwcmV2UHJvcHNdLmNvbmNhdCh1c2VyUHJvcHMpKTtcbiAgICB9IC8vIEhhbmRsZSBhbiBvYmplY3QgYnkgZGVmYXVsdCwgbWVyZ2UgdGhlIHR3byBvYmplY3RzXG5cblxuICAgIHJldHVybiBtZXJnZVByb3BzKHByZXZQcm9wcywgdXNlclByb3BzKTtcbiAgfVxuXG4gIHZhciBtYWtlUHJvcEdldHRlciA9IGZ1bmN0aW9uIG1ha2VQcm9wR2V0dGVyKGhvb2tzLCBtZXRhKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAodXNlclByb3BzKSB7XG4gICAgICBpZiAodXNlclByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgdXNlclByb3BzID0ge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXS5jb25jYXQoaG9va3MsIFt1c2VyUHJvcHNdKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVByb3BHZXR0ZXIocHJldiwgbmV4dCwgX2V4dGVuZHMoe30sIG1ldGEsIHtcbiAgICAgICAgICB1c2VyUHJvcHM6IHVzZXJQcm9wc1xuICAgICAgICB9KSk7XG4gICAgICB9LCB7fSk7XG4gICAgfTtcbiAgfTtcbiAgdmFyIHJlZHVjZUhvb2tzID0gZnVuY3Rpb24gcmVkdWNlSG9va3MoaG9va3MsIGluaXRpYWwsIG1ldGEsIGFsbG93VW5kZWZpbmVkKSB7XG4gICAgaWYgKG1ldGEgPT09IHZvaWQgMCkge1xuICAgICAgbWV0YSA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBob29rcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBuZXh0KHByZXYsIG1ldGEpO1xuXG4gICAgICB7XG4gICAgICAgIGlmICghYWxsb3dVbmRlZmluZWQgJiYgdHlwZW9mIG5leHRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8obmV4dCk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBUYWJsZTogQSByZWR1Y2VyIGhvb2sg4pid77iPIGp1c3QgcmV0dXJuZWQgdW5kZWZpbmVkISBUaGlzIGlzIG5vdCBhbGxvd2VkLicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0VmFsdWU7XG4gICAgfSwgaW5pdGlhbCk7XG4gIH07XG4gIHZhciBsb29wSG9va3MgPSBmdW5jdGlvbiBsb29wSG9va3MoaG9va3MsIGNvbnRleHQsIG1ldGEpIHtcbiAgICBpZiAobWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgICBtZXRhID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBob29rKGNvbnRleHQsIG1ldGEpO1xuXG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV4dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbyhob29rLCBuZXh0VmFsdWUpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgVGFibGU6IEEgbG9vcC10eXBlIGhvb2sg4pid77iPIGp1c3QgcmV0dXJuZWQgYSB2YWx1ZSEgVGhpcyBpcyBub3QgYWxsb3dlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBiZWZvcmVzLCBwbHVnaW5OYW1lLCBhZnRlcnMpIHtcbiAgICBpZiAoIGFmdGVycykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGVmaW5pbmcgcGx1Z2lucyBpbiB0aGUgXFxcImFmdGVyXFxcIiBzZWN0aW9uIG9mIGVuc3VyZVBsdWdpbk9yZGVyIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgKHNlZSBwbHVnaW4gXCIgKyBwbHVnaW5OYW1lICsgXCIpXCIpO1xuICAgIH1cblxuICAgIHZhciBwbHVnaW5JbmRleCA9IHBsdWdpbnMuZmluZEluZGV4KGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHJldHVybiBwbHVnaW4ucGx1Z2luTmFtZSA9PT0gcGx1Z2luTmFtZTtcbiAgICB9KTtcblxuICAgIGlmIChwbHVnaW5JbmRleCA9PT0gLTEpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBsdWdpbiBcXFwiXCIgKyBwbHVnaW5OYW1lICsgXCJcXFwiIHdhcyBub3QgZm91bmQgaW4gdGhlIHBsdWdpbiBsaXN0IVxcblRoaXMgdXN1YWxseSBtZWFucyB5b3UgbmVlZCB0byBuZWVkIHRvIG5hbWUgeW91ciBwbHVnaW4gaG9vayBieSBzZXR0aW5nIHRoZSAncGx1Z2luTmFtZScgcHJvcGVydHkgb2YgdGhlIGhvb2sgZnVuY3Rpb24sIGVnOlxcblxcbiAgXCIgKyBwbHVnaW5OYW1lICsgXCIucGx1Z2luTmFtZSA9ICdcIiArIHBsdWdpbk5hbWUgKyBcIidcXG5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYmVmb3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChiZWZvcmUpIHtcbiAgICAgIHZhciBiZWZvcmVJbmRleCA9IHBsdWdpbnMuZmluZEluZGV4KGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5wbHVnaW5OYW1lID09PSBiZWZvcmU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGJlZm9yZUluZGV4ID4gLTEgJiYgYmVmb3JlSW5kZXggPiBwbHVnaW5JbmRleCkge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QgVGFibGU6IFRoZSBcIiArIHBsdWdpbk5hbWUgKyBcIiBwbHVnaW4gaG9vayBtdXN0IGJlIHBsYWNlZCBhZnRlciB0aGUgXCIgKyBiZWZvcmUgKyBcIiBwbHVnaW4gaG9vayFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBmdW5jdGlvbmFsVXBkYXRlKHVwZGF0ZXIsIG9sZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIob2xkKSA6IHVwZGF0ZXI7XG4gIH1cbiAgZnVuY3Rpb24gdXNlR2V0TGF0ZXN0KG9iaikge1xuICAgIHZhciByZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgICByZWYuY3VycmVudCA9IG9iajtcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0sIFtdKTtcbiAgfSAvLyBTU1IgaGFzIGlzc3VlcyB3aXRoIHVzZUxheW91dEVmZmVjdCBzdGlsbCwgc28gdXNlIHVzZUVmZmVjdCBkdXJpbmcgU1NSXG5cbiAgdmFyIHNhZmVVc2VMYXlvdXRFZmZlY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuICBmdW5jdGlvbiB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZuLCBkZXBzKSB7XG4gICAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICAgIHNhZmVVc2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICBmbigpO1xuICAgICAgfVxuXG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9LCBkZXBzKTtcbiAgfVxuICBmdW5jdGlvbiB1c2VBc3luY0RlYm91bmNlKGRlZmF1bHRGbiwgZGVmYXVsdFdhaXQpIHtcbiAgICBpZiAoZGVmYXVsdFdhaXQgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdFdhaXQgPSAwO1xuICAgIH1cblxuICAgIHZhciBkZWJvdW5jZVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gICAgdmFyIGdldERlZmF1bHRGbiA9IHVzZUdldExhdGVzdChkZWZhdWx0Rm4pO1xuICAgIHZhciBnZXREZWZhdWx0V2FpdCA9IHVzZUdldExhdGVzdChkZWZhdWx0V2FpdCk7XG4gICAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvcihcbiAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgIHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKCkge1xuICAgICAgICB2YXIgX2xlbjIsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgX2tleTIsXG4gICAgICAgICAgICBfYXJnczIgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBmb3IgKF9sZW4yID0gX2FyZ3MyLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBfYXJnczJbX2tleTJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRlYm91bmNlUmVmLmN1cnJlbnQudGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlUmVmLmN1cnJlbnQudGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICAgICAgX2FzeW5jVG9HZW5lcmF0b3IoXG4gICAgICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgICAgIHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IGRlYm91bmNlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RGVmYXVsdEZuKCkuYXBwbHkodm9pZCAwLCBhcmdzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MSA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDAucmVzb2x2ZS5jYWxsKF9jb250ZXh0LnQwLCBfY29udGV4dC50MSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDIgPSBfY29udGV4dFtcImNhdGNoXCJdKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnJlamVjdChfY29udGV4dC50Mik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlYm91bmNlUmVmLmN1cnJlbnQucHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgxMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzEsIDksIDEyLCAxNV1dKTtcbiAgICAgICAgICAgICAgICB9KSksIGdldERlZmF1bHRXYWl0KCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIGRlYm91bmNlUmVmLmN1cnJlbnQucHJvbWlzZSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMik7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCksIFtnZXREZWZhdWx0Rm4sIGdldERlZmF1bHRXYWl0XSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZVJlbmRlcmVyKGluc3RhbmNlLCBjb2x1bW4sIG1ldGEpIHtcbiAgICBpZiAobWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgICBtZXRhID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlLCB1c2VyUHJvcHMpIHtcbiAgICAgIGlmICh1c2VyUHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICB1c2VyUHJvcHMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIENvbXAgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyBjb2x1bW5bdHlwZV0gOiB0eXBlO1xuXG4gICAgICBpZiAodHlwZW9mIENvbXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhjb2x1bW4pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVuZGVyRXJyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsZXhSZW5kZXIoQ29tcCwgX2V4dGVuZHMoe30sIGluc3RhbmNlLCB7XG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9LCBtZXRhLCB7fSwgdXNlclByb3BzKSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBmbGV4UmVuZGVyKENvbXAsIHByb3BzKSB7XG4gICAgcmV0dXJuIGlzUmVhY3RDb21wb25lbnQoQ29tcCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXAsIHByb3BzKSA6IENvbXA7XG4gIH1cblxuICBmdW5jdGlvbiBpc1JlYWN0Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkgfHwgdHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0V4b3RpY0NvbXBvbmVudChjb21wb25lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDbGFzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29tcG9uZW50KTtcbiAgICAgIHJldHVybiBwcm90by5wcm90b3R5cGUgJiYgcHJvdG8ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XG4gICAgfSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFeG90aWNDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjb21wb25lbnQuJCR0eXBlb2YgPT09ICdzeW1ib2wnICYmIFsncmVhY3QubWVtbycsICdyZWFjdC5mb3J3YXJkX3JlZiddLmluY2x1ZGVzKGNvbXBvbmVudC4kJHR5cGVvZi5kZXNjcmlwdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBsaW5rQ29sdW1uU3RydWN0dXJlKGNvbHVtbnMsIHBhcmVudCwgZGVwdGgpIHtcbiAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgZGVwdGggPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4gPSBfZXh0ZW5kcyh7fSwgY29sdW1uLCB7XG4gICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICBkZXB0aDogZGVwdGhcbiAgICAgIH0pO1xuICAgICAgYXNzaWduQ29sdW1uQWNjZXNzb3IoY29sdW1uKTtcblxuICAgICAgaWYgKGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICAgIGNvbHVtbi5jb2x1bW5zID0gbGlua0NvbHVtblN0cnVjdHVyZShjb2x1bW4uY29sdW1ucywgY29sdW1uLCBkZXB0aCArIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29sdW1uO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGZsYXR0ZW5Db2x1bW5zKGNvbHVtbnMpIHtcbiAgICByZXR1cm4gZmxhdHRlbkJ5KGNvbHVtbnMsICdjb2x1bW5zJyk7XG4gIH1cbiAgZnVuY3Rpb24gYXNzaWduQ29sdW1uQWNjZXNzb3IoY29sdW1uKSB7XG4gICAgLy8gRmlyc3QgY2hlY2sgZm9yIHN0cmluZyBhY2Nlc3NvclxuICAgIHZhciBpZCA9IGNvbHVtbi5pZCxcbiAgICAgICAgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgIEhlYWRlciA9IGNvbHVtbi5IZWFkZXI7XG5cbiAgICBpZiAodHlwZW9mIGFjY2Vzc29yID09PSAnc3RyaW5nJykge1xuICAgICAgaWQgPSBpZCB8fCBhY2Nlc3NvcjtcbiAgICAgIHZhciBhY2Nlc3NvclBhdGggPSBhY2Nlc3Nvci5zcGxpdCgnLicpO1xuXG4gICAgICBhY2Nlc3NvciA9IGZ1bmN0aW9uIGFjY2Vzc29yKHJvdykge1xuICAgICAgICByZXR1cm4gZ2V0Qnkocm93LCBhY2Nlc3NvclBhdGgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIWlkICYmIHR5cGVvZiBIZWFkZXIgPT09ICdzdHJpbmcnICYmIEhlYWRlcikge1xuICAgICAgaWQgPSBIZWFkZXI7XG4gICAgfVxuXG4gICAgaWYgKCFpZCAmJiBjb2x1bW4uY29sdW1ucykge1xuICAgICAgY29uc29sZS5lcnJvcihjb2x1bW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGNvbHVtbiBJRCAob3IgdW5pcXVlIFwiSGVhZGVyXCIgdmFsdWUpIGlzIHJlcXVpcmVkIScpO1xuICAgIH1cblxuICAgIGlmICghaWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoY29sdW1uKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBjb2x1bW4gSUQgKG9yIHN0cmluZyBhY2Nlc3NvcikgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb2x1bW4sIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGFjY2Vzc29yOiBhY2Nlc3NvclxuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH1cbiAgZnVuY3Rpb24gZGVjb3JhdGVDb2x1bW4oY29sdW1uLCB1c2VyRGVmYXVsdENvbHVtbikge1xuICAgIGlmICghdXNlckRlZmF1bHRDb2x1bW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oY29sdW1uLCBfZXh0ZW5kcyh7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlcmUgaXMgYSBmYWxsYmFjayBoZWFkZXIsIGp1c3QgaW4gY2FzZVxuICAgICAgSGVhZGVyOiBlbXB0eVJlbmRlcmVyLFxuICAgICAgRm9vdGVyOiBlbXB0eVJlbmRlcmVyXG4gICAgfSwgZGVmYXVsdENvbHVtbiwge30sIHVzZXJEZWZhdWx0Q29sdW1uLCB7fSwgY29sdW1uKSk7XG4gICAgT2JqZWN0LmFzc2lnbihjb2x1bW4sIHtcbiAgICAgIG9yaWdpbmFsV2lkdGg6IGNvbHVtbi53aWR0aFxuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH0gLy8gQnVpbGQgdGhlIGhlYWRlciBncm91cHMgZnJvbSB0aGUgYm90dG9tIHVwXG5cbiAgZnVuY3Rpb24gbWFrZUhlYWRlckdyb3VwcyhhbGxDb2x1bW5zLCBkZWZhdWx0Q29sdW1uLCBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcykge1xuICAgIGlmIChhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcyA9PT0gdm9pZCAwKSB7XG4gICAgICBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBoZWFkZXJHcm91cHMgPSBbXTtcbiAgICB2YXIgc2NhbkNvbHVtbnMgPSBhbGxDb2x1bW5zO1xuICAgIHZhciB1aWQgPSAwO1xuXG4gICAgdmFyIGdldFVJRCA9IGZ1bmN0aW9uIGdldFVJRCgpIHtcbiAgICAgIHJldHVybiB1aWQrKztcbiAgICB9O1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAvLyBUaGUgaGVhZGVyIGdyb3VwIHdlIGFyZSBjcmVhdGluZ1xuICAgICAgdmFyIGhlYWRlckdyb3VwID0ge1xuICAgICAgICBoZWFkZXJzOiBbXVxuICAgICAgfTsgLy8gVGhlIHBhcmVudCBjb2x1bW5zIHdlJ3JlIGdvaW5nIHRvIHNjYW4gbmV4dFxuXG4gICAgICB2YXIgcGFyZW50Q29sdW1ucyA9IFtdO1xuICAgICAgdmFyIGhhc1BhcmVudHMgPSBzY2FuQ29sdW1ucy5zb21lKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnBhcmVudDtcbiAgICAgIH0pOyAvLyBTY2FuIGVhY2ggY29sdW1uIGZvciBwYXJlbnRzXG5cbiAgICAgIHNjYW5Db2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAvLyBXaGF0IGlzIHRoZSBsYXRlc3QgKGxhc3QpIHBhcmVudCBjb2x1bW4/XG4gICAgICAgIHZhciBsYXRlc3RQYXJlbnRDb2x1bW4gPSBbXS5jb25jYXQocGFyZW50Q29sdW1ucykucmV2ZXJzZSgpWzBdO1xuICAgICAgICB2YXIgbmV3UGFyZW50O1xuXG4gICAgICAgIGlmIChoYXNQYXJlbnRzKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBoYXMgYSBwYXJlbnQsIGFkZCBpdCBpZiBuZWNlc3NhcnlcbiAgICAgICAgICBpZiAoY29sdW1uLnBhcmVudCkge1xuICAgICAgICAgICAgbmV3UGFyZW50ID0gX2V4dGVuZHMoe30sIGNvbHVtbi5wYXJlbnQsIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxJZDogY29sdW1uLnBhcmVudC5pZCxcbiAgICAgICAgICAgICAgaWQ6IGNvbHVtbi5wYXJlbnQuaWQgKyBcIl9cIiArIGdldFVJRCgpLFxuICAgICAgICAgICAgICBoZWFkZXJzOiBbY29sdW1uXVxuICAgICAgICAgICAgfSwgYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMoY29sdW1uKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIG90aGVyIGNvbHVtbnMgaGF2ZSBwYXJlbnRzLCB3ZSdsbCBuZWVkIHRvIGFkZCBhIHBsYWNlIGhvbGRlciBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbElkID0gY29sdW1uLmlkICsgXCJfcGxhY2Vob2xkZXJcIjtcbiAgICAgICAgICAgIG5ld1BhcmVudCA9IGRlY29yYXRlQ29sdW1uKF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxJZDogb3JpZ2luYWxJZCxcbiAgICAgICAgICAgICAgaWQ6IGNvbHVtbi5pZCArIFwiX3BsYWNlaG9sZGVyX1wiICsgZ2V0VUlEKCksXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyT2Y6IGNvbHVtbixcbiAgICAgICAgICAgICAgaGVhZGVyczogW2NvbHVtbl1cbiAgICAgICAgICAgIH0sIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzKGNvbHVtbikpLCBkZWZhdWx0Q29sdW1uKTtcbiAgICAgICAgICB9IC8vIElmIHRoZSByZXN1bHRpbmcgcGFyZW50IGNvbHVtbnMgYXJlIHRoZSBzYW1lLCBqdXN0IGFkZFxuICAgICAgICAgIC8vIHRoZSBjb2x1bW4gYW5kIGluY3JlbWVudCB0aGUgaGVhZGVyIHNwYW5cblxuXG4gICAgICAgICAgaWYgKGxhdGVzdFBhcmVudENvbHVtbiAmJiBsYXRlc3RQYXJlbnRDb2x1bW4ub3JpZ2luYWxJZCA9PT0gbmV3UGFyZW50Lm9yaWdpbmFsSWQpIHtcbiAgICAgICAgICAgIGxhdGVzdFBhcmVudENvbHVtbi5oZWFkZXJzLnB1c2goY29sdW1uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Q29sdW1ucy5wdXNoKG5ld1BhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyR3JvdXAuaGVhZGVycy5wdXNoKGNvbHVtbik7XG4gICAgICB9KTtcbiAgICAgIGhlYWRlckdyb3Vwcy5wdXNoKGhlYWRlckdyb3VwKTsgLy8gU3RhcnQgc2Nhbm5pbmcgdGhlIHBhcmVudCBjb2x1bW5zXG5cbiAgICAgIHNjYW5Db2x1bW5zID0gcGFyZW50Q29sdW1ucztcbiAgICB9O1xuXG4gICAgd2hpbGUgKHNjYW5Db2x1bW5zLmxlbmd0aCkge1xuICAgICAgX2xvb3AoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVyR3JvdXBzLnJldmVyc2UoKTtcbiAgfVxuICB2YXIgcGF0aE9iakNhY2hlID0gbmV3IE1hcCgpO1xuICBmdW5jdGlvbiBnZXRCeShvYmosIHBhdGgsIGRlZikge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICB2YXIgY2FjaGVLZXkgPSB0eXBlb2YgcGF0aCA9PT0gJ2Z1bmN0aW9uJyA/IHBhdGggOiBKU09OLnN0cmluZ2lmeShwYXRoKTtcblxuICAgIHZhciBwYXRoT2JqID0gcGF0aE9iakNhY2hlLmdldChjYWNoZUtleSkgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhdGhPYmogPSBtYWtlUGF0aEFycmF5KHBhdGgpO1xuICAgICAgcGF0aE9iakNhY2hlLnNldChjYWNoZUtleSwgcGF0aE9iaik7XG4gICAgICByZXR1cm4gcGF0aE9iajtcbiAgICB9KCk7XG5cbiAgICB2YXIgdmFsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhbCA9IHBhdGhPYmoucmVkdWNlKGZ1bmN0aW9uIChjdXJzb3IsIHBhdGhQYXJ0KSB7XG4gICAgICAgIHJldHVybiBjdXJzb3JbcGF0aFBhcnRdO1xuICAgICAgfSwgb2JqKTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyA/IHZhbCA6IGRlZjtcbiAgfVxuICBmdW5jdGlvbiBnZXRGaXJzdERlZmluZWQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gYXJnc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbihhKSB7XG4gICAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZmxhdHRlbkJ5KGFyciwga2V5KSB7XG4gICAgdmFyIGZsYXQgPSBbXTtcblxuICAgIHZhciByZWN1cnNlID0gZnVuY3Rpb24gcmVjdXJzZShhcnIpIHtcbiAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGlmICghZFtrZXldKSB7XG4gICAgICAgICAgZmxhdC5wdXNoKGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3Vyc2UoZFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlY3Vyc2UoYXJyKTtcbiAgICByZXR1cm4gZmxhdDtcbiAgfVxuICBmdW5jdGlvbiBleHBhbmRSb3dzKHJvd3MsIF9yZWYpIHtcbiAgICB2YXIgbWFudWFsRXhwYW5kZWRLZXkgPSBfcmVmLm1hbnVhbEV4cGFuZGVkS2V5LFxuICAgICAgICBleHBhbmRlZCA9IF9yZWYuZXhwYW5kZWQsXG4gICAgICAgIF9yZWYkZXhwYW5kU3ViUm93cyA9IF9yZWYuZXhwYW5kU3ViUm93cyxcbiAgICAgICAgZXhwYW5kU3ViUm93cyA9IF9yZWYkZXhwYW5kU3ViUm93cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkZXhwYW5kU3ViUm93cztcbiAgICB2YXIgZXhwYW5kZWRSb3dzID0gW107XG5cbiAgICB2YXIgaGFuZGxlUm93ID0gZnVuY3Rpb24gaGFuZGxlUm93KHJvdywgYWRkVG9FeHBhbmRlZFJvd3MpIHtcbiAgICAgIGlmIChhZGRUb0V4cGFuZGVkUm93cyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFkZFRvRXhwYW5kZWRSb3dzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcm93LmlzRXhwYW5kZWQgPSByb3cub3JpZ2luYWwgJiYgcm93Lm9yaWdpbmFsW21hbnVhbEV4cGFuZGVkS2V5XSB8fCBleHBhbmRlZFtyb3cuaWRdO1xuICAgICAgcm93LmNhbkV4cGFuZCA9IHJvdy5zdWJSb3dzICYmICEhcm93LnN1YlJvd3MubGVuZ3RoO1xuXG4gICAgICBpZiAoYWRkVG9FeHBhbmRlZFJvd3MpIHtcbiAgICAgICAgZXhwYW5kZWRSb3dzLnB1c2gocm93KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvdy5zdWJSb3dzICYmIHJvdy5zdWJSb3dzLmxlbmd0aCAmJiByb3cuaXNFeHBhbmRlZCkge1xuICAgICAgICByb3cuc3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlUm93KHJvdywgZXhwYW5kU3ViUm93cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGhhbmRsZVJvdyhyb3cpO1xuICAgIH0pO1xuICAgIHJldHVybiBleHBhbmRlZFJvd3M7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RmlsdGVyTWV0aG9kKGZpbHRlciwgdXNlckZpbHRlclR5cGVzLCBmaWx0ZXJUeXBlcykge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZpbHRlcikgfHwgdXNlckZpbHRlclR5cGVzW2ZpbHRlcl0gfHwgZmlsdGVyVHlwZXNbZmlsdGVyXSB8fCBmaWx0ZXJUeXBlcy50ZXh0O1xuICB9XG4gIGZ1bmN0aW9uIHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoYXV0b1JlbW92ZSwgdmFsdWUsIGNvbHVtbikge1xuICAgIHJldHVybiBhdXRvUmVtb3ZlID8gYXV0b1JlbW92ZSh2YWx1ZSwgY29sdW1uKSA6IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgZnVuY3Rpb24gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC1UYWJsZTogWW91IGhhdmUgbm90IGNhbGxlZCBwcmVwYXJlUm93KHJvdykgb25lIG9yIG1vcmUgcm93cyB5b3UgYXJlIGF0dGVtcHRpbmcgdG8gcmVuZGVyLicpO1xuICB9XG4gIHZhciBwYXNzaXZlU3VwcG9ydGVkID0gbnVsbDtcbiAgZnVuY3Rpb24gcGFzc2l2ZUV2ZW50U3VwcG9ydGVkKCkge1xuICAgIC8vIG1lbW9pemUgc3VwcG9ydCB0byBhdm9pZCBhZGRpbmcgbXVsdGlwbGUgdGVzdCBldmVudHNcbiAgICBpZiAodHlwZW9mIHBhc3NpdmVTdXBwb3J0ZWQgPT09ICdib29sZWFuJykgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRpb25zKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuICAgIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xuICB9IC8vXG5cbiAgdmFyIHJlT3BlbkJyYWNrZXQgPSAvXFxbL2c7XG4gIHZhciByZUNsb3NlQnJhY2tldCA9IC9cXF0vZztcblxuICBmdW5jdGlvbiBtYWtlUGF0aEFycmF5KG9iaikge1xuICAgIHJldHVybiBmbGF0dGVuRGVlcChvYmopIC8vIHJlbW92ZSBhbGwgcGVyaW9kcyBpbiBwYXJ0c1xuICAgIC5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoZCkucmVwbGFjZSgnLicsICdfJyk7XG4gICAgfSkgLy8gam9pbiBwYXJ0cyB1c2luZyBwZXJpb2RcbiAgICAuam9pbignLicpIC8vIHJlcGxhY2UgYnJhY2tldHMgd2l0aCBwZXJpb2RzXG4gICAgLnJlcGxhY2UocmVPcGVuQnJhY2tldCwgJy4nKS5yZXBsYWNlKHJlQ2xvc2VCcmFja2V0LCAnJykgLy8gc3BsaXQgaXQgYmFjayBvdXQgb24gcGVyaW9kc1xuICAgIC5zcGxpdCgnLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxhdHRlbkRlZXAoYXJyLCBuZXdBcnIpIHtcbiAgICBpZiAobmV3QXJyID09PSB2b2lkIDApIHtcbiAgICAgIG5ld0FyciA9IFtdO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBuZXdBcnIucHVzaChhcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmbGF0dGVuRGVlcChhcnJbaV0sIG5ld0Fycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FycjtcbiAgfVxuXG4gIHZhciBkZWZhdWx0R2V0VGFibGVQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUYWJsZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIHJvbGU6ICd0YWJsZSdcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUYWJsZUJvZHlQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUYWJsZUJvZHlQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICByb2xlOiAncm93Z3JvdXAnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0SGVhZGVyUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0SGVhZGVyUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZi5jb2x1bW47XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJoZWFkZXJfXCIgKyBjb2x1bW4uaWQsXG4gICAgICBjb2xTcGFuOiBjb2x1bW4udG90YWxWaXNpYmxlSGVhZGVyQ291bnQsXG4gICAgICByb2xlOiAnY29sdW1uaGVhZGVyJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEZvb3RlclByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEZvb3RlclByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJmb290ZXJfXCIgKyBjb2x1bW4uaWQsXG4gICAgICBjb2xTcGFuOiBjb2x1bW4udG90YWxWaXNpYmxlSGVhZGVyQ291bnRcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRIZWFkZXJHcm91cFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEhlYWRlckdyb3VwUHJvcHMocHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIGluZGV4ID0gX3JlZjMuaW5kZXg7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJoZWFkZXJHcm91cF9cIiArIGluZGV4LFxuICAgICAgcm9sZTogJ3JvdydcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRGb290ZXJHcm91cFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldEZvb3Rlckdyb3VwUHJvcHMocHJvcHMsIF9yZWY0KSB7XG4gICAgdmFyIGluZGV4ID0gX3JlZjQuaW5kZXg7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJmb290ZXJHcm91cF9cIiArIGluZGV4XG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Um93UHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Um93UHJvcHMocHJvcHMsIF9yZWY1KSB7XG4gICAgdmFyIHJvdyA9IF9yZWY1LnJvdztcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcInJvd19cIiArIHJvdy5pZCxcbiAgICAgIHJvbGU6ICdyb3cnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Q2VsbFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldENlbGxQcm9wcyhwcm9wcywgX3JlZjYpIHtcbiAgICB2YXIgY2VsbCA9IF9yZWY2LmNlbGw7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleTogXCJjZWxsX1wiICsgY2VsbC5yb3cuaWQgKyBcIl9cIiArIGNlbGwuY29sdW1uLmlkLFxuICAgICAgcm9sZTogJ2NlbGwnXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VEZWZhdWx0UGx1Z2luSG9va3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZU9wdGlvbnM6IFtdLFxuICAgICAgc3RhdGVSZWR1Y2VyczogW10sXG4gICAgICB1c2VDb250cm9sbGVkU3RhdGU6IFtdLFxuICAgICAgY29sdW1uczogW10sXG4gICAgICBjb2x1bW5zRGVwczogW10sXG4gICAgICBhbGxDb2x1bW5zOiBbXSxcbiAgICAgIGFsbENvbHVtbnNEZXBzOiBbXSxcbiAgICAgIGFjY2Vzc1ZhbHVlOiBbXSxcbiAgICAgIG1hdGVyaWFsaXplZENvbHVtbnM6IFtdLFxuICAgICAgbWF0ZXJpYWxpemVkQ29sdW1uc0RlcHM6IFtdLFxuICAgICAgdXNlSW5zdGFuY2VBZnRlckRhdGE6IFtdLFxuICAgICAgdmlzaWJsZUNvbHVtbnM6IFtdLFxuICAgICAgdmlzaWJsZUNvbHVtbnNEZXBzOiBbXSxcbiAgICAgIGhlYWRlckdyb3VwczogW10sXG4gICAgICBoZWFkZXJHcm91cHNEZXBzOiBbXSxcbiAgICAgIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9uczogW10sXG4gICAgICB1c2VJbnN0YW5jZTogW10sXG4gICAgICBwcmVwYXJlUm93OiBbXSxcbiAgICAgIGdldFRhYmxlUHJvcHM6IFtkZWZhdWx0R2V0VGFibGVQcm9wc10sXG4gICAgICBnZXRUYWJsZUJvZHlQcm9wczogW2RlZmF1bHRHZXRUYWJsZUJvZHlQcm9wc10sXG4gICAgICBnZXRIZWFkZXJHcm91cFByb3BzOiBbZGVmYXVsdEdldEhlYWRlckdyb3VwUHJvcHNdLFxuICAgICAgZ2V0Rm9vdGVyR3JvdXBQcm9wczogW2RlZmF1bHRHZXRGb290ZXJHcm91cFByb3BzXSxcbiAgICAgIGdldEhlYWRlclByb3BzOiBbZGVmYXVsdEdldEhlYWRlclByb3BzXSxcbiAgICAgIGdldEZvb3RlclByb3BzOiBbZGVmYXVsdEdldEZvb3RlclByb3BzXSxcbiAgICAgIGdldFJvd1Byb3BzOiBbZGVmYXVsdEdldFJvd1Byb3BzXSxcbiAgICAgIGdldENlbGxQcm9wczogW2RlZmF1bHRHZXRDZWxsUHJvcHNdLFxuICAgICAgdXNlRmluYWxJbnN0YW5jZTogW11cbiAgICB9O1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldEhpZGRlbkNvbHVtbnMgPSAncmVzZXRIaWRkZW5Db2x1bW5zJztcbiAgYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uID0gJ3RvZ2dsZUhpZGVDb2x1bW4nO1xuICBhY3Rpb25zLnNldEhpZGRlbkNvbHVtbnMgPSAnc2V0SGlkZGVuQ29sdW1ucyc7XG4gIGFjdGlvbnMudG9nZ2xlSGlkZUFsbENvbHVtbnMgPSAndG9nZ2xlSGlkZUFsbENvbHVtbnMnO1xuICB2YXIgdXNlQ29sdW1uVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHVzZUNvbHVtblZpc2liaWxpdHkoaG9va3MpIHtcbiAgICBob29rcy5nZXRUb2dnbGVIaWRkZW5Qcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlSGlkZGVuUHJvcHNdO1xuICAgIGhvb2tzLmdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyKTtcbiAgICBob29rcy51c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMucHVzaCh1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMpO1xuICAgIGhvb2tzLmhlYWRlckdyb3Vwc0RlcHMucHVzaChmdW5jdGlvbiAoZGVwcywgX3JlZikge1xuICAgICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW2luc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnNdKTtcbiAgICB9KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlKTtcbiAgfTtcbiAgdXNlQ29sdW1uVmlzaWJpbGl0eS5wbHVnaW5OYW1lID0gJ3VzZUNvbHVtblZpc2liaWxpdHknO1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlSGlkZGVuUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlSGlkZGVuUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYyLmNvbHVtbjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBjb2x1bW4udG9nZ2xlSGlkZGVuKCFlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6IGNvbHVtbi5pc1Zpc2libGUsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBDb2x1bW4gVmlzaWJsZSdcbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMy5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVIaWRlQWxsQ29sdW1ucyghZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiAhaW5zdGFuY2UuYWxsQ29sdW1uc0hpZGRlbiAmJiAhaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucy5sZW5ndGgsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgQ29sdW1ucyBIaWRkZW4nLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogIWluc3RhbmNlLmFsbENvbHVtbnNIaWRkZW4gJiYgaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucy5sZW5ndGhcbiAgICB9XTtcbiAgfTtcblxuICBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0SGlkZGVuQ29sdW1ucykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBoaWRkZW5Db2x1bW5zOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuaGlkZGVuQ29sdW1ucyB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4pIHtcbiAgICAgIHZhciBzaG91bGQgPSB0eXBlb2YgYWN0aW9uLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IGFjdGlvbi52YWx1ZSA6ICFzdGF0ZS5oaWRkZW5Db2x1bW5zLmluY2x1ZGVzKGFjdGlvbi5jb2x1bW5JZCk7XG4gICAgICB2YXIgaGlkZGVuQ29sdW1ucyA9IHNob3VsZCA/IFtdLmNvbmNhdChzdGF0ZS5oaWRkZW5Db2x1bW5zLCBbYWN0aW9uLmNvbHVtbklkXSkgOiBzdGF0ZS5oaWRkZW5Db2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZCAhPT0gYWN0aW9uLmNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IGhpZGRlbkNvbHVtbnNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRIaWRkZW5Db2x1bW5zKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IGZ1bmN0aW9uYWxVcGRhdGUoYWN0aW9uLnZhbHVlLCBzdGF0ZS5oaWRkZW5Db2x1bW5zKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUhpZGVBbGxDb2x1bW5zKSB7XG4gICAgICB2YXIgc2hvdWxkQWxsID0gdHlwZW9mIGFjdGlvbi52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBhY3Rpb24udmFsdWUgOiAhc3RhdGUuaGlkZGVuQ29sdW1ucy5sZW5ndGg7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IHNob3VsZEFsbCA/IGluc3RhbmNlLmFsbENvbHVtbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgIH0pIDogW11cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyhpbnN0YW5jZSkge1xuICAgIHZhciBoZWFkZXJzID0gaW5zdGFuY2UuaGVhZGVycyxcbiAgICAgICAgaGlkZGVuQ29sdW1ucyA9IGluc3RhbmNlLnN0YXRlLmhpZGRlbkNvbHVtbnM7XG4gICAgdmFyIGlzTW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgICBpZiAoIWlzTW91bnRlZFJlZi5jdXJyZW50KSA7XG5cbiAgICB2YXIgaGFuZGxlQ29sdW1uID0gZnVuY3Rpb24gaGFuZGxlQ29sdW1uKGNvbHVtbiwgcGFyZW50VmlzaWJsZSkge1xuICAgICAgY29sdW1uLmlzVmlzaWJsZSA9IHBhcmVudFZpc2libGUgJiYgIWhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmlkKTtcbiAgICAgIHZhciB0b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IDA7XG5cbiAgICAgIGlmIChjb2x1bW4uaGVhZGVycyAmJiBjb2x1bW4uaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgY29sdW1uLmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViQ29sdW1uKSB7XG4gICAgICAgICAgcmV0dXJuIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ICs9IGhhbmRsZUNvbHVtbihzdWJDb2x1bW4sIGNvbHVtbi5pc1Zpc2libGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gY29sdW1uLmlzVmlzaWJsZSA/IDEgOiAwO1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4udG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSB0b3RhbFZpc2libGVIZWFkZXJDb3VudDtcbiAgICAgIHJldHVybiB0b3RhbFZpc2libGVIZWFkZXJDb3VudDtcbiAgICB9O1xuXG4gICAgdmFyIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gMDtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YkhlYWRlcikge1xuICAgICAgcmV0dXJuIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ICs9IGhhbmRsZUNvbHVtbihzdWJIZWFkZXIsIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICB2YXIgY29sdW1ucyA9IGluc3RhbmNlLmNvbHVtbnMsXG4gICAgICAgIGZsYXRIZWFkZXJzID0gaW5zdGFuY2UuZmxhdEhlYWRlcnMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBoaWRkZW5Db2x1bW5zID0gaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEhpID0gaW5zdGFuY2UuYXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyxcbiAgICAgICAgYXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyA9IF9pbnN0YW5jZSRhdXRvUmVzZXRIaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRIaTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIHZhciBhbGxDb2x1bW5zSGlkZGVuID0gYWxsQ29sdW1ucy5sZW5ndGggPT09IGhpZGRlbkNvbHVtbnMubGVuZ3RoO1xuICAgIHZhciB0b2dnbGVIaWRlQ29sdW1uID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVIaWRlQ29sdW1uLFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldEhpZGRlbkNvbHVtbnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0SGlkZGVuQ29sdW1ucyxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlSGlkZUFsbENvbHVtbnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlSGlkZUFsbENvbHVtbnMsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBjb2x1bW4udG9nZ2xlSGlkZGVuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4sXG4gICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbi5pZCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb2x1bW4uZ2V0VG9nZ2xlSGlkZGVuUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUhpZGRlblByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGdldEF1dG9SZXNldEhpZGRlbkNvbHVtbnMgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0SGlkZGVuQ29sdW1ucygpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0SGlkZGVuQ29sdW1uc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIGNvbHVtbnNdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBhbGxDb2x1bW5zSGlkZGVuOiBhbGxDb2x1bW5zSGlkZGVuLFxuICAgICAgdG9nZ2xlSGlkZUNvbHVtbjogdG9nZ2xlSGlkZUNvbHVtbixcbiAgICAgIHNldEhpZGRlbkNvbHVtbnM6IHNldEhpZGRlbkNvbHVtbnMsXG4gICAgICB0b2dnbGVIaWRlQWxsQ29sdW1uczogdG9nZ2xlSGlkZUFsbENvbHVtbnMsXG4gICAgICBnZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzOiBnZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzXG4gICAgfSk7XG4gIH1cblxuICB2YXIgZGVmYXVsdEluaXRpYWxTdGF0ZSA9IHt9O1xuICB2YXIgZGVmYXVsdENvbHVtbkluc3RhbmNlID0ge307XG5cbiAgdmFyIGRlZmF1bHRSZWR1Y2VyID0gZnVuY3Rpb24gZGVmYXVsdFJlZHVjZXIoc3RhdGUsIGFjdGlvbiwgcHJldlN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0U3ViUm93cyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRTdWJSb3dzKHJvdywgaW5kZXgpIHtcbiAgICByZXR1cm4gcm93LnN1YlJvd3MgfHwgW107XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRSb3dJZCA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRSb3dJZChyb3csIGluZGV4LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gXCJcIiArIChwYXJlbnQgPyBbcGFyZW50LmlkLCBpbmRleF0uam9pbignLicpIDogaW5kZXgpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0VXNlQ29udHJvbGxlZFN0YXRlID0gZnVuY3Rpb24gZGVmYXVsdFVzZUNvbnRyb2xsZWRTdGF0ZShkKSB7XG4gICAgcmV0dXJuIGQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXBwbHlEZWZhdWx0cyhwcm9wcykge1xuICAgIHZhciBfcHJvcHMkaW5pdGlhbFN0YXRlID0gcHJvcHMuaW5pdGlhbFN0YXRlLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBfcHJvcHMkaW5pdGlhbFN0YXRlID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbFN0YXRlIDogX3Byb3BzJGluaXRpYWxTdGF0ZSxcbiAgICAgICAgX3Byb3BzJGRlZmF1bHRDb2x1bW4gPSBwcm9wcy5kZWZhdWx0Q29sdW1uLFxuICAgICAgICBkZWZhdWx0Q29sdW1uID0gX3Byb3BzJGRlZmF1bHRDb2x1bW4gPT09IHZvaWQgMCA/IGRlZmF1bHRDb2x1bW5JbnN0YW5jZSA6IF9wcm9wcyRkZWZhdWx0Q29sdW1uLFxuICAgICAgICBfcHJvcHMkZ2V0U3ViUm93cyA9IHByb3BzLmdldFN1YlJvd3MsXG4gICAgICAgIGdldFN1YlJvd3MgPSBfcHJvcHMkZ2V0U3ViUm93cyA9PT0gdm9pZCAwID8gZGVmYXVsdEdldFN1YlJvd3MgOiBfcHJvcHMkZ2V0U3ViUm93cyxcbiAgICAgICAgX3Byb3BzJGdldFJvd0lkID0gcHJvcHMuZ2V0Um93SWQsXG4gICAgICAgIGdldFJvd0lkID0gX3Byb3BzJGdldFJvd0lkID09PSB2b2lkIDAgPyBkZWZhdWx0R2V0Um93SWQgOiBfcHJvcHMkZ2V0Um93SWQsXG4gICAgICAgIF9wcm9wcyRzdGF0ZVJlZHVjZXIgPSBwcm9wcy5zdGF0ZVJlZHVjZXIsXG4gICAgICAgIHN0YXRlUmVkdWNlciA9IF9wcm9wcyRzdGF0ZVJlZHVjZXIgPT09IHZvaWQgMCA/IGRlZmF1bHRSZWR1Y2VyIDogX3Byb3BzJHN0YXRlUmVkdWNlcixcbiAgICAgICAgX3Byb3BzJHVzZUNvbnRyb2xsZWRTID0gcHJvcHMudXNlQ29udHJvbGxlZFN0YXRlLFxuICAgICAgICB1c2VDb250cm9sbGVkU3RhdGUgPSBfcHJvcHMkdXNlQ29udHJvbGxlZFMgPT09IHZvaWQgMCA/IGRlZmF1bHRVc2VDb250cm9sbGVkU3RhdGUgOiBfcHJvcHMkdXNlQ29udHJvbGxlZFMsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaW5pdGlhbFN0YXRlXCIsIFwiZGVmYXVsdENvbHVtblwiLCBcImdldFN1YlJvd3NcIiwgXCJnZXRSb3dJZFwiLCBcInN0YXRlUmVkdWNlclwiLCBcInVzZUNvbnRyb2xsZWRTdGF0ZVwiXSk7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgICAgZGVmYXVsdENvbHVtbjogZGVmYXVsdENvbHVtbixcbiAgICAgIGdldFN1YlJvd3M6IGdldFN1YlJvd3MsXG4gICAgICBnZXRSb3dJZDogZ2V0Um93SWQsXG4gICAgICBzdGF0ZVJlZHVjZXI6IHN0YXRlUmVkdWNlcixcbiAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZTogdXNlQ29udHJvbGxlZFN0YXRlXG4gICAgfSk7XG4gIH1cblxuICB2YXIgdXNlVGFibGUgPSBmdW5jdGlvbiB1c2VUYWJsZShwcm9wcykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHBsdWdpbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGRlZmF1bHQgcHJvcHNcbiAgICBwcm9wcyA9IGFwcGx5RGVmYXVsdHMocHJvcHMpOyAvLyBBZGQgY29yZSBwbHVnaW5zXG5cbiAgICBwbHVnaW5zID0gW3VzZUNvbHVtblZpc2liaWxpdHldLmNvbmNhdChwbHVnaW5zKTsgLy8gQ3JlYXRlIHRoZSB0YWJsZSBpbnN0YW5jZVxuXG4gICAgdmFyIGluc3RhbmNlUmVmID0gUmVhY3QudXNlUmVmKHt9KTsgLy8gQ3JlYXRlIGEgZ2V0dGVyIGZvciB0aGUgaW5zdGFuY2UgKGhlbHBzIGF2b2lkIGEgbG90IG9mIHBvdGVudGlhbCBtZW1vcnkgbGVha3MpXG5cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2VSZWYuY3VycmVudCk7IC8vIEFzc2lnbiB0aGUgcHJvcHMsIHBsdWdpbnMgYW5kIGhvb2tzIHRvIHRoZSBpbnN0YW5jZVxuXG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICBob29rczogbWFrZURlZmF1bHRQbHVnaW5Ib29rcygpXG4gICAgfSkpOyAvLyBBbGxvdyBwbHVnaW5zIHRvIHJlZ2lzdGVyIGhvb2tzIGFzIGVhcmx5IGFzIHBvc3NpYmxlXG5cbiAgICBwbHVnaW5zLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIHBsdWdpbihnZXRJbnN0YW5jZSgpLmhvb2tzKTtcbiAgICB9KTsgLy8gQ29uc3VtZSBhbGwgaG9va3MgYW5kIG1ha2UgYSBnZXR0ZXIgZm9yIHRoZW1cblxuICAgIHZhciBnZXRIb29rcyA9IHVzZUdldExhdGVzdChnZXRJbnN0YW5jZSgpLmhvb2tzKTtcbiAgICBnZXRJbnN0YW5jZSgpLmdldEhvb2tzID0gZ2V0SG9va3M7XG4gICAgZGVsZXRlIGdldEluc3RhbmNlKCkuaG9va3M7IC8vIEFsbG93IHVzZU9wdGlvbnMgaG9va3MgdG8gbW9kaWZ5IHRoZSBvcHRpb25zIGNvbWluZyBpbnRvIHRoZSB0YWJsZVxuXG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCByZWR1Y2VIb29rcyhnZXRIb29rcygpLnVzZU9wdGlvbnMsIGFwcGx5RGVmYXVsdHMocHJvcHMpKSk7XG5cbiAgICB2YXIgX2dldEluc3RhbmNlID0gZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgZGF0YSA9IF9nZXRJbnN0YW5jZS5kYXRhLFxuICAgICAgICB1c2VyQ29sdW1ucyA9IF9nZXRJbnN0YW5jZS5jb2x1bW5zLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBfZ2V0SW5zdGFuY2UuaW5pdGlhbFN0YXRlLFxuICAgICAgICBkZWZhdWx0Q29sdW1uID0gX2dldEluc3RhbmNlLmRlZmF1bHRDb2x1bW4sXG4gICAgICAgIGdldFN1YlJvd3MgPSBfZ2V0SW5zdGFuY2UuZ2V0U3ViUm93cyxcbiAgICAgICAgZ2V0Um93SWQgPSBfZ2V0SW5zdGFuY2UuZ2V0Um93SWQsXG4gICAgICAgIHN0YXRlUmVkdWNlciA9IF9nZXRJbnN0YW5jZS5zdGF0ZVJlZHVjZXIsXG4gICAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZSA9IF9nZXRJbnN0YW5jZS51c2VDb250cm9sbGVkU3RhdGU7IC8vIFNldHVwIHVzZXIgcmVkdWNlciByZWZcblxuXG4gICAgdmFyIGdldFN0YXRlUmVkdWNlciA9IHVzZUdldExhdGVzdChzdGF0ZVJlZHVjZXIpOyAvLyBCdWlsZCB0aGUgcmVkdWNlclxuXG4gICAgdmFyIHJlZHVjZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgLy8gRGV0ZWN0IGludmFsaWQgYWN0aW9uc1xuICAgICAgaWYgKCFhY3Rpb24udHlwZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gQWN0aW9uIPCfkYYnKTtcbiAgICAgIH0gLy8gUmVkdWNlIHRoZSBzdGF0ZSBmcm9tIGFsbCBwbHVnaW4gcmVkdWNlcnNcblxuXG4gICAgICByZXR1cm4gW10uY29uY2F0KGdldEhvb2tzKCkuc3RhdGVSZWR1Y2VycywgQXJyYXkuaXNBcnJheShnZXRTdGF0ZVJlZHVjZXIoKSkgPyBnZXRTdGF0ZVJlZHVjZXIoKSA6IFtnZXRTdGF0ZVJlZHVjZXIoKV0pLnJlZHVjZShmdW5jdGlvbiAocywgaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcihzLCBhY3Rpb24sIHN0YXRlLCBnZXRJbnN0YW5jZSgpKSB8fCBzO1xuICAgICAgfSwgc3RhdGUpO1xuICAgIH0sIFtnZXRIb29rcywgZ2V0U3RhdGVSZWR1Y2VyLCBnZXRJbnN0YW5jZV0pOyAvLyBTdGFydCB0aGUgcmVkdWNlclxuXG4gICAgdmFyIF9SZWFjdCR1c2VSZWR1Y2VyID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmluaXRcbiAgICAgIH0pO1xuICAgIH0pLFxuICAgICAgICByZWR1Y2VyU3RhdGUgPSBfUmVhY3QkdXNlUmVkdWNlclswXSxcbiAgICAgICAgZGlzcGF0Y2ggPSBfUmVhY3QkdXNlUmVkdWNlclsxXTsgLy8gQWxsb3cgdGhlIHVzZXIgdG8gY29udHJvbCB0aGUgZmluYWwgc3RhdGUgd2l0aCBob29rc1xuXG5cbiAgICB2YXIgc3RhdGUgPSByZWR1Y2VIb29rcyhbXS5jb25jYXQoZ2V0SG9va3MoKS51c2VDb250cm9sbGVkU3RhdGUsIFt1c2VDb250cm9sbGVkU3RhdGVdKSwgcmVkdWNlclN0YXRlLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oZ2V0SW5zdGFuY2UoKSwge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgfSk7IC8vIERlY29yYXRlIEFsbCB0aGUgY29sdW1uc1xuXG4gICAgdmFyIGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBsaW5rQ29sdW1uU3RydWN0dXJlKHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuY29sdW1ucywgdXNlckNvbHVtbnMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0pKTtcbiAgICB9LCBbZ2V0SG9va3MsIGdldEluc3RhbmNlLCB1c2VyQ29sdW1uc10uY29uY2F0KHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuY29sdW1uc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5jb2x1bW5zID0gY29sdW1uczsgLy8gR2V0IHRoZSBmbGF0IGxpc3Qgb2YgYWxsIGNvbHVtbnMgYW5kIGFsbG93IGhvb2tzIHRvIGRlY29yYXRlXG4gICAgLy8gdGhvc2UgY29sdW1ucyAoYW5kIHRyaWdnZXIgdGhpcyBtZW1vaXphdGlvbiB2aWEgZGVwcylcblxuICAgIHZhciBhbGxDb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlSG9va3MoZ2V0SG9va3MoKS5hbGxDb2x1bW5zLCBmbGF0dGVuQ29sdW1ucyhjb2x1bW5zKSwge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSkubWFwKGFzc2lnbkNvbHVtbkFjY2Vzc29yKTtcbiAgICB9LCBbY29sdW1ucywgZ2V0SG9va3MsIGdldEluc3RhbmNlXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5hbGxDb2x1bW5zRGVwcywgW10sIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSkpKTtcbiAgICBnZXRJbnN0YW5jZSgpLmFsbENvbHVtbnMgPSBhbGxDb2x1bW5zOyAvLyBBY2Nlc3MgdGhlIHJvdyBtb2RlbCB1c2luZyBpbml0aWFsIGNvbHVtbnNcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJvd3MgPSBbXTtcbiAgICAgIHZhciBmbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIHJvd3NCeUlkID0ge307XG4gICAgICB2YXIgYWxsQ29sdW1uc1F1ZXVlID0gW10uY29uY2F0KGFsbENvbHVtbnMpO1xuXG4gICAgICB3aGlsZSAoYWxsQ29sdW1uc1F1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1uc1F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGFjY2Vzc1Jvd3NGb3JDb2x1bW4oe1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcm93czogcm93cyxcbiAgICAgICAgICBmbGF0Um93czogZmxhdFJvd3MsXG4gICAgICAgICAgcm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIGdldFJvd0lkOiBnZXRSb3dJZCxcbiAgICAgICAgICBnZXRTdWJSb3dzOiBnZXRTdWJSb3dzLFxuICAgICAgICAgIGFjY2Vzc1ZhbHVlSG9va3M6IGdldEhvb2tzKCkuYWNjZXNzVmFsdWUsXG4gICAgICAgICAgZ2V0SW5zdGFuY2U6IGdldEluc3RhbmNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzLCByb3dzQnlJZF07XG4gICAgfSwgW2FsbENvbHVtbnMsIGRhdGEsIGdldFJvd0lkLCBnZXRTdWJSb3dzLCBnZXRIb29rcywgZ2V0SW5zdGFuY2VdKSxcbiAgICAgICAgcm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBmbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdLFxuICAgICAgICByb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCB7XG4gICAgICByb3dzOiByb3dzLFxuICAgICAgaW5pdGlhbFJvd3M6IFtdLmNvbmNhdChyb3dzKSxcbiAgICAgIGZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHJvd3NCeUlkOiByb3dzQnlJZCAvLyBtYXRlcmlhbGl6ZWRDb2x1bW5zLFxuXG4gICAgfSk7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlSW5zdGFuY2VBZnRlckRhdGEsIGdldEluc3RhbmNlKCkpOyAvLyBHZXQgdGhlIGZsYXQgbGlzdCBvZiBhbGwgY29sdW1ucyBBRlRFUiB0aGUgcm93c1xuICAgIC8vIGhhdmUgYmVlbiBhY2Nlc3MsIGFuZCBhbGxvdyBob29rcyB0byBkZWNvcmF0ZVxuICAgIC8vIHRob3NlIGNvbHVtbnMgKGFuZCB0cmlnZ2VyIHRoaXMgbWVtb2l6YXRpb24gdmlhIGRlcHMpXG5cbiAgICB2YXIgdmlzaWJsZUNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VIb29rcyhnZXRIb29rcygpLnZpc2libGVDb2x1bW5zLCBhbGxDb2x1bW5zLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRlY29yYXRlQ29sdW1uKGQsIGRlZmF1bHRDb2x1bW4pO1xuICAgICAgfSk7XG4gICAgfSwgW2dldEhvb2tzLCBhbGxDb2x1bW5zLCBnZXRJbnN0YW5jZSwgZGVmYXVsdENvbHVtbl0uY29uY2F0KHJlZHVjZUhvb2tzKGdldEhvb2tzKCkudmlzaWJsZUNvbHVtbnNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpOyAvLyBDb21iaW5lIG5ldyB2aXNpYmxlIGNvbHVtbnMgd2l0aCBhbGwgY29sdW1uc1xuXG4gICAgYWxsQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbHVtbnMgPSBbXS5jb25jYXQodmlzaWJsZUNvbHVtbnMpO1xuICAgICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgaWYgKCFjb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH0sIFthbGxDb2x1bW5zLCB2aXNpYmxlQ29sdW1uc10pO1xuICAgIGdldEluc3RhbmNlKCkuYWxsQ29sdW1ucyA9IGFsbENvbHVtbnM7XG5cbiAgICB7XG4gICAgICB2YXIgZHVwbGljYXRlQ29sdW1ucyA9IGFsbENvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcbiAgICAgICAgcmV0dXJuIGFsbENvbHVtbnMuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbi5pZDtcbiAgICAgICAgfSkgIT09IGk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGR1cGxpY2F0ZUNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhhbGxDb2x1bW5zKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlIGNvbHVtbnMgd2VyZSBmb3VuZCB3aXRoIGlkczogXFxcIlwiICsgZHVwbGljYXRlQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZDtcbiAgICAgICAgfSkuam9pbignLCAnKSArIFwiXFxcIiBpbiB0aGUgY29sdW1ucyBhcnJheSBhYm92ZVwiKTtcbiAgICAgIH1cbiAgICB9IC8vIE1ha2UgdGhlIGhlYWRlckdyb3Vwc1xuXG5cbiAgICB2YXIgaGVhZGVyR3JvdXBzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVkdWNlSG9va3MoZ2V0SG9va3MoKS5oZWFkZXJHcm91cHMsIG1ha2VIZWFkZXJHcm91cHModmlzaWJsZUNvbHVtbnMsIGRlZmF1bHRDb2x1bW4pLCBnZXRJbnN0YW5jZSgpKTtcbiAgICB9LCBbZ2V0SG9va3MsIHZpc2libGVDb2x1bW5zLCBkZWZhdWx0Q29sdW1uLCBnZXRJbnN0YW5jZV0uY29uY2F0KHJlZHVjZUhvb2tzKGdldEhvb2tzKCkuaGVhZGVyR3JvdXBzRGVwcywgW10sIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSkpKTtcbiAgICBnZXRJbnN0YW5jZSgpLmhlYWRlckdyb3VwcyA9IGhlYWRlckdyb3VwczsgLy8gR2V0IHRoZSBmaXJzdCBsZXZlbCBvZiBoZWFkZXJzXG5cbiAgICB2YXIgaGVhZGVycyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhlYWRlckdyb3Vwcy5sZW5ndGggPyBoZWFkZXJHcm91cHNbMF0uaGVhZGVycyA6IFtdO1xuICAgIH0sIFtoZWFkZXJHcm91cHNdKTtcbiAgICBnZXRJbnN0YW5jZSgpLmhlYWRlcnMgPSBoZWFkZXJzOyAvLyBQcm92aWRlIGEgZmxhdCBoZWFkZXIgbGlzdCBmb3IgdXRpbGl0aWVzXG5cbiAgICBnZXRJbnN0YW5jZSgpLmZsYXRIZWFkZXJzID0gaGVhZGVyR3JvdXBzLnJlZHVjZShmdW5jdGlvbiAoYWxsLCBoZWFkZXJHcm91cCkge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChhbGwsIGhlYWRlckdyb3VwLmhlYWRlcnMpO1xuICAgIH0sIFtdKTtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMsIGdldEluc3RhbmNlKCkpOyAvLyBGaWx0ZXIgY29sdW1ucyBkb3duIHRvIHZpc2libGUgb25lc1xuXG4gICAgdmFyIHZpc2libGVDb2x1bW5zRGVwID0gdmlzaWJsZUNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5pc1Zpc2libGU7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5pZDtcbiAgICB9KS5zb3J0KCkuam9pbignXycpO1xuICAgIHZpc2libGVDb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmlzaWJsZUNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlzVmlzaWJsZTtcbiAgICAgIH0pO1xuICAgIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbdmlzaWJsZUNvbHVtbnMsIHZpc2libGVDb2x1bW5zRGVwXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS52aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zOyAvLyBIZWFkZXIgVmlzaWJpbGl0eSBpcyBuZWVkZWQgYnkgdGhpcyBwb2ludFxuXG4gICAgdmFyIF9jYWxjdWxhdGVIZWFkZXJXaWR0aCA9IGNhbGN1bGF0ZUhlYWRlcldpZHRocyhoZWFkZXJzKSxcbiAgICAgICAgdG90YWxDb2x1bW5zTWluV2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGhbMF0sXG4gICAgICAgIHRvdGFsQ29sdW1uc1dpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoWzFdLFxuICAgICAgICB0b3RhbENvbHVtbnNNYXhXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aFsyXTtcblxuICAgIGdldEluc3RhbmNlKCkudG90YWxDb2x1bW5zTWluV2lkdGggPSB0b3RhbENvbHVtbnNNaW5XaWR0aDtcbiAgICBnZXRJbnN0YW5jZSgpLnRvdGFsQ29sdW1uc1dpZHRoID0gdG90YWxDb2x1bW5zV2lkdGg7XG4gICAgZ2V0SW5zdGFuY2UoKS50b3RhbENvbHVtbnNNYXhXaWR0aCA9IHRvdGFsQ29sdW1uc01heFdpZHRoO1xuICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnVzZUluc3RhbmNlLCBnZXRJbnN0YW5jZSgpKSAvLyBFYWNoIG1hdGVyaWFsaXplZCBoZWFkZXIgbmVlZHMgdG8gYmUgYXNzaWduZWQgYSByZW5kZXIgZnVuY3Rpb24gYW5kIG90aGVyXG4gICAgLy8gcHJvcCBnZXR0ZXIgcHJvcGVydGllcyBoZXJlLlxuICAgIDtcbiAgICBbXS5jb25jYXQoZ2V0SW5zdGFuY2UoKS5mbGF0SGVhZGVycywgZ2V0SW5zdGFuY2UoKS5hbGxDb2x1bW5zKS5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIC8vIEdpdmUgY29sdW1ucy9oZWFkZXJzIHJlbmRlcmluZyBwb3dlclxuICAgICAgY29sdW1uLnJlbmRlciA9IG1ha2VSZW5kZXJlcihnZXRJbnN0YW5jZSgpLCBjb2x1bW4pOyAvLyBHaXZlIGNvbHVtbnMvaGVhZGVycyBhIGRlZmF1bHQgZ2V0SGVhZGVyUHJvcHNcblxuICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRIZWFkZXJQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0pOyAvLyBHaXZlIGNvbHVtbnMvaGVhZGVycyBhIGRlZmF1bHQgZ2V0Rm9vdGVyUHJvcHNcblxuICAgICAgY29sdW1uLmdldEZvb3RlclByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRGb290ZXJQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdldEluc3RhbmNlKCkuaGVhZGVyR3JvdXBzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaGVhZGVyR3JvdXBzLmZpbHRlcihmdW5jdGlvbiAoaGVhZGVyR3JvdXAsIGkpIHtcbiAgICAgICAgLy8gRmlsdGVyIG91dCBhbnkgaGVhZGVycyBhbmQgaGVhZGVyR3JvdXBzIHRoYXQgZG9uJ3QgaGF2ZSB2aXNpYmxlIGNvbHVtbnNcbiAgICAgICAgaGVhZGVyR3JvdXAuaGVhZGVycyA9IGhlYWRlckdyb3VwLmhlYWRlcnMuZmlsdGVyKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICB2YXIgcmVjdXJzZSA9IGZ1bmN0aW9uIHJlY3Vyc2UoaGVhZGVycykge1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnMuZmlsdGVyKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2UoY29sdW1uLmhlYWRlcnMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5pc1Zpc2libGU7XG4gICAgICAgICAgICB9KS5sZW5ndGg7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChjb2x1bW4uaGVhZGVycykge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2UoY29sdW1uLmhlYWRlcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb2x1bW4uaXNWaXNpYmxlO1xuICAgICAgICB9KTsgLy8gR2l2ZSBoZWFkZXJHcm91cHMgZ2V0Um93UHJvcHNcblxuICAgICAgICBpZiAoaGVhZGVyR3JvdXAuaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBoZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRIZWFkZXJHcm91cFByb3BzLCB7XG4gICAgICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICAgIGhlYWRlckdyb3VwOiBoZWFkZXJHcm91cCxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGVhZGVyR3JvdXAuZ2V0Rm9vdGVyR3JvdXBQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Rm9vdGVyR3JvdXBQcm9wcywge1xuICAgICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgICBoZWFkZXJHcm91cDogaGVhZGVyR3JvdXAsXG4gICAgICAgICAgICBpbmRleDogaVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSwgW2hlYWRlckdyb3VwcywgZ2V0SW5zdGFuY2UsIGdldEhvb2tzXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5mb290ZXJHcm91cHMgPSBbXS5jb25jYXQoZ2V0SW5zdGFuY2UoKS5oZWFkZXJHcm91cHMpLnJldmVyc2UoKTsgLy8gVGhlIHByZXBhcmVSb3cgZnVuY3Rpb24gaXMgYWJzb2x1dGVseSBuZWNlc3NhcnkgYW5kIE1VU1QgYmUgY2FsbGVkIG9uXG4gICAgLy8gYW55IHJvd3MgdGhlIHVzZXIgd2lzaGVzIHRvIGJlIGRpc3BsYXllZC5cblxuICAgIGdldEluc3RhbmNlKCkucHJlcGFyZVJvdyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJvdy5nZXRSb3dQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0Um93UHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIHJvdzogcm93XG4gICAgICB9KTsgLy8gQnVpbGQgdGhlIHZpc2libGUgY2VsbHMgZm9yIGVhY2ggcm93XG5cbiAgICAgIHJvdy5hbGxDZWxscyA9IGFsbENvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcm93LnZhbHVlc1tjb2x1bW4uaWRdO1xuICAgICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTsgLy8gR2l2ZSBlYWNoIGNlbGwgYSBnZXRDZWxsUHJvcHMgYmFzZVxuXG4gICAgICAgIGNlbGwuZ2V0Q2VsbFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRDZWxsUHJvcHMsIHtcbiAgICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICBjZWxsOiBjZWxsXG4gICAgICAgIH0pOyAvLyBHaXZlIGVhY2ggY2VsbCBhIHJlbmRlcmVyIGZ1bmN0aW9uIChzdXBwb3J0cyBtdWx0aXBsZSByZW5kZXJlcnMpXG5cbiAgICAgICAgY2VsbC5yZW5kZXIgPSBtYWtlUmVuZGVyZXIoZ2V0SW5zdGFuY2UoKSwgY29sdW1uLCB7XG4gICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgY2VsbDogY2VsbCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgfSk7XG4gICAgICByb3cuY2VsbHMgPSB2aXNpYmxlQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gcm93LmFsbENlbGxzLmZpbmQoZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgICByZXR1cm4gY2VsbC5jb2x1bW4uaWQgPT09IGNvbHVtbi5pZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gbmVlZCB0byBhcHBseSBhbnkgcm93IHNwZWNpZmljIGhvb2tzICh1c2VFeHBhbmRlZCByZXF1aXJlcyB0aGlzKVxuXG4gICAgICBsb29wSG9va3MoZ2V0SG9va3MoKS5wcmVwYXJlUm93LCByb3csIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0pO1xuICAgIH0sIFtnZXRIb29rcywgZ2V0SW5zdGFuY2UsIGFsbENvbHVtbnMsIHZpc2libGVDb2x1bW5zXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5nZXRUYWJsZVByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUYWJsZVByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIGdldEluc3RhbmNlKCkuZ2V0VGFibGVCb2R5UHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRhYmxlQm9keVByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnVzZUZpbmFsSW5zdGFuY2UsIGdldEluc3RhbmNlKCkpO1xuICAgIHJldHVybiBnZXRJbnN0YW5jZSgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUhlYWRlcldpZHRocyhoZWFkZXJzLCBsZWZ0KSB7XG4gICAgaWYgKGxlZnQgPT09IHZvaWQgMCkge1xuICAgICAgbGVmdCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHN1bVRvdGFsTWluV2lkdGggPSAwO1xuICAgIHZhciBzdW1Ub3RhbFdpZHRoID0gMDtcbiAgICB2YXIgc3VtVG90YWxNYXhXaWR0aCA9IDA7XG4gICAgdmFyIHN1bVRvdGFsRmxleFdpZHRoID0gMDtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgdmFyIHN1YkhlYWRlcnMgPSBoZWFkZXIuaGVhZGVycztcbiAgICAgIGhlYWRlci50b3RhbExlZnQgPSBsZWZ0O1xuXG4gICAgICBpZiAoc3ViSGVhZGVycyAmJiBzdWJIZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgX2NhbGN1bGF0ZUhlYWRlcldpZHRoMiA9IGNhbGN1bGF0ZUhlYWRlcldpZHRocyhzdWJIZWFkZXJzLCBsZWZ0KSxcbiAgICAgICAgICAgIHRvdGFsTWluV2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzBdLFxuICAgICAgICAgICAgdG90YWxXaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbMV0sXG4gICAgICAgICAgICB0b3RhbE1heFdpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoMlsyXSxcbiAgICAgICAgICAgIHRvdGFsRmxleFdpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoMlszXTtcblxuICAgICAgICBoZWFkZXIudG90YWxNaW5XaWR0aCA9IHRvdGFsTWluV2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbFdpZHRoID0gdG90YWxXaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsTWF4V2lkdGggPSB0b3RhbE1heFdpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxGbGV4V2lkdGggPSB0b3RhbEZsZXhXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlci50b3RhbE1pbldpZHRoID0gaGVhZGVyLm1pbldpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGhlYWRlci5taW5XaWR0aCwgaGVhZGVyLndpZHRoKSwgaGVhZGVyLm1heFdpZHRoKTtcbiAgICAgICAgaGVhZGVyLnRvdGFsTWF4V2lkdGggPSBoZWFkZXIubWF4V2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbEZsZXhXaWR0aCA9IGhlYWRlci5jYW5SZXNpemUgPyBoZWFkZXIudG90YWxXaWR0aCA6IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWFkZXIuaXNWaXNpYmxlKSB7XG4gICAgICAgIGxlZnQgKz0gaGVhZGVyLnRvdGFsV2lkdGg7XG4gICAgICAgIHN1bVRvdGFsTWluV2lkdGggKz0gaGVhZGVyLnRvdGFsTWluV2lkdGg7XG4gICAgICAgIHN1bVRvdGFsV2lkdGggKz0gaGVhZGVyLnRvdGFsV2lkdGg7XG4gICAgICAgIHN1bVRvdGFsTWF4V2lkdGggKz0gaGVhZGVyLnRvdGFsTWF4V2lkdGg7XG4gICAgICAgIHN1bVRvdGFsRmxleFdpZHRoICs9IGhlYWRlci50b3RhbEZsZXhXaWR0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gW3N1bVRvdGFsTWluV2lkdGgsIHN1bVRvdGFsV2lkdGgsIHN1bVRvdGFsTWF4V2lkdGgsIHN1bVRvdGFsRmxleFdpZHRoXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY2Vzc1Jvd3NGb3JDb2x1bW4oX3JlZikge1xuICAgIHZhciBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgICByb3dzID0gX3JlZi5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IF9yZWYuZmxhdFJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gX3JlZi5yb3dzQnlJZCxcbiAgICAgICAgY29sdW1uID0gX3JlZi5jb2x1bW4sXG4gICAgICAgIGdldFJvd0lkID0gX3JlZi5nZXRSb3dJZCxcbiAgICAgICAgZ2V0U3ViUm93cyA9IF9yZWYuZ2V0U3ViUm93cyxcbiAgICAgICAgYWNjZXNzVmFsdWVIb29rcyA9IF9yZWYuYWNjZXNzVmFsdWVIb29rcyxcbiAgICAgICAgZ2V0SW5zdGFuY2UgPSBfcmVmLmdldEluc3RhbmNlO1xuXG4gICAgLy8gQWNjZXNzIHRoZSByb3cncyBkYXRhIGNvbHVtbi1ieS1jb2x1bW5cbiAgICAvLyBXZSBkbyBpdCB0aGlzIHdheSBzbyB3ZSBjYW4gaW5jcmVtZW50YWxseSBhZGQgbWF0ZXJpYWxpemVkXG4gICAgLy8gY29sdW1ucyBhZnRlciB0aGUgZmlyc3QgcGFzcyBhbmQgYXZvaWQgZXhjZXNzaXZlIGxvb3BpbmdcbiAgICB2YXIgYWNjZXNzUm93ID0gZnVuY3Rpb24gYWNjZXNzUm93KG9yaWdpbmFsUm93LCByb3dJbmRleCwgZGVwdGgsIHBhcmVudCwgcGFyZW50Um93cykge1xuICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVwdGggPSAwO1xuICAgICAgfVxuXG4gICAgICAvLyBLZWVwIHRoZSBvcmlnaW5hbCByZWZlcmVuY2UgYXJvdW5kXG4gICAgICB2YXIgb3JpZ2luYWwgPSBvcmlnaW5hbFJvdztcbiAgICAgIHZhciBpZCA9IGdldFJvd0lkKG9yaWdpbmFsUm93LCByb3dJbmRleCwgcGFyZW50KTtcbiAgICAgIHZhciByb3cgPSByb3dzQnlJZFtpZF07IC8vIElmIHRoZSByb3cgaGFzbid0IGJlZW4gY3JlYXRlZCwgbGV0J3MgbWFrZSBpdFxuXG4gICAgICBpZiAoIXJvdykge1xuICAgICAgICByb3cgPSB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIG9yaWdpbmFsOiBvcmlnaW5hbCxcbiAgICAgICAgICBpbmRleDogcm93SW5kZXgsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGNlbGxzOiBbe31dIC8vIFRoaXMgaXMgYSBkdW1teSBjZWxsXG5cbiAgICAgICAgfTsgLy8gT3ZlcnJpZGUgY29tbW9uIGFycmF5IGZ1bmN0aW9ucyAoYW5kIHRoZSBkdW1teSBjZWxsJ3MgZ2V0Q2VsbFByb3BzIGZ1bmN0aW9uKVxuICAgICAgICAvLyB0byBzaG93IGFuIGVycm9yIGlmIGl0IGlzIGFjY2Vzc2VkIHdpdGhvdXQgY2FsbGluZyBwcmVwYXJlUm93XG5cbiAgICAgICAgcm93LmNlbGxzLm1hcCA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nO1xuICAgICAgICByb3cuY2VsbHMuZmlsdGVyID0gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmc7XG4gICAgICAgIHJvdy5jZWxscy5mb3JFYWNoID0gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmc7XG4gICAgICAgIHJvdy5jZWxsc1swXS5nZXRDZWxsUHJvcHMgPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZzsgLy8gQ3JlYXRlIHRoZSBjZWxscyBhbmQgdmFsdWVzXG5cbiAgICAgICAgcm93LnZhbHVlcyA9IHt9OyAvLyBQdXNoIHRoaXMgcm93IGludG8gdGhlIHBhcmVudFJvd3MgYXJyYXlcblxuICAgICAgICBwYXJlbnRSb3dzLnB1c2gocm93KTsgLy8gS2VlcCB0cmFjayBvZiBldmVyeSByb3cgaW4gYSBmbGF0IGFycmF5XG5cbiAgICAgICAgZmxhdFJvd3MucHVzaChyb3cpOyAvLyBBbHNvIGtlZXAgdHJhY2sgb2YgZXZlcnkgcm93IGJ5IGl0cyBJRFxuXG4gICAgICAgIHJvd3NCeUlkW2lkXSA9IHJvdzsgLy8gR2V0IHRoZSBvcmlnaW5hbCBzdWJyb3dzXG5cbiAgICAgICAgcm93Lm9yaWdpbmFsU3ViUm93cyA9IGdldFN1YlJvd3Mob3JpZ2luYWxSb3csIHJvd0luZGV4KTsgLy8gVGhlbiByZWN1cnNpdmVseSBhY2Nlc3MgdGhlbVxuXG4gICAgICAgIGlmIChyb3cub3JpZ2luYWxTdWJSb3dzKSB7XG4gICAgICAgICAgdmFyIHN1YlJvd3MgPSBbXTtcbiAgICAgICAgICByb3cub3JpZ2luYWxTdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3NSb3coZCwgaSwgZGVwdGggKyAxLCByb3csIHN1YlJvd3MpO1xuICAgICAgICAgIH0pOyAvLyBLZWVwIHRoZSBuZXcgc3ViUm93cyBhcnJheSBvbiB0aGUgcm93XG5cbiAgICAgICAgICByb3cuc3ViUm93cyA9IHN1YlJvd3M7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocm93LnN1YlJvd3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJvdyBleGlzdHMsIHRoZW4gaXQncyBhbHJlYWR5IGJlZW4gYWNjZXNzZWRcbiAgICAgICAgLy8gS2VlcCByZWN1cnNpbmcsIGJ1dCBkb24ndCB3b3JyeSBhYm91dCBwYXNzaW5nIHRoZVxuICAgICAgICAvLyBhY2N1bWxhdG9yIGFycmF5ICh0aG9zZSByb3dzIGFscmVhZHkgZXhpc3QpXG4gICAgICAgIHJvdy5vcmlnaW5hbFN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBhY2Nlc3NSb3coZCwgaSwgZGVwdGggKyAxLCByb3cpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gSWYgdGhlIGNvbHVtbiBoYXMgYW4gYWNjZXNzb3IsIHVzZSBpdCB0byBnZXQgYSB2YWx1ZVxuXG5cbiAgICAgIGlmIChjb2x1bW4uYWNjZXNzb3IpIHtcbiAgICAgICAgcm93LnZhbHVlc1tjb2x1bW4uaWRdID0gY29sdW1uLmFjY2Vzc29yKG9yaWdpbmFsUm93LCByb3dJbmRleCwgcm93LCBwYXJlbnRSb3dzLCBkYXRhKTtcbiAgICAgIH0gLy8gQWxsb3cgcGx1Z2lucyB0byBtYW5pcHVsYXRlIHRoZSBjb2x1bW4gdmFsdWVcblxuXG4gICAgICByb3cudmFsdWVzW2NvbHVtbi5pZF0gPSByZWR1Y2VIb29rcyhhY2Nlc3NWYWx1ZUhvb2tzLCByb3cudmFsdWVzW2NvbHVtbi5pZF0sIHtcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAob3JpZ2luYWxSb3csIHJvd0luZGV4KSB7XG4gICAgICByZXR1cm4gYWNjZXNzUm93KG9yaWdpbmFsUm93LCByb3dJbmRleCwgMCwgdW5kZWZpbmVkLCByb3dzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRFeHBhbmRlZCA9ICdyZXNldEV4cGFuZGVkJztcbiAgYWN0aW9ucy50b2dnbGVSb3dFeHBhbmRlZCA9ICd0b2dnbGVSb3dFeHBhbmRlZCc7XG4gIGFjdGlvbnMudG9nZ2xlQWxsUm93c0V4cGFuZGVkID0gJ3RvZ2dsZUFsbFJvd3NFeHBhbmRlZCc7XG4gIHZhciB1c2VFeHBhbmRlZCA9IGZ1bmN0aW9uIHVzZUV4cGFuZGVkKGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzXTtcbiAgICBob29rcy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQxKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDEpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93KTtcbiAgfTtcbiAgdXNlRXhwYW5kZWQucGx1Z2luTmFtZSA9ICd1c2VFeHBhbmRlZCc7XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGluc3RhbmNlLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCgpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQWxsIFJvd3MgRXhwYW5kZWQnXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIHJvdyA9IF9yZWYyLnJvdztcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICByb3cudG9nZ2xlUm93RXhwYW5kZWQoKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIFJvdyBFeHBhbmRlZCdcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQxKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGV4cGFuZGVkOiB7fVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGV4cGFuZGVkOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZXhwYW5kZWQgfHwge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVBbGxSb3dzRXhwYW5kZWQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBpc0FsbFJvd3NFeHBhbmRlZCA9IGluc3RhbmNlLmlzQWxsUm93c0V4cGFuZGVkLFxuICAgICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQ7XG4gICAgICB2YXIgZXhwYW5kQWxsID0gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogIWlzQWxsUm93c0V4cGFuZGVkO1xuXG4gICAgICBpZiAoZXhwYW5kQWxsKSB7XG4gICAgICAgIHZhciBleHBhbmRlZCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhyb3dzQnlJZCkuZm9yRWFjaChmdW5jdGlvbiAocm93SWQpIHtcbiAgICAgICAgICBleHBhbmRlZFtyb3dJZF0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBleHBhbmRlZDoge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVSb3dFeHBhbmRlZCkge1xuICAgICAgdmFyIGlkID0gYWN0aW9uLmlkLFxuICAgICAgICAgIHNldEV4cGFuZGVkID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIGV4aXN0cyA9IHN0YXRlLmV4cGFuZGVkW2lkXTtcbiAgICAgIHZhciBzaG91bGRFeGlzdCA9IHR5cGVvZiBzZXRFeHBhbmRlZCAhPT0gJ3VuZGVmaW5lZCcgPyBzZXRFeHBhbmRlZCA6ICFleGlzdHM7XG5cbiAgICAgIGlmICghZXhpc3RzICYmIHNob3VsZEV4aXN0KSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGV4cGFuZGVkOiBfZXh0ZW5kcyh7fSwgc3RhdGUuZXhwYW5kZWQsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2lkXSA9IHRydWUsIF9leHRlbmRzMikpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChleGlzdHMgJiYgIXNob3VsZEV4aXN0KSB7XG4gICAgICAgIHZhciBfc3RhdGUkZXhwYW5kZWQgPSBzdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgICAgIF8gPSBfc3RhdGUkZXhwYW5kZWRbaWRdLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9zdGF0ZSRleHBhbmRlZCwgW2lkXS5tYXAoX3RvUHJvcGVydHlLZXkpKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZXhwYW5kZWQ6IHJlc3RcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkMShpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIF9pbnN0YW5jZSRtYW51YWxFeHBhbiA9IGluc3RhbmNlLm1hbnVhbEV4cGFuZGVkS2V5LFxuICAgICAgICBtYW51YWxFeHBhbmRlZEtleSA9IF9pbnN0YW5jZSRtYW51YWxFeHBhbiA9PT0gdm9pZCAwID8gJ2V4cGFuZGVkJyA6IF9pbnN0YW5jZSRtYW51YWxFeHBhbixcbiAgICAgICAgX2luc3RhbmNlJHBhZ2luYXRlRXhwID0gaW5zdGFuY2UucGFnaW5hdGVFeHBhbmRlZFJvd3MsXG4gICAgICAgIHBhZ2luYXRlRXhwYW5kZWRSb3dzID0gX2luc3RhbmNlJHBhZ2luYXRlRXhwID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHBhZ2luYXRlRXhwLFxuICAgICAgICBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPSBpbnN0YW5jZS5leHBhbmRTdWJSb3dzLFxuICAgICAgICBleHBhbmRTdWJSb3dzID0gX2luc3RhbmNlJGV4cGFuZFN1YlJvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGV4cGFuZFN1YlJvLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0RXggPSBpbnN0YW5jZS5hdXRvUmVzZXRFeHBhbmRlZCxcbiAgICAgICAgYXV0b1Jlc2V0RXhwYW5kZWQgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0RXggPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0RXgsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICBleHBhbmRlZCA9IGluc3RhbmNlLnN0YXRlLmV4cGFuZGVkLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlU29ydEJ5JywgJ3VzZUdyb3VwQnknLCAndXNlUGl2b3RDb2x1bW5zJywgJ3VzZUdsb2JhbEZpbHRlciddLCAndXNlRXhwYW5kZWQnKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0RXhwYW5kZWQgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0RXhwYW5kZWQpO1xuICAgIHZhciBpc0FsbFJvd3NFeHBhbmRlZCA9IEJvb2xlYW4oT2JqZWN0LmtleXMocm93c0J5SWQpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhleHBhbmRlZCkubGVuZ3RoKTtcblxuICAgIGlmIChpc0FsbFJvd3NFeHBhbmRlZCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJvd3NCeUlkKS5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gIWV4cGFuZGVkW2lkXTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSAvLyBCeXBhc3MgYW55IGVmZmVjdHMgZnJvbSBmaXJpbmcgd2hlbiB0aGlzIGNoYW5nZXNcblxuXG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0RXhwYW5kZWQoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEV4cGFuZGVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgZGF0YV0pO1xuICAgIHZhciB0b2dnbGVSb3dFeHBhbmRlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpZCwgdmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVSb3dFeHBhbmRlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciB0b2dnbGVBbGxSb3dzRXhwYW5kZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlQWxsUm93c0V4cGFuZGVkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBleHBhbmRlZFJvd3MgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwYWdpbmF0ZUV4cGFuZGVkUm93cykge1xuICAgICAgICByZXR1cm4gZXhwYW5kUm93cyhyb3dzLCB7XG4gICAgICAgICAgbWFudWFsRXhwYW5kZWRLZXk6IG1hbnVhbEV4cGFuZGVkS2V5LFxuICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgICBleHBhbmRTdWJSb3dzOiBleHBhbmRTdWJSb3dzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93cztcbiAgICB9LCBbcGFnaW5hdGVFeHBhbmRlZFJvd3MsIHJvd3MsIG1hbnVhbEV4cGFuZGVkS2V5LCBleHBhbmRlZCwgZXhwYW5kU3ViUm93c10pO1xuICAgIHZhciBleHBhbmRlZERlcHRoID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmluZEV4cGFuZGVkRGVwdGgoZXhwYW5kZWQpO1xuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgdmFyIGdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVFeHBhbmRlZFJvd3M6IHJvd3MsXG4gICAgICBleHBhbmRlZFJvd3M6IGV4cGFuZGVkUm93cyxcbiAgICAgIHJvd3M6IGV4cGFuZGVkUm93cyxcbiAgICAgIGV4cGFuZGVkRGVwdGg6IGV4cGFuZGVkRGVwdGgsXG4gICAgICBpc0FsbFJvd3NFeHBhbmRlZDogaXNBbGxSb3dzRXhwYW5kZWQsXG4gICAgICB0b2dnbGVSb3dFeHBhbmRlZDogdG9nZ2xlUm93RXhwYW5kZWQsXG4gICAgICB0b2dnbGVBbGxSb3dzRXhwYW5kZWQ6IHRvZ2dsZUFsbFJvd3NFeHBhbmRlZCxcbiAgICAgIGdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzOiBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wc1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyhyb3csIF9yZWYzKSB7XG4gICAgdmFyIGdldEhvb2tzID0gX3JlZjMuaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIGluc3RhbmNlID0gX3JlZjMuaW5zdGFuY2U7XG5cbiAgICByb3cudG9nZ2xlUm93RXhwYW5kZWQgPSBmdW5jdGlvbiAoc2V0KSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlUm93RXhwYW5kZWQocm93LmlkLCBzZXQpO1xuICAgIH07XG5cbiAgICByb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgcm93OiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRFeHBhbmRlZERlcHRoKGV4cGFuZGVkKSB7XG4gICAgdmFyIG1heERlcHRoID0gMDtcbiAgICBPYmplY3Qua2V5cyhleHBhbmRlZCkuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHZhciBzcGxpdElkID0gaWQuc3BsaXQoJy4nKTtcbiAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIHNwbGl0SWQubGVuZ3RoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF4RGVwdGg7XG4gIH1cblxuICB2YXIgdGV4dCA9IGZ1bmN0aW9uIHRleHQocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJvd3MgPSByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gU3RyaW5nKHJvd1ZhbHVlKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFN0cmluZyhmaWx0ZXJWYWx1ZSkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93cztcbiAgfTtcblxuICB0ZXh0LmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWw7XG4gIH07XG5cbiAgdmFyIGV4YWN0VGV4dCA9IGZ1bmN0aW9uIGV4YWN0VGV4dChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkID8gU3RyaW5nKHJvd1ZhbHVlKS50b0xvd2VyQ2FzZSgpID09PSBTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkgOiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZXhhY3RUZXh0LmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWw7XG4gIH07XG5cbiAgdmFyIGV4YWN0VGV4dENhc2UgPSBmdW5jdGlvbiBleGFjdFRleHRDYXNlKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWQgPyBTdHJpbmcocm93VmFsdWUpID09PSBTdHJpbmcoZmlsdGVyVmFsdWUpIDogdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGV4YWN0VGV4dENhc2UuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbDtcbiAgfTtcblxuICB2YXIgaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyhyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpbmNsdWRlcy5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsIHx8ICF2YWwubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBpbmNsdWRlc0FsbCA9IGZ1bmN0aW9uIGluY2x1ZGVzQWxsKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICYmIHJvd1ZhbHVlLmxlbmd0aCAmJiBmaWx0ZXJWYWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXNBbGwuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgaW5jbHVkZXNTb21lID0gZnVuY3Rpb24gaW5jbHVkZXNTb21lKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICYmIHJvd1ZhbHVlLmxlbmd0aCAmJiBmaWx0ZXJWYWx1ZS5zb21lKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICByZXR1cm4gcm93VmFsdWUuaW5jbHVkZXModmFsKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpbmNsdWRlc1NvbWUuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbCB8fCAhdmFsLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgaW5jbHVkZXNWYWx1ZSA9IGZ1bmN0aW9uIGluY2x1ZGVzVmFsdWUocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gZmlsdGVyVmFsdWUuaW5jbHVkZXMocm93VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaW5jbHVkZXNWYWx1ZS5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsIHx8ICF2YWwubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBleGFjdCA9IGZ1bmN0aW9uIGV4YWN0KHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlID09PSBmaWx0ZXJWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGV4YWN0LmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xuICB9O1xuXG4gIHZhciBlcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlID09IGZpbHRlclZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZXF1YWxzLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbCA9PSBudWxsO1xuICB9O1xuXG4gIHZhciBiZXR3ZWVuID0gZnVuY3Rpb24gYmV0d2Vlbihyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgdmFyIF9yZWYgPSBmaWx0ZXJWYWx1ZSB8fCBbXSxcbiAgICAgICAgbWluID0gX3JlZlswXSxcbiAgICAgICAgbWF4ID0gX3JlZlsxXTtcblxuICAgIG1pbiA9IHR5cGVvZiBtaW4gPT09ICdudW1iZXInID8gbWluIDogLUluZmluaXR5O1xuICAgIG1heCA9IHR5cGVvZiBtYXggPT09ICdudW1iZXInID8gbWF4IDogSW5maW5pdHk7XG5cbiAgICBpZiAobWluID4gbWF4KSB7XG4gICAgICB2YXIgdGVtcCA9IG1pbjtcbiAgICAgIG1pbiA9IG1heDtcbiAgICAgIG1heCA9IHRlbXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiByb3dWYWx1ZSA+PSBtaW4gJiYgcm93VmFsdWUgPD0gbWF4O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgYmV0d2Vlbi5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsIHx8IHR5cGVvZiB2YWxbMF0gIT09ICdudW1iZXInICYmIHR5cGVvZiB2YWxbMV0gIT09ICdudW1iZXInO1xuICB9O1xuXG4gIHZhciBmaWx0ZXJUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgdGV4dDogdGV4dCxcbiAgICBleGFjdFRleHQ6IGV4YWN0VGV4dCxcbiAgICBleGFjdFRleHRDYXNlOiBleGFjdFRleHRDYXNlLFxuICAgIGluY2x1ZGVzOiBpbmNsdWRlcyxcbiAgICBpbmNsdWRlc0FsbDogaW5jbHVkZXNBbGwsXG4gICAgaW5jbHVkZXNTb21lOiBpbmNsdWRlc1NvbWUsXG4gICAgaW5jbHVkZXNWYWx1ZTogaW5jbHVkZXNWYWx1ZSxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgZXF1YWxzOiBlcXVhbHMsXG4gICAgYmV0d2VlbjogYmV0d2VlblxuICB9KTtcblxuICBhY3Rpb25zLnJlc2V0RmlsdGVycyA9ICdyZXNldEZpbHRlcnMnO1xuICBhY3Rpb25zLnNldEZpbHRlciA9ICdzZXRGaWx0ZXInO1xuICBhY3Rpb25zLnNldEFsbEZpbHRlcnMgPSAnc2V0QWxsRmlsdGVycyc7XG4gIHZhciB1c2VGaWx0ZXJzID0gZnVuY3Rpb24gdXNlRmlsdGVycyhob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDIpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkMik7XG4gIH07XG4gIHVzZUZpbHRlcnMucGx1Z2luTmFtZSA9ICd1c2VGaWx0ZXJzJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJDIoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZmlsdGVyczogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRGaWx0ZXJzKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGZpbHRlcnM6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5maWx0ZXJzIHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0RmlsdGVyKSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgZmlsdGVyVmFsdWUgPSBhY3Rpb24uZmlsdGVyVmFsdWU7XG4gICAgICB2YXIgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgICAgdXNlckZpbHRlclR5cGVzID0gaW5zdGFuY2UuZmlsdGVyVHlwZXM7XG4gICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC1UYWJsZTogQ291bGQgbm90IGZpbmQgYSBjb2x1bW4gd2l0aCBpZDogXCIgKyBjb2x1bW5JZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoY29sdW1uLmZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG4gICAgICB2YXIgcHJldmlvdXNmaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3RmlsdGVyID0gZnVuY3Rpb25hbFVwZGF0ZShmaWx0ZXJWYWx1ZSwgcHJldmlvdXNmaWx0ZXIgJiYgcHJldmlvdXNmaWx0ZXIudmFsdWUpOyAvL1xuXG4gICAgICBpZiAoc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihmaWx0ZXJNZXRob2QuYXV0b1JlbW92ZSwgbmV3RmlsdGVyLCBjb2x1bW4pKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgIT09IGNvbHVtbklkO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldmlvdXNmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAoZC5pZCA9PT0gY29sdW1uSWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogY29sdW1uSWQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ld0ZpbHRlclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBmaWx0ZXJzOiBbXS5jb25jYXQoc3RhdGUuZmlsdGVycywgW3tcbiAgICAgICAgICBpZDogY29sdW1uSWQsXG4gICAgICAgICAgdmFsdWU6IG5ld0ZpbHRlclxuICAgICAgICB9XSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRBbGxGaWx0ZXJzKSB7XG4gICAgICB2YXIgZmlsdGVycyA9IGFjdGlvbi5maWx0ZXJzO1xuICAgICAgdmFyIF9hbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgICBfdXNlckZpbHRlclR5cGVzID0gaW5zdGFuY2UuZmlsdGVyVHlwZXM7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIC8vIEZpbHRlciBvdXQgdW5kZWZpbmVkIHZhbHVlc1xuICAgICAgICBmaWx0ZXJzOiBmdW5jdGlvbmFsVXBkYXRlKGZpbHRlcnMsIHN0YXRlLmZpbHRlcnMpLmZpbHRlcihmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgdmFyIGNvbHVtbiA9IF9hbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBmaWx0ZXIuaWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGNvbHVtbi5maWx0ZXIsIF91c2VyRmlsdGVyVHlwZXMgfHwge30sIGZpbHRlclR5cGVzKTtcblxuICAgICAgICAgIGlmIChzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGZpbHRlck1ldGhvZC5hdXRvUmVtb3ZlLCBmaWx0ZXIudmFsdWUsIGNvbHVtbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDIoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IGluc3RhbmNlLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgdXNlckZpbHRlclR5cGVzID0gaW5zdGFuY2UuZmlsdGVyVHlwZXMsXG4gICAgICAgIG1hbnVhbEZpbHRlcnMgPSBpbnN0YW5jZS5tYW51YWxGaWx0ZXJzLFxuICAgICAgICBfaW5zdGFuY2UkZGVmYXVsdENhbkYgPSBpbnN0YW5jZS5kZWZhdWx0Q2FuRmlsdGVyLFxuICAgICAgICBkZWZhdWx0Q2FuRmlsdGVyID0gX2luc3RhbmNlJGRlZmF1bHRDYW5GID09PSB2b2lkIDAgPyBmYWxzZSA6IF9pbnN0YW5jZSRkZWZhdWx0Q2FuRixcbiAgICAgICAgZGlzYWJsZUZpbHRlcnMgPSBpbnN0YW5jZS5kaXNhYmxlRmlsdGVycyxcbiAgICAgICAgZmlsdGVycyA9IGluc3RhbmNlLnN0YXRlLmZpbHRlcnMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRGaSA9IGluc3RhbmNlLmF1dG9SZXNldEZpbHRlcnMsXG4gICAgICAgIGF1dG9SZXNldEZpbHRlcnMgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0RmkgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0Rmk7XG4gICAgdmFyIHNldEZpbHRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgZmlsdGVyVmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRGaWx0ZXIsXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgZmlsdGVyVmFsdWU6IGZpbHRlclZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgc2V0QWxsRmlsdGVycyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmaWx0ZXJzKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0QWxsRmlsdGVycyxcbiAgICAgICAgZmlsdGVyczogZmlsdGVyc1xuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIHZhciBpZCA9IGNvbHVtbi5pZCxcbiAgICAgICAgICBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgICBjb2x1bW5EZWZhdWx0Q2FuRmlsdGVyID0gY29sdW1uLmRlZmF1bHRDYW5GaWx0ZXIsXG4gICAgICAgICAgY29sdW1uRGlzYWJsZUZpbHRlcnMgPSBjb2x1bW4uZGlzYWJsZUZpbHRlcnM7IC8vIERldGVybWluZSBpZiBhIGNvbHVtbiBpcyBmaWx0ZXJhYmxlXG5cbiAgICAgIGNvbHVtbi5jYW5GaWx0ZXIgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW5EaXNhYmxlRmlsdGVycyA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlRmlsdGVycyA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKSA6IGdldEZpcnN0RGVmaW5lZChjb2x1bW5EZWZhdWx0Q2FuRmlsdGVyLCBkZWZhdWx0Q2FuRmlsdGVyLCBmYWxzZSk7IC8vIFByb3ZpZGUgdGhlIGNvbHVtbiBhIHdheSBvZiB1cGRhdGluZyB0aGUgZmlsdGVyIHZhbHVlXG5cbiAgICAgIGNvbHVtbi5zZXRGaWx0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiBzZXRGaWx0ZXIoY29sdW1uLmlkLCB2YWwpO1xuICAgICAgfTsgLy8gUHJvdmlkZSB0aGUgY3VycmVudCBmaWx0ZXIgdmFsdWUgdG8gdGhlIGNvbHVtbiBmb3JcbiAgICAgIC8vIGNvbnZlbmllbmNlXG5cblxuICAgICAgdmFyIGZvdW5kID0gZmlsdGVycy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBpZDtcbiAgICAgIH0pO1xuICAgICAgY29sdW1uLmZpbHRlclZhbHVlID0gZm91bmQgJiYgZm91bmQudmFsdWU7XG4gICAgfSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxGaWx0ZXJzIHx8ICFmaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzLCByb3dzQnlJZF07XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWx0ZXJlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgZmlsdGVyZWRSb3dzQnlJZCA9IHt9OyAvLyBGaWx0ZXJzIHRvcCBsZXZlbCBhbmQgbmVzdGVkIHJvd3NcblxuICAgICAgdmFyIGZpbHRlclJvd3MgPSBmdW5jdGlvbiBmaWx0ZXJSb3dzKHJvd3MsIGRlcHRoKSB7XG4gICAgICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGVwdGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbHRlcmVkUm93cyA9IHJvd3M7XG4gICAgICAgIGZpbHRlcmVkUm93cyA9IGZpbHRlcnMucmVkdWNlKGZ1bmN0aW9uIChmaWx0ZXJlZFNvRmFyLCBfcmVmKSB7XG4gICAgICAgICAgdmFyIGNvbHVtbklkID0gX3JlZi5pZCxcbiAgICAgICAgICAgICAgZmlsdGVyVmFsdWUgPSBfcmVmLnZhbHVlO1xuICAgICAgICAgIC8vIEZpbmQgdGhlIGZpbHRlcnMgY29sdW1uXG4gICAgICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFNvRmFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29sdW1uLnByZUZpbHRlcmVkUm93cyA9IGZpbHRlcmVkU29GYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChjb2x1bW4uZmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMgfHwge30sIGZpbHRlclR5cGVzKTtcblxuICAgICAgICAgIGlmICghZmlsdGVyTWV0aG9kKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZmluZCBhIHZhbGlkICdjb2x1bW4uZmlsdGVyJyBmb3IgY29sdW1uIHdpdGggdGhlIElEOiBcIiArIGNvbHVtbi5pZCArIFwiLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFNvRmFyO1xuICAgICAgICAgIH0gLy8gUGFzcyB0aGUgcm93cywgaWQsIGZpbHRlclZhbHVlIGFuZCBjb2x1bW4gdG8gdGhlIGZpbHRlck1ldGhvZFxuICAgICAgICAgIC8vIHRvIGdldCB0aGUgZmlsdGVyZWQgcm93cyBiYWNrXG5cblxuICAgICAgICAgIGNvbHVtbi5maWx0ZXJlZFJvd3MgPSBmaWx0ZXJNZXRob2QoZmlsdGVyZWRTb0ZhciwgW2NvbHVtbklkXSwgZmlsdGVyVmFsdWUpO1xuICAgICAgICAgIHJldHVybiBjb2x1bW4uZmlsdGVyZWRSb3dzO1xuICAgICAgICB9LCByb3dzKTsgLy8gQXBwbHkgdGhlIGZpbHRlciB0byBhbnkgc3ViUm93c1xuICAgICAgICAvLyBXZSB0ZWNobmljYWxseSBjb3VsZCBkbyB0aGlzIHJlY3Vyc2l2ZWx5IGluIHRoZSBhYm92ZSBsb29wLFxuICAgICAgICAvLyBidXQgdGhhdCB3b3VsZCBzZXZlcmVseSBoaW5kZXIgdGhlIEFQSSBmb3IgdGhlIHVzZXIsIHNpbmNlIHRoZXlcbiAgICAgICAgLy8gd291bGQgYmUgcmVxdWlyZWQgdG8gZG8gdGhhdCByZWN1cnNpb24gaW4gc29tZSBzY2VuYXJpb3NcblxuICAgICAgICBmaWx0ZXJlZFJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgZmlsdGVyZWRGbGF0Um93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgZmlsdGVyZWRSb3dzQnlJZFtyb3cuaWRdID0gcm93O1xuXG4gICAgICAgICAgaWYgKCFyb3cuc3ViUm93cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdy5zdWJSb3dzID0gcm93LnN1YlJvd3MgJiYgcm93LnN1YlJvd3MubGVuZ3RoID4gMCA/IGZpbHRlclJvd3Mocm93LnN1YlJvd3MsIGRlcHRoICsgMSkgOiByb3cuc3ViUm93cztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3M7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gW2ZpbHRlclJvd3Mocm93cyksIGZpbHRlcmVkRmxhdFJvd3MsIGZpbHRlcmVkUm93c0J5SWRdO1xuICAgIH0sIFttYW51YWxGaWx0ZXJzLCBmaWx0ZXJzLCByb3dzLCBmbGF0Um93cywgcm93c0J5SWQsIGFsbENvbHVtbnMsIHVzZXJGaWx0ZXJUeXBlc10pLFxuICAgICAgICBmaWx0ZXJlZFJvd3MgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgZmlsdGVyZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdLFxuICAgICAgICBmaWx0ZXJlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bMl07XG5cbiAgICBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE5vdyB0aGF0IGVhY2ggZmlsdGVyZWQgY29sdW1uIGhhcyBpdCdzIHBhcnRpYWxseSBmaWx0ZXJlZCByb3dzLFxuICAgICAgLy8gbGV0cyBhc3NpZ24gdGhlIGZpbmFsIGZpbHRlcmVkIHJvd3MgdG8gYWxsIG9mIHRoZSBvdGhlciBjb2x1bW5zXG4gICAgICB2YXIgbm9uRmlsdGVyZWRDb2x1bW5zID0gYWxsQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gIWZpbHRlcnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIFRoaXMgZXNzZW50aWFsbHkgZW5hYmxlcyBmYWNldGVkIGZpbHRlciBvcHRpb25zIHRvIGJlIGJ1aWx0IGVhc2lseVxuICAgICAgLy8gdXNpbmcgZXZlcnkgY29sdW1uJ3MgcHJlRmlsdGVyZWRSb3dzIHZhbHVlXG5cbiAgICAgIG5vbkZpbHRlcmVkQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgY29sdW1uLnByZUZpbHRlcmVkUm93cyA9IGZpbHRlcmVkUm93cztcbiAgICAgICAgY29sdW1uLmZpbHRlcmVkUm93cyA9IGZpbHRlcmVkUm93cztcbiAgICAgIH0pO1xuICAgIH0sIFtmaWx0ZXJlZFJvd3MsIGZpbHRlcnMsIGFsbENvbHVtbnNdKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0RmlsdGVycyA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRGaWx0ZXJzKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRGaWx0ZXJzKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRGaWx0ZXJzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsRmlsdGVycyA/IG51bGwgOiBkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlRmlsdGVyZWRSb3dzOiByb3dzLFxuICAgICAgcHJlRmlsdGVyZWRGbGF0Um93czogZmxhdFJvd3MsXG4gICAgICBwcmVGaWx0ZXJlZFJvd3NCeUlkOiByb3dzQnlJZCxcbiAgICAgIGZpbHRlcmVkUm93czogZmlsdGVyZWRSb3dzLFxuICAgICAgZmlsdGVyZWRGbGF0Um93czogZmlsdGVyZWRGbGF0Um93cyxcbiAgICAgIGZpbHRlcmVkUm93c0J5SWQ6IGZpbHRlcmVkUm93c0J5SWQsXG4gICAgICByb3dzOiBmaWx0ZXJlZFJvd3MsXG4gICAgICBmbGF0Um93czogZmlsdGVyZWRGbGF0Um93cyxcbiAgICAgIHJvd3NCeUlkOiBmaWx0ZXJlZFJvd3NCeUlkLFxuICAgICAgc2V0RmlsdGVyOiBzZXRGaWx0ZXIsXG4gICAgICBzZXRBbGxGaWx0ZXJzOiBzZXRBbGxGaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0R2xvYmFsRmlsdGVyID0gJ3Jlc2V0R2xvYmFsRmlsdGVyJztcbiAgYWN0aW9ucy5zZXRHbG9iYWxGaWx0ZXIgPSAnc2V0R2xvYmFsRmlsdGVyJztcbiAgdmFyIHVzZUdsb2JhbEZpbHRlciA9IGZ1bmN0aW9uIHVzZUdsb2JhbEZpbHRlcihob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDMpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkMyk7XG4gIH07XG4gIHVzZUdsb2JhbEZpbHRlci5wbHVnaW5OYW1lID0gJ3VzZUdsb2JhbEZpbHRlcic7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQzKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0R2xvYmFsRmlsdGVyKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdsb2JhbEZpbHRlcjogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmdsb2JhbEZpbHRlciB8fCB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRHbG9iYWxGaWx0ZXIpIHtcbiAgICAgIHZhciBmaWx0ZXJWYWx1ZSA9IGFjdGlvbi5maWx0ZXJWYWx1ZTtcbiAgICAgIHZhciB1c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS51c2VyRmlsdGVyVHlwZXM7XG4gICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGluc3RhbmNlLmdsb2JhbEZpbHRlciwgdXNlckZpbHRlclR5cGVzIHx8IHt9LCBmaWx0ZXJUeXBlcyk7XG4gICAgICB2YXIgbmV3RmlsdGVyID0gZnVuY3Rpb25hbFVwZGF0ZShmaWx0ZXJWYWx1ZSwgc3RhdGUuZ2xvYmFsRmlsdGVyKTsgLy9cblxuICAgICAgaWYgKHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoZmlsdGVyTWV0aG9kLmF1dG9SZW1vdmUsIG5ld0ZpbHRlcikpIHtcbiAgICAgICAgdmFyIGdsb2JhbEZpbHRlciA9IHN0YXRlLmdsb2JhbEZpbHRlcixcbiAgICAgICAgICAgIHN0YXRlV2l0aG91dEdsb2JhbEZpbHRlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHN0YXRlLCBbXCJnbG9iYWxGaWx0ZXJcIl0pO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZVdpdGhvdXRHbG9iYWxGaWx0ZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2xvYmFsRmlsdGVyOiBuZXdGaWx0ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDMoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IGluc3RhbmNlLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgdXNlckZpbHRlclR5cGVzID0gaW5zdGFuY2UuZmlsdGVyVHlwZXMsXG4gICAgICAgIGdsb2JhbEZpbHRlciA9IGluc3RhbmNlLmdsb2JhbEZpbHRlcixcbiAgICAgICAgbWFudWFsR2xvYmFsRmlsdGVyID0gaW5zdGFuY2UubWFudWFsR2xvYmFsRmlsdGVyLFxuICAgICAgICBnbG9iYWxGaWx0ZXJWYWx1ZSA9IGluc3RhbmNlLnN0YXRlLmdsb2JhbEZpbHRlcixcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEdsID0gaW5zdGFuY2UuYXV0b1Jlc2V0R2xvYmFsRmlsdGVyLFxuICAgICAgICBhdXRvUmVzZXRHbG9iYWxGaWx0ZXIgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0R2wgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0R2wsXG4gICAgICAgIGRpc2FibGVHbG9iYWxGaWx0ZXIgPSBpbnN0YW5jZS5kaXNhYmxlR2xvYmFsRmlsdGVyO1xuICAgIHZhciBzZXRHbG9iYWxGaWx0ZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZmlsdGVyVmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRHbG9iYWxGaWx0ZXIsXG4gICAgICAgIGZpbHRlclZhbHVlOiBmaWx0ZXJWYWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7IC8vIFRPRE86IENyZWF0ZSBhIGZpbHRlciBjYWNoZSBmb3IgaW5jcmVtZW50YWwgaGlnaCBzcGVlZCBtdWx0aS1maWx0ZXJpbmdcbiAgICAvLyBUaGlzIGdldHMgcHJldHR5IGNvbXBsaWNhdGVkIHByZXR0eSBmYXN0LCBzaW5jZSB5b3UgaGF2ZSB0byBtYWludGFpbiBhXG4gICAgLy8gY2FjaGUgZm9yIGVhY2ggcm93IGdyb3VwICh0b3AtbGV2ZWwgcm93cywgYW5kIGVhY2ggcm93J3MgcmVjdXJzaXZlIHN1YnJvd3MpXG4gICAgLy8gVGhpcyB3b3VsZCBtYWtlIG11bHRpLWZpbHRlcmluZyBhIGxvdCBmYXN0ZXIgdGhvdWdoLiBUb28gZmFyP1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWFudWFsR2xvYmFsRmlsdGVyIHx8IHR5cGVvZiBnbG9iYWxGaWx0ZXJWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93cywgcm93c0J5SWRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlsdGVyZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIGZpbHRlcmVkUm93c0J5SWQgPSB7fTtcbiAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoZ2xvYmFsRmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMgfHwge30sIGZpbHRlclR5cGVzKTtcblxuICAgICAgaWYgKCFmaWx0ZXJNZXRob2QpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGZpbmQgYSB2YWxpZCAnZ2xvYmFsRmlsdGVyJyBvcHRpb24uXCIpO1xuICAgICAgICByZXR1cm4gcm93cztcbiAgICAgIH1cblxuICAgICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgdmFyIGNvbHVtbkRpc2FibGVHbG9iYWxGaWx0ZXIgPSBjb2x1bW4uZGlzYWJsZUdsb2JhbEZpbHRlcjtcbiAgICAgICAgY29sdW1uLmNhbkZpbHRlciA9IGdldEZpcnN0RGVmaW5lZChjb2x1bW5EaXNhYmxlR2xvYmFsRmlsdGVyID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVHbG9iYWxGaWx0ZXIgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBmaWx0ZXJhYmxlQ29sdW1ucyA9IGFsbENvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjLmNhbkZpbHRlciA9PT0gdHJ1ZTtcbiAgICAgIH0pOyAvLyBGaWx0ZXJzIHRvcCBsZXZlbCBhbmQgbmVzdGVkIHJvd3NcblxuICAgICAgdmFyIGZpbHRlclJvd3MgPSBmdW5jdGlvbiBmaWx0ZXJSb3dzKGZpbHRlcmVkUm93cykge1xuICAgICAgICBmaWx0ZXJlZFJvd3MgPSBmaWx0ZXJNZXRob2QoZmlsdGVyZWRSb3dzLCBmaWx0ZXJhYmxlQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZDtcbiAgICAgICAgfSksIGdsb2JhbEZpbHRlclZhbHVlKTtcbiAgICAgICAgZmlsdGVyZWRSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIGZpbHRlcmVkRmxhdFJvd3MucHVzaChyb3cpO1xuICAgICAgICAgIGZpbHRlcmVkUm93c0J5SWRbcm93LmlkXSA9IHJvdztcbiAgICAgICAgICByb3cuc3ViUm93cyA9IHJvdy5zdWJSb3dzICYmIHJvdy5zdWJSb3dzLmxlbmd0aCA/IGZpbHRlclJvd3Mocm93LnN1YlJvd3MpIDogcm93LnN1YlJvd3M7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRSb3dzO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFtmaWx0ZXJSb3dzKHJvd3MpLCBmaWx0ZXJlZEZsYXRSb3dzLCBmaWx0ZXJlZFJvd3NCeUlkXTtcbiAgICB9LCBbbWFudWFsR2xvYmFsRmlsdGVyLCBnbG9iYWxGaWx0ZXJWYWx1ZSwgZ2xvYmFsRmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMsIGFsbENvbHVtbnMsIHJvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgZGlzYWJsZUdsb2JhbEZpbHRlcl0pLFxuICAgICAgICBnbG9iYWxGaWx0ZXJlZFJvd3MgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgZ2xvYmFsRmlsdGVyZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdLFxuICAgICAgICBnbG9iYWxGaWx0ZXJlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bMl07XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0R2xvYmFsRmlsdGVyID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEdsb2JhbEZpbHRlcik7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0R2xvYmFsRmlsdGVyKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRHbG9iYWxGaWx0ZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxHbG9iYWxGaWx0ZXIgPyBudWxsIDogZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZUdsb2JhbEZpbHRlcmVkUm93czogcm93cyxcbiAgICAgIHByZUdsb2JhbEZpbHRlcmVkRmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgcHJlR2xvYmFsRmlsdGVyZWRSb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICBnbG9iYWxGaWx0ZXJlZFJvd3M6IGdsb2JhbEZpbHRlcmVkUm93cyxcbiAgICAgIGdsb2JhbEZpbHRlcmVkRmxhdFJvd3M6IGdsb2JhbEZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICBnbG9iYWxGaWx0ZXJlZFJvd3NCeUlkOiBnbG9iYWxGaWx0ZXJlZFJvd3NCeUlkLFxuICAgICAgcm93czogZ2xvYmFsRmlsdGVyZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IGdsb2JhbEZpbHRlcmVkRmxhdFJvd3MsXG4gICAgICByb3dzQnlJZDogZ2xvYmFsRmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHNldEdsb2JhbEZpbHRlcjogc2V0R2xvYmFsRmlsdGVyLFxuICAgICAgZGlzYWJsZUdsb2JhbEZpbHRlcjogZGlzYWJsZUdsb2JhbEZpbHRlclxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VtKHZhbHVlcywgYWdncmVnYXRlZFZhbHVlcykge1xuICAgIC8vIEl0J3MgZmFzdGVyIHRvIGp1c3QgYWRkIHRoZSBhZ2dyZWdhdGlvbnMgdG9nZXRoZXIgaW5zdGVhZCBvZlxuICAgIC8vIHByb2Nlc3MgbGVhZiBub2RlcyBpbmRpdmlkdWFsbHlcbiAgICByZXR1cm4gYWdncmVnYXRlZFZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgbmV4dCkge1xuICAgICAgcmV0dXJuIHN1bSArICh0eXBlb2YgbmV4dCA9PT0gJ251bWJlcicgPyBuZXh0IDogMCk7XG4gICAgfSwgMCk7XG4gIH1cbiAgZnVuY3Rpb24gbWluKHZhbHVlcykge1xuICAgIHZhciBtaW4gPSB2YWx1ZXNbMF0gfHwgMDtcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgZnVuY3Rpb24gbWF4KHZhbHVlcykge1xuICAgIHZhciBtYXggPSB2YWx1ZXNbMF0gfHwgMDtcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgZnVuY3Rpb24gbWluTWF4KHZhbHVlcykge1xuICAgIHZhciBtaW4gPSB2YWx1ZXNbMF0gfHwgMDtcbiAgICB2YXIgbWF4ID0gdmFsdWVzWzBdIHx8IDA7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKTtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbiArIFwiLi5cIiArIG1heDtcbiAgfVxuICBmdW5jdGlvbiBhdmVyYWdlKHZhbHVlcykge1xuICAgIHJldHVybiBzdW0obnVsbCwgdmFsdWVzKSAvIHZhbHVlcy5sZW5ndGg7XG4gIH1cbiAgZnVuY3Rpb24gbWVkaWFuKHZhbHVlcykge1xuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1pZCA9IE1hdGguZmxvb3IodmFsdWVzLmxlbmd0aCAvIDIpO1xuICAgIHZhciBudW1zID0gW10uY29uY2F0KHZhbHVlcykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoICUgMiAhPT0gMCA/IG51bXNbbWlkXSA6IChudW1zW21pZCAtIDFdICsgbnVtc1ttaWRdKSAvIDI7XG4gIH1cbiAgZnVuY3Rpb24gdW5pcXVlKHZhbHVlcykge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodmFsdWVzKS52YWx1ZXMoKSk7XG4gIH1cbiAgZnVuY3Rpb24gdW5pcXVlQ291bnQodmFsdWVzKSB7XG4gICAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKS5zaXplO1xuICB9XG4gIGZ1bmN0aW9uIGNvdW50KHZhbHVlcykge1xuICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoO1xuICB9XG5cbiAgdmFyIGFnZ3JlZ2F0aW9ucyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgc3VtOiBzdW0sXG4gICAgbWluOiBtaW4sXG4gICAgbWF4OiBtYXgsXG4gICAgbWluTWF4OiBtaW5NYXgsXG4gICAgYXZlcmFnZTogYXZlcmFnZSxcbiAgICBtZWRpYW46IG1lZGlhbixcbiAgICB1bmlxdWU6IHVuaXF1ZSxcbiAgICB1bmlxdWVDb3VudDogdW5pcXVlQ291bnQsXG4gICAgY291bnQ6IGNvdW50XG4gIH0pO1xuXG4gIHZhciBlbXB0eUFycmF5ID0gW107XG4gIHZhciBlbXB0eU9iamVjdCA9IHt9OyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5yZXNldEdyb3VwQnkgPSAncmVzZXRHcm91cEJ5JztcbiAgYWN0aW9ucy5zZXRHcm91cEJ5ID0gJ3NldEdyb3VwQnknO1xuICBhY3Rpb25zLnRvZ2dsZUdyb3VwQnkgPSAndG9nZ2xlR3JvdXBCeSc7XG4gIHZhciB1c2VHcm91cEJ5ID0gZnVuY3Rpb24gdXNlR3JvdXBCeShob29rcykge1xuICAgIGhvb2tzLmdldEdyb3VwQnlUb2dnbGVQcm9wcyA9IFtkZWZhdWx0R2V0R3JvdXBCeVRvZ2dsZVByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ0KTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1uc0RlcHMucHVzaChmdW5jdGlvbiAoZGVwcywgX3JlZikge1xuICAgICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW2luc3RhbmNlLnN0YXRlLmdyb3VwQnldKTtcbiAgICB9KTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKHZpc2libGVDb2x1bW5zKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDQpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDEpO1xuICB9O1xuICB1c2VHcm91cEJ5LnBsdWdpbk5hbWUgPSAndXNlR3JvdXBCeSc7XG5cbiAgdmFyIGRlZmF1bHRHZXRHcm91cEJ5VG9nZ2xlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0R3JvdXBCeVRvZ2dsZVByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBoZWFkZXIgPSBfcmVmMi5oZWFkZXI7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogaGVhZGVyLmNhbkdyb3VwQnkgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgaGVhZGVyLnRvZ2dsZUdyb3VwQnkoKTtcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6IGhlYWRlci5jYW5Hcm91cEJ5ID8gJ3BvaW50ZXInIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgdGl0bGU6ICdUb2dnbGUgR3JvdXBCeSdcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ0KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGdyb3VwQnk6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0R3JvdXBCeSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncm91cEJ5OiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZ3JvdXBCeSB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEdyb3VwQnkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ3JvdXBCeTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVHcm91cEJ5KSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgc2V0R3JvdXBCeSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciByZXNvbHZlZEdyb3VwQnkgPSB0eXBlb2Ygc2V0R3JvdXBCeSAhPT0gJ3VuZGVmaW5lZCcgPyBzZXRHcm91cEJ5IDogIXN0YXRlLmdyb3VwQnkuaW5jbHVkZXMoY29sdW1uSWQpO1xuXG4gICAgICBpZiAocmVzb2x2ZWRHcm91cEJ5KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBncm91cEJ5OiBbXS5jb25jYXQoc3RhdGUuZ3JvdXBCeSwgW2NvbHVtbklkXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ3JvdXBCeTogc3RhdGUuZ3JvdXBCeS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZCAhPT0gY29sdW1uSWQ7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2aXNpYmxlQ29sdW1ucyhjb2x1bW5zLCBfcmVmMykge1xuICAgIHZhciBncm91cEJ5ID0gX3JlZjMuaW5zdGFuY2Uuc3RhdGUuZ3JvdXBCeTtcbiAgICAvLyBTb3J0IGdyb3VwZWQgY29sdW1ucyB0byB0aGUgc3RhcnQgb2YgdGhlIGNvbHVtbiBsaXN0XG4gICAgLy8gYmVmb3JlIHRoZSBoZWFkZXJzIGFyZSBidWlsdFxuICAgIHZhciBncm91cEJ5Q29sdW1ucyA9IGdyb3VwQnkubWFwKGZ1bmN0aW9uIChnKSB7XG4gICAgICByZXR1cm4gY29sdW1ucy5maW5kKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgcmV0dXJuIGNvbC5pZCA9PT0gZztcbiAgICAgIH0pO1xuICAgIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICB2YXIgbm9uR3JvdXBCeUNvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sKSB7XG4gICAgICByZXR1cm4gIWdyb3VwQnkuaW5jbHVkZXMoY29sLmlkKTtcbiAgICB9KTtcbiAgICBjb2x1bW5zID0gW10uY29uY2F0KGdyb3VwQnlDb2x1bW5zLCBub25Hcm91cEJ5Q29sdW1ucyk7XG4gICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi5pc0dyb3VwZWQgPSBncm91cEJ5LmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgICBjb2x1bW4uZ3JvdXBlZEluZGV4ID0gZ3JvdXBCeS5pbmRleE9mKGNvbHVtbi5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICB2YXIgZGVmYXVsdFVzZXJBZ2dyZWdhdGlvbnMgPSB7fTtcblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ0KGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIGZsYXRIZWFkZXJzID0gaW5zdGFuY2UuZmxhdEhlYWRlcnMsXG4gICAgICAgIF9pbnN0YW5jZSRncm91cEJ5Rm4gPSBpbnN0YW5jZS5ncm91cEJ5Rm4sXG4gICAgICAgIGdyb3VwQnlGbiA9IF9pbnN0YW5jZSRncm91cEJ5Rm4gPT09IHZvaWQgMCA/IGRlZmF1bHRHcm91cEJ5Rm4gOiBfaW5zdGFuY2UkZ3JvdXBCeUZuLFxuICAgICAgICBtYW51YWxHcm91cEJ5ID0gaW5zdGFuY2UubWFudWFsR3JvdXBCeSxcbiAgICAgICAgX2luc3RhbmNlJGFnZ3JlZ2F0aW9uID0gaW5zdGFuY2UuYWdncmVnYXRpb25zLFxuICAgICAgICB1c2VyQWdncmVnYXRpb25zID0gX2luc3RhbmNlJGFnZ3JlZ2F0aW9uID09PSB2b2lkIDAgPyBkZWZhdWx0VXNlckFnZ3JlZ2F0aW9ucyA6IF9pbnN0YW5jZSRhZ2dyZWdhdGlvbixcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGdyb3VwQnkgPSBpbnN0YW5jZS5zdGF0ZS5ncm91cEJ5LFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0R3IgPSBpbnN0YW5jZS5hdXRvUmVzZXRHcm91cEJ5LFxuICAgICAgICBhdXRvUmVzZXRHcm91cEJ5ID0gX2luc3RhbmNlJGF1dG9SZXNldEdyID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEdyLFxuICAgICAgICBkaXNhYmxlR3JvdXBCeSA9IGluc3RhbmNlLmRpc2FibGVHcm91cEJ5LFxuICAgICAgICBkZWZhdWx0Q2FuR3JvdXBCeSA9IGluc3RhbmNlLmRlZmF1bHRDYW5Hcm91cEJ5LFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlQ29sdW1uT3JkZXInLCAndXNlRmlsdGVycyddLCAndXNlR3JvdXBCeScpO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIHZhciBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgICBkZWZhdWx0Q29sdW1uR3JvdXBCeSA9IGNvbHVtbi5kZWZhdWx0R3JvdXBCeSxcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlR3JvdXBCeSA9IGNvbHVtbi5kaXNhYmxlR3JvdXBCeTtcbiAgICAgIGNvbHVtbi5jYW5Hcm91cEJ5ID0gYWNjZXNzb3IgPyBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhbkdyb3VwQnksIGNvbHVtbkRpc2FibGVHcm91cEJ5ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVHcm91cEJ5ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpIDogZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5jYW5Hcm91cEJ5LCBkZWZhdWx0Q29sdW1uR3JvdXBCeSwgZGVmYXVsdENhbkdyb3VwQnksIGZhbHNlKTtcblxuICAgICAgaWYgKGNvbHVtbi5jYW5Hcm91cEJ5KSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVHcm91cEJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS50b2dnbGVHcm91cEJ5KGNvbHVtbi5pZCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi5BZ2dyZWdhdGVkID0gY29sdW1uLkFnZ3JlZ2F0ZWQgfHwgY29sdW1uLkNlbGw7XG4gICAgfSk7XG4gICAgdmFyIHRvZ2dsZUdyb3VwQnkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIHZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlR3JvdXBCeSxcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBzZXRHcm91cEJ5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0R3JvdXBCeSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIGhlYWRlci5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEdyb3VwQnlUb2dnbGVQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobWFudWFsR3JvdXBCeSB8fCAhZ3JvdXBCeS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93cywgcm93c0J5SWQsIGVtcHR5QXJyYXksIGVtcHR5T2JqZWN0LCBmbGF0Um93cywgcm93c0J5SWRdO1xuICAgICAgfSAvLyBFbnN1cmUgdGhhdCB0aGUgbGlzdCBvZiBmaWx0ZXJlZCBjb2x1bW5zIGV4aXN0XG5cblxuICAgICAgdmFyIGV4aXN0aW5nR3JvdXBCeSA9IGdyb3VwQnkuZmlsdGVyKGZ1bmN0aW9uIChnKSB7XG4gICAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHJldHVybiBjb2wuaWQgPT09IGc7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIEZpbmQgdGhlIGNvbHVtbnMgdGhhdCBjYW4gb3IgYXJlIGFnZ3JlZ2F0aW5nXG4gICAgICAvLyBVc2VzIGVhY2ggY29sdW1uIHRvIGFnZ3JlZ2F0ZSByb3dzIGludG8gYSBzaW5nbGUgdmFsdWVcblxuICAgICAgdmFyIGFnZ3JlZ2F0ZVJvd3NUb1ZhbHVlcyA9IGZ1bmN0aW9uIGFnZ3JlZ2F0ZVJvd3NUb1ZhbHVlcyhsZWFmUm93cywgZ3JvdXBlZFJvd3MsIGRlcHRoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAvLyBEb24ndCBhZ2dyZWdhdGUgY29sdW1ucyB0aGF0IGFyZSBpbiB0aGUgZ3JvdXBCeVxuICAgICAgICAgIGlmIChleGlzdGluZ0dyb3VwQnkuaW5jbHVkZXMoY29sdW1uLmlkKSkge1xuICAgICAgICAgICAgdmFsdWVzW2NvbHVtbi5pZF0gPSBncm91cGVkUm93c1swXSA/IGdyb3VwZWRSb3dzWzBdLnZhbHVlc1tjb2x1bW4uaWRdIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIEFnZ3JlZ2F0ZSB0aGUgdmFsdWVzXG5cblxuICAgICAgICAgIHZhciBhZ2dyZWdhdGVGbiA9IHR5cGVvZiBjb2x1bW4uYWdncmVnYXRlID09PSAnZnVuY3Rpb24nID8gY29sdW1uLmFnZ3JlZ2F0ZSA6IHVzZXJBZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZV0gfHwgYWdncmVnYXRpb25zW2NvbHVtbi5hZ2dyZWdhdGVdO1xuXG4gICAgICAgICAgaWYgKGFnZ3JlZ2F0ZUZuKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGNvbHVtblZhbHVlcyB0byBhZ2dyZWdhdGVcbiAgICAgICAgICAgIHZhciBncm91cGVkVmFsdWVzID0gZ3JvdXBlZFJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJvdy52YWx1ZXNbY29sdW1uLmlkXTtcbiAgICAgICAgICAgIH0pOyAvLyBHZXQgdGhlIGNvbHVtblZhbHVlcyB0byBhZ2dyZWdhdGVcblxuICAgICAgICAgICAgdmFyIGxlYWZWYWx1ZXMgPSBsZWFmUm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICB2YXIgY29sdW1uVmFsdWUgPSByb3cudmFsdWVzW2NvbHVtbi5pZF07XG5cbiAgICAgICAgICAgICAgaWYgKCFkZXB0aCAmJiBjb2x1bW4uYWdncmVnYXRlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWdncmVnYXRlVmFsdWVGbiA9IHR5cGVvZiBjb2x1bW4uYWdncmVnYXRlVmFsdWUgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uYWdncmVnYXRlVmFsdWUgOiB1c2VyQWdncmVnYXRpb25zW2NvbHVtbi5hZ2dyZWdhdGVWYWx1ZV0gfHwgYWdncmVnYXRpb25zW2NvbHVtbi5hZ2dyZWdhdGVWYWx1ZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWFnZ3JlZ2F0ZVZhbHVlRm4pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0IFRhYmxlOiBJbnZhbGlkIGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSBvcHRpb24gZm9yIGNvbHVtbiBsaXN0ZWQgYWJvdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSBhZ2dyZWdhdGVWYWx1ZUZuKGNvbHVtblZhbHVlLCByb3csIGNvbHVtbik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhbHVlc1tjb2x1bW4uaWRdID0gYWdncmVnYXRlRm4obGVhZlZhbHVlcywgZ3JvdXBlZFZhbHVlcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4uYWdncmVnYXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oe1xuICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdCBUYWJsZTogSW52YWxpZCBjb2x1bW4uYWdncmVnYXRlIG9wdGlvbiBmb3IgY29sdW1uIGxpc3RlZCBhYm92ZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzW2NvbHVtbi5pZF0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZ3JvdXBlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgZ3JvdXBlZFJvd3NCeUlkID0ge307XG4gICAgICB2YXIgb25seUdyb3VwZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIG9ubHlHcm91cGVkUm93c0J5SWQgPSB7fTtcbiAgICAgIHZhciBub25Hcm91cGVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBub25Hcm91cGVkUm93c0J5SWQgPSB7fTsgLy8gUmVjdXJzaXZlbHkgZ3JvdXAgdGhlIGRhdGFcblxuICAgICAgdmFyIGdyb3VwVXBSZWN1cnNpdmVseSA9IGZ1bmN0aW9uIGdyb3VwVXBSZWN1cnNpdmVseShyb3dzLCBkZXB0aCwgcGFyZW50SWQpIHtcbiAgICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBsYXN0IGxldmVsLCBqdXN0IHJldHVybiB0aGUgcm93c1xuICAgICAgICBpZiAoZGVwdGggPT09IGV4aXN0aW5nR3JvdXBCeS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gcm93cztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb2x1bW5JZCA9IGV4aXN0aW5nR3JvdXBCeVtkZXB0aF07IC8vIEdyb3VwIHRoZSByb3dzIHRvZ2V0aGVyIGZvciB0aGlzIGxldmVsXG5cbiAgICAgICAgdmFyIHJvd0dyb3Vwc01hcCA9IGdyb3VwQnlGbihyb3dzLCBjb2x1bW5JZCk7IC8vIFBlZm9ybSBhZ2dyZWdhdGlvbnMgZm9yIGVhY2ggZ3JvdXBcblxuICAgICAgICB2YXIgYWdncmVnYXRlZEdyb3VwZWRSb3dzID0gT2JqZWN0LmVudHJpZXMocm93R3JvdXBzTWFwKS5tYXAoZnVuY3Rpb24gKF9yZWY0LCBpbmRleCkge1xuICAgICAgICAgIHZhciBncm91cEJ5VmFsID0gX3JlZjRbMF0sXG4gICAgICAgICAgICAgIGdyb3VwZWRSb3dzID0gX3JlZjRbMV07XG4gICAgICAgICAgdmFyIGlkID0gY29sdW1uSWQgKyBcIjpcIiArIGdyb3VwQnlWYWw7XG4gICAgICAgICAgaWQgPSBwYXJlbnRJZCA/IHBhcmVudElkICsgXCI+XCIgKyBpZCA6IGlkOyAvLyBGaXJzdCwgUmVjdXJzZSB0byBncm91cCBzdWIgcm93cyBiZWZvcmUgYWdncmVnYXRpb25cblxuICAgICAgICAgIHZhciBzdWJSb3dzID0gZ3JvdXBVcFJlY3Vyc2l2ZWx5KGdyb3VwZWRSb3dzLCBkZXB0aCArIDEsIGlkKTsgLy8gRmxhdHRlbiB0aGUgbGVhZiByb3dzIG9mIHRoZSByb3dzIGluIHRoaXMgZ3JvdXBcblxuICAgICAgICAgIHZhciBsZWFmUm93cyA9IGRlcHRoID8gZmxhdHRlbkJ5KGdyb3VwZWRSb3dzLCAnbGVhZlJvd3MnKSA6IGdyb3VwZWRSb3dzO1xuICAgICAgICAgIHZhciB2YWx1ZXMgPSBhZ2dyZWdhdGVSb3dzVG9WYWx1ZXMobGVhZlJvd3MsIGdyb3VwZWRSb3dzLCBkZXB0aCk7XG4gICAgICAgICAgdmFyIHJvdyA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGlzR3JvdXBlZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyb3VwQnlJRDogY29sdW1uSWQsXG4gICAgICAgICAgICBncm91cEJ5VmFsOiBncm91cEJ5VmFsLFxuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgICBzdWJSb3dzOiBzdWJSb3dzLFxuICAgICAgICAgICAgbGVhZlJvd3M6IGxlYWZSb3dzLFxuICAgICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHN1YlJvdykge1xuICAgICAgICAgICAgZ3JvdXBlZEZsYXRSb3dzLnB1c2goc3ViUm93KTtcbiAgICAgICAgICAgIGdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuXG4gICAgICAgICAgICBpZiAoc3ViUm93LmlzR3JvdXBlZCkge1xuICAgICAgICAgICAgICBvbmx5R3JvdXBlZEZsYXRSb3dzLnB1c2goc3ViUm93KTtcbiAgICAgICAgICAgICAgb25seUdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9uR3JvdXBlZEZsYXRSb3dzLnB1c2goc3ViUm93KTtcbiAgICAgICAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhZ2dyZWdhdGVkR3JvdXBlZFJvd3M7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZ3JvdXBlZFJvd3MgPSBncm91cFVwUmVjdXJzaXZlbHkocm93cyk7XG4gICAgICBncm91cGVkUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJSb3cpIHtcbiAgICAgICAgZ3JvdXBlZEZsYXRSb3dzLnB1c2goc3ViUm93KTtcbiAgICAgICAgZ3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG5cbiAgICAgICAgaWYgKHN1YlJvdy5pc0dyb3VwZWQpIHtcbiAgICAgICAgICBvbmx5R3JvdXBlZEZsYXRSb3dzLnB1c2goc3ViUm93KTtcbiAgICAgICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uR3JvdXBlZEZsYXRSb3dzLnB1c2goc3ViUm93KTtcbiAgICAgICAgICBub25Hcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIEFzc2lnbiB0aGUgbmV3IGRhdGFcblxuICAgICAgcmV0dXJuIFtncm91cGVkUm93cywgZ3JvdXBlZEZsYXRSb3dzLCBncm91cGVkUm93c0J5SWQsIG9ubHlHcm91cGVkRmxhdFJvd3MsIG9ubHlHcm91cGVkUm93c0J5SWQsIG5vbkdyb3VwZWRGbGF0Um93cywgbm9uR3JvdXBlZFJvd3NCeUlkXTtcbiAgICB9LCBbbWFudWFsR3JvdXBCeSwgZ3JvdXBCeSwgcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBhbGxDb2x1bW5zLCB1c2VyQWdncmVnYXRpb25zLCBncm91cEJ5Rm5dKSxcbiAgICAgICAgZ3JvdXBlZFJvd3MgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgZ3JvdXBlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV0sXG4gICAgICAgIGdyb3VwZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzJdLFxuICAgICAgICBvbmx5R3JvdXBlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bM10sXG4gICAgICAgIG9ubHlHcm91cGVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1s0XSxcbiAgICAgICAgbm9uR3JvdXBlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bNV0sXG4gICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzZdO1xuXG4gICAgdmFyIGdldEF1dG9SZXNldEdyb3VwQnkgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0R3JvdXBCeSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0R3JvdXBCeSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0R3JvdXBCeVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbnVhbEdyb3VwQnkgPyBudWxsIDogZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZUdyb3VwZWRSb3dzOiByb3dzLFxuICAgICAgcHJlR3JvdXBlZEZsYXRSb3c6IGZsYXRSb3dzLFxuICAgICAgcHJlR3JvdXBlZFJvd3NCeUlkOiByb3dzQnlJZCxcbiAgICAgIGdyb3VwZWRSb3dzOiBncm91cGVkUm93cyxcbiAgICAgIGdyb3VwZWRGbGF0Um93czogZ3JvdXBlZEZsYXRSb3dzLFxuICAgICAgZ3JvdXBlZFJvd3NCeUlkOiBncm91cGVkUm93c0J5SWQsXG4gICAgICBvbmx5R3JvdXBlZEZsYXRSb3dzOiBvbmx5R3JvdXBlZEZsYXRSb3dzLFxuICAgICAgb25seUdyb3VwZWRSb3dzQnlJZDogb25seUdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIG5vbkdyb3VwZWRGbGF0Um93czogbm9uR3JvdXBlZEZsYXRSb3dzLFxuICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkOiBub25Hcm91cGVkUm93c0J5SWQsXG4gICAgICByb3dzOiBncm91cGVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBncm91cGVkRmxhdFJvd3MsXG4gICAgICByb3dzQnlJZDogZ3JvdXBlZFJvd3NCeUlkLFxuICAgICAgdG9nZ2xlR3JvdXBCeTogdG9nZ2xlR3JvdXBCeSxcbiAgICAgIHNldEdyb3VwQnk6IHNldEdyb3VwQnlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMShyb3cpIHtcbiAgICByb3cuYWxsQ2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgdmFyIF9yb3ckc3ViUm93cztcblxuICAgICAgLy8gR3JvdXBlZCBjZWxscyBhcmUgaW4gdGhlIGdyb3VwQnkgYW5kIHRoZSBwaXZvdCBjZWxsIGZvciB0aGUgcm93XG4gICAgICBjZWxsLmlzR3JvdXBlZCA9IGNlbGwuY29sdW1uLmlzR3JvdXBlZCAmJiBjZWxsLmNvbHVtbi5pZCA9PT0gcm93Lmdyb3VwQnlJRDsgLy8gUGxhY2Vob2xkZXIgY2VsbHMgYXJlIGFueSBjb2x1bW5zIGluIHRoZSBncm91cEJ5IHRoYXQgYXJlIG5vdCBncm91cGVkXG5cbiAgICAgIGNlbGwuaXNQbGFjZWhvbGRlciA9ICFjZWxsLmlzR3JvdXBlZCAmJiBjZWxsLmNvbHVtbi5pc0dyb3VwZWQ7IC8vIEFnZ3JlZ2F0ZWQgY2VsbHMgYXJlIG5vdCBncm91cGVkLCBub3QgcmVwZWF0ZWQsIGJ1dCBzdGlsbCBoYXZlIHN1YlJvd3NcblxuICAgICAgY2VsbC5pc0FnZ3JlZ2F0ZWQgPSAhY2VsbC5pc0dyb3VwZWQgJiYgIWNlbGwuaXNQbGFjZWhvbGRlciAmJiAoKF9yb3ckc3ViUm93cyA9IHJvdy5zdWJSb3dzKSA9PSBudWxsID8gdm9pZCAwIDogX3JvdyRzdWJSb3dzLmxlbmd0aCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0R3JvdXBCeUZuKHJvd3MsIGNvbHVtbklkKSB7XG4gICAgcmV0dXJuIHJvd3MucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCByb3csIGkpIHtcbiAgICAgIC8vIFRPRE86IE1pZ2h0IHdhbnQgdG8gaW1wbGVtZW50IGEga2V5IHNlcmlhbGl6ZXIgaGVyZSBzb1xuICAgICAgLy8gaXJyZWd1bGFyIGNvbHVtbiB2YWx1ZXMgY2FuIHN0aWxsIGJlIGdyb3VwZWQgaWYgbmVlZGVkP1xuICAgICAgdmFyIHJlc0tleSA9IFwiXCIgKyByb3cudmFsdWVzW2NvbHVtbklkXTtcbiAgICAgIHByZXZbcmVzS2V5XSA9IEFycmF5LmlzQXJyYXkocHJldltyZXNLZXldKSA/IHByZXZbcmVzS2V5XSA6IFtdO1xuICAgICAgcHJldltyZXNLZXldLnB1c2gocm93KTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHZhciByZVNwbGl0QWxwaGFOdW1lcmljID0gLyhbMC05XSspL2dtOyAvLyBNaXhlZCBzb3J0aW5nIGlzIHNsb3csIGJ1dCB2ZXJ5IGluY2x1c2l2ZSBvZiBtYW55IGVkZ2UgY2FzZXMuXG4gIC8vIEl0IGhhbmRsZXMgbnVtYmVycywgbWl4ZWQgYWxwaGFudW1lcmljIGNvbWJpbmF0aW9ucywgYW5kIGV2ZW5cbiAgLy8gbnVsbCwgdW5kZWZpbmVkLCBhbmQgSW5maW5pdHlcblxuICB2YXIgYWxwaGFudW1lcmljID0gZnVuY3Rpb24gYWxwaGFudW1lcmljKHJvd0EsIHJvd0IsIGNvbHVtbklkKSB7XG4gICAgdmFyIF9nZXRSb3dWYWx1ZXNCeUNvbHVtbiA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uWzBdLFxuICAgICAgICBiID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uWzFdOyAvLyBGb3JjZSB0byBzdHJpbmdzIChvciBcIlwiIGZvciB1bnN1cHBvcnRlZCB0eXBlcylcblxuXG4gICAgYSA9IHRvU3RyaW5nKGEpO1xuICAgIGIgPSB0b1N0cmluZyhiKTsgLy8gU3BsaXQgb24gbnVtYmVyIGdyb3VwcywgYnV0IGtlZXAgdGhlIGRlbGltaXRlclxuICAgIC8vIFRoZW4gcmVtb3ZlIGZhbHNleSBzcGxpdCB2YWx1ZXNcblxuICAgIGEgPSBhLnNwbGl0KHJlU3BsaXRBbHBoYU51bWVyaWMpLmZpbHRlcihCb29sZWFuKTtcbiAgICBiID0gYi5zcGxpdChyZVNwbGl0QWxwaGFOdW1lcmljKS5maWx0ZXIoQm9vbGVhbik7IC8vIFdoaWxlXG5cbiAgICB3aGlsZSAoYS5sZW5ndGggJiYgYi5sZW5ndGgpIHtcbiAgICAgIHZhciBhYSA9IGEuc2hpZnQoKTtcbiAgICAgIHZhciBiYiA9IGIuc2hpZnQoKTtcbiAgICAgIHZhciBhbiA9IHBhcnNlSW50KGFhLCAxMCk7XG4gICAgICB2YXIgYm4gPSBwYXJzZUludChiYiwgMTApO1xuICAgICAgdmFyIGNvbWJvID0gW2FuLCBibl0uc29ydCgpOyAvLyBCb3RoIGFyZSBzdHJpbmdcblxuICAgICAgaWYgKGlzTmFOKGNvbWJvWzBdKSkge1xuICAgICAgICBpZiAoYWEgPiBiYikge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJiID4gYWEpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gT25lIGlzIGEgc3RyaW5nLCBvbmUgaXMgYSBudW1iZXJcblxuXG4gICAgICBpZiAoaXNOYU4oY29tYm9bMV0pKSB7XG4gICAgICAgIHJldHVybiBpc05hTihhbikgPyAtMSA6IDE7XG4gICAgICB9IC8vIEJvdGggYXJlIG51bWJlcnNcblxuXG4gICAgICBpZiAoYW4gPiBibikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJuID4gYW4pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICB9O1xuICBmdW5jdGlvbiBkYXRldGltZShyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBfZ2V0Um93VmFsdWVzQnlDb2x1bW4yID0gZ2V0Um93VmFsdWVzQnlDb2x1bW5JRChyb3dBLCByb3dCLCBjb2x1bW5JZCksXG4gICAgICAgIGEgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW4yWzBdLFxuICAgICAgICBiID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uMlsxXTtcblxuICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGNvbXBhcmVCYXNpYyhhLCBiKTtcbiAgfVxuICBmdW5jdGlvbiBiYXNpYyhyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBfZ2V0Um93VmFsdWVzQnlDb2x1bW4zID0gZ2V0Um93VmFsdWVzQnlDb2x1bW5JRChyb3dBLCByb3dCLCBjb2x1bW5JZCksXG4gICAgICAgIGEgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW4zWzBdLFxuICAgICAgICBiID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uM1sxXTtcblxuICAgIHJldHVybiBjb21wYXJlQmFzaWMoYSwgYik7XG4gIH1cbiAgZnVuY3Rpb24gc3RyaW5nKHJvd0EsIHJvd0IsIGNvbHVtbklkKSB7XG4gICAgdmFyIF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjQgPSBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvd0EsIHJvd0IsIGNvbHVtbklkKSxcbiAgICAgICAgYSA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjRbMF0sXG4gICAgICAgIGIgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW40WzFdO1xuXG4gICAgYSA9IGEuc3BsaXQoJycpLmZpbHRlcihCb29sZWFuKTtcbiAgICBiID0gYi5zcGxpdCgnJykuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgd2hpbGUgKGEubGVuZ3RoICYmIGIubGVuZ3RoKSB7XG4gICAgICB2YXIgYWEgPSBhLnNoaWZ0KCk7XG4gICAgICB2YXIgYmIgPSBiLnNoaWZ0KCk7XG4gICAgICB2YXIgYWxvd2VyID0gYWEudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBibG93ZXIgPSBiYi50b0xvd2VyQ2FzZSgpOyAvLyBDYXNlIGluc2Vuc2l0aXZlIGNvbXBhcmlzb24gdW50aWwgY2hhcmFjdGVycyBtYXRjaFxuXG4gICAgICBpZiAoYWxvd2VyID4gYmxvd2VyKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoYmxvd2VyID4gYWxvd2VyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gLy8gSWYgbG93ZXJjYXNlIGNoYXJhY3RlcnMgYXJlIGlkZW50aWNhbFxuXG5cbiAgICAgIGlmIChhYSA+IGJiKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoYmIgPiBhYSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIG51bWJlcihyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBfZ2V0Um93VmFsdWVzQnlDb2x1bW41ID0gZ2V0Um93VmFsdWVzQnlDb2x1bW5JRChyb3dBLCByb3dCLCBjb2x1bW5JZCksXG4gICAgICAgIGEgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW41WzBdLFxuICAgICAgICBiID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uNVsxXTtcblxuICAgIHZhciByZXBsYWNlTm9uTnVtZXJpYyA9IC9bXjAtOS5dL2dpO1xuICAgIGEgPSBOdW1iZXIoU3RyaW5nKGEpLnJlcGxhY2UocmVwbGFjZU5vbk51bWVyaWMsICcnKSk7XG4gICAgYiA9IE51bWJlcihTdHJpbmcoYikucmVwbGFjZShyZXBsYWNlTm9uTnVtZXJpYywgJycpKTtcbiAgICByZXR1cm4gY29tcGFyZUJhc2ljKGEsIGIpO1xuICB9IC8vIFV0aWxzXG5cbiAgZnVuY3Rpb24gY29tcGFyZUJhc2ljKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93MSwgcm93MiwgY29sdW1uSWQpIHtcbiAgICByZXR1cm4gW3JvdzEudmFsdWVzW2NvbHVtbklkXSwgcm93Mi52YWx1ZXNbY29sdW1uSWRdXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvU3RyaW5nKGEpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoaXNOYU4oYSkgfHwgYSA9PT0gSW5maW5pdHkgfHwgYSA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFN0cmluZyhhKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgc29ydFR5cGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhbHBoYW51bWVyaWM6IGFscGhhbnVtZXJpYyxcbiAgICBkYXRldGltZTogZGF0ZXRpbWUsXG4gICAgYmFzaWM6IGJhc2ljLFxuICAgIHN0cmluZzogc3RyaW5nLFxuICAgIG51bWJlcjogbnVtYmVyXG4gIH0pO1xuXG4gIGFjdGlvbnMucmVzZXRTb3J0QnkgPSAncmVzZXRTb3J0QnknO1xuICBhY3Rpb25zLnNldFNvcnRCeSA9ICdzZXRTb3J0QnknO1xuICBhY3Rpb25zLnRvZ2dsZVNvcnRCeSA9ICd0b2dnbGVTb3J0QnknO1xuICBhY3Rpb25zLmNsZWFyU29ydEJ5ID0gJ2NsZWFyU29ydEJ5JztcbiAgZGVmYXVsdENvbHVtbi5zb3J0VHlwZSA9ICdhbHBoYW51bWVyaWMnO1xuICBkZWZhdWx0Q29sdW1uLnNvcnREZXNjRmlyc3QgPSBmYWxzZTtcbiAgdmFyIHVzZVNvcnRCeSA9IGZ1bmN0aW9uIHVzZVNvcnRCeShob29rcykge1xuICAgIGhvb2tzLmdldFNvcnRCeVRvZ2dsZVByb3BzID0gW2RlZmF1bHRHZXRTb3J0QnlUb2dnbGVQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkNSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ1KTtcbiAgfTtcbiAgdXNlU29ydEJ5LnBsdWdpbk5hbWUgPSAndXNlU29ydEJ5JztcblxuICB2YXIgZGVmYXVsdEdldFNvcnRCeVRvZ2dsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFNvcnRCeVRvZ2dsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgY29sdW1uID0gX3JlZi5jb2x1bW47XG4gICAgdmFyIF9pbnN0YW5jZSRpc011bHRpU29ydCA9IGluc3RhbmNlLmlzTXVsdGlTb3J0RXZlbnQsXG4gICAgICAgIGlzTXVsdGlTb3J0RXZlbnQgPSBfaW5zdGFuY2UkaXNNdWx0aVNvcnQgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5zaGlmdEtleTtcbiAgICB9IDogX2luc3RhbmNlJGlzTXVsdGlTb3J0O1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGNvbHVtbi5jYW5Tb3J0ID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIGNvbHVtbi50b2dnbGVTb3J0QnkodW5kZWZpbmVkLCAhaW5zdGFuY2UuZGlzYWJsZU11bHRpU29ydCAmJiBpc011bHRpU29ydEV2ZW50KGUpKTtcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6IGNvbHVtbi5jYW5Tb3J0ID8gJ3BvaW50ZXInIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgdGl0bGU6IGNvbHVtbi5jYW5Tb3J0ID8gJ1RvZ2dsZSBTb3J0QnknIDogdW5kZWZpbmVkXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBzb3J0Qnk6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0U29ydEJ5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNvcnRCeTogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnNvcnRCeSB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmNsZWFyU29ydEJ5KSB7XG4gICAgICB2YXIgc29ydEJ5ID0gc3RhdGUuc29ydEJ5O1xuICAgICAgdmFyIG5ld1NvcnRCeSA9IHNvcnRCeS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgIT09IGFjdGlvbi5jb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IG5ld1NvcnRCeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldFNvcnRCeSkge1xuICAgICAgdmFyIF9zb3J0QnkgPSBhY3Rpb24uc29ydEJ5O1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IF9zb3J0QnlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVTb3J0QnkpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBkZXNjID0gYWN0aW9uLmRlc2MsXG4gICAgICAgICAgbXVsdGkgPSBhY3Rpb24ubXVsdGk7XG4gICAgICB2YXIgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgICAgZGlzYWJsZU11bHRpU29ydCA9IGluc3RhbmNlLmRpc2FibGVNdWx0aVNvcnQsXG4gICAgICAgICAgZGlzYWJsZVNvcnRSZW1vdmUgPSBpbnN0YW5jZS5kaXNhYmxlU29ydFJlbW92ZSxcbiAgICAgICAgICBkaXNhYmxlTXVsdGlSZW1vdmUgPSBpbnN0YW5jZS5kaXNhYmxlTXVsdGlSZW1vdmUsXG4gICAgICAgICAgX2luc3RhbmNlJG1heE11bHRpU29yID0gaW5zdGFuY2UubWF4TXVsdGlTb3J0Q29sQ291bnQsXG4gICAgICAgICAgbWF4TXVsdGlTb3J0Q29sQ291bnQgPSBfaW5zdGFuY2UkbWF4TXVsdGlTb3IgPT09IHZvaWQgMCA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogX2luc3RhbmNlJG1heE11bHRpU29yO1xuICAgICAgdmFyIF9zb3J0QnkyID0gc3RhdGUuc29ydEJ5OyAvLyBGaW5kIHRoZSBjb2x1bW4gZm9yIHRoaXMgY29sdW1uSWRcblxuICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBzb3J0RGVzY0ZpcnN0ID0gY29sdW1uLnNvcnREZXNjRmlyc3Q7IC8vIEZpbmQgYW55IGV4aXN0aW5nIHNvcnRCeSBmb3IgdGhpcyBjb2x1bW5cblxuICAgICAgdmFyIGV4aXN0aW5nU29ydEJ5ID0gX3NvcnRCeTIuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBfc29ydEJ5Mi5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBoYXNEZXNjRGVmaW5lZCA9IHR5cGVvZiBkZXNjICE9PSAndW5kZWZpbmVkJyAmJiBkZXNjICE9PSBudWxsO1xuICAgICAgdmFyIF9uZXdTb3J0QnkgPSBbXTsgLy8gV2hhdCBzaG91bGQgd2UgZG8gd2l0aCB0aGlzIHNvcnQgYWN0aW9uP1xuXG4gICAgICB2YXIgc29ydEFjdGlvbjtcblxuICAgICAgaWYgKCFkaXNhYmxlTXVsdGlTb3J0ICYmIG11bHRpKSB7XG4gICAgICAgIGlmIChleGlzdGluZ1NvcnRCeSkge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAndG9nZ2xlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ2FkZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vcm1hbCBtb2RlXG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ICE9PSBfc29ydEJ5Mi5sZW5ndGggLSAxIHx8IF9zb3J0QnkyLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAncmVwbGFjZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdTb3J0QnkpIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3RvZ2dsZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICdyZXBsYWNlJztcbiAgICAgICAgfVxuICAgICAgfSAvLyBIYW5kbGUgdG9nZ2xlIHN0YXRlcyB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBzb3J0QnlcblxuXG4gICAgICBpZiAoc29ydEFjdGlvbiA9PT0gJ3RvZ2dsZScgJiYgLy8gTXVzdCBiZSB0b2dnbGluZ1xuICAgICAgIWRpc2FibGVTb3J0UmVtb3ZlICYmIC8vIElmIGRpc2FibGVTb3J0UmVtb3ZlLCBkaXNhYmxlIGluIGdlbmVyYWxcbiAgICAgICFoYXNEZXNjRGVmaW5lZCAmJiAoIC8vIE11c3Qgbm90IGJlIHNldHRpbmcgZGVzY1xuICAgICAgbXVsdGkgPyAhZGlzYWJsZU11bHRpUmVtb3ZlIDogdHJ1ZSkgJiYgKCAvLyBJZiBtdWx0aSwgZG9uJ3QgYWxsb3cgaWYgZGlzYWJsZU11bHRpUmVtb3ZlXG4gICAgICBleGlzdGluZ1NvcnRCeSAmJiAvLyBGaW5hbGx5LCBkZXRlY3QgaWYgaXQgc2hvdWxkIGluZGVlZCBiZSByZW1vdmVkXG4gICAgICBleGlzdGluZ1NvcnRCeS5kZXNjICYmICFzb3J0RGVzY0ZpcnN0IHx8ICFleGlzdGluZ1NvcnRCeS5kZXNjICYmIHNvcnREZXNjRmlyc3QpKSB7XG4gICAgICAgIHNvcnRBY3Rpb24gPSAncmVtb3ZlJztcbiAgICAgIH1cblxuICAgICAgaWYgKHNvcnRBY3Rpb24gPT09ICdyZXBsYWNlJykge1xuICAgICAgICBfbmV3U29ydEJ5ID0gW3tcbiAgICAgICAgICBpZDogY29sdW1uSWQsXG4gICAgICAgICAgZGVzYzogaGFzRGVzY0RlZmluZWQgPyBkZXNjIDogc29ydERlc2NGaXJzdFxuICAgICAgICB9XTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgX25ld1NvcnRCeSA9IFtdLmNvbmNhdChfc29ydEJ5MiwgW3tcbiAgICAgICAgICBpZDogY29sdW1uSWQsXG4gICAgICAgICAgZGVzYzogaGFzRGVzY0RlZmluZWQgPyBkZXNjIDogc29ydERlc2NGaXJzdFxuICAgICAgICB9XSk7IC8vIFRha2UgbGF0ZXN0IG4gY29sdW1uc1xuXG4gICAgICAgIF9uZXdTb3J0Qnkuc3BsaWNlKDAsIF9uZXdTb3J0QnkubGVuZ3RoIC0gbWF4TXVsdGlTb3J0Q29sQ291bnQpO1xuICAgICAgfSBlbHNlIGlmIChzb3J0QWN0aW9uID09PSAndG9nZ2xlJykge1xuICAgICAgICAvLyBUaGlzIGZsaXBzIChvciBzZXRzKSB0aGVcbiAgICAgICAgX25ld1NvcnRCeSA9IF9zb3J0QnkyLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGlmIChkLmlkID09PSBjb2x1bW5JZCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBkLCB7XG4gICAgICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6ICFleGlzdGluZ1NvcnRCeS5kZXNjXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHNvcnRBY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIF9uZXdTb3J0QnkgPSBfc29ydEJ5Mi5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCAhPT0gY29sdW1uSWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNvcnRCeTogX25ld1NvcnRCeVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkNShpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBfaW5zdGFuY2Ukb3JkZXJCeUZuID0gaW5zdGFuY2Uub3JkZXJCeUZuLFxuICAgICAgICBvcmRlckJ5Rm4gPSBfaW5zdGFuY2Ukb3JkZXJCeUZuID09PSB2b2lkIDAgPyBkZWZhdWx0T3JkZXJCeUZuIDogX2luc3RhbmNlJG9yZGVyQnlGbixcbiAgICAgICAgdXNlclNvcnRUeXBlcyA9IGluc3RhbmNlLnNvcnRUeXBlcyxcbiAgICAgICAgbWFudWFsU29ydEJ5ID0gaW5zdGFuY2UubWFudWFsU29ydEJ5LFxuICAgICAgICBkZWZhdWx0Q2FuU29ydCA9IGluc3RhbmNlLmRlZmF1bHRDYW5Tb3J0LFxuICAgICAgICBkaXNhYmxlU29ydEJ5ID0gaW5zdGFuY2UuZGlzYWJsZVNvcnRCeSxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgc29ydEJ5ID0gaW5zdGFuY2Uuc3RhdGUuc29ydEJ5LFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFNvID0gaW5zdGFuY2UuYXV0b1Jlc2V0U29ydEJ5LFxuICAgICAgICBhdXRvUmVzZXRTb3J0QnkgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0U28gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0U287XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VGaWx0ZXJzJywgJ3VzZUdsb2JhbEZpbHRlcicsICd1c2VHcm91cEJ5JywgJ3VzZVBpdm90Q29sdW1ucyddLCAndXNlU29ydEJ5Jyk7XG4gICAgdmFyIHNldFNvcnRCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzb3J0QnkpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRTb3J0QnksXG4gICAgICAgIHNvcnRCeTogc29ydEJ5XG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTsgLy8gVXBkYXRlcyBzb3J0aW5nIGJhc2VkIG9uIGEgY29sdW1uSWQsIGRlc2MgZmxhZyBhbmQgbXVsdGkgZmxhZ1xuXG4gICAgdmFyIHRvZ2dsZVNvcnRCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgZGVzYywgbXVsdGkpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVTb3J0QnksXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgZGVzYzogZGVzYyxcbiAgICAgICAgbXVsdGk6IG11bHRpXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTsgLy8gdXNlIHJlZmVyZW5jZSB0byBhdm9pZCBtZW1vcnkgbGVhayBpbiAjMTYwOFxuXG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTsgLy8gQWRkIHRoZSBnZXRTb3J0QnlUb2dnbGVQcm9wcyBtZXRob2QgdG8gY29sdW1ucyBhbmQgaGVhZGVyc1xuXG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgZGVmYXVsdENvbHVtbkNhblNvcnQgPSBjb2x1bW4uY2FuU29ydCxcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlU29ydEJ5ID0gY29sdW1uLmRpc2FibGVTb3J0QnksXG4gICAgICAgICAgaWQgPSBjb2x1bW4uaWQ7XG4gICAgICB2YXIgY2FuU29ydCA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRpc2FibGVTb3J0QnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZVNvcnRCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKSA6IGdldEZpcnN0RGVmaW5lZChkZWZhdWx0Q2FuU29ydCwgZGVmYXVsdENvbHVtbkNhblNvcnQsIGZhbHNlKTtcbiAgICAgIGNvbHVtbi5jYW5Tb3J0ID0gY2FuU29ydDtcblxuICAgICAgaWYgKGNvbHVtbi5jYW5Tb3J0KSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVTb3J0QnkgPSBmdW5jdGlvbiAoZGVzYywgbXVsdGkpIHtcbiAgICAgICAgICByZXR1cm4gdG9nZ2xlU29ydEJ5KGNvbHVtbi5pZCwgZGVzYywgbXVsdGkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbHVtbi5jbGVhclNvcnRCeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBhY3Rpb25zLmNsZWFyU29ydEJ5LFxuICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbi5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFNvcnRCeVRvZ2dsZVByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG4gICAgICB2YXIgY29sdW1uU29ydCA9IHNvcnRCeS5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBpZDtcbiAgICAgIH0pO1xuICAgICAgY29sdW1uLmlzU29ydGVkID0gISFjb2x1bW5Tb3J0O1xuICAgICAgY29sdW1uLnNvcnRlZEluZGV4ID0gc29ydEJ5LmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5pc1NvcnRlZERlc2MgPSBjb2x1bW4uaXNTb3J0ZWQgPyBjb2x1bW5Tb3J0LmRlc2MgOiB1bmRlZmluZWQ7XG4gICAgfSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxTb3J0QnkgfHwgIXNvcnRCeS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93c107XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3J0ZWRGbGF0Um93cyA9IFtdOyAvLyBGaWx0ZXIgb3V0IHNvcnRCeXMgdGhhdCBjb3JyZXNwb25kIHRvIG5vbiBleGlzdGluZyBjb2x1bW5zXG5cbiAgICAgIHZhciBhdmFpbGFibGVTb3J0QnkgPSBzb3J0QnkuZmlsdGVyKGZ1bmN0aW9uIChzb3J0KSB7XG4gICAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHJldHVybiBjb2wuaWQgPT09IHNvcnQuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBzb3J0RGF0YSA9IGZ1bmN0aW9uIHNvcnREYXRhKHJvd3MpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBvcmRlckJ5Rm4gdG8gY29tcG9zZSBtdWx0aXBsZSBzb3J0QnkncyB0b2dldGhlci5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGFsc28gcGVyZm9ybSBhIHN0YWJsZSBzb3J0aW5nIHVzaW5nIHRoZSByb3cgaW5kZXhcbiAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICB2YXIgc29ydGVkRGF0YSA9IG9yZGVyQnlGbihyb3dzLCBhdmFpbGFibGVTb3J0QnkubWFwKGZ1bmN0aW9uIChzb3J0KSB7XG4gICAgICAgICAgLy8gU3VwcG9ydCBjdXN0b20gc29ydGluZyBtZXRob2RzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBzb3J0LmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LVRhYmxlOiBDb3VsZCBub3QgZmluZCBhIGNvbHVtbiB3aXRoIGlkOiBcIiArIHNvcnQuaWQgKyBcIiB3aGlsZSBzb3J0aW5nXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzb3J0VHlwZSA9IGNvbHVtbi5zb3J0VHlwZTsgLy8gTG9vayB1cCBzb3J0QnkgZnVuY3Rpb25zIGluIHRoaXMgb3JkZXI6XG4gICAgICAgICAgLy8gY29sdW1uIGZ1bmN0aW9uXG4gICAgICAgICAgLy8gY29sdW1uIHN0cmluZyBsb29rdXAgb24gdXNlciBzb3J0VHlwZVxuICAgICAgICAgIC8vIGNvbHVtbiBzdHJpbmcgbG9va3VwIG9uIGJ1aWx0LWluIHNvcnRUeXBlXG4gICAgICAgICAgLy8gZGVmYXVsdCBmdW5jdGlvblxuICAgICAgICAgIC8vIGRlZmF1bHQgc3RyaW5nIGxvb2t1cCBvbiB1c2VyIHNvcnRUeXBlXG4gICAgICAgICAgLy8gZGVmYXVsdCBzdHJpbmcgbG9va3VwIG9uIGJ1aWx0LWluIHNvcnRUeXBlXG5cbiAgICAgICAgICB2YXIgc29ydE1ldGhvZCA9IGlzRnVuY3Rpb24oc29ydFR5cGUpIHx8ICh1c2VyU29ydFR5cGVzIHx8IHt9KVtzb3J0VHlwZV0gfHwgc29ydFR5cGVzW3NvcnRUeXBlXTtcblxuICAgICAgICAgIGlmICghc29ydE1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QtVGFibGU6IENvdWxkIG5vdCBmaW5kIGEgdmFsaWQgc29ydFR5cGUgb2YgJ1wiICsgc29ydFR5cGUgKyBcIicgZm9yIGNvbHVtbiAnXCIgKyBzb3J0LmlkICsgXCInLlwiKTtcbiAgICAgICAgICB9IC8vIFJldHVybiB0aGUgY29ycmVjdCBzb3J0Rm4uXG4gICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBzaG91bGQgYWx3YXlzIHJldHVybiBpbiBhc2NlbmRpbmcgb3JkZXJcblxuXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE1ldGhvZChhLCBiLCBzb3J0LmlkLCBzb3J0LmRlc2MpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLCAvLyBNYXAgdGhlIGRpcmVjdGlvbnNcbiAgICAgICAgYXZhaWxhYmxlU29ydEJ5Lm1hcChmdW5jdGlvbiAoc29ydCkge1xuICAgICAgICAgIC8vIERldGVjdCBhbmQgdXNlIHRoZSBzb3J0SW52ZXJ0ZWQgb3B0aW9uXG4gICAgICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgPT09IHNvcnQuaWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5zb3J0SW52ZXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0LmRlc2M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuICFzb3J0LmRlc2M7XG4gICAgICAgIH0pKTsgLy8gSWYgdGhlcmUgYXJlIHN1Yi1yb3dzLCBzb3J0IHRoZW1cblxuICAgICAgICBzb3J0ZWREYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHNvcnRlZEZsYXRSb3dzLnB1c2gocm93KTtcblxuICAgICAgICAgIGlmICghcm93LnN1YlJvd3MgfHwgcm93LnN1YlJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm93LnN1YlJvd3MgPSBzb3J0RGF0YShyb3cuc3ViUm93cyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkRGF0YTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBbc29ydERhdGEocm93cyksIHNvcnRlZEZsYXRSb3dzXTtcbiAgICB9LCBbbWFudWFsU29ydEJ5LCBzb3J0QnksIHJvd3MsIGZsYXRSb3dzLCBhbGxDb2x1bW5zLCBvcmRlckJ5Rm4sIHVzZXJTb3J0VHlwZXNdKSxcbiAgICAgICAgc29ydGVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBzb3J0ZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdO1xuXG4gICAgdmFyIGdldEF1dG9SZXNldFNvcnRCeSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRTb3J0QnkpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFNvcnRCeSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0U29ydEJ5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFttYW51YWxTb3J0QnkgPyBudWxsIDogZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZVNvcnRlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVTb3J0ZWRGbGF0Um93czogZmxhdFJvd3MsXG4gICAgICBzb3J0ZWRSb3dzOiBzb3J0ZWRSb3dzLFxuICAgICAgc29ydGVkRmxhdFJvd3M6IHNvcnRlZEZsYXRSb3dzLFxuICAgICAgcm93czogc29ydGVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBzb3J0ZWRGbGF0Um93cyxcbiAgICAgIHNldFNvcnRCeTogc2V0U29ydEJ5LFxuICAgICAgdG9nZ2xlU29ydEJ5OiB0b2dnbGVTb3J0QnlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRPcmRlckJ5Rm4oYXJyLCBmdW5jcywgZGlycykge1xuICAgIHJldHVybiBbXS5jb25jYXQoYXJyKS5zb3J0KGZ1bmN0aW9uIChyb3dBLCByb3dCKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzb3J0Rm4gPSBmdW5jc1tpXTtcbiAgICAgICAgdmFyIGRlc2MgPSBkaXJzW2ldID09PSBmYWxzZSB8fCBkaXJzW2ldID09PSAnZGVzYyc7XG4gICAgICAgIHZhciBzb3J0SW50ID0gc29ydEZuKHJvd0EsIHJvd0IpO1xuXG4gICAgICAgIGlmIChzb3J0SW50ICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2MgPyAtc29ydEludCA6IHNvcnRJbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcnNbMF0gPyByb3dBLmluZGV4IC0gcm93Qi5pbmRleCA6IHJvd0IuaW5kZXggLSByb3dBLmluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBsdWdpbk5hbWUgPSAndXNlUGFnaW5hdGlvbic7IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLnJlc2V0UGFnZSA9ICdyZXNldFBhZ2UnO1xuICBhY3Rpb25zLmdvdG9QYWdlID0gJ2dvdG9QYWdlJztcbiAgYWN0aW9ucy5zZXRQYWdlU2l6ZSA9ICdzZXRQYWdlU2l6ZSc7XG4gIHZhciB1c2VQYWdpbmF0aW9uID0gZnVuY3Rpb24gdXNlUGFnaW5hdGlvbihob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDYpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNik7XG4gIH07XG4gIHVzZVBhZ2luYXRpb24ucGx1Z2luTmFtZSA9IHBsdWdpbk5hbWU7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ2KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgcGFnZUluZGV4OiAwXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0UGFnZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5wYWdlSW5kZXggfHwgMFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmdvdG9QYWdlKSB7XG4gICAgICB2YXIgcGFnZUNvdW50ID0gaW5zdGFuY2UucGFnZUNvdW50LFxuICAgICAgICAgIHBhZ2UgPSBpbnN0YW5jZS5wYWdlO1xuICAgICAgdmFyIG5ld1BhZ2VJbmRleCA9IGZ1bmN0aW9uYWxVcGRhdGUoYWN0aW9uLnBhZ2VJbmRleCwgc3RhdGUucGFnZUluZGV4KTtcbiAgICAgIHZhciBjYW5OYXZpZ2F0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAobmV3UGFnZUluZGV4ID4gc3RhdGUucGFnZUluZGV4KSB7XG4gICAgICAgIC8vIG5leHQgcGFnZVxuICAgICAgICBjYW5OYXZpZ2F0ZSA9IHBhZ2VDb3VudCA9PT0gLTEgPyBwYWdlLmxlbmd0aCA+PSBzdGF0ZS5wYWdlU2l6ZSA6IG5ld1BhZ2VJbmRleCA8IHBhZ2VDb3VudDtcbiAgICAgIH0gZWxzZSBpZiAobmV3UGFnZUluZGV4IDwgc3RhdGUucGFnZUluZGV4KSB7XG4gICAgICAgIC8vIHByZXYgcGFnZVxuICAgICAgICBjYW5OYXZpZ2F0ZSA9IG5ld1BhZ2VJbmRleCA+IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNhbk5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IG5ld1BhZ2VJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldFBhZ2VTaXplKSB7XG4gICAgICB2YXIgcGFnZVNpemUgPSBhY3Rpb24ucGFnZVNpemU7XG4gICAgICB2YXIgdG9wUm93SW5kZXggPSBzdGF0ZS5wYWdlU2l6ZSAqIHN0YXRlLnBhZ2VJbmRleDtcbiAgICAgIHZhciBwYWdlSW5kZXggPSBNYXRoLmZsb29yKHRvcFJvd0luZGV4IC8gcGFnZVNpemUpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IHBhZ2VJbmRleCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ2KGluc3RhbmNlKSB7XG4gICAgdmFyIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0UGEgPSBpbnN0YW5jZS5hdXRvUmVzZXRQYWdlLFxuICAgICAgICBhdXRvUmVzZXRQYWdlID0gX2luc3RhbmNlJGF1dG9SZXNldFBhID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFBhLFxuICAgICAgICBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPSBpbnN0YW5jZS5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgbWFudWFsRXhwYW5kZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPT09IHZvaWQgMCA/ICdleHBhbmRlZCcgOiBfaW5zdGFuY2UkbWFudWFsRXhwYW4sXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICB1c2VyUGFnZUNvdW50ID0gaW5zdGFuY2UucGFnZUNvdW50LFxuICAgICAgICBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPSBpbnN0YW5jZS5wYWdpbmF0ZUV4cGFuZGVkUm93cyxcbiAgICAgICAgcGFnaW5hdGVFeHBhbmRlZFJvd3MgPSBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkcGFnaW5hdGVFeHAsXG4gICAgICAgIF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9IGluc3RhbmNlLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkZXhwYW5kU3ViUm8sXG4gICAgICAgIF9pbnN0YW5jZSRzdGF0ZSA9IGluc3RhbmNlLnN0YXRlLFxuICAgICAgICBwYWdlU2l6ZSA9IF9pbnN0YW5jZSRzdGF0ZS5wYWdlU2l6ZSxcbiAgICAgICAgcGFnZUluZGV4ID0gX2luc3RhbmNlJHN0YXRlLnBhZ2VJbmRleCxcbiAgICAgICAgZXhwYW5kZWQgPSBfaW5zdGFuY2Ukc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgIGdsb2JhbEZpbHRlciA9IF9pbnN0YW5jZSRzdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIGZpbHRlcnMgPSBfaW5zdGFuY2Ukc3RhdGUuZmlsdGVycyxcbiAgICAgICAgZ3JvdXBCeSA9IF9pbnN0YW5jZSRzdGF0ZS5ncm91cEJ5LFxuICAgICAgICBzb3J0QnkgPSBfaW5zdGFuY2Ukc3RhdGUuc29ydEJ5LFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgbWFudWFsUGFnaW5hdGlvbiA9IGluc3RhbmNlLm1hbnVhbFBhZ2luYXRpb247XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VHbG9iYWxGaWx0ZXInLCAndXNlRmlsdGVycycsICd1c2VHcm91cEJ5JywgJ3VzZVNvcnRCeScsICd1c2VFeHBhbmRlZCddLCAndXNlUGFnaW5hdGlvbicpO1xuICAgIHZhciBnZXRBdXRvUmVzZXRQYWdlID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFBhZ2UpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFBhZ2UoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFBhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxQYWdpbmF0aW9uID8gbnVsbCA6IGRhdGEsIGdsb2JhbEZpbHRlciwgZmlsdGVycywgZ3JvdXBCeSwgc29ydEJ5XSk7XG4gICAgdmFyIHBhZ2VDb3VudCA9IG1hbnVhbFBhZ2luYXRpb24gPyB1c2VyUGFnZUNvdW50IDogTWF0aC5jZWlsKHJvd3MubGVuZ3RoIC8gcGFnZVNpemUpO1xuICAgIHZhciBwYWdlT3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhZ2VDb3VudCA+IDAgPyBbXS5jb25jYXQobmV3IEFycmF5KHBhZ2VDb3VudCkpLmZpbGwobnVsbCkubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSkgOiBbXTtcbiAgICB9LCBbcGFnZUNvdW50XSk7XG4gICAgdmFyIHBhZ2UgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYWdlO1xuXG4gICAgICBpZiAobWFudWFsUGFnaW5hdGlvbikge1xuICAgICAgICBwYWdlID0gcm93cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYWdlU3RhcnQgPSBwYWdlU2l6ZSAqIHBhZ2VJbmRleDtcbiAgICAgICAgdmFyIHBhZ2VFbmQgPSBwYWdlU3RhcnQgKyBwYWdlU2l6ZTtcbiAgICAgICAgcGFnZSA9IHJvd3Muc2xpY2UocGFnZVN0YXJ0LCBwYWdlRW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2luYXRlRXhwYW5kZWRSb3dzKSB7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXhwYW5kUm93cyhwYWdlLCB7XG4gICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5OiBtYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgICBleHBhbmRTdWJSb3dzOiBleHBhbmRTdWJSb3dzXG4gICAgICB9KTtcbiAgICB9LCBbZXhwYW5kU3ViUm93cywgZXhwYW5kZWQsIG1hbnVhbEV4cGFuZGVkS2V5LCBtYW51YWxQYWdpbmF0aW9uLCBwYWdlSW5kZXgsIHBhZ2VTaXplLCBwYWdpbmF0ZUV4cGFuZGVkUm93cywgcm93c10pO1xuICAgIHZhciBjYW5QcmV2aW91c1BhZ2UgPSBwYWdlSW5kZXggPiAwO1xuICAgIHZhciBjYW5OZXh0UGFnZSA9IHBhZ2VDb3VudCA9PT0gLTEgPyBwYWdlLmxlbmd0aCA+PSBwYWdlU2l6ZSA6IHBhZ2VJbmRleCA8IHBhZ2VDb3VudCAtIDE7XG4gICAgdmFyIGdvdG9QYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBhZ2VJbmRleCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmdvdG9QYWdlLFxuICAgICAgICBwYWdlSW5kZXg6IHBhZ2VJbmRleFxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHByZXZpb3VzUGFnZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnb3RvUGFnZShmdW5jdGlvbiAob2xkKSB7XG4gICAgICAgIHJldHVybiBvbGQgLSAxO1xuICAgICAgfSk7XG4gICAgfSwgW2dvdG9QYWdlXSk7XG4gICAgdmFyIG5leHRQYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdvdG9QYWdlKGZ1bmN0aW9uIChvbGQpIHtcbiAgICAgICAgcmV0dXJuIG9sZCArIDE7XG4gICAgICB9KTtcbiAgICB9LCBbZ290b1BhZ2VdKTtcbiAgICB2YXIgc2V0UGFnZVNpemUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocGFnZVNpemUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRQYWdlU2l6ZSxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwYWdlT3B0aW9uczogcGFnZU9wdGlvbnMsXG4gICAgICBwYWdlQ291bnQ6IHBhZ2VDb3VudCxcbiAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICBjYW5QcmV2aW91c1BhZ2U6IGNhblByZXZpb3VzUGFnZSxcbiAgICAgIGNhbk5leHRQYWdlOiBjYW5OZXh0UGFnZSxcbiAgICAgIGdvdG9QYWdlOiBnb3RvUGFnZSxcbiAgICAgIHByZXZpb3VzUGFnZTogcHJldmlvdXNQYWdlLFxuICAgICAgbmV4dFBhZ2U6IG5leHRQYWdlLFxuICAgICAgc2V0UGFnZVNpemU6IHNldFBhZ2VTaXplXG4gICAgfSk7XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0UGl2b3QgPSAncmVzZXRQaXZvdCc7XG4gIGFjdGlvbnMudG9nZ2xlUGl2b3QgPSAndG9nZ2xlUGl2b3QnO1xuICB2YXIgX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucyA9IGZ1bmN0aW9uIF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMoaG9va3MpIHtcbiAgICBob29rcy5nZXRQaXZvdFRvZ2dsZVByb3BzID0gW2RlZmF1bHRHZXRQaXZvdFRvZ2dsZVByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ3KTtcbiAgICBob29rcy51c2VJbnN0YW5jZUFmdGVyRGF0YS5wdXNoKHVzZUluc3RhbmNlQWZ0ZXJEYXRhKTtcbiAgICBob29rcy5hbGxDb2x1bW5zLnB1c2goYWxsQ29sdW1ucyk7XG4gICAgaG9va3MuYWNjZXNzVmFsdWUucHVzaChhY2Nlc3NWYWx1ZSk7XG4gICAgaG9va3MubWF0ZXJpYWxpemVkQ29sdW1ucy5wdXNoKG1hdGVyaWFsaXplZENvbHVtbnMpO1xuICAgIGhvb2tzLm1hdGVyaWFsaXplZENvbHVtbnNEZXBzLnB1c2gobWF0ZXJpYWxpemVkQ29sdW1uc0RlcHMpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMkMSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2godmlzaWJsZUNvbHVtbnNEZXBzKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDcpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDIpO1xuICB9O1xuICBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zLnBsdWdpbk5hbWUgPSAndXNlUGl2b3RDb2x1bW5zJztcbiAgdmFyIGRlZmF1bHRQaXZvdENvbHVtbnMgPSBbXTtcblxuICB2YXIgZGVmYXVsdEdldFBpdm90VG9nZ2xlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0UGl2b3RUb2dnbGVQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBoZWFkZXIgPSBfcmVmLmhlYWRlcjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBoZWFkZXIuY2FuUGl2b3QgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgaGVhZGVyLnRvZ2dsZVBpdm90KCk7XG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBoZWFkZXIuY2FuUGl2b3QgPyAncG9pbnRlcicgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBQaXZvdCdcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ3KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBpdm90Q29sdW1uczogZGVmYXVsdFBpdm90Q29sdW1uc1xuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFBpdm90KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBpdm90Q29sdW1uczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnBpdm90Q29sdW1ucyB8fCBkZWZhdWx0UGl2b3RDb2x1bW5zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUGl2b3QpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBzZXRQaXZvdCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciByZXNvbHZlZFBpdm90ID0gdHlwZW9mIHNldFBpdm90ICE9PSAndW5kZWZpbmVkJyA/IHNldFBpdm90IDogIXN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JZCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZFBpdm90KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBwaXZvdENvbHVtbnM6IFtdLmNvbmNhdChzdGF0ZS5waXZvdENvbHVtbnMsIFtjb2x1bW5JZF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBpdm90Q29sdW1uczogc3RhdGUucGl2b3RDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlQWZ0ZXJEYXRhKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi5pc1Bpdm90U291cmNlID0gaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxDb2x1bW5zKGNvbHVtbnMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi5pc1Bpdm90U291cmNlID0gaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgICBjb2x1bW4udW5pcXVlVmFsdWVzID0gbmV3IFNldCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gYWNjZXNzVmFsdWUodmFsdWUsIF9yZWYzKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYzLmNvbHVtbjtcblxuICAgIGlmIChjb2x1bW4udW5pcXVlVmFsdWVzICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbHVtbi51bmlxdWVWYWx1ZXMuYWRkKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRlcmlhbGl6ZWRDb2x1bW5zKG1hdGVyaWFsaXplZCwgX3JlZjQpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNC5pbnN0YW5jZTtcbiAgICB2YXIgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG5cbiAgICBpZiAoIXN0YXRlLnBpdm90Q29sdW1ucy5sZW5ndGggfHwgIXN0YXRlLmdyb3VwQnkgfHwgIXN0YXRlLmdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbWF0ZXJpYWxpemVkO1xuICAgIH1cblxuICAgIHZhciBwaXZvdENvbHVtbnMgPSBzdGF0ZS5waXZvdENvbHVtbnMubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgdmFyIHNvdXJjZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuICFkLmlzUGl2b3RTb3VyY2UgJiYgIXN0YXRlLmdyb3VwQnkuaW5jbHVkZXMoZC5pZCkgJiYgIXN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhkLmlkKTtcbiAgICB9KTtcblxuICAgIHZhciBidWlsZFBpdm90Q29sdW1ucyA9IGZ1bmN0aW9uIGJ1aWxkUGl2b3RDb2x1bW5zKGRlcHRoLCBwYXJlbnQsIHBpdm90RmlsdGVycykge1xuICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVwdGggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAocGl2b3RGaWx0ZXJzID09PSB2b2lkIDApIHtcbiAgICAgICAgcGl2b3RGaWx0ZXJzID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBwaXZvdENvbHVtbiA9IHBpdm90Q29sdW1uc1tkZXB0aF07XG5cbiAgICAgIGlmICghcGl2b3RDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChzb3VyY2VDb2x1bW4pIHtcbiAgICAgICAgICAvLyBUT0RPOiBXZSBjb3VsZCBvZmZlciBzdXBwb3J0IGhlcmUgZm9yIHJlbmVzdGluZyBwaXZvdGVkXG4gICAgICAgICAgLy8gY29sdW1ucyBpbnNpZGUgY29waWVzIG9mIHRoZWlyIGhlYWRlciBncm91cHMuIEZvciBub3csXG4gICAgICAgICAgLy8gdGhhdCBzZWVtcyBsaWtlIGl0IHdvdWxkIGJlICgxKSBvdmVya2lsbCBvbiBuZXN0aW5nLCBjb25zaWRlcmluZ1xuICAgICAgICAgIC8vIHlvdSBhbHJlYWR5IGdldCBuZXN0aW5nIGZvciBldmVyeSBwaXZvdCBsZXZlbCBhbmQgKDIpXG4gICAgICAgICAgLy8gcmVhbGx5IGhhcmQuIDopXG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzb3VyY2VDb2x1bW4sIHtcbiAgICAgICAgICAgIGNhblBpdm90OiBmYWxzZSxcbiAgICAgICAgICAgIGlzUGl2b3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgICAgaWQ6IFwiXCIgKyAocGFyZW50ID8gcGFyZW50LmlkICsgXCIuXCIgKyBzb3VyY2VDb2x1bW4uaWQgOiBzb3VyY2VDb2x1bW4uaWQpLFxuICAgICAgICAgICAgYWNjZXNzb3I6IGZ1bmN0aW9uIGFjY2Vzc29yKG9yaWdpbmFsUm93LCBpLCByb3cpIHtcbiAgICAgICAgICAgICAgaWYgKHBpdm90RmlsdGVycy5ldmVyeShmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihyb3cpO1xuICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW3NvdXJjZUNvbHVtbi5pZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB1bmlxdWVWYWx1ZXMgPSBBcnJheS5mcm9tKHBpdm90Q29sdW1uLnVuaXF1ZVZhbHVlcykuc29ydCgpO1xuICAgICAgcmV0dXJuIHVuaXF1ZVZhbHVlcy5tYXAoZnVuY3Rpb24gKHVuaXF1ZVZhbHVlKSB7XG4gICAgICAgIHZhciBjb2x1bW5Hcm91cCA9IF9leHRlbmRzKHt9LCBwaXZvdENvbHVtbiwge1xuICAgICAgICAgIEhlYWRlcjogcGl2b3RDb2x1bW4uUGl2b3RIZWFkZXIgfHwgdHlwZW9mIHBpdm90Q29sdW1uLmhlYWRlciA9PT0gJ3N0cmluZycgPyBwaXZvdENvbHVtbi5IZWFkZXIgKyBcIjogXCIgKyB1bmlxdWVWYWx1ZSA6IHVuaXF1ZVZhbHVlLFxuICAgICAgICAgIGlzUGl2b3RHcm91cDogdHJ1ZSxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgaWQ6IHBhcmVudCA/IHBhcmVudC5pZCArIFwiLlwiICsgcGl2b3RDb2x1bW4uaWQgKyBcIi5cIiArIHVuaXF1ZVZhbHVlIDogcGl2b3RDb2x1bW4uaWQgKyBcIi5cIiArIHVuaXF1ZVZhbHVlLFxuICAgICAgICAgIHBpdm90VmFsdWU6IHVuaXF1ZVZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbHVtbkdyb3VwLmNvbHVtbnMgPSBidWlsZFBpdm90Q29sdW1ucyhkZXB0aCArIDEsIGNvbHVtbkdyb3VwLCBbXS5jb25jYXQocGl2b3RGaWx0ZXJzLCBbZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW3Bpdm90Q29sdW1uLmlkXSA9PT0gdW5pcXVlVmFsdWU7XG4gICAgICAgIH1dKSk7XG4gICAgICAgIHJldHVybiBjb2x1bW5Hcm91cDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgbmV3TWF0ZXJpYWxpemVkID0gZmxhdHRlbkNvbHVtbnMoYnVpbGRQaXZvdENvbHVtbnMoKSk7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChtYXRlcmlhbGl6ZWQsIG5ld01hdGVyaWFsaXplZCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRlcmlhbGl6ZWRDb2x1bW5zRGVwcyhkZXBzLCBfcmVmNSkge1xuICAgIHZhciBfcmVmNSRpbnN0YW5jZSRzdGF0ZSA9IF9yZWY1Lmluc3RhbmNlLnN0YXRlLFxuICAgICAgICBwaXZvdENvbHVtbnMgPSBfcmVmNSRpbnN0YW5jZSRzdGF0ZS5waXZvdENvbHVtbnMsXG4gICAgICAgIGdyb3VwQnkgPSBfcmVmNSRpbnN0YW5jZSRzdGF0ZS5ncm91cEJ5O1xuICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW3Bpdm90Q29sdW1ucywgZ3JvdXBCeV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMkMSh2aXNpYmxlQ29sdW1ucywgX3JlZjYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmNi5pbnN0YW5jZS5zdGF0ZTtcbiAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuICFkLmlzUGl2b3RTb3VyY2U7XG4gICAgfSk7XG5cbiAgICBpZiAoc3RhdGUucGl2b3RDb2x1bW5zLmxlbmd0aCAmJiBzdGF0ZS5ncm91cEJ5ICYmIHN0YXRlLmdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW4uaXNHcm91cGVkIHx8IGNvbHVtbi5pc1Bpdm90ZWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaWJsZUNvbHVtbnM7XG4gIH1cblxuICBmdW5jdGlvbiB2aXNpYmxlQ29sdW1uc0RlcHMoZGVwcywgX3JlZjcpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNy5pbnN0YW5jZTtcbiAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5waXZvdENvbHVtbnMsIGluc3RhbmNlLnN0YXRlLmdyb3VwQnldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDcoaW5zdGFuY2UpIHtcbiAgICB2YXIgY29sdW1ucyA9IGluc3RhbmNlLmNvbHVtbnMsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFBpID0gaW5zdGFuY2UuYXV0b1Jlc2V0UGl2b3QsXG4gICAgICAgIGF1dG9SZXNldFBpdm90ID0gX2luc3RhbmNlJGF1dG9SZXNldFBpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFBpLFxuICAgICAgICBtYW5hdWxQaXZvdCA9IGluc3RhbmNlLm1hbmF1bFBpdm90LFxuICAgICAgICBkaXNhYmxlUGl2b3QgPSBpbnN0YW5jZS5kaXNhYmxlUGl2b3QsXG4gICAgICAgIGRlZmF1bHRDYW5QaXZvdCA9IGluc3RhbmNlLmRlZmF1bHRDYW5QaXZvdDtcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUdyb3VwQnknXSwgJ3VzZVBpdm90Q29sdW1ucycpO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIHZhciBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgICBkZWZhdWx0Q29sdW1uUGl2b3QgPSBjb2x1bW4uZGVmYXVsdFBpdm90LFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVQaXZvdCA9IGNvbHVtbi5kaXNhYmxlUGl2b3Q7XG4gICAgICBjb2x1bW4uY2FuUGl2b3QgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuUGl2b3QsIGNvbHVtbkRpc2FibGVQaXZvdCA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlUGl2b3QgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhblBpdm90LCBkZWZhdWx0Q29sdW1uUGl2b3QsIGRlZmF1bHRDYW5QaXZvdCwgZmFsc2UpO1xuXG4gICAgICBpZiAoY29sdW1uLmNhblBpdm90KSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVQaXZvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlUGl2b3QoY29sdW1uLmlkKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgPSBjb2x1bW4uQWdncmVnYXRlZCB8fCBjb2x1bW4uQ2VsbDtcbiAgICB9KTtcblxuICAgIHZhciB0b2dnbGVQaXZvdCA9IGZ1bmN0aW9uIHRvZ2dsZVBpdm90KGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVBpdm90LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgaGVhZGVyLmdldFBpdm90VG9nZ2xlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFBpdm90VG9nZ2xlUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0UGl2b3QgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0UGl2b3QpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFBpdm90KCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRQaXZvdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbmF1bFBpdm90ID8gbnVsbCA6IGNvbHVtbnNdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICB0b2dnbGVQaXZvdDogdG9nZ2xlUGl2b3RcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMihyb3cpIHtcbiAgICByb3cuYWxsQ2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgLy8gR3JvdXBlZCBjZWxscyBhcmUgaW4gdGhlIHBpdm90Q29sdW1ucyBhbmQgdGhlIHBpdm90IGNlbGwgZm9yIHRoZSByb3dcbiAgICAgIGNlbGwuaXNQaXZvdGVkID0gY2VsbC5jb2x1bW4uaXNQaXZvdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBsdWdpbk5hbWUkMSA9ICd1c2VSb3dTZWxlY3QnOyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5yZXNldFNlbGVjdGVkUm93cyA9ICdyZXNldFNlbGVjdGVkUm93cyc7XG4gIGFjdGlvbnMudG9nZ2xlQWxsUm93c1NlbGVjdGVkID0gJ3RvZ2dsZUFsbFJvd3NTZWxlY3RlZCc7XG4gIGFjdGlvbnMudG9nZ2xlUm93U2VsZWN0ZWQgPSAndG9nZ2xlUm93U2VsZWN0ZWQnO1xuICBhY3Rpb25zLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQgPSAndG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCc7XG4gIHZhciB1c2VSb3dTZWxlY3QgPSBmdW5jdGlvbiB1c2VSb3dTZWxlY3QoaG9va3MpIHtcbiAgICBob29rcy5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzXTtcbiAgICBob29rcy5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHNdO1xuICAgIGhvb2tzLmdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ4KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDgpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDMpO1xuICB9O1xuICB1c2VSb3dTZWxlY3QucGx1Z2luTmFtZSA9IHBsdWdpbk5hbWUkMTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIHJvdyA9IF9yZWYucm93O1xuICAgIHZhciBfaW5zdGFuY2UkbWFudWFsUm93U2UgPSBpbnN0YW5jZS5tYW51YWxSb3dTZWxlY3RlZEtleSxcbiAgICAgICAgbWFudWFsUm93U2VsZWN0ZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsUm93U2UgPT09IHZvaWQgMCA/ICdpc1NlbGVjdGVkJyA6IF9pbnN0YW5jZSRtYW51YWxSb3dTZTtcbiAgICB2YXIgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHJvdy5vcmlnaW5hbCAmJiByb3cub3JpZ2luYWxbbWFudWFsUm93U2VsZWN0ZWRLZXldKSB7XG4gICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tlZCA9IHJvdy5pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIHJvdy50b2dnbGVSb3dTZWxlY3RlZChlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBSb3cgU2VsZWN0ZWQnLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogcm93LmlzU29tZVNlbGVjdGVkXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxSb3dzU2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBpbnN0YW5jZS5pc0FsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBSb3dzIFNlbGVjdGVkJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4oIWluc3RhbmNlLmlzQWxsUm93c1NlbGVjdGVkICYmIE9iamVjdC5rZXlzKGluc3RhbmNlLnN0YXRlLnNlbGVjdGVkUm93SWRzKS5sZW5ndGgpXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGluc3RhbmNlLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBpbnN0YW5jZS5pc0FsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgQ3VycmVudCBQYWdlIFJvd3MgU2VsZWN0ZWQnLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbighaW5zdGFuY2UuaXNBbGxQYWdlUm93c1NlbGVjdGVkICYmIGluc3RhbmNlLnBhZ2Uuc29tZShmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgdmFyIGlkID0gX3JlZjQuaWQ7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5zdGF0ZS5zZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB9KSlcbiAgICB9XTtcbiAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkOChzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBzZWxlY3RlZFJvd0lkczoge31cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRTZWxlY3RlZFJvd3MpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5zZWxlY3RlZFJvd0lkcyB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgdmFyIHNldFNlbGVjdGVkID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIGlzQWxsUm93c1NlbGVjdGVkID0gaW5zdGFuY2UuaXNBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgICBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIgPSBpbnN0YW5jZS5ub25Hcm91cGVkUm93c0J5SWQsXG4gICAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkID0gX2luc3RhbmNlJG5vbkdyb3VwZWRSID09PSB2b2lkIDAgPyByb3dzQnlJZCA6IF9pbnN0YW5jZSRub25Hcm91cGVkUjtcbiAgICAgIHZhciBzZWxlY3RBbGwgPSB0eXBlb2Ygc2V0U2VsZWN0ZWQgIT09ICd1bmRlZmluZWQnID8gc2V0U2VsZWN0ZWQgOiAhaXNBbGxSb3dzU2VsZWN0ZWQ7IC8vIE9ubHkgcmVtb3ZlL2FkZCB0aGUgcm93cyB0aGF0IGFyZSB2aXNpYmxlIG9uIHRoZSBzY3JlZW5cbiAgICAgIC8vICBMZWF2ZSBhbGwgdGhlIG90aGVyIHJvd3MgdGhhdCBhcmUgc2VsZWN0ZWQgYWxvbmUuXG5cbiAgICAgIHZhciBzZWxlY3RlZFJvd0lkcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnNlbGVjdGVkUm93SWRzKTtcblxuICAgICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgICBPYmplY3Qua2V5cyhub25Hcm91cGVkUm93c0J5SWQpLmZvckVhY2goZnVuY3Rpb24gKHJvd0lkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRSb3dJZHNbcm93SWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhub25Hcm91cGVkUm93c0J5SWQpLmZvckVhY2goZnVuY3Rpb24gKHJvd0lkKSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGVjdGVkUm93SWRzW3Jvd0lkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHNlbGVjdGVkUm93SWRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUm93U2VsZWN0ZWQpIHtcbiAgICAgIHZhciBpZCA9IGFjdGlvbi5pZCxcbiAgICAgICAgICBfc2V0U2VsZWN0ZWQgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgX3Jvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgICAgX2luc3RhbmNlJHNlbGVjdFN1YlJvID0gaW5zdGFuY2Uuc2VsZWN0U3ViUm93cyxcbiAgICAgICAgICBzZWxlY3RTdWJSb3dzID0gX2luc3RhbmNlJHNlbGVjdFN1YlJvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHNlbGVjdFN1YlJvLFxuICAgICAgICAgIGdldFN1YlJvd3MgPSBpbnN0YW5jZS5nZXRTdWJSb3dzO1xuICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB2YXIgc2hvdWxkRXhpc3QgPSB0eXBlb2YgX3NldFNlbGVjdGVkICE9PSAndW5kZWZpbmVkJyA/IF9zZXRTZWxlY3RlZCA6ICFpc1NlbGVjdGVkO1xuXG4gICAgICBpZiAoaXNTZWxlY3RlZCA9PT0gc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3U2VsZWN0ZWRSb3dJZHMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuc2VsZWN0ZWRSb3dJZHMpO1xuXG4gICAgICB2YXIgaGFuZGxlUm93QnlJZCA9IGZ1bmN0aW9uIGhhbmRsZVJvd0J5SWQoaWQpIHtcbiAgICAgICAgdmFyIHJvdyA9IF9yb3dzQnlJZFtpZF07XG5cbiAgICAgICAgaWYgKCFyb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgaWYgKHNob3VsZEV4aXN0KSB7XG4gICAgICAgICAgICBuZXdTZWxlY3RlZFJvd0lkc1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgbmV3U2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RTdWJSb3dzICYmIGdldFN1YlJvd3Mocm93KSkge1xuICAgICAgICAgIHJldHVybiBnZXRTdWJSb3dzKHJvdykuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUm93QnlJZChyb3cuaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVSb3dCeUlkKGlkKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IG5ld1NlbGVjdGVkUm93SWRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCkge1xuICAgICAgdmFyIF9zZXRTZWxlY3RlZDIgPSBhY3Rpb24udmFsdWU7XG5cbiAgICAgIHZhciBwYWdlID0gaW5zdGFuY2UucGFnZSxcbiAgICAgICAgICBfcm93c0J5SWQyID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgICAgX2luc3RhbmNlJHNlbGVjdFN1YlJvMiA9IGluc3RhbmNlLnNlbGVjdFN1YlJvd3MsXG4gICAgICAgICAgX3NlbGVjdFN1YlJvd3MgPSBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8yID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHNlbGVjdFN1YlJvMixcbiAgICAgICAgICBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBpbnN0YW5jZS5pc0FsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgX2dldFN1YlJvd3MgPSBpbnN0YW5jZS5nZXRTdWJSb3dzO1xuXG4gICAgICB2YXIgX3NlbGVjdEFsbCA9IHR5cGVvZiBfc2V0U2VsZWN0ZWQyICE9PSAndW5kZWZpbmVkJyA/IF9zZXRTZWxlY3RlZDIgOiAhaXNBbGxQYWdlUm93c1NlbGVjdGVkO1xuXG4gICAgICB2YXIgX25ld1NlbGVjdGVkUm93SWRzID0gX2V4dGVuZHMoe30sIHN0YXRlLnNlbGVjdGVkUm93SWRzKTtcblxuICAgICAgdmFyIF9oYW5kbGVSb3dCeUlkID0gZnVuY3Rpb24gX2hhbmRsZVJvd0J5SWQoaWQpIHtcbiAgICAgICAgdmFyIHJvdyA9IF9yb3dzQnlJZDJbaWRdO1xuXG4gICAgICAgIGlmICghcm93LmlzR3JvdXBlZCkge1xuICAgICAgICAgIGlmIChfc2VsZWN0QWxsKSB7XG4gICAgICAgICAgICBfbmV3U2VsZWN0ZWRSb3dJZHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIF9uZXdTZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9zZWxlY3RTdWJSb3dzICYmIF9nZXRTdWJSb3dzKHJvdykpIHtcbiAgICAgICAgICByZXR1cm4gX2dldFN1YlJvd3Mocm93KS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBfaGFuZGxlUm93QnlJZChyb3cuaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwYWdlLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICByZXR1cm4gX2hhbmRsZVJvd0J5SWQocm93LmlkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogX25ld1NlbGVjdGVkUm93SWRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ4KGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIF9pbnN0YW5jZSRub25Hcm91cGVkUjIgPSBpbnN0YW5jZS5ub25Hcm91cGVkUm93c0J5SWQsXG4gICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZCA9IF9pbnN0YW5jZSRub25Hcm91cGVkUjIgPT09IHZvaWQgMCA/IHJvd3NCeUlkIDogX2luc3RhbmNlJG5vbkdyb3VwZWRSMixcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFNlID0gaW5zdGFuY2UuYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzLFxuICAgICAgICBhdXRvUmVzZXRTZWxlY3RlZFJvd3MgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0U2UgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0U2UsXG4gICAgICAgIHNlbGVjdGVkUm93SWRzID0gaW5zdGFuY2Uuc3RhdGUuc2VsZWN0ZWRSb3dJZHMsXG4gICAgICAgIF9pbnN0YW5jZSRzZWxlY3RTdWJSbzMgPSBpbnN0YW5jZS5zZWxlY3RTdWJSb3dzLFxuICAgICAgICBzZWxlY3RTdWJSb3dzID0gX2luc3RhbmNlJHNlbGVjdFN1YlJvMyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIHBhZ2UgPSBpbnN0YW5jZS5wYWdlLFxuICAgICAgICBnZXRTdWJSb3dzID0gaW5zdGFuY2UuZ2V0U3ViUm93cztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUZpbHRlcnMnLCAndXNlR3JvdXBCeScsICd1c2VTb3J0QnknLCAndXNlRXhwYW5kZWQnLCAndXNlUGFnaW5hdGlvbiddLCAndXNlUm93U2VsZWN0Jyk7XG4gICAgdmFyIHNlbGVjdGVkRmxhdFJvd3MgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxlY3RlZEZsYXRSb3dzID0gW107XG4gICAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHNlbGVjdFN1YlJvd3MgPyBnZXRSb3dJc1NlbGVjdGVkKHJvdywgc2VsZWN0ZWRSb3dJZHMsIGdldFN1YlJvd3MpIDogISFzZWxlY3RlZFJvd0lkc1tyb3cuaWRdO1xuICAgICAgICByb3cuaXNTZWxlY3RlZCA9ICEhaXNTZWxlY3RlZDtcbiAgICAgICAgcm93LmlzU29tZVNlbGVjdGVkID0gaXNTZWxlY3RlZCA9PT0gbnVsbDtcblxuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkRmxhdFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEZsYXRSb3dzO1xuICAgIH0sIFtyb3dzLCBzZWxlY3RTdWJSb3dzLCBzZWxlY3RlZFJvd0lkcywgZ2V0U3ViUm93c10pO1xuICAgIHZhciBpc0FsbFJvd3NTZWxlY3RlZCA9IEJvb2xlYW4oT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5sZW5ndGggJiYgT2JqZWN0LmtleXMoc2VsZWN0ZWRSb3dJZHMpLmxlbmd0aCk7XG4gICAgdmFyIGlzQWxsUGFnZVJvd3NTZWxlY3RlZCA9IGlzQWxsUm93c1NlbGVjdGVkO1xuXG4gICAgaWYgKGlzQWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gIXNlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGlzQWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0FsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgaWYgKHBhZ2UgJiYgcGFnZS5sZW5ndGggJiYgcGFnZS5zb21lKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgICB2YXIgaWQgPSBfcmVmNS5pZDtcbiAgICAgICAgcmV0dXJuICFzZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB9KSkge1xuICAgICAgICBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0U2VsZWN0ZWRSb3dzID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFNlbGVjdGVkUm93cyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0U2VsZWN0ZWRSb3dzKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRTZWxlY3RlZFJvd3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBkYXRhXSk7XG4gICAgdmFyIHRvZ2dsZUFsbFJvd3NTZWxlY3RlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlUm93U2VsZWN0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVJvd1NlbGVjdGVkLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICB2YXIgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIHZhciBnZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBzZWxlY3RlZEZsYXRSb3dzOiBzZWxlY3RlZEZsYXRSb3dzLFxuICAgICAgaXNBbGxSb3dzU2VsZWN0ZWQ6IGlzQWxsUm93c1NlbGVjdGVkLFxuICAgICAgaXNBbGxQYWdlUm93c1NlbGVjdGVkOiBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICB0b2dnbGVSb3dTZWxlY3RlZDogdG9nZ2xlUm93U2VsZWN0ZWQsXG4gICAgICB0b2dnbGVBbGxSb3dzU2VsZWN0ZWQ6IHRvZ2dsZUFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzOiBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyxcbiAgICAgIGdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wczogZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzLFxuICAgICAgdG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZDogdG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyQzKHJvdywgX3JlZjYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNi5pbnN0YW5jZTtcblxuICAgIHJvdy50b2dnbGVSb3dTZWxlY3RlZCA9IGZ1bmN0aW9uIChzZXQpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS50b2dnbGVSb3dTZWxlY3RlZChyb3cuaWQsIHNldCk7XG4gICAgfTtcblxuICAgIHJvdy5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoaW5zdGFuY2UuZ2V0SG9va3MoKS5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICByb3c6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Um93SXNTZWxlY3RlZChyb3csIHNlbGVjdGVkUm93SWRzLCBnZXRTdWJSb3dzKSB7XG4gICAgaWYgKHNlbGVjdGVkUm93SWRzW3Jvdy5pZF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzdWJSb3dzID0gZ2V0U3ViUm93cyhyb3cpO1xuXG4gICAgaWYgKHN1YlJvd3MgJiYgc3ViUm93cy5sZW5ndGgpIHtcbiAgICAgIHZhciBhbGxDaGlsZHJlblNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHZhciBzb21lU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAoc3ViUm93KSB7XG4gICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5IGlmIHdlIGtub3cgYm90aCBvZiB0aGVzZVxuICAgICAgICBpZiAoc29tZVNlbGVjdGVkICYmICFhbGxDaGlsZHJlblNlbGVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFJvd0lzU2VsZWN0ZWQoc3ViUm93LCBzZWxlY3RlZFJvd0lkcywgZ2V0U3ViUm93cykpIHtcbiAgICAgICAgICBzb21lU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbENoaWxkcmVuU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWxsQ2hpbGRyZW5TZWxlY3RlZCA/IHRydWUgOiBzb21lU2VsZWN0ZWQgPyBudWxsIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3NvciA9IGZ1bmN0aW9uIGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3Nvcihyb3cpIHtcbiAgICByZXR1cm4ge307XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRJbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgPSBmdW5jdGlvbiBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yKGNlbGwpIHtcbiAgICByZXR1cm4ge307XG4gIH07IC8vIEFjdGlvbnNcblxuXG4gIGFjdGlvbnMuc2V0Um93U3RhdGUgPSAnc2V0Um93U3RhdGUnO1xuICBhY3Rpb25zLnNldENlbGxTdGF0ZSA9ICdzZXRDZWxsU3RhdGUnO1xuICBhY3Rpb25zLnJlc2V0Um93U3RhdGUgPSAncmVzZXRSb3dTdGF0ZSc7XG4gIHZhciB1c2VSb3dTdGF0ZSA9IGZ1bmN0aW9uIHVzZVJvd1N0YXRlKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkOSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ5KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQ0KTtcbiAgfTtcbiAgdXNlUm93U3RhdGUucGx1Z2luTmFtZSA9ICd1c2VSb3dTdGF0ZSc7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ5KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9pbnN0YW5jZSRpbml0aWFsUm93UyA9IGluc3RhbmNlLmluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsUm93U3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsUm93UyA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxSb3dTLFxuICAgICAgICBfaW5zdGFuY2UkaW5pdGlhbENlbGwgPSBpbnN0YW5jZS5pbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsQ2VsbCA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsQ2VsbCxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZDtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICByb3dTdGF0ZToge31cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRSb3dTdGF0ZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICByb3dTdGF0ZTogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnJvd1N0YXRlIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0Um93U3RhdGUpIHtcbiAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgIHZhciByb3dJZCA9IGFjdGlvbi5yb3dJZCxcbiAgICAgICAgICB2YWx1ZSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBvbGRSb3dTdGF0ZSA9IHR5cGVvZiBzdGF0ZS5yb3dTdGF0ZVtyb3dJZF0gIT09ICd1bmRlZmluZWQnID8gc3RhdGUucm93U3RhdGVbcm93SWRdIDogaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93c0J5SWRbcm93SWRdKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcm93U3RhdGU6IF9leHRlbmRzKHt9LCBzdGF0ZS5yb3dTdGF0ZSwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbcm93SWRdID0gZnVuY3Rpb25hbFVwZGF0ZSh2YWx1ZSwgb2xkUm93U3RhdGUpLCBfZXh0ZW5kczIpKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldENlbGxTdGF0ZSkge1xuICAgICAgdmFyIF9vbGRSb3dTdGF0ZSRjZWxsU3RhdCwgX3Jvd3NCeUlkJF9yb3dJZCwgX3Jvd3NCeUlkJF9yb3dJZCRjZWxsLCBfZXh0ZW5kczMsIF9leHRlbmRzNDtcblxuICAgICAgdmFyIF9yb3dJZCA9IGFjdGlvbi5yb3dJZCxcbiAgICAgICAgICBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBfdmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cbiAgICAgIHZhciBfb2xkUm93U3RhdGUgPSB0eXBlb2Ygc3RhdGUucm93U3RhdGVbX3Jvd0lkXSAhPT0gJ3VuZGVmaW5lZCcgPyBzdGF0ZS5yb3dTdGF0ZVtfcm93SWRdIDogaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93c0J5SWRbX3Jvd0lkXSk7XG5cbiAgICAgIHZhciBvbGRDZWxsU3RhdGUgPSB0eXBlb2YgKF9vbGRSb3dTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogKF9vbGRSb3dTdGF0ZSRjZWxsU3RhdCA9IF9vbGRSb3dTdGF0ZS5jZWxsU3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfb2xkUm93U3RhdGUkY2VsbFN0YXRbY29sdW1uSWRdKSAhPT0gJ3VuZGVmaW5lZCcgPyBfb2xkUm93U3RhdGUuY2VsbFN0YXRlW2NvbHVtbklkXSA6IGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcigoX3Jvd3NCeUlkJF9yb3dJZCA9IHJvd3NCeUlkW19yb3dJZF0pID09IG51bGwgPyB2b2lkIDAgOiAoX3Jvd3NCeUlkJF9yb3dJZCRjZWxsID0gX3Jvd3NCeUlkJF9yb3dJZC5jZWxscykgPT0gbnVsbCA/IHZvaWQgMCA6IF9yb3dzQnlJZCRfcm93SWQkY2VsbC5maW5kKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIHJldHVybiBjZWxsLmNvbHVtbi5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHJvd1N0YXRlOiBfZXh0ZW5kcyh7fSwgc3RhdGUucm93U3RhdGUsIChfZXh0ZW5kczQgPSB7fSwgX2V4dGVuZHM0W19yb3dJZF0gPSBfZXh0ZW5kcyh7fSwgX29sZFJvd1N0YXRlLCB7XG4gICAgICAgICAgY2VsbFN0YXRlOiBfZXh0ZW5kcyh7fSwgX29sZFJvd1N0YXRlLmNlbGxTdGF0ZSB8fCB7fSwgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbY29sdW1uSWRdID0gZnVuY3Rpb25hbFVwZGF0ZShfdmFsdWUsIG9sZENlbGxTdGF0ZSksIF9leHRlbmRzMykpXG4gICAgICAgIH0pLCBfZXh0ZW5kczQpKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkOShpbnN0YW5jZSkge1xuICAgIHZhciBfaW5zdGFuY2UkYXV0b1Jlc2V0Um8gPSBpbnN0YW5jZS5hdXRvUmVzZXRSb3dTdGF0ZSxcbiAgICAgICAgYXV0b1Jlc2V0Um93U3RhdGUgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0Um8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0Um8sXG4gICAgICAgIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuICAgIHZhciBzZXRSb3dTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyb3dJZCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0Um93U3RhdGUsXG4gICAgICAgIHJvd0lkOiByb3dJZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgc2V0Q2VsbFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHJvd0lkLCBjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0Q2VsbFN0YXRlLFxuICAgICAgICByb3dJZDogcm93SWQsXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0Um93U3RhdGUgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0Um93U3RhdGUpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFJvd1N0YXRlKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRSb3dTdGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHNldFJvd1N0YXRlOiBzZXRSb3dTdGF0ZSxcbiAgICAgIHNldENlbGxTdGF0ZTogc2V0Q2VsbFN0YXRlXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93JDQocm93LCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICB2YXIgX2luc3RhbmNlJGluaXRpYWxSb3dTMiA9IGluc3RhbmNlLmluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsUm93U3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsUm93UzIgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsUm93UzIsXG4gICAgICAgIF9pbnN0YW5jZSRpbml0aWFsQ2VsbDIgPSBpbnN0YW5jZS5pbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsQ2VsbDIgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbENlbGwyLFxuICAgICAgICByb3dTdGF0ZSA9IGluc3RhbmNlLnN0YXRlLnJvd1N0YXRlO1xuXG4gICAgaWYgKHJvdykge1xuICAgICAgcm93LnN0YXRlID0gdHlwZW9mIHJvd1N0YXRlW3Jvdy5pZF0gIT09ICd1bmRlZmluZWQnID8gcm93U3RhdGVbcm93LmlkXSA6IGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKHJvdyk7XG5cbiAgICAgIHJvdy5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVyKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5zZXRSb3dTdGF0ZShyb3cuaWQsIHVwZGF0ZXIpO1xuICAgICAgfTtcblxuICAgICAgcm93LmNlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgaWYgKCFyb3cuc3RhdGUuY2VsbFN0YXRlKSB7XG4gICAgICAgICAgcm93LnN0YXRlLmNlbGxTdGF0ZSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC5zdGF0ZSA9IHR5cGVvZiByb3cuc3RhdGUuY2VsbFN0YXRlW2NlbGwuY29sdW1uLmlkXSAhPT0gJ3VuZGVmaW5lZCcgPyByb3cuc3RhdGUuY2VsbFN0YXRlW2NlbGwuY29sdW1uLmlkXSA6IGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcihjZWxsKTtcblxuICAgICAgICBjZWxsLnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc2V0Q2VsbFN0YXRlKHJvdy5pZCwgY2VsbC5jb2x1bW4uaWQsIHVwZGF0ZXIpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWN0aW9ucy5yZXNldENvbHVtbk9yZGVyID0gJ3Jlc2V0Q29sdW1uT3JkZXInO1xuICBhY3Rpb25zLnNldENvbHVtbk9yZGVyID0gJ3NldENvbHVtbk9yZGVyJztcbiAgdmFyIHVzZUNvbHVtbk9yZGVyID0gZnVuY3Rpb24gdXNlQ29sdW1uT3JkZXIoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciRhKTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1uc0RlcHMucHVzaChmdW5jdGlvbiAoZGVwcywgX3JlZikge1xuICAgICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW2luc3RhbmNlLnN0YXRlLmNvbHVtbk9yZGVyXSk7XG4gICAgfSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaCh2aXNpYmxlQ29sdW1ucyQyKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJGEpO1xuICB9O1xuICB1c2VDb2x1bW5PcmRlci5wbHVnaW5OYW1lID0gJ3VzZUNvbHVtbk9yZGVyJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJGEoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgY29sdW1uT3JkZXI6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0Q29sdW1uT3JkZXIpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uT3JkZXI6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5jb2x1bW5PcmRlciB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldENvbHVtbk9yZGVyKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBmdW5jdGlvbmFsVXBkYXRlKGFjdGlvbi5jb2x1bW5PcmRlciwgc3RhdGUuY29sdW1uT3JkZXIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2aXNpYmxlQ29sdW1ucyQyKGNvbHVtbnMsIF9yZWYyKSB7XG4gICAgdmFyIGNvbHVtbk9yZGVyID0gX3JlZjIuaW5zdGFuY2Uuc3RhdGUuY29sdW1uT3JkZXI7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBvcmRlciwgcmV0dXJuIHRoZSBub3JtYWwgY29sdW1uc1xuICAgIGlmICghY29sdW1uT3JkZXIgfHwgIWNvbHVtbk9yZGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbk9yZGVyQ29weSA9IFtdLmNvbmNhdChjb2x1bW5PcmRlcik7IC8vIElmIHRoZXJlIGlzIGFuIG9yZGVyLCBtYWtlIGEgY29weSBvZiB0aGUgY29sdW1uc1xuXG4gICAgdmFyIGNvbHVtbnNDb3B5ID0gW10uY29uY2F0KGNvbHVtbnMpOyAvLyBBbmQgbWFrZSBhIG5ldyBvcmRlcmVkIGFycmF5IG9mIHRoZSBjb2x1bW5zXG5cbiAgICB2YXIgY29sdW1uc0luT3JkZXIgPSBbXTsgLy8gTG9vcCBvdmVyIHRoZSBjb2x1bW5zIGFuZCBwbGFjZSB0aGVtIGluIG9yZGVyIGludG8gdGhlIG5ldyBhcnJheVxuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICB2YXIgdGFyZ2V0Q29sdW1uSWQgPSBjb2x1bW5PcmRlckNvcHkuc2hpZnQoKTtcbiAgICAgIHZhciBmb3VuZEluZGV4ID0gY29sdW1uc0NvcHkuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSB0YXJnZXRDb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZm91bmRJbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbHVtbnNJbk9yZGVyLnB1c2goY29sdW1uc0NvcHkuc3BsaWNlKGZvdW5kSW5kZXgsIDEpWzBdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2hpbGUgKGNvbHVtbnNDb3B5Lmxlbmd0aCAmJiBjb2x1bW5PcmRlckNvcHkubGVuZ3RoKSB7XG4gICAgICBfbG9vcCgpO1xuICAgIH0gLy8gSWYgdGhlcmUgYXJlIGFueSBjb2x1bW5zIGxlZnQsIGFkZCB0aGVtIHRvIHRoZSBlbmRcblxuXG4gICAgcmV0dXJuIFtdLmNvbmNhdChjb2x1bW5zSW5PcmRlciwgY29sdW1uc0NvcHkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkYShpbnN0YW5jZSkge1xuICAgIHZhciBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuICAgIGluc3RhbmNlLnNldENvbHVtbk9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbk9yZGVyKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldENvbHVtbk9yZGVyLFxuICAgICAgICBjb2x1bW5PcmRlcjogY29sdW1uT3JkZXJcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICB9XG5cbiAgZGVmYXVsdENvbHVtbi5jYW5SZXNpemUgPSB0cnVlOyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5jb2x1bW5TdGFydFJlc2l6aW5nID0gJ2NvbHVtblN0YXJ0UmVzaXppbmcnO1xuICBhY3Rpb25zLmNvbHVtblJlc2l6aW5nID0gJ2NvbHVtblJlc2l6aW5nJztcbiAgYWN0aW9ucy5jb2x1bW5Eb25lUmVzaXppbmcgPSAnY29sdW1uRG9uZVJlc2l6aW5nJztcbiAgYWN0aW9ucy5yZXNldFJlc2l6ZSA9ICdyZXNldFJlc2l6ZSc7XG4gIHZhciB1c2VSZXNpemVDb2x1bW5zID0gZnVuY3Rpb24gdXNlUmVzaXplQ29sdW1ucyhob29rcykge1xuICAgIGhvb2tzLmdldFJlc2l6ZXJQcm9wcyA9IFtkZWZhdWx0R2V0UmVzaXplclByb3BzXTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9XG4gICAgfSk7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSRiKTtcbiAgICBob29rcy51c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMucHVzaCh1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMkMSk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRSZXNpemVyUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0UmVzaXplclByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXI7XG4gICAgdmFyIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG5cbiAgICB2YXIgb25SZXNpemVTdGFydCA9IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoZSwgaGVhZGVyKSB7XG4gICAgICB2YXIgaXNUb3VjaEV2ZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAvLyBsZXRzIG5vdCByZXNwb25kIHRvIG11bHRpcGxlIHRvdWNoZXMgKGUuZy4gMiBvciAzIGZpbmdlcnMpXG4gICAgICAgIGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpc1RvdWNoRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVhZGVyc1RvUmVzaXplID0gZ2V0TGVhZkhlYWRlcnMoaGVhZGVyKTtcbiAgICAgIHZhciBoZWFkZXJJZFdpZHRocyA9IGhlYWRlcnNUb1Jlc2l6ZS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFtkLmlkLCBkLnRvdGFsV2lkdGhdO1xuICAgICAgfSk7XG4gICAgICB2YXIgY2xpZW50WCA9IGlzVG91Y2hFdmVudCA/IE1hdGgucm91bmQoZS50b3VjaGVzWzBdLmNsaWVudFgpIDogZS5jbGllbnRYO1xuXG4gICAgICB2YXIgZGlzcGF0Y2hNb3ZlID0gZnVuY3Rpb24gZGlzcGF0Y2hNb3ZlKGNsaWVudFhQb3MpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMuY29sdW1uUmVzaXppbmcsXG4gICAgICAgICAgY2xpZW50WDogY2xpZW50WFBvc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBkaXNwYXRjaEVuZCA9IGZ1bmN0aW9uIGRpc3BhdGNoRW5kKCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMuY29sdW1uRG9uZVJlc2l6aW5nXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIGhhbmRsZXJzQW5kRXZlbnRzID0ge1xuICAgICAgICBtb3VzZToge1xuICAgICAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICAgICAgbW92ZUhhbmRsZXI6IGZ1bmN0aW9uIG1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaE1vdmUoZS5jbGllbnRYKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwRXZlbnQ6ICdtb3VzZXVwJyxcbiAgICAgICAgICB1cEhhbmRsZXI6IGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVyc0FuZEV2ZW50cy5tb3VzZS5tb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlcnNBbmRFdmVudHMubW91c2UudXBIYW5kbGVyKTtcbiAgICAgICAgICAgIGRpc3BhdGNoRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b3VjaDoge1xuICAgICAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICAgICAgbW92ZUhhbmRsZXI6IGZ1bmN0aW9uIG1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwYXRjaE1vdmUoZS50b3VjaGVzWzBdLmNsaWVudFgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBFdmVudDogJ3RvdWNoZW5kJyxcbiAgICAgICAgICB1cEhhbmRsZXI6IGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoLm1vdmVFdmVudCwgaGFuZGxlcnNBbmRFdmVudHMudG91Y2gubW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC51cEV2ZW50LCBoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC5tb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkaXNwYXRjaEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBldmVudHMgPSBpc1RvdWNoRXZlbnQgPyBoYW5kbGVyc0FuZEV2ZW50cy50b3VjaCA6IGhhbmRsZXJzQW5kRXZlbnRzLm1vdXNlO1xuICAgICAgdmFyIHBhc3NpdmVJZlN1cHBvcnRlZCA9IHBhc3NpdmVFdmVudFN1cHBvcnRlZCgpID8ge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZUV2ZW50LCBldmVudHMubW92ZUhhbmRsZXIsIHBhc3NpdmVJZlN1cHBvcnRlZCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy51cEV2ZW50LCBldmVudHMudXBIYW5kbGVyLCBwYXNzaXZlSWZTdXBwb3J0ZWQpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmNvbHVtblN0YXJ0UmVzaXppbmcsXG4gICAgICAgIGNvbHVtbklkOiBoZWFkZXIuaWQsXG4gICAgICAgIGNvbHVtbldpZHRoOiBoZWFkZXIudG90YWxXaWR0aCxcbiAgICAgICAgaGVhZGVySWRXaWR0aHM6IGhlYWRlcklkV2lkdGhzLFxuICAgICAgICBjbGllbnRYOiBjbGllbnRYXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucGVyc2lzdCgpIHx8IG9uUmVzaXplU3RhcnQoZSwgaGVhZGVyKTtcbiAgICAgIH0sXG4gICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHJldHVybiBlLnBlcnNpc3QoKSB8fCBvblJlc2l6ZVN0YXJ0KGUsIGhlYWRlcik7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZSdcbiAgICAgIH0sXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgcm9sZTogJ3NlcGFyYXRvcidcbiAgICB9XTtcbiAgfTtcblxuICB1c2VSZXNpemVDb2x1bW5zLnBsdWdpbk5hbWUgPSAndXNlUmVzaXplQ29sdW1ucyc7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciRiKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRSZXNpemUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5TdGFydFJlc2l6aW5nKSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGFjdGlvbi5jbGllbnRYLFxuICAgICAgICAgIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIGNvbHVtbldpZHRoID0gYWN0aW9uLmNvbHVtbldpZHRoLFxuICAgICAgICAgIGhlYWRlcklkV2lkdGhzID0gYWN0aW9uLmhlYWRlcklkV2lkdGhzO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgc3RhcnRYOiBjbGllbnRYLFxuICAgICAgICAgIGhlYWRlcklkV2lkdGhzOiBoZWFkZXJJZFdpZHRocyxcbiAgICAgICAgICBjb2x1bW5XaWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgICAgaXNSZXNpemluZ0NvbHVtbjogY29sdW1uSWRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5SZXNpemluZykge1xuICAgICAgdmFyIF9jbGllbnRYID0gYWN0aW9uLmNsaWVudFg7XG5cbiAgICAgIHZhciBfc3RhdGUkY29sdW1uUmVzaXppbmcgPSBzdGF0ZS5jb2x1bW5SZXNpemluZyxcbiAgICAgICAgICBzdGFydFggPSBfc3RhdGUkY29sdW1uUmVzaXppbmcuc3RhcnRYLFxuICAgICAgICAgIF9jb2x1bW5XaWR0aCA9IF9zdGF0ZSRjb2x1bW5SZXNpemluZy5jb2x1bW5XaWR0aCxcbiAgICAgICAgICBfc3RhdGUkY29sdW1uUmVzaXppbmcyID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nLmhlYWRlcklkV2lkdGhzLFxuICAgICAgICAgIF9oZWFkZXJJZFdpZHRocyA9IF9zdGF0ZSRjb2x1bW5SZXNpemluZzIgPT09IHZvaWQgMCA/IFtdIDogX3N0YXRlJGNvbHVtblJlc2l6aW5nMjtcblxuICAgICAgdmFyIGRlbHRhWCA9IF9jbGllbnRYIC0gc3RhcnRYO1xuICAgICAgdmFyIHBlcmNlbnRhZ2VEZWx0YVggPSBkZWx0YVggLyBfY29sdW1uV2lkdGg7XG4gICAgICB2YXIgbmV3Q29sdW1uV2lkdGhzID0ge307XG5cbiAgICAgIF9oZWFkZXJJZFdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgaGVhZGVySWQgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGhlYWRlcldpZHRoID0gX3JlZjJbMV07XG4gICAgICAgIG5ld0NvbHVtbldpZHRoc1toZWFkZXJJZF0gPSBNYXRoLm1heChoZWFkZXJXaWR0aCArIGhlYWRlcldpZHRoICogcGVyY2VudGFnZURlbHRhWCwgMCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiBfZXh0ZW5kcyh7fSwgc3RhdGUuY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGhzLCB7fSwgbmV3Q29sdW1uV2lkdGhzKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmNvbHVtbkRvbmVSZXNpemluZykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgc3RhcnRYOiBudWxsLFxuICAgICAgICAgIGlzUmVzaXppbmdDb2x1bW46IG51bGxcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMkMSA9IGZ1bmN0aW9uIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyhpbnN0YW5jZSkge1xuICAgIHZhciBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBkaXNhYmxlUmVzaXppbmcgPSBpbnN0YW5jZS5kaXNhYmxlUmVzaXppbmcsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIGNvbHVtblJlc2l6aW5nID0gaW5zdGFuY2Uuc3RhdGUuY29sdW1uUmVzaXppbmc7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIHZhciBjYW5SZXNpemUgPSBnZXRGaXJzdERlZmluZWQoaGVhZGVyLmRpc2FibGVSZXNpemluZyA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlUmVzaXppbmcgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICBoZWFkZXIuY2FuUmVzaXplID0gY2FuUmVzaXplO1xuICAgICAgaGVhZGVyLndpZHRoID0gY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGhzW2hlYWRlci5pZF0gfHwgaGVhZGVyLm9yaWdpbmFsV2lkdGggfHwgaGVhZGVyLndpZHRoO1xuICAgICAgaGVhZGVyLmlzUmVzaXppbmcgPSBjb2x1bW5SZXNpemluZy5pc1Jlc2l6aW5nQ29sdW1uID09PSBoZWFkZXIuaWQ7XG5cbiAgICAgIGlmIChjYW5SZXNpemUpIHtcbiAgICAgICAgaGVhZGVyLmdldFJlc2l6ZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0UmVzaXplclByb3BzLCB7XG4gICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkYihpbnN0YW5jZSkge1xuICAgIHZhciBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFJlID0gaW5zdGFuY2UuYXV0b1Jlc2V0UmVzaXplLFxuICAgICAgICBhdXRvUmVzZXRSZXNpemUgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0UmUgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0UmUsXG4gICAgICAgIGNvbHVtbnMgPSBpbnN0YW5jZS5jb2x1bW5zO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlQWJzb2x1dGVMYXlvdXQnXSwgJ3VzZVJlc2l6ZUNvbHVtbnMnKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0UmVzaXplID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFJlc2l6ZSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0UmVzaXplKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRSZXNpemVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2NvbHVtbnNdKTtcbiAgICB2YXIgcmVzZXRSZXNpemluZyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRSZXNpemVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHJlc2V0UmVzaXppbmc6IHJlc2V0UmVzaXppbmdcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlYWZIZWFkZXJzKGhlYWRlcikge1xuICAgIHZhciBsZWFmSGVhZGVycyA9IFtdO1xuXG4gICAgdmFyIHJlY3Vyc2VIZWFkZXIgPSBmdW5jdGlvbiByZWN1cnNlSGVhZGVyKGhlYWRlcikge1xuICAgICAgaWYgKGhlYWRlci5jb2x1bW5zICYmIGhlYWRlci5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICBoZWFkZXIuY29sdW1ucy5tYXAocmVjdXJzZUhlYWRlcik7XG4gICAgICB9XG5cbiAgICAgIGxlYWZIZWFkZXJzLnB1c2goaGVhZGVyKTtcbiAgICB9O1xuXG4gICAgcmVjdXJzZUhlYWRlcihoZWFkZXIpO1xuICAgIHJldHVybiBsZWFmSGVhZGVycztcbiAgfVxuXG4gIHZhciBjZWxsU3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMFxuICB9O1xuICB2YXIgdXNlQWJzb2x1dGVMYXlvdXQgPSBmdW5jdGlvbiB1c2VBYnNvbHV0ZUxheW91dChob29rcykge1xuICAgIGhvb2tzLmdldFRhYmxlQm9keVByb3BzLnB1c2goZ2V0Um93U3R5bGVzKTtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0SGVhZGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmLmNvbHVtbjtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzLCB7XG4gICAgICAgICAgbGVmdDogY29sdW1uLnRvdGFsTGVmdCArIFwicHhcIixcbiAgICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICAgIGhvb2tzLmdldENlbGxQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjIpIHtcbiAgICAgIHZhciBjZWxsID0gX3JlZjIuY2VsbDtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzLCB7XG4gICAgICAgICAgbGVmdDogY2VsbC5jb2x1bW4udG90YWxMZWZ0ICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjMpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmMy5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNvbHVtbi50b3RhbExlZnQgKyBcInB4XCIsXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgfTtcbiAgdXNlQWJzb2x1dGVMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VBYnNvbHV0ZUxheW91dCc7XG5cbiAgdmFyIGdldFJvd1N0eWxlcyA9IGZ1bmN0aW9uIGdldFJvd1N0eWxlcyhwcm9wcywgX3JlZjQpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNC5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IGluc3RhbmNlLnRvdGFsQ29sdW1uc1dpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGNlbGxTdHlsZXMkMSA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9O1xuXG4gIHZhciBnZXRSb3dTdHlsZXMkMSA9IGZ1bmN0aW9uIGdldFJvd1N0eWxlcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB3aWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgdXNlQmxvY2tMYXlvdXQgPSBmdW5jdGlvbiB1c2VCbG9ja0xheW91dChob29rcykge1xuICAgIGhvb2tzLmdldFJvd1Byb3BzLnB1c2goZ2V0Um93U3R5bGVzJDEpO1xuICAgIGhvb2tzLmdldEhlYWRlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMSk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQxKTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjIpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcyQxLCB7XG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRDZWxsUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYzKSB7XG4gICAgICB2YXIgY2VsbCA9IF9yZWYzLmNlbGw7XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcyQxLCB7XG4gICAgICAgICAgd2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICAgIGhvb2tzLmdldEZvb3RlclByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmNCkge1xuICAgICAgdmFyIGNvbHVtbiA9IF9yZWY0LmNvbHVtbjtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzJDEsIHtcbiAgICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICB9O1xuICB1c2VCbG9ja0xheW91dC5wbHVnaW5OYW1lID0gJ3VzZUJsb2NrTGF5b3V0JztcblxuICBmdW5jdGlvbiB1c2VGbGV4TGF5b3V0KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VGFibGVQcm9wcy5wdXNoKGdldFRhYmxlUHJvcHMpO1xuICAgIGhvb2tzLmdldFJvd1Byb3BzLnB1c2goZ2V0Um93U3R5bGVzJDIpO1xuICAgIGhvb2tzLmdldEhlYWRlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMik7XG4gICAgaG9va3MuZ2V0Rm9vdGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQyKTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKGdldEhlYWRlclByb3BzKTtcbiAgICBob29rcy5nZXRDZWxsUHJvcHMucHVzaChnZXRDZWxsUHJvcHMpO1xuICAgIGhvb2tzLmdldEZvb3RlclByb3BzLnB1c2goZ2V0Rm9vdGVyUHJvcHMpO1xuICB9XG4gIHVzZUZsZXhMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VGbGV4TGF5b3V0JztcblxuICB2YXIgZ2V0VGFibGVQcm9wcyA9IGZ1bmN0aW9uIGdldFRhYmxlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG1pbldpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNNaW5XaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRSb3dTdHlsZXMkMiA9IGZ1bmN0aW9uIGdldFJvd1N0eWxlcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgICAgIG1pbldpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNNaW5XaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRIZWFkZXJQcm9wcyA9IGZ1bmN0aW9uIGdldEhlYWRlclByb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMy5jb2x1bW47XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGZsZXg6IGNvbHVtbi50b3RhbEZsZXhXaWR0aCA/IGNvbHVtbi50b3RhbEZsZXhXaWR0aCArIFwiIDAgYXV0b1wiIDogdW5kZWZpbmVkLFxuICAgICAgICBtaW5XaWR0aDogY29sdW1uLnRvdGFsTWluV2lkdGggKyBcInB4XCIsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRDZWxsUHJvcHMgPSBmdW5jdGlvbiBnZXRDZWxsUHJvcHMocHJvcHMsIF9yZWY0KSB7XG4gICAgdmFyIGNlbGwgPSBfcmVmNC5jZWxsO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4OiBjZWxsLmNvbHVtbi50b3RhbEZsZXhXaWR0aCArIFwiIDAgYXV0b1wiLFxuICAgICAgICBtaW5XaWR0aDogY2VsbC5jb2x1bW4udG90YWxNaW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgd2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Rm9vdGVyUHJvcHMgPSBmdW5jdGlvbiBnZXRGb290ZXJQcm9wcyhwcm9wcywgX3JlZjUpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjUuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4OiBjb2x1bW4udG90YWxGbGV4V2lkdGggPyBjb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWluV2lkdGg6IGNvbHVtbi50b3RhbE1pbldpZHRoICsgXCJweFwiLFxuICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICBmdW5jdGlvbiB1c2VHcmlkTGF5b3V0KGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYyk7XG4gICAgaG9va3MuZ2V0VGFibGVQcm9wcy5wdXNoKGdldFRhYmxlUHJvcHMkMSk7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChnZXRIZWFkZXJQcm9wcyQxKTtcbiAgfVxuICB1c2VHcmlkTGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlR3JpZExheW91dCc7XG5cbiAgdmFyIGdldFRhYmxlUHJvcHMkMSA9IGZ1bmN0aW9uIGdldFRhYmxlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBpbnN0YW5jZS5zdGF0ZS5ncmlkTGF5b3V0LmNvbHVtbldpZHRocy5tYXAoZnVuY3Rpb24gKHcpIHtcbiAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfSkuam9pbihcIiBcIilcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0SGVhZGVyUHJvcHMkMSA9IGZ1bmN0aW9uIGdldEhlYWRlclByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgaWQ6IFwiaGVhZGVyLWNlbGwtXCIgKyBjb2x1bW4uaWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogXCJzdGlja3lcIiAvL2VuYWJsZXMgYSBzY3JvbGwgd3JhcHBlciB0byBiZSBwbGFjZWQgYXJvdW5kIHRoZSB0YWJsZSBhbmQgaGF2ZSBzdGlja3kgaGVhZGVyc1xuXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVkdWNlciRjKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBcImluaXRcIikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZ3JpZExheW91dDoge1xuICAgICAgICAgIGNvbHVtbldpZHRoczogaW5zdGFuY2UuY29sdW1ucy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiY29sdW1uU3RhcnRSZXNpemluZ1wiKSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQ7XG4gICAgICB2YXIgY29sdW1uSW5kZXggPSBpbnN0YW5jZS52aXNpYmxlQ29sdW1ucy5maW5kSW5kZXgoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gY29sLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIGVsV2lkdGggPSBnZXRFbGVtZW50V2lkdGgoY29sdW1uSWQpO1xuXG4gICAgICBpZiAoZWxXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBncmlkTGF5b3V0OiBfZXh0ZW5kcyh7fSwgc3RhdGUuZ3JpZExheW91dCwge1xuICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbHVtbkluZGV4LFxuICAgICAgICAgICAgc3RhcnRpbmdXaWR0aDogZWxXaWR0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJjb2x1bW5SZXNpemluZ1wiKSB7XG4gICAgICB2YXIgX3N0YXRlJGdyaWRMYXlvdXQgPSBzdGF0ZS5ncmlkTGF5b3V0LFxuICAgICAgICAgIF9jb2x1bW5JbmRleCA9IF9zdGF0ZSRncmlkTGF5b3V0LmNvbHVtbkluZGV4LFxuICAgICAgICAgIHN0YXJ0aW5nV2lkdGggPSBfc3RhdGUkZ3JpZExheW91dC5zdGFydGluZ1dpZHRoLFxuICAgICAgICAgIGNvbHVtbldpZHRocyA9IF9zdGF0ZSRncmlkTGF5b3V0LmNvbHVtbldpZHRocztcbiAgICAgIHZhciBjaGFuZ2UgPSBzdGF0ZS5jb2x1bW5SZXNpemluZy5zdGFydFggLSBhY3Rpb24uY2xpZW50WDtcbiAgICAgIHZhciBuZXdXaWR0aCA9IHN0YXJ0aW5nV2lkdGggLSBjaGFuZ2U7XG4gICAgICB2YXIgY29sdW1uV2lkdGhzQ29weSA9IFtdLmNvbmNhdChjb2x1bW5XaWR0aHMpO1xuICAgICAgY29sdW1uV2lkdGhzQ29weVtfY29sdW1uSW5kZXhdID0gbmV3V2lkdGggKyBcInB4XCI7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyaWRMYXlvdXQ6IF9leHRlbmRzKHt9LCBzdGF0ZS5ncmlkTGF5b3V0LCB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiBjb2x1bW5XaWR0aHNDb3B5XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbGVtZW50V2lkdGgoY29sdW1uSWQpIHtcbiAgICB2YXIgX2RvY3VtZW50JGdldEVsZW1lbnRCO1xuXG4gICAgdmFyIHdpZHRoID0gKF9kb2N1bWVudCRnZXRFbGVtZW50QiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWNlbGwtXCIgKyBjb2x1bW5JZCkpID09IG51bGwgPyB2b2lkIDAgOiBfZG9jdW1lbnQkZ2V0RWxlbWVudEIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydHMuX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucyA9IF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnM7XG4gIGV4cG9ydHMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gIGV4cG9ydHMuZGVmYXVsdENvbHVtbiA9IGRlZmF1bHRDb2x1bW47XG4gIGV4cG9ydHMuZGVmYXVsdEdyb3VwQnlGbiA9IGRlZmF1bHRHcm91cEJ5Rm47XG4gIGV4cG9ydHMuZGVmYXVsdE9yZGVyQnlGbiA9IGRlZmF1bHRPcmRlckJ5Rm47XG4gIGV4cG9ydHMuZGVmYXVsdFJlbmRlcmVyID0gZGVmYXVsdFJlbmRlcmVyO1xuICBleHBvcnRzLmVtcHR5UmVuZGVyZXIgPSBlbXB0eVJlbmRlcmVyO1xuICBleHBvcnRzLmVuc3VyZVBsdWdpbk9yZGVyID0gZW5zdXJlUGx1Z2luT3JkZXI7XG4gIGV4cG9ydHMuZmxleFJlbmRlciA9IGZsZXhSZW5kZXI7XG4gIGV4cG9ydHMuZnVuY3Rpb25hbFVwZGF0ZSA9IGZ1bmN0aW9uYWxVcGRhdGU7XG4gIGV4cG9ydHMubG9vcEhvb2tzID0gbG9vcEhvb2tzO1xuICBleHBvcnRzLm1ha2VQcm9wR2V0dGVyID0gbWFrZVByb3BHZXR0ZXI7XG4gIGV4cG9ydHMubWFrZVJlbmRlcmVyID0gbWFrZVJlbmRlcmVyO1xuICBleHBvcnRzLnJlZHVjZUhvb2tzID0gcmVkdWNlSG9va3M7XG4gIGV4cG9ydHMuc2FmZVVzZUxheW91dEVmZmVjdCA9IHNhZmVVc2VMYXlvdXRFZmZlY3Q7XG4gIGV4cG9ydHMudXNlQWJzb2x1dGVMYXlvdXQgPSB1c2VBYnNvbHV0ZUxheW91dDtcbiAgZXhwb3J0cy51c2VBc3luY0RlYm91bmNlID0gdXNlQXN5bmNEZWJvdW5jZTtcbiAgZXhwb3J0cy51c2VCbG9ja0xheW91dCA9IHVzZUJsb2NrTGF5b3V0O1xuICBleHBvcnRzLnVzZUNvbHVtbk9yZGVyID0gdXNlQ29sdW1uT3JkZXI7XG4gIGV4cG9ydHMudXNlRXhwYW5kZWQgPSB1c2VFeHBhbmRlZDtcbiAgZXhwb3J0cy51c2VGaWx0ZXJzID0gdXNlRmlsdGVycztcbiAgZXhwb3J0cy51c2VGbGV4TGF5b3V0ID0gdXNlRmxleExheW91dDtcbiAgZXhwb3J0cy51c2VHZXRMYXRlc3QgPSB1c2VHZXRMYXRlc3Q7XG4gIGV4cG9ydHMudXNlR2xvYmFsRmlsdGVyID0gdXNlR2xvYmFsRmlsdGVyO1xuICBleHBvcnRzLnVzZUdyaWRMYXlvdXQgPSB1c2VHcmlkTGF5b3V0O1xuICBleHBvcnRzLnVzZUdyb3VwQnkgPSB1c2VHcm91cEJ5O1xuICBleHBvcnRzLnVzZU1vdW50ZWRMYXlvdXRFZmZlY3QgPSB1c2VNb3VudGVkTGF5b3V0RWZmZWN0O1xuICBleHBvcnRzLnVzZVBhZ2luYXRpb24gPSB1c2VQYWdpbmF0aW9uO1xuICBleHBvcnRzLnVzZVJlc2l6ZUNvbHVtbnMgPSB1c2VSZXNpemVDb2x1bW5zO1xuICBleHBvcnRzLnVzZVJvd1NlbGVjdCA9IHVzZVJvd1NlbGVjdDtcbiAgZXhwb3J0cy51c2VSb3dTdGF0ZSA9IHVzZVJvd1N0YXRlO1xuICBleHBvcnRzLnVzZVNvcnRCeSA9IHVzZVNvcnRCeTtcbiAgZXhwb3J0cy51c2VUYWJsZSA9IHVzZVRhYmxlO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC10YWJsZS5kZXZlbG9wbWVudC5qcy5tYXBcbiIsImlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3JlYWN0LXRhYmxlLnByb2R1Y3Rpb24ubWluLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3JlYWN0LXRhYmxlLmRldmVsb3BtZW50LmpzJylcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvVGFibGVcIjtcclxuaW1wb3J0IHsgdXNlQm9vbWlBUEkgfSBmcm9tIFwiQGNvbXBvbmVudHMvdG9vbHMvQm9vbWlBUElcIjtcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnQHN0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5jb25zdCBJbXBsZW1lbnRhdGlvbjogRkM8eyBuYW1lOiBzdHJpbmcgfT4gPSAoeyBuYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IHsgdGl0bGU6IG5hbWUsIGRlc2NyaXB0aW9uOiBgQW4gaW1wbG1lbnRhdGlvbiBvZiB0aGUgSFNXJ3MgQm9vbWkgQVBJICR7bmFtZX0gRnVuY3Rpb25hbGl0eWAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2BJbXBsZW1lbnRhdGlvbjogJHtuYW1lfSB8IEhTVyBCb29taSBBUElgfSBtZXRhPXttZXRhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+e25hbWV9IEltcGxlbWVudGF0aW9uczwvaDI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8YW55IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gIGNvbnN0IHBheWxvYWQgPSB7IFwibG9jYXRpb24taWRzXCIgOiBbXCIxMjEwMFwiLCBcIjEyMDc3XCJdLCBcIlNLVXNcIiA6IFtcIkxUVzkxNDFcIixcIkxUVzkyNTJcIixcIkxUVzkxMzVcIl0gfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgIC50aGVuKHJlcyA9PiBzZXRSZXNwb25zZShyZXMuZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gc2V0RXJyb3IoZXJyKSlcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IFNvSCA9IHJlc3BvbnNlPy5yZXN1bHRzLm1hcCgoc3RvcmU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlKVxyXG4gICAgICAgIHJldHVybiB7IHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sIHN0b3JlTmFtZTogc3RvcmVbXCJsb2NhdGlvbi1uYW1lXCJdLCAuLi5zdG9yZS5hdmFpbGFiaWxpdHkucmVkdWNlKChvYmo6IGFueSwgaXRlbTogYW55KSA9PiB7IG9ialtpdGVtW1wicHJvZHVjdC1jb2RlXCJdXSA9IGl0ZW1bXCJxdWFudGl0eVwiXTsgcmV0dXJuIG9iajsgfSwge30pIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBTb0g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB7c3RvcmVJRDogXCJhXCJ9LCB7c3RvcmVJRDogXCJiXCJ9LCBdO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJhc2UgPSBbIHsgSGVhZGVyOiAnU3RvcmUgSUQnLCBhY2Nlc3NvcjogJ3N0b3JlSUQnIH0sIHsgSGVhZGVyOiAnU3RvcmUgTmFtZScsIGFjY2Vzc29yOiAnc3RvcmVOYW1lJyB9IF07XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gbmV3IFNldCgpO1xyXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHJlc3BvbnNlPy5yZXN1bHRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHN0b3JlLmF2YWlsYWJpbGl0eSkge1xyXG4gICAgICAgICAgcHJvZHVjdHMuYWRkKGl0ZW1bXCJwcm9kdWN0LWNvZGVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2R1Y3RzLmtleXMoKSkge1xyXG4gICAgICAgIGJhc2UucHVzaCh7IEhlYWRlcjogaXRlbSwgYWNjZXNzb3I6IGl0ZW0gfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJhc2UuY29uY2F0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFzZS5wdXNoKHsgSGVhZGVyOiAnTFRXOTEzNScsIGFjY2Vzc29yOiAnTFRXOTEzNScgfSk7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIHtib29taUFQSS5lbmRwb2ludC51cml9XHJcbiAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9