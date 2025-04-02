import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavbarProps from "../types/navbarTypes";
import navbarStyles from "../assets/css/navbar.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import DefaultAside from "./aside";
import PaymentForm from "./paymentForm";

const Navbar: React.FC<NavbarProps> = ({ navItems, navButtons }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const closeModal = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === modalRef.current) {
      modalRef.current?.close();
    }
  };

  const handleFormSubmitSuccess = () => {
    modalRef.current?.close();
  };

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
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
        <div className={navbarStyles.menuContainer} onClick={toggleAside}>
          <TiThMenuOutline size={24} />
        </div>
      </div>
        
      {/* Aside responsive */}
      <DefaultAside 
        navItems={navItems} 
        navButtons={navButtons} 
        isOpen={isAsideOpen} 
        onClose={() => setIsAsideOpen(false)}
        onOpenModal={() => modalRef.current?.showModal()}
      />

      {/* Modal */}
      <dialog
        ref={modalRef}
        className={navbarStyles.modal}
        onClick={closeModal}
      >
        <div className={``}>
         <PaymentForm handleFormSubmitSuccess={handleFormSubmitSuccess}/>
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;