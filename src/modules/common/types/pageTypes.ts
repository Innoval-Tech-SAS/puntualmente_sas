import { NavItems } from "./navbarTypes";

interface BannerConfig {
    bannerTitle: string;
    bannerTextContent: string;
    bannerImgSrc: string;
    bannerIsReverse: boolean;
}

interface NavbarConfig {
    navItems: NavItems[];
    navButtons: NavItems[];
}

export interface PageConfig {
    id: string;
    path: string;
    title: string;
    banner: BannerConfig;
    navbar: NavbarConfig;
}


export default interface PageWrapperProps {
    children: React.ReactNode;
    config: PageConfig;
}