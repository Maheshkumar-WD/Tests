import React from "react";
import Card from "../../../../Components/UI/Card/Card";
import classes from "./Loan.module.css";
import { Link, useLocation } from "react-router-dom";
import Loan from "./Loan";
import { useSelector } from "react-redux";
const Loans = () => {
  let location = useLocation();
  let { auth } = useSelector((state) => state);
  let cards = [
    { title: "Personal Loan", path: location.pathname + "/apply" },
    {
      title: "Track Application",
      path: location.pathname + `/../track-application/${auth.token}`,
    },
    { title: "Pay Later", path: location.pathname + "/paylater" },
  ];
  return (
    <div className={classes.card_wrapper}>
      <Card>

        <Link to="..">
          <>&#8592; Back</>
        </Link>
        <div className={classes.loans}>
          {cards.map((loancard) => {
            return <Loan path={loancard.path} title={loancard.title} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default Loans;

// let num = 1000 * 60 * 60 * 24 * 365;
