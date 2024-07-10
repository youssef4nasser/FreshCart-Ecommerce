import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('getAllProductsSlice/getAllProducts', async ()=>{
    const res = await axios.get(`/api/v1/products`)
    return res.data.products
})

const getAllProductsSlice = createSlice({
    name:"getAllProductsSlice",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(getAllProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const getAllProductsReducer =  getAllProductsSlice.reducer