"use strict";
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xJ": () => (/* binding */ signin),
/* harmony export */   "M4": () => (/* binding */ recoverPassword),
/* harmony export */   "uf": () => (/* binding */ signout),
/* harmony export */   "IU": () => (/* binding */ signup),
/* harmony export */   "jb": () => (/* binding */ refreshAccessToken),
/* harmony export */   "Gb": () => (/* binding */ authSlice),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export selectAuth */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9096);
/* harmony import */ var _cart_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7398);
/* harmony import */ var _order_orderSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5449);





const initialState = {
    accessToken: "",
    authMessage: "",
    signupMessage: "",
    recoverMessage: "",
    recoverError: "",
    isFetching: false
};
const signin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/signin", async (credentials, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://applecart.dev/api/v1" + "/user/login", {
            username: credentials.login,
            password: credentials.password
        });
        if (response.data.status == "ok") {
            thunkAPI.dispatch(_user_userSlice__WEBPACK_IMPORTED_MODULE_2__/* .userSlice.actions.setUserData */ .sv.actions.setUserData(response.data.userData));
            if (response.data.cartData) thunkAPI.dispatch(_cart_cartSlice__WEBPACK_IMPORTED_MODULE_3__/* .cartSlice.actions.setCart */ .Ao.actions.setCart(response.data.cartData));
            if (response.data.ordersData) thunkAPI.dispatch(_order_orderSlice__WEBPACK_IMPORTED_MODULE_4__/* .orderSlice.actions.setOrders */ .zM.actions.setOrders(response.data.ordersData));
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error
        });
    }
});
const recoverPassword = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/recover", async (email, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://applecart.dev/api/v1" + "/user/recover", {
            email: email
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error
        });
    }
});
const signout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/signout", async (___, thunkAPI)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("https://applecart.dev/api/v1" + "/user/logout");
    if (response.data.status == "ok") {
        thunkAPI.dispatch(_user_userSlice__WEBPACK_IMPORTED_MODULE_2__/* .userSlice.actions.resetUserData */ .sv.actions.resetUserData());
        thunkAPI.dispatch(_cart_cartSlice__WEBPACK_IMPORTED_MODULE_3__/* .cartSlice.actions.resetCart */ .Ao.actions.resetCart());
        thunkAPI.dispatch(_order_orderSlice__WEBPACK_IMPORTED_MODULE_4__/* .orderSlice.actions.resetOrders */ .zM.actions.resetOrders());
    }
    return response.data;
});
const signup = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/signup", async (userData, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://applecart.dev/api/v1" + "/user/signup", {
            username: userData.login,
            real_name: userData.realName,
            email: userData.email,
            phone_number: userData.phone,
            password: userData.password,
            password_confirm: userData.passwordConfirm
        });
        if (response.data.status == "ok") {
            thunkAPI.dispatch(_user_userSlice__WEBPACK_IMPORTED_MODULE_2__/* .userSlice.actions.setUserData */ .sv.actions.setUserData(response.data.data));
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error
        });
    }
});
const refreshAccessToken = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/refreshAccessToken", async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://applecart.dev/api/v1" + "/user/refresh-token");
    return response.data;
});
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // setCurrentUser: (state, action: PayloadAction<object>) => {
        //     state.currentUser = action.payload;
        // },
        setAccessToken: (state, action)=>{
            state.accessToken = action.payload;
        },
        removeAccessToken: (state)=>{
            state.accessToken = "";
        },
        setAuthMessage: (state, action)=>{
            state.authMessage = action.payload;
        },
        setRecoverMessage: (state, action)=>{
            state.recoverMessage = action.payload;
        },
        setRecoverError: (state, action)=>{
            state.recoverError = action.payload;
        },
        removeAuthMessage: (state)=>{
            state.authMessage = "";
        },
        setSignupMessage: (state, action)=>{
            state.signupMessage = action.payload;
        },
        removeSignupMessage: (state)=>{
            state.signupMessage = "";
        },
        removeRecoverMessage: (state)=>{
            state.recoverMessage = "";
        },
        removeRecoverError: (state)=>{
            state.recoverError = "";
        },
        setIsFetching: (state, action)=>{
            state.isFetching = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(refreshAccessToken.fulfilled, (state, action)=>{
            if (action.payload.status == "ok") {
                state.accessToken = action.payload.token;
            }
        }).addCase(signin.pending, (state)=>{
            state.isFetching = true;
        }).addCase(signin.fulfilled, (state, action)=>{
            state.isFetching = false;
            if (action.payload.status == "ok") {
                state.authMessage = "";
                state.accessToken = action.payload.token;
            } else state.authMessage = action.payload.data;
        }).addCase(signup.pending, (state)=>{
            state.isFetching = true;
        }).addCase(signup.fulfilled, (state, action)=>{
            state.isFetching = false;
            if (action.payload.status == "ok") {
                state.signupMessage = "";
                state.accessToken = action.payload.token;
            } else state.signupMessage = action.payload.data;
        }).addCase(recoverPassword.pending, (state)=>{
            state.isFetching = true;
        }).addCase(recoverPassword.fulfilled, (state, action)=>{
            state.isFetching = false;
            if (action.payload.status == "ok") {
                state.recoverError = "";
                state.recoverMessage = action.payload.data;
            } else state.recoverError = action.payload.data;
        }).addCase(signout.fulfilled, (state, action)=>{
            if (action.payload.status == "ok") {
                state.accessToken = "";
            }
        });
    }
});
const selectAuth = (state)=>state.auth
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 7398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "tY": () => (/* binding */ removeFromCard),
/* harmony export */   "Ao": () => (/* binding */ cartSlice),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export selectCart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_interceptRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4862);



