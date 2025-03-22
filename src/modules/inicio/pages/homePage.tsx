import { PageConfig } from "../../common/types/pageTypes";
import homePageConfig from "../config/homePageConfig";
import styles from "../assets/css/page.module.css"
import PageWrapper from "../../common/layouts/pageWrapper";
import RedSection from "../../common/components/redSection";
import DescriptionCard from "../components/descriptionCard";
import cardList from "../config/descriptionCards";

const HomePage: React.FC = () => {
  return (
    <PageWrapper config={homePageConfig as PageConfig}>
      <RedSection>
        <div className={styles.cardsContainer}>  
        {cardList.map((card, index) => (
          <DescriptionCard
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            isReverse={card.isReverse}
          />
        ))}
        </div>
      </RedSection>
    </PageWrapper>
  );
};

export default HomePage;
