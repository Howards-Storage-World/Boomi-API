webpackHotUpdate_N_E("pages/documentation",{

/***/ "./node_modules/react-responsive/dist/react-responsive.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-responsive/dist/react-responsive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(root, factory) {
     true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js")) : undefined;
}("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7);
    }([ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (o) {
                if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
            }
        }
        function _arrayLikeToArray(arr, len) {
            (null == len || len > arr.length) && (len = arr.length);
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        _n || null == _i.return || _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_matchmediaquery__), __WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__), __WEBPACK_IMPORTED_MODULE_4__toQuery__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_5__Context__ = __webpack_require__(6), makeQuery = function(settings) {
            return settings.query || Object(__WEBPACK_IMPORTED_MODULE_4__toQuery__.a)(settings);
        }, hyphenateKeys = function(obj) {
            if (!obj) return null;
            var keys = Object.keys(obj);
            return 0 === keys.length ? null : keys.reduce(function(result, key) {
                return result[Object(__WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__.a)(key)] = obj[key], 
                result;
            }, {});
        }, useIsUpdate = function() {
            var ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useRef(!1);
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                ref.current = !0;
            }, []), ref.current;
        }, useDevice = function(deviceFromProps) {
            var deviceFromContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useContext(__WEBPACK_IMPORTED_MODULE_5__Context__.a), getDevice = function() {
                return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
            }, _React$useState = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getDevice), _React$useState2 = _slicedToArray(_React$useState, 2), device = _React$useState2[0], setDevice = _React$useState2[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newDevice = getDevice();
                __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default()(device, newDevice) || setDevice(newDevice);
            }, [ deviceFromProps, deviceFromContext ]), device;
        }, useQuery = function(settings) {
            var getQuery = function() {
                return makeQuery(settings);
            }, _React$useState3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getQuery), _React$useState4 = _slicedToArray(_React$useState3, 2), query = _React$useState4[0], setQuery = _React$useState4[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newQuery = getQuery();
                query !== newQuery && setQuery(newQuery);
            }, [ settings ]), query;
        }, useMatchMedia = function(query, device) {
            var getMatchMedia = function() {
                return __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default()(query, device || {}, !!device);
            }, _React$useState5 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getMatchMedia), _React$useState6 = _slicedToArray(_React$useState5, 2), mq = _React$useState6[0], setMq = _React$useState6[1], isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                return isUpdate && setMq(getMatchMedia()), function() {
                    mq.dispose();
                };
            }, [ query, device ]), mq;
        }, useMatches = function(mediaQuery) {
            var _React$useState7 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(mediaQuery.matches), _React$useState8 = _slicedToArray(_React$useState7, 2), matches = _React$useState8[0], setMatches = _React$useState8[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var updateMatches = function() {
                    setMatches(mediaQuery.matches);
                };
                return mediaQuery.addListener(updateMatches), updateMatches(), function() {
                    mediaQuery.removeListener(updateMatches);
                };
            }, [ mediaQuery ]), matches;
        }, useMediaQuery = function(settings, device, onChange) {
            var deviceSettings = useDevice(device), query = useQuery(settings);
            if (!query) throw new Error("Invalid or missing MediaQuery!");
            var mq = useMatchMedia(query, deviceSettings), matches = useMatches(mq), isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                isUpdate && onChange && onChange(matches);
            }, [ matches ]), matches;
        };
        __webpack_exports__.a = useMediaQuery;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function toHyphenLower(match) {
            return "-" + match.toLowerCase();
        }
        function hyphenateStyleName(name) {
            if (cache.hasOwnProperty(name)) return cache[name];
            var hName = name.replace(uppercasePattern, toHyphenLower);
            return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
        }
        var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
        __webpack_exports__.a = hyphenateStyleName;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(11), negate = function(cond) {
            return "not ".concat(cond);
        }, keyVal = function(k, v) {
            var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
            return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? realKey : !1 === v ? negate(realKey) : "(".concat(realKey, ": ").concat(v, ")");
        }, join = function(conds) {
            return conds.join(" and ");
        }, toQuery = function(obj) {
            var rules = [];
            return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function(k) {
                var v = obj[k];
                null != v && rules.push(keyVal(k, v));
            }), join(rules);
        };
        __webpack_exports__.a = toQuery;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(13);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), Context = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
        __webpack_exports__.a = Context;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__toQuery__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__Context__ = __webpack_require__(6);
        __webpack_require__.d(__webpack_exports__, "default", function() {
            return __WEBPACK_IMPORTED_MODULE_1__Component__.a;
        }), __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() {
            return __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a;
        }), __webpack_require__.d(__webpack_exports__, "toQuery", function() {
            return __WEBPACK_IMPORTED_MODULE_2__toQuery__.a;
        }), __webpack_require__.d(__webpack_exports__, "Context", function() {
            return __WEBPACK_IMPORTED_MODULE_3__Context__.a;
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function Mql(query, values, forceStatic) {
            function addListener(listener) {
                mql && mql.addListener(listener);
            }
            function removeListener(listener) {
                mql && mql.removeListener(listener);
            }
            function update(evt) {
                self.matches = evt.matches, self.media = evt.media;
            }
            function dispose() {
                mql && mql.removeListener(update);
            }
            var self = this;
            if (dynamicMatch && !forceStatic) {
                var mql = dynamicMatch.call(window, query);
                this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
            } else this.matches = staticMatch(query, values), this.media = query;
            this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
        }
        function matchMedia(query, values, forceStatic) {
            return new Mql(query, values, forceStatic);
        }
        var staticMatch = __webpack_require__(9).match, dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;
        module.exports = matchMedia;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function matchQuery(mediaQuery, values) {
            return parseQuery(mediaQuery).some(function(query) {
                var inverse = query.inverse, typeMatch = "all" === query.type || values.type === query.type;
                if (typeMatch && inverse || !typeMatch && !inverse) return !1;
                var expressionsMatch = query.expressions.every(function(expression) {
                    var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                    if (!value) return !1;
                    switch (feature) {
                      case "orientation":
                      case "scan":
                        return value.toLowerCase() === expValue.toLowerCase();

                      case "width":
                      case "height":
                      case "device-width":
                      case "device-height":
                        expValue = toPx(expValue), value = toPx(value);
                        break;

                      case "resolution":
                        expValue = toDpi(expValue), value = toDpi(value);
                        break;

                      case "aspect-ratio":
                      case "device-aspect-ratio":
                      case "device-pixel-ratio":
                        expValue = toDecimal(expValue), value = toDecimal(value);
                        break;

                      case "grid":
                      case "color":
                      case "color-index":
                      case "monochrome":
                        expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
                    }
                    switch (modifier) {
                      case "min":
                        return value >= expValue;

                      case "max":
                        return value <= expValue;

                      default:
                        return value === expValue;
                    }
                });
                return expressionsMatch && !inverse || !expressionsMatch && inverse;
            });
        }
        function parseQuery(mediaQuery) {
            return mediaQuery.split(",").map(function(query) {
                query = query.trim();
                var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", 
                expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function(expression) {
                    var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                    return {
                        modifier: feature[1],
                        feature: feature[2],
                        value: captures[2]
                    };
                }), parsed;
            });
        }
        function toDecimal(ratio) {
            var numbers, decimal = Number(ratio);
            return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), 
            decimal;
        }
        function toDpi(resolution) {
            var value = parseFloat(resolution);
            switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
              case "dpcm":
                return value / 2.54;

              case "dppx":
                return 96 * value;

              default:
                return value;
            }
        }
        function toPx(length) {
            var value = parseFloat(length);
            switch (String(length).match(RE_LENGTH_UNIT)[1]) {
              case "em":
              case "rem":
                return 16 * value;

              case "cm":
                return 96 * value / 2.54;

              case "mm":
                return 96 * value / 2.54 / 10;

              case "in":
                return 96 * value;

              case "pt":
                return 72 * value;

              case "pc":
                return 72 * value / 12;

              default:
                return value;
            }
        }
        exports.match = matchQuery, exports.parse = parseQuery;
        var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function shallowEqualObjects(objA, objB) {
            if (objA === objB) return !0;
            if (!objA || !objB) return !1;
            var aKeys = Object.keys(objA), bKeys = Object.keys(objB), len = aKeys.length;
            if (bKeys.length !== len) return !1;
            for (var i = 0; i < len; i++) {
                var key = aKeys[i];
                if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
            }
            return !0;
        }
        module.exports = shallowEqualObjects;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__), stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([ __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number ]), matchers = {
            orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "portrait", "landscape" ]),
            scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "progressive", "interlace" ]),
            aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            height: stringOrNumber,
            deviceHeight: stringOrNumber,
            width: stringOrNumber,
            deviceWidth: stringOrNumber,
            color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            resolution: stringOrNumber
        }, features = _objectSpread({
            minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minHeight: stringOrNumber,
            maxHeight: stringOrNumber,
            minDeviceHeight: stringOrNumber,
            maxDeviceHeight: stringOrNumber,
            minWidth: stringOrNumber,
            maxWidth: stringOrNumber,
            minDeviceWidth: stringOrNumber,
            maxDeviceWidth: stringOrNumber,
            minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minResolution: stringOrNumber,
            maxResolution: stringOrNumber
        }, matchers), types = {
            all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
        }, all = _objectSpread(_objectSpread({}, types), features);
        matchers.type = Object.keys(types), __webpack_exports__.a = {
            all: all,
            types: types,
            matchers: matchers,
            features: features
        };
    }, function(module, exports, __webpack_require__) {
        var ReactIs = __webpack_require__(4);
        module.exports = __webpack_require__(14)(ReactIs.isElement, !0);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        !function() {
            function isValidElementType(type) {
                return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
            }
            function typeOf(object) {
                if ("object" == typeof object && null !== object) {
                    var $$typeof = object.$$typeof;
                    switch ($$typeof) {
                      case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch (type) {
                          case REACT_ASYNC_MODE_TYPE:
                          case REACT_CONCURRENT_MODE_TYPE:
                          case REACT_FRAGMENT_TYPE:
                          case REACT_PROFILER_TYPE:
                          case REACT_STRICT_MODE_TYPE:
                          case REACT_SUSPENSE_TYPE:
                            return type;

                          default:
                            var $$typeofType = type && type.$$typeof;
                            switch ($$typeofType) {
                              case REACT_CONTEXT_TYPE:
                              case REACT_FORWARD_REF_TYPE:
                              case REACT_LAZY_TYPE:
                              case REACT_MEMO_TYPE:
                              case REACT_PROVIDER_TYPE:
                                return $$typeofType;

                              default:
                                return $$typeof;
                            }
                        }

                      case REACT_PORTAL_TYPE:
                        return $$typeof;
                    }
                }
            }
            function isAsyncMode(object) {
                return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, 
                console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), 
                isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
            }
            function isConcurrentMode(object) {
                return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
                return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
                return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
                return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            function isForwardRef(object) {
                return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
                return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
                return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
                return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
                return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
                return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
                return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
            exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, 
            exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, 
            exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, 
            exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, 
            exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, 
            exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, 
            exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, 
            exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, 
            exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, 
            exports.typeOf = typeOf;
        }();
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function emptyFunctionThatReturnsNull() {
            return null;
        }
        var ReactIs = __webpack_require__(4), assign = __webpack_require__(15), ReactPropTypesSecret = __webpack_require__(5), checkPropTypes = __webpack_require__(16), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, module.exports = function(isValidElement, throwOnDirectAccess) {
            function getIteratorFn(maybeIterable) {
                var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                if ("function" == typeof iteratorFn) return iteratorFn;
            }
            function is(x, y) {
                return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
            }
            function PropTypeError(message) {
                this.message = message, this.stack = "";
            }
            function createChainableTypeChecker(validate) {
                function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                    if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                    secret !== ReactPropTypesSecret) {
                        if (throwOnDirectAccess) {
                            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            throw err.name = "Invariant Violation", err;
                        }
                        if ("undefined" != typeof console) {
                            var cacheKey = componentName + ":" + propName;
                            !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                            manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                        }
                    }
                    return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
                }
                var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0, chainedCheckType = checkType.bind(null, !1);
                return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
                function validate(props, propName, componentName, location, propFullName, secret) {
                    var propValue = props[propName];
                    if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createArrayOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                    var propValue = props[propName];
                    if (!Array.isArray(propValue)) {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
                    }
                    for (var i = 0; i < propValue.length; i++) {
                        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
                function validate(props, propName, componentName, location, propFullName) {
                    if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS;
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                    var valuesString = JSON.stringify(expectedValues, function(key, value) {
                        return "symbol" === getPreciseType(value) ? String(value) : value;
                    });
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                }
                return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), 
                emptyFunctionThatReturnsNull);
            }
            function createObjectOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                    for (var key in propValue) if (has(propValue, key)) {
                        var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                    }
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                }
                if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), 
                emptyFunctionThatReturnsNull;
                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                    emptyFunctionThatReturnsNull;
                }
                return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (checker) {
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    var allKeys = assign({}, props[propName], shapeTypes);
                    for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function isNode(propValue) {
                switch (typeof propValue) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;

                  case "boolean":
                    return !propValue;

                  case "object":
                    if (Array.isArray(propValue)) return propValue.every(isNode);
                    if (null === propValue || isValidElement(propValue)) return !0;
                    var iteratorFn = getIteratorFn(propValue);
                    if (!iteratorFn) return !1;
                    var step, iterator = iteratorFn.call(propValue);
                    if (iteratorFn !== propValue.entries) {
                        for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                    } else for (;!(step = iterator.next()).done; ) {
                        var entry = step.value;
                        if (entry && !isNode(entry[1])) return !1;
                    }
                    return !0;

                  default:
                    return !1;
                }
            }
            function isSymbol(propType, propValue) {
                return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
            }
            function getPropType(propValue) {
                var propType = typeof propValue;
                return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
            }
            function getPreciseType(propValue) {
                if (void 0 === propValue || null === propValue) return "" + propValue;
                var propType = getPropType(propValue);
                if ("object" === propType) {
                    if (propValue instanceof Date) return "date";
                    if (propValue instanceof RegExp) return "regexp";
                }
                return propType;
            }
            function getPostfixForTypeWarning(value) {
                var type = getPreciseType(value);
                switch (type) {
                  case "array":
                  case "object":
                    return "an " + type;

                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + type;

                  default:
                    return type;
                }
            }
            function getClassName(propValue) {
                return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
            }
            var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                array: createPrimitiveTypeChecker("array"),
                bool: createPrimitiveTypeChecker("boolean"),
                func: createPrimitiveTypeChecker("function"),
                number: createPrimitiveTypeChecker("number"),
                object: createPrimitiveTypeChecker("object"),
                string: createPrimitiveTypeChecker("string"),
                symbol: createPrimitiveTypeChecker("symbol"),
                any: function() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                }(),
                arrayOf: createArrayOfTypeChecker,
                element: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                elementType: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!ReactIs.isValidElementType(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                instanceOf: createInstanceTypeChecker,
                node: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                    }
                    return createChainableTypeChecker(validate);
                }(),
                objectOf: createObjectOfTypeChecker,
                oneOf: createEnumTypeChecker,
                oneOfType: createUnionTypeChecker,
                shape: createShapeTypeChecker,
                exact: createStrictShapeTypeChecker
            };
            return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
            ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function toObject(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = function() {
            try {
                if (!Object.assign) return !1;
                var test1 = new String("abc");
                if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                }).join("")) return !1;
                var test3 = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
            } catch (err) {
                return !1;
            }
        }() ? Object.assign : function(target, source) {
            for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
            for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                var error;
                try {
                    if ("function" != typeof typeSpecs[typeSpecName]) {
                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                        throw err.name = "Invariant Violation", err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
                error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = !0;
                    var stack = getStack ? getStack() : "";
                    printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                }
            }
        }
        var printWarning = function() {}, ReactPropTypesSecret = __webpack_require__(5), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, checkPropTypes.resetWarningCache = function() {
            loggedTypeFailures = {};
        }, module.exports = checkPropTypes;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function _objectWithoutProperties(source, excluded) {
            if (null == source) return {};
            var key, i, target = _objectWithoutPropertiesLoose(source, excluded);
            if (Object.getOwnPropertySymbols) {
                var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                for (i = 0; i < sourceSymbolKeys.length; i++) key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key, i, target = {}, sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
        }
        function MediaQuery(_ref) {
            var children = _ref.children, device = _ref.device, onChange = _ref.onChange, settings = _objectWithoutProperties(_ref, [ "children", "device", "onChange" ]), matches = Object(__WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a)(settings, device, onChange);
            return "function" == typeof children ? children(matches) : matches ? children : null;
        }
        __webpack_exports__.a = MediaQuery;
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0);
    } ]);
});
//# sourceMappingURL=react-responsive.js.map

