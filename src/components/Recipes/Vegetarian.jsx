import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Divider } from "antd";
import fallback from "../../assets/fallback.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const { Paragraph, Title } = Typography;

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);
  useEffect(() => {
    getVegetarian();
  }, []);

  //if cached used cached data else fetch data from api
  const getVegetarian = async () => {
    //check if Vegetarian saved to local storage

    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10&tags=vegetarian`
    );
    const data = await api.json();

    //then back  to array
    setVegetarian(data.recipes);
  };
  const addImageFallback = (event) => {
    event.currentTarget.src = fallback;
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
            perPage: 4, // Display 4 cards per slide
            breakpoints: {
              1200: { perPage: 3 }, // On screens wider than 1200px, display 3 cards per slide
              768: { perPage: 2 }, // On screens wider than 768px, display 2 cards per slide
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
                        <img
                          alt={elem.title}
                          src={elem.image}
                          onError={addImageFallback}
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
