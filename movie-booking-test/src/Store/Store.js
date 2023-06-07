import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./Reducers/Slices/ShowSlice";

const store = configureStore({
  reducer: {
    shows: showReducer,
  },
});

export {store}
