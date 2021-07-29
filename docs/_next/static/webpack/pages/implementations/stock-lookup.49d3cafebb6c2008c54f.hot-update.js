webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./components/tools/loading.module.css":
/*!*********************************************!*\
  !*** ./components/tools/loading.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./loading.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/loading.module.css");

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
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./loading.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/loading.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./loading.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/loading.module.css");

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

/***/ "./components/tools/loading.tsx":
/*!**************************************!*\
  !*** ./components/tools/loading.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.module.css */ "./components/tools/loading.module.css");
/* harmony import */ var _loading_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\components\\tools\\loading.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Loading = function Loading(_ref) {
  var _ref$diameter = _ref.diameter,
      diameter = _ref$diameter === void 0 ? '120px' : _ref$diameter,
      _ref$thickness = _ref.thickness,
      thickness = _ref$thickness === void 0 ? '16px' : _ref$thickness,
      _ref$iterationSpeed = _ref.iterationSpeed,
      iterationSpeed = _ref$iterationSpeed === void 0 ? "2s" : _ref$iterationSpeed,
      _ref$primaryColour = _ref.primaryColour,
      primaryColour = _ref$primaryColour === void 0 ? "rgb(34, 203, 255)" : _ref$primaryColour,
      _ref$secondaryColour = _ref.secondaryColour,
      secondaryColour = _ref$secondaryColour === void 0 ? "whitesmoke" : _ref$secondaryColour;
  return __jsx("span", {
    style: {
      width: diameter,
      height: diameter,
      borderWidth: thickness,
      borderColor: secondaryColour,
      borderTopColor: primaryColour,
      animationDuration: iterationSpeed
    },
    className: _loading_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  });
};

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

$RefreshReg$(_c, "Loading");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/tools/loading.module.css":
/*!*********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/tools/loading.module.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading_loading__1lCfg {\r\n    display: block;\r\n    border-style: solid;\r\n    border-radius: 50%;\r\n    -webkit-animation: loading_spin__l_wS7 2s linear infinite;\r\n    animation: loading_spin__l_wS7 2s linear infinite;\r\n\r\n    margin: 0 auto;\r\n}\r\n  \r\n/* Safari */\r\n@-webkit-keyframes loading_spin__l_wS7 {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n}\r\n  \r\n@keyframes loading_spin__l_wS7 {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}", "",{"version":3,"sources":["webpack://components/tools/loading.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,yDAA0C;IAC1C,iDAAkC;;IAElC,cAAc;AAClB;;AAEA,WAAW;AACX;IACI,KAAK,+BAA+B,EAAE;IACtC,OAAO,iCAAiC,EAAE;AAC9C;;AAEA;IACI,KAAK,+BAAuB,EAAvB,uBAAuB,EAAE;IAC9B,OAAO,iCAAyB,EAAzB,yBAAyB,EAAE;AACtC","sourcesContent":[".loading {\r\n    display: block;\r\n    border-style: solid;\r\n    border-radius: 50%;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n\r\n    margin: 0 auto;\r\n}\r\n  \r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n}\r\n  \r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loading": "loading_loading__1lCfg",
	"spin": "loading_spin__l_wS7"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/implementations/stock-lookup.tsx":
/*!************************************************!*\
  !*** ./pages/implementations/stock-lookup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_implementation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/implementation */ "./components/implementation.tsx");
/* harmony import */ var _components_tools_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/tools/Table */ "./components/tools/Table.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lib/hooks */ "./lib/hooks.ts");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_tools_iframe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/tools/iframe */ "./components/tools/iframe.tsx");
/* harmony import */ var _components_tools_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/tools/loading */ "./components/tools/loading.tsx");




var _jsxFileName = "C:\\dev\\documentation.hsw.com.au\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











