import React from "react";
import AllTransfers from "../../../Components/Transfers/AllTransfers";
import Transfer from "../../../Components/Transfers/Transfer";
import classes from "./TransferPage.module.css";
const TransferPage = () => {
  return (
    <div className={classes.transferPage}>
      <AllTransfers />
      <Transfer />
    </div>
  );
};

export default TransferPage;
