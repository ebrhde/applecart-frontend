(() => {
var exports = {};
exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 5681:
/***/ ((module) => {

// Exports
module.exports = {
	"category_count": "CatalogIndex_category_count__2mjiX",
	"category_filter": "CatalogIndex_category_filter__mRz2V"
};


/***/ }),

/***/ 1835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_CatalogIndex_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5681);
/* harmony import */ var _styles_CatalogIndex_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_CatalogIndex_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_product_card_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3935);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7174);
/* harmony import */ var _redux_ui_uiSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7646);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);











const Catalog = ({ categories , products , productsCount , params  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const checkboxRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)([]);
    const { 0: filters , 1: setFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const handlePaginationClick = (number)=>{
        router.push(window.location.pathname + `?page=${number}`);
    };
    const handleCartToggle = ()=>{
        dispatch(_redux_ui_uiSlice__WEBPACK_IMPORTED_MODULE_7__/* .UISlice.actions.toggleCartShown */ .No.actions.toggleCartShown());
    };
    const handleCheckboxChange = (e)=>{
        let currentFilter = filters.findIndex((element)=>element.name === e.target.name
        );
        if (e.target.checked) {
            if (currentFilter != -1) {
                filters[currentFilter].values.push(e.target.value);
            } else {
                filters.push({
                    name: e.target.name,
                    values: [
                        e.target.value
                    ]
                });
            }
        } else {
            filters[currentFilter].values = filters[currentFilter].values.filter((value)=>value !== e.target.value
            );
        }
    };
    const handleFiltersApply = ()=>{
        let queryStr = "?";
        filters.forEach((el)=>{
            if (el.values) {
                queryStr += el.name + "=";
                let filterValues = [];
                el.values.forEach((value)=>{
                    filterValues.push(`'${value}'`);
                });
                if (filterValues) queryStr += filterValues + "&";
            }
        });
        queryStr = queryStr.slice(0, -1);
        router.push(window.location.pathname + queryStr);
    };
    const handleFiltersReset = ()=>{
        setFilters([]);
        for(let i in checkboxRef.current){
            checkboxRef.current[i].checked = false;
        }
        router.push(window.location.pathname);
    };
    const alias = window.location.pathname.split("/").pop();
    const activeCategory = categories.find((el)=>el.alias === alias
    );
    let activePage = router.query.page ? +router.query.page : 1;
    let totalPages = Math.ceil(productsCount / 6);
    let paginationItems = [];
    for(let number1 = 1; number1 <= totalPages; number1++){
        paginationItems.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Pagination.Item, {
            active: number1 === +activePage,
            onClick: ()=>handlePaginationClick(number1)
            ,
            children: number1
        }, number1));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Applecart eshop | Catalog (",
                            activeCategory.title,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Righteous&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section--page",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb, {
                            className: "custom-breadcrumb",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb.Item, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        href: `/`,
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb.Item, {
                                    active: true,
                                    children: [
                                        "Catalog (",
                                        activeCategory.title,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    lg: 3,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_CatalogIndex_module_scss__WEBPACK_IMPORTED_MODULE_10___default().category_filter) + " my-4 text-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {
                                            children: [
                                                window.location.search && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    variant: "outline-success",
                                                    className: "my-4",
                                                    onClick: handleFiltersReset,
                                                    children: "Reset all"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion, {
                                                    children: params.map((param, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Item, {
                                                            eventKey: index.toString(),
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Header, {
                                                                    children: [
                                                                        param.title,
                                                                        param.unit ? ", " + param.unit : ""
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Accordion.Body, {
                                                                    className: "text-start",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {
                                                                        controlId: "formBasicCheckbox",
                                                                        children: param.values.map((value, paramIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Check, {
                                                                                ref: (element)=>{
                                                                                    checkboxRef.current[index + "-" + paramIndex] = element;
                                                                                },
                                                                                name: param.title.toLowerCase(),
                                                                                type: "checkbox",
                                                                                label: value,
                                                                                value: value,
                                                                                onChange: (e)=>handleCheckboxChange(e)
                                                                            })
                                                                        )
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    )
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    variant: "success",
                                                    className: "my-4",
                                                    onClick: handleFiltersApply,
                                                    children: "Apply"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    lg: 9,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "positions-list my-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    className: (_styles_CatalogIndex_module_scss__WEBPACK_IMPORTED_MODULE_10___default().category_count),
                                                    children: [
                                                        "Items in category \u2014 ",
                                                        productsCount
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                            lg: 4,
                                                            sm: 6,
                                                            className: "my-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_card_ProductCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                handleCartToggle: handleCartToggle,
                                                                product: product
                                                            })
                                                        })
                                                    )
                                                })
                                            ]
                                        }),
                                        totalPages > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
                                            children: [
                                                activePage !== 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Pagination.First, {
                                                            onClick: ()=>handlePaginationClick(1)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Pagination.Prev, {
                                                            onClick: ()=>handlePaginationClick(activePage - 1)
                                                        })
                                                    ]
                                                }),
                                                paginationItems,
                                                activePage !== totalPages && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Pagination.Next, {
                                                            onClick: ()=>handlePaginationClick(activePage + 1)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Pagination.Last, {
                                                            onClick: ()=>handlePaginationClick(totalPages)
                                                        })
                                                    ]
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
    var _page;
    const page = (_page = query.page) !== null && _page !== void 0 ? _page : 1;
    let queryString = `${alias}?page=${page}`;
    Object.keys(query).forEach((key)=>{
        if (key !== "alias" && key !== "page") queryString += `&${key}=${query[key]}`;
    });
    return axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://applecart.dev/api/v1" + "/catalog/" + queryString).then((res)=>{
        const categories = res.data.data.categories;
        const products = res.data.data.products;
        const params = res.data.data.params;
        const productsCount = res.data.data.productsCount;
        return {
            props: {
                categories,
                products,
                productsCount,
                params
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,560,935], () => (__webpack_exec__(1835)));
module.exports = __webpack_exports__;

})();