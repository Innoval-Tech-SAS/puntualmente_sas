import servicesPageConfig from "../config/servicesPageConfig";
import { PageConfig } from "../../common/types/pageTypes";
import PageWrapper from "../../common/layouts/pageWrapper";
import RedSection from "../../common/components/redSection";
import pageStyle from "../assets/css/pages.module.css";
import columnServicesConfig from "../config/columnServicesConfig";
import ColumnServices from "../components/columnServices";
import Section from "../../common/components/section";
import debtRecoveryConfig from "../config/debtRecoveryConfig";
import DebtRecovery from "../components/debtRecovery";
import managementGroupConfig from "../config/managementGroupConfig";
import ManagementGroup from "../components/managementGroup";


const ServicesPage: React.FC = () => {

    return (
        <PageWrapper config={servicesPageConfig as PageConfig}>
            <RedSection>
                <div className={pageStyle.cardsContainer}>
                    <span className={pageStyle.title}>Servicios</span>
                    <span className={pageStyle.title}>Puntualmente</span>
                    <div className={pageStyle.colsContainer}>
                        {columnServicesConfig.servicesData.map((service, index) => (
                            <ColumnServices
                                key={index}
                                image={service.image}
                                title={service.title}
                                sublist={service.sublist}
                            />
                        ))}
                    </div>
                </div>
            </RedSection>
            <Section>
                <div className={pageStyle.cardsContainer}>
                    <span className={pageStyle.redTitle}>Recuperación de</span>
                    <span className={pageStyle.redTitle}>Cartera</span>
                    <div className={pageStyle.colsContainer} id={pageStyle.imgContainer}>
                        {debtRecoveryConfig.recoveryData.map((recovery, index) => (
                            <DebtRecovery
                                key={index}
                                title={recovery.title}
                                description={recovery.description}
                            />
                        ))}
                    </div>
                </div>
            </Section>
            <RedSection>
                <div className={pageStyle.cardsContainer}>
                    <span className={pageStyle.title}>Gestión Omnicanal</span>
                    <span className={pageStyle.title}>Todos los servicios en una misma compañía</span>
                    <div className={pageStyle.colsContainer}>
                        {managementGroupConfig.groupData.map((group, index) => (
                            <ManagementGroup
                            key={index}
                            title={group.title}
                            description={group.description}
                            />
                        ))}
                    </div>
                </div>
            </RedSection>
        </PageWrapper>
    )
}

export default ServicesPage;