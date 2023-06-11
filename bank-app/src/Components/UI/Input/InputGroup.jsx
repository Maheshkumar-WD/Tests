import React from "react";
import classes from "./Input.module.css";
const InputGroup = ({ children }) => {
  return <div className={classes["input-group"]}>{children}</div>;
};

export default InputGroup;
