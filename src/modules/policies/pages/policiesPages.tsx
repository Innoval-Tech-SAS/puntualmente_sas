import pageConfig from "../config/config";
import PageWrapper from "../../common/layouts/pageWrapper";
// import PdfViewer from "../components/pdfViewer";
import Section from "../../common/components/section";
import { PageConfig } from "../../common/types/pageTypes";
import policiesConfig from "../config/policiesConfig";
import Policies from "../components/policies";
import pageStyle from "../assets/page.module.css";

const PoliciesPages: React.FC = () => {
  return (
    <PageWrapper config={pageConfig as PageConfig}>
      <Section>
        {/* <PdfViewer pdfUrl="/files/DA-SI-46 POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES PUNTUALMENTE SAS.pdf" /> */}
        <div className={pageStyle.policiesContainer}>
          <h3 className={pageStyle.header}>POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES PUNTUALMENTE S.A.S.</h3>
          {policiesConfig.policiesData.map((policy, index) => (
            <Policies
                key={index}
                title={policy.title}
                paragraphs={policy.paragraphs}
            />
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
};

export default PoliciesPages;