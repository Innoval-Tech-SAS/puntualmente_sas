// import Banner from "../../common/components/banner";
// import aboutPageConfig from "../config/aboutPageConfig";
// import React from 'react';
// import CardFlip from '../components/cardFlip';
// import ColumnInfo from '../components/columnInfo';
// import Section from "../../common/components/section";
// import ClientCarousel from "../../common/components/clientCarousel";

// const AboutPage: React.FC = () => {

//     return (
//         <>
//             <div>
//                 <Banner
//                     title={aboutPageConfig.banner.bannerTitle}
//                     textContent={aboutPageConfig.banner.bannerTextContent}
//                     imgSrc={aboutPageConfig.banner.bannerImgSrc}
//                     isReverse={aboutPageConfig.banner.bannerIsReverse}
//                 />
//             </div>
//             <Section title="Ciclo Funcional Operativo" titleColor="white" backgroundColor="rgba(198,40,40,1)">
//                 <div className="cards-container">
//                     {aboutPageConfig.cardsData.map((card, index) => (
//                         <CardFlip
//                             key={index}
//                             title={card.title}
//                             description={card.description}
//                             backTitle={card.backTitle}
//                             bulletPoints={card.bulletPoints}
//                         />
//                     ))}
//                 </div>
//             </Section>
//             <Section title="Descripción del Servicio" titleColor="rgba(198,40,40,1)" backgroundColor="white">
//                 <div className="column-layout">
//                     {aboutPageConfig.columnData.map((column, index) => (
//                         <ColumnInfo
//                             key={index}
//                             image={column.image}
//                             title={column.title}
//                             description={column.description}
//                         />
//                     ))}
//                 </div>
//             </Section>
//             <Section title="Nuestros Clientes" titleColor="black" backgroundColor="white">
//                 <ClientCarousel logos={aboutPageConfig.clientLogos} autoPlayInterval={3000} />
//             </Section>
//         </>
//     )
// }

// export default AboutPage;