import React from "react";
import Product from "./Product";
import { Row, Col, Divider, Typography } from "antd";

const { Title } = Typography;

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <div className="title-wrapper">
      <Title level={2}>Simply Shop </Title>
      <Divider />

      <Row
        gutter={[12, 24]}
        className="product-card-container">
        {products.map((product) => (
          <Col
            key={product.id}
            xs={14}
            sm={10}
            lg={8}
            xl={6}>
            <Product
              key={product.id}
              product={product}
              onAdd={onAdd}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
}
