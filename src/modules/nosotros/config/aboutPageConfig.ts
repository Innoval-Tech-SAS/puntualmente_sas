import siteConfig from "../../../config/siteConfig";

const aboutPageConfig = {
  id: "aboutPage",
  path: "/about-us",
  title: "Puntualmente SAS",
  banner: {
    content: {
      title: "¿Quiénes somos?",
      textContent: `Contamos con personal altamente Capacitado y comprometido en Ofrecer Soluciones a nuestros Clientes a la medida de sus necesidades.\n Nuestro principal objetivo es obtener la completa satisfacción de cada cliente que atendemos, a través de un trato personalizado. Somos una empresa preocupada por su gente, creemos en la mejora continua y la excelencia de nuestro trabajo, con lo que buscamos aportar al desarrollo de nuestros clientes y así en todo nuestro entorno.`,
    },
    imgSrc: "/assets/images/banner_images/about_banner.png",
    isReverse: false,
  },
  navbar: {
    navItems: siteConfig.navItems,
    navButtons: siteConfig.navButtons,
  },
};

export default aboutPageConfig;
