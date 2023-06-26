import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice/AuthSlice";
import transactionReducer from "./Transactions/TransactionSlice";
import applicationReducer from "./Admin/Applications/ApplicationsSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
    applications: applicationReducer
  },
});
export default store;
