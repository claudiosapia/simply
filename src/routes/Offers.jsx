import React from "react";
import { Typography, Card, Button } from "antd";
import { StarOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const OffersPage = () => {
  return (
    <div className="offer-container">
      <Title className="heading-2">Special Offers</Title>
      <Paragraph>
        Check out our latest special offers and save big on your grocery
        shopping.
      </Paragraph>
      <div className="offer-list">
        <Card
          className="offer-card"
          cover={
            <img
              alt="Special Offer 1"
              src="https://via.placeholder.com/300x150"
            />
          }
          actions={[
            <Button
              className="offer-btn"
              type="primary">
              Add to Cart
            </Button>,
          ]}>
          <Card.Meta
            title="Product Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo quis sapien aliquet commodo non vel dui. Nulla eget odio ut augue commodo aliquet. Nullam finibus felis vel purus vehicula sodales."
          />
          <div className="offer-price">
            <span className="offer-discount">20% off</span>
            <span className="offer-original-price">£5.99</span>
            <span className="offer-sale-price">£4.79</span>
          </div>
          <div className="offer-rating">
            <StarOutlined style={{ marginRight: "5px" }} />
            <span>4.5 (25)</span>
          </div>
        </Card>
        <Card
          className="offer-card"
          cover={
            <img
              alt="Special Offer 2"
              src="https://via.placeholder.com/300x150"
            />
          }
          actions={[
            <Button
              className="offer-btn"
              type="primary">
              Add to Cart
            </Button>,
          ]}>
          <Card.Meta
            title="Product Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo quis sapien aliquet commodo non vel dui. Nulla eget odio ut augue commodo aliquet. Nullam finibus felis vel purus vehicula sodales."
          />
          <div className="offer-price">
            <span className="offer-discount">15% off</span>
            <span className="offer-original-price">£3.99</span>
            <span className="offer-sale-price">£3.39</span>
          </div>
          <div className="offer-rating">
            <StarOutlined style={{ marginRight: "5px" }} />
            <span>4.2 (15)</span>
          </div>
        </Card>
        <Card
          className="offer-card"
          cover={
            <img
              alt="Special Offer 3"
              src="https://via.placeholder.com/300x150"
            />
          }
          actions={[
            <Button
              className="offer-btn"
              type="primary">
              Add to Cart
            </Button>,
          ]}>
          <Card.Meta
            title="Product Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo quis sapien aliquet commodo non vel dui. Nulla eget odio ut augue commodo aliquet. Nullam finibus felis vel purus vehicula sodales."
          />
          <div className="offer-price">
            <span className="offer-discount">25% off</span>
            <span className="offer-original-price">£2.99</span>
            <span className="offer-sale-price">£2.24</span>
          </div>
          <div className="offer-rating">
            <StarOutlined style={{ marginRight: "5px" }} />
            <span>4.8 (40)</span>
          </div>
        </Card>
        <Card
          className="offer-card"
          cover={
            <img
              alt="Special Offer 4"
              src="https://via.placeholder.com/300x150"
            />
          }
          actions={[
            <Button
              className="offer-btn"
              type="primary">
              Add to Cart
            </Button>,
          ]}>
          <Card.Meta
            title="Product Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo quis sapien aliquet commodo non vel dui. Nulla eget odio ut augue commodo aliquet. Nullam finibus felis vel purus vehicula sodales."
          />
          <div className="offer-price">
            <span className="offer-discount">30% off</span>
            <span className="offer-original-price">£6.99</span>
            <span className="offer-sale-price">£4.89</span>
          </div>
          <div className="offer-rating">
            <StarOutlined style={{ marginRight: "5px" }} />
            <span>4.6 (30)</span>
          </div>
        </Card>
        <Card
          className="offer-card"
          cover={
            <img
              alt="Special Offer 5"
              src="https://via.placeholder.com/300x150"
            />
          }
          actions={[
            <Button
              className="offer-btn"
              type="primary">
              Add to Cart
            </Button>,
          ]}>
          <Card.Meta
            title="Product Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo quis sapien aliquet commodo non vel dui. Nulla eget odio ut augue commodo aliquet. Nullam finibus felis vel purus vehicula sodales."
          />
          <div className="offer-price">
            <span className="offer-discount">10% off</span>
            <span className="offer-original-price">£1.99</span>
            <span className="offer-sale-price">£1.79</span>
          </div>
          <div className="offer-rating">
            <StarOutlined style={{ marginRight: "5px" }} />
            <span>4.0 (10)</span>
          </div>
        </Card>
        <Card
          className="offer-card"
          cover={
            <img
              alt="Special Offer 6"
              src="https://via.placeholder.com/300x150"
            />
          }
          actions={[
            <Button
              className="offer-btn"
              type="primary">
              Add to Cart
            </Button>,
          ]}>
          <Card.Meta
            title="Product Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo quis sapien aliquet commodo non vel dui. Nulla eget odio ut augue commodo aliquet. Nullam finibus felis vel purus vehicula sodales."
          />
          <div className="offer-price">
            <span className="offer-discount">40% off</span>
            <span className="offer-original-price">£9.99</span>
            <span className="offer-sale-price">£5.99</span>
          </div>
          <div className="offer-rating">
            <StarOutlined style={{ marginRight: "5px" }} />
            <span>4.9 (50)</span>
          </div>
        </Card>
      </div>
      <div className="offer-footer">
        <Button className="view-more-btn">View More</Button>
      </div>
    </div>
  );
};

export default OffersPage;
