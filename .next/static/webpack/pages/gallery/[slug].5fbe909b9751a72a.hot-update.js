"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery/[slug]",{

/***/ "./src/components/Gallery/ArtistProfile/styles.js":
/*!********************************************************!*\
  !*** ./src/components/Gallery/ArtistProfile/styles.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ProfileSocialNetworks\": function() { return /* binding */ ProfileSocialNetworks; },\n/* harmony export */   \"ProfileIcons\": function() { return /* binding */ ProfileIcons; },\n/* harmony export */   \"ProfileLinkedinIcon\": function() { return /* binding */ ProfileLinkedinIcon; },\n/* harmony export */   \"ProfileInformations\": function() { return /* binding */ ProfileInformations; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \" \\n  border: 2px solid rgb(75, 74, 74);\\n  border-radius: 20px;\\n\\n  margin: 20px 60px;\\n  padding: 20px;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n\\n  .creator_img {\\n    border-radius: 20px;\\n  }\\n\\n  p {\\n    text-align: center;\\n\\n    color: #ababab;\\n    font-family: Helvetica;\\n  }\\n\\n  h1 {\\n    font-weight: bold;\\n    font-size: 40px;\\n\\n    text-align: center;\\n\\n    margin: 20px 0 0 0; \\n  }\\n \\n\\n  @media (min-width: 450px) and (max-width: 799px) {\\n    margin: 20px auto;\\n\\n    width: 310px;\\n  } \\n\\n  @media (min-width: 800px) and (max-width: 999px){\\n    margin: 20px 60px; \\n\\n    p {\\n      padding: 15px 30px 30px 30px; \\n      margin: 0px;\\n    }\\n\\n    .creator_img {\\n      margin: 30px 170px;\\n    }\\n  } \\n\\n  @media (min-width: 1000px) and (max-width: 1199px) {\\n    \\n    margin: 10px 150px;\\n\\n   .creator_img {\\n      margin: 30px 190px;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\\n  margin: 15px 0 0 0;\\n\\n  @media (min-width: 800px) and (max-width: 1199PX) {\\n    flex-direction: row;\\n    justify-content: center;\\n  }\\n\\n  @media (min-width: 1200px) {\\n    flex-direction: row;\\n    justify-content: start;\\n\\n    padding-left: 20px;\\n    margin: 0px;\\n\\n  }\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n  @media (min-width: 1200px) {\\n    display: flex;\\n    flex-direction: row;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  @media (min-width: 800px) and (max-width: 1199px){\\n    width: 90px;\\n  }\\n\\n  @media (min-width: 1200px) {\\n    width: 90px;\\n\\n    margin: 0;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center; \\n\\n  \\n  @media (min-width: 1200px) {  \\n    flex-direction: row; \\n    padding: 30px;\\n\\n    gap: 20px;\\n\\n    .creator_img  {\\n      margin-top: 0;\\n\\n      align-items: center;\\n    }\\n\\n    p {\\n      padding: 0px 20px 0 15px;\\n\\n      text-align: left;\\n\\n      line-height: 30px;\\n    }\\n  \\n    h1 {\\n      padding-left: 20px;\\n      margin: 0;\\n\\n      text-align: left;\\n\\n      font-size: 45px;\\n    }\\n    \\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar ProfileSocialNetworks = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar ProfileIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar ProfileLinkedinIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar ProfileInformations = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0M7Ozs7Ozs7Ozs7Ozs7UUFFRixDQTJEcEM7Ozs7Ozs7OztRQUVnRCxDQXFCaEQ7Ozs7Ozs7OztRQUd1QyxDQU12Qzs7Ozs7Ozs7O1FBRThDLENBVTlDOzs7Ozs7Ozs7UUFFOEMsQ0FvQzlDOzs7Ozs7O0FBN0lPLEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCw2REFBVTtBQTZENUIsR0FBSyxDQUFDRyxxQkFBcUIsR0FBR0gsNkRBQVU7QUF3QnhDLEdBQUssQ0FBQ0ksWUFBWSxHQUFHSiw2REFBVTtBQVEvQixHQUFLLENBQUNLLG1CQUFtQixHQUFHTCw2REFBVTtBQVl0QyxHQUFLLENBQUNNLG1CQUFtQixHQUFHTiw2REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvc3R5bGVzLmpzPzg1OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmAgXHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDc1LCA3NCwgNzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gIG1hcmdpbjogMjBweCA2MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5jcmVhdG9yX2ltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgY29sb3I6ICNhYmFiYWI7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbjogMjBweCAwIDAgMDsgXHJcbiAgfVxyXG4gXHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkgYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuXHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgfSBcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogOTk5cHgpe1xyXG4gICAgbWFyZ2luOiAyMHB4IDYwcHg7IFxyXG5cclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4OyBcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNyZWF0b3JfaW1nIHtcclxuICAgICAgbWFyZ2luOiAzMHB4IDE3MHB4O1xyXG4gICAgfVxyXG4gIH0gXHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAxMHB4IDE1MHB4O1xyXG5cclxuICAgLmNyZWF0b3JfaW1nIHtcclxuICAgICAgbWFyZ2luOiAzMHB4IDE5MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlU29jaWFsTmV0d29ya3MgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDE1cHggMCAwIDA7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlQWCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJY29ucyA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlTGlua2VkaW5JY29uID0gc3R5bGVkLmRpdmBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpe1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbmZvcm1hdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcblxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICAuY3JlYXRvcl9pbWcgIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDAgMTVweDtcclxuXHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxuICAgIGgxIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiUHJvZmlsZVNvY2lhbE5ldHdvcmtzIiwiUHJvZmlsZUljb25zIiwiUHJvZmlsZUxpbmtlZGluSWNvbiIsIlByb2ZpbGVJbmZvcm1hdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Gallery/ArtistProfile/styles.js\n");

/***/ })

});