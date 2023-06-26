import { createSlice } from "@reduxjs/toolkit";
// let userInfo =
const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isAuth:
      JSON.parse(localStorage.getItem("user-key"))?.token !== undefined
        ? true
        : false,
    token: JSON.parse(localStorage.getItem("user-key"))?.token || null,
    isAdmin: JSON.parse(localStorage.getItem("user-key"))?.userType === "admin",
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("user-key", JSON.stringify(action.payload));
      state.isAuth = true;
      state.token = action.payload.token;
      state.isAdmin = action.payload.userType === "admin";
    },
    logout(state) {
      localStorage.removeItem("user-key");
      state.isAuth = false;
      state.token = null;
      state.isAdmin = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
