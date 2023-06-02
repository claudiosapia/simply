import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState({});

  const params = useParams();
  useEffect(() => {
    const fetchDetails = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      const data = await api.json();
      setDetails(data);
      console.log(data);
    };

    fetchDetails();
  }, [params.id]);

  return (
    <>
      <section className="single-recipe-section">
        <Row gutter={[12, 24]}>
          <Col span={12}>
            <h2 className="single-recipe-h2">{details.title}</h2>
            <img
              src={details.image}
              alt={details.title}
            />
          </Col>
        </Row>

        <Row
          gutter={[12, 24]}
          className="searchedRecipe-card-container">
          <Col>
            <h2 className="single-recipe-h2">Ingredients</h2>

            {
              <ul>
                {details?.extendedIngredients?.map(({ id, original }) => (
                  <li key={id}>{original}</li>
                ))}
              </ul>
            }

            <Button>
              <Link to="/shop">
                <ShoppingCartOutlined /> Shop Now
              </Link>
            </Button>
          </Col>
        </Row>

        <Row
          gutter={[12, 24]}
          className="searchedRecipe-card-container">
          <Col>
            <h2 className="single-recipe-h2">Instructions</h2>

            {
              <div>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: details.instructions,
                  }}></p>
              </div>
            }
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Recipe;
