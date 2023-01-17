(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 7436:
/***/ ((module) => {

// Exports
module.exports = {
	"checkout": "Checkout_checkout__mDYaY",
	"checkout__table": "Checkout_checkout__table__zJF1O",
	"checkout__tableCell": "Checkout_checkout__tableCell__u71IM",
	"checkout__img": "Checkout_checkout__img__cjqM7",
	"checkout__prices": "Checkout_checkout__prices__hoJq0",
	"checkout__price": "Checkout_checkout__price___eO_q",
	"checkout__no_customer": "Checkout_checkout__no_customer__Vt9bc",
	"page_title": "Checkout_page_title__EeKVY",
	"thead__dark": "Checkout_thead__dark__RbSvi",
	"no_products": "Checkout_no_products__p0r_L",
	"order_mobile": "Checkout_order_mobile__1n1AU",
	"order_mobile_item": "Checkout_order_mobile_item__ROaRf",
	"order_mobile_item_details": "Checkout_order_mobile_item_details__3GDz3",
	"col-xs-6": "Checkout_col-xs-6__Y6FsU",
	"order_img": "Checkout_order_img__PFaYp"
};


/***/ }),

/***/ 7191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ checkout),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Checkout.module.scss
var Checkout_module = __webpack_require__(7436);
var Checkout_module_default = /*#__PURE__*/__webpack_require__.n(Checkout_module);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__(7174);
// EXTERNAL MODULE: ./utils/integerDivide.ts
var integerDivide = __webpack_require__(1152);
// EXTERNAL MODULE: ./redux/ui/uiSlice.ts
var uiSlice = __webpack_require__(7646);
// EXTERNAL MODULE: ./components/withSpinnerOverlay.tsx
var withSpinnerOverlay = __webpack_require__(8482);
;// CONCATENATED MODULE: ./components/order/OrderForm.tsx



const OrderForm = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
        onSubmit: (e)=>{
            e.preventDefault();
            props.handleOrderSubmit();
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                className: "mb-3",
                controlId: "orderFormName",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                        children: "Customer name"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                        type: "text",
                        name: "name",
                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                        ,
                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                        ,
                        value: props.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                        className: "text-danger",
                        children: props.nameError
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                className: "mb-3",
                controlId: "orderFormPhone",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                        children: "Contact phone"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                        type: "text",
                        name: "phone",
                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                        ,
                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                        ,
                        value: props.phone
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                        className: "text-danger",
                        children: props.phoneError
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                className: "mb-3",
                controlId: "orderFormAddress",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                        children: "Delivery address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                        type: "text",
                        name: "address",
                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                        ,
                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                        ,
                        value: props.address
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                        className: "text-danger",
                        children: props.addressError
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                className: "mb-3",
                controlId: "orderFormNote",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                        children: "Extra info"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                        className: "mb-3",
                        as: "textarea",
                        rows: 5,
                        name: "note",
                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                        ,
                        value: props.note
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "success",
                type: "submit",
                disabled: props.isSubmitDisabled,
                children: "Submit"
            }),
            props.isOrderFetching && /*#__PURE__*/ jsx_runtime_.jsx(withSpinnerOverlay/* default */.Z, {})
        ]
    })
;
/* harmony default export */ const order_OrderForm = (OrderForm);

// EXTERNAL MODULE: ./redux/order/orderSlice.ts
var orderSlice = __webpack_require__(5449);
;// CONCATENATED MODULE: ./components/order/Order.tsx





