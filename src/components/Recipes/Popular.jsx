import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Divider } from "antd";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fallback from "../../assets/fallback.jpg";

const { Paragraph, Title } = Typography;

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`
    );
    const data = await api.json();

    setPopular(data.recipes);
  };

  return (
    <>
      <div className="splider-cont">
        <div className="title-wrapper">
          <Title level={2}>Popular Recipes</Title>
        </div>
        <Divider />

        <Splide
          key="splide"
          options={{
            gap: "5rem",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 4,
            breakpoints: {
              1200: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              576: {
                perPage: 1,
              },
            },
          }}>
          {popular?.map((elem) => {
            return (
              <SplideSlide
                key={elem.id}
                className="card-cont">
                <Link to={`/recipe/${elem.id}`}>
                  <Card
                    className="recipe-slider-card"
                    hoverable
                    cover={
                      <div style={{ overflow: "hidden" }}>
                        <LazyLoadImage
                          alt={elem.title}
                          effect="blur"
                          height="100%"
                          placeholderSrc={fallback}
                          src={elem.image}
                          width="100%"
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

export default Popular;
