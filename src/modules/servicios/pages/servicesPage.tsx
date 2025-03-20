import servicesPageConfig from "../config/servicesPageConfig";
import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";

const ServicesPage: React.FC = () => {

    return (
        <PageWrapper config={servicesPageConfig as PageConfig}>
            <section className={``}>

            </section>
        </PageWrapper>
    )
}

export default ServicesPage;