import React from "react";
import Card from "../../../../Components/UI/Card/Card";
import classes from "./Loan.module.css";
import { Link } from "react-router-dom";
const Loan = ({ title, path }) => {
  return (
    <Link to={path}>
      <Card className={classes.loan_card}>
        <h1>{title}</h1>
      </Card>
    </Link>
  );
};

export default Loan;
