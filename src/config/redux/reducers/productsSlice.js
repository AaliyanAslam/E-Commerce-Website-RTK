import { createSlice , nanoid , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk('fetchProducts', async()=>{
    const response = await axios('https://dummyjson.com/products');
    return response.json();
})


const productSlice = createSlice({
name : "products",
initialState : {
    isLoading : false,
    data : null,
}, 
extraReducers : (builder)=> {
    builder.addCase(fetchProducts.fulfilled , (state , action)=> {
       state.isLoading = false;

    })
}




})

export const productsReducers = productSlice.reducers


