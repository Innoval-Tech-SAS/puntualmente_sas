import styles from "../assets/css/section.module.css";
import SectionProps from "../types/sectionTypes";


const Section: React.FC<SectionProps> = ({children}) => {
  return (
    <section className={styles.sectionContainer}>
      {children}
    </section>
)
};

export default Section