import React, { useState } from "react";
import classes from "./Loans.module.css";
import Card from "../../../Components/UI/Card/Card";
import Button from "../../../Components/UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const DisplayLoanAccordian = ({ title, description, link }) => {
  let navigate = useNavigate();
  let [show, setShow] = useState(false);
  let handleChangeRoute = () => {
    return navigate(link);
  };
  return (
    <Card
      className={classes.loan_card}
      onClick={() => setShow((prev) => !prev)}
    >
      <header>
        <h1>{title}</h1>
        <h1 className={classes.arrow}>{show ? <>&#8595;</> : <>&#8594;</>}</h1>
      </header>
      {show && (
        <main>
          <p>{description}</p>
          <footer>
            <Button type={"button"} varient={"outline"}>
              More Info
            </Button>
            <Button onClick={handleChangeRoute} varient={"solid"}>
              Apply Now
            </Button>
          </footer>
        </main>
      )}
    </Card>
  );
};

export default DisplayLoanAccordian;
