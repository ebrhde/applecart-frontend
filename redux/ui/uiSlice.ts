import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "../store";

interface UIState {
    isCartShown: boolean,
    isSignupShown: boolean,
    isSigninShown: boolean,
    isProfileShown: boolean,
}

const initialState:UIState = {
    isCartShown: false,
    isSignupShown: false,
    isSigninShown: false,
    isProfileShown: false,
}

export const UISlice = createSlice({
    name: 'ui',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        toggleCartShown: (state) => {
          state.isCartShown = !state.isCartShown
        },
        toggleSignupShown: (state) => {
            state.isSignupShown = !state.isSignupShown
        },
        toggleSigninShown: (state) => {
            state.isSigninShown = !state.isSigninShown
        },
        toggleProfileShown: (state) => {
            state.isProfileShown = !state.isProfileShown
        },
    },
})

export const selectUI = (state: RootState) => state.ui;

export default UISlice.reducer;