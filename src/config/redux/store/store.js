import { configureStore } from "@reduxjs/toolkit";
import {productsReducers} from '../reducers/productsSlice';

export const store = configureStore({
    reducers : {
        products : productsReducers,
    }
})
