import React from "react";
import classes from "./Deposits.module.css";
import Card from "../UI/Card/Card";
import SingleTransaction from "./SingleTransaction";
import { useSelector } from "react-redux";
const RecentDeposits = () => {
  let transactions = useSelector((state) => state.transactions.allTransactions);
  let trans = transactions
    .filter((tran) => {
      return tran.transactionType === "deposit";
    })
    .sort((prev, next) => {
      let prevtimeStamp = new Date(prev.date).getTime();
      let nexttimeStamp = new Date(next.date).getTime();
      return nexttimeStamp - prevtimeStamp;
    })
    .map((tran) => {
      return <SingleTransaction key={tran.id} transaction={tran} />;
    });

  return <Card className={`${classes.RecentDeposits}`}>{trans}</Card>;
};

export default RecentDeposits;
