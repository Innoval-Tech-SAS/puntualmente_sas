import { NavItems } from "./navbarTypes";
import BannerProps from "./bannerTypes";

interface NavbarConfig {
  navItems: NavItems[];
  navButtons: NavItems[];
}

export interface PageConfig {
  id: string;
  path: string;
  title: string;
  banner: BannerProps;
  navbar: NavbarConfig;
}

export default interface PageWrapperProps {
  children: React.ReactNode;
  config: PageConfig;
}
