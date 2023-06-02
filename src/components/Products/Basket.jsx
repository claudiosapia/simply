import React from "react";

import { Col, Row, Typography, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <main>
      <div className="cart-icon-wrapper">
        <ShoppingCartOutlined />
      </div>

      <aside id="under">
        <div>
          {cartItems.length !== 0 && (
            <aside
              className="cart-wrapper"
              id="cart-wrapper">
              <Title level={2}>
                <ShoppingCartOutlined /> My Cart
              </Title>

              {cartItems?.map((item) => (
                <Row
                  key={item.id}
                  gutter={[12, 24]}
                  className="product-card-container">
                  <Col
                    xs={14}
                    sm={10}
                    lg={8}
                    xl={24}>
                    <Title level={4}>{item.name}</Title>
                    <img
                      src={item.photo_url}
                      alt={item.name}
                      style={{ width: 150 }}
                    />
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Button
                        onClick={() => onRemove(item)}
                        className="remove">
                        -
                      </Button>{" "}
                      <Button
                        onClick={() => onAdd(item)}
                        className="add">
                        +
                      </Button>
                    </Col>

                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      {item.qty} ({item.quantity}) ${item.price.toFixed(2)}
                    </Col>
                  </Col>
                </Row>
              ))}

              {cartItems.length !== 0 && (
                <>
                  <hr></hr>
                  <Row
                    gutter={[12, 24]}
                    className="product-card-container">
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Paragraph>Items Price</Paragraph>
                    </Col>
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Paragraph className="col-1 text-right">
                        ${itemsPrice.toFixed(2)}
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row
                    gutter={[12, 24]}
                    className="product-card-container">
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Paragraph>Tax Price</Paragraph>
                    </Col>
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Paragraph className="col-1 text-right">
                        ${taxPrice.toFixed(2)}
                      </Paragraph>
                    </Col>
                  </Row>
                  <Row
                    gutter={[12, 24]}
                    className="product-card-container">
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Paragraph>Shipping Price</Paragraph>
                    </Col>
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Paragraph className="col-1 text-right">
                        ${shippingPrice.toFixed(2)}
                      </Paragraph>
                    </Col>
                  </Row>

                  <Row
                    gutter={[12, 24]}
                    className="product-card-container">
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <div className="title-wrapper">
                        <Title level={2}>Total Price</Title>
                      </div>
                      <Title level={2}>${totalPrice.toFixed(2)}</Title>
                    </Col>
                  </Row>
                  <hr />
                  <Row
                    gutter={[12, 24]}
                    className="product-card-container">
                    <Col
                      xs={14}
                      sm={10}
                      lg={8}
                      xl={24}>
                      <Button onClick={() => alert("Implement Checkout!")}>
                        Checkout
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </aside>
          )}
        </div>
      </aside>
    </main>
  );
}
