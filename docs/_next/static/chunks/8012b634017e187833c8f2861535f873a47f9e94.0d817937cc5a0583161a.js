(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,i=e.hasQuery,a=void 0!==i&&i;return n||r&&a}},"4Jwa":function(e,t,n){e.exports={menu:"menu_menu__2p8MF"}},"5M6V":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("g4pe"),a=n.n(i),s=n("Tred"),u=n.n(s),c=n("Z4Yb"),l=n.n(c),p=n("D8Dr"),f=n.n(p),d=n("qCJc"),h=n.n(d),m=n("YFqc"),v=n.n(m),y=n("l7Ro"),b=n.n(y),w=r.a.createElement,g=[{name:"Home",path:"/"},{name:"Documentation",path:"/documentation"},{name:"Implementations",path:"/implementations"}],_=function(e){var t=e.closeCallback,n=e.links,o=void 0===n?g:n;return w("div",{className:b.a.menu},o.map((function(e){return w("div",{className:b.a["menu-item"],key:e.name},w(v.a,{href:e.path},w("a",{onClick:t},e.name)))})),w("div",{className:b.a.hint}))},S=n("4Jwa"),O=n.n(S),x=r.a.createElement,M=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],i=function(){n(!0)},a=function(){n(!1)};return x(r.a.Fragment,null,x(f.a,{isOpen:t,closeCallback:a},x(_,{closeCallback:a})),x("div",{className:O.a.menu,onClick:i},x(h.a,{isOpen:t,menuClicked:i,width:24,height:24,strokeWidth:2,rotate:0,color:"whitesmoke",borderRadius:0,animationDuration:.5})))},k=r.a.createElement,E=function(e){var t=e.options;return k(a.a,null,(null===t||void 0===t?void 0:t.title)&&k("meta",{name:"og:title",content:t.title}),(null===t||void 0===t?void 0:t.description)&&k("meta",{name:"description",content:t.description}),(null===t||void 0===t?void 0:t.image)&&k("meta",{property:"og:image",content:t.image}),t&&k("meta",{name:"twitter:card",content:"summary_large_image"}))},P=r.a.createElement;t.a=function(e){var t=e.children,n=e.title,o=void 0===n?"Home | HSW Boomi API":n,i=e.meta,s=e.home,c=e.style,p=void 0===c?{maxWidth:"36rem"}:c,f=e.className,d=void 0===f?"":f;return P(r.a.Fragment,null,P(M,null),P("div",{className:"".concat(u.a.container," ").concat(d),style:p},P(a.a,null,P("link",{rel:"icon",href:"/favicon.ico"}),o&&P("title",null,o)),P(E,{options:i}),P("header",{className:u.a.header},s&&P(r.a.Fragment,null,P("h1",{className:l.a.heading2Xl},"HSW Boomi API"))),P("main",null,t)))}},"8Kt/":function(e,t,n){"use strict";var o=n("lSNA");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(i=n("Xuae"))&&i.__esModule?i:{default:i},u=n("lwAK"),c=n("FYa8"),l=n("/0+H");function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var i=!0,a=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){a=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var l=h[u];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var p=r.props[l],f=o[l]||new Set;"name"===l&&a||!f.has(p)?(f.add(p),o[l]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:i})}))}function v(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),o=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:m,headManager:o,inAmpMode:(0,l.isInAmpMode)(n)},t)}v.rewind=function(){};var y=v;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},D8Dr:function(e,t,n){const o=n("e5Xn");e.exports=o},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},JtOw:function(e,t,n){var o,r,i;r=[t,n("fnPv")],void 0===(i="function"===typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(t);function o(e){return e&&e.__esModule?e:{default:e}}e.default=n.default})?o.apply(t,r):o)||(e.exports=i)},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||i(e)||a()}},Tred:function(e,t,n){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerImage:"layout_headerImage__2h5On",headerHomeImage:"layout_headerHomeImage__3qo1_",backToHome:"layout_backToHome__1vZsp"}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),r=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=function(e){a(n,e);var t=c(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(o(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},Z4Yb:function(e,t,n){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",sticky:"utils_sticky__1I7V4",flexGrid:"utils_flexGrid__2xpNp",flexColumn:"utils_flexColumn__29rHW"}},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var i=r(n("q1tI")),a=n("elyg"),s=n("nOHt"),u=n("vNVm"),c={};function l(e,t,n,o){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",p=i.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=o(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,a.resolveHref)(r,e.as):s||i}}),[r,e.href,e.as]),f=p.href,d=p.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var w=i.Children.only(h),g=w&&"object"===typeof w&&w.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),S=o(_,2),O=S[0],x=S[1],M=i.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);(0,i.useEffect)((function(){var e=x&&t&&(0,a.isLocalURL)(f),o="undefined"!==typeof b?b:n&&n.locale,r=c[f+"%"+d+(o?"%"+o:"")];e&&!r&&l(n,f,d,{locale:o})}),[d,f,x,b,t,n]);var k={ref:M,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:i,locale:u,scroll:s}))}(e,n,f,d,m,v,y,b)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(n,f,d,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var E="undefined"!==typeof b?b:n&&n.locale,P=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,E,n&&n.locales,n&&n.domainLocales);k.href=P||(0,a.addBasePath)((0,a.addLocale)(d,E,n&&n.defaultLocale))}return i.default.cloneElement(w,k)};t.default=p},e5Xn:function(e,t,n){var o;"undefined"!==typeof self&&self,o=function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(0),a=n.n(i),s=n(3),u=n.n(s),c=n(2),l=n.n(c);function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){return{position:"fixed",top:e.topOffset,bottom:e.bottomOffset,left:0,right:0,zIndex:1001,background:"rgba(0, 0, 0, 0.3)",opacity:0,transition:"opacity ".concat(e.transitionTime,"s, transform 0s ").concat(e.transitionTime,"s"),transform:"translate3d(".concat(e.isLeft?"":"-","100%, 0px, 0px)")}},h=function(e){return p({},d(e),{opacity:1,transition:"opacity ".concat(e.transitionTime,"s"),transform:"none"})},m=function(e){return{position:"fixed",left:e.isLeft?0:"inherit",right:e.isLeft?"inherit":0,top:e.topOffset,bottom:e.bottomOffset,zIndex:1002,width:e.width,maxWidth:"80%",transition:"transform ".concat(e.transitionTime,"s"),transform:w(e)+"translate3d(".concat(e.isLeft?"-":"","100%, 0px, 0px)"),transformOrigin:"left",backgroundColor:e.backgroundColor}},v=function(e){return{position:"absolute",zIndex:-1,width:"100%",height:"100%",transition:"opacity ".concat(e.transitionTime,"s"),boxShadow:e.showShadow?"0 0 15px 0 rgba(0, 0, 0, .2)":"none",opacity:0,top:0,bottom:0,left:0,right:0}},y=function(e){return p({},v(e),{opacity:1})},b=function(e){return{height:"100%",paddingBottom:e.topOffset,overflowY:"auto"}};function w(e){return e.skewY?"skewY(".concat(e.skewY,"deg) "):""}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k="idle",E="vertical",P="horizontal",C=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?M(e):t}(this,O(t).call(this))).state={swiping:!1,direction:k,swipePosition:{x:0,y:0},menuExtraStyle:{}},e.onSwipeStart=e.onSwipeStart.bind(M(M(e))),e.onSwipeMove=e.onSwipeMove.bind(M(M(e))),e.onSwipeEnd=e.onSwipeEnd.bind(M(M(e))),e}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(o=[{key:"onSwipeStart",value:function(e){this.props.isOpen&&this.setState({swiping:!0})}},{key:"onSwipeMove",value:function(e,t){if(this.state.swiping){var n=this.getOptions(),o=this.state.direction;if(o===k){var r=n.width/15;(Math.abs(e.x)>r||Math.abs(e.y)>r)&&(o=(!this.props.right&&e.x<0||this.props.right&&e.x>0)&&Math.abs(e.x)>Math.abs(e.y)?P:E)}if(o===P){var i=!this.props.right&&e.x<0||this.props.right&&e.x>0?e.x:0;this.setState({direction:o,swipePosition:e,menuExtraStyle:{transform:w(n)+"translate3d(".concat(i,"px, 0px, 0px)"),transition:"transform 0s"}}),t.preventDefault()}o===E&&this.setState({direction:o,swipePosition:{x:0,y:0},menuExtraStyle:{}})}}},{key:"onSwipeEnd",value:function(e){var t=this.getOptions().width/3;(!this.props.right&&this.state.swipePosition.x<-t||this.props.right&&this.state.swipePosition.x>t)&&this.props.closeCallback(),this.setState({swiping:!1,direction:k,swipePosition:{x:0,y:0},menuExtraStyle:{}})}},{key:"getOptions",value:function(){return{isLeft:!this.props.right,transitionTime:this.props.transitionTime||.3,topOffset:this.props.topOffset||0,bottomOffset:this.props.bottomOffset||0,width:this.props.width||300,backgroundColor:this.props.backgroundColor||"white",showShadow:!this.props.noShadow,skewY:this.props.skewY}}},{key:"render",value:function(){var e=this.props,t=e.isOpen,n=e.closeCallback,o=e.className,i=e.overlayClassName,a=e.outerClassName,s=e.innerClassName,c=e.shadowClassName,f=e.children,g=this.getOptions(),S=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){_(e,t,n[t])}))}return e}({},t?function(e){return p({},m(e),{transform:w(e)+"translate3d(0px, 0px, 0px)"})}(g):m(g),this.state.menuExtraStyle);return r.a.createElement("div",{className:l()("cheeseburger-menu",o,{open:t})},r.a.createElement("div",{className:l()("cheeseburger-menu-overlay",i),style:t?h(g):d(g),onClick:n}),r.a.createElement(u.a,{onSwipeStart:this.onSwipeStart,onSwipeMove:this.onSwipeMove,onSwipeEnd:this.onSwipeEnd},r.a.createElement("div",{className:l()("cheeseburger-menu-outer",a),style:S},r.a.createElement("div",{className:l()("cheeseburger-menu-inner",s),style:b(g)},f),r.a.createElement("div",{className:l()("cheeseburger-menu-shadow",c),style:t?y(g):v(g)}))))}}])&&S(n.prototype,o),i&&S(n,i),t}(o.Component);C.propTypes={isOpen:a.a.bool.isRequired,closeCallback:a.a.func.isRequired,right:a.a.bool,transitionTime:a.a.number,topOffset:a.a.oneOfType([a.a.number,a.a.string]),bottomOffset:a.a.oneOfType([a.a.number,a.a.string]),width:a.a.number,backgroundColor:a.a.string,skewY:a.a.number,noShadow:a.a.bool,className:a.a.string,overlayClassName:a.a.string,outerClassName:a.a.string,innerClassName:a.a.string,shadowClassName:a.a.string,children:a.a.node},t.default=C}])},e.exports=o(n("17x9"),n("q1tI"),n("JtOw"))},fnPv:function(e,t,n){var o,r,i;r=[t,n("q1tI"),n("17x9")],void 0===(i="function"===typeof(o=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=d;var o=i(t),r=i(n);function i(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function s(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=!1;function d(e){f=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){d(!0)}}))}catch(y){}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return f?e:e.capture}function m(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var v=function(e){function t(){var e;u(this,t);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return i._handleSwipeStart=i._handleSwipeStart.bind(i),i._handleSwipeMove=i._handleSwipeMove.bind(i),i._handleSwipeEnd=i._handleSwipeEnd.bind(i),i._onMouseDown=i._onMouseDown.bind(i),i._onMouseMove=i._onMouseMove.bind(i),i._onMouseUp=i._onMouseUp.bind(i),i}return p(t,e),c(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=m(e),n=t.x,o=t.y;this.moveStart={x:n,y:o},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=m(e),n=t.x,o=t.y,r=n-this.moveStart.x,i=o-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:r,y:i},e)&&e.preventDefault(),this.movePosition={deltaX:r,deltaY:i}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this,t=this.props,n=(t.tagName,t.className),r=t.style,i=t.children,u=(t.allowMouseEvents,t.onSwipeUp,t.onSwipeDown,t.onSwipeLeft,t.onSwipeRight,t.onSwipeStart,t.onSwipeMove,t.onSwipeEnd,s(t,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd"]));return o.default.createElement(this.props.tagName,a({ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:n,style:r},u),i)}}]),t}(t.Component);v.displayName="ReactSwipe",v.propTypes={tagName:r.default.string,className:r.default.string,style:r.default.object,children:r.default.node,allowMouseEvents:r.default.bool,onSwipeUp:r.default.func,onSwipeDown:r.default.func,onSwipeLeft:r.default.func,onSwipeRight:r.default.func,onSwipeStart:r.default.func,onSwipeMove:r.default.func,onSwipeEnd:r.default.func,tolerance:r.default.number.isRequired},v.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=v})?o.apply(t,r):o)||(e.exports=i)},g4pe:function(e,t,n){e.exports=n("8Kt/")},l7Ro:function(e,t,n){e.exports={menu:"menuContent_menu__L8bny","menu-item":"menuContent_menu-item__1ze-M","active-menu-item":"menuContent_active-menu-item__3zkEw",hint:"menuContent_hint__WZtzR"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},qCJc:function(e,t,n){"use strict";t.__esModule=!0,t.default=a;var o=i(n("q1tI")),r=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=(e.width||36)+"px",n=(e.height||30)+"px",r=parseInt(n.replace("px",""))/2+"px",i=e.isOpen||!1,a=e.strokeWidth||2,s="-"+a/2+"px",u=e.animationDuration||"0.4",c=function(e,t,n){return"translate3d(0,"+(e?r:t)+",0) rotate("+(e?n+"deg":"0")+")"},l={container:{width:t,height:n,position:"relative",transform:"rotate("+(e.rotate||0)+"deg)"},lineBase:{display:"block",height:a+"px",width:"100%",background:e.color||"#000",transitionTimingFunction:"ease",transitionDuration:u+"s",borderRadius:(e.borderRadius||0)+"px",transformOrigin:"center",position:"absolute"},firstLine:{transform:c(i,0,45),marginTop:s},secondLine:{transitionTimingFunction:"ease-out",transitionDuration:u/4+"s",opacity:i?"0":"1",top:r,marginTop:s},thirdLine:{transform:c(i,n,-45),marginTop:s}};return o.default.createElement("div",{style:l.container,className:e.className,onClick:e.menuClicked},o.default.createElement("span",{style:Object.assign({},l.lineBase,l.firstLine)}),o.default.createElement("span",{style:Object.assign({},l.lineBase,l.secondLine)}),o.default.createElement("span",{style:Object.assign({},l.lineBase,l.thirdLine)}))}a.propTypes={isOpen:r.default.bool.isRequired,menuClicked:r.default.func.isRequired,width:r.default.number,height:r.default.number,strokeWidth:r.default.number,rotate:r.default.number,color:r.default.string,borderRadius:r.default.number,animationDuration:r.default.number,className:r.default.string}},vNVm:function(e,t,n){"use strict";var o=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,r.useRef)(),c=(0,r.useState)(!1),l=o(c,2),p=l[0],f=l[1],d=(0,r.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||p||e&&e.tagName&&(u.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,i=o.observer,a=o.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,p]);return(0,r.useEffect)((function(){if(!a&&!p){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[p]),[d,p]};var r=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var s=new Map}}]);