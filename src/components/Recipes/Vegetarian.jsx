import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Divider } from "antd";
import fallback from "../../assets/fallback.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const { Paragraph, Title } = Typography;
function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10&tags=vegetarian`
    );
    const data = await api.json();

    setVegetarian(data.recipes);
  };

  return (
    <>
      <div className="splider-cont">
        <div className="title-wrapper">
          <Title level={2}>Vegetarian Recipes</Title>
        </div>
        <Divider />

        <Splide
          key="splide"
          options={{
            gap: "1rem",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 4,
            breakpoints: {
              1200: { perPage: 3 },
              768: { perPage: 2 },
            },
          }}>
          {vegetarian?.map((elem) => {
            return (
              <SplideSlide
                key={elem.id}
                className="card-cont">
                <Link to={`/recipe/${elem.id}`}>
                  <Card
                    className="recipe-slider-card"
                    hoverable
                    cover={
                      <div
                        style={{ overflow: "hidden" }}
                        className="recipe-slider-img-cont">
                        <LazyLoadImage
                          src={elem.image}
                          placeholderSrc={fallback}
                          effect="blur"
                          alt={elem.title}
                        />
                      </div>
                    }>
                    <Paragraph>{elem.title}</Paragraph>
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Vegetarian;
