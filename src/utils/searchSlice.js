import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name:"search",
  initialState: {
    searchedProducts : [],
  },
  reducers: {
    addSearchedProducts : (state,action) => {
      state.searchedProducts = action.payload;
    } 
  }
})
export const {addSearchedProducts} = searchSlice.actions;
export default searchSlice.reducer;