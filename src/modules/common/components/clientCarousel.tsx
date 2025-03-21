import CarouselProps from "../types/carouselTypes";
import React, { useState, useEffect } from "react";
import "../assets/css/carousel.module.css";

const ClienteCarousel: React.FC<CarouselProps> = ({
  logos,
  autoPlayInterval,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [logos.length, autoPlayInterval]);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <img
            src={logos[currentIndex]}
            alt="Client Logo"
            className="carousel-logo"
          />
        </div>
      </div>
    </>
  );
};

export default ClienteCarousel;
