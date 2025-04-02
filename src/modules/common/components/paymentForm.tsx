import FormBase from "./formBaseDark"
import Input from "./inputDark"
import navbarStyles from "../assets/css/navbar.module.css"

interface PaymentFormProps{
    handleFormSubmitSuccess: () => void
}

const PaymentForm: React.FC<PaymentFormProps> = ({handleFormSubmitSuccess}) =>{
    return (
        <FormBase
        title="Bienvenidos al Portal de Pagos"
        textContent="Por favor diligencie todos los campos y posteriormente será redireccionado al portal de pagos www.mipagoamigo.com del Banco Caja Social, recuerde buscar el convenio PUNTUALMENTE SAS"
        onSubmitSuccess={handleFormSubmitSuccess}
      >
        <div className={navbarStyles.inputContainer}>
          <Input
            type="text"
            name="documentNumber"
            label="Cédula"
            required={true}
            dataType="documentNumber"
            pattern="^[0-9]{6,10}$"
            title=""
          />
          <Input
            type="text"
            name="name"
            label="Nombre"
            required={true}
            dataType="name"
            pattern="^(?=[A-Za-z]{3,}\s[A-Za-z]{3,}$)([A-Za-z]{3,}\s*){1,}$"
            title=""
          />
        </div>
        <div className={navbarStyles.inputContainer}>
          <Input
            type="email"
            name="email"
            label="Correo Electrónico"
            required={true}
            dataType="email"
          />

          <Input
            type="text"
            name="phone"
            label="Teléfono Celular"
            required={true}
            dataType="phone"
            pattern="^[0-9]{10,10}$"
            title=""
          />
        </div>

        <div className={navbarStyles.inputContainer}>
          <Input
            type="text"
            name="paymentReference"
            label="Referencia"
            required={true}
            dataType="paymentReference"
            pattern="^[0-9]{7,12}$"
            title=""
          />

          <Input
            type="number"
            name="amount"
            label="Valor"
            required={true}
            dataType="amount"
            pattern="^[0-9]+(\.[0-9]+)?$"
            title=""
          />
        </div>
      </FormBase>
    )
}

export default PaymentForm