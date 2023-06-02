import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "antd";

import CarouselBanner from "../components/CarouselBanner";
import ImageGallerySM from "../components/ImageGallerySM";
import Popular from "../components/Recipes/Popular";

import Hero from "../components/Hero";
const { Paragraph, Title } = Typography;

const Home = () => {
  return (
    <>
      <Hero />

      <section className="hero-footer">
        <Title className="heading-2"> Welcome to Simply,</Title>
        <Paragraph className="intro-p">
          your one-stop-shop for all your grocery needs!
        </Paragraph>
        <Paragraph className="intro-p">
          We are proud to offer a wide variety of high-quality, fresh, and
          affordable products to our valued customers. Whether you're looking
          for fresh produce, premium meats, or pantry staples, we've got you
          covered.
        </Paragraph>
        <Paragraph className="intro-p">
          At Simply, we believe that shopping for groceries should be a
          hassle-free and enjoyable experience. That's why we offer a range of
          special services, including online ordering, home delivery, and
          in-store pickup, to make your shopping experience as convenient and
          stress-free as possible.
        </Paragraph>
        <Paragraph className="intro-p">
          We are committed to providing exceptional customer service and
          building long-lasting relationships with our customers. Our
          knowledgeable staff is always available to answer your questions and
          help you find the products you need.
        </Paragraph>

        <Button>
          <Link to="/shop">Shop Now</Link>
        </Button>
        <section className="promo-banner"></section>

        <section className="recipes-home">
          <Popular />
          <Button>
            <Link to="/recipes">More Recipes</Link>
          </Button>
        </section>
      </section>
    </>
  );
};

export default Home;
