import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import {userSlice} from "../user/userSlice";
import {cartSlice} from "../cart/cartSlice";
import {orderSlice} from "../order/orderSlice";

interface AuthState {
    accessToken: string,
    authMessage: string,
    signupMessage: string,
    recoverMessage: string,
    recoverError: string
    isFetching: boolean
}

const initialState:AuthState = {
    accessToken: '',
    authMessage: '',
    signupMessage: '',
    recoverMessage: '',
    recoverError: '',
    isFetching: false
}

export const signin = createAsyncThunk(
    'user/signin',
    async (credentials:{login:string, password:string}, thunkAPI) => {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_ROOT + "/user/login", {
                username: credentials.login,
                password: credentials.password
            });

            if(response.data.status == 'ok') {
                thunkAPI.dispatch(userSlice.actions.setUserData(response.data.userData));
                if(response.data.cartData) thunkAPI.dispatch(cartSlice.actions.setCart(response.data.cartData));
                if(response.data.ordersData) thunkAPI.dispatch(orderSlice.actions.setOrders(response.data.ordersData));
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error });
        }
    }
);

export const recoverPassword = createAsyncThunk(
    'user/recover',
    async (email: string, thunkAPI) => {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_ROOT + "/user/recover", {
                email: email
            });

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error });
        }
    }
);

export const signout = createAsyncThunk(
    'user/signout',
    async (___, thunkAPI) => {
        const response = await axios.delete(process.env.NEXT_PUBLIC_API_ROOT + "/user/logout");
        if(response.data.status == 'ok') {
            thunkAPI.dispatch(userSlice.actions.resetUserData());
            thunkAPI.dispatch(cartSlice.actions.resetCart());
            thunkAPI.dispatch(orderSlice.actions.resetOrders());
        }
        return response.data;
    }
);

export const signup = createAsyncThunk(
    'user/signup',
    async (userData: {login:string, realName: string, email:string, phone: string, password:string, passwordConfirm: string}, thunkAPI) => {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_ROOT + "/user/signup", {
                username: userData.login,
                real_name: userData.realName,
                email: userData.email,
                phone_number: userData.phone,
                password: userData.password,
                password_confirm: userData.passwordConfirm
            });
            if(response.data.status == 'ok') {
                thunkAPI.dispatch(userSlice.actions.setUserData(response.data.data));
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error });
        }
    }
);

export const refreshAccessToken = createAsyncThunk(
    'user/refreshAccessToken',
    async () => {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_ROOT + "/user/refresh-token");
        return response.data;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // setCurrentUser: (state, action: PayloadAction<object>) => {
        //     state.currentUser = action.payload;
        // },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        removeAccessToken: (state) => {
            state.accessToken = '';
        },
        setAuthMessage: (state, action) => {
            state.authMessage = action.payload;
        },
        setRecoverMessage: (state, action) => {
            state.recoverMessage = action.payload;
        },
        setRecoverError: (state, action) => {
            state.recoverError = action.payload;
        },
        removeAuthMessage: (state) => {
            state.authMessage = '';
        },
        setSignupMessage: (state, action) => {
            state.signupMessage = action.payload;
        },
        removeSignupMessage: (state) => {
            state.signupMessage = '';
        },
        removeRecoverMessage: (state) => {
            state.recoverMessage = '';
        },
        removeRecoverError: (state) => {
            state.recoverError = '';
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(refreshAccessToken.fulfilled, (state, action) => {
                if(action.payload.status == 'ok') {
                    state.accessToken = action.payload.token;
                }
            })
            .addCase(signin.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isFetching = false;
                if(action.payload.status == "ok") {
                    state.authMessage = '';
                    state.accessToken = action.payload.token;
                } else state.authMessage = action.payload.data;
            })
            .addCase(signup.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isFetching = false;
                if(action.payload.status == "ok") {
                    state.signupMessage = '';
                    state.accessToken = action.payload.token
                } else state.signupMessage = action.payload.data;
            })
            .addCase(recoverPassword.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(recoverPassword.fulfilled, (state, action) => {
                state.isFetching = false;
                if (action.payload.status == "ok") {
                    state.recoverError = '';
                    state.recoverMessage = action.payload.data;
                } else state.recoverError = action.payload.data;
            })
            .addCase(signout.fulfilled, (state, action) => {
                if(action.payload.status == "ok") {
                    state.accessToken = '';
                }
            })
    }
})

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;