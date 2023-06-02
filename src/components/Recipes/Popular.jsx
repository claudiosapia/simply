import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Divider } from "antd";

import fallback from "../../assets/fallback.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const { Paragraph, Title } = Typography;

const addImageFallback = (event) => {
  event.currentTarget.src = fallback;
};

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
                        <img
                          alt={elem.title}
                          onError={addImageFallback}
                          src={elem.image}
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
