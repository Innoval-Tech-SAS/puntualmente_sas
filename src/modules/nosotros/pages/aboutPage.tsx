import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import aboutPageConfig from "../config/aboutPageConfig";
import CardFlip from "../components/cardFlip";
import cardFlipConfig from '../config/cardFlipConfig'
import '../assets/css/cardFlip.css';
import ColumnInfo from "../components/columnInfo";
import columnInfoConfig from '../config/columnInfoConfig'



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
      <section className="columns-wrapper">
        {columnInfoConfig.columnData.map((column, index) => (
          <ColumnInfo
            key={index}
            image={column.image}
            title={column.title}
            description={column.description}
          />
        ))}
      </section>
    </PageWrapper>
  );
};

export default HomePage;