// eslint-disable-next-line max-lines-per-function
var StockLookup = function StockLookup() {
  _s();

  var _error$response, _error$response$data, _error$response2, _error$response2$data;

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("12100 12077"),
      stores = _useState[0],
      setStores = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("LTW9141 LTW9252 LTW9135"),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useLoad = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_8__["useLoad"])(),
      response = _useLoad.response,
      error = _useLoad.error,
      isLoading = _useLoad.isLoading,
      load = _useLoad.load;

  function loader() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise( /*#__PURE__*/function () {
      var _ref = Object(C_dev_documentation_hsw_com_au_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(resolve, reject) {
        var parser, payload, resp;
        return C_dev_documentation_hsw_com_au_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                parser = function parser(input) {
                  return input.split(/\s*,\s*|\s+/).filter(function (item) {
                    return item != "" && item;
                  });
                };

                payload = {
                  "location-ids": parser(stores),
                  "SKUs": parser(products)
                };
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload);

              case 5:
                resp = _context.sent;
                resolve(resp.data);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
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
        }, (store.availability || []).reduce(function (obj, item) {
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
    var base = [['Store ID', 'storeID'], ['Store Name', 'storeName']];

    if (response && !error) {
      var _products = new Set();

      var _iterator = _createForOfIteratorHelper(response === null || response === void 0 ? void 0 : response.results),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var store = _step.value;

          var _iterator3 = _createForOfIteratorHelper(store.availability || []),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;

              _products.add(item["product-code"]);
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

      var _iterator2 = _createForOfIteratorHelper(_products.keys()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _item = _step2.value;
          base.push([_item, _item]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return Object(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["headers"])(base, data);
    }

    return Object(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["headers"])([["Error / Message", "msg"]], data);
  }, [response]);

  var onSubmit = function onSubmit(e) {
    load(loader);
    e.preventDefault();
  };

  var onChangeStores = function onChangeStores(e) {
    setStores(e.currentTarget.value);
  };

  var onChangeProducts = function onChangeProducts(e) {
    setProducts(e.currentTarget.value);
  };

  var a = axios__WEBPACK_IMPORTED_MODULE_4___default.a.isAxiosError(error) ? (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.toString() : "No detailed error message from the server.";
  console.log(a);
  return __jsx(_components_implementation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    style: {
      margin: "auto",
      maxWidth: "20rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "Stores: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: stores,
    onChange: onChangeStores,
    placeholder: "Store IDs seperated by spaces",
    style: {
      "width": "200px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 194
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "Products: "), __jsx("input", {
    type: "text",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: products,
    onChange: onChangeProducts,
    placeholder: "Item Numbers seperated by spaces",
    style: {
      "width": "225px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 203
    }
  }), __jsx("input", {
    type: "submit",
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.input,
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }), isLoading ? __jsx(_components_tools_loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }) : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    getRowProps: function getRowProps() {
      return {};
    },
    style: {
      margin: "auto",
      maxWidth: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Error: ", error === null || error === void 0 ? void 0 : error.toString()), __jsx(_components_tools_iframe__WEBPACK_IMPORTED_MODULE_10__["default"], {
    content: axios__WEBPACK_IMPORTED_MODULE_4___default.a.isAxiosError(error) ? (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.toString() : "No detailed error message from the server.",
    style: {
      background: "white",
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 79
    }
  })));
};

_s(StockLookup, "nXXQk1GbxV3/JUQqdGG+OVInjdY=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"], _lib_hooks__WEBPACK_IMPORTED_MODULE_8__["useLoad"]];
});

_c = StockLookup;
/* harmony default export */ __webpack_exports__["default"] = (StockLookup);

var _c;

