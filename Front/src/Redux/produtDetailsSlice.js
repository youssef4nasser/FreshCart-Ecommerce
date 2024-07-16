import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const getProductDetails = createAsyncThunk('productDetailsSlice/getProductDetails', async (id)=>{
    const res = await axios.get(`${API_BASE_URL}/api/v1/products/${id}`)
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