import React, { useState, FormEvent } from "react";
import FormBaseProps from "../types/formBaseTypes";
import formStyles from "../assets/css/form.module.css";
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

        <div>
          <Input
            type="checkbox"
            name="terms"
            label="De acuerdo con la Ley 1581 de 2012 sobre Protección de Datos Personales, autorizo el tratamiento de mis datos conforme a la política de privacidad. Al proporcionar mi información, acepto los términos y condiciones establecidos para su uso y almacenamiento."
            required={true}
            dataType="terms"
          />
        </div>
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
