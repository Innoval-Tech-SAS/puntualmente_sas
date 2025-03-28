import { useRef } from "react";
import { Link } from "react-router-dom"; 
import NavbarProps from "../types/navbarTypes";
import navbarStyles from "../assets/css/navbar.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import Input from "./input";
import FormBase from "./formBase";


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
              <Link key={index} to={button.url} className={navbarStyles.navbarLink}>
                {button.title}
              </Link>
            )
          )}
        </div>
        <div className={navbarStyles.menuContainer}>
          <TiThMenuOutline  size={24}/>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className={navbarStyles.modal} onClick={closeModal}>
        <FormBase title="" textContent="Por favor digita tu documento de identidad.">
          <Input
            type="text"
            name="cedula"
            label=""
            required={true}
            dataType="cedula"
            pattern="^[0-9]{6,}$"
            title="Debe contener solo números y tener al menos 6 dígitos."
          />
        </FormBase>
      </dialog>
    </nav>
  );
};

export default Navbar;
