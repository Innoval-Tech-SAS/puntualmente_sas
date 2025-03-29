import React from "react";
import Slider from "react-slick";
import styles from "../assets/css/clientCarousel.module.css";
import CarouselProps, { CarouselItemProps } from "../types/carouselTypes";
import clientsImg from "../utilities/clientsLogos";

const CarouselItem: React.FC<CarouselItemProps> = ({ imgSrc }) => {
  return (
    <div className={styles.itemContainer}>
      {imgSrc.map((src, index) => (
        <div key={index} className={styles.imgContainer}>
          <img
            className={styles.img}
            src={`assets/images/slider_images/${src}`}
            alt={`Client logo ${index + 1}`}
            onError={(e) => {
              console.error(`Image load error for ${src}`, e);
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
};

const ClientCarousel: React.FC<CarouselProps> = ({ settings }) => {
  const carouselLogos: CarouselItemProps[] = clientsImg.map((logoSet) => ({
    imgSrc: logoSet as [string, string, string],
  }));

  return (
    <>
      <div className={styles.carouselTitle}>
        <h3 className={styles.title}>Nuestros Clientes</h3>
      </div>

      <div className={styles.container}>
        <Slider {...settings}>
          {carouselLogos.map((logoItem, index) => (
            <CarouselItem key={index} imgSrc={logoItem.imgSrc} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ClientCarousel;
