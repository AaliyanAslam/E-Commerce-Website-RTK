import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },

  reducers: {
    addTotalPriceAndQuaintity: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      state.totalPrice = total;
    },

    addToCarts: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      addTotalPriceAndQuaintity(state);
    },

    increaseQ: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
      addTotalPriceAndQuaintity(state);
    },

    decreaseQ: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 0) item.quantity -= 1;
      addTotalPriceAndQuaintity(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      addTotalPriceAndQuaintity(state);
    },
  },
});

export const {
  addToCarts,
  increaseQ,
  decreaseQ,
  addTotalPriceAndQuaintity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
