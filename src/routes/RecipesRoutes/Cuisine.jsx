import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Card, Col, Row, Typography, Divider } from "antd";

const { Title } = Typography;

const Cuisines = () => {
  const [cuisines, setCuisines] = useState([]);
  const params = useParams();

  const getCuisines = async (name) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}`
    );
    const data = await resp.json();
    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getCuisines(params.type).then((data) => {
      if (isMounted) setCuisines(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

  return (
    <div className="cat-title-wrapper">
      <Title level={2}>{params.type} Recipes</Title>
      <Divider />
      <Row gutter={[6, 32]}>
        {cuisines.map(({ id, title, image }) => (
          <Col
            xs={24}
            sm={10}
            lg={8}
            xl={8}
            span={6}>
            <Card
              className="recipe-card"
              key={id}
              bodyStyle={{ padding: "2px" }}
              type="inner"
              cover={
                <img
                  src={image}
                  alt={title}
                />
              }>
              <Link to={`/recipe/${id}`}>
                <Title level={5}>{title}</Title>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cuisines;
