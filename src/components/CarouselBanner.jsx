import { React, useState } from "react";

import { Carousel } from "antd";
import banner01 from "../assets/banner-min.png";
import chicken from "../assets/friedchicken-min.png";
import electronics from "../assets/electronics-min.png";
import furniture from "../assets/furniture-banner.png";

const CarouselBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Carousel
      autoplay
      className="carousel-main">
      <div className="carousel-container">
        <img
          id="1"
          className="carousel-img"
          src={banner01}
          alt="banner displaying produce section of grocery store"
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <div className="carousel-container">
        <img
          id="2"
          className="carousel-img"
          src={chicken}
          alt="banner displaying fried chicken"
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <div className="carousel-container">
        <img
          id="3"
          className="carousel-img"
          src={electronics}
          alt="banner displaying a video game controller"
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <div className="carousel-container">
        <img
          id="4"
          className="carousel-img"
          src={furniture}
          alt="banner displaying a chair"
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </Carousel>
  );
};
export default CarouselBanner;
