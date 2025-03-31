import React, { useState, FormEvent } from "react";
import FormBaseProps from "../types/formBaseTypes";
import formStyles from "../assets/css/darkForm.module.css";
import InputBaseProps from "../types/inputTypes";
import Input from "./input";

const FormBase: React.FC<FormBaseProps> = ({
  title,
  children,
  textContent,
  onValidate,
}) => {
  const [fieldValidity, setFieldValidity] = useState<Record<string, boolean>>(
    {}
  );

  const handleInputValidation = (name: string, isValid: boolean) => {
    setFieldValidity((prev) => ({
      ...prev,
      [name]: isValid,
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isFormValid = React.Children.toArray(children)
      .filter(
        (child) =>
          React.isValidElement<InputBaseProps>(child) && child.props.required
      )
      .every(
        (child) =>
          React.isValidElement<InputBaseProps>(child) &&
          fieldValidity[child.props.name]
      );
    const termsCheckbox = document.querySelector<HTMLInputElement>(
      'input[name="terms"]'
    );
    const isTermsAccepted = termsCheckbox?.checked || false;

    if (onValidate) {
      onValidate("submit", isFormValid && isTermsAccepted);
    }
  };

  return (
    <div className={formStyles.formContainer}>
      <div className={formStyles.formHeader}>
        <h3 className={formStyles.formTitle}>{title}</h3>
        {textContent && <p className={formStyles.formText}>{textContent}</p>}
      </div>

      <form className={formStyles.form} onSubmit={handleFormSubmit} noValidate>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<InputBaseProps>(child)) {
            return React.cloneElement(child, {
              ...child.props,
              onValidate: (name: string, isValid: boolean) => {
                if (child.props.onValidate) {
                  child.props.onValidate(name, isValid);
                }
                handleInputValidation(name, isValid);
              },
            });
          }
          return null;
        })}
          <Input
            type="checkbox"
            name="terms"
            label="Acepto los términos y condiciones y la política de tratamiento de datos"
            required={true}
            dataType="terms"
          />
        
        <div className={formStyles.formButtons}>
          <button className={formStyles.formButton} type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBase;
