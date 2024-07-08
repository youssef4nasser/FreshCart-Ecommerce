import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './authSlice.js';
import { categoryReducer } from './categorySlice.js';
import { productDetailsReducer } from './produtDetailsSlice.js';
import { cartReducer } from './cartSlice.js';
import { getAllProductsReducer } from './produtsSlice.js';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoryReducer,
        allProduts: getAllProductsReducer,
        cart: cartReducer,
        produtDetails: productDetailsReducer
    }
})