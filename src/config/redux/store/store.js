import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "../reducers/productsSlice";
import cartSlice from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
   product: productSlice,
   cart : cartSlice,
  },
});
