import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleTransaction from "../Deposits/SingleTransaction";
import Card from "../UI/Card/Card";
import classes from "./AllTransactions.module.css";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
const AllTransactions = () => {
  let transactions = useSelector((state) => state.transactions.allTransactions);
  let {token} = useSelector(state=>state.auth);
  let [showModel, setShowModel] = useState(false);
  //   sort((prev, next) => {
  //     let prevtimeStamp = new Date(prev.date).getTime();
  //     let nexttimeStamp = new Date(next.date).getTime();
  //     return nexttimeStamp - prevtimeStamp;
  //   })
  let trans = transactions.map((tran) => {
    return (
      <>
        <SingleTransaction
            showModel={showModel}
          onClick={setShowModel}
          key={tran.id}
          transaction={tran}
        />
      </>
    );
  });
  return (
    <Card className={`${classes.recentTransfers}`}>
      {trans?.length > 0 ? trans : <h3>No Transfers Found</h3>}
    </Card>
  );
};

export default AllTransactions;
