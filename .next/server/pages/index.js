(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6208:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__OVLM4",
	"footer": "Home_footer__zed0_",
	"title": "Home_title__q0Qg4",
	"description": "Home_description__JhekB",
	"code": "Home_code__2i1pD",
	"grid": "Home_grid__npx0i",
	"card": "Home_card__K7aTN",
	"logo": "Home_logo__FLQOc",
	"about_bgr": "Home_about_bgr__rJSED",
	"overlay": "Home_overlay__sMVTo",
	"shop_info": "Home_shop_info__ZlD8r",
	"shop_name": "Home_shop_name__v7Wrj",
	"shop_desc": "Home_shop_desc__thU_Z",
	"teasers": "Home_teasers__RIPgU",
	"teaser": "Home_teaser__Gno2x",
	"offerings__section": "Home_offerings__section__spVZv",
	"warranty__section": "Home_warranty__section__xkz2j",
	"contacts__container": "Home_contacts__container__H4ie6",
	"hot_products__section": "Home_hot_products__section__Fgzoo",
	"contacts__section": "Home_contacts__section__Gk2nj",
	"warranty__text": "Home_warranty__text__rQzd6",
	"map_box": "Home_map_box__oPgZ0"
};


/***/ }),

/***/ 5488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(6208);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/product-card/ProductCard.tsx
var ProductCard = __webpack_require__(3935);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__(7174);
// EXTERNAL MODULE: ./redux/feedback/feedbackSlice.ts
var feedbackSlice = __webpack_require__(1817);
// EXTERNAL MODULE: ./components/withSpinnerOverlay.tsx
var withSpinnerOverlay = __webpack_require__(8482);
;// CONCATENATED MODULE: external "react-client-captcha"
const external_react_client_captcha_namespaceObject = require("react-client-captcha");
var external_react_client_captcha_default = /*#__PURE__*/__webpack_require__.n(external_react_client_captcha_namespaceObject);
;// CONCATENATED MODULE: ./components/feedback/FeedbackForm.tsx





