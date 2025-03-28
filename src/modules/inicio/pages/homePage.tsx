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
import Locations from "../components/location";

const HomePage: React.FC = () => {

  const cardData = [{
    imgSrc: "/assets/images/carousel_image_1.jpg",
    textContent: "10 años de experiencia, miles de conversaciones exitosas, incontables conexiones construidas. ¡Cumplimos 10 años juntos!",
    alt: "Carousel image 1",
  }]
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

          <div className={styles.carouselWrapper}>
            <HomeCarousel settings={settings} cardData={cardData} />
          </div>
        </div>

        <div className={styles.locationsContainer}>
          <Locations />
        </div>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
