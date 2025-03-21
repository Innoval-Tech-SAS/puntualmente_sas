import BannerProps, { BannerTextProps } from "../types/bannerTypes";
import bannerStyles from "../assets/css/banner.module.css";

const BannerText: React.FC<BannerTextProps> = ({
  title,
  textContent,
  listText,
  listItems,
}) => {
  return (
    <div className={bannerStyles.bannerContent}>
      <div>
        <h1 className={bannerStyles.bannerTitle}>{title}</h1>
        <span className={bannerStyles.bannerText}>{textContent}</span>
      </div>
      {listItems && listItems.length > 0 && listText && (
        <div className={bannerStyles.bannerListContainer}>
          <span className={bannerStyles.bannerTextList}>{listText}</span>
          <ul className={bannerStyles.banner_list}>
            {listItems.map((item, index) => (
              <li key={index} className={bannerStyles.bannerListItem}>
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
          ? bannerStyles.reverseBannerContainer
          : bannerStyles.bannerContainer
      }
    >
      <div
        className={
          isReverse
            ? bannerStyles.bannerWrapperReverse
            : bannerStyles.bannerWrapper
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
              ? bannerStyles.bannerImageReverse
              : bannerStyles.bannerImage
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
