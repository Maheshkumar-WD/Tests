import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAllTransactions } from "../../utils/useTransactions";
import { transactionsActions } from "../../Reducer/Transactions/TransactionSlice";

const DashboardPage = () => {
  let userId = useSelector((state) => state.auth.token);
  let dispatch = useDispatch();
  let [transaction, error] = useAllTransactions(userId);
  useEffect(() => {
    if (!error) {
      dispatch(transactionsActions.setTransactions(transaction));
    }
    
  },[dispatch, error, transaction]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
