import { createSlice } from "@reduxjs/toolkit";

let showSlice = createSlice({
  name: "show",
  initialState: {
    showsData: [],
    currentShowData: null,
  },
  reducers: {
    setShows(state, action) {
      state.showsData = action.payload;
    },
    setCurrentShow(state, action) {
      state.currentShowData = action.payload;
    },
  },
});
export const showActions = showSlice.actions;
export default showSlice.reducer;
