webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./components/tools/BoomiAPI.tsx":
/*!***************************************!*\
  !*** ./components/tools/BoomiAPI.tsx ***!
  \***************************************/
/*! exports provided: BoomiAPI, useBoomiAPI, BoomiAPIProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoomiAPI", function() { return BoomiAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBoomiAPI", function() { return useBoomiAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoomiAPIProvider", function() { return BoomiAPIProvider; });
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\dev\\Boomi-API\\components\\tools\\BoomiAPI.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

var BoomiAPI = /*#__PURE__*/function () {
  function BoomiAPI(protocol, host, port) {
    var basePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BoomiAPI);

    Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_protocol", void 0);

    Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_host", void 0);

    Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_port", void 0);

    Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_basePath", void 0);

    this._protocol = protocol;
    this._host = host;
    this._port = port.toString();
    this._basePath = basePath;
  }

  Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BoomiAPI, [{
    key: "uri",
    get: function get() {
      return "".concat(this._protocol, "://").concat(this._host, ":").concat(this._port).concat(this._basePath);
    }
  }]);

  return BoomiAPI;
}();
var useBoomiAPI = function useBoomiAPI() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(context);
};

_s(useBoomiAPI, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var useProvideBoomiAPI = function useProvideBoomiAPI() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new BoomiAPI("https", "boomi.hsw.com.au", "443")),
      endpoint = _useState[0],
      setEndpoint = _useState[1];

  return {
    endpoint: endpoint,
    setEndpoint: setEndpoint
  };
};

_s2(useProvideBoomiAPI, "qmq9WNXhO2XtauoB9a+PSeWeE08=");

var context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});
var BoomiAPIProvider = function BoomiAPIProvider(_ref) {
  _s3();

  var children = _ref.children;
  var boomiAPI = useProvideBoomiAPI();
  return __jsx(context.Provider, {
    value: boomiAPI,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, children);
};

_s3(BoomiAPIProvider, "pDogOSl+b84zlA250wTNRgRL5J0=", false, function () {
  return [useProvideBoomiAPI];
});

_c = BoomiAPIProvider;

var _c;

$RefreshReg$(_c, "BoomiAPIProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Cb29taUFQSS50c3giXSwibmFtZXMiOlsiQm9vbWlBUEkiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiYmFzZVBhdGgiLCJfcHJvdG9jb2wiLCJfaG9zdCIsIl9wb3J0IiwidG9TdHJpbmciLCJfYmFzZVBhdGgiLCJ1c2VCb29taUFQSSIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwidXNlUHJvdmlkZUJvb21pQVBJIiwidXNlU3RhdGUiLCJlbmRwb2ludCIsInNldEVuZHBvaW50IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQm9vbWlBUElQcm92aWRlciIsImNoaWxkcmVuIiwiYm9vbWlBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBYjtBQU1FLG9CQUFZQyxRQUFaLEVBQThCQyxJQUE5QixFQUE0Q0MsSUFBNUMsRUFBMEY7QUFBQSxRQUF2QkMsUUFBdUIsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDeEYsU0FBS0MsU0FBTCxHQUFpQkosUUFBakI7QUFDQSxTQUFLSyxLQUFMLEdBQWFKLElBQWI7QUFDQSxTQUFLSyxLQUFMLEdBQWFKLElBQUksQ0FBQ0ssUUFBTCxFQUFiO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkwsUUFBakI7QUFDRDs7QUFYSDtBQUFBO0FBQUEsd0JBYW1CO0FBQ2YsdUJBQVUsS0FBS0MsU0FBZixnQkFBOEIsS0FBS0MsS0FBbkMsY0FBNEMsS0FBS0MsS0FBakQsU0FBeUQsS0FBS0UsU0FBOUQ7QUFDRDtBQWZIOztBQUFBO0FBQUE7QUF1Qk8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUMvQixTQUFPQyx3REFBVSxDQUFDQyxPQUFELENBQWpCO0FBQ0QsQ0FGTTs7R0FBTUYsVzs7QUFJYixJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxJQUFJZCxRQUFKLENBQWEsT0FBYixFQUFzQixrQkFBdEIsRUFBMEMsS0FBMUMsQ0FBRCxDQURUO0FBQUEsTUFDeEJlLFFBRHdCO0FBQUEsTUFDZEMsV0FEYzs7QUFHL0IsU0FBTztBQUNMRCxZQUFRLEVBQVJBLFFBREs7QUFFTEMsZUFBVyxFQUFYQTtBQUZLLEdBQVA7QUFJRCxDQVBEOztJQUFNSCxrQjs7QUFTTixJQUFNRCxPQUF1QyxnQkFBR0ssNENBQUssQ0FBQ0MsYUFBTixDQUF5QixFQUF6QixDQUFoRDtBQUVPLElBQU1DLGdCQUFvQixHQUFHLFNBQXZCQSxnQkFBdUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDcEQsTUFBTUMsUUFBUSxHQUFHUixrQkFBa0IsRUFBbkM7QUFDQSxTQUNFLE1BQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFUSxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERjtBQUtELENBUE07O0lBQU1ELGdCO1VBQ01OLGtCOzs7S0FETk0sZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC5kNWVhZWQ3M2VmNWNiN2QwMWJjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb21pQVBJIHtcclxuICBwcml2YXRlIF9wcm90b2NvbDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2hvc3Q6IHN0cmluZztcclxuICBwcml2YXRlIF9wb3J0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfYmFzZVBhdGg6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nLCBwb3J0OiBzdHJpbmcgfCBudW1iZXIsIGJhc2VQYXRoOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICB0aGlzLl9wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICB0aGlzLl9wb3J0ID0gcG9ydC50b1N0cmluZygpO1xyXG4gICAgdGhpcy5fYmFzZVBhdGggPSBiYXNlUGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdXJpKCkge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuX3Byb3RvY29sfTovLyR7dGhpcy5faG9zdH06JHt0aGlzLl9wb3J0fSR7dGhpcy5fYmFzZVBhdGh9YDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9vbWlBUElDb250ZXh0IHtcclxuICBlbmRwb2ludDogQm9vbWlBUEk7XHJcbiAgc2V0RW5kcG9pbnQ6IChlbmRwb2ludDogQm9vbWlBUEkpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUJvb21pQVBJID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xyXG59O1xyXG5cclxuY29uc3QgdXNlUHJvdmlkZUJvb21pQVBJID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbmRwb2ludCwgc2V0RW5kcG9pbnRdID0gdXNlU3RhdGUobmV3IEJvb21pQVBJKFwiaHR0cHNcIiwgXCJib29taS5oc3cuY29tLmF1XCIsIFwiNDQzXCIpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVuZHBvaW50LFxyXG4gICAgc2V0RW5kcG9pbnQsXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY29udGV4dDogUmVhY3QuQ29udGV4dDxCb29taUFQSUNvbnRleHQ+ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxhbnk+KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBCb29taUFQSVByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBib29taUFQSSA9IHVzZVByb3ZpZGVCb29taUFQSSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Y29udGV4dC5Qcm92aWRlciB2YWx1ZT17Ym9vbWlBUEl9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9