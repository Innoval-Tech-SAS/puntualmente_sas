import homePageConfig from "../config/homePageConfig";
import { PageConfig } from "../../common/types/pageTypes";
import pageStyles from "../assets/css/homePage.module.css";
import PageWrapper from "../../common/layouts/pageWrapper";

const HomePage: React.FC = () => {
  return <PageWrapper config={homePageConfig as PageConfig}></PageWrapper>;
};

export default HomePage;
