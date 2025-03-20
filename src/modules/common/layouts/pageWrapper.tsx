import PageWrapperProps from "../types/pageTypes";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";

const PageWrapper: React.FC<PageWrapperProps> = ({ children, config }) => {
    return (
        <>
            <Navbar navItems={config.navbar.navItems} navButtons={config.navbar.navButtons} />
            <Banner
                title={config.banner.bannerTitle}
                textContent={config.banner.bannerTextContent}
                imgSrc={config.banner.bannerImgSrc}
                isReverse={config.banner.bannerIsReverse}
            />
            {children}
            <Footer />
        </>
    );
};


export default PageWrapper;