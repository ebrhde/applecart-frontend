import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import interceptRequest from "../../utils/interceptRequest";
import {cartSlice} from "../cart/cartSlice";

interface OrderState {
    orderResponse: string,
    ordersQuantity: number,
    orders: Array<{id: number, status: string, created: string, quantity: number, sum: number,
        items: {id: number, categoryAlias: string, alias: string, title: string, quantity: number, price: number, productThumb: string}[]}>,
    isFetching: boolean
}

const initialState:OrderState = {
    orderResponse: '',
    ordersQuantity: 0,
    orders: [],
    isFetching: false
}

export const addOrder = createAsyncThunk(
    'order/create',
    async (orderData: { name: string, phone: string, address: string, note: string }, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        interceptRequest(thunkAPI);

        const response = await axios.post(process.env.NEXT_PUBLIC_API_ROOT + "/order/create", orderData);

        if (response.data.status == 'ok') {
            thunkAPI.dispatch(cartSlice.actions.resetCart());
            thunkAPI.dispatch(orderSlice.actions.setOrders(response.data.data))
            thunkAPI.dispatch(orderSlice.actions.setOrderResponse(response.data.message));
        }
        return response.data;
    }
);

export const cancelOrder = createAsyncThunk(
    'order/cancel',
    async (orderId: number, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        interceptRequest(thunkAPI);

        const response = await axios.delete(process.env.NEXT_PUBLIC_API_ROOT + `/order/cancel?id=${orderId}`, {
            headers: {
                'Authorization': `Bearer ${state.auth.accessToken}`
            }
        });

        return response.data.status == 'ok' ? orderId : null;
    }
);

export const orderSlice = createSlice({
    name: 'order',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // setCurrentUser: (state, action: PayloadAction<object>) => {
        //     state.currentUser = action.payload;
        // },
        setOrderResponse: (state, action) => {
          state.orderResponse = action.payload
        },
        setOrders: (state, action) => {
            state.ordersQuantity = action.payload.quantity;
            state.orders = action.payload.data;
        },
        resetOrders: (state) => {
            return {...initialState};
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addOrder.fulfilled, (state, action) => {
                state.isFetching = false;
                state.orderResponse = action.payload.message;
                state.ordersQuantity = action.payload.data.quantity;
                state.orders = action.payload.data.data;
            })
            .addCase(addOrder.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(cancelOrder.fulfilled, (state, action) => {
                let order = state.orders.find(order => order.id === action.payload);
                order.status = "Cancelled";
            })
    }
})

export const selectOrder = (state: RootState) => state.feedback;

export default orderSlice.reducer;