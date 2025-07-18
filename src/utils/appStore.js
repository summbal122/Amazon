import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import cartReducer from "./cartSlice"
import searchReducer from "./searchSlice"
const appStore = configureStore({
  reducer : {
    products: productsReducer,
    cart: cartReducer,
    search: searchReducer,
  }
  
})
export default appStore;