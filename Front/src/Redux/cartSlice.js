import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userInfo = localStorage.getItem('userInfo');
const token = userInfo ? JSON.parse(userInfo).token : '';

export const addToCart = createAsyncThunk('cartSlice/addToCart', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.post('/api/api/v1/carts', { product: id }, { headers: { token } });
        console.log(response);
        if (response.data.errors) {
            return rejectWithValue(response.data.errors[0].message);
        }
        return response.data
    } catch (err) {
        console.log(err);
        return rejectWithValue(err.response?.data?.error);
    }
});
 
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: null,
        loading: false,
        isSuccess: false,
        error: null
    },
    reducers: {
        resetIsSuccess:(state)=>{
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                console.log('addToCart.fulfilled');
                state.loading = false;
                state.cart = action.payload.cart;
                state.isSuccess = true;
            })
            .addCase(addToCart.rejected, (state, action) => {
                console.log('addToCart.rejected', action);
                state.error = action.payload || 'Failed to add to cart';
                state.loading = false;
                state.isSuccess = false;
            })
    }
});

export const { resetIsSuccess } = cartSlice.actions;
export const cartReducer =  cartSlice.reducer
