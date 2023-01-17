(() => {
var exports = {};
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 3022:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "CatalogView_product__vXbuo",
	"product_title": "CatalogView_product_title__xy6r5",
	"product_flexbox": "CatalogView_product_flexbox__TKn8U",
	"main_image": "CatalogView_main_image__VOW_L",
	"price_holder": "CatalogView_price_holder__uvEl1",
	"hot_price": "CatalogView_hot_price__9Uegc",
	"old_price": "CatalogView_old_price___9ehL",
	"cart_btn": "CatalogView_cart_btn__Vd3yO",
	"product_info": "CatalogView_product_info__SrwMs",
	"product_params": "CatalogView_product_params__SE3JR",
	"nextSlide": "CatalogView_nextSlide___rnW8",
	"activeSlide": "CatalogView_activeSlide__xfaLB",
	"lastSlide": "CatalogView_lastSlide__RcU5O",
	"image_container": "CatalogView_image_container__u2z0s"
};


/***/ }),

/***/ 3122:
/***/ ((module) => {

// Exports
module.exports = {
	"thumbnails": "ProductSlider_thumbnails__tAlQ8",
	"thumb": "ProductSlider_thumb__Yq0GH",
	"next_arrow": "ProductSlider_next_arrow__0B5PM",
	"prev_arrow": "ProductSlider_prev_arrow__L7d21"
};


/***/ }),

/***/ 4227:
/***/ ((module) => {

// Exports
module.exports = {
	"thumbnails": "ProductSliderMobile_thumbnails___UnTM",
	"thumb": "ProductSliderMobile_thumb__3FGv3",
	"next_arrow": "ProductSliderMobile_next_arrow__60AWF",
	"prev_arrow": "ProductSliderMobile_prev_arrow__fhvL1"
};


/***/ }),

/***/ 7272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _palias_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__(7174);
// EXTERNAL MODULE: ./redux/cart/cartSlice.ts
var cartSlice = __webpack_require__(7398);
// EXTERNAL MODULE: ./redux/ui/uiSlice.ts
var uiSlice = __webpack_require__(7646);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./styles/CatalogView.module.scss
var CatalogView_module = __webpack_require__(3022);
var CatalogView_module_default = /*#__PURE__*/__webpack_require__.n(CatalogView_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/integerDivide.ts
var integerDivide = __webpack_require__(1152);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./styles/ProductSlider.module.scss
var ProductSlider_module = __webpack_require__(3122);
var ProductSlider_module_default = /*#__PURE__*/__webpack_require__.n(ProductSlider_module);
;// CONCATENATED MODULE: ./components/product-slider/ProductSlider.tsx



const ProductSlider = ({ handleNextArrowClick , handlePrevArrowClick , handleThumbClick , photos , productTitle , slideStyle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProductSlider_module_default()).thumbnails,
        children: [
            photos.length > 3 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProductSlider_module_default()).prev_arrow,
                onClick: handlePrevArrowClick
            }),
            photos.map((photo, photoIndex)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card, {
                    style: slideStyle,
                    className: (ProductSlider_module_default()).thumb + " slide",
                    onClick: ()=>handleThumbClick(photo)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: photo,
                        alt: `${productTitle}-image-${photoIndex}`
                    })
                });
            }),
            photos.length > 3 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProductSlider_module_default()).next_arrow,
                onClick: handleNextArrowClick
            })
        ]
    });
};
/* harmony default export */ const product_slider_ProductSlider = (ProductSlider);

// EXTERNAL MODULE: ./styles/ProductSliderMobile.module.scss
var ProductSliderMobile_module = __webpack_require__(4227);
var ProductSliderMobile_module_default = /*#__PURE__*/__webpack_require__.n(ProductSliderMobile_module);
;// CONCATENATED MODULE: ./components/product-slider/ProductSliderMobile.tsx



const ProductSliderMobile = ({ handleNextArrowClick , handlePrevArrowClick , handleThumbClick , photos , productTitle , slideStyle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProductSliderMobile_module_default()).thumbnails,
        children: [
            photos.length > 3 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProductSliderMobile_module_default()).prev_arrow,
                onClick: handlePrevArrowClick
            }),
            photos.map((photo, photoIndex)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card, {
                    style: slideStyle,
                    className: (ProductSliderMobile_module_default()).thumb + " slide_mobile",
                    onClick: ()=>handleThumbClick(photo)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: photo,
                        alt: `${productTitle}-image-${photoIndex}`
                    })
                });
            }),
            photos.length > 3 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProductSliderMobile_module_default()).next_arrow,
                onClick: handleNextArrowClick
            })
        ]
    });
};
/* harmony default export */ const product_slider_ProductSliderMobile = (ProductSliderMobile);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/catalog/[alias]/[palias].tsx















