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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ArtisteProfile\": function() { return /* binding */ ArtisteProfile; },\n/* harmony export */   \"ProfileSocialNetworks\": function() { return /* binding */ ProfileSocialNetworks; },\n/* harmony export */   \"ProfileIcons\": function() { return /* binding */ ProfileIcons; },\n/* harmony export */   \"ProfileLinkedinIcon\": function() { return /* binding */ ProfileLinkedinIcon; },\n/* harmony export */   \"ProfileInformations\": function() { return /* binding */ ProfileInformations; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-gpi9f7-0\"\n})([\"  border:2px solid rgb(75,74,74);border-radius:20px;margin:10px30px;display:flex;flex-direction:column;padding:30px 0;p{color:#fff;padding:0 20px;margin:0 0 10px 0;text-align:center;color:#ababab;font-family:Helvetica;}h1{font-weight:bold;font-size:40px;text-align:center;margin:20px 0 0 0;}@media (min-width:800px){p{padding:0px 30px;margin:0px;}margin:70px;}@media (min-width:1200px){display:flex;flex-direction:row;margin:50px 100px;padding:20px;gap:20px;p{padding:0px 20px 0 15px;text-align:left;line-height:30px;}h1{padding-left:20px;margin:0;text-align:left;font-size:45px;}}\"]);\nvar ArtisteProfile = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ArtisteProfile\",\n  componentId: \"sc-gpi9f7-1\"\n})([\"display:flex;justify-content:center;img{border-radius:20px;width:270px;height:270px;background-color:red;}@media (min-width:800px){margin:0px;}@media (min-width:1200px){margin-top:0;align-items:center;}\"]);\nvar ProfileSocialNetworks = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileSocialNetworks\",\n  componentId: \"sc-gpi9f7-2\"\n})([\"display:flex;flex-direction:column;align-items:center;margin:10px 0;@media (min-width:800px){display:flex;flex-direction:row;justify-content:center;}@media (min-width:1200px){display:flex;flex-direction:row;justify-content:start;padding-left:20px;margin:0px;}\"]);\nvar ProfileIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileIcons\",\n  componentId: \"sc-gpi9f7-3\"\n})([\"@media (min-width:1200px){display:flex;flex-direction:row;}\"]);\nvar ProfileLinkedinIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileLinkedinIcon\",\n  componentId: \"sc-gpi9f7-4\"\n})([\"@media (min-width:800px){width:90px;}@media (min-width:1200px){width:90px;margin:0;}\"]);\nvar ProfileInformations = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileInformations\",\n  componentId: \"sc-gpi9f7-5\"\n})([\"display:flex;flex-direction:column;justify-content:center;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQyxTQUFTLEdBQUdELDRFQUFIO0FBQUE7QUFBQTtBQUFBLDZrQkFBZjtBQTJFQSxJQUFNRyxjQUFjLEdBQUdILHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtOQUFwQjtBQXlCQSxJQUFNSyxxQkFBcUIsR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsMlFBQTNCO0FBMEJBLElBQU1NLFlBQVksR0FBR04sd0VBQUg7QUFBQTtBQUFBO0FBQUEsbUVBQWxCO0FBU0EsSUFBTU8sbUJBQW1CLEdBQUdQLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUF6QjtBQVlBLElBQU1RLG1CQUFtQixHQUFHUix3RUFBSDtBQUFBO0FBQUE7QUFBQSxrRUFBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9BcnRpc3RQcm9maWxlL3N0eWxlcy5qcz84NTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gIFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNzUsIDc0LCA3NCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgbWFyZ2luOiAxMHB4MzBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIHBhZGRpbmc6IDMwcHggMDtcblxuICBwIHtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXG4gICAgLyogbWFyZ2luLXRvcDogMXB4OyAqL1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICNhYmFiYWI7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAvKiBtYXJnaW46IDMwcHggMCAzMHB4IDA7ICovXG5cbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgIHAge1xuICAgICAgcGFkZGluZzogMHB4IDMwcHg7IFxuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgbWFyZ2luOiA3MHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG5cbiAgICBtYXJnaW46IDUwcHggMTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGdhcDogMjBweDtcblxuICAgIHAge1xuICAgICAgcGFkZGluZzogMHB4IDIwcHggMCAxNXB4O1xuXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gIFxuICAgIGgxIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgIH1cbiAgICBcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFydGlzdGVQcm9maWxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogMjcwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfSBcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVTb2NpYWxOZXR3b3JrcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZUljb25zID0gc3R5bGVkLmRpdmBcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlTGlua2VkaW5JY29uID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgd2lkdGg6IDkwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgd2lkdGg6IDkwcHg7XG5cbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlSW5mb3JtYXRpb25zID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJBcnRpc3RlUHJvZmlsZSIsImRpdiIsIlByb2ZpbGVTb2NpYWxOZXR3b3JrcyIsIlByb2ZpbGVJY29ucyIsIlByb2ZpbGVMaW5rZWRpbkljb24iLCJQcm9maWxlSW5mb3JtYXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Gallery/ArtistProfile/styles.js\n");

/***/ })

});