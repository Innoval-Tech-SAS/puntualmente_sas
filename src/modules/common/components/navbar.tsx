import { useRef } from "react";
import { Link } from "react-router-dom";
import NavbarProps from "../types/navbarTypes";
import navbarStyles from "../assets/css/navbar.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import Input from "./inputDark";
import FormBase from "./formBaseDark";

const Navbar: React.FC<NavbarProps> = ({ navItems, navButtons }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeModal = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === modalRef.current) {
      modalRef.current?.close();
    }
  };

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarContent}>
        {/* Logo */}
        <div>
          <img
            src="/assets/images/logo/logo_navbar.png"
            alt="Logo"
            className={navbarStyles.navbarLogo}
          />
        </div>

        {/* Menú de navegación */}
        <div className={navbarStyles.itemsContainer}>
          <ul className={navbarStyles.navbarList}>
            {navItems.map((item, index) => (
              <li key={index} className={navbarStyles.navbarItem}>
                <Link to={item.url} className={navbarStyles.navbarLink}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botones de navegación */}
        <div className={navbarStyles.buttonContainer}>
          {navButtons.map((button, index) =>
            button.type === "button" ? (
              <a
                key={index}
                className={navbarStyles.navbarButton}
                onClick={() => modalRef.current?.showModal()}
              >
                {button.title}
              </a>
            ) : (
              <Link
                key={index}
                to={button.url}
                className={navbarStyles.navbarLink}
              >
                {button.title}
              </Link>
            )
          )}
        </div>
        <div className={navbarStyles.menuContainer}>
          <TiThMenuOutline size={24} />
        </div>
      </div>

      {/* Modal */}
      <dialog
        ref={modalRef}
        className={navbarStyles.modal}
        onClick={closeModal}
      >
        <div className={``}>
          <FormBase
            title="Bienvenidos al Portal de Pagos"
            textContent="Por favor diligencie todos los campos y posteriormente será redireccionado al portal de pagos"
          >
            <div className={navbarStyles.inputContainer}>
              <Input
                type="text"
                name="cedula"
                label="Cédula"
                required={true}
                dataType="cedula"
                pattern="^[0-9]{6,10}$"
                title=""
              />
              <Input
                type="text"
                name="nombre"
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
                name="celular"
                label="Teléfono Celular"
                required={true}
                dataType="celular"
                pattern="^[0-9]{10,10}$"
                title=""
              />
            </div>

           <div className={navbarStyles.inputContainer}>
           <Input
              type="text"
              name="payReference"
              label="Referencia"
              required={true}
              dataType="payReference"
              pattern="^[0-9]{10,18}$"
              title=""
            />

            <Input
              type="text"
              name="valor"
              label="Valor"
              required={true}
              dataType="valor"
              pattern="^[0-9]$"
              title=""
            />
           </div>
          </FormBase>
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;
