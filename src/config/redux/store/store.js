import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "../reducers/productsSlice";

export const store = configureStore({
  reducer: {
   product: productSlice,
  },
});
