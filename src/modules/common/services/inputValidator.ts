import { errorMessages, typeErrors } from "../utilities/validationUtils";

export const showErrorMessage = (
  inputType: string,
  input: HTMLInputElement | HTMLTextAreaElement
): string => {
  for (const error of typeErrors) {
    if (input.validity[error as keyof ValidityState]) {
      const inputErrors =
        errorMessages[inputType as keyof typeof errorMessages];
      if (inputErrors) {
        return inputErrors[error as keyof typeof inputErrors] || "";
      }
    }
  }
  return "";
};

export const inputValidator = (
  input: HTMLInputElement | HTMLTextAreaElement
): { isValid: boolean; message: string } => {
  const inputType = input.dataset.type;
  console.log(input.validity);
  if (input.validity.valid) {
    return { isValid: true, message: "" };
  }

  if (inputType) {
    const message = showErrorMessage(inputType, input);
    return { isValid: false, message };
  }

  return { isValid: false, message: "Campo inválido" };
};
