import React from "react";
import classes from "./Input.module.css";
const Input = ({
  label,
  onChange,
  labelClassName,
  inputClassName,
  inputType,
  inputName,
  inputId,
  placeholder,
  inputValue
}) => {
  let inputClasses = `${classes.customInput} ${inputClassName} `;
  let labelClasses = `${classes.label} ${labelClassName} `;
  return (
    <div className={classes["form-controls"]}>
      <label className={labelClasses} id={inputId}>
        {label}
      </label>
      <input
        className={inputClasses}
        onChange={onChange}
        type={inputType}
        name={inputName}
        id={inputId}
        autoComplete={"off"}
        placeholder={placeholder}
        value = {inputValue}
      />
    </div>
  );
};

export default Input;
