import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../assets/css/carousel.module.css";
import CarouselTypes from "../types/carouselTypes";

const HomeCarousel: React.FC<CarouselTypes> = ({ settings, children }) => {
  return (
    <div className={`${styles.carouselWrapper} slider-wrapper`}>
      <Slider {...settings}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className={styles.itemsContainer}>
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel