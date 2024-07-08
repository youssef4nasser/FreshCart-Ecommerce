import {configureStore} from '@reduxjs/toolkit';
import { categoryReducer } from './categorySlice.js';
import authReducer from "./authSlice.js"
import produtDetailsReducer from './produtDetailsSlice.js';
import produtsReducer from './produtsSlice.js';
import cartReducer from './cartSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoryReducer,
        allProduts: produtsReducer,
        cart: cartReducer,
        produtDetails: produtDetailsReducer
    },
    devTools: true
})