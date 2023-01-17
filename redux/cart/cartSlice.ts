import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "../store";
import axios from "axios";
import interceptRequest from "../../utils/interceptRequest";
import {async} from "rxjs";
interface CartState {
    items: Array<{id:number, alias:string, categoryAlias: string, productMedia: any, title:string, price: string, old_price: string, quantity: number}>,
    totalCount: number,
    totalPrice: number
}

const initialState:CartState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
}

export const addToCart = createAsyncThunk(
    'cart/addToCard',
    async (product: {id: number, categoryAlias: string, alias: string, title: string, productMedia: string[],
        price: string, old_price: string, quantity: number}, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        interceptRequest(thunkAPI);

        const response = await axios.post(process.env.NEXT_PUBLIC_API_ROOT + "/cart/add",
            {
            product: product.id
        },
            {
            headers: {
                'Authorization': `Bearer ${state.auth.accessToken}`
            }
        });
        return response.data.status == 'ok' ? product : null;
    }
)

export const removeFromCard = createAsyncThunk(
    'cart/removeFromCart',
    async(productId: number, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        interceptRequest(thunkAPI);

        const response = await axios.delete(process.env.NEXT_PUBLIC_API_ROOT + `/cart/remove?id=${productId}`,
            {
                headers: {
                    'Authorization': `Bearer ${state.auth.accessToken}`
                }
            });
        return response.data.status == 'ok' ? productId : null;
    }
)



export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCart: (state, action) => {
          state.items = action.payload.items;
          state.totalPrice = action.payload.totalPrice;
          state.totalCount = action.payload.totalCount;
        },
        resetCart: (state) => {
            return {...initialState};
        },
        addItem: (state, action) => {
          let item = state.items.find(item => item.id === action.payload.id)

          if(item) {
              item.quantity += 1;
          } else {
              state.items.push(action.payload);
          }
          state.totalCount += 1;
          state.totalPrice += action.payload.price;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            state.totalCount -= action.payload.quantity;
            state.totalPrice -= action.payload.price * action.payload.quantity;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                if(action.payload) {
                    let item = state.items.find(item => item.id === action.payload.id)

                    if(item) {
                        item.quantity += 1;
                    } else {
                        item = {id: action.payload.id, categoryAlias: action.payload.categoryAlias, alias: action.payload.alias, productMedia: action.payload.productMedia, title: action.payload.title,
                        price: action.payload.price, old_price: action.payload.old_price, quantity: 1}
                        state.items.push(item);
                    }
                    state.totalCount += 1;
                    state.totalPrice += +action.payload.price;
                }
            })
            .addCase(removeFromCard.fulfilled, (state, action) => {
                if(action.payload) {
                    let item = state.items.find(item => item.id === action.payload);

                    state.totalCount -= item.quantity;
                    state.totalPrice -= +item.price * item.quantity;

                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            })
    }
})

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;