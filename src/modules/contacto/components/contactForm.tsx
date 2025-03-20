import React, { useState } from 'react';
import FormBase from "../../common/components/formBase";
import Input from "../../common/components/input";

// const ContactForm: React.FC = () => {
//     return (
//         <FormBase title="Contact Form">
//             <Input type="text" name="test" label="test input" dataType="test" />
//         </FormBase>
//     );
// };

// export default ContactForm;



const FormExample: React.FC = () => {

    const handleFormValidation = (action: string, isValid: boolean) => {
        if (action === 'submit') {
            if (isValid) {
                console.log("Formulario válido");
            } else {
                console.error("Formulario inválido");
            }
        }
    };

    return (
        <div>
            <FormBase
                title="Formulario de Registro"
                textContent="Por favor completa todos los campos requeridos"
                onValidate={handleFormValidation}
            >
                <Input
                    type="text"
                    name="nombre"
                    label="Nombre"
                    required={true}
                    dataType="name"
                    pattern="^(?=[A-Za-z]{3,}\s[A-Za-z]{3,}$)([A-Za-z]{3,}\s*){1,}$"
                    title="Digite su nombre y apellido."
                />
                <Input
                    type="email"
                    name="email"
                    label="Correo Electrónico"
                    required={true}
                    dataType="email"
                />
                <Input
                    type="password"
                    name="password"
                    label="Contraseña"
                    required={true}
                    dataType="password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$"
                    title="Debe tener entre 6 y 12 caracteres, incluir una mayúscula, una minúscula y un número."
                />
            </FormBase>
        </div>
    );
};

export default FormExample;