/***/ }),

/***/ "./pages/documentation/index.tsx":
/*!***************************************!*\
  !*** ./pages/documentation/index.tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/documentation */ "./components/documentation.tsx");
var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\documentation\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var meta = {
  title: "HSW Boomi API Documentation",
  description: "A place collection of documentation on HSW's Boomi APIs."
};

var Documentation = function Documentation(_ref) {
  _s();

  var documents = _ref.documents,
      _ref$isUnreleased = _ref.isUnreleased,
      isUnreleased = _ref$isUnreleased === void 0 ? false : _ref$isUnreleased;
  var shouldBe2Cols = Object(react_responsive__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])({
    minWidth: '40rem'
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Documentation | HSW Boomi API",
    meta: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, shouldBe2Cols ? __jsx("div", {
    className: utilStyles.flexGrid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_components_documentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    documents: documents,
    isUnreleased: isUnreleased,
    style: {
      maxWidth: "20rem",
      padding: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "".concat(utilStyles.headingMd, " ").concat(utilStyles.flexColumn, " ").concat(utilStyles.sticky),
    style: {
      maxWidth: "20rem",
      padding: '0.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: utilStyles.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "DOcumentation Intro"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque quae architecto, praesentium, sapiente ratione quia dolorum labore nobis nostrum porro vero aliquam vitae totam iste excepturi dolorem fugiat doloribus."))) : __jsx(_components_documentation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    documents: documents,
    isUnreleased: isUnreleased,
    style: {
      maxWidth: "20rem",
      margin: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }));
};

_s(Documentation, "FZNTCrnEOmYKKDuGJ6LeXIXXofQ=", false, function () {
  return [react_responsive__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"]];
});

_c = Documentation;

var Document = function Document(_ref2) {
  var allDocumentation = _ref2.allDocumentation;
  return __jsx(Documentation, {
    documents: allDocumentation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  });
};

_c2 = Document;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Document);

var _c, _c2;

$RefreshReg$(_c, "Documentation");
$RefreshReg$(_c2, "Document");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUvZGlzdC9yZWFjdC1yZXNwb25zaXZlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9kb2N1bWVudGF0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRvY3VtZW50YXRpb24iLCJkb2N1bWVudHMiLCJpc1VucmVsZWFzZWQiLCJzaG91bGRCZTJDb2xzIiwidXNlTWVkaWFRdWVyeSIsIm1pbldpZHRoIiwidXRpbFN0eWxlcyIsImZsZXhHcmlkIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiaGVhZGluZ01kIiwiZmxleENvbHVtbiIsInN0aWNreSIsImhlYWRpbmdMZyIsIm1hcmdpbiIsIkRvY3VtZW50IiwiYWxsRG9jdW1lbnRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFJLEtBQXVELDRCQUE0QixtQkFBTyxDQUFDLDRDQUFPLEtBQUssU0FBOEw7QUFDelMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdELDZDQUE2QztBQUM3QyxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLGtHQUFrRztBQUNsRyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0NBQXNDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLDJCQUEyQjtBQUMzRjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnQ0FBZ0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQkFBK0I7QUFDN0QscUJBQXFCLFlBQVksK0JBQStCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVEsUUFBUTtBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBMEQ7QUFDM0UsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUVBQWlFLHNCQUFzQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0lBQXNJO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0xBQW9MO0FBQ3BMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHdFQUF3RTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeDJCQTtBQUNBO0FBQ0E7QUFZQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsT0FBSyxFQUFFLDZCQURJO0FBRVhDLGFBQVcsRUFBRTtBQUZGLENBQWI7O0FBS0EsSUFBTUMsYUFBNEUsR0FBRyxTQUEvRUEsYUFBK0UsT0FBeUM7QUFBQTs7QUFBQSxNQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsK0JBQTNCQyxZQUEyQjtBQUFBLE1BQTNCQSxZQUEyQixrQ0FBWixLQUFZO0FBQzVILE1BQU1DLGFBQWEsR0FBR0Msc0VBQWEsQ0FBQztBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUFELENBQW5DO0FBQ0EsU0FDRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLCtCQUFkO0FBQThDLFFBQUksRUFBRVIsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTSxhQUFhLEdBQ1o7QUFBSyxhQUFTLEVBQUVHLFVBQVUsQ0FBQ0MsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBbUIsYUFBUyxFQUFFTixTQUE5QjtBQUF5QyxnQkFBWSxFQUFFQyxZQUF2RDtBQUFxRSxTQUFLLEVBQUU7QUFBRU0sY0FBUSxFQUFFLE9BQVo7QUFBc0JDLGFBQU8sRUFBRTtBQUEvQixLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFTLGFBQVMsWUFBS0gsVUFBVSxDQUFDSSxTQUFoQixjQUE2QkosVUFBVSxDQUFDSyxVQUF4QyxjQUFzREwsVUFBVSxDQUFDTSxNQUFqRSxDQUFsQjtBQUE2RixTQUFLLEVBQUU7QUFBRUosY0FBUSxFQUFFLE9BQVo7QUFBc0JDLGFBQU8sRUFBRTtBQUEvQixLQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVILFVBQVUsQ0FBQ08sU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbU9BRkYsQ0FGRixDQURZLEdBU1osTUFBQyxpRUFBRDtBQUFtQixhQUFTLEVBQUVaLFNBQTlCO0FBQXlDLGdCQUFZLEVBQUVDLFlBQXZEO0FBQXFFLFNBQUssRUFBRTtBQUFFTSxjQUFRLEVBQUUsT0FBWjtBQUFxQk0sWUFBTSxFQUFFO0FBQTdCLEtBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWTixDQURGO0FBZUQsQ0FqQkQ7O0dBQU1kLGE7VUFDa0JJLDhEOzs7S0FEbEJKLGE7O0FBbUJOLElBQU1lLFFBQXNELEdBQUcsU0FBekRBLFFBQXlELFFBQTBCO0FBQUEsTUFBdkJDLGdCQUF1QixTQUF2QkEsZ0JBQXVCO0FBQ3ZGLFNBQVEsTUFBQyxhQUFEO0FBQWUsYUFBUyxFQUFFQSxnQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFSO0FBQ0QsQ0FGRDs7TUFBTUQsUTs7QUFJU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jdW1lbnRhdGlvbi5jNGI3NTEyOGQ2YTQ2NTYyZDhiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwicmVhY3RcIiBdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzLk1lZGlhUXVlcnkgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiByb290Lk1lZGlhUXVlcnkgPSBmYWN0b3J5KHJvb3QuUmVhY3QpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICAgICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgICAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiAgICAgICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiAgICAgICAgICAgICAgICBpOiBtb2R1bGVJZCxcbiAgICAgICAgICAgICAgICBsOiAhMSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSwgXG4gICAgICAgICAgICBtb2R1bGUubCA9ICEwLCBtb2R1bGUuZXhwb3J0cztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcywgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcywgXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCBcImFcIiwgZ2V0dGVyKSwgZ2V0dGVyO1xuICAgICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuICAgIH0oWyBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBvKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IG4gJiYgby5jb25zdHJ1Y3RvciAmJiAobiA9IG8uY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IG4gfHwgXCJTZXRcIiA9PT0gbiA/IEFycmF5LmZyb20obykgOiBcIkFyZ3VtZW50c1wiID09PSBuIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pID8gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgICAgICAgICAgKG51bGwgPT0gbGVuIHx8IGxlbiA+IGFyci5sZW5ndGgpICYmIChsZW4gPSBhcnIubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hcnIgPSBbXSwgX24gPSAhMCwgX2QgPSAhMSwgX2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3MsIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSkgJiYgKF9hcnIucHVzaChfcy52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICAhaSB8fCBfYXJyLmxlbmd0aCAhPT0gaSk7IF9uID0gITApIDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgX2QgPSAhMCwgX2UgPSBlcnI7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9uIHx8IG51bGwgPT0gX2kucmV0dXJuIHx8IF9pLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX2FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfaHlwaGVuYXRlX3N0eWxlX25hbWVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMiksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19zaGFsbG93X2VxdWFsX29iamVjdHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX3RvUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fQ29udGV4dF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KSwgbWFrZVF1ZXJ5ID0gZnVuY3Rpb24oc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5xdWVyeSB8fCBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X190b1F1ZXJ5X18uYSkoc2V0dGluZ3MpO1xuICAgICAgICB9LCBoeXBoZW5hdGVLZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICByZXR1cm4gMCA9PT0ga2V5cy5sZW5ndGggPyBudWxsIDoga2V5cy5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0W09iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfaHlwaGVuYXRlX3N0eWxlX25hbWVfXy5hKShrZXkpXSA9IG9ialtrZXldLCBcbiAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0sIHVzZUlzVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVmID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZVJlZighMSk7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9ICEwO1xuICAgICAgICAgICAgfSwgW10pLCByZWYuY3VycmVudDtcbiAgICAgICAgfSwgdXNlRGV2aWNlID0gZnVuY3Rpb24oZGV2aWNlRnJvbVByb3BzKSB7XG4gICAgICAgICAgICB2YXIgZGV2aWNlRnJvbUNvbnRleHQgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlQ29udGV4dChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX0NvbnRleHRfXy5hKSwgZ2V0RGV2aWNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh5cGhlbmF0ZUtleXMoZGV2aWNlRnJvbVByb3BzKSB8fCBoeXBoZW5hdGVLZXlzKGRldmljZUZyb21Db250ZXh0KTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VTdGF0ZShnZXREZXZpY2UpLCBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSwgZGV2aWNlID0gX1JlYWN0JHVzZVN0YXRlMlswXSwgc2V0RGV2aWNlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdEZXZpY2UgPSBnZXREZXZpY2UoKTtcbiAgICAgICAgICAgICAgICBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX19fZGVmYXVsdCgpKGRldmljZSwgbmV3RGV2aWNlKSB8fCBzZXREZXZpY2UobmV3RGV2aWNlKTtcbiAgICAgICAgICAgIH0sIFsgZGV2aWNlRnJvbVByb3BzLCBkZXZpY2VGcm9tQ29udGV4dCBdKSwgZGV2aWNlO1xuICAgICAgICB9LCB1c2VRdWVyeSA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XG4gICAgICAgICAgICB2YXIgZ2V0UXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZVF1ZXJ5KHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZTMgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUoZ2V0UXVlcnkpLCBfUmVhY3QkdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlMywgMiksIHF1ZXJ5ID0gX1JlYWN0JHVzZVN0YXRlNFswXSwgc2V0UXVlcnkgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1F1ZXJ5ID0gZ2V0UXVlcnkoKTtcbiAgICAgICAgICAgICAgICBxdWVyeSAhPT0gbmV3UXVlcnkgJiYgc2V0UXVlcnkobmV3UXVlcnkpO1xuICAgICAgICAgICAgfSwgWyBzZXR0aW5ncyBdKSwgcXVlcnk7XG4gICAgICAgIH0sIHVzZU1hdGNoTWVkaWEgPSBmdW5jdGlvbihxdWVyeSwgZGV2aWNlKSB7XG4gICAgICAgICAgICB2YXIgZ2V0TWF0Y2hNZWRpYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X19fZGVmYXVsdCgpKHF1ZXJ5LCBkZXZpY2UgfHwge30sICEhZGV2aWNlKTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZTUgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUoZ2V0TWF0Y2hNZWRpYSksIF9SZWFjdCR1c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGU1LCAyKSwgbXEgPSBfUmVhY3QkdXNlU3RhdGU2WzBdLCBzZXRNcSA9IF9SZWFjdCR1c2VTdGF0ZTZbMV0sIGlzVXBkYXRlID0gdXNlSXNVcGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1VwZGF0ZSAmJiBzZXRNcShnZXRNYXRjaE1lZGlhKCkpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbXEuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBbIHF1ZXJ5LCBkZXZpY2UgXSksIG1xO1xuICAgICAgICB9LCB1c2VNYXRjaGVzID0gZnVuY3Rpb24obWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgdmFyIF9SZWFjdCR1c2VTdGF0ZTcgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUobWVkaWFRdWVyeS5tYXRjaGVzKSwgX1JlYWN0JHVzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZTcsIDIpLCBtYXRjaGVzID0gX1JlYWN0JHVzZVN0YXRlOFswXSwgc2V0TWF0Y2hlcyA9IF9SZWFjdCR1c2VTdGF0ZThbMV07XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlTWF0Y2hlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaGVzKG1lZGlhUXVlcnkubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVkaWFRdWVyeS5hZGRMaXN0ZW5lcih1cGRhdGVNYXRjaGVzKSwgdXBkYXRlTWF0Y2hlcygpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVNYXRjaGVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgWyBtZWRpYVF1ZXJ5IF0pLCBtYXRjaGVzO1xuICAgICAgICB9LCB1c2VNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24oc2V0dGluZ3MsIGRldmljZSwgb25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBkZXZpY2VTZXR0aW5ncyA9IHVzZURldmljZShkZXZpY2UpLCBxdWVyeSA9IHVzZVF1ZXJ5KHNldHRpbmdzKTtcbiAgICAgICAgICAgIGlmICghcXVlcnkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3IgbWlzc2luZyBNZWRpYVF1ZXJ5IVwiKTtcbiAgICAgICAgICAgIHZhciBtcSA9IHVzZU1hdGNoTWVkaWEocXVlcnksIGRldmljZVNldHRpbmdzKSwgbWF0Y2hlcyA9IHVzZU1hdGNoZXMobXEpLCBpc1VwZGF0ZSA9IHVzZUlzVXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZSAmJiBvbkNoYW5nZSAmJiBvbkNoYW5nZShtYXRjaGVzKTtcbiAgICAgICAgICAgIH0sIFsgbWF0Y2hlcyBdKSwgbWF0Y2hlcztcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gdXNlTWVkaWFRdWVyeTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHRvSHlwaGVuTG93ZXIobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIiArIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuIGNhY2hlW25hbWVdO1xuICAgICAgICAgICAgdmFyIGhOYW1lID0gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sIHRvSHlwaGVuTG93ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gXCItXCIgKyBoTmFtZSA6IGhOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2csIG1zUGF0dGVybiA9IC9ebXMtLywgY2FjaGUgPSB7fTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9oeXBoZW5hdGVfc3R5bGVfbmFtZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19tZWRpYVF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKSwgbmVnYXRlID0gZnVuY3Rpb24oY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibm90IFwiLmNvbmNhdChjb25kKTtcbiAgICAgICAgfSwga2V5VmFsID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgdmFyIHJlYWxLZXkgPSBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2h5cGhlbmF0ZV9zdHlsZV9uYW1lX18uYSkoayk7XG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgdiAmJiAodiA9IFwiXCIuY29uY2F0KHYsIFwicHhcIikpLCAhMCA9PT0gdiA/IHJlYWxLZXkgOiAhMSA9PT0gdiA/IG5lZ2F0ZShyZWFsS2V5KSA6IFwiKFwiLmNvbmNhdChyZWFsS2V5LCBcIjogXCIpLmNvbmNhdCh2LCBcIilcIik7XG4gICAgICAgIH0sIGpvaW4gPSBmdW5jdGlvbihjb25kcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmRzLmpvaW4oXCIgYW5kIFwiKTtcbiAgICAgICAgfSwgdG9RdWVyeSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19tZWRpYVF1ZXJ5X18uYS5hbGwpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gb2JqW2tdO1xuICAgICAgICAgICAgICAgIG51bGwgIT0gdiAmJiBydWxlcy5wdXNoKGtleVZhbChrLCB2KSk7XG4gICAgICAgICAgICB9KSwgam9pbihydWxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IHRvUXVlcnk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBcIlNFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEXCI7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fKSwgQ29udGV4dCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5jcmVhdGVDb250ZXh0KCk7XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IENvbnRleHQ7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19Db21wb25lbnRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3RvUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fQ29udGV4dF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX0NvbXBvbmVudF9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ1c2VNZWRpYVF1ZXJ5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ0b1F1ZXJ5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdG9RdWVyeV9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDb250ZXh0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fQ29udGV4dF9fLmE7XG4gICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gTXFsKHF1ZXJ5LCB2YWx1ZXMsIGZvcmNlU3RhdGljKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG1xbCAmJiBtcWwuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBtcWwgJiYgbXFsLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZShldnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1hdGNoZXMgPSBldnQubWF0Y2hlcywgc2VsZi5tZWRpYSA9IGV2dC5tZWRpYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICAgICAgbXFsICYmIG1xbC5yZW1vdmVMaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGR5bmFtaWNNYXRjaCAmJiAhZm9yY2VTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbXFsID0gZHluYW1pY01hdGNoLmNhbGwod2luZG93LCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gbXFsLm1hdGNoZXMsIHRoaXMubWVkaWEgPSBtcWwubWVkaWEsIG1xbC5hZGRMaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubWF0Y2hlcyA9IHN0YXRpY01hdGNoKHF1ZXJ5LCB2YWx1ZXMpLCB0aGlzLm1lZGlhID0gcXVlcnk7XG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyID0gYWRkTGlzdGVuZXIsIHRoaXMucmVtb3ZlTGlzdGVuZXIgPSByZW1vdmVMaXN0ZW5lciwgdGhpcy5kaXNwb3NlID0gZGlzcG9zZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXRjaE1lZGlhKHF1ZXJ5LCB2YWx1ZXMsIGZvcmNlU3RhdGljKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1xbChxdWVyeSwgdmFsdWVzLCBmb3JjZVN0YXRpYyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRpY01hdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5tYXRjaCwgZHluYW1pY01hdGNoID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93Lm1hdGNoTWVkaWEgOiBudWxsO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG1hdGNoTWVkaWE7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBtYXRjaFF1ZXJ5KG1lZGlhUXVlcnksIHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkuc29tZShmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0gcXVlcnkuaW52ZXJzZSwgdHlwZU1hdGNoID0gXCJhbGxcIiA9PT0gcXVlcnkudHlwZSB8fCB2YWx1ZXMudHlwZSA9PT0gcXVlcnkudHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZU1hdGNoICYmIGludmVyc2UgfHwgIXR5cGVNYXRjaCAmJiAhaW52ZXJzZSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciBleHByZXNzaW9uc01hdGNoID0gcXVlcnkuZXhwcmVzc2lvbnMuZXZlcnkoZnVuY3Rpb24oZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZSA9IGV4cHJlc3Npb24uZmVhdHVyZSwgbW9kaWZpZXIgPSBleHByZXNzaW9uLm1vZGlmaWVyLCBleHBWYWx1ZSA9IGV4cHJlc3Npb24udmFsdWUsIHZhbHVlID0gdmFsdWVzW2ZlYXR1cmVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvcmllbnRhdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FuXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhwVmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3aWR0aFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLXdpZHRoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZS1oZWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9QeChleHBWYWx1ZSksIHZhbHVlID0gdG9QeCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXNvbHV0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHRvRHBpKGV4cFZhbHVlKSwgdmFsdWUgPSB0b0RwaSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3BlY3QtcmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLWFzcGVjdC1yYXRpb1wiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2UtcGl4ZWwtcmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9EZWNpbWFsKGV4cFZhbHVlKSwgdmFsdWUgPSB0b0RlY2ltYWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ3JpZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvci1pbmRleFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtb25vY2hyb21lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHBhcnNlSW50KGV4cFZhbHVlLCAxMCkgfHwgMSwgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+PSBleHBWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA8PSBleHBWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zTWF0Y2ggJiYgIWludmVyc2UgfHwgIWV4cHJlc3Npb25zTWF0Y2ggJiYgaW52ZXJzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lZGlhUXVlcnkuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkudHJpbSgpO1xuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlcyA9IHF1ZXJ5Lm1hdGNoKFJFX01FRElBX1FVRVJZKSwgbW9kaWZpZXIgPSBjYXB0dXJlc1sxXSwgdHlwZSA9IGNhcHR1cmVzWzJdLCBleHByZXNzaW9ucyA9IGNhcHR1cmVzWzNdIHx8IFwiXCIsIHBhcnNlZCA9IHt9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQuaW52ZXJzZSA9ICEhbW9kaWZpZXIgJiYgXCJub3RcIiA9PT0gbW9kaWZpZXIudG9Mb3dlckNhc2UoKSwgcGFyc2VkLnR5cGUgPSB0eXBlID8gdHlwZS50b0xvd2VyQ2FzZSgpIDogXCJhbGxcIiwgXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXRjaCgvXFwoW15cXCldK1xcKS9nKSB8fCBbXSwgcGFyc2VkLmV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKGZ1bmN0aW9uKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHR1cmVzID0gZXhwcmVzc2lvbi5tYXRjaChSRV9NUV9FWFBSRVNTSU9OKSwgZmVhdHVyZSA9IGNhcHR1cmVzWzFdLnRvTG93ZXJDYXNlKCkubWF0Y2goUkVfTVFfRkVBVFVSRSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcjogZmVhdHVyZVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmVbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2FwdHVyZXNbMl1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSwgcGFyc2VkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9EZWNpbWFsKHJhdGlvKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVycywgZGVjaW1hbCA9IE51bWJlcihyYXRpbyk7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbCB8fCAobnVtYmVycyA9IHJhdGlvLm1hdGNoKC9eKFxcZCspXFxzKlxcL1xccyooXFxkKykkLyksIGRlY2ltYWwgPSBudW1iZXJzWzFdIC8gbnVtYmVyc1syXSksIFxuICAgICAgICAgICAgZGVjaW1hbDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0b0RwaShyZXNvbHV0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KHJlc29sdXRpb24pO1xuICAgICAgICAgICAgc3dpdGNoIChTdHJpbmcocmVzb2x1dGlvbikubWF0Y2goUkVfUkVTT0xVVElPTl9VTklUKVsxXSkge1xuICAgICAgICAgICAgICBjYXNlIFwiZHBjbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAvIDIuNTQ7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImRwcHhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0b1B4KGxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChsZW5ndGgpO1xuICAgICAgICAgICAgc3dpdGNoIChTdHJpbmcobGVuZ3RoKS5tYXRjaChSRV9MRU5HVEhfVU5JVClbMV0pIHtcbiAgICAgICAgICAgICAgY2FzZSBcImVtXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJyZW1cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTYgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBjYXNlIFwiY21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZSAvIDIuNTQ7XG5cbiAgICAgICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWUgLyAyLjU0IC8gMTA7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImluXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgY2FzZSBcInB0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDcyICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgY2FzZSBcInBjXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDcyICogdmFsdWUgLyAxMjtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLm1hdGNoID0gbWF0Y2hRdWVyeSwgZXhwb3J0cy5wYXJzZSA9IHBhcnNlUXVlcnk7XG4gICAgICAgIHZhciBSRV9NRURJQV9RVUVSWSA9IC8oPzoob25seXxub3QpP1xccyooW15cXHNcXChcXCldKykoPzpcXHMqYW5kKT9cXHMqKT8oLispPy9pLCBSRV9NUV9FWFBSRVNTSU9OID0gL1xcKFxccyooW15cXHNcXDpcXCldKylcXHMqKD86XFw6XFxzKihbXlxcc1xcKV0rKSk/XFxzKlxcKS8sIFJFX01RX0ZFQVRVUkUgPSAvXig/OihtaW58bWF4KS0pPyguKykvLCBSRV9MRU5HVEhfVU5JVCA9IC8oZW18cmVtfHB4fGNtfG1tfGlufHB0fHBjKT8kLywgUkVfUkVTT0xVVElPTl9VTklUID0gLyhkcGl8ZHBjbXxkcHB4KT8kLztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMob2JqQSwgb2JqQikge1xuICAgICAgICAgICAgaWYgKG9iakEgPT09IG9iakIpIHJldHVybiAhMDtcbiAgICAgICAgICAgIGlmICghb2JqQSB8fCAhb2JqQikgcmV0dXJuICExO1xuICAgICAgICAgICAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMob2JqQSksIGJLZXlzID0gT2JqZWN0LmtleXMob2JqQiksIGxlbiA9IGFLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChiS2V5cy5sZW5ndGggIT09IGxlbikgcmV0dXJuICExO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBhS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAob2JqQVtrZXldICE9PSBvYmpCW2tleV0gfHwgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXkpKSByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWxPYmplY3RzO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICAgICAgICAgICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSBpbiBvYmogPyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogITBcbiAgICAgICAgICAgIH0pIDogb2JqW2tleV0gPSB2YWx1ZSwgb2JqO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMiksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fKSwgc3RyaW5nT3JOdW1iZXIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5vbmVPZlR5cGUoWyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlciBdKSwgbWF0Y2hlcnMgPSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEub25lT2YoWyBcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIgXSksXG4gICAgICAgICAgICBzY2FuOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5vbmVPZihbIFwicHJvZ3Jlc3NpdmVcIiwgXCJpbnRlcmxhY2VcIiBdKSxcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBkZXZpY2VBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgaGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIGRldmljZUhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICB3aWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBkZXZpY2VXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBjb2xvcjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGNvbG9ySW5kZXg6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBtb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgcmVzb2x1dGlvbjogc3RyaW5nT3JOdW1iZXJcbiAgICAgICAgfSwgZmVhdHVyZXMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIG1pbkFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtYXhBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgbWluRGV2aWNlQXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIG1heERldmljZUFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1pbkRldmljZUhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtYXhEZXZpY2VIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4V2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluRGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4RGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluQ29sb3I6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1heENvbG9yOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5Db2xvckluZGV4OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtYXhDb2xvckluZGV4OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5Nb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtYXhNb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5SZXNvbHV0aW9uOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1heFJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyXG4gICAgICAgIH0sIG1hdGNoZXJzKSwgdHlwZXMgPSB7XG4gICAgICAgICAgICBhbGw6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBncmlkOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgYXVyYWw6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBicmFpbGxlOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgaGFuZGhlbGQ6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBwcmludDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHByb2plY3Rpb246IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBzY3JlZW46IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICB0dHk6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICB0djogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGVtYm9zc2VkOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sXG4gICAgICAgIH0sIGFsbCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdHlwZXMpLCBmZWF0dXJlcyk7XG4gICAgICAgIG1hdGNoZXJzLnR5cGUgPSBPYmplY3Qua2V5cyh0eXBlcyksIF9fd2VicGFja19leHBvcnRzX18uYSA9IHtcbiAgICAgICAgICAgIGFsbDogYWxsLFxuICAgICAgICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgICAgICAgbWF0Y2hlcnM6IG1hdGNoZXJzLFxuICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgICAgIH07XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIHZhciBSZWFjdElzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KShSZWFjdElzLmlzRWxlbWVudCwgITApO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgIWZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdHlwZSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHR5cGUgfHwgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgXCJvYmplY3RcIiA9PSB0eXBlb2YgdHlwZSAmJiBudWxsICE9PSB0eXBlICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBvYmplY3QgJiYgbnVsbCAhPT0gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSB8fCAoaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSAhMCwgXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS5cIikpLCBcbiAgICAgICAgICAgICAgICBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBvYmplY3QgJiYgbnVsbCAhPT0gb2JqZWN0ICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhc1N5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5mb3IsIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpIDogNjAxMDMsIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSA6IDYwMTA2LCBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpIDogNjAxMDcsIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikgOiA2MDEwOCwgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSA6IDYwMTE0LCBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpIDogNjAxMDksIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpIDogNjAxMTAsIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpIDogNjAxMTEsIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKSA6IDYwMTExLCBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpIDogNjAxMTIsIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIikgOiA2MDExMywgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIikgOiA2MDEyMCwgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikgOiA2MDExNSwgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIikgOiA2MDExNiwgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKSA6IDYwMTIxLCBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpIDogNjAxMTcsIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKSA6IDYwMTE4LCBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpIDogNjAxMTksIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRSwgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSwgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFLCBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFLCBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFLCBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSwgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFLCBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFLCBNZW1vID0gUkVBQ1RfTUVNT19UWVBFLCBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRSwgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFLCBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSwgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFLCBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9ICExO1xuICAgICAgICAgICAgZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGUsIGV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZSwgZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXIsIFxuICAgICAgICAgICAgZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXIsIGV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQsIGV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWYsIFxuICAgICAgICAgICAgZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50LCBleHBvcnRzLkxhenkgPSBMYXp5LCBleHBvcnRzLk1lbW8gPSBNZW1vLCBleHBvcnRzLlBvcnRhbCA9IFBvcnRhbCwgXG4gICAgICAgICAgICBleHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXIsIGV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGUsIGV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZSwgXG4gICAgICAgICAgICBleHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGUsIGV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGUsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyLCBleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXIsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQsIGV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmLCBleHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50LCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5LCBleHBvcnRzLmlzTWVtbyA9IGlzTWVtbywgZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsLCBleHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyLCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlLCBleHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlLCBleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSwgXG4gICAgICAgICAgICBleHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgICAgICAgfSgpO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBSZWFjdElzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgYXNzaWduID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSksIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgY2hlY2tQcm9wVHlwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KSwgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpLCBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2FybmluZzogXCIgKyB0ZXh0O1xuICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9LCBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhdG9yRm4pIHJldHVybiBpdGVyYXRvckZuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4ID09PSB5ID8gMCAhPT0geCB8fCAxIC8geCA9PSAxIC8geSA6IHggIT09IHggJiYgeSAhPT0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UsIHRoaXMuc3RhY2sgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUywgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiBSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVyci5uYW1lID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsIGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArIFwiOlwiICsgcHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJiBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDMgJiYgKHByaW50V2FybmluZyhcIllvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIHByb3Agb24gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiBZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzIGxpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyBmb3IgZGV0YWlscy5cIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9ICEwLCBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBwcm9wc1twcm9wTmFtZV0gPyBpc1JlcXVpcmVkID8gbmV3IFByb3BUeXBlRXJyb3IobnVsbCA9PT0gcHJvcHNbcHJvcE5hbWVdID8gXCJUaGUgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuXCIgOiBcIlRoZSBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLlwiKSA6IG51bGwgOiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fSwgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwLCBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgITEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCAhMCksIGNoYWluZWRDaGVja1R5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSAhPT0gZXhwZWN0ZWRUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBcIiArIGV4cGVjdGVkVHlwZSArIFwiYC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHR5cGVDaGVja2VyKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJQcm9wZXJ0eSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgY29tcG9uZW50IGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhbiBhcnJheS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiW1wiICsgaSArIFwiXVwiLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgYFwiICsgZXhwZWN0ZWRDbGFzc05hbWUgKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXSwgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzeW1ib2xcIiA9PT0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHZhbHVlIGBcIiArIFN0cmluZyhwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIG9uZSBvZiBcIiArIHZhbHVlc1N0cmluZyArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpID8gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIDogKHByaW50V2FybmluZyhhcmd1bWVudHMubGVuZ3RoID4gMSA/IFwiSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgXCIgKyBhcmd1bWVudHMubGVuZ3RoICsgXCIgYXJndW1lbnRzLiBBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS5cIiA6IFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuXCIpLCBcbiAgICAgICAgICAgICAgICBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdHlwZUNoZWNrZXIpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIlByb3BlcnR5IGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiBjb21wb25lbnQgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBwcm9wVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJvcFR5cGUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCIuXCIgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSAoMCwgYXJyYXlPZlR5cGVDaGVja2Vyc1tpXSkocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSByZXR1cm4gcHJpbnRXYXJuaW5nKFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LlwiKSwgXG4gICAgICAgICAgICAgICAgZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBjaGVja2VyKSByZXR1cm4gcHJpbnRXYXJuaW5nKFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkIFwiICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgXCIgYXQgaW5kZXggXCIgKyBpICsgXCIuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBwcm9wVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJvcFR5cGUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYG9iamVjdGAuXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIi5cIiArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV0sIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHByb3BUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBwcm9wVHlwZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgb2JqZWN0YC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZXIpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBrZXkgYFwiICsga2V5ICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAuXFxuQmFkIG9iamVjdDogXCIgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsIFwiICBcIikgKyBcIlxcblZhbGlkIGtleXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsIFwiICBcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiLlwiICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBwcm9wVmFsdWUgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVyYXRvckZuKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGVwLCBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKSBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgJiYgIWlzTm9kZShlbnRyeVsxXSkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3ltYm9sXCIgPT09IHByb3BUeXBlIHx8ICEhcHJvcFZhbHVlICYmIChcIlN5bWJvbFwiID09PSBwcm9wVmFsdWVbXCJAQHRvU3RyaW5nVGFnXCJdIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkgPyBcImFycmF5XCIgOiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgPyBcIm9iamVjdFwiIDogaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkgPyBcInN5bWJvbFwiIDogcHJvcFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBwcm9wVmFsdWUgfHwgbnVsbCA9PT0gcHJvcFZhbHVlKSByZXR1cm4gXCJcIiArIHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09PSBwcm9wVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIFwiZGF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gXCJyZWdleHBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYW4gXCIgKyB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZWdleHBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYSBcIiArIHR5cGU7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yICYmIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID8gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgOiBBTk9OWU1PVVM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yLCBGQVVYX0lURVJBVE9SX1NZTUJPTCA9IFwiQEBpdGVyYXRvclwiLCBBTk9OWU1PVVMgPSBcIjw8YW5vbnltb3VzPj5cIiwgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgICAgICAgICAgICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwiYXJyYXlcIiksXG4gICAgICAgICAgICAgICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJib29sZWFuXCIpLFxuICAgICAgICAgICAgICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwiZnVuY3Rpb25cIiksXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcIm51bWJlclwiKSxcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwib2JqZWN0XCIpLFxuICAgICAgICAgICAgICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJzdHJpbmdcIiksXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICBhbnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgICAgICB9KCksXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcm9wVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgbm9kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzTm9kZShwcm9wc1twcm9wTmFtZV0pID8gbnVsbCA6IG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgICAgIH0oKSxcbiAgICAgICAgICAgICAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZSwgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcywgXG4gICAgICAgICAgICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlLCBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcywgXG4gICAgICAgICAgICBSZWFjdFByb3BUeXBlcztcbiAgICAgICAgfTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT09IHZhbCB8fCB2b2lkIDAgPT09IHZhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdCh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuICAgICAgICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scywgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LCBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuYXNzaWduKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gbmV3IFN0cmluZyhcImFiY1wiKTtcbiAgICAgICAgICAgICAgICBpZiAodGVzdDFbNV0gPSBcImRlXCIsIFwiNVwiID09PSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ZXN0MiA9IHt9LCBpID0gMDsgaSA8IDEwOyBpKyspIHRlc3QyW1wiX1wiICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuICAgICAgICAgICAgICAgIGlmIChcIjAxMjM0NTY3ODlcIiAhPT0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0MltuXTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKFwiXCIpKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QzID0ge307XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGxldHRlcikge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuICAgICAgICAgICAgICAgIH0pLCBcImFiY2RlZmdoaWprbG1ub3BxcnN0XCIgPT09IE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmcm9tLCBzeW1ib2xzLCB0byA9IHRvT2JqZWN0KHRhcmdldCksIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkgJiYgKHRvW2tleV0gPSBmcm9tW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSBwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkgJiYgKHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICAgICAgICAgICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCBcIlJlYWN0IGNsYXNzXCIpICsgXCI6IFwiICsgbG9jYXRpb24gKyBcIiB0eXBlIGBcIiArIHR5cGVTcGVjTmFtZSArIFwiYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgXCIgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyLm5hbWUgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIiwgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHByaW50V2FybmluZygoY29tcG9uZW50TmFtZSB8fCBcIlJlYWN0IGNsYXNzXCIpICsgXCI6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgdHlwZVNwZWNOYW1lICsgXCJgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgXCIgKyB0eXBlb2YgZXJyb3IgKyBcIi4gWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCBzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuXCIpLCBcbiAgICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBwcmludFdhcm5pbmcoXCJGYWlsZWQgXCIgKyBsb2NhdGlvbiArIFwiIHR5cGU6IFwiICsgZXJyb3IubWVzc2FnZSArIChudWxsICE9IHN0YWNrID8gc3RhY2sgOiBcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9LCBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oNSksIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9LCBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4gICAgICAgIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJXYXJuaW5nOiBcIiArIHRleHQ7XG4gICAgICAgICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH0sIGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgICAgICAgfSwgbW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBzb3VyY2UpIHJldHVybiB7fTtcbiAgICAgICAgICAgIHZhciBrZXksIGksIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXSwgZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDAgfHwgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSAmJiAodGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHNvdXJjZSkgcmV0dXJuIHt9O1xuICAgICAgICAgICAgdmFyIGtleSwgaSwgdGFyZ2V0ID0ge30sIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIGtleSA9IHNvdXJjZUtleXNbaV0sIGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwIHx8ICh0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gTWVkaWFRdWVyeShfcmVmKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLCBkZXZpY2UgPSBfcmVmLmRldmljZSwgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLCBzZXR0aW5ncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbIFwiY2hpbGRyZW5cIiwgXCJkZXZpY2VcIiwgXCJvbkNoYW5nZVwiIF0pLCBtYXRjaGVzID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fLmEpKHNldHRpbmdzLCBkZXZpY2UsIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGNoaWxkcmVuID8gY2hpbGRyZW4obWF0Y2hlcykgOiBtYXRjaGVzID8gY2hpbGRyZW4gOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IE1lZGlhUXVlcnk7XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3VzZU1lZGlhUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4gICAgfSBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVzcG9uc2l2ZS5qcy5tYXAiLCJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IERvY3VtZW50YXRpb25MaXN0IGZyb20gJ0Bjb21wb25lbnRzL2RvY3VtZW50YXRpb24nO1xuaW1wb3J0IHsgZ2V0U29ydGVkRG9jdW1lbnRhdGlvbkRhdGEsIERvY3VtZW50TWV0YURhdGEgfSBmcm9tICdAbGliL2RvY3VtZW50cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbERvY3VtZW50YXRpb24gPSBhd2FpdCBnZXRTb3J0ZWREb2N1bWVudGF0aW9uRGF0YSgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbERvY3VtZW50YXRpb25cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6IFwiSFNXIEJvb21pIEFQSSBEb2N1bWVudGF0aW9uXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgcGxhY2UgY29sbGVjdGlvbiBvZiBkb2N1bWVudGF0aW9uIG9uIEhTVydzIEJvb21pIEFQSXMuXCJcbn07XG5cbmNvbnN0IERvY3VtZW50YXRpb246IEZDPHsgZG9jdW1lbnRzOiBEb2N1bWVudE1ldGFEYXRhW10sIGlzVW5yZWxlYXNlZD86IGJvb2xlYW4gfT4gPSAoeyBkb2N1bWVudHMsIGlzVW5yZWxlYXNlZCA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3Qgc2hvdWxkQmUyQ29scyA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogJzQwcmVtJyB9KTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiRG9jdW1lbnRhdGlvbiB8IEhTVyBCb29taSBBUElcIiBtZXRhPXttZXRhfT5cbiAgICAgICAge3Nob3VsZEJlMkNvbHMgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZmxleEdyaWR9PlxuICAgICAgICAgICAgPERvY3VtZW50YXRpb25MaXN0IGRvY3VtZW50cz17ZG9jdW1lbnRzfSBpc1VucmVsZWFzZWQ9e2lzVW5yZWxlYXNlZH0gc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjByZW1cIiAsIHBhZGRpbmc6ICcwLjVyZW0nIH19IC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMuZmxleENvbHVtbn0gJHt1dGlsU3R5bGVzLnN0aWNreX1gfSBzdHlsZT17eyBtYXhXaWR0aDogXCIyMHJlbVwiICwgcGFkZGluZzogJzAuNXJlbScgfX0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5ET2N1bWVudGF0aW9uIEludHJvPC9oMj5cbiAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2VkIGVhcXVlIHF1YWUgYXJjaGl0ZWN0bywgcHJhZXNlbnRpdW0sIHNhcGllbnRlIHJhdGlvbmUgcXVpYSBkb2xvcnVtIGxhYm9yZSBub2JpcyBub3N0cnVtIHBvcnJvIHZlcm8gYWxpcXVhbSB2aXRhZSB0b3RhbSBpc3RlIGV4Y2VwdHVyaSBkb2xvcmVtIGZ1Z2lhdCBkb2xvcmlidXMuPC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxEb2N1bWVudGF0aW9uTGlzdCBkb2N1bWVudHM9e2RvY3VtZW50c30gaXNVbnJlbGVhc2VkPXtpc1VucmVsZWFzZWR9IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIwcmVtXCIsIG1hcmdpbjogXCJhdXRvXCIgfX0gLz5cbiAgICAgICAgKX0gXG4gICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmNvbnN0IERvY3VtZW50OiBGQzx7IGFsbERvY3VtZW50YXRpb246IERvY3VtZW50TWV0YURhdGFbXSB9PiA9ICh7IGFsbERvY3VtZW50YXRpb24gfSkgPT4ge1xuICByZXR1cm4gKDxEb2N1bWVudGF0aW9uIGRvY3VtZW50cz17YWxsRG9jdW1lbnRhdGlvbn0gLz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=