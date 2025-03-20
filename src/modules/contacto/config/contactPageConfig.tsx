import siteConfig from "../../../config/siteConfig";

const contactPageConfig = {
    id: "contactPage",
    path: "/contact-us",
    title: "Puntualmente SAS - Contacto",
    banner: {
        bannerTitle: "¿Quieres trabajar con nosotros?",
        bannerTextContent: `En Puntualmente SAS estamos en constante búsqueda de personas talentosas, comprometidas y
            apasionadas por brindar un excelente servicio. Si deseas formar parte de un equipo dinámico, innovador y con
            grandes oportunidades de crecimiento, este es tu lugar.

            Nos enfocamos en el desarrollo profesional de nuestros colaboradores, ofreciéndote:

            Un ambiente laboral colaborativo y respetuoso.
            Capacitación continua para potenciar tus habilidades.
            Oportunidades de crecimiento dentro de la empresa.
            Retos profesionales que impulsarán tu desarrollo.`,
        bannerImgSrc: "/assets/images/services_banner.png",
        bannerIsReverse: true,
    },
    navbar: {
        navItems: siteConfig.navItems,
        navButtons: siteConfig.navButtons,
    }
};

export default contactPageConfig;
