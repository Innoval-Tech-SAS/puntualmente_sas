import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../assets/css/carousel.module.css";
import CarouselTypes from "../types/carouselTypes";

const HomeCarousel: React.FC<CarouselTypes> = ({ settings, cardData }) => {
  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className={``}>
            <Card className={styles.carouselCard}>
              <CardBody className={styles.cardBody}>
                <Image
                  alt={card.alt}
                  className={styles.cardImage}
                  src={card.imgSrc}
                />
              </CardBody>
              <CardFooter className={styles.cardFooter}>
                <p>{card.textContent}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;