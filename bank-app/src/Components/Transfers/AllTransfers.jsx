import React from "react";
import { useSelector } from "react-redux";
import SingleTransaction from "../Deposits/SingleTransaction";
import classes from "./Transfers.module.css";
import Card from "../UI/Card/Card";
const AllTransfers = () => {
  let transactions = useSelector((state) => state.transactions.allTransactions);
 

  let trans = transactions
    ?.filter((tran) => {
      return tran.transactionType === "transfer";
    })
    ?.sort((prev, next) => {
      let prevtimeStamp = new Date(prev.date).getTime();
      let nexttimeStamp = new Date(next.date).getTime();
      return nexttimeStamp - prevtimeStamp;
    })
    ?.map((tran) => {
      return <SingleTransaction key={tran.id} transaction={tran} />;
    });
  return (
    <Card className={`${classes.recentTransfers}`}>
      {trans.length > 0 ? trans : <h3>No Transfers Found</h3>}
    </Card>
  );
};

export default AllTransfers;
