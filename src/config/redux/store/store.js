import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "../reducers/productsSlice";
import cartSlice from "../reducers/cartSlice";
import modeSlice from '../reducers/modeSlice'

export const store = configureStore({
  reducer: {
   product: productSlice,
   cart : cartSlice,
   modes : modeSlice,
  },
});
