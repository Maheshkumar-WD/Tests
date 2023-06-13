import React from "react";
import classes from "./DepositPage.module.css";
import RecentDeposits from "../../../Components/Deposits/RecentDeposits";
import Deposit from "../../../Components/Deposits/Deposit";
const DepositPage = () => {
  return (
    <div className={classes.DepositPage}>
      <RecentDeposits />
      <Deposit />
    </div>
  );
};

export default DepositPage;
