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

/***/ "./src/components/Gallery/ArtistProfile/index.js":
/*!*******************************************************!*\
  !*** ./src/components/Gallery/ArtistProfile/index.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GalleryArtistProfile\": function() { return /* binding */ GalleryArtistProfile; }\n/* harmony export */ });\n/* harmony import */ var C_Maria_router_react_gallery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Maria_router_react_gallery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Maria_router_react_gallery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/Gallery/ArtistProfile/styles.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GalleryArtistProfile = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), estados = ref[0], setEstados = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var slug = router.query.slug;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var req = function() {\n            var _ref = _asyncToGenerator(C_Maria_router_react_gallery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var config, data;\n                return C_Maria_router_react_gallery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            config = {\n                                method: 'post',\n                                url: 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-fkaiw/endpoint/get_smartsite?slug=' + slug,\n                                headers: {}\n                            };\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default()(config);\n                        case 3:\n                            data = _ctx.sent.data;\n                            setEstados(data);\n                            console.log(data);\n                        case 6:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function req() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        req();\n    }, slug);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: estados.map(function(estado) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ProfileInformations, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: \"creator_img\",\n                        src: \"/img/gallery-floriano/assinatura-e-caricatura.jpg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProfileContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: estado.creator_name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ProfileSocialNetworks, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ProfileLinkedinIcon, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            className: \"profile-social-networks_linkedin\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                src: \"/img/icons/linkedin-icon.png\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        }, estado.link_linkedin, false, {\n                                            fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.ProfileIcons, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"/img/icons/facebook-icon.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            }, estado.link_facebook, false, {\n                                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 15\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"/img/icons/twitter-icon.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            }, estado.link_twitter, false, {\n                                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"/img/icons/discord-icon.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            }, estado.link_discord, false, {\n                                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 15\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"/img/icons/pinterest-icon.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            }, estado.link_pinterest, false, {\n                                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 15\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"/img/icons/youtube-icon.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            }, estado.link_yt, false, {\n                                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"/img/icons/telegram-icon.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            }, estado.link_telegram, false, {\n                                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: estado.creator_desc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Maria\\\\router-react-gallery\\\\src\\\\components\\\\Gallery\\\\ArtistProfile\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, _this));\n};\n_s(GalleryArtistProfile, \"Xv4C0t8U1pO5sERC7TT4AoJMZ1E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = GalleryArtistProfile;\nvar _c;\n$RefreshReg$(_c, \"GalleryArtistProfile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2M7QUFDVztBQUNpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUgsR0FBSyxDQUFDVyxvQkFBb0IsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBQ3pDLEdBQUssQ0FBeUJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENRLE9BQU8sR0FBZ0JSLEdBQVksS0FBMUJTLFVBQVUsR0FBSVQsR0FBWTtJQUUxQyxHQUFLLENBQUNVLE1BQU0sR0FBR2Isc0RBQVM7SUFDeEIsR0FBSyxDQUFHYyxJQUFJLEdBQUtELE1BQU0sQ0FBQ0UsS0FBSyxDQUFyQkQsSUFBSTtJQUVaWixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBRWYsR0FBSyxDQUFDYyxHQUFHO2lMQUFHLFFBQVEsV0FBSSxDQUFDO29CQUNuQkMsTUFBTSxFQUtGQyxJQUFJOzs7OzRCQUxSRCxNQUFNLEdBQUcsQ0FBQztnQ0FDWkUsTUFBTSxFQUFFLENBQU07Z0NBQ2RDLEdBQUcsRUFBRSxDQUFpRyxtR0FBR04sSUFBSTtnQ0FDN0dPLE9BQU8sRUFBRSxDQUFDLENBQUM7NEJBQ2IsQ0FBQzs7bUNBQ3NCdEIsNENBQUssQ0FBQ2tCLE1BQU07OzRCQUEzQkMsSUFBSSxhQUFKQSxJQUFJOzRCQUVaTixVQUFVLENBQUNNLElBQUk7NEJBRWZJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJOzs7Ozs7WUFDbEIsQ0FBQzs0QkFYS0YsR0FBRzs7OztRQWFUQSxHQUFHO0lBRUwsQ0FBQyxFQUFFRixJQUFJO0lBRVAsTUFBTSw2RUFBRVQsOENBQVM7a0JBRWRNLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsTUFBTTswQkFFbEIsTUFBTSwrREFBTGxCLHdEQUFtQjs7Z0dBRWpCbUIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWE7d0JBQUNDLEdBQUcsRUFBQyxDQUFtRDs7Ozs7O2dHQUVuRkMsY0FBYzs7d0dBRVpDLENBQUU7MENBQUVMLE1BQU0sQ0FBQ00sWUFBWTs7Ozs7O3dHQUV2QnRCLDBEQUFxQjs7Z0hBRW5CRCx3REFBbUI7OEhBQ2pCd0IsQ0FBQzs0Q0FBQ0wsU0FBUyxFQUFDLENBQWtDO2tJQUU1Q0QsQ0FBRztnREFBQ0UsR0FBRyxFQUFDLENBQThCOzs7Ozs7MkNBRGxDSCxNQUFNLENBQUNRLGFBQWE7Ozs7Ozs7Ozs7Z0hBTTVCM0IsaURBQVk7O3dIQUNWMEIsQ0FBQztzSUFDQ04sQ0FBRztvREFBQ0UsR0FBRyxFQUFDLENBQThCOzs7Ozs7K0NBRGpDSCxNQUFNLENBQUNTLGFBQWE7Ozs7O3dIQUczQkYsQ0FBQztzSUFDQ04sQ0FBRztvREFBQ0UsR0FBRyxFQUFDLENBQTZCOzs7Ozs7K0NBRGhDSCxNQUFNLENBQUNVLFlBQVk7Ozs7O3dIQUcxQkgsQ0FBQztzSUFDQ04sQ0FBRztvREFBQ0UsR0FBRyxFQUFDLENBQTZCOzs7Ozs7K0NBRGhDSCxNQUFNLENBQUNXLFlBQVk7Ozs7O3dIQUcxQkosQ0FBQztzSUFDQ04sQ0FBRztvREFBQ0UsR0FBRyxFQUFDLENBQStCOzs7Ozs7K0NBRGxDSCxNQUFNLENBQUNZLGNBQWM7Ozs7O3dIQUc1QkwsQ0FBQztzSUFDQ04sQ0FBRztvREFBQ0UsR0FBRyxFQUFDLENBQTZCOzs7Ozs7K0NBRGhDSCxNQUFNLENBQUNhLE9BQU87Ozs7O3dIQUdyQk4sQ0FBQztzSUFDQ04sQ0FBRztvREFBQ0UsR0FBRyxFQUFDLENBQThCOzs7Ozs7K0NBRGpDSCxNQUFNLENBQUNjLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O3dHQVEvQkMsQ0FBQzswQ0FBRWYsTUFBTSxDQUFDZ0IsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pDLENBQUM7R0FoRlkvQixvQkFBb0I7O1FBR2hCVixrREFBUzs7O0tBSGJVLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0FydGlzdFByb2ZpbGUvaW5kZXguanM/MTM2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcnRpc3RlUHJvZmlsZSwgQ29udGFpbmVyLCBQcm9maWxlSWNvbnMsIFByb2ZpbGVJbmZvcm1hdGlvbnMsIFByb2ZpbGVMaW5rZWRpbkljb24sIFByb2ZpbGVTb2NpYWxOZXR3b3JrcyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhbGxlcnlBcnRpc3RQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlc3RhZG9zLCBzZXRFc3RhZG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJlcSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3VzLWVhc3QtMS5hd3MuZGF0YS5tb25nb2RiLWFwaS5jb20vYXBwL2FwcGxpY2F0aW9uLTAtZmthaXcvZW5kcG9pbnQvZ2V0X3NtYXJ0c2l0ZT9zbHVnPScgKyBzbHVnLFxyXG4gICAgICAgIGhlYWRlcnM6IHt9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MoY29uZmlnKVxyXG5cclxuICAgICAgc2V0RXN0YWRvcyhkYXRhKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICByZXEoKVxyXG5cclxuICB9LCBzbHVnKVxyXG5cclxuICByZXR1cm4gPENvbnRhaW5lcj5cclxuXHJcbiAgICB7ZXN0YWRvcy5tYXAoKGVzdGFkbykgPT5cclxuXHJcbiAgICAgIDxQcm9maWxlSW5mb3JtYXRpb25zPlxyXG5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY3JlYXRvcl9pbWcnIHNyYz1cIi9pbWcvZ2FsbGVyeS1mbG9yaWFuby9hc3NpbmF0dXJhLWUtY2FyaWNhdHVyYS5qcGdcIiAvPlxyXG5cclxuICAgICAgICA8UHJvZmlsZUNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgPGgxPntlc3RhZG8uY3JlYXRvcl9uYW1lfTwvaDE+XHJcblxyXG4gICAgICAgICAgPFByb2ZpbGVTb2NpYWxOZXR3b3Jrcz5cclxuXHJcbiAgICAgICAgICAgIDxQcm9maWxlTGlua2VkaW5JY29uPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2ZpbGUtc29jaWFsLW5ldHdvcmtzX2xpbmtlZGluXCJcclxuICAgICAgICAgICAgICAgIGtleT17ZXN0YWRvLmxpbmtfbGlua2VkaW59PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb25zL2xpbmtlZGluLWljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvUHJvZmlsZUxpbmtlZGluSWNvbj5cclxuXHJcblxyXG4gICAgICAgICAgICA8UHJvZmlsZUljb25zPlxyXG4gICAgICAgICAgICAgIDxhIGtleT17ZXN0YWRvLmxpbmtfZmFjZWJvb2t9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb25zL2ZhY2Vib29rLWljb24uanBnXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEga2V5PXtlc3RhZG8ubGlua190d2l0dGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29ucy90d2l0dGVyLWljb24uanBnXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEga2V5PXtlc3RhZG8ubGlua19kaXNjb3JkfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29ucy9kaXNjb3JkLWljb24uanBnXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEga2V5PXtlc3RhZG8ubGlua19waW50ZXJlc3R9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb25zL3BpbnRlcmVzdC1pY29uLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGtleT17ZXN0YWRvLmxpbmtfeXR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb25zL3lvdXR1YmUtaWNvbi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBrZXk9e2VzdGFkby5saW5rX3RlbGVncmFtfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29ucy90ZWxlZ3JhbS1pY29uLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9Qcm9maWxlSWNvbnM+XHJcblxyXG4gICAgICAgICAgPC9Qcm9maWxlU29jaWFsTmV0d29ya3M+XHJcblxyXG4gICAgICAgICAgPHA+e2VzdGFkby5jcmVhdG9yX2Rlc2N9PC9wPlxyXG5cclxuICAgICAgICA8L1Byb2ZpbGVDb250ZW50PlxyXG5cclxuICAgICAgPC9Qcm9maWxlSW5mb3JtYXRpb25zPlxyXG5cclxuICAgICl9XHJcblxyXG4gIDwvQ29udGFpbmVyPjtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0ZVByb2ZpbGUiLCJDb250YWluZXIiLCJQcm9maWxlSWNvbnMiLCJQcm9maWxlSW5mb3JtYXRpb25zIiwiUHJvZmlsZUxpbmtlZGluSWNvbiIsIlByb2ZpbGVTb2NpYWxOZXR3b3JrcyIsIkdhbGxlcnlBcnRpc3RQcm9maWxlIiwiZXN0YWRvcyIsInNldEVzdGFkb3MiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJyZXEiLCJjb25maWciLCJkYXRhIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlc3RhZG8iLCJpbWciLCJjbGFzc05hbWUiLCJzcmMiLCJQcm9maWxlQ29udGVudCIsImgxIiwiY3JlYXRvcl9uYW1lIiwiYSIsImxpbmtfbGlua2VkaW4iLCJsaW5rX2ZhY2Vib29rIiwibGlua190d2l0dGVyIiwibGlua19kaXNjb3JkIiwibGlua19waW50ZXJlc3QiLCJsaW5rX3l0IiwibGlua190ZWxlZ3JhbSIsInAiLCJjcmVhdG9yX2Rlc2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Gallery/ArtistProfile/index.js\n");

/***/ })

});