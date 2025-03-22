import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import aboutPageConfig from "../config/aboutPageConfig";
import CardFlip from "../components/cardFlip";
import cardFlipConfig from "../config/cardFlipConfig";
import ColumnInfo from "../components/columnInfo";
import columnInfoConfig from "../config/columnInfoConfig";
import RedSection from "../../common/components/redSection";
import pageStyle from "../assets/css/pages.module.css";

const HomePage: React.FC = () => {
  return (
    <PageWrapper config={aboutPageConfig as PageConfig}>
      <RedSection>
        <div className={pageStyle.cardsContainer}>
        <span className={pageStyle.title}>Ciclo Funcional
        </span>
          <span className={pageStyle.title}>Operativo</span>
          <div className={pageStyle.columnCard}>
            {cardFlipConfig.cardsData.slice(0, 3).map((card, index) => (
              <CardFlip
                key={index}
                title={card.title}
                description={card.description}
                bulletPoints={card.bulletPoints}
              />
            ))}
          </div>
          <div className={pageStyle.columnCard}>
            {cardFlipConfig.cardsData.slice(3, 5).map((card, index) => (
              <CardFlip
                key={index + 3}
                title={card.title}
                description={card.description}
                bulletPoints={card.bulletPoints}
              />
            ))}
          </div>
        </div>
      </RedSection>

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
