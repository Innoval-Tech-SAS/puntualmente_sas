import styles from "../assets/css/descriptionCard.module.css"
import DescriptionCardProps from "../types/descriptionCardTypes";

const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, description, imgSrc }) => {
  return (
    <div className={styles.description_card}>
      <div style={{ backgroundImage: `url(${imgSrc})` }}>
      </div>
      <div className={styles.description_text_container}>
        <h3 className={styles.description_title}>{title}</h3>
        <p className={styles.description_text}>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;