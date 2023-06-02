import { Carousel } from "antd";
import banner01 from "../assets/banner-min.png";
import chicken from "../assets/friedchicken-min.png";
import electronics from "../assets/electronics-min.png";
import furniture from "../assets/furniture-banner.png";

const CarouselBanner = () => (
  <Carousel
    autoplay
    className="carousel-main">
    <div className="carousel-container">
      <img
        id="1"
        className="carousel-img"
        src={banner01}
        alt="banner image displaying produce section of grocery store"
      />
    </div>
    <div className="carousel-container">
      <img
        id="2"
        className="carousel-img"
        src={chicken}
        alt="banner image displaying fried chicken"
      />
    </div>
    <div className="carousel-container">
      <img
        id="3"
        className="carousel-img"
        src={electronics}
        alt="banner image displaying a video game controller"
      />
    </div>
    <div className="carousel-container">
      <img
        id="4"
        className="carousel-img"
        src={furniture}
        alt="banner image displaying a chair"
      />
    </div>
  </Carousel>
);
export default CarouselBanner;
