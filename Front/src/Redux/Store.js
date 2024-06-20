import {configureStore} from '@reduxjs/toolkit';
import { categoryReducer } from './categorySlice.js';
import authReducer from "./authSlice.js"
import produtDetailsReducer from './produtDetailsSlice.js';
import produtsReducer from './produtsSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoryReducer,
        allProduts: produtsReducer,
        produtDetails: produtDetailsReducer
    },
    devTools: true
})