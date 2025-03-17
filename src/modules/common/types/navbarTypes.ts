export interface NavItems {
    title: string;
    url: string;
    type?: "button" | "link";
}



export default interface NavbarProps {
    navItems: NavItems[];
    navButtons: NavItems[];
}