const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
};
const addToCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cart/addToCard", async (product, thunkAPI)=>{
    const state = thunkAPI.getState();
    (0,_utils_interceptRequest__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(thunkAPI);
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://applecart.dev/api/v1" + "/cart/add", {
        product: product.id
    }, {
        headers: {
            "Authorization": `Bearer ${state.auth.accessToken}`
        }
    });
    return response.data.status == "ok" ? product : null;
});
const removeFromCard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cart/removeFromCart", async (productId, thunkAPI)=>{
    const state = thunkAPI.getState();
    (0,_utils_interceptRequest__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(thunkAPI);
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("https://applecart.dev/api/v1" + `/cart/remove?id=${productId}`, {
        headers: {
            "Authorization": `Bearer ${state.auth.accessToken}`
        }
    });
    return response.data.status == "ok" ? productId : null;
});
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCart: (state, action)=>{
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
            state.totalCount = action.payload.totalCount;
        },
        resetCart: (state)=>{
            return {
                ...initialState
            };
        },
        addItem: (state, action)=>{
            let item1 = state.items.find((item)=>item.id === action.payload.id
            );
            if (item1) {
                item1.quantity += 1;
            } else {
                state.items.push(action.payload);
            }
            state.totalCount += 1;
            state.totalPrice += action.payload.price;
        },
        removeItem: (state, action)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload.id
            );
            state.totalCount -= action.payload.quantity;
            state.totalPrice -= action.payload.price * action.payload.quantity;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(addToCart.fulfilled, (state, action)=>{
            if (action.payload) {
                let item2 = state.items.find((item)=>item.id === action.payload.id
                );
                if (item2) {
                    item2.quantity += 1;
                } else {
                    item2 = {
                        id: action.payload.id,
                        categoryAlias: action.payload.categoryAlias,
                        alias: action.payload.alias,
                        productMedia: action.payload.productMedia,
                        title: action.payload.title,
                        price: action.payload.price,
                        old_price: action.payload.old_price,
                        quantity: 1
                    };
                    state.items.push(item2);
                }
                state.totalCount += 1;
                state.totalPrice += +action.payload.price;
            }
        }).addCase(removeFromCard.fulfilled, (state, action)=>{
            if (action.payload) {
                let item4 = state.items.find((item)=>item.id === action.payload
                );
                state.totalCount -= item4.quantity;
                state.totalPrice -= +item4.price * item4.quantity;
                state.items = state.items.filter((item)=>item.id !== action.payload
                );
            }
        });
    }
});
const selectCart = (state)=>state.cart
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 7174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch),
/* harmony export */   "C": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()
;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 5449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fS": () => (/* binding */ addOrder),
/* harmony export */   "sl": () => (/* binding */ cancelOrder),
/* harmony export */   "zM": () => (/* binding */ orderSlice),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export selectOrder */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_interceptRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4862);
/* harmony import */ var _cart_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7398);




