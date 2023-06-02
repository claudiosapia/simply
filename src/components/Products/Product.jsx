import React from "react";
import { Card, Typography } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <Card
        className="product-card"
        key={product.id}
        bodyStyle={{ padding: "2px" }}
        type="inner"
        cover={
          <img
            src={product.photo_url}
            alt={product.name}
          />
        }>
        <Title level={4}>{product.name}</Title>
        <Title level={5}>Price: £{product.price} </Title>
        <Paragraph>Quantity: {product.quantity} </Paragraph>
        <button
          onClick={() => onAdd(product)}
          className="add-to-cart-btn">
          {<ShoppingOutlined />} Add
        </button>
      </Card>
      {/*         
      <img className="small" src={product.photo_url} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div> */}
    </div>
  );
}
