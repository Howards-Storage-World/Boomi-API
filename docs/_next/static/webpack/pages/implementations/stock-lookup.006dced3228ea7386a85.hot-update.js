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
___CSS_LOADER_EXPORT___.push([module.i, "/* padding: 1rem; */\r\n\r\n\r\n/* Table Rounding */\r\n.Table_table__1EC6b {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n}\r\n\r\n.Table_table__1EC6b .Table_thead__2deuv   {\r\n    display: inherit;\r\n    background: hsl(240, 5%, 15%);\r\n    border: 1px solid whitesmoke;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tbody__3LSi_   {\r\n    display: inherit;\r\n    border-bottom: 1px solid whitesmoke;\r\n    border-left: 1px solid whitesmoke;\r\n    border-right: 1px solid whitesmoke;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tr__2DL9c .Table_td__1oCl7, .Table_table__1EC6b .Table_tr__2DL9c .Table_th__6w9tE {\r\n    border-right: 1px solid whitesmoke;\r\n}\r\n.Table_table__1EC6b .Table_tr__2DL9c .Table_td__1oCl7:last-of-type, .Table_table__1EC6b .Table_tr__2DL9c .Table_th__6w9tE:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.Table_table__1EC6b .Table_tbody__3LSi_ .Table_tr__2DL9c {\r\n    border-bottom: 1px solid whitesmoke;\r\n}\r\n.Table_table__1EC6b .Table_tbody__3LSi_ .Table_tr__2DL9c:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.Table_th__6w9tE, .Table_td__1oCl7 {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN, .Table_td__1oCl7 .Table_resizer__2AqsN {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 80%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translateX(50%) translateY(10%);\r\n            transform: translateX(50%) translateY(10%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.Table_th__6w9tE .Table_resizer__2AqsN.Table_isResizing__W_zI5, .Table_td__1oCl7 .Table_resizer__2AqsN.Table_isResizing__W_zI5 {\r\n    background: red;\r\n}", "",{"version":3,"sources":["webpack://components/tools/Table.module.css"],"names":[],"mappings":"AAAA,mBAAmB;;;AAGnB,mBAAmB;AACnB;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,4BAA4B;IAC5B,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,iCAAiC;IACjC,kCAAkC;IAClC,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,kCAAkC;AACtC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,mCAAmC;AACvC;AACA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,kDAA0C;YAA1C,0CAA0C;IAC1C,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* padding: 1rem; */\r\n\r\n\r\n/* Table Rounding */\r\n.table {\r\n    display: inline-block;\r\n    border-spacing: 0;\r\n}\r\n\r\n.table .thead   {\r\n    display: inherit;\r\n    background: hsl(240, 5%, 15%);\r\n    border: 1px solid whitesmoke;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.table .tbody   {\r\n    display: inherit;\r\n    border-bottom: 1px solid whitesmoke;\r\n    border-left: 1px solid whitesmoke;\r\n    border-right: 1px solid whitesmoke;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.table .tr .td, .table .tr .th {\r\n    border-right: 1px solid whitesmoke;\r\n}\r\n.table .tr .td:last-of-type, .table .tr .th:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.table .tbody .tr {\r\n    border-bottom: 1px solid whitesmoke;\r\n}\r\n.table .tbody .tr:last-of-type {\r\n    border: none;\r\n}\r\n\r\n.th, .td {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n    position: relative;\r\n}\r\n\r\n.th .resizer, .td .resizer {\r\n    display: inline-block;\r\n    background: blue;\r\n    width: 10px;\r\n    height: 80%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transform: translateX(50%) translateY(10%);\r\n    z-index: 1;\r\n    touch-action:none;\r\n}\r\n\r\n.th .resizer.isResizing, .td .resizer.isResizing {\r\n    background: red;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxvQkFBb0IsNERBQTRELDhCQUE4QiwwQkFBMEIsS0FBSyxtREFBbUQseUJBQXlCLHNDQUFzQyxxQ0FBcUMscUNBQXFDLHNDQUFzQyxLQUFLLG1EQUFtRCx5QkFBeUIsNENBQTRDLDBDQUEwQywyQ0FBMkMsd0NBQXdDLHlDQUF5QyxLQUFLLHNIQUFzSCwyQ0FBMkMsS0FBSyw0SUFBNEkscUJBQXFCLEtBQUssa0VBQWtFLDRDQUE0QyxLQUFLLDJFQUEyRSxxQkFBcUIsS0FBSyw0Q0FBNEMsa0JBQWtCLHdCQUF3QiwyQkFBMkIsS0FBSyx3RkFBd0YsOEJBQThCLHlCQUF5QixvQkFBb0Isb0JBQW9CLDJCQUEyQixpQkFBaUIsZUFBZSwyREFBMkQsMkRBQTJELG1CQUFtQiwwQkFBMEIsS0FBSyx3SUFBd0ksd0JBQXdCLEtBQUssT0FBTywyR0FBMkcsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSwyQ0FBMkMsK0NBQStDLDhCQUE4QiwwQkFBMEIsS0FBSyx5QkFBeUIseUJBQXlCLHNDQUFzQyxxQ0FBcUMscUNBQXFDLHNDQUFzQyxLQUFLLHlCQUF5Qix5QkFBeUIsNENBQTRDLDBDQUEwQywyQ0FBMkMsd0NBQXdDLHlDQUF5QyxLQUFLLHdDQUF3QywyQ0FBMkMsS0FBSyw4REFBOEQscUJBQXFCLEtBQUssMkJBQTJCLDRDQUE0QyxLQUFLLG9DQUFvQyxxQkFBcUIsS0FBSyxrQkFBa0Isa0JBQWtCLHdCQUF3QiwyQkFBMkIsS0FBSyxvQ0FBb0MsOEJBQThCLHlCQUF5QixvQkFBb0Isb0JBQW9CLDJCQUEyQixpQkFBaUIsZUFBZSxtREFBbUQsbUJBQW1CLDBCQUEwQixLQUFLLDBEQUEwRCx3QkFBd0IsS0FBSyxtQkFBbUI7QUFDajVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBsZW1lbnRhdGlvbnMvc3RvY2stbG9va3VwLjAwNmRjZWQzMjI4ZWE3Mzg2YTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBwYWRkaW5nOiAxcmVtOyAqL1xcclxcblxcclxcblxcclxcbi8qIFRhYmxlIFJvdW5kaW5nICovXFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5UYWJsZV90YWJsZV9fMUVDNmIgLlRhYmxlX3RoZWFkX18yZGV1diAgIHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZDogaHNsKDI0MCwgNSUsIDE1JSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90Ym9keV9fM0xTaV8gICB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90cl9fMkRMOWMgLlRhYmxlX3RkX18xb0NsNywgLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdHJfXzJETDljIC5UYWJsZV90aF9fNnc5dEUge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4uVGFibGVfdGFibGVfXzFFQzZiIC5UYWJsZV90cl9fMkRMOWMgLlRhYmxlX3RkX18xb0NsNzpsYXN0LW9mLXR5cGUsIC5UYWJsZV90YWJsZV9fMUVDNmIgLlRhYmxlX3RyX18yREw5YyAuVGFibGVfdGhfXzZ3OXRFOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdGJvZHlfXzNMU2lfIC5UYWJsZV90cl9fMkRMOWMge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLlRhYmxlX3RhYmxlX18xRUM2YiAuVGFibGVfdGJvZHlfXzNMU2lfIC5UYWJsZV90cl9fMkRMOWM6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uVGFibGVfdGhfXzZ3OXRFLCAuVGFibGVfdGRfXzFvQ2w3IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RoX182dzl0RSAuVGFibGVfcmVzaXplcl9fMkFxc04sIC5UYWJsZV90ZF9fMW9DbDcgLlRhYmxlX3Jlc2l6ZXJfXzJBcXNOIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDEwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgxMCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3VjaC1hY3Rpb246bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlRhYmxlX3RoX182dzl0RSAuVGFibGVfcmVzaXplcl9fMkFxc04uVGFibGVfaXNSZXNpemluZ19fV196STUsIC5UYWJsZV90ZF9fMW9DbDcgLlRhYmxlX3Jlc2l6ZXJfXzJBcXNOLlRhYmxlX2lzUmVzaXppbmdfX1dfekk1IHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy90b29scy9UYWJsZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjs7O0FBR25CLG1CQUFtQjtBQUNuQjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixrREFBMEM7WUFBMUMsMENBQTBDO0lBQzFDLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHBhZGRpbmc6IDFyZW07ICovXFxyXFxuXFxyXFxuXFxyXFxuLyogVGFibGUgUm91bmRpbmcgKi9cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLnRoZWFkICAge1xcclxcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjQwLCA1JSwgMTUlKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSAudGJvZHkgICB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLnRyIC50ZCwgLnRhYmxlIC50ciAudGgge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udGFibGUgLnRyIC50ZDpsYXN0LW9mLXR5cGUsIC50YWJsZSAudHIgLnRoOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIC50Ym9keSAudHIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRhYmxlIC50Ym9keSAudHI6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGgsIC50ZCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50aCAucmVzaXplciwgLnRkIC5yZXNpemVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgxMCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3VjaC1hY3Rpb246bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoIC5yZXNpemVyLmlzUmVzaXppbmcsIC50ZCAucmVzaXplci5pc1Jlc2l6aW5nIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0YWJsZVwiOiBcIlRhYmxlX3RhYmxlX18xRUM2YlwiLFxuXHRcInRoZWFkXCI6IFwiVGFibGVfdGhlYWRfXzJkZXV2XCIsXG5cdFwidGJvZHlcIjogXCJUYWJsZV90Ym9keV9fM0xTaV9cIixcblx0XCJ0clwiOiBcIlRhYmxlX3RyX18yREw5Y1wiLFxuXHRcInRkXCI6IFwiVGFibGVfdGRfXzFvQ2w3XCIsXG5cdFwidGhcIjogXCJUYWJsZV90aF9fNnc5dEVcIixcblx0XCJyZXNpemVyXCI6IFwiVGFibGVfcmVzaXplcl9fMkFxc05cIixcblx0XCJpc1Jlc2l6aW5nXCI6IFwiVGFibGVfaXNSZXNpemluZ19fV196STVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9