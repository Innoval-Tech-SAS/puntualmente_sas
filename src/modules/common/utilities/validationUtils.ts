export const errorMessages = {
    name: {
        valueMissing: "El nombre es obligatorio.",
        patternMismatch: "Digite su nombre y apellido."
    },
    email: {
        typeMismatch: "El correo no es válido.",
        valueMissing: "El correo es obligatorio.",
    },
    password: {
        valueMissing: "La contraseña es obligatoria.",
        patternMismatch: "Debe tener entre 6 y 12 caracteres, incluir una mayúscula, una minúscula y un número."
    },
    terms: {
        valueMissing: "Debes aceptar los términos y condiciones."
    }
};

export const typeErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];
