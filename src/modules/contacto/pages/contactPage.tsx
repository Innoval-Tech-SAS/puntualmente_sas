import contactPageConfig from "../config/contactPageConfig";
import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";

const ContactPage: React.FC = () => {

    return (
        <PageWrapper config={contactPageConfig as PageConfig}>
            <section className={``}>

            </section>
        </PageWrapper>
    )
}

export default ContactPage;