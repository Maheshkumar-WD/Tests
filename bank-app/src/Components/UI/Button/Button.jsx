import React from "react";
import classes from "./Button.module.css";
const Button = ({ onClick, type, children, varient }) => {
  let btnClass = `${classes.button} ${classes[varient]}`;
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={btnClass}
    >
      {children}
    </button>
  );
};

export default Button;
