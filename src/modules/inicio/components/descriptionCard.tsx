import styles from "../assets/css/descriptionCard.module.css";
import DescriptionCardProps from "../types/descriptionCardTypes";

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <div className={styles.descriptionCard}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div className={styles.descriptionTextContainer}>
        <h3 className={styles.descriptionTitle}>{title}</h3>
        <p className={styles.description_text}>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
