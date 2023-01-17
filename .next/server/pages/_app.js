(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7263:
/***/ ((module) => {

// Exports
module.exports = {
	"cart_item": "CartModal_cart_item__VyYp_",
	"btn_cart_delete": "CartModal_btn_cart_delete__h2Mne"
};


/***/ }),

/***/ 2306:
/***/ ((module) => {

// Exports
module.exports = {
	"categories": "Catalog_categories__ImhT_",
	"catalogue": "Catalog_catalogue__M404Q",
	"category": "Catalog_category__kjhcA"
};


/***/ }),

/***/ 1544:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__BH5s_"
};


/***/ }),

/***/ 1969:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__ubBbX",
	"navbar_desktop": "Header_navbar_desktop__oyJpL",
	"logoImg": "Header_logoImg__0Yt_i",
	"userIcon": "Header_userIcon__dAOP9",
	"badge": "Header_badge__whaqZ",
	"logo": "Header_logo__c1BRW",
	"cart_desktop": "Header_cart_desktop__mEqZz",
	"cartIcon": "Header_cartIcon__t6QLN",
	"searchField_desktop": "Header_searchField_desktop__k3Xix",
	"searchIcon": "Header_searchIcon__XrcV8"
};


/***/ }),

/***/ 4844:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar_mobile": "NavbarMobile_navbar_mobile__3058k",
	"navbar_mobile_menu": "NavbarMobile_navbar_mobile_menu__IMiKn",
	"category_mobile": "NavbarMobile_category_mobile__AJwm4",
	"category_name": "NavbarMobile_category_name__wAgcG",
	"navbar_mobile_icon": "NavbarMobile_navbar_mobile_icon__LyoxB",
	"opened": "NavbarMobile_opened__Stc_X",
	"pages_links": "NavbarMobile_pages_links__aLBi5",
	"search_form": "NavbarMobile_search_form__A9uqQ",
	"search_button": "NavbarMobile_search_button__hdLim",
	"search_icon": "NavbarMobile_search_icon__0z_Sp"
};


/***/ }),

/***/ 3911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./styles/Header.module.scss
var Header_module = __webpack_require__(1969);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__(7174);
// EXTERNAL MODULE: ./redux/auth/authSlice.ts
var authSlice = __webpack_require__(8231);
// EXTERNAL MODULE: ./redux/ui/uiSlice.ts
var uiSlice = __webpack_require__(7646);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.tsx








const Header = ()=>{
    const cartTotalCount = (0,hooks/* useAppSelector */.C)((state)=>state.cart.totalCount
    );
    const username = (0,hooks/* useAppSelector */.C)((state)=>state.user.username
    );
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const router = (0,router_.useRouter)();
    const handleSignout = ()=>dispatch((0,authSlice/* signout */.uf)())
    ;
    const handleCartToggle = ()=>dispatch(uiSlice/* UISlice.actions.toggleCartShown */.No.actions.toggleCartShown())
    ;
    const handleSigninToggle = ()=>dispatch(uiSlice/* UISlice.actions.toggleSigninShown */.No.actions.toggleSigninShown())
    ;
    const handleProfileToggle = ()=>dispatch(uiSlice/* UISlice.actions.toggleProfileShown */.No.actions.toggleProfileShown())
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header + " position-fixed w-100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar, {
            bg: router.pathname !== "/" && "dark",
            variant: "dark",
            className: (Header_module_default()).navbar_desktop,
            expand: "sm",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
                    className: (Header_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/icons/logo.svg",
                            className: (Header_module_default()).logoImg,
                            alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F Applecart.ru"
                        })
                    })
                }),
                username && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ButtonGroup, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.DropdownButton, {
                            as: external_react_bootstrap_.ButtonGroup,
                            title: "",
                            variant: "success",
                            id: "bg-dropdown-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                    eventKey: "1",
                                    onClick: handleProfileToggle,
                                    children: "Profile"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                    eventKey: "2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/orders",
                                        children: "Orders"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                    eventKey: "3",
                                    onClick: handleSignout,
                                    children: "Log out"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Button, {
                            variant: "light",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    id: (Header_module_default()).userIcon,
                                    src: "/icons/user.png",
                                    alt: "User"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mx-2",
                                    children: username
                                })
                            ]
                        })
                    ]
                }),
                !username && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                    className: "signinButton py-2 px-4",
                    onClick: handleSigninToggle,
                    variant: "success",
                    children: "Log in"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar.Collapse, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                            className: "mr-auto w-100 d-flex flex-column flex-md-row justify-content-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/about",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                        className: (Header_module_default()).navlink_desktop,
                                        children: "About us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                    href: "/#contacts",
                                    children: "Contacts"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form, {
                            className: "me-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.InputGroup, {
                                className: (Header_module_default()).searchField_desktop,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        type: "text",
                                        placeholder: "e.g. IPhone"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                        variant: "success",
                                        type: "submit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: (Header_module_default()).searchIcon,
                                            alt: "Search",
                                            src: "/icons/search.svg"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: handleCartToggle,
                    className: (Header_module_default()).cart_desktop,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: (Header_module_default()).cartIcon,
                            alt: "Cart",
                            src: "/icons/cart.svg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Badge, {
                            bg: "",
                            className: (Header_module_default()).badge,
                            children: cartTotalCount
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./styles/Catalog.module.scss
var Catalog_module = __webpack_require__(2306);
var Catalog_module_default = /*#__PURE__*/__webpack_require__.n(Catalog_module);
;// CONCATENATED MODULE: ./components/catalog/Catalog.tsx



const Catalog = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Catalog_module_default()).categories,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Catalog_module_default()).catalogue,
                children: "Catalog:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: props.categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Catalog_module_default()).category,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/catalog/${category.alias}`,
                            children: category.title
                        })
                    }, category.id)
                )
            })
        ]
    });
};
/* harmony default export */ const catalog_Catalog = (Catalog);

