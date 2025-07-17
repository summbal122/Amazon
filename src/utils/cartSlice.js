import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice ({
  name: "cart",
  initialState : {
    cartItems : [],
  },
  reducers: {
    addCartItem : (state,action) => {
     const {title , image, price, id} = action.payload
     const existingItem = state.cartItems.find((item) => item.id===id)
     if(existingItem){
      existingItem.quantity  += 1
     } else {
    state.cartItems.push({
      id,
      title,
      image,
      price,
      quantity: 1, // start with quantity 1 if it's a new item
    });
    }}
    ,
    clearItems : (state) => {
      state.cartItems = [];

    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state,action) => {
       const idToRemove = action.payload;
  state.cartItems = state.cartItems.filter((item) => item.id !== idToRemove);
    }
  }
})
export const {addCartItem, clearItems, incrementQuantity, decrementQuantity, removeItem} = cartSlice.actions;
export default cartSlice.reducer;