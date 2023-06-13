import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice/AuthSlice";
import transactionReducer from "./Transactions/TransactionSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
  },
});
export default store;
