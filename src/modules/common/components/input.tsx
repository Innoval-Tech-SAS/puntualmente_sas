import React, { useState } from "react";
import { inputValidator } from "../services/inputValidator";
import InputBaseProps from "../types/inputTypes";
import inputStyles from "../assets/css/input.module.css";

const Input: React.FC<InputBaseProps> = ({
  type,
  name,
  label,
  placeholder,
  required,
  disabled,
  pattern,
  title,
  dataType,
  width,
  onValidate,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [touched, setTouched] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  let customize = {}
  
  if(width != undefined){
    customize = {width: width}
  }


  
  const handleValidation = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const validationResult = inputValidator(e.target as HTMLInputElement);
    setIsValid(e.target.validity.valid);
    setTouched(true);
    setErrorMessage(validationResult.message);

    if (onValidate) {
      onValidate(name, e.target.validity.valid);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (touched) {
      const validationResult = inputValidator(e.target as HTMLInputElement);
      setIsValid(e.target.validity.valid);
      setErrorMessage(validationResult.message);

      if (onValidate) {
        onValidate(name, e.target.validity.valid);
      }
    }
  };

  return (
    <div
      className={`${inputStyles.inputContainer} ${
        !isValid && touched ? inputStyles.inputContainerInvalid : ""
      } 
        ${type === "checkbox" ? inputStyles.checkbox_container : ""}`}
    >
      {type === "checkbox" ? (
        <div className={inputStyles.checkboxWrapper}>
          <input
            id={name}
            name={name}
            type={type}
            required={required || false}
            disabled={disabled || false}
            data-type={dataType}
            onBlur={handleValidation}
            onChange={handleChange}
            className={inputStyles.inputField}
          />
          <label htmlFor={name} className={inputStyles.checkboxLabel}>
            {label}
          </label>
        </div>
      ) : (
        <>
          <label htmlFor={name} className={inputStyles.inputLabel}>
            {label}
          </label>
          {type === "textarea" ? (
            <textarea
              id={name}
              name={name}
              placeholder={placeholder || ""}
              required={required || false}
              disabled={disabled || false}
              title={title || ""}
              data-type={dataType}
              onBlur={handleValidation}
              onChange={handleChange}
              className={`${inputStyles.inputField} ${inputStyles.resizable}`}
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder || ""}
              required={required || false}
              disabled={disabled || false}
              pattern={pattern ? pattern.toString() : undefined}
              title={title || ""}
              data-type={dataType}
              onBlur={handleValidation}
              onChange={handleChange}
              className={inputStyles.inputField}
              
              style={customize}

            />
          )}
        </>
      )}

      {!isValid && touched && (
        <small className={inputStyles.errorMessage}>{errorMessage}</small>
      )}
    </div>
  );
};

export default Input;
