import { createSlice } from "@reduxjs/toolkit";

let applicationsSlice = createSlice({
  name: "received-applications",
  initialState: {
    data: [],
    searchApplication:null
  },
  reducers: {
    approve(state, action) {
      let index = state.data.findIndex((app) => app.id === action.payload);
      if (index > -1) {
        state.data[index].approved = true;
      }
    },
    reject(state, action) {
      let index = state.data.findIndex((app) => app.id === action.payload);
      if (index > -1) {
        state.data[index].rejected = true;
      }
    },
    setApplications(state, action) {
      state.data = action.payload;
    },
    setSearchApplication(state,action){
      state.searchApplication = action.payload
    }
  },
});
export const applicationsActions = applicationsSlice.actions;
export default applicationsSlice.reducer;
