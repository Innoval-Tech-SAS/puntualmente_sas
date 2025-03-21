import siteConfig from "../../../config/siteConfig";

const homePageConfig = {
  id: "homePage",
  path: "/home",
  title: "Puntualmente SAS",
  banner: {
    content: {
      title: "Puntualmente S.A.S",
      textContent: `Somos una compañía diseñada y dirigida estratégicamente para operar procesos especiales de tercerización en servicios, especializados en Gestión y Recuperación de Cartera, Call y Contact Center. Nuestro mayor interés es brindar satisfactoriamente procesos de valor agregado para cada uno de nuestros clientes, garantizando el cumplimiento de sus normas y protocolos operativos.`,
    },
    imgSrc: "/assets/images/home_banner.png",
    isReverse: false,
  },
  navbar: {
    navItems: siteConfig.navItems,
    navButtons: siteConfig.navButtons,
  },
};

export default homePageConfig;
