import React from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "./Loans.module.css";
import DisplayLoanAccordian from "./DisplayLoanAccordian";
import { Link, useLocation } from "react-router-dom";
const Loans = () => {
  let location = useLocation();
  let allLoans = [
    {
      title: "Personal Loan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est dolor incidunt eos ipsum minus possimus dolores ut fugit vero, soluta expedita id blanditiis veritatis alias aliquam similique nostrum rem? Modi veritatis sapiente corrupti nisi molestias ipsa praesentium placeat a debitis! Ipsum quaerat ex praesentium corrupti molestiae. Nam, harum sit aliquid nobis, voluptate sed veniam, consequuntur non ipsam fugit odit.Reprehenderit modi alias nesciunt enim accusamus voluptatem possimus, facere illo temporibus deserunt illum, a impedit dolorem odit magni quos odio. Veritatis voluptas aliquam iusto fugiat tempora, minus perspiciatis obcaecati perferendis.",
      link: location.pathname + "/personal-loan",
    },
    {
      title: "Gold Loan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est dolor incidunt eos ipsum minus possimus dolores ut fugit vero, soluta expedita id blanditiis veritatis alias aliquam similique nostrum rem? Modi veritatis sapiente corrupti nisi molestias ipsa praesentium placeat a debitis! Ipsum quaerat ex praesentium corrupti molestiae. Nam, harum sit aliquid nobis, voluptate sed veniam, consequuntur non ipsam fugit odit.Reprehenderit modi alias nesciunt enim accusamus voluptatem possimus, facere illo temporibus deserunt illum, a impedit dolorem odit magni quos odio. Veritatis voluptas aliquam iusto fugiat tempora, minus perspiciatis obcaecati perferendis.",
      link: location.pathname + "/gold-loan",
    },
  ];
  return (
    <div className={classes.container}>
      <Card className={classes.loans}>
      <Link to="..">
          <>&#8592; Back</>
        </Link>
        {allLoans.map((loan, id) => (
          <DisplayLoanAccordian
            key={id}
            title={loan.title}
            description={loan.description}
            link={loan.link}
          />
        ))}
      </Card>
    </div>
  );
};

export default Loans;
