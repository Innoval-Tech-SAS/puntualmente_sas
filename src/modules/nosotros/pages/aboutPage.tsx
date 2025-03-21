import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import aboutPageConfig from "../config/aboutPageConfig";

const HomePage: React.FC = () => {
  return (
    <PageWrapper config={aboutPageConfig as PageConfig}>
      <section className={``}></section>
    </PageWrapper>
  );
};

export default HomePage;
