import React, { useState, useEffect } from "react";
import { inputValidator } from "../services/inputValidator";
import InputBaseProps from "../types/inputTypes";
import inputStyles from "../assets/css/inputDark.module.css";

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


  const customize = width ? { width: width } : {};

  const validateInput = (target: HTMLInputElement | HTMLTextAreaElement) => {
    const validationResult = inputValidator(target);
    setIsValid(target.validity.valid);
    setErrorMessage(validationResult.message);
    if (onValidate) {
      onValidate(name, target.validity.valid);
    }
  };

  const handleValidation = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched(true);
    validateInput(e.target);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (touched) {
      validateInput(e.target);
    }
  };

  useEffect(() => {
    if (touched) {
      setIsValid(isValid);
    }
  }, [isValid, touched]);

  return (
    <div
      className={`${inputStyles.inputContainer} ${
        !isValid && touched ? inputStyles.inputContainerInvalid : ""
      }`}
    >
      {type === "checkbox" ? (
        <div
          className={`${inputStyles.checkboxContainer} ${
            !isValid && touched ? inputStyles.checkboxContainerInvalid : ""
          }`}
        >
          <div className={inputStyles.checkboxWrapper}>
            <input
              id={name}
              name={name}
              type="checkbox"
              required={required || false}
              disabled={disabled || false}
              data-type={dataType}
              onBlur={handleValidation}
              onChange={handleChange}
            />
            <label htmlFor={name} className={inputStyles.checkboxLabel}>
              {label}
              {required && <span className={inputStyles.requiredMark}>*</span>}
            </label>
          </div>
          {!isValid && touched && (
            <small className={inputStyles.errorMessage}>{errorMessage}</small>
          )}
        </div>
      ) : (
        <>
          <label htmlFor={name} className={inputStyles.inputLabel}>
            {label}
            {required && <span className={inputStyles.requiredMark}>*</span>}
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
              style={customize}
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
          {!isValid && touched && (
            <small className={inputStyles.errorMessage}>{errorMessage}</small>
          )}
        </>
      )}
    </div>
  );
};

export default Input;
