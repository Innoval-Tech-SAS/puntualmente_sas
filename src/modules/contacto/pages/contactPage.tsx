import contactPageConfig from "../config/contactPageConfig";
import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import ContactForm from "../../contacto/components/contactForm";

const ContactPage: React.FC = () => {

    return (
        <PageWrapper config={contactPageConfig as PageConfig}>
            <section className={``}>
                <ContactForm />
            </section>
        </PageWrapper>
    )
}

export default ContactPage;