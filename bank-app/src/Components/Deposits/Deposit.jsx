import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./Deposits.module.css";
import Button from "../UI/Button/Button";
import InputGroup from "../UI/Input/InputGroup";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../../utils/fetchUser";
import { transactionsActions } from "../../Reducer/Transactions/TransactionSlice";
import { useDispatch } from "react-redux";
const Deposit = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let initState = { amount: "", password: "" };
  let [formData, setFormData] = useState(initState);
  let user = useFetchUser(
    process.env.REACT_APP_ACCOUNT + `/account_holders/${id}.json`
  );
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      if (formData.password === user.password) {
        let amount = +formData.amount;
        if (amount < 500) {
          return alert("Minimum Deposit: 500");
        }
        let data = {
          amount: amount,
          transactionId: "TRSNID" + Date.now(),
          transactionType: "deposit",
          date: new Date().toDateString(),
          user: id,
        };
        let response = await fetch(
          process.env.REACT_APP_ACCOUNT + `transactions/${id}.json`,
          { method: "POST", body: JSON.stringify(data) }
        );
        if (!response.ok) {
          return alert("Deposit Failed! Please try again after sometime...");
        } else {
          let { name } = await response.json();
          let dispatchBody = { ...data, id: name };
          dispatch(transactionsActions.setSingleTransaction(dispatchBody));
          let patchBody = JSON.stringify({
            balance: amount + user.balance,
          });
          let patchResponse = await fetch(
            process.env.REACT_APP_ACCOUNT + `account_holders/${id}.json`,
            { method: "PATCH", body: patchBody }
          );
          if (!patchResponse.ok) {
            alert("somthing Went wrong");
          }
          setFormData(initState);
          return alert("Deposit Success");
        }
      } else {
        return alert("Invalid password");
      }
    } else {
      return alert("Something Went Wrong! please try again");
    }
  };
  return (
    <form onSubmit={handleSubmit} className={classes.depositWrapper}>
      <Card>
        <h1>Quick Deposit</h1>
        <Input
          onChange={handleChange}
          inputType={"number"}
          label={"Deposit Amount"}
          inputName={"amount"}
          placeholder="Enter Deposit Amount"
          inputValue={formData.amount}
        />
        <Input
          onChange={handleChange}
          inputType={"password"}
          label={"Password"}
          placeholder={"Enter password"}
          inputName={"password"}
          inputValue={formData.password}
        />
        <InputGroup>
          <Button type={"submit"} varient={"solid"}>
            Deposit
          </Button>
        </InputGroup>
      </Card>
    </form>
  );
};

export default Deposit;
