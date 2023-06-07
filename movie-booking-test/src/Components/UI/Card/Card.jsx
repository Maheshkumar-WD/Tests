import React from "react";
import classes from "./Card.module.css";
const Card = ({ children,className }) => {
  let cardClasses = `${classes.Card} ${className}`
  return <div className={cardClasses}>{children}</div>;
};

export default Card;
