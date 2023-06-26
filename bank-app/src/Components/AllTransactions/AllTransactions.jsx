import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleTransaction from "../Deposits/SingleTransaction";
import Card from "../UI/Card/Card";
import classes from "./AllTransactions.module.css";
const AllTransactions = () => {
  let transactions = useSelector((state) => state.transactions.allTransactions);
  let [showModel, setShowModel] = useState(false);

  let trans = transactions.map((tran) => {
    return (
      <SingleTransaction
        showModel={showModel}
        onClick={setShowModel}
        key={tran.id}
        transaction={tran}
      />
    );
  });
  return (
    <Card className={`${classes.recentTransfers}`}>
      {trans?.length > 0 ? trans : <h3>No Transfers Found</h3>}
    </Card>
  );
};

export default AllTransactions;
