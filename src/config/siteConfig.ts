import { lazy } from "react";

const HomePage = lazy(() => import("../modules/inicio/pages/homePage"));

const siteConfig = {
    title: "Puntualmente SAS",
    description: "",
    pages: [
        {
            path: "/home",
            title: "Puntualmente SAS",
            page: HomePage,
        }
    ],
    navItems: [
        {
            title: "Inicio",
            url: "/home"
        },

        {
            title: "Servicios",
            url: "/services"
        },
        {
            title: "Nosotros",
            url: "/About-us"
        },
        {
            title: "Contacto",
            url: "/contact-us"
        },
    ],
    navButtons: [
        {
            title: "Iniciar sesión",
            url: "/login",
            type: "link"
        },
        {
            title: "Pagar",
            url: "/payments",
            type: "button"
        }
    ],
};

export default siteConfig;
