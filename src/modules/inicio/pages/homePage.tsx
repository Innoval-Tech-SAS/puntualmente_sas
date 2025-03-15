import Banner from "../../common/components/banner";
import homePageConfig from "../config/homePageConfig";

const HomePage: React.FC = () => {

    return (
        <>
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