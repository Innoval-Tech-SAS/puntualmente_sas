import styles from "../assets/css/descriptionCard.module.css";
import DescriptionCardProps from "../types/descriptionCardTypes";

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  description,
  imgSrc,
  isReverse
}) => {
  return (
    <div className={isReverse ? styles.descriptionCardReverse : styles.descriptionCard }>
      <div
        className={styles.cardImage}
        style={{ 
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        
        }}
      ></div>
      <div className={styles.descriptionTextContainer}>
        <h3 className={styles.descriptionTitle}>{title}</h3>
        <p className={styles.descriptionText}>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
