webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

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
___CSS_LOADER_EXPORT___.push([module.i, "/* padding: 1rem; */\r\n\r\n\r\n/* Table Rounding */\r\n.Table_table__1EC6b {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n}\r\n\r\n.Table_table__1EC6b .Table_thead__2deuv   {\r\n    display: inline-block;\r\n    background: hsl(240, 5%, 15%);\r\n    border: 1px solid whitesmoke;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tbody__3LSi_   {\r\n    display: inline-block;\r\n    border-bottom: 1px solid whitesmoke;\r\n    border-left: 1px solid whitesmoke;\r\n    border-right: 1px solid whitesmoke;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tr__2DL9c .Table_td__1oCl7:last-of-type, .Table_table__1EC6b .Table_tr__2DL9c .Table_th__6w9tE:last-of-type {\r\n    border-right: whitesmoke;\r\n}\r\n.Table_table__1EC6b .Table_tr__2DL9c .Table_td__1oCl7:last-of-type {\r\n    background: green;\r\n    border: none;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tbody__3LSi_ .Table_tr__2DL9c {\r\n    border-bottom: 1px solid whitesmoke;\r\n}\r\n.Table_table__1EC6b .Table_tbody__3LSi_ .Table_tr__2DL9c:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.Table_th__6w9tE, .Table_td__1oCl7 {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN, .Table_td__1oCl7 .Table_resizer__2AqsN {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 80%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translateX(50%) translateY(10%);\r\n            transform: translateX(50%) translateY(10%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN.Table_isResizing__W_zI5, .Table_td__1oCl7 .Table_resizer__2AqsN.Table_isResizing__W_zI5 {\r\n    background: red;\r\n}", "",{"version":3,"sources":["webpack://components/tools/Table.module.css"],"names":[],"mappings":"AAAA,mBAAmB;;;AAGnB,mBAAmB;AACnB;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,6BAA6B;IAC7B,4BAA4B;IAC5B,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;IACrB,mCAAmC;IACnC,iCAAiC;IACjC,kCAAkC;IAClC,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;AAC5B;AACA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,kDAA0C;YAA1C,0CAA0C;IAC1C,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* padding: 1rem; */\r\n\r\n\r\n/* Table Rounding */\r\n.table {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n}\r\n\r\n.table .thead   {\r\n    display: inline-block;\r\n    background: hsl(240, 5%, 15%);\r\n    border: 1px solid whitesmoke;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.table .tbody   {\r\n    display: inline-block;\r\n    border-bottom: 1px solid whitesmoke;\r\n    border-left: 1px solid whitesmoke;\r\n    border-right: 1px solid whitesmoke;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.table .tr .td:last-of-type, .table .tr .th:last-of-type {\r\n    border-right: whitesmoke;\r\n}\r\n.table .tr .td:last-of-type {\r\n    background: green;\r\n    border: none;\r\n}\r\n\r\n.table .tbody .tr {\r\n    border-bottom: 1px solid whitesmoke;\r\n}\r\n.table .tbody .tr:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.th, .td {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.th .resizer, .td .resizer {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 80%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transform: translateX(50%) translateY(10%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.th .resizer.isResizing, .td .resizer.isResizing {\r\n    background: red;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"table": "Table_table__1EC6b",
	"thead": "Table_thead__2deuv",
	"tbody": "Table_tbody__3LSi_",
	"tr": "Table_tr__2DL9c",
	"td": "Table_td__1oCl7",
	"th": "Table_th__6w9tE",
	"resizer": "Table_resizer__2AqsN",
	"isResizing": "Table_isResizing__W_zI5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxvQkFBb0IsNERBQTRELDhCQUE4QiwwQkFBMEIsS0FBSyxtREFBbUQsOEJBQThCLHNDQUFzQyxxQ0FBcUMscUNBQXFDLHNDQUFzQyxLQUFLLG1EQUFtRCw4QkFBOEIsNENBQTRDLDBDQUEwQywyQ0FBMkMsd0NBQXdDLHlDQUF5QyxLQUFLLGdKQUFnSixpQ0FBaUMsS0FBSyx3RUFBd0UsMEJBQTBCLHFCQUFxQixLQUFLLGtFQUFrRSw0Q0FBNEMsS0FBSywyRUFBMkUscUJBQXFCLEtBQUssNENBQTRDLGtCQUFrQix3QkFBd0IsMkJBQTJCLEtBQUssd0ZBQXdGLDhCQUE4Qix5QkFBeUIsb0JBQW9CLG9CQUFvQiwyQkFBMkIsaUJBQWlCLGVBQWUsMkRBQTJELDJEQUEyRCxtQkFBbUIsMEJBQTBCLEtBQUssd0lBQXdJLHdCQUF3QixLQUFLLE9BQU8sMkdBQTJHLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSwyQ0FBMkMsK0NBQStDLDhCQUE4QiwwQkFBMEIsS0FBSyx5QkFBeUIsOEJBQThCLHNDQUFzQyxxQ0FBcUMscUNBQXFDLHNDQUFzQyxLQUFLLHlCQUF5Qiw4QkFBOEIsNENBQTRDLDBDQUEwQywyQ0FBMkMsd0NBQXdDLHlDQUF5QyxLQUFLLGtFQUFrRSxpQ0FBaUMsS0FBSyxpQ0FBaUMsMEJBQTBCLHFCQUFxQixLQUFLLDJCQUEyQiw0Q0FBNEMsS0FBSyxvQ0FBb0MscUJBQXFCLEtBQUssa0JBQWtCLGtCQUFrQix3QkFBd0IsMkJBQTJCLEtBQUssb0NBQW9DLDhCQUE4Qix5QkFBeUIsb0JBQW9CLG9CQUFvQiwyQkFBMkIsaUJBQWlCLGVBQWUsbURBQW1ELG1CQUFtQiwwQkFBMEIsS0FBSywwREFBMEQsd0JBQXdCLEtBQUssbUJBQW1CO0FBQ3I2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC4yZWUxNGE5MTQ2ZWFlMjJhZjhmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcGFkZGluZzogMXJlbTsgKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBUYWJsZSBSb3VuZGluZyAqL1xcclxcbi5UYWJsZV90YWJsZV9fMUVDNmIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90aGVhZF9fMmRldXYgICB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogaHNsKDI0MCwgNSUsIDE1JSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90Ym9keV9fM0xTaV8gICB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90YWJsZV9fMUVDNmIgLlRhYmxlX3RyX18yREw5YyAuVGFibGVfdGRfXzFvQ2w3Omxhc3Qtb2YtdHlwZSwgLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdHJfXzJETDljIC5UYWJsZV90aF9fNnc5dEU6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90cl9fMkRMOWMgLlRhYmxlX3RkX18xb0NsNzpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90Ym9keV9fM0xTaV8gLlRhYmxlX3RyX18yREw5YyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90Ym9keV9fM0xTaV8gLlRhYmxlX3RyX18yREw5YzpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90aF9fNnc5dEUsIC5UYWJsZV90ZF9fMW9DbDcge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGhfXzZ3OXRFIC5UYWJsZV9yZXNpemVyX18yQXFzTiwgLlRhYmxlX3RkX18xb0NsNyAuVGFibGVfcmVzaXplcl9fMkFxc04ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoMTAlKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDEwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvdWNoLWFjdGlvbjpub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGhfXzZ3OXRFIC5UYWJsZV9yZXNpemVyX18yQXFzTi5UYWJsZV9pc1Jlc2l6aW5nX19XX3pJNSwgLlRhYmxlX3RkX18xb0NsNyAuVGFibGVfcmVzaXplcl9fMkFxc04uVGFibGVfaXNSZXNpemluZ19fV196STUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQW1COzs7QUFHbkIsbUJBQW1CO0FBQ25CO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixrREFBMEM7WUFBMUMsMENBQTBDO0lBQzFDLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHBhZGRpbmc6IDFyZW07ICovXFxyXFxuXFxyXFxuXFxyXFxuLyogVGFibGUgUm91bmRpbmcgKi9cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLnRoZWFkICAge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IGhzbCgyNDAsIDUlLCAxNSUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIC50Ym9keSAgIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIC50ciAudGQ6bGFzdC1vZi10eXBlLCAudGFibGUgLnRyIC50aDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IHdoaXRlc21va2U7XFxyXFxufVxcclxcbi50YWJsZSAudHIgLnRkOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSAudGJvZHkgLnRyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxufVxcclxcbi50YWJsZSAudGJvZHkgLnRyOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoLCAudGQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGggLnJlc2l6ZXIsIC50ZCAucmVzaXplciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoMTAlKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOm5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aCAucmVzaXplci5pc1Jlc2l6aW5nLCAudGQgLnJlc2l6ZXIuaXNSZXNpemluZyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGFibGVcIjogXCJUYWJsZV90YWJsZV9fMUVDNmJcIixcblx0XCJ0aGVhZFwiOiBcIlRhYmxlX3RoZWFkX18yZGV1dlwiLFxuXHRcInRib2R5XCI6IFwiVGFibGVfdGJvZHlfXzNMU2lfXCIsXG5cdFwidHJcIjogXCJUYWJsZV90cl9fMkRMOWNcIixcblx0XCJ0ZFwiOiBcIlRhYmxlX3RkX18xb0NsN1wiLFxuXHRcInRoXCI6IFwiVGFibGVfdGhfXzZ3OXRFXCIsXG5cdFwicmVzaXplclwiOiBcIlRhYmxlX3Jlc2l6ZXJfXzJBcXNOXCIsXG5cdFwiaXNSZXNpemluZ1wiOiBcIlRhYmxlX2lzUmVzaXppbmdfX1dfekk1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==