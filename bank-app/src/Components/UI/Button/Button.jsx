import React from "react";
import classes from "./Button.module.css";
const Button = ({className,isDisabled, onClick, type, children, varient }) => {
  let btnClass = `${classes.button} ${classes[varient]} ${className}`;
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={btnClass}
      disabled={isDisabled || false}
    >
      {children}
    </button>
  );
};

export default Button;
