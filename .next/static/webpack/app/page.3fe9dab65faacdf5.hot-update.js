"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/MovieList.js":
/*!*****************************************!*\
  !*** ./src/app/components/MovieList.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/axios */ \"(app-pages-browser)/./src/app/api/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction MovieList() {\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMovies = async ()=>{\n            try {\n                const response = await _api_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/movies\");\n                console.log(\"Movies:\", response.data); // Debugging\n                setMovies(response.data);\n            } catch (error) {\n                console.error(\"Error fetching movies:\", error);\n            }\n        };\n        fetchMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4\",\n        children: movies.length > 0 ? movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-800 p-4 rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: movie.poster,\n                        alt: movie.title,\n                        className: \"w-full h-auto mb-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\netflix-clone-frontend\\\\src\\\\app\\\\components\\\\MovieList.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-lg\",\n                        children: movie.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\netflix-clone-frontend\\\\src\\\\app\\\\components\\\\MovieList.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, movie.id, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\netflix-clone-frontend\\\\src\\\\app\\\\components\\\\MovieList.js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-white\",\n            children: \"No movies available.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\netflix-clone-frontend\\\\src\\\\app\\\\components\\\\MovieList.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\netflix-clone-frontend\\\\src\\\\app\\\\components\\\\MovieList.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(MovieList, \"MO6b3PSP3RIUqZ8gtSrBZBVtBbs=\");\n_c = MovieList;\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNWO0FBRTFCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxjQUFjO1lBQ2xCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNTCxrREFBYUEsQ0FBQ00sR0FBRyxDQUFDO2dCQUN6Q0MsUUFBUUMsR0FBRyxDQUFDLFdBQVdILFNBQVNJLElBQUksR0FBRyxZQUFZO2dCQUNuRE4sVUFBVUUsU0FBU0ksSUFBSTtZQUN6QixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RILFFBQVFHLEtBQUssQ0FBQywwQkFBMEJBO1lBQzFDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDWlYsT0FBT1csTUFBTSxHQUFHLElBQ2ZYLE9BQU9ZLEdBQUcsQ0FBQ0MsQ0FBQUEsc0JBQ1QsOERBQUNKO2dCQUFtQkMsV0FBVTs7a0NBQzVCLDhEQUFDSTt3QkFBSUMsS0FBS0YsTUFBTUcsTUFBTTt3QkFBRUMsS0FBS0osTUFBTUssS0FBSzt3QkFBRVIsV0FBVTs7Ozs7O2tDQUNwRCw4REFBQ1M7d0JBQUdULFdBQVU7a0NBQXNCRyxNQUFNSyxLQUFLOzs7Ozs7O2VBRnZDTCxNQUFNTyxFQUFFOzs7O3NDQU1wQiw4REFBQ0M7WUFBRVgsV0FBVTtzQkFBYTs7Ozs7Ozs7Ozs7QUFJbEM7R0EvQndCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzP2M1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tICcuLi9hcGkvYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVMaXN0KCkge1xyXG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KCcvbW92aWVzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vdmllczonLCByZXNwb25zZS5kYXRhKTsgLy8gRGVidWdnaW5nXHJcbiAgICAgICAgc2V0TW92aWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1vdmllczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hNb3ZpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cclxuICAgICAge21vdmllcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIG1vdmllcy5tYXAobW92aWUgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBwLTQgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17bW92aWUucG9zdGVyfSBhbHQ9e21vdmllLnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG1iLTJcIiAvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnXCI+e21vdmllLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5ObyBtb3ZpZXMgYXZhaWxhYmxlLjwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvc0luc3RhbmNlIiwiTW92aWVMaXN0IiwibW92aWVzIiwic2V0TW92aWVzIiwiZmV0Y2hNb3ZpZXMiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJtb3ZpZSIsImltZyIsInNyYyIsInBvc3RlciIsImFsdCIsInRpdGxlIiwiaDIiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/MovieList.js\n"));

/***/ })

});