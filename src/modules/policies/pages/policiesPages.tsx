import pageConfig from "../config/config";
import PageWrapper from "../../common/layouts/pageWrapper";
import PdfViewer from "../components/pdfViewer";
import Section from "../../common/components/section";
import { PageConfig } from "../../common/types/pageTypes";

const PoliciesPages: React.FC = () => {
  return (
    <PageWrapper config={pageConfig as PageConfig}>
      <Section>
        <PdfViewer pdfUrl="/files/DA-SI-46 POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES PUNTUALMENTE SAS.pdf" />
      </Section>
    </PageWrapper>
  );
};

export default PoliciesPages;
