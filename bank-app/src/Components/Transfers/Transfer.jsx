import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import classes from "./Transfers.module.css";
import Button from "../UI/Button/Button";
import InputGroup from "../UI/Input/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { transactionsActions } from "../../Reducer/Transactions/TransactionSlice";
import { useFetchUser } from "../../utils/fetchUser";
const Transfer = () => {
  let token = useSelector((state) => state.auth.token);
  let currUser = useFetchUser(
    process.env.REACT_APP_ACCOUNT + `/account_holders/${token}.json`
  );
  let dispatch = useDispatch();

  let [formData, setFormData] = useState({
    phone: "",
    accountNumber: "",
    amount: "",
  });
  let [transferTo, setTransferTo] = useState(null);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  let handleTransfer = async () => {
    if (formData.phone !== "" || formData.accountNumber !== "") {
      if (currUser.balance >= formData.amount) {
        try {
          let response = await fetch(process.env.REACT_APP_ACCOUNT_HOLDERS);
          let isOk = response.ok;
          if (!isOk) {
            throw new Error("Somthing went Wrong");
          }
          let data = await response.json();

          let TranUser = Object.keys(data).filter((user) => {
            return (
              +data[user].phone === +formData.phone ||
              data[user].accountNumber === +formData.accountNumber
            );
          });

          if (TranUser.length === 0) {
            setTransferTo(null);
            throw new Error("User Not Found")
          }
          let setTranData = data[TranUser[0]];
          setTranData.id = TranUser[0];
          setTransferTo(setTranData);
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("Insufficent balance");
      }
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      amount: +formData.amount,
      transactionId: "TRSNID" + Date.now(),
      date: new Date(),
    };
    // posting logic 
    let sendRequest = async (url, body) => {
      try {
        let response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
        });
        let isOk = response.ok;
        if (!isOk) {
          throw new Error("Something went Wrong");
        }
        let responseToken = await response.json();
        
      } catch (error) {
        alert(error.message);
      }
    };

    let tranData = {
      ...data,
      user: token,
      transactionType: "deposit",
    };
    let depositData = {
      ...data,
      user: transferTo.id,
      transactionType: "transfer",
    };
    sendRequest(
      process.env.REACT_APP_ACCOUNT + `/transactions/${transferTo.id}.json`,
      tranData
    );
    sendRequest(
      process.env.REACT_APP_ACCOUNT + `/transactions/${token}.json`,
      depositData
    );
    fetch(process.env.REACT_APP_ACCOUNT + `/account_holders/${token}.json`, {
      method: "PATCH",
      body: JSON.stringify({ balance: currUser.balance - +formData.amount }),
    })
      .then((res) => res.json())
      .then((result) => result)
      .catch((err) => {
        return err;
      });

    // add Amount to receiver account
    fetch(
      process.env.REACT_APP_ACCOUNT + `/account_holders/${transferTo.id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          balance: transferTo.balance + +formData.amount,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => result)
      .catch((err) => {
        return err;
      });
    dispatch(transactionsActions.setSingleTransaction(depositData));
  };
  return (
    <form onSubmit={handleSubmit} className={classes.transferWrapper}>
      <Card>
        <Input
          onChange={handleChange}
          inputType={"text"}
          label={"Beneficary Phone Number"}
          placeholder="Enter Phone Number"
          inputName={"phone"}
        />
        <h3 style={{ textAlign: "center" }}>OR</h3>
        <Input
          inputType={"text"}
          onChange={handleChange}
          label={"Beneficary Account Number"}
          placeholder="Enter Account Number"
          inputName={"accountNumber"}
        />
        <Input
          onChange={handleChange}
          inputType={"text"}
          inputName={"amount"}
          label={"Amount"}
          placeholder="Enter Amount"
        />
        <>
          {transferTo && (
            <>
              <h4>Account Holder Name: {transferTo.name}</h4>
              <h4>Account Holder: {transferTo.accountNumber}</h4>
              <h4>Amount: {formData.amount}</h4>
            </>
          )}
        </>
        {!transferTo && (
          <InputGroup>
            <Button onClick={handleTransfer} varient={"solid"} type={"button"}>
              Transfer
            </Button>
          </InputGroup>
        )}
        {transferTo != null && (
          <InputGroup>
            <Button
              onClick={() => setTransferTo(null)}
              varient={"outline"}
              type={"button"}
            >
              Cancle
            </Button>
            <Button onClick={handleTransfer} varient={"solid"} type={"submit"}>
              Confirm
            </Button>
          </InputGroup>
        )}
      </Card>
    </form>
  );
};

export default Transfer;