// EXTERNAL MODULE: ./styles/Footer.module.scss
var Footer_module = __webpack_require__(1544);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.tsx


const Footer = ({ copyright  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer + " font-small mt-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Footer_module_default()).copyright + " text-center py-3",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: copyright
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/withSpinnerOverlay.tsx
var withSpinnerOverlay = __webpack_require__(8482);
;// CONCATENATED MODULE: ./components/signin/SigninForm.tsx



const SigninForm = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
        show: props.isShown,
        onHide: props.handleClose,
        children: [
            !props.isRecover && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: (e)=>{
                    e.preventDefault();
                    props.handleSigninSubmit();
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Title, {
                            children: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formLogin",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                        children: "Username"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onChange: (e)=>props.handleLoginChange(e.target.value)
                                        ,
                                        value: props.login,
                                        type: "text",
                                        name: "login"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-muted"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formPassword",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                        children: "Password"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onChange: (e)=>props.handlePasswordChange(e.target.value)
                                        ,
                                        value: props.password,
                                        type: "password",
                                        name: "password"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                variant: "link",
                                onClick: ()=>props.handleRecoverShow()
                                ,
                                children: "Forgot password"
                            }),
                            props.signinMessage && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                variant: "danger",
                                className: "text-center",
                                children: props.signinMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Footer, {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                variant: "success",
                                type: "submit",
                                children: "Log in"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                variant: "success",
                                onClick: ()=>props.handleSignupShow()
                                ,
                                children: "Sign up"
                            })
                        ]
                    })
                ]
            }),
            props.isRecover && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: (e)=>{
                    e.preventDefault();
                    props.handleRecoverSubmit();
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Title, {
                            children: "Password reset"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formLogin",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onChange: (e)=>props.handleEmailChange(e.target.value)
                                        ,
                                        value: props.email,
                                        type: "email",
                                        name: "email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-muted"
                                    })
                                ]
                            }),
                            props.recoverMessage && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                variant: "success",
                                className: "text-center",
                                children: props.recoverMessage
                            }),
                            props.recoverError && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                variant: "danger",
                                className: "text-center",
                                children: props.recoverError
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                            variant: "success",
                            type: "submit",
                            children: "Reset password"
                        })
                    })
                ]
            }),
            props.isAuthFetching && /*#__PURE__*/ jsx_runtime_.jsx(withSpinnerOverlay/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const signin_SigninForm = (SigninForm);

;// CONCATENATED MODULE: ./components/signin/Signin.tsx







const Signin = ()=>{
    const { 0: login , 1: setLogin  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const { 0: isRecover , 1: setIsRecover  } = (0,external_react_.useState)(false);
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const signinMessage = (0,hooks/* useAppSelector */.C)((state)=>state.auth.authMessage
    );
    const recoverMessage = (0,hooks/* useAppSelector */.C)((state)=>state.auth.recoverMessage
    );
    const recoverError = (0,hooks/* useAppSelector */.C)((state)=>state.auth.recoverError
    );
    const isAuthFetching = (0,hooks/* useAppSelector */.C)((state)=>state.auth.isFetching
    );
    const isShown = (0,hooks/* useAppSelector */.C)((state)=>{
        return state.ui.isSigninShown;
    });
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleSigninToggle = ()=>dispatch(uiSlice/* UISlice.actions.toggleSigninShown */.No.actions.toggleSigninShown())
    ;
    const handleSignupToggle = ()=>{
        dispatch(uiSlice/* UISlice.actions.toggleSigninShown */.No.actions.toggleSigninShown());
        dispatch(uiSlice/* UISlice.actions.toggleSignupShown */.No.actions.toggleSignupShown());
    };
    const handleRecoverShow = ()=>setIsRecover(true)
    ;
    const handleSigninSubmit = ()=>{
        if (login && password) {
            dispatch((0,authSlice/* signin */.xJ)({
                login: login,
                password: password
            })).then((res)=>{
                if (res.payload.status !== "error") {
                    setLogin("");
                    setPassword("");
                    handleSigninToggle();
                }
            });
        } else {
            dispatch(authSlice/* authSlice.actions.setAuthMessage */.Gb.actions.setAuthMessage("\u041B\u043E\u0433\u0438\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B"));
        }
    };
    const handleRecoverSubmit = ()=>{
        if (email && email.match("^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$")) {
            dispatch((0,authSlice/* recoverPassword */.M4)(email)).then((res)=>{
                setTimeout(()=>{
                    dispatch(authSlice/* authSlice.actions.removeRecoverError */.Gb.actions.removeRecoverError());
                    dispatch(authSlice/* authSlice.actions.removeRecoverMessage */.Gb.actions.removeRecoverMessage());
                    setIsRecover(false);
                    handleSigninToggle();
                }, 5000);
            });
        } else {
            dispatch(authSlice/* authSlice.actions.setRecoverError */.Gb.actions.setRecoverError("\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 email"));
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(signin_SigninForm, {
        isShown: isShown,
        handleClose: handleSigninToggle,
        handleSigninSubmit: handleSigninSubmit,
        signinMessage: signinMessage,
        login: login,
        password: password,
        handleLoginChange: setLogin,
        handlePasswordChange: setPassword,
        handleEmailChange: setEmail,
        email: email,
        handleRecoverShow: handleRecoverShow,
        recoverMessage: recoverMessage,
        recoverError: recoverError,
        isRecover: isRecover,
        handleSignupShow: handleSignupToggle,
        handleRecoverSubmit: handleRecoverSubmit,
        isAuthFetching: isAuthFetching
    });
};
/* harmony default export */ const signin_Signin = (Signin);

;// CONCATENATED MODULE: ./components/signup/SignupForm.tsx



const SignupForm_SigninForm = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
        show: props.isShown,
        onHide: props.handleClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: (e)=>{
                    e.preventDefault();
                    props.handleSignupSubmit();
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Title, {
                            children: "Sign up"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formLogin",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Label, {
                                        children: [
                                            "Username ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        value: props.login,
                                        type: "text",
                                        name: "login"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.loginError
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formRealName",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                        children: "Full name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        value: props.realName,
                                        type: "text",
                                        name: "realName"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.realNameError
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formEmail",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Label, {
                                        children: [
                                            "Email ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        value: props.email,
                                        type: "email",
                                        name: "email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.emailError
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formPhone",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Label, {
                                        children: [
                                            "Phone number ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        placeholder: "+7 (999) 999-99-99",
                                        value: props.phone,
                                        type: "tel",
                                        name: "phone"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.phoneError
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formPassword",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Label, {
                                        children: [
                                            "Password ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        value: props.password,
                                        type: "password",
                                        name: "password"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.passwordError
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                className: "mb-3",
                                controlId: "formPasswordConfirm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Label, {
                                        children: [
                                            "Confirm password ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-danger",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        value: props.passwordConfirm,
                                        type: "password",
                                        name: "passwordConfirm"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.passwordConfirmError
                                    })
                                ]
                            }),
                            props.signupMessage && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                                variant: "danger",
                                className: "text-center",
                                children: props.signupMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                            variant: "success",
                            type: "submit",
                            disabled: props.isSubmitDisabled,
                            children: "Submit"
                        })
                    })
                ]
            }),
            props.isAuthFetching && /*#__PURE__*/ jsx_runtime_.jsx(withSpinnerOverlay/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const SignupForm = (SignupForm_SigninForm);

;// CONCATENATED MODULE: ./components/signup/Signup.tsx






const Signup = ()=>{
    const { 0: login , 1: setLogin  } = (0,external_react_.useState)("");
    const { 0: loginError , 1: setLoginError  } = (0,external_react_.useState)("");
    const { 0: isLoginValid , 1: setLoginValid  } = (0,external_react_.useState)(false);
    const { 0: realName , 1: setRealName  } = (0,external_react_.useState)("");
    const { 0: realNameError , 1: setRealNameError  } = (0,external_react_.useState)("");
    const { 0: isRealNameValid , 1: setRealNameValid  } = (0,external_react_.useState)(false);
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: emailError , 1: setEmailError  } = (0,external_react_.useState)("");
    const { 0: isEmailValid , 1: setEmailValid  } = (0,external_react_.useState)(false);
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)("");
    const { 0: phoneError , 1: setPhoneError  } = (0,external_react_.useState)("");
    const { 0: isPhoneValid , 1: setPhoneValid  } = (0,external_react_.useState)(false);
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const { 0: passwordError , 1: setPasswordError  } = (0,external_react_.useState)("");
    const { 0: isPasswordValid , 1: setPasswordValid  } = (0,external_react_.useState)(false);
    const { 0: passwordConfirm , 1: setPasswordConfirm  } = (0,external_react_.useState)("");
    const { 0: passwordConfirmError , 1: setPasswordConfirmError  } = (0,external_react_.useState)("");
    const { 0: isPasswordConfirmValid , 1: setPasswordConfirmValid  } = (0,external_react_.useState)(false);
    const { 0: isSubmitDisabled , 1: setSubmitDisabled  } = (0,external_react_.useState)(true);
    const signupMessage = (0,hooks/* useAppSelector */.C)((state)=>state.auth.signupMessage
    );
    const isAuthFetching = (0,hooks/* useAppSelector */.C)((state)=>state.auth.isFetching
    );
    const isShown = (0,hooks/* useAppSelector */.C)((state)=>{
        return state.ui.isSignupShown;
    });
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleSignupToggle = ()=>{
        dispatch(uiSlice/* UISlice.actions.toggleSignupShown */.No.actions.toggleSignupShown());
    };
    const handleFieldChange = (name, value)=>{
        switch(name){
            case "login":
                setLogin(value);
                break;
            case "realName":
                setRealName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "passwordConfirm":
                setPasswordConfirm(value);
                break;
        }
    };
    const handleFieldBlur = (name)=>{
        switch(name){
            case "login":
                if (!login) setLoginError("Field should be filled");
                else if (login.length < 3 || login.length > 12) setLoginError("Field should contain 3 - 15 symbols");
                else if (!login.match("^[a-zA-Z0-9]+$")) setLoginError("Field should contain only latin letters and numbers");
                else {
                    setLoginError("");
                    setLoginValid(true);
                }
                break;
            case "realName":
                if (realName && realName.length < 3 || realName && realName.length > 255) {
                    setRealNameError("Too long or too short value");
                    setRealNameValid(false);
                } else if (realName && !realName.match("^[\u0430-\u044F\u0410-\u042F\u0451\u0401a-zA-Z ]+$")) {
                    setRealNameError("Field should contain only letters and spaces");
                    setRealNameValid(false);
                } else {
                    setRealNameError("");
                    setRealNameValid(true);
                }
                break;
            case "email":
                if (!email) setEmailError("Field should be filled");
                else if (email.length < 3 || email.length > 30) setEmailError("Field should contain 3 - 30 symbols");
                else if (!email.match("^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$")) setEmailError("\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 e-mail");
                else {
                    setEmailError("");
                    setEmailValid(true);
                }
                break;
            case "phone":
                if (!phone) setPhoneError("Field should be filled");
                else if (phone.length < 11) setPhoneError("Field should contain not less than 11 symbols");
                else {
                    setPhoneError("");
                    setPhoneValid(true);
                }
                break;
            case "password":
                if (!password) setPasswordError("Field should be filled");
                else if (password.length < 8 || password.length > 25) setPasswordError("Field should contain 8 - 25 symbols");
                else if (!password.match("^[a-zA-Z0-9]+$")) setPasswordError("Use latin letters and numbers for password");
                else {
                    setPasswordError("");
                    setPasswordValid(true);
                }
                break;
            case "passwordConfirm":
                if (passwordConfirm !== password) setPasswordConfirmError("Passwords don't match");
                else {
                    setPasswordConfirmError("");
                    setPasswordConfirmValid(true);
                }
                break;
        }
    };
    const handleSignupSubmit = ()=>{
        dispatch((0,authSlice/* signup */.IU)({
            login: login,
            realName: realName,
            email: email,
            phone: phone,
            password: password,
            passwordConfirm: passwordConfirm
        })).then((res)=>{
            if (res.payload.status !== "error") handleSignupToggle();
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (!isLoginValid || !isRealNameValid || !isEmailValid || !isPhoneValid || !isPasswordValid || !isPasswordConfirmValid) setSubmitDisabled(true);
        else setSubmitDisabled(false);
    }, [
        isLoginValid,
        isRealNameValid,
        isEmailValid,
        isPhoneValid,
        isPasswordValid,
        isPasswordConfirmValid
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(SignupForm, {
        isShown: isShown,
        handleClose: handleSignupToggle,
        handleSignupSubmit: handleSignupSubmit,
        handleFieldChange: handleFieldChange,
        handleFieldBlur: handleFieldBlur,
        signupMessage: signupMessage,
        login: login,
        loginError: loginError,
        realName: realName,
        realNameError: realNameError,
        email: email,
        emailError: emailError,
        phone: phone,
        phoneError: phoneError,
        password: password,
        passwordError: passwordError,
        passwordConfirm: passwordConfirm,
        passwordConfirmError: passwordConfirmError,
        isSubmitDisabled: isSubmitDisabled,
        isAuthFetching: isAuthFetching
    });
};
/* harmony default export */ const signup_Signup = (Signup);

;// CONCATENATED MODULE: ./components/profile/ProfileModal.tsx


const ProfileModal = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
        size: "lg",
        show: props.isShown,
        onHide: props.handleClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                closeButton: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Title, {
                    children: "Profile"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        className: "text-center mb-5",
                        children: [
                            "User info: ",
                            props.userData.username
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup, {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                                children: [
                                    "Full Name: ",
                                    props.userData.real_name
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                                children: [
                                    "Email: ",
                                    props.userData.email
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.ListGroup.Item, {
                                children: [
                                    "Phone number: ",
                                    props.userData.phone_number
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Footer, {
                className: "d-flex justify-content-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        variant: "success",
                        type: "submit",
                        children: "Edit data"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        variant: "success",
                        children: "Change password"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const profile_ProfileModal = (ProfileModal);

;// CONCATENATED MODULE: ./components/profile/Profile.tsx




const Profile = ()=>{
    const isShown = (0,hooks/* useAppSelector */.C)((state)=>{
        return state.ui.isProfileShown;
    });
    const userData = (0,hooks/* useAppSelector */.C)((state)=>{
        return {
            username: state.user.username,
            real_name: state.user.real_name,
            email: state.user.email,
            phone_number: state.user.phone_number
        };
    });
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleProfileToggle = ()=>{
        dispatch(uiSlice/* UISlice.actions.toggleProfileShown */.No.actions.toggleProfileShown());
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(profile_ProfileModal, {
        isShown: isShown,
        userData: userData,
        handleClose: handleProfileToggle
    });
};
/* harmony default export */ const profile_Profile = (Profile);

// EXTERNAL MODULE: ./utils/integerDivide.ts
var integerDivide = __webpack_require__(1152);
// EXTERNAL MODULE: ./styles/CartModal.module.scss
var CartModal_module = __webpack_require__(7263);
var CartModal_module_default = /*#__PURE__*/__webpack_require__.n(CartModal_module);
;// CONCATENATED MODULE: ./components/cart/CartModal.tsx






const CartModal = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
        size: "lg",
        show: props.cartData.isShown,
        onHide: props.handleToggle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                closeButton: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Title, {
                    children: "Cart"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Body, {
                children: [
                    props.cartData.items.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Table, {
                        hover: true,
                        striped: true,
                        responsive: true,
                        id: "cart_table",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Photo"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Title"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Quantity"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Price"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                style: {
                                    borderTop: "unset"
                                },
                                children: [
                                    props.cartData.items.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            className: (CartModal_module_default()).cart_item,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: (CartModal_module_default()).cart_item_cell,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: el.productMedia[0],
                                                        height: "50",
                                                        alt: el.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: (CartModal_module_default()).cart_item_cell,
                                                    children: el.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: (CartModal_module_default()).cart_item_cell,
                                                    children: el.quantity
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: (CartModal_module_default()).cart_item_cell,
                                                    children: (0,integerDivide/* default */.Z)(el.price) + "$"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: (CartModal_module_default()).cart_item_cell,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        className: (CartModal_module_default()).btn_cart_delete + " btn-close",
                                                        onClick: (e)=>props.handleItemRemove({
                                                                id: el.id,
                                                                quantity: el.quantity,
                                                                price: el.price
                                                            })
                                                    })
                                                })
                                            ]
                                        })
                                    ),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                colSpan: 4,
                                                children: "Total:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "cart-modal_qty",
                                                children: props.cartData.totalCount
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                colSpan: 4,
                                                children: "Total price:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "cart-modal_sum",
                                                children: (0,integerDivide/* default */.Z)(props.cartData.totalPrice) + "$"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    props.cartData.items.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Your cart is empty"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {
                className: "d-flex justify-content-between",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/checkout",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        variant: "success",
                        type: "submit",
                        onClick: props.handleToggle,
                        children: "Checkout"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const cart_CartModal = (CartModal);

// EXTERNAL MODULE: ./redux/cart/cartSlice.ts
var cartSlice = __webpack_require__(7398);
;// CONCATENATED MODULE: ./components/cart/Cart.tsx





const Cart = ()=>{
    const userId = (0,hooks/* useAppSelector */.C)((state)=>state.user.id
    );
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleItemRemove = (item)=>{
        if (userId) {
            dispatch((0,cartSlice/* removeFromCard */.tY)(item.id));
        } else dispatch(cartSlice/* cartSlice.actions.removeItem */.Ao.actions.removeItem(item));
    };
    const handleCartToggle = ()=>{
        dispatch(uiSlice/* UISlice.actions.toggleCartShown */.No.actions.toggleCartShown());
    };
    const cartData = (0,hooks/* useAppSelector */.C)((state)=>{
        return {
            isShown: state.ui.isCartShown,
            items: state.cart.items,
            totalCount: state.cart.totalCount,
            totalPrice: state.cart.totalPrice
        };
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(cart_CartModal, {
        handleToggle: handleCartToggle,
        handleItemRemove: handleItemRemove,
        cartData: cartData
    });
};
/* harmony default export */ const cart_Cart = (Cart);

// EXTERNAL MODULE: ./styles/NavbarMobile.module.scss
var NavbarMobile_module = __webpack_require__(4844);
var NavbarMobile_module_default = /*#__PURE__*/__webpack_require__.n(NavbarMobile_module);
;// CONCATENATED MODULE: ./components/mobile-navbar/NavbarMobile.tsx





const NavbarMobile = (props)=>{
    const handleBurgerClick = ()=>{
        const navbar = document.querySelector(`.${(NavbarMobile_module_default()).navbar_mobile}`);
        const body = document.querySelector("body");
        body.classList.toggle("no-overflow");
        navbar.classList.toggle((NavbarMobile_module_default()).opened);
    };
    const handleLinkClick = ()=>{
        const navbar = document.querySelector(`.${(NavbarMobile_module_default()).navbar_mobile}`);
        const body = document.querySelector("body");
        body.classList.toggle("no-overflow");
        navbar.classList.toggle((NavbarMobile_module_default()).opened);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NavbarMobile_module_default()).navbar_mobile,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NavbarMobile_module_default()).navbar_mobile_menu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form, {
                        className: (NavbarMobile_module_default()).search_form + " d-sm-block d-md-none",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.InputGroup, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                    type: "text",
                                    placeholder: "e.g. IPhone"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                    className: (NavbarMobile_module_default()).search_button,
                                    type: "submit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: (NavbarMobile_module_default()).search_icon,
                                        alt: "Search",
                                        src: "/icons/search.svg"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        onClick: handleLinkClick,
                        children: props.categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/catalog/${category.alias}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (NavbarMobile_module_default()).category_mobile,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: category.image
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (NavbarMobile_module_default()).category_name,
                                            children: category.title
                                        })
                                    ]
                                }, category.id)
                            })
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (NavbarMobile_module_default()).pages_links,
                        onClick: handleLinkClick,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                passHref: true,
                                children: "About us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/#contacts",
                                children: "Contacts"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NavbarMobile_module_default()).navbar_mobile_icon,
                onClick: handleBurgerClick,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    fill: "#fff",
                    viewBox: "0 0 100 80",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "55",
                            height: "10"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            y: "20",
                            width: "55",
                            height: "10"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            y: "40",
                            width: "55",
                            height: "10"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const mobile_navbar_NavbarMobile = (NavbarMobile); // <div className="navbar--mobile">
 //     <div className="navbar--mobile_menu">
 //         <form action=" <?= \yii\helpers\Url::to(['category/search']) ?>" method="get"
 //               className="search_form d-sm-block d-md-none">
 //             <div className="input-group">
 //                 <input type="text" name="q" className="form-control" placeholder="Что вы хотите найти?"
 //                        aria-label="Search item" aria-describedby="basic-addon2">
 //                     <div className="input-group-append">
 //                         <button className="btn search-button" type="submit">
 //                             <?= \yii\helpers\Html::img("@web/images/icons/search.svg", ['alt' => 'Поиск']) ?>
 //                         </button>
 //                     </div>
 //             </div>
 //         </form>
 //         <h5>Каталог:</h5>
 //         <?= \app\components\MenuWidget::widget([
 //         ]) ?>
 //         <div>
 //             <a href="<?= \yii\helpers\Url::to(['/about']) ?>">О магазине</a>
 //             <a href="<?= \yii\helpers\Url::to(['/#contacts']) ?>">Контакты</a>
 //         </div>
 //     </div>
 //     <div className="navbar--mobile_icon">
 //         <svg fill="#fff" viewBox="0 0 100 80">
 //             <rect width="55" height="10"></rect>
 //             <rect y="20" width="55" height="10"></rect>
 //             <rect y="40" width="55" height="10"></rect>
 //         </svg>
 //     </div>
 // </div>

;// CONCATENATED MODULE: ./components/Layout.tsx










const Layout = ({ children , categories  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_navbar_NavbarMobile, {
                categories: categories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(catalog_Catalog, {
                categories: categories
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                copyright: "\xa9 2020-" + new Date().getFullYear() + " Made by: Anton Ebers-Hyde"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(signin_Signin, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(signup_Signup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(profile_Profile, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(cart_Cart, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
// EXTERNAL MODULE: ./redux/user/userSlice.ts
var userSlice = __webpack_require__(9096);
// EXTERNAL MODULE: ./redux/feedback/feedbackSlice.ts
var feedbackSlice = __webpack_require__(1817);
// EXTERNAL MODULE: ./redux/order/orderSlice.ts
var orderSlice = __webpack_require__(5449);
;// CONCATENATED MODULE: ./redux/store.ts









const authConfig = {
    key: "auth",
    storage: (storage_default()),
    whitelist: [
        "accessToken"
    ]
};
const userConfig = {
    key: "user",
    storage: (storage_default())
};
const cartConfig = {
    key: "cart",
    storage: (storage_default())
};
const orderConfig = {
    key: "order",
    storage: (storage_default())
};
const rootReducer = (0,toolkit_.combineReducers)({
    auth: (0,external_redux_persist_namespaceObject.persistReducer)(authConfig, authSlice/* default */.ZP),
    user: (0,external_redux_persist_namespaceObject.persistReducer)(userConfig, userSlice/* default */.ZP),
    feedback: feedbackSlice/* default */.ZP,
    order: (0,external_redux_persist_namespaceObject.persistReducer)(orderConfig, orderSlice/* default */.ZP),
    cart: (0,external_redux_persist_namespaceObject.persistReducer)(cartConfig, cartSlice/* default */.ZP),
    ui: uiSlice/* default */.ZP
});
const store = (0,toolkit_.configureStore)({
    reducer: rootReducer,
    devTools: "production" !== "production"
});
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: ./pages/_app.tsx








function MyApp({ Component , pageProps  }) {
    let persistor = (0,external_redux_persist_namespaceObject.persistStore)(redux_store);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
            loading: null,
            persistor: persistor,
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                categories: pageProps.categories,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,560,275,817], () => (__webpack_exec__(3911)));
module.exports = __webpack_exports__;

})();