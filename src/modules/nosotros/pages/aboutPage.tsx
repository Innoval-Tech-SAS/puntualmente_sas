import Banner from "../../common/components/banner";
import aboutPageConfig from "../config/aboutPageConfig";
import React from 'react';
import CardFlip from '../components/cardFlip';
import Section from "../../common/components/section";

const AboutPage: React.FC = () => {

    // añadir más cards
    const cardsData = [
        { title: "Planeación Estratégica", description: "Hola", backTitle: "Reverso 1", bulletPoints: ["adios0", "adios1", "adios2", "adios3"] },
        { title: "Gestión Operativa", description: "Hola", backTitle: "Reverso 2", bulletPoints: ["adios0", "adios1", "adios2", "adios3"] },
        { title: "Gestión Omnicanal", description: "Hola", backTitle: "Reverso 3", bulletPoints: ["adios0", "adios1", "adios2", "adios3"] },
        { title: "Capacitación y Formación", description: "Hola", backTitle: "Reverso 4", bulletPoints: ["adios0", "adios1", "adios2", "adios3"] },
        { title: "Control Interno y Calidad", description: "Hola", backTitle: "Reverso 5", bulletPoints: ["adios0", "adios1", "adios2", "adios3"] }
    ];

    return (
        <>
            <div>
                <Banner
                    title={aboutPageConfig.banner.bannerTitle}
                    textContent={aboutPageConfig.banner.bannerTextContent}
                    imgSrc={aboutPageConfig.banner.bannerImgSrc}
                    isReverse={aboutPageConfig.banner.bannerIsReverse}
                />
            </div>
            <Section title="Ciclo Funcional Operativo" titleColor="white" backgroundColor="rgba(198,40,40,1)">
                <div className="cards-container">
                    {cardsData.map((card, index) => (
                        <CardFlip 
                            key={index} 
                            title={card.title} 
                            description={card.description} 
                            backTitle={card.backTitle} 
                            bulletPoints={card.bulletPoints} 
                        />
                    ))}
                </div>
            </Section>
            <Section title="Descripción del Servicio" titleColor="rgba(198,40,40,1)" backgroundColor="white">
                <div className="cards-container">
                    {cardsData.map((card, index) => (
                        <CardFlip 
                            key={index} 
                            title={card.title} 
                            description={card.description} 
                            backTitle={card.backTitle} 
                            bulletPoints={card.bulletPoints} 
                        />
                    ))} 
                </div>
            </Section>
        </>
    )
}

export default AboutPage;