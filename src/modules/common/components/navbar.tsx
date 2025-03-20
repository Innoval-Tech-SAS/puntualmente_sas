import NavbarProps from "../types/navbarTypes";
import navbarStyles from "../assets/css/navbar.module.css";

const Navbar: React.FC<NavbarProps> = ({ navItems, navButtons }) => {
    return (
        <nav className={navbarStyles.navbar}>

            <div className={navbarStyles.navbar_content}>

                <div className="">
                    <img src="/assets/images/logo_navbar.png  " alt="" className={navbarStyles.navbar_logo} />
                </div>

                <div className={navbarStyles.items_container}>
                    <ul className={navbarStyles.navbar_list}>
                        {navItems.map((item, index) => (
                            <li key={index} className={navbarStyles.navbar_item}>
                                <a href={item.url} className={navbarStyles.navbar_link}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={navbarStyles.button_container}>
                    {navButtons.map((button, index) => (
                        button.type === "button" ? (
                            <a key={index} href={button
                                .url} className={navbarStyles.navbar_button}>
                                {button.title}

                            </a>
                        ) : (
                            <a key={index} href={button.url} className={navbarStyles.navbar_link}>
                                {button.title}
                            </a>
                        )
                    ))}
                </div>
            </div>



        </nav>
    );
}

export default Navbar;