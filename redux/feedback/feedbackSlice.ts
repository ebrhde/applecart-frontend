import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";

interface FeedbackState {
    feedbackResponse: {status: string, data: string},
    isFetching: boolean
}

const initialState:FeedbackState = {
    feedbackResponse: {status: '', data: ''},
    isFetching: false
}

export const sendFeedback = createAsyncThunk(
    'site/feedback',
    async (feedbackData:{name: string, email: string, message: string}, thunkAPI) => {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_ROOT + "/site/feedback", {
                name: feedbackData.name,
                email: feedbackData.email,
                body: feedbackData.message
            });

            if(response.data.status == 'ok') {
                thunkAPI.dispatch(feedbackSlice.actions.setFeedbackResponse(response.data.data));
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error });
        }
    }
);

export const feedbackSlice = createSlice({
    name: 'feedback',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // setCurrentUser: (state, action: PayloadAction<object>) => {
        //     state.currentUser = action.payload;
        // },
        setFeedbackResponse: (state, action) => {
          state.feedbackResponse = action.payload
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendFeedback.fulfilled, (state, action) => {
                state.isFetching = false;
                state.feedbackResponse = action.payload;
            })
            .addCase(sendFeedback.pending   , (state) => {
                state.isFetching = true;
            })
    }
})

export const selectFeedback = (state: RootState) => state.feedback;

export default feedbackSlice.reducer;