const initialState = {
    orderResponse: "",
    ordersQuantity: 0,
    orders: [],
    isFetching: false
};
const addOrder = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("order/create", async (orderData, thunkAPI)=>{
    const state = thunkAPI.getState();
    (0,_utils_interceptRequest__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(thunkAPI);
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://applecart.dev/api/v1" + "/order/create", orderData);
    if (response.data.status == "ok") {
        thunkAPI.dispatch(_cart_cartSlice__WEBPACK_IMPORTED_MODULE_3__/* .cartSlice.actions.resetCart */ .Ao.actions.resetCart());
        thunkAPI.dispatch(orderSlice.actions.setOrders(response.data.data));
        thunkAPI.dispatch(orderSlice.actions.setOrderResponse(response.data.message));
    }
    return response.data;
});
const cancelOrder = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("order/cancel", async (orderId, thunkAPI)=>{
    const state = thunkAPI.getState();
    (0,_utils_interceptRequest__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(thunkAPI);
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("https://applecart.dev/api/v1" + `/order/cancel?id=${orderId}`, {
        headers: {
            "Authorization": `Bearer ${state.auth.accessToken}`
        }
    });
    return response.data.status == "ok" ? orderId : null;
});
const orderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "order",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // setCurrentUser: (state, action: PayloadAction<object>) => {
        //     state.currentUser = action.payload;
        // },
        setOrderResponse: (state, action)=>{
            state.orderResponse = action.payload;
        },
        setOrders: (state, action)=>{
            state.ordersQuantity = action.payload.quantity;
            state.orders = action.payload.data;
        },
        resetOrders: (state)=>{
            return {
                ...initialState
            };
        },
        setIsFetching: (state, action)=>{
            state.isFetching = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(addOrder.fulfilled, (state, action)=>{
            state.isFetching = false;
            state.orderResponse = action.payload.message;
            state.ordersQuantity = action.payload.data.quantity;
            state.orders = action.payload.data.data;
        }).addCase(addOrder.pending, (state)=>{
            state.isFetching = true;
        }).addCase(cancelOrder.fulfilled, (state, action)=>{
            let order1 = state.orders.find((order)=>order.id === action.payload
            );
            order1.status = "Cancelled";
        });
    }
});
const selectOrder = (state)=>state.feedback
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderSlice.reducer);


/***/ }),

/***/ 9096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sv": () => (/* binding */ userSlice),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetchUserData, selectUser */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8231);



// Define the initial state using that type
const initialState = {
    id: null,
    username: "",
    real_name: "",
    email: "",
    phone_number: ""
};
const fetchUserData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/fetchUserData", async (___, thunkAPI)=>{
    const state = thunkAPI.getState();
    axios__WEBPACK_IMPORTED_MODULE_1___default().interceptors.response.use(function(response) {
        return response;
    }, async function(error) {
        const originalRequest = error.config;
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status;
        if (status == 401 && !originalRequest._retry) {
            const res = await thunkAPI.dispatch((0,_auth_authSlice__WEBPACK_IMPORTED_MODULE_2__/* .refreshAccessToken */ .jb)());
            const { token  } = res.payload;
            originalRequest._retry = true;
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return await axios__WEBPACK_IMPORTED_MODULE_1___default().request(originalRequest);
        }
    });
    const response1 = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://applecart.dev/api/v1" + "/user/me", {
        headers: {
            "Authorization": `Bearer ${state.auth.accessToken}`
        }
    });
    return response1.data;
});
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserData: (state, action)=>{
            return {
                ...action.payload
            };
        },
        resetUserData: (state)=>{
            return {
                ...initialState
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUserData.fulfilled, (state, action)=>{
            if (action.payload.status == "ok") {
                return {
                    ...action.payload.data
                };
            }
        });
    }
});
// Other code such as selectors can use the imported `RootState` type
const selectUser = (state)=>state.user
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 1152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(integer) {
    let int = String(Math.trunc(integer));
    if (int.length <= 3) return int;
    let space = 0;
    let number = "";
    for(let i = int.length - 1; i >= 0; i--){
        if (space == 3) {
            number = "." + number;
            space = 0;
        }
        number = int.charAt(i) + number;
        space++;
    }
    return number;
};


/***/ }),

/***/ 4862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8231);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((thunkAPI)=>{
    axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(function(response) {
        return response;
    }, async function(error) {
        const originalRequest = error.config;
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status;
        if (status == 401 && !originalRequest._retry) {
            const res = await thunkAPI.dispatch((0,_redux_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .refreshAccessToken */ .jb)());
            const { token  } = res.payload;
            originalRequest._retry = true;
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return await axios__WEBPACK_IMPORTED_MODULE_0___default().request(originalRequest);
        }
    });
});


/***/ })

};
;