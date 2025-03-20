import siteConfig from "../../../config/siteConfig";

const servicesPageConfig = {
    id: "servicesPage",
    path: "/services",
    title: "Puntualmente SAS - Servicios",
    banner: {
        bannerTitle: "Nuestros Servicios",
        bannerTextContent: `Nuestra experiencia, infraestructura y capacidad de adaptación,
            nos permite ofrecer diversas líneas de negocio con la más alta calidad y a la medida de nuestros clientes`,
        bannerImgSrc: "/assets/images/services_banner.png",
        bannerIsReverse: true,
    },
    navbar: {
        navItems: siteConfig.navItems,
        navButtons: siteConfig.navButtons,
    }
};

export default servicesPageConfig;
