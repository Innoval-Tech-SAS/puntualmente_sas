import styles from "../assets/css/redSection.module.css";
import SectionProps from "../types/sectionTypes";


const RedSection: React.FC<SectionProps> = ({children}) => {
  return (
    <section className={styles.redSectionContainer}>
      {children}
    </section>
)
};

export default RedSection