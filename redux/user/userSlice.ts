import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import {authSlice, refreshAccessToken} from "../auth/authSlice";


// Define a type for the slice state
interface UserState {
    id: number | null,
    username: string,
    real_name: string,
    email: string,
    phone_number: string
}

// Define the initial state using that type
const initialState:UserState = {
    id: null,
    username: '',
    real_name: '',
    email: '',
    phone_number: '',
}

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (___, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        axios.interceptors.response.use(function
            (response) {
            return response;
        },
            async function (error) {
            const originalRequest = error.config;
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            const status = error.response.status;
            if(status == 401 && !originalRequest._retry) {
                const res = await thunkAPI.dispatch(refreshAccessToken());
                const { token } = res.payload;

                originalRequest._retry = true;
                originalRequest.headers['Authorization'] = `Bearer ${token}`;

                return await axios.request(originalRequest);
            }
        });

        const response = await axios.get(process.env.NEXT_PUBLIC_API_ROOT + "/user/me", {
            headers: {
                'Authorization': `Bearer ${state.auth.accessToken}`
            }
        });
        return response.data;
    }
)

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserData: (state, action) => {
            return {...action.payload};
        },
        resetUserData: (state) => {
            return {...initialState};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.fulfilled, (state, action) => {
                if(action.payload.status == 'ok') {
                    return {...action.payload.data};
                }
            })
    }
})

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;