$RefreshReg$(_c, "StockLookup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9sb2FkaW5nLm1vZHVsZS5jc3M/MzE3OSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9sb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9sb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ltcGxlbWVudGF0aW9ucy9zdG9jay1sb29rdXAudHN4Il0sIm5hbWVzIjpbIkxvYWRpbmciLCJkaWFtZXRlciIsInRoaWNrbmVzcyIsIml0ZXJhdGlvblNwZWVkIiwicHJpbWFyeUNvbG91ciIsInNlY29uZGFyeUNvbG91ciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImJvcmRlclRvcENvbG9yIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzdHlsZXMiLCJsb2FkaW5nIiwiU3RvY2tMb29rdXAiLCJib29taUFQSSIsInVzZUJvb21pQVBJIiwidXNlU3RhdGUiLCJzdG9yZXMiLCJzZXRTdG9yZXMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlTG9hZCIsInJlc3BvbnNlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJsb2FkIiwibG9hZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZXIiLCJpbnB1dCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsInBheWxvYWQiLCJBeGlvcyIsInBvc3QiLCJlbmRwb2ludCIsInVyaSIsInJlc3AiLCJkYXRhIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJ1c2VNZW1vIiwiU29IIiwicmVzdWx0cyIsIm1hcCIsInN0b3JlIiwic3RvcmVJRCIsInN0b3JlTmFtZSIsImF2YWlsYWJpbGl0eSIsInJlZHVjZSIsIm9iaiIsIm1zZyIsImNvbHVtbnMiLCJiYXNlIiwiU2V0IiwiYWRkIiwia2V5cyIsInB1c2giLCJoZWFkZXJzIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZVN0b3JlcyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUHJvZHVjdHMiLCJhIiwiaXNBeGlvc0Vycm9yIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwibWF4V2lkdGgiLCJ1dGlsU3R5bGVzIiwidW5kZWZpbmVkIiwiaGVhZGluZ01kIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLHNOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQywwVUFBZ0w7O0FBRWxOOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLDBVQUFnTDtBQUN0TDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDBVQUFnTDs7QUFFMU07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTs7QUFFQSxJQUFNQSxPQU1KLEdBQUcsU0FOQ0EsT0FNRCxPQU1DO0FBQUEsMkJBTEpDLFFBS0k7QUFBQSxNQUxKQSxRQUtJLDhCQUxPLE9BS1A7QUFBQSw0QkFKSkMsU0FJSTtBQUFBLE1BSkpBLFNBSUksK0JBSlEsTUFJUjtBQUFBLGlDQUhKQyxjQUdJO0FBQUEsTUFISkEsY0FHSSxvQ0FIYSxJQUdiO0FBQUEsZ0NB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QUdBLG1FQUFFO0FBQUksYUFBUyxFQUFFQywrREFBVSxDQUFDRSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUE2Q3ZELEtBQTdDLGFBQTZDQSxLQUE3Qyx1QkFBNkNBLEtBQUssQ0FBRWdELFFBQVAsRUFBN0MsQ0FBRixFQUFzRSxNQUFDLGlFQUFEO0FBQVEsV0FBTyxFQUFFbkMsNENBQUssQ0FBQ2tDLFlBQU4sQ0FBbUIvQyxLQUFuQix3QkFBNEJBLEtBQUssQ0FBQ0QsUUFBbEMsOEVBQTRCLGlCQUFnQm1CLElBQTVDLDBEQUE0QixzQkFBc0I4QixRQUF0QixFQUE1QixHQUErRCw0Q0FBaEY7QUFBOEgsU0FBSyxFQUFFO0FBQUVRLGdCQUFVLEVBQUUsT0FBZDtBQUF1QjFFLFdBQUssRUFBRTtBQUE5QixLQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXRFLENBWkosQ0FERjtBQWtCRCxDQWxHRDs7R0FBTVEsVztVQUNhRSxzRSxFQUc0Qk0sa0Q7OztLQUp6Q1IsVztBQW9HU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC40OWQzY2FmZWJiNmMyMDA4YzU0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9sb2FkaW5nLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2xvYWRpbmcubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2xvYWRpbmcubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvYWRpbmcubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBMb2FkaW5nOiBGQzx7XHJcbiAgZGlhbWV0ZXI/OiBzdHJpbmcsXHJcbiAgdGhpY2tuZXNzPzogc3RyaW5nLFxyXG4gIGl0ZXJhdGlvblNwZWVkPzogc3RyaW5nLFxyXG4gIHByaW1hcnlDb2xvdXI/OiBzdHJpbmcsXHJcbiAgc2Vjb25kYXJ5Q29sb3VyPzogc3RyaW5nXHJcbn0+ID0gKHtcclxuICBkaWFtZXRlciA9ICcxMjBweCcsXHJcbiAgdGhpY2tuZXNzID0gJzE2cHgnLFxyXG4gIGl0ZXJhdGlvblNwZWVkID0gXCIyc1wiLFxyXG4gIHByaW1hcnlDb2xvdXIgPSBcInJnYigzNCwgMjAzLCAyNTUpXCIsXHJcbiAgc2Vjb25kYXJ5Q29sb3VyID0gXCJ3aGl0ZXNtb2tlXCIgXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgd2lkdGg6IGRpYW1ldGVyLFxyXG4gICAgICBoZWlnaHQ6IGRpYW1ldGVyLFxyXG4gICAgICBib3JkZXJXaWR0aDogdGhpY2tuZXNzICxcclxuICAgICAgYm9yZGVyQ29sb3I6IHNlY29uZGFyeUNvbG91cixcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6IHByaW1hcnlDb2xvdXIsXHJcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBpdGVyYXRpb25TcGVlZCxcclxuICAgIH19IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9Pjwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sb2FkaW5nX2xvYWRpbmdfXzFsQ2ZnIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmdfc3Bpbl9fbF93UzcgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICBhbmltYXRpb246IGxvYWRpbmdfc3Bpbl9fbF93UzcgMnMgbGluZWFyIGluZmluaXRlO1xcclxcblxcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuICBcXHJcXG4vKiBTYWZhcmkgKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZ19zcGluX19sX3dTNyB7XFxyXFxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxufVxcclxcbiAgXFxyXFxuQGtleWZyYW1lcyBsb2FkaW5nX3NwaW5fX2xfd1M3IHtcXHJcXG4gICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3Rvb2xzL2xvYWRpbmcubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlEQUEwQztJQUMxQyxpREFBa0M7O0lBRWxDLGNBQWM7QUFDbEI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzlDOztBQUVBO0lBQ0ksS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvYWRpbmcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4gIFxcclxcbi8qIFNhZmFyaSAqL1xcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxyXFxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuICBcXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxyXFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxvYWRpbmdcIjogXCJsb2FkaW5nX2xvYWRpbmdfXzFsQ2ZnXCIsXG5cdFwic3BpblwiOiBcImxvYWRpbmdfc3Bpbl9fbF93UzdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJbXBsZW1lbnRhdGlvbiBmcm9tICdAY29tcG9uZW50cy9pbXBsZW1lbnRhdGlvbic7XHJcbmltcG9ydCBUYWJsZSwgeyBoZWFkZXJzIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tIFwiQGxpYi9ob29rc1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSUZyYW1lIGZyb20gXCJAY29tcG9uZW50cy90b29scy9pZnJhbWVcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnQGNvbXBvbmVudHMvdG9vbHMvbG9hZGluZyc7XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbCB7XHJcbiAgXCJwcm9kdWN0LWNvZGVcIjogc3RyaW5nLFxyXG4gIFwicXVhbnRpdHlcIjogbnVtYmVyLFxyXG59XHJcbmludGVyZmFjZSBTdG9yZVN0b2NrTGV2ZWwge1xyXG4gIFwibG9jYXRpb24taWRcIjogc3RyaW5nLFxyXG4gIFwibG9jYXRpb24tbmFtZVwiOiBzdHJpbmcsXHJcbiAgXCJhdmFpbGFiaWxpdHlcIj86IFN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RvY2tMZXZlbFJlc3BvbnNlIHtcclxuICByZXN1bHRzOiBTdG9yZVN0b2NrTGV2ZWxbXVxyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5jb25zdCBTdG9ja0xvb2t1cDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9vbWlBUEkgPSB1c2VCb29taUFQSSgpO1xyXG4gIGNvbnN0IFtzdG9yZXMsIHNldFN0b3Jlc10gPSB1c2VTdGF0ZShcIjEyMTAwIDEyMDc3XCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoXCJMVFc5MTQxIExUVzkyNTIgTFRXOTEzNVwiKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkPFN0b2NrTGV2ZWxSZXNwb25zZSwgc3RyaW5nIHwgRXJyb3IgfCBBeGlvc0Vycm9yPigpO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKTogUHJvbWlzZTxTdG9ja0xldmVsUmVzcG9uc2U+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IChpbnB1dDogc3RyaW5nKSA9PiB7IHJldHVybiBpbnB1dC5zcGxpdCgvXFxzKixcXHMqfFxccysvKS5maWx0ZXIoKGl0ZW0pID0+IChpdGVtICE9IFwiXCIpICYmIChpdGVtKSk7IH07XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgIFwibG9jYXRpb24taWRzXCI6IHBhcnNlcihzdG9yZXMpLFxyXG4gICAgICAgICAgXCJTS1VzXCI6IHBhcnNlcihwcm9kdWN0cylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IEF4aW9zLnBvc3QoYCR7Ym9vbWlBUEkuZW5kcG9pbnQudXJpfS93cy9zaW1wbGUvZ2V0UHJvZHVjdEF2YWlsYWJpbGl0eWAsIHBheWxvYWQpXHJcbiAgICAgICAgcmVzb2x2ZShyZXNwLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkKGxvYWRlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlICYmICFlcnJvcikge1xyXG4gICAgICBjb25zdCBTb0ggPSByZXNwb25zZT8ucmVzdWx0cy5tYXAoKHN0b3JlOiBTdG9yZVN0b2NrTGV2ZWwpID0+IHtcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHN0b3JlSUQ6IHN0b3JlW1wibG9jYXRpb24taWRcIl0sXHJcbiAgICAgICAgICBzdG9yZU5hbWU6IHN0b3JlW1wibG9jYXRpb24tbmFtZVwiXSxcclxuICAgICAgICAgIC4uLihzdG9yZS5hdmFpbGFiaWxpdHkgfHwgW10pLnJlZHVjZSgob2JqOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LCBpdGVtOiBTdG9ja0xldmVsKSA9PiB7XHJcbiAgICAgICAgICAgIG9ialtpdGVtW1wicHJvZHVjdC1jb2RlXCJdXSA9IGl0ZW1bXCJxdWFudGl0eVwiXTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBTb0g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB7bXNnOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwifSwgXTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZSA9IFsgXHJcbiAgICAgIFsnU3RvcmUgSUQnLCAnc3RvcmVJRCddLFxyXG4gICAgICBbJ1N0b3JlIE5hbWUnLCAnc3RvcmVOYW1lJ11cclxuICAgIF07XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gbmV3IFNldCgpO1xyXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHJlc3BvbnNlPy5yZXN1bHRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHN0b3JlLmF2YWlsYWJpbGl0eSB8fCBbXSkge1xyXG4gICAgICAgICAgcHJvZHVjdHMuYWRkKGl0ZW1bXCJwcm9kdWN0LWNvZGVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2R1Y3RzLmtleXMoKSkge1xyXG4gICAgICAgIGJhc2UucHVzaChbIGl0ZW0gYXMgc3RyaW5nLCBpdGVtIGFzIHN0cmluZyBdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGVhZGVycyhiYXNlLCBkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiBoZWFkZXJzKFsgW1wiRXJyb3IgLyBNZXNzYWdlXCIsIFwibXNnXCJdIF0sIGRhdGEpO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdDogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGUpID0+IHtcclxuICAgIGxvYWQobG9hZGVyKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVN0b3JlczogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRTdG9yZXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2VQcm9kdWN0czogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0cyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGEgPSAgQXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSA/IGVycm9yLnJlc3BvbnNlPy5kYXRhPy50b1N0cmluZygpIDogXCJObyBkZXRhaWxlZCBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNlcnZlci5cIjtcclxuICBjb25zb2xlLmxvZyhhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1wbGVtZW50YXRpb24gbmFtZT1cIlN0b2NrIExvb2t1cFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN0eWxlPXt7bWFyZ2luOiBcImF1dG9cIiwgbWF4V2lkdGg6IFwiMjByZW1cIn19PlxyXG4gICAgICAgIDxsYWJlbD5TdG9yZXM6IDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT17c3RvcmVzfSBvbkNoYW5nZT17b25DaGFuZ2VTdG9yZXN9IHBsYWNlaG9sZGVyPVwiU3RvcmUgSURzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMDBweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0czogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW5wdXR9IHZhbHVlPXtwcm9kdWN0c30gb25DaGFuZ2U9e29uQ2hhbmdlUHJvZHVjdHN9IHBsYWNlaG9sZGVyPVwiSXRlbSBOdW1iZXJzIHNlcGVyYXRlZCBieSBzcGFjZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIyMjVweFwifX0gLz48YnIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmlucHV0fSB2YWx1ZT1cIkNoZWNrIEF2YWlsYWJpbGl0aWVzXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPExvYWRpbmcvPlxyXG4gICAgICA6IHJlc3BvbnNlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSBnZXRSb3dQcm9wcz17KCkgPT4gKHt9KX0gc3R5bGU9e3ttYXJnaW46IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIxMDAlXCJ9fS8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDw+PGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkVycm9yOiB7ZXJyb3I/LnRvU3RyaW5nKCl9PC9oMj48SUZyYW1lIGNvbnRlbnQ9e0F4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikgPyBlcnJvci5yZXNwb25zZT8uZGF0YT8udG9TdHJpbmcoKSA6IFwiTm8gZGV0YWlsZWQgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIuXCJ9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgd2lkdGg6IFwiMTAwJVwifX0+PC9JRnJhbWU+PC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L0ltcGxlbWVudGF0aW9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrTG9va3VwOyJdLCJzb3VyY2VSb290IjoiIn0=