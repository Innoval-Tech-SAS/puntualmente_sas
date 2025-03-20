export const errorMessages = {
    name: {
        valueMissing: "El nombre es obligatorio.",
        patternMismatch: "Digite su nombre y apellido."
    },
    email: {
        typeMismatch: "El correo no es válido.",
        valueMissing: "El correo es obligatorio.",
    },
    asunto: {
        valueMissing: "El asunto es obligatorio.",
        patternMismatch: "Digite un asunto válido."
    },
    terms: {
        valueMissing: "Debes aceptar los términos y condiciones."
    },
    textarea: {
        valueMissing: "El mensaje es obligatorio.",
        patternMismatch: "El mensaje debe tener al menos 10 caracteres."
    }
};

export const typeErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];
