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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ProfileSocialNetworks\": function() { return /* binding */ ProfileSocialNetworks; },\n/* harmony export */   \"ProfileIcons\": function() { return /* binding */ ProfileIcons; },\n/* harmony export */   \"ProfileLinkedinIcon\": function() { return /* binding */ ProfileLinkedinIcon; },\n/* harmony export */   \"ProfileInformations\": function() { return /* binding */ ProfileInformations; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-gpi9f7-0\"\n})([\"  border:2px solid rgb(75,74,74);border-radius:20px;margin:20px 60px;display:flex;flex-direction:column;& > img{border-radius:20px;}p{text-align:center;color:#ababab;font-family:Helvetica;}h1{font-weight:bold;font-size:40px;text-align:center;}@media (max-width:400px){margin:20px 60px;padding:20px;h1{margin:20px 0 0 0;}& > img{max-width:310px;}}@media (min-width:401px) and (max-width:699){margin:20px 40px;}@media (min-width:700px) and (max-width:999px){margin:20px 90px;p{padding:15px 30px 30px 30px;margin:0px;}& > img{margin:30px 170px;}}@media (min-width:1000px) and (max-width:1199px){margin:10px 150px;& > img{margin:30px 190px;}}@media (min-width:1200px){flex-direction:row;padding:30px;gap:20px;& > img{margin-top:0;align-items:center;}p{padding:0px 20px 0 15px;text-align:left;line-height:30px;}h1{padding-left:20px;margin:0;text-align:left;font-size:45px;}}\"]);\nvar ProfileSocialNetworks = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileSocialNetworks\",\n  componentId: \"sc-gpi9f7-1\"\n})([\"display:flex;flex-direction:column;align-items:center;margin:15px 0 0 0;@media (min-width:800px) and (max-width:1199PX){flex-direction:row;justify-content:center;}@media (min-width:1200px){flex-direction:row;justify-content:start;padding-left:20px;margin:0px;}\"]);\nvar ProfileIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileIcons\",\n  componentId: \"sc-gpi9f7-2\"\n})([\"@media (min-width:1200px){display:flex;flex-direction:row;}\"]);\nvar ProfileLinkedinIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileLinkedinIcon\",\n  componentId: \"sc-gpi9f7-3\"\n})([\"@media (min-width:800px) and (max-width:1199px){width:90px;}@media (min-width:1200px){width:90px;margin:0;}\"]);\nvar ProfileInformations = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileInformations\",\n  componentId: \"sc-gpi9f7-4\"\n})([\"display:flex;flex-direction:column;justify-content:center;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFNBQVMsR0FBR0Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNjJCQUFmO0FBd0dBLElBQU1HLHFCQUFxQixHQUFHSCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw0UUFBM0I7QUFzQkEsSUFBTUksWUFBWSxHQUFHSix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtRUFBbEI7QUFRQSxJQUFNSyxtQkFBbUIsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsbUhBQXpCO0FBWUEsSUFBTU0sbUJBQW1CLEdBQUdOLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtFQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvc3R5bGVzLmpzPzg1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YCBcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDc1LCA3NCwgNzQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gIG1hcmdpbjogMjBweCA2MHB4OyAgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmID4gaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgLyogcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbjogMCAwIDIwcHggMDsgKi9cbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBjb2xvcjogI2FiYWJhYjtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC8qIG1hcmdpbjogMjBweCAwIDAgMDsgKi9cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgIHtcbiAgICBtYXJnaW46IDIwcHggNjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgIH1cblxuICAgICYgPiBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAzMTBweDtcbiAgICB9XG5cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDY5OSkge1xuICAgIG1hcmdpbjogMjBweCA0MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogOTk5cHgpe1xuICAgIG1hcmdpbjogMjBweCA5MHB4OyBcblxuICAgIHAge1xuICAgICAgcGFkZGluZzogMTVweCAzMHB4IDMwcHggMzBweDsgXG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICAmID4gaW1nIHtcbiAgICAgIG1hcmdpbjogMzBweCAxNzBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgXG4gICAgbWFyZ2luOiAxMHB4IDE1MHB4O1xuXG4gICAgJiA+IGltZyB7XG4gICAgICBtYXJnaW46IDMwcHggMTkwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAgcGFkZGluZzogMzBweDtcblxuICAgIGdhcDogMjBweDtcblxuICAgICYgPiBpbWcge1xuICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDAgMTVweDtcblxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgfVxuICBcbiAgICBoMSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB9XG4gICAgXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlU29jaWFsTmV0d29ya3MgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbjogMTVweCAwIDAgMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5UFgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZUljb25zID0gc3R5bGVkLmRpdmBcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZUxpbmtlZGluSWNvbiA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCl7XG4gICAgd2lkdGg6IDkwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgd2lkdGg6IDkwcHg7XG5cbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlSW5mb3JtYXRpb25zID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIlByb2ZpbGVTb2NpYWxOZXR3b3JrcyIsIlByb2ZpbGVJY29ucyIsIlByb2ZpbGVMaW5rZWRpbkljb24iLCJQcm9maWxlSW5mb3JtYXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Gallery/ArtistProfile/styles.js\n");

/***/ })

});