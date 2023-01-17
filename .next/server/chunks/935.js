exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 2212:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ProductCard_card__irOXe",
	"card__image": "ProductCard_card__image__T_QeG",
	"card__price": "ProductCard_card__price__xssCS",
	"hot_price": "ProductCard_hot_price__JON2s"
};


/***/ }),

/***/ 3935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2212);
/* harmony import */ var _styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7174);
/* harmony import */ var _redux_cart_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7398);
/* harmony import */ var _utils_integerDivide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1152);







const ProductCard = ({ product , handleCartToggle  })=>{
    const userId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.user.id
    );
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: (_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
            className: "text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Title, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: `/catalog/${product.categoryAlias}/${product.alias}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Link, {
                            href: "",
                            children: product.title
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Link, {
                    href: `/catalog/${product.categoryAlias}/${product.alias}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Img, {
                        variant: "top",
                        src: product.productMedia[0],
                        className: (_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card__image),
                        alt: product.title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card__price) + " my-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                            className: product.old_price ? (_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hot_price) : "",
                            children: [
                                (0,_utils_integerDivide__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(product.price),
                                "$"
                            ]
                        }),
                        product.old_price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                (0,_utils_integerDivide__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(product.old_price),
                                "$"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "success",
                    onClick: ()=>{
                        if (userId) dispatch((0,_redux_cart_cartSlice__WEBPACK_IMPORTED_MODULE_4__/* .addToCart */ .Xq)({
                            ...product,
                            quantity: 1
                        }));
                        else dispatch(_redux_cart_cartSlice__WEBPACK_IMPORTED_MODULE_4__/* .cartSlice.actions.addItem */ .Ao.actions.addItem({
                            ...product,
                            quantity: 1
                        }));
                        handleCartToggle();
                    },
                    children: "Add to cart"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ })

};
;