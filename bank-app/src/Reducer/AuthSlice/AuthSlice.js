import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isAuth: localStorage.getItem("user-key") ? true : false,
    token: localStorage.getItem("user-key") || null,
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("user-key", action.payload);
      state.isAuth = true;
      state.token = action.payload;
    },
    logout(state) {
      localStorage.removeItem("user-key");
      state.isAuth = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
