"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Servicos/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Servicos/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Acesso_Remoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Acesso Remoto */ \"./src/components/Acesso Remoto/index.tsx\");\n/* harmony import */ var _ManutencaoCorretiva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ManutencaoCorretiva */ \"./src/components/ManutencaoCorretiva/index.tsx\");\n/* harmony import */ var _ManutencaoPreventiva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ManutencaoPreventiva */ \"./src/components/ManutencaoPreventiva/index.tsx\");\n\n\n\n\nfunction About() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n        w-full\\n        min-h-screen\\n        flex\\n        flex-col\\n        mx-auto\\n        justify-evenly\\n        items-center\\n        lg:pt-8\\n        text-red-50\\n        gap-12\\n      \",\n        id: \"servicos\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"lg:text-8xl font-caveat\",\n                children: \"Servi\\xe7os\"\n            }, void 0, false, {\n                fileName: \"/var/www/projects/spa-tq-developer/src/components/Servicos/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Acesso_Remoto__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/projects/spa-tq-developer/src/components/Servicos/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ManutencaoPreventiva__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/projects/spa-tq-developer/src/components/Servicos/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ManutencaoCorretiva__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/projects/spa-tq-developer/src/components/Servicos/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/projects/spa-tq-developer/src/components/Servicos/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNvcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNhO0FBQ0U7QUFFNUMsU0FBU0c7SUFDdEIscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVk7UUFZWkMsSUFBRzs7MEJBRUgsOERBQUNDO2dCQUFHRixXQUFZOzBCQUEwQjs7Ozs7OzBCQUMxQyw4REFBQ0wsc0RBQVlBOzs7OzswQkFDYiw4REFBQ0UsNkRBQW9CQTs7Ozs7MEJBQ3JCLDhEQUFDRCw0REFBbUJBOzs7Ozs7Ozs7OztBQUcxQjtLQXZCd0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlcnZpY29zL2luZGV4LnRzeD83NzAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY2Vzc29SZW1vdG8gZnJvbSBcIi4uL0FjZXNzbyBSZW1vdG9cIjtcbmltcG9ydCBNYW51dGVuY2FvQ29ycmV0aXZhIGZyb20gXCIuLi9NYW51dGVuY2FvQ29ycmV0aXZhXCI7XG5pbXBvcnQgTWFudXRlbmNhb1ByZXZlbnRpdmEgZnJvbSBcIi4uL01hbnV0ZW5jYW9QcmV2ZW50aXZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICB3LWZ1bGxcbiAgICAgICAgbWluLWgtc2NyZWVuXG4gICAgICAgIGZsZXhcbiAgICAgICAgZmxleC1jb2xcbiAgICAgICAgbXgtYXV0b1xuICAgICAgICBqdXN0aWZ5LWV2ZW5seVxuICAgICAgICBpdGVtcy1jZW50ZXJcbiAgICAgICAgbGc6cHQtOFxuICAgICAgICB0ZXh0LXJlZC01MFxuICAgICAgICBnYXAtMTJcbiAgICAgIGB9XG4gICAgICBpZD1cInNlcnZpY29zXCJcbiAgICA+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtgbGc6dGV4dC04eGwgZm9udC1jYXZlYXRgfT5TZXJ2acOnb3M8L2gxPlxuICAgICAgPEFjZXNzb1JlbW90byAvPlxuICAgICAgPE1hbnV0ZW5jYW9QcmV2ZW50aXZhIC8+XG4gICAgICA8TWFudXRlbmNhb0NvcnJldGl2YSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQWNlc3NvUmVtb3RvIiwiTWFudXRlbmNhb0NvcnJldGl2YSIsIk1hbnV0ZW5jYW9QcmV2ZW50aXZhIiwiQWJvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Servicos/index.tsx\n"));

/***/ })

});