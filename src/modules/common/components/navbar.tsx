import NavbarProps from "../types/navbarTypes";
import navbarStyles from "../assets/css/navbar.module.css";

const Navbar: React.FC<NavbarProps> = ({ navItems, navButtons }) => {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarContent}>
        <div className="">
          <img
            src="/assets/images/logo_navbar.png  "
            alt=""
            className={navbarStyles.navbarLogo}
          />
        </div>

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

        <div className={navbarStyles.buttonBontainer}>
          {navButtons.map((button, index) =>
            button.type === "button" ? (
              <a
                key={index}
                href={button.url}
                className={navbarStyles.navbarButton}
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
    </nav>
  );
};

export default Navbar;
