import cartSlice from "./Slices/cartSlice";
import { ConfigureStore } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// const store = configureStore(cartSlice);
export default store;
