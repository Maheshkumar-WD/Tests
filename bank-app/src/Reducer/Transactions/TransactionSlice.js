import { createSlice } from "@reduxjs/toolkit";

const TransactionSlice = createSlice({
  name: "transactions",
  initialState: {
    allTransactions: [],
  },
  reducers: {
    setTransactions(state, action) {
      state.allTransactions = action.payload;
    },
    setSingleTransaction(state, action) {
      state.allTransactions = [...state.allTransactions, action.payload];
    },
  },
});

export const transactionsActions = TransactionSlice.actions;
export default TransactionSlice.reducer;
