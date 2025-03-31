import siteConfig from "../../../config/siteConfig";

const pageConfig = {
  id: "homePage",
  path: "/policies",
  title: "Puntualmente SAS",
  banner: {
    content: {
      title: "Puntualmente S.A.S",
      textContent: `Políticas de Privacidad y Tratamiento de Datos`,
    },
    imgSrc: "/assets/images/banner_images/home_banner.png",
    isReverse: false,
  },
  navbar: {
    navItems: siteConfig.navItems,
    navButtons: siteConfig.navButtons,
  },
};

export default pageConfig;
