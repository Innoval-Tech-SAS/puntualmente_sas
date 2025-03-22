import { PageConfig } from "../../common/types/pageTypes";
import homePageConfig from "../config/homePageConfig";
import PageWrapper from "../../common/layouts/pageWrapper";
import RedSection from "../../common/components/redSection";
import DescriptionCard from "../components/descriptionCard";


const HomePage: React.FC = () => {
  return (
    <PageWrapper config={homePageConfig as PageConfig}>
      <RedSection>
          
      </RedSection>
    </PageWrapper>
  )
};

export default HomePage;
