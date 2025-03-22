import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import aboutPageConfig from "../config/aboutPageConfig";
import CardFlip from "../components/cardFlip";
import cardFlipConfig from '../config/cardFlipConfig'
import '../assets/css/cardFlip.css';


const HomePage: React.FC = () => {
  return (
    <PageWrapper config={aboutPageConfig as PageConfig}>
      <section className={'cards-wrapper'}>
        {cardFlipConfig.cardsData.map((card, index) => (
          <CardFlip
            key={index}
            title={card.title}
            description={card.description}
            backTitle={card.backTitle}
            bulletPoints={card.bulletPoints}
          />
        ))}
      </section>
    </PageWrapper>
  );
};

export default HomePage;
