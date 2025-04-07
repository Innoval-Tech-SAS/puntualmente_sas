import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import aboutPageConfig from "../config/aboutPageConfig";
import CardFlip from "../components/cardFlip";
import cardFlipConfig from "../config/cardFlipConfig";
import ColumnInfo from "../components/columnInfo";
import columnInfoConfig from "../config/columnInfoConfig";
import RedSection from "../../common/components/redSection";
import Section from "../../common/components/section";
import pageStyle from "../assets/css/pages.module.css";
import ClientCarousel from "../../common/components/clientsCarousel";
import clientSettings from "../../common/utilities/carouselSettings";

const HomePage: React.FC = () => {
  return (
    <PageWrapper config={aboutPageConfig as PageConfig}>
      <RedSection>
        <div className={pageStyle.cardsContainer}>
          <span className={pageStyle.title}>Ciclo Funcional</span>
          <span className={pageStyle.title}>Operativo</span>
          
          <div className={pageStyle.columnCard}>
            {cardFlipConfig.cardsData.map((card, index) => (
              <CardFlip
                key={index}
                title={card.title}
                description={card.description}
                bulletPoints={card.bulletPoints}
              />
            ))}
          </div>
          
        </div>
      </RedSection>

      <Section>
        <div className={pageStyle.cardsContainer}>
          <span className={pageStyle.redTitle}>Descripción del</span>
          <span className={pageStyle.redTitle}>Servicio</span>
          <div className={pageStyle.rowsContainer}>
            {columnInfoConfig.columnData.map((column, index) => (
              <ColumnInfo
                key={index}
                image={column.image}
                title={column.title}
                description={column.description}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className={pageStyle.clientsContainer}>
          <ClientCarousel settings={clientSettings}/>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
