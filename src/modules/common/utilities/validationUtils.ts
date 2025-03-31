export const errorMessages = {
    cedula: {
        valueMissing: "La cedula es obligatoria.",
        patternMismatch: "Debe contener solo números y tener al menos 6 dígitos."
    },
    name: {
        valueMissing: "El nombre es obligatorio.",
        patternMismatch: "Digite su nombre y apellido."
    },
    email: {
        typeMismatch: "El email no es válido.",
        valueMissing: "El email es obligatorio.",
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
    },
    celular : {
        valueMissing: "El telefono celular es obligatorio.",
        patternMismatch: "El telefono celular debe tener 10 caracteres."
    },
    payReference: {
        valueMissing: "El número de referencia es obligatorio.",
        patternMismatch: "Debe contener solo números y tener al menos 10 dígitos."
    },
    valor: {
        valueMissing: "El valor es obligatorio.",
        patternMismatch: "Debe ingresar un valor válido."
    }
};

export const typeErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];
