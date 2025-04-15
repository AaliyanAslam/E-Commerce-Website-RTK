import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const data = await axios("https://dummyjson.com/products");
// const data = await response.json();
return data.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.data = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      console.log("error" , action.payload)
      state.isError = true;
    });
  },
});

export default  productSlice.reducer;
