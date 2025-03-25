import settings from "../config/carousel";
import HomeCarousel from "../components/carousel";
import cardList from "../config/descriptionCards";
import styles from "../assets/css/page.module.css";
import homePageConfig from "../config/homePageConfig";
import Section from "../../common/components/section";
import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import RedSection from "../../common/components/redSection";
import DescriptionCard from "../components/descriptionCard";
import CarouselCard from "../components/carouselCard";

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
        <div className={styles.carouselContainer}>
          <div>
            <h3 className={styles.carouselTitle}>Lo útimo PUNTUALMENTE</h3>
          </div>

          <div className={styles.carouselContent}>
            <HomeCarousel settings={settings}>
              <CarouselCard/>
            </HomeCarousel>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
