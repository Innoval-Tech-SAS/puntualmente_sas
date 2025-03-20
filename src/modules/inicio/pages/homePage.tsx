import Banner from "../../common/components/banner";
import Navbar from "../../common/components/navbar";
import Footer from "../../common/components/footer";
import homePageConfig from "../config/homePageConfig";
import pageStyles from "../assets/css/homePage.module.css"
import FormExample from "../../contacto/components/contactForm";
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
            <section className={pageStyles.cards_container}>
                <FormExample />
            </section>

            <Footer />
        </>
    )
}

export default HomePage;