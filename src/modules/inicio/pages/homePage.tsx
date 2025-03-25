import styles from "../assets/css/page.module.css"
import cardList from "../config/descriptionCards";
import homePageConfig from "../config/homePageConfig";
import Section from "../../common/components/section";
import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import RedSection from "../../common/components/redSection";
import DescriptionCard from "../components/descriptionCard";

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

      <Section>
        <h3>Lo útimo PUNTUALMENTE</h3>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
