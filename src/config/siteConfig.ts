import { lazy } from "react";

const HomePage = lazy(() => import("../modules/inicio/pages/homePage"));

const siteConfig = {
    title: "Puntualmente SAS",
    description: "",
    pages: [
        {
            path: "/",
            title: "Puntualmente SAS",
            page: HomePage,
        }
    ]
};

export default siteConfig;
