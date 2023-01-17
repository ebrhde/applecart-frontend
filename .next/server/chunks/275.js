exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 4811:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "withSpinnerOverlay_overlay__YR1Ei"
};


/***/ }),

/***/ 8482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_withSpinnerOverlay_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4811);
/* harmony import */ var _styles_withSpinnerOverlay_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_withSpinnerOverlay_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const WithSpinnerOverlay = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_withSpinnerOverlay_module_scss__WEBPACK_IMPORTED_MODULE_2___default().overlay),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            animation: "border",
            variant: "success"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithSpinnerOverlay);


/***/ }),

/***/ 7646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "No": () => (/* binding */ UISlice),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export selectUI */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isCartShown: false,
    isSignupShown: false,
    isSigninShown: false,
    isProfileShown: false
};
const UISlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ui",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        toggleCartShown: (state)=>{
            state.isCartShown = !state.isCartShown;
        },
        toggleSignupShown: (state)=>{
            state.isSignupShown = !state.isSignupShown;
        },
        toggleSigninShown: (state)=>{
            state.isSigninShown = !state.isSigninShown;
        },
        toggleProfileShown: (state)=>{
            state.isProfileShown = !state.isProfileShown;
        }
    }
});
const selectUI = (state)=>state.ui
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UISlice.reducer);


/***/ })

};
;