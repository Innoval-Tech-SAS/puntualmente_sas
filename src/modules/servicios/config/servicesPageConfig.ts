import siteConfig from "../../../config/siteConfig";

const servicesPageConfig = {
  id: "servicesPage",
  path: "/services",
  title: "Puntualmente SAS - Servicios",
  banner: {
    content: {
      title: "Nuestros Servicios",
      textContent: `Nuestra experiencia, infraestructura y capacidad de adaptación, nos permite ofrecer diversas líneas de negocio con la más alta calidad y a la medida de nuestros clientes`,
    },
    imgSrc: "/assets/images/services_banner.png",
    isReverse: true,
  },
  navbar: {
    navItems: siteConfig.navItems,
    navButtons: siteConfig.navButtons,
  },
};

export default servicesPageConfig;
