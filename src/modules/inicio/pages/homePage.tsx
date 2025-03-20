import homePageConfig from "../config/homePageConfig";
import { PageConfig } from "../../common/types/pageTypes";
import pageStyles from "../assets/css/homePage.module.css"
import FormExample from "../../contacto/components/contactForm";
import PageWrapper from "../../common/layouts/pageWrapper";

const HomePage: React.FC = () => {

    return (
        <PageWrapper config={homePageConfig as PageConfig}>
            <section className={pageStyles.cards_container}>
                <FormExample />
            </section>
        </PageWrapper>
    )
}

export default HomePage;