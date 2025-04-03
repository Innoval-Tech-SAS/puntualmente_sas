import React from "react";
import FormBase from "../../common/components/formBase";
import Input from "../../common/components/input";

const ContactForm: React.FC = () => {
  const handleFormValidation = (action: string, isValid: boolean) => {
    if (action === "submit") {
      if (isValid) {
        console.log("Formulario válido");
      } else {
        console.error("Formulario inválido");
      }
    }
  };

  return (
    <div className={``}>
      <FormBase
        title=""
        textContent={`Si quieres sumarte a nuestro equipo y aportar tu talento,\n
          ¡postúlate ahora y construyamos juntos el futuro de la gestión empresarial!`}
        onValidate={handleFormValidation}
      >
        <Input
          type="text"
          name="name"
          label="Nombre y Apellido"
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
          type="text"
          name="subject"
          label="Asunto"
          required={true}
          dataType="subject"
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$"
          title="Debe ser una sola palabra con al menos 3 letras."
        />

        {/* <Input
          type="file"
          name="file"
          label="Seleccionar archivo"
          required={true}
          dataType="cv"
          pattern="^\d{7,}$"
          title="Digite un número de teléfono válido."
        /> */}

        <Input
          type="textarea"
          name="message"
          label="Mensaje"
          required={true}
          dataType="textarea"
          pattern="^.{10,}$"
          title="El mensaje debe tener al menos 10 caracteres."
        />
      </FormBase>
    </div>
  );
};

export default ContactForm;
