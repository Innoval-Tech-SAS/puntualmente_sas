
import DescriptionCard from "../types/descriptionCardTypes";


const DescriptionCard: React.FC<DescriptionCard> = ({ title, description, imgSrc }) => {
  return (
    <div className={styles.description_card}>
      <div className="" style={{ backgroundImage: {`url()`} }}></div>
      <div className="description_text_container">
        <h3 className={styles.description_title}>{title}</h3>
        <p className={styles.description_text}>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
