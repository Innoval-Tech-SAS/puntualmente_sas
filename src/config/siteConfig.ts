import { lazy } from "react";

const HomePage = lazy(() => import("../modules/inicio/pages/homePage"));
const AboutPage = lazy(() => import("../modules/nosotros/pages/aboutPage"));

const siteConfig = {
    title: "Puntualmente SAS",
    description: "",
    pages: [
        {
            path: "/",
            title: "Puntualmente SAS",
            page: HomePage,
        },
        {
            path:"/about",
            title: "Puntualmente SAS",
            page: AboutPage,
        }
    ]
};

export default siteConfig;
