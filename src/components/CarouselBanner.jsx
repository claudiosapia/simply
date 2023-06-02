import { Carousel } from "antd";
import banner01 from "../assets/banner-min.png";
import chicken from "../assets/friedchicken-min.png";
import electronics from "../assets/electronics-min.png";
import furniture from "../assets/furniture-banner.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const CarouselBanner = () => (
  <Carousel
    autoplay
    className="carousel-main">
    <div className="carousel-container">
      <img
        id="1"
        className="carousel-img"
        src={banner01}
      />
    </div>
    <div className="carousel-container">
      <img
        id="2"
        className="carousel-img"
        src={chicken}
      />
    </div>
    <div className="carousel-container">
      <img
        id="3"
        className="carousel-img"
        src={electronics}
      />
    </div>
    <div className="carousel-container">
      <img
        id="4"
        className="carousel-img"
        src={furniture}
      />
    </div>
  </Carousel>
);
export default CarouselBanner;
