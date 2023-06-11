import { React, useState } from "react";

import { Carousel } from "antd";
import banner01 from "../assets/banner-min.jpg";
import chicken from "../assets/friedchicken-min.jpg";
import electronics from "../assets/electronics-min.jpg";
import furniture from "../assets/furniture-banner.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fallback from "../assets/fallback.jpg";

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
        <LazyLoadImage
          src={banner01}
          placeholderSrc={fallback}
          effect="blur"
          alt="banner displaying produce section of grocery store"
          onLoad={handleImageLoad}
          id="1"
          className="carousel-img"
        />

        {!imageLoaded && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <div className="carousel-container">
        <LazyLoadImage
          id="2"
          placeholderSrc={fallback}
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
        <LazyLoadImage
          placeholderSrc={fallback}
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
        <LazyLoadImage
          placeholderSrc={fallback}
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
