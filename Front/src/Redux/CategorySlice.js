import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk('categorySlice/getCategories', async ()=>{
    const res = await axios.get('/api/api/v1/categories');
    return res.data.category;
})

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState:{categories: [], isLoding: false, error: null },
    extraReducers: (builder)=>{
        builder.addCase(getCategories.pending, (state)=>{
            state.isLoding = true;
        }),
        builder.addCase(getCategories.fulfilled, (state, action)=>{
            state.categories = action.payload;
            state.isLoding = false;
        }),
        builder.addCase(getCategories.rejected, (state, action)=>{
            state.error = action.error.message;
            state.isLoding = false;
        })
    }
})

export default categorySlice.reducer;