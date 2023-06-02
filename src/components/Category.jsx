import { Link } from "react-router-dom";
import { Col, Row, Divider, Typography } from "antd";

import { IoFastFoodOutline, IoPizzaOutline } from "react-icons/io5";
import {
  GiNoodles,
  GiBowlOfRice,
  GiOyster,
  GiWok,
  GiOlive,
  GiSalmon,
} from "react-icons/gi";
const { Title } = Typography;

const Category = () => {
  return (
    <>
      <div className="title-wrapper">
        <Title level={2}>Popular Cuisines</Title>
      </div>
      <Divider orientation="vertical" />

      <Row
        className="row-categories"
        gutter={[32, 16]}>
        <Col span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/Italian"}>
              <IoPizzaOutline />
              <h4>Italian</h4>
            </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/Spanish"}>
              <GiWok />
              <h4>Spanish</h4>
            </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/French"}>
              <GiOyster />
              <h4>French</h4>
            </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/Mediterranean"}>
              <GiOlive />
              <h4>Mediterranean</h4>
            </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/British"}>
              <GiSalmon />
              <h4>British</h4>
            </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/American"}>
              <IoFastFoodOutline />
              <h4>American</h4>
            </Link>
          </div>
        </Col>
        <Col
          className="gutter-row"
          span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/Thai"}>
              <GiBowlOfRice />
              <h4>Thai</h4>
            </Link>
          </div>
        </Col>

        <Col
          className="gutter-row"
          span={6}>
          <div className="category-link-wrapper">
            <Link to={"/cuisines/Korean"}>
              <GiNoodles />
              <h4>Korean</h4>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Category;
