import BannerProps, { BannerTextProps } from "../types/bannerTypes";
import bannerStyles from "../assets/css/banner.module.css";

const BannerText: React.FC<BannerTextProps> = ({
  title,
  textContent,
  listText,
  listItems,
}) => {
  return (
    <div className={bannerStyles.banner_content}>
      <div>
        <h1 className={bannerStyles.banner_title}>{title}</h1>
        <span className={bannerStyles.banner_text}>{textContent}</span>
      </div>
      {listItems && listItems.length > 0 && listText && (
        <div className={bannerStyles.banner_list_container}>
          <span className={bannerStyles.banner_text_list}>{listText}</span>
          <ul className={bannerStyles.banner_list}>
            {listItems.map((item, index) => (
              <li key={index} className={bannerStyles.banner_list_item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Banner: React.FC<BannerProps> = ({ content, imgSrc, isReverse }) => {
  return (
    <div
      className={
        isReverse
          ? bannerStyles.reverse_banner_container
          : bannerStyles.banner_container
      }
    >
      <div
        className={
          isReverse
            ? bannerStyles.banner_wrapper_reverse
            : bannerStyles.banner_wrapper
        }
      >
        <BannerText
          title={content.title}
          textContent={content.textContent}
          listText={content.listText}
          listItems={content.listItems}
        />

        <div
          className={
            isReverse
              ? bannerStyles.banner_image_reverse
              : bannerStyles.banner_image
          }
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
