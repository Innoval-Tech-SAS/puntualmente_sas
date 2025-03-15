import BannerProps from "../types/bannerTypes";
import bannerStyles from "../assets/css/banner.module.css";

const Banner: React.FC<BannerProps> = ({ title, textContent, imgSrc, isReverse }) => {


    return (
        <>
            <div className={isReverse ? `${bannerStyles.reverse_banner_container}` : `${bannerStyles.banner_container}`}>
                <div className="banner_section">
                    <div className="banner_text_container">
                        <h1 className={bannerStyles.banner_title}>{title}</h1>
                        <span className={bannerStyles.banner_text}>{textContent}</span>
                    </div>
                </div>
                <div className="banner_section">
                    <div className={bannerStyles.banner_image}>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Banner;