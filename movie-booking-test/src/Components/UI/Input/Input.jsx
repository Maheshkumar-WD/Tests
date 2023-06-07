import React from "react";
import classes from "./Input.module.css"
const Input = ({
  label,
  inputType,
  inputName,
  inputId,
  inputClassName,
  onChange,
}) => {
    let inputClasses = `${classes.input} ${inputClassName}`
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        className={inputClasses}
        onChange={onChange}
        required
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
