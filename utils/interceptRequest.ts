import axios from "axios";
import {refreshAccessToken} from "../redux/auth/authSlice";

export default (thunkAPI) => {
    axios.interceptors.response.use(function
        (response) {
            return response;
        },
        async function (error) {
            const originalRequest = error.config;
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            const status = error.response.status;
            if (status == 401 && !originalRequest._retry) {
                const res = await thunkAPI.dispatch(refreshAccessToken());
                const {token} = res.payload;

                originalRequest._retry = true;
                originalRequest.headers['Authorization'] = `Bearer ${token}`;

                return await axios.request(originalRequest);
            }
        });
}