"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery",{

/***/ "./src/components/Gallery/ArtistProfile/styles.js":
/*!********************************************************!*\
  !*** ./src/components/Gallery/ArtistProfile/styles.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ProfileSocialNetworks\": function() { return /* binding */ ProfileSocialNetworks; },\n/* harmony export */   \"ProfileIcons\": function() { return /* binding */ ProfileIcons; },\n/* harmony export */   \"ProfileLinkedinIcon\": function() { return /* binding */ ProfileLinkedinIcon; },\n/* harmony export */   \"ProfileInformations\": function() { return /* binding */ ProfileInformations; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-gpi9f7-0\"\n})([\"  border:2px solid rgb(75,74,74);border-radius:20px;margin:20px 60px;padding:20px;display:flex;flex-direction:column;& > img{border-radius:20px;}p{text-align:center;color:#ababab;font-family:Helvetica;}h1{font-weight:bold;font-size:40px;text-align:center;margin:20px 0 0 0;}@media (min-width:450px) and (max-width:699px){}@media (min-width:700px) and (max-width:999px){margin:20px 90px;p{padding:15px 30px 30px 30px;margin:0px;}& > img{margin:30px 170px;}}@media (min-width:1000px) and (max-width:1199px){margin:10px 150px;& > img{margin:30px 190px;}}@media (min-width:1200px){flex-direction:row;padding:30px;gap:20px;& > img{margin-top:0;align-items:center;}p{padding:0px 20px 0 15px;text-align:left;line-height:30px;}h1{padding-left:20px;margin:0;text-align:left;font-size:45px;}}\"]);\nvar ProfileSocialNetworks = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileSocialNetworks\",\n  componentId: \"sc-gpi9f7-1\"\n})([\"display:flex;flex-direction:column;align-items:center;margin:15px 0 0 0;@media (min-width:800px) and (max-width:1199PX){flex-direction:row;justify-content:center;}@media (min-width:1200px){flex-direction:row;justify-content:start;padding-left:20px;margin:0px;}\"]);\nvar ProfileIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileIcons\",\n  componentId: \"sc-gpi9f7-2\"\n})([\"@media (min-width:1200px){display:flex;flex-direction:row;}\"]);\nvar ProfileLinkedinIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileLinkedinIcon\",\n  componentId: \"sc-gpi9f7-3\"\n})([\"@media (min-width:800px) and (max-width:1199px){width:90px;}@media (min-width:1200px){width:90px;margin:0;}\"]);\nvar ProfileInformations = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileInformations\",\n  componentId: \"sc-gpi9f7-4\"\n})([\"display:flex;flex-direction:column;justify-content:center;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFNBQVMsR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsc3hCQUFmO0FBNEZBLElBQU1HLHFCQUFxQixHQUFHSCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw0UUFBM0I7QUFzQkEsSUFBTUksWUFBWSxHQUFHSix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtRUFBbEI7QUFRQSxJQUFNSyxtQkFBbUIsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsbUhBQXpCO0FBWUEsSUFBTU0sbUJBQW1CLEdBQUdOLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtFQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvc3R5bGVzLmpzPzg1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YCBcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDc1LCA3NCwgNzQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gIG1hcmdpbjogMjBweCA2MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJiA+IGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuXG4gIHAge1xuICAgIC8qIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7ICovXG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICNhYmFiYWI7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBtYXJnaW46IDIwcHggMCAwIDA7IFxuICB9XG4gXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSBhbmQgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICBcbiAgfSBcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCl7XG4gICAgbWFyZ2luOiAyMHB4IDkwcHg7IFxuXG4gICAgcCB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4OyBcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgICYgPiBpbWcge1xuICAgICAgbWFyZ2luOiAzMHB4IDE3MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBcbiAgICBtYXJnaW46IDEwcHggMTUwcHg7XG5cbiAgICAmID4gaW1nIHtcbiAgICAgIG1hcmdpbjogMzBweCAxOTBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7ICBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgJiA+IGltZyB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgcGFkZGluZzogMHB4IDIwcHggMCAxNXB4O1xuXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gIFxuICAgIGgxIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgIH1cbiAgICBcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVTb2NpYWxOZXR3b3JrcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlQWCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlSWNvbnMgPSBzdHlsZWQuZGl2YFxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlTGlua2VkaW5JY29uID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KXtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICB3aWR0aDogOTBweDtcblxuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbmZvcm1hdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiUHJvZmlsZVNvY2lhbE5ldHdvcmtzIiwiUHJvZmlsZUljb25zIiwiUHJvZmlsZUxpbmtlZGluSWNvbiIsIlByb2ZpbGVJbmZvcm1hdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Gallery/ArtistProfile/styles.js\n");

/***/ })

});