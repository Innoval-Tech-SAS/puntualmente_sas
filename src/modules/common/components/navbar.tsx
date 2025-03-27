import { useRef } from "react";
import NavbarProps from "../types/navbarTypes";
import navbarStyles from "../assets/css/navbar.module.css";
import Input from "./input";

const Navbar: React.FC<NavbarProps> = ({ navItems, navButtons }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

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
                <a href={item.url} className={navbarStyles.navbarLink}>
                  {item.title}
                </a>
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
                // href={button.url}
                className={navbarStyles.navbarButton}
                onClick={() => modalRef.current?.showModal()}
              >
                {button.title}
              </a>
            ) : (
              <a
                key={index}
                href={button.url}
                className={navbarStyles.navbarLink}
              >
                {button.title}
              </a>
            )
          )}
        </div>
      </div>


      <dialog ref={modalRef} className={navbarStyles.modal}>
        <h2>Por favor digita tu cedula de identidad</h2>
        <Input type="text"
          name="cedula"
          label="Cedula de identidad"
          required={true}
          dataType="cedula"
          pattern="^[0-9]{6,}$"
          title="Debe contener solo números y tener al menos 6 dígitos.">
        </Input>

        <button className={navbarStyles.navbarButton} onClick={() => modalRef.current?.close()}>Cerrar</button>
      </dialog>
    </nav>
  );
};

export default Navbar;
