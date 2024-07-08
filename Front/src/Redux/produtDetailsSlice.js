import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk('productDetailsSlice/getProductDetails', async (id)=>{
    const res = await axios.get(`/api/api/v1/products/${id}`)
    return res.data.product
})

const productDetailsSlice = createSlice({
    name:"productDetailsSlice",
    initialState: {
        product: null,
        loading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(getProductDetails.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(getProductDetails.fulfilled, (state, action)=>{
            console.log('getProductDetails.fulfilled', action.payload);
            state.loading = false;
            state.product = action.payload;
        })
        builder.addCase(getProductDetails.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const productDetailsReducer =  productDetailsSlice.reducer