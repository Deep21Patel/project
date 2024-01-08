import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartitems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const exstringItem = state.cartitems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!exstringItem) {
        state.cartitems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        exstringItem.quantity++;
        exstringItem.totalPrice =
          Number(exstringItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartitems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      // console.log(state.totalQuantity);
      // console.log(state);
      // console.log(newItem);
      console.log(state.totalAmount);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const exstingItem = state.cartitems.find((item) => item.id === id);

      if (exstingItem) {
        state.cartitems = state.cartitems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - exstingItem.quantity;
      }
      state.totalAmount = state.cartitems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
