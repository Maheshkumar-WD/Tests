import React from "react";
import classes from "./Button.module.css";
const Button = ({ onClick, className, id, name, children,type }) => {
  let BtnClasses = `${classes.button} ${className}`;
  return (
    <button type={type} onClick={onClick} className={BtnClasses}>
      {children}
    </button>
  );
};

export default Button;