const Product = ({ categories , product  })=>{
    const { 0: photos , 1: setPhotos  } = (0,external_react_.useState)(product.productMedia);
    const { 0: sliderPosition , 1: setSliderPosition  } = (0,external_react_.useState)(0);
    const { 0: slideStyle , 1: setSlideStyle  } = (0,external_react_.useState)({
        transform: "translateY(0rem)"
    });
    const { 0: mobileSlideStyle , 1: setMobileSlideStyle  } = (0,external_react_.useState)({
        transform: "translateX(0rem)"
    });
    const router = (0,router_.useRouter)();
    const alias = router.query.alias;
    const activeCategory = categories.find((el)=>el.alias === alias
    );
    const userId = (0,hooks/* useAppSelector */.C)((state)=>state.user.id
    );
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleCartToggle = ()=>{
        dispatch(uiSlice/* UISlice.actions.toggleCartShown */.No.actions.toggleCartShown());
    };
    const handlePrevArrowClick = ()=>{
        if (sliderPosition > 0) {
            setSliderPosition((prevState)=>prevState - 1
            );
        }
    };
    const handleNextArrowClick = ()=>{
        const slides = document.querySelectorAll(".slide");
        if (sliderPosition < slides.length - 3) {
            setSliderPosition((prevState)=>prevState + 1
            );
        }
    };
    const handleMobilePrevArrowClick = ()=>{
        if (sliderPosition > 0) {
            setSliderPosition((prevState)=>prevState - 1
            );
        }
    };
    const handleMobileNextArrowClick = ()=>{
        const slides = document.querySelectorAll(".slide_mobile");
        if (sliderPosition < slides.length - 3) {
            setSliderPosition((prevState)=>prevState + 1
            );
        }
    };
    const handleThumbClick = (url)=>{
        const mainImage = document.querySelector(".main_image");
        mainImage.setAttribute("src", url);
    };
    (0,external_react_.useEffect)(()=>{
        const slides = document.querySelectorAll(".slide");
        let translateValue = sliderPosition * 9;
        let mobileTranslateValue = sliderPosition * 5.5;
        setSlideStyle({
            transform: "translateY(-" + translateValue + "rem)"
        });
        setMobileSlideStyle({
            transform: "translateX(-" + mobileTranslateValue + "rem)"
        });
    }, [
        sliderPosition
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Applecart eshop | Catalog (",
                            product.title,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Righteous&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section--page",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page--container container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Breadcrumb, {
                            className: "custom-breadcrumb",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Breadcrumb.Item, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/`,
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Breadcrumb.Item, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/catalog/${alias}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                "Catalog (",
                                                activeCategory.title,
                                                ")"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Breadcrumb.Item, {
                                    active: true,
                                    children: product.title
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (CatalogView_module_default()).product,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (CatalogView_module_default()).product_title,
                                    children: product.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    className: (CatalogView_module_default()).product_flexbox,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: 3,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(product_slider_ProductSlider, {
                                                    handleThumbClick: handleThumbClick,
                                                    handlePrevArrowClick: handlePrevArrowClick,
                                                    handleNextArrowClick: handleNextArrowClick,
                                                    photos: photos,
                                                    productTitle: product.title,
                                                    slideStyle: slideStyle
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(product_slider_ProductSliderMobile, {
                                                    handleThumbClick: handleThumbClick,
                                                    handlePrevArrowClick: handleMobilePrevArrowClick,
                                                    handleNextArrowClick: handleMobileNextArrowClick,
                                                    photos: photos,
                                                    productTitle: product.title,
                                                    slideStyle: mobileSlideStyle
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                            md: 6,
                                            lg: 5,
                                            className: (CatalogView_module_default()).image_container,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: photos[0],
                                                alt: `${product.title}-main-image`,
                                                className: (CatalogView_module_default()).main_image + " main_image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: "Price:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (CatalogView_module_default()).price_holder,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            className: product.old_price ? (CatalogView_module_default()).hot_price : "",
                                                            children: [
                                                                (0,integerDivide/* default */.Z)(product.price),
                                                                "$"
                                                            ]
                                                        }),
                                                        product.old_price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            className: (CatalogView_module_default()).old_price,
                                                            children: [
                                                                (0,integerDivide/* default */.Z)(product.old_price),
                                                                "$"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                    className: (CatalogView_module_default()).cart_btn,
                                                    variant: "success",
                                                    onClick: ()=>{
                                                        if (userId) dispatch((0,cartSlice/* addToCart */.Xq)({
                                                            ...product,
                                                            quantity: 1
                                                        }));
                                                        else dispatch(cartSlice/* cartSlice.actions.addItem */.Ao.actions.addItem({
                                                            ...product,
                                                            quantity: 1
                                                        }));
                                                        handleCartToggle();
                                                    },
                                                    children: "Add to cart"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    className: (CatalogView_module_default()).product_info,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: 6,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "Features of ",
                                                        product.title
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.ListGroup, {
                                                    className: (CatalogView_module_default()).product_params,
                                                    children: product.productParams.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                                                    children: [
                                                                        el.title,
                                                                        ":"
                                                                    ]
                                                                }),
                                                                " ",
                                                                el.value,
                                                                " ",
                                                                el.unit
                                                            ]
                                                        })
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            lg: 6,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        "Description of ",
                                                        product.title
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: product.description
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps({ query  }) {
    const alias = query.alias;
    const palias = query.palias;
    return external_axios_default().get("https://applecart.dev/api/v1" + `/catalog/${alias}/${palias}`).then((res)=>{
        const categories = res.data.data.categories;
        const product = res.data.data.product;
        return {
            props: {
                categories,
                product
            }
        };
    }).catch((error)=>{
        if (error.response.status === 404) {
            return {
                notFound: true
            };
        }
    });
}
/* harmony default export */ const _palias_ = (Product); // (
 //
 //     <Card className={styles.thumb}>
 //         <img src={el} alt={`${product.title}-image-${index}`} />
 //     </Card>
 // )


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


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,560], () => (__webpack_exec__(7272)));
module.exports = __webpack_exports__;

})();