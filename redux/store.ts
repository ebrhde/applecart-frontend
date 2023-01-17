import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import userSlice from "./user/userSlice";
import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";
import feedbackSlice from "./feedback/feedbackSlice";
import orderSlice from "./order/orderSlice";
import uiSlice from "./ui/uiSlice";

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['accessToken']
};

const userConfig = {
    key: 'user',
    storage,
};

const cartConfig = {
    key: 'cart',
    storage,
};

const orderConfig = {
    key: 'order',
    storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authSlice),
    user: persistReducer(userConfig, userSlice),
    feedback: feedbackSlice,
    order: persistReducer(orderConfig, orderSlice),
    cart: persistReducer(cartConfig, cartSlice),
    ui: uiSlice
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
