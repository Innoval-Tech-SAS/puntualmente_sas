import siteConfig from "../../../config/siteConfig";

const contactPageConfig = {
  id: "contactPage",
  path: "/contact-us",
  title: "Puntualmente SAS - Contacto",
  banner: {
    content: {
      title: "¿Quieres trabajar con nosotros?",
      textContent: `En Puntualmente SAS estamos en constante búsqueda de personas talentosas, comprometidas y apasionadas por brindar un excelente servicio. Si deseas formar parte de un equipo dinámico, innovador y con grandes oportunidades de crecimiento, este es tu lugar.`,
      listText: `Nos enfocamos en el desarrollo profesional de nuestros colaboradores, ofreciéndote: `,
      listItems: [
        "Un ambiente laboral colaborativo y respetuoso.",
        "Capacitación continua para potenciar tus habilidades.",
        "Oportunidades de crecimiento dentro de la empresa.",
        "Retos profesionales que impulsarán tu desarrollo.",
      ],
    },
    imgSrc: "/assets/images/banner_images/contact_banner.png",
    isReverse: true,
  },
  navbar: {
    navItems: siteConfig.navItems,
    navButtons: siteConfig.navButtons,
  },
};

export default contactPageConfig;
