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
    onValidate
}) => {
    const [isValid, setIsValid] = useState<boolean>(true);
    const [touched, setTouched] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [value, setValue] = useState<string>("");

    const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
        const validationResult = inputValidator(e.target);
        setIsValid(e.target.validity.valid);
        setTouched(true);
        setErrorMessage(validationResult.message);

        if (onValidate) {
            onValidate(name, e.target.validity.valid);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (touched) {
            const validationResult = inputValidator(e.target);
            setIsValid(e.target.validity.valid);
            setErrorMessage(validationResult.message);
            setValue(e.target.value);

            if (onValidate) {
                onValidate(name, e.target.validity.valid);
            }
        }
    };

    return (
        <div
            className={`${inputStyles.input_container} ${!isValid && touched ? inputStyles.input_container_invalid : ''} 
        ${type === "checkbox" ? inputStyles.checkbox_container : ''}`}
        >
            {type === "checkbox" ? (
                <div className={inputStyles.checkbox_wrapper}>
                    <input
                        id={name}
                        name={name}
                        type={type}
                        required={required || false}
                        disabled={disabled || false}
                        data-type={dataType}
                        onBlur={handleValidation}
                        onChange={handleChange}
                        className={inputStyles.input_checkbox}
                    />
                    <label htmlFor={name} className={inputStyles.checkbox_label}>
                        {label}
                    </label>
                </div>
            ) : (
                <>
                    <label htmlFor={name} className={inputStyles.input_label}>
                        {label}
                    </label>
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
                        className={inputStyles.input_field}
                    />
                </>
            )}

            {!isValid && touched && (
                <small className={inputStyles.error_message}>{errorMessage}</small>
            )}
        </div>
    );


};

export default Input;