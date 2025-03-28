import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../assets/css/carousel.module.css";
import CarouselTypes from "../types/carouselTypes";
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";

// const NextArrow: React.FC<any> = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div className={`${className} ${styles.arrow}`} onClick={onClick} style={{ ...style }}>
//       <GrNext size={25} color="#c62828" />
//     </div>
//   );
// };

// const PrevArrow: React.FC<any> = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div className={`${className} ${styles.arrow}`} onClick={onClick} style={{ ...style }}>
//       <GrPrevious size={25} color="#c62828" />
//     </div >
//   );
// };

const HomeCarousel: React.FC<CarouselTypes> = ({ settings, cardData }) => {

  const customSettings = {
    ...settings,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  }

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...customSettings}>
        {cardData.map((card, index) => (
          <Card key={index} className={styles.carouselCard}>
            <CardBody className={styles.cardBody}>
              <Image
                alt={card.alt}
                className={styles.cardImage}
                src={card.imgSrc}
              />
            </CardBody>
            <CardFooter className={styles.cardFooter}>
              <p className={styles.text}>{card.textContent}</p>
            </CardFooter>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
