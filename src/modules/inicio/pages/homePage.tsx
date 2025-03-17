import Banner from "../../common/components/banner";
import Navbar from "../../common/components/navbar";
import homePageConfig from "../config/homePageConfig";
import { NavItems } from "../../common/types/navbarTypes";

const HomePage: React.FC = () => {

    return (
        <>

            <Navbar
                navItems={homePageConfig.navbar.navItems}
                navButtons={homePageConfig.navbar.navButtons as NavItems[]}
            />

            <Banner
                title={homePageConfig.banner.bannerTitle}
                textContent={homePageConfig.banner.bannerTextContent}
                imgSrc={homePageConfig.banner.bannerImgSrc}
                isReverse={homePageConfig.banner.bannerIsReverse}
            />
        </>
    )
}

export default HomePage;