const Order = ()=>{
    const userData = (0,hooks/* useAppSelector */.C)((state)=>{
        return {
            real_name: state.user.real_name,
            phone_number: state.user.phone_number
        };
    });
    const { 0: name1 , 1: setName  } = (0,external_react_.useState)(userData.real_name);
    const { 0: nameError , 1: setNameError  } = (0,external_react_.useState)("");
    const { 0: isNameValid , 1: setNameValid  } = (0,external_react_.useState)(true);
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)(userData.phone_number);
    const { 0: phoneError , 1: setPhoneError  } = (0,external_react_.useState)("");
    const { 0: isPhoneValid , 1: setPhoneValid  } = (0,external_react_.useState)(true);
    const { 0: address , 1: setAddress  } = (0,external_react_.useState)("");
    const { 0: addressError , 1: setAddressError  } = (0,external_react_.useState)("");
    const { 0: isAddressValid , 1: setAddressValid  } = (0,external_react_.useState)(false);
    const { 0: note , 1: setNote  } = (0,external_react_.useState)("");
    const { 0: isSubmitDisabled , 1: setSubmitDisabled  } = (0,external_react_.useState)(true);
    const isOrderFetching = (0,hooks/* useAppSelector */.C)((state)=>state.order.isFetching
    );
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleFieldChange = (name, value)=>{
        switch(name){
            case "name":
                setName(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "note":
                setNote(value);
                break;
        }
    };
    const handleFieldBlur = (field)=>{
        switch(field){
            case "name":
                if (name1 && name1.length < 3 || name1 && name1.length > 255) {
                    setNameError("Too short or long value");
                    setNameValid(false);
                } else if (name1 && !name1.match("^[\u0430-\u044F\u0410-\u042F\u0451\u0401a-zA-Z ]+$")) {
                    setNameError("The field should contain only characters and spaces");
                    setNameValid(false);
                } else {
                    setNameError("");
                    setNameValid(true);
                }
                break;
            case "phone":
                if (!phone) setPhoneError("The field should be completed");
                else if (phone.length < 11) setPhoneError("The field should contain no less than 11 characters");
                else if (!phone.match("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$")) setPhoneError("Wrong phone format");
                else {
                    setPhoneError("");
                    setPhoneValid(true);
                }
                break;
            case "address":
                if (address && address.length < 3) {
                    setAddressError("Too short or long value");
                    setAddressValid(false);
                } else {
                    setAddressError("");
                    setAddressValid(true);
                }
                break;
        }
    };
    const handleOrderSubmit = ()=>{
        dispatch((0,orderSlice/* addOrder */.fS)({
            name: name1,
            phone,
            address,
            note
        })).then((res)=>{
            if (res.payload.status !== "error") {
                setName("");
                setPhone("");
                setAddress("");
                setNote("");
            }
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (!isNameValid || !isPhoneValid || !isAddressValid) setSubmitDisabled(true);
        else setSubmitDisabled(false);
    }, [
        isNameValid,
        isPhoneValid,
        isAddressValid
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(order_OrderForm, {
        handleOrderSubmit: handleOrderSubmit,
        name: name1,
        phone: phone,
        address: address,
        note: note,
        handleFieldChange: handleFieldChange,
        handleFieldBlur: handleFieldBlur,
        nameError: nameError,
        phoneError: phoneError,
        addressError: addressError,
        isOrderFetching: isOrderFetching,
        isSubmitDisabled: isSubmitDisabled
    });
};
/* harmony default export */ const order_Order = (Order);

// EXTERNAL MODULE: ./components/catalog-gallery/CatalogGallery.tsx
var CatalogGallery = __webpack_require__(269);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/checkout.tsx












const Checkout = ({ categories  })=>{
    const data = (0,hooks/* useAppSelector */.C)((state)=>{
        return {
            username: state.user.username,
            items: state.cart.items,
            totalCount: state.cart.totalCount,
            totalPrice: state.cart.totalPrice
        };
    });
    const { 0: alertShow , 1: setAlertShow  } = (0,external_react_.useState)(true);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const orderResponse = (0,hooks/* useAppSelector */.C)((state)=>state.order.orderResponse
    );
    const handleSigninToggle = ()=>dispatch(uiSlice/* UISlice.actions.toggleSigninShown */.No.actions.toggleSigninShown())
    ;
    const handleSignupToggle = ()=>dispatch(uiSlice/* UISlice.actions.toggleSignupShown */.No.actions.toggleSignupShown())
    ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Applecart eshop | Checkout"
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
                                    active: true,
                                    children: "Checkout"
                                })
                            ]
                        }),
                        data.totalCount ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Checkout_module_default()).checkout,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (Checkout_module_default()).page_title + " mb-5",
                                    children: "Checkout"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                    className: "mb-4",
                                    children: [
                                        "Your cart have: ",
                                        data.totalCount,
                                        " product(s)"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Checkout_module_default()).checkout__table,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Table, {
                                        className: "table-bordered text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                                className: (Checkout_module_default()).thead__dark,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            scope: "col",
                                                            children: "\u2116"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            scope: "col",
                                                            children: "Product"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            scope: "col",
                                                            children: "Quantity"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            scope: "col",
                                                            children: "Title"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            scope: "col",
                                                            children: "Cost"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            scope: "col",
                                                            children: "Remove"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                                children: data.items.map((el, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "row",
                                                                className: (Checkout_module_default()).checkout__tableCell,
                                                                children: index + 1
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: (Checkout_module_default()).checkout__tableCell,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: el.productMedia[0],
                                                                        alt: el.title,
                                                                        className: (Checkout_module_default()).checkout__img
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                className: (Checkout_module_default()).checkout__tableCell,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        className: "btn btn-light qty_change",
                                                                        "data-qty": "-1",
                                                                        children: "-"
                                                                    }),
                                                                    el.quantity,
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        className: "btn btn-light qty_change",
                                                                        "data-qty": "1",
                                                                        children: "+"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: (Checkout_module_default()).checkout__tableCell,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: el.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                className: (Checkout_module_default()).checkout__tableCell,
                                                                children: [
                                                                    (0,integerDivide/* default */.Z)(el.price),
                                                                    "$"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: (Checkout_module_default()).checkout__tableCell,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-trash",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                )
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Checkout_module_default()).order_mobile,
                                    children: data.items.map((el, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (Checkout_module_default()).order_mobile_item,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: el.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Checkout_module_default()).order_mobile_item_details + " row",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                            xs: 6,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: `/catalog/${el.categoryAlias}/${el.alias}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: el.productMedia[0],
                                                                    className: (Checkout_module_default()).order_img
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                                            xs: 6,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: "btn btn-light qty_change",
                                                                    "data-qty": "-1",
                                                                    "data-id": "<?=$id?>",
                                                                    children: "-"
                                                                }),
                                                                el.quantity,
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: "btn btn-light qty_change",
                                                                    "data-qty": "1",
                                                                    "data-id": "<?=$id?>",
                                                                    children: "+"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                    children: [
                                                                        (0,integerDivide/* default */.Z)(el.price),
                                                                        "$"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, index)
                                    )
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            md: 4,
                                            className: (Checkout_module_default()).checkout__prices,
                                            children: [
                                                data.items.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (Checkout_module_default()).checkout__price,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: el.title
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    (0,integerDivide/* default */.Z)(el.price),
                                                                    "$"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ),
                                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Checkout_module_default()).checkout__price,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "\u0418\u0442\u043E\u0433\u043E:"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                (0,integerDivide/* default */.Z)(data.totalPrice),
                                                                "$"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            md: 8,
                                            children: [
                                                data.username && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            children: "Order details"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(order_Order, {})
                                                    ]
                                                }),
                                                !data.username && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Checkout_module_default()).checkout__no_customer + " my-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "To checkout, please"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                            className: "signinButton mx-3",
                                                            onClick: handleSigninToggle,
                                                            variant: "success",
                                                            children: "Log in"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "or"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                                            className: "signinButton mx-3",
                                                            onClick: handleSignupToggle,
                                                            variant: "success",
                                                            children: "Sign up"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Checkout_module_default()).checkout,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (Checkout_module_default()).page_title + " mb-5",
                                    children: "Checkout"
                                }),
                                orderResponse && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                    variant: "success",
                                    onClose: ()=>setAlertShow(false)
                                    ,
                                    dismissible: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: orderResponse
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: (Checkout_module_default()).no_products + " mb-4",
                                    children: "Your cart have no products for checkout"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CatalogGallery/* default */.Z, {
                                    categories: categories
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps() {
    const response = await external_axios_default().get("https://applecart.dev/api/v1" + "/site/index");
    const categories = response.data.data.categories;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            categories
        }
    };
}
/* harmony default export */ const checkout = (Checkout);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,560,275,269], () => (__webpack_exec__(7191)));
module.exports = __webpack_exports__;

})();