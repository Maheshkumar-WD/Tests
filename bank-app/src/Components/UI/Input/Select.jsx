import React from "react";
import classes from "./Input.module.css";
const Select = ({
  options = [],
  initialSelectValue,
  label,
  onChange,
  labelClassName,
  inputClassName,
  inputName,
  inputId,
}) => {
  let inputClasses = `${classes.customInput} ${inputClassName}`;
  let labelClasses = `${classes.label} ${labelClassName}`;
  return (
    <div>
      <label className={labelClasses} htmlFor={inputId}>
        {label}
      </label>
      <select
        onChange={onChange}
        className={inputClasses}
        name={inputName}
        id={inputId}
      >
        <option value="">{initialSelectValue}</option>
        {options.map((option) => (
          <option key={option.name} value={`${option.code}-${option.name}`}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
