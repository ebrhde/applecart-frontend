"use strict";
exports.id = 817;
exports.ids = [817];
exports.modules = {

/***/ 1817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fA": () => (/* binding */ sendFeedback),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports feedbackSlice, selectFeedback */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    feedbackResponse: {
        status: "",
        data: ""
    },
    isFetching: false
};
const sendFeedback = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("site/feedback", async (feedbackData, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://applecart.dev/api/v1" + "/site/feedback", {
            name: feedbackData.name,
            email: feedbackData.email,
            body: feedbackData.message
        });
        if (response.data.status == "ok") {
            thunkAPI.dispatch(feedbackSlice.actions.setFeedbackResponse(response.data.data));
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error
        });
    }
});
const feedbackSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "feedback",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // setCurrentUser: (state, action: PayloadAction<object>) => {
        //     state.currentUser = action.payload;
        // },
        setFeedbackResponse: (state, action)=>{
            state.feedbackResponse = action.payload;
        },
        setIsFetching: (state, action)=>{
            state.isFetching = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(sendFeedback.fulfilled, (state, action)=>{
            state.isFetching = false;
            state.feedbackResponse = action.payload;
        }).addCase(sendFeedback.pending, (state)=>{
            state.isFetching = true;
        });
    }
});
const selectFeedback = (state)=>state.feedback
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedbackSlice.reducer);


/***/ })

};
;