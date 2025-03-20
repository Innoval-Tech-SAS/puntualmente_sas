import { lazy } from "react";

const HomePage = lazy(() => import("../modules/inicio/pages/homePage"));
const ServicesPage = lazy(() => import("../modules/servicios/pages/servicesPage"));
const ContactPage = lazy(() => import("../modules/contacto/pages/contactPage"));
const AboutPage = lazy(() => import("../modules/nosotros/pages/aboutPage"));

const siteConfig = {
    title: "Puntualmente SAS",
    description: "",
    pages: [
        {
            path: "/home",
            title: "Puntualmente SAS",
            page: HomePage,
        },
        {
            path: "/about-us",
            title: "Puntualmente SAS",
            page: AboutPage,
        },
        {
            path: "/services",
            title: "Puntualmente SAS",
            page: ServicesPage,
        },
        {
            path: "/contact-us",
            title: "Puntualmente SAS",
            page: ContactPage,
        },
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
            url: "/about-us"
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
