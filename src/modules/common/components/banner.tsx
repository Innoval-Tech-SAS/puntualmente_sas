import BannerProps from "../types/bannerTypes";
import bannerStyles from "../assets/css/banner.module.css";

const Banner: React.FC<BannerProps> = ({ title, textContent, imgSrc, isReverse }) => {
    return (
        <div className={isReverse ? bannerStyles.reverse_banner_content : bannerStyles.banner_content}>
            <h1 className={bannerStyles.banner_title}>{title}</h1>
            <span className={bannerStyles.banner_text}>{textContent}</span>
            <div
                className={bannerStyles.banner_image}
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                }}
            >
            </div>
        </div>
    );
}

export default Banner;