const FeedbackForm = (props)=>{
    const { 0: alertShow , 1: setAlertShow  } = (0,external_react_.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            props.feedbackResponse.data && alertShow && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                variant: props.feedbackResponse.status == "ok" ? "success" : "danger",
                className: "text-center",
                onClose: ()=>setAlertShow(false)
                ,
                dismissible: true,
                children: props.feedbackResponse.data
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: (e)=>{
                    e.preventDefault();
                    props.handleFeedbackSubmit();
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        type: "text",
                                        name: "name",
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        value: props.name,
                                        placeholder: "Full Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.nameError
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        type: "text",
                                        name: "email",
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        value: props.email,
                                        placeholder: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.emailError
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                        className: "mb-3",
                        as: "textarea",
                        rows: 6,
                        name: "message",
                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                        ,
                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                        ,
                        value: props.message,
                        placeholder: "Enter your message..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                        className: "text-danger",
                        children: props.messageError
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_client_captcha_default()), {
                                    captchaCode: (code)=>props.setCaptchaCode(code)
                                    ,
                                    charsCount: 6,
                                    width: 200,
                                    fontFamily: "Rubik Puddles",
                                    fontSize: 32
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                        onBlur: (event)=>props.handleFieldBlur(event.target.name)
                                        ,
                                        type: "text",
                                        placeholder: "Enter the CAPTCHA",
                                        onChange: (e)=>props.handleFieldChange(e.target.name, e.target.value)
                                        ,
                                        value: props.enteredCaptchaCode,
                                        name: "enteredCaptchaCode"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
                                        className: "text-danger",
                                        children: props.enteredCaptchaCodeError
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        variant: "success",
                        type: "submit",
                        disabled: props.isSubmitDisabled,
                        children: "Submit"
                    }),
                    props.isFeedbackFetching && /*#__PURE__*/ jsx_runtime_.jsx(withSpinnerOverlay/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const feedback_FeedbackForm = (FeedbackForm);

;// CONCATENATED MODULE: ./components/feedback/Feedback.tsx





const Feedback = ()=>{
    const { 0: name1 , 1: setName  } = (0,external_react_.useState)("");
    const { 0: nameError , 1: setNameError  } = (0,external_react_.useState)("");
    const { 0: isNameValid , 1: setNameValid  } = (0,external_react_.useState)(false);
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: emailError , 1: setEmailError  } = (0,external_react_.useState)("");
    const { 0: isEmailValid , 1: setEmailValid  } = (0,external_react_.useState)(false);
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: messageError , 1: setMessageError  } = (0,external_react_.useState)("");
    const { 0: isMessageValid , 1: setMessageValid  } = (0,external_react_.useState)(false);
    const { 0: captchaCode , 1: setCaptchaCode  } = (0,external_react_.useState)("");
    const { 0: enteredCaptchaCode , 1: setEnteredCaptchaCode  } = (0,external_react_.useState)("");
    const { 0: enteredCaptchaCodeError , 1: setEnteredCaptchaCodeError  } = (0,external_react_.useState)("");
    const { 0: isEnteredCaptchaCodeValid , 1: setEnteredCaptchaCodeValid  } = (0,external_react_.useState)(false);
    const { 0: isSubmitDisabled , 1: setSubmitDisabled  } = (0,external_react_.useState)(true);
    const feedbackResponse = (0,hooks/* useAppSelector */.C)((state)=>state.feedback.feedbackResponse
    );
    const isFeedbackFetching = (0,hooks/* useAppSelector */.C)((state)=>state.feedback.isFetching
    );
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleFieldChange = (name, value)=>{
        switch(name){
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "message":
                setMessage(value);
                break;
            case "enteredCaptchaCode":
                setEnteredCaptchaCode(value);
                break;
        }
    };
    const handleFieldBlur = (field)=>{
        switch(field){
            case "name":
                if (name1 && name1.length < 3 || name1 && name1.length > 255) {
                    setNameError("Too short or long value");
                    setNameValid(false);
                    console.log(nameError);
                } else if (name1 && !name1.match("^[\u0430-\u044F\u0410-\u042F\u0451\u0401a-zA-Z ]+$")) {
                    setNameError("The field should contain only characters and spaces");
                    setNameValid(false);
                } else {
                    setNameError("");
                    setNameValid(true);
                }
                break;
            case "email":
                if (!email) setEmailError("The field should be completed");
                else if (email.length < 3 || email.length > 30) setEmailError("The field should contain form 3 to 30 characters");
                else if (!email.match("^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$")) setEmailError("Wrong email format");
                else {
                    setEmailError("");
                    setEmailValid(true);
                }
                break;
            case "message":
                if (message && message.length < 3) {
                    setMessageError("The message is too short");
                    setMessageValid(false);
                } else {
                    setMessageError("");
                    setMessageValid(true);
                }
                break;
            case "enteredCaptchaCode":
                if (enteredCaptchaCode !== captchaCode) setEnteredCaptchaCodeError("Entered CAPTCHA doesn't match");
                else {
                    setEnteredCaptchaCodeError("");
                    setEnteredCaptchaCodeValid(true);
                }
                break;
        }
    };
    const handleFeedbackSubmit = ()=>{
        dispatch((0,feedbackSlice/* sendFeedback */.fA)({
            name: name1,
            email,
            message
        })).then((res)=>{
            if (res.payload.status !== "error") {
                setName("");
                setEmail("");
                setMessage("");
                setEnteredCaptchaCode("");
            }
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (!isNameValid || !isEmailValid || !isMessageValid || !isEnteredCaptchaCodeValid) setSubmitDisabled(true);
        else setSubmitDisabled(false);
    }, [
        isNameValid,
        isEmailValid,
        isMessageValid,
        isEnteredCaptchaCodeValid
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(feedback_FeedbackForm, {
        handleFeedbackSubmit: handleFeedbackSubmit,
        feedbackResponse: feedbackResponse,
        name: name1,
        email: email,
        message: message,
        setCaptchaCode: setCaptchaCode,
        enteredCaptchaCode: enteredCaptchaCode,
        handleFieldChange: handleFieldChange,
        handleFieldBlur: handleFieldBlur,
        nameError: nameError,
        emailError: emailError,
        messageError: messageError,
        enteredCaptchaCodeError: enteredCaptchaCodeError,
        isFeedbackFetching: isFeedbackFetching,
        isSubmitDisabled: isSubmitDisabled
    });
};
/* harmony default export */ const feedback_Feedback = (Feedback);

;// CONCATENATED MODULE: external "react-yandex-maps"
const external_react_yandex_maps_namespaceObject = require("react-yandex-maps");
// EXTERNAL MODULE: ./redux/ui/uiSlice.ts
var uiSlice = __webpack_require__(7646);
;// CONCATENATED MODULE: ./pages/index.tsx












const Home = ({ teasers , specialOffers , categories , products  })=>{
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleCartToggle = ()=>{
        dispatch(uiSlice/* UISlice.actions.toggleCartShown */.No.actions.toggleCartShown());
    };
    const { 0: captchaCode , 1: setCaptchaCode  } = (0,external_react_.useState)("");
    const targetRef = (0,external_react_.useRef)(null);
    const callBackFunction = (entries)=>{
        entries.forEach((entry)=>{
            console.log(entry.intersectionRatio);
            if (entry.intersectionRatio && entry.boundingClientRect.top > 0) {
                document.querySelector(".navbar").classList.toggle("bg-dark");
            }
        });
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    };
    (0,external_react_.useEffect)(()=>{
        const observer = new IntersectionObserver(callBackFunction, options);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);
        return ()=>{
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [
        targetRef,
        options
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Applecart eshop"
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "about",
                className: (Home_module_default()).about_bgr + " overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).overlay
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container d-flex justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Home_module_default()).shop_info + " row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-7",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: (Home_module_default()).shop_name + " text-center",
                                            children: "AppleCart"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (Home_module_default()).shop_desc + " text-justify",
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Attention: the site is made as portfolio project, no real Apple products traded with it."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "btn btn-success",
                                                    children: "More"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Home_module_default()).teasers + " col-lg-5",
                                    children: teasers.map((teaser)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (Home_module_default()).teaser,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/teasers/" + teaser.image
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-right",
                                                    children: teaser.text
                                                })
                                            ]
                                        }, teaser.id)
                                    )
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                ref: targetRef,
                id: "offerings",
                className: (Home_module_default()).offerings__section + " m-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "py-3 text-center display-4",
                            children: "Special offerings"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "my-4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Carousel, {
                            variant: "dark",
                            className: "mb-5",
                            children: specialOffers.map((specialOffer)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.CarouselItem, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "d-block w-100",
                                            src: "/images/special-offers/" + specialOffer.image,
                                            alt: "First slide"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Carousel.Caption, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: specialOffer.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: specialOffer.subtitle
                                                })
                                            ]
                                        })
                                    ]
                                }, specialOffer.id)
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "hot_products",
                className: (Home_module_default()).hot_products__section + " m-auto pb-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "py-3 text-center display-4",
                            children: "Hurry to get!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "my-4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                            children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    lg: "3",
                                    md: "6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                                        product: product,
                                        handleCartToggle: handleCartToggle
                                    })
                                }, product.id)
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "warranty",
                className: (Home_module_default()).warranty__section + " m-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "py-3 text-center display-4",
                            children: "Product Warranty"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "my-4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "w-100 pb-3",
                            src: "/images/warranty.jpg",
                            alt: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Home_module_default()).warranty__text,
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Home_module_default()).warranty__text,
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "contacts",
                className: (Home_module_default()).contacts__section + " m-auto pb-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Home_module_default()).contacts__container + " container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "py-3 text-center display-4",
                            children: "Contacts"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "my-4"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                    md: "6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_yandex_maps_namespaceObject.YMaps, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Home_module_default()).map_box + " mb-3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_yandex_maps_namespaceObject.Map, {
                                                    defaultState: {
                                                        center: [
                                                            59.934961,
                                                            30.360586
                                                        ],
                                                        zoom: 14
                                                    },
                                                    width: "100%",
                                                    height: "100%",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_yandex_maps_namespaceObject.Placemark, {
                                                        geometry: [
                                                            59.934961,
                                                            30.360586
                                                        ],
                                                        options: {
                                                            preset: "islands#darkGreenShoppingCircleIcon",
                                                            iconColor: "#3caa3c"
                                                        }
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Address:"
                                                }),
                                                " \xabSomename\xbb mall\u2014 St. Petersburg, Vosstaniya st., XX/X, 3 floor, room XXX"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Work hours:"
                                                }),
                                                " 10:00 \u2014 22:00"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Phone number:"
                                                }),
                                                " +7 (XXX) 516-XX-XX"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Email:"
                                                }),
                                                " shop@applecart.dev"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                    md: "6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "text-center mb-4",
                                            children: "Ask a Question"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(feedback_Feedback, {})
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
async function getServerSideProps() {
    const response = await external_axios_default().get("https://applecart.dev/api/v1" + "/site/index");
    const teasers = response.data.data.teasers;
    const specialOffers = response.data.data.specialOffers;
    const categories = response.data.data.categories;
    const products = response.data.data.products;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            teasers,
            specialOffers,
            categories,
            products
        }
    };
}
/* harmony default export */ const pages = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [895,664,560,275,935,817], () => (__webpack_exec__(5488)));
module.exports = __webpack_exports__;

})();