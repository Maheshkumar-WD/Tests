import React, { useState } from "react";
import classes from "./SingleTransaction.module.css";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import { useFetchUser } from "../../utils/fetchUser";
import { useSelector } from "react-redux";
const SingleTransaction = ({ transaction, onClick }) => {
  let [showModel, setShowModel] = useState(false);
  let { token } = useSelector((state) => state.auth);
  let dateString = new Date(transaction.date).toLocaleString();
  let userData = useFetchUser(
    process.env.REACT_APP_ACCOUNT + `/account_holders/${transaction.user}.json`
  );
  let date = dateString.split(",")[0];
  let time = dateString.split(",")[1];
  let model = showModel && (
    <Modal>
      <div className={classes.modelContent}>
        <main>
          <h4>Transaction Id : {transaction.transactionId} </h4>
          {transaction?.transactionType === "deposit" ? (
            <h4>
              Deposited By :{" "}
              {transaction.user === token ? "self" : userData?.name}
              {transaction.user !== token && (
                <>
                  <h4>Account Number: {userData.accountNumber}</h4>
                  <h4>Phone: {userData.phone}</h4>
                </>
              )}
            </h4>
          ) : (
            <>
              <h4>Paid To: {userData.name}</h4>
              <h4>Account Number: {userData.accountNumber}</h4>
              <h4>Phone: {userData.phone}</h4>
            </>
          )}
        </main>
        <footer>
          <Button varient={"solid"} onClick={() => setShowModel(false)}>
            Close
          </Button>
        </footer>
      </div>
    </Modal>
  );

  return (
    <>
      {model}
      <div
      key={transaction.id}
        onClick={() => setShowModel(true)}
        className={classes.transactionWrapper}
      >
        <span className={classes.tranInfo}>
          <span className={classes.tranId}>
            <h3>Transaction Id:</h3> {transaction.transactionId}
          </span>
          <p className={classes.tranOn}>
            {date}, {time}
          </p>
        </span>
        <span
          className={
            transaction.transactionType === "deposit"
              ? classes.credit
              : classes.debit
          }
        >
          ₹ {transaction.amount}
        </span>
      </div>
    </>
  );
};

export default SingleTransaction;
