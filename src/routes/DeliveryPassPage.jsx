import React from "react";
import { Typography, Button, Divider } from "antd";

const { Title, Paragraph } = Typography;

const DeliveryPassPage = () => {
  return (
    <div className="delivery-pass-container">
      <Title className="heading-2">Delivery Pass</Title>
      <Paragraph>
        Get unlimited home deliveries for a whole year with our Delivery Pass
        subscription. It's the perfect way to save time and money on your
        grocery shopping.
      </Paragraph>
      <Divider />
      <div className="delivery-pass-pricing">
        <div className="delivery-pass-option">
          <Title level={3}>Monthly Pass</Title>
          <Paragraph>
            Pay monthly and enjoy unlimited deliveries for just £10/month.
          </Paragraph>
          <Button className="delivery-pass-btn">Buy Monthly Pass</Button>
        </div>
        <div className="delivery-pass-option">
          <Title level={3}>Annual Pass</Title>
          <Paragraph>
            Save even more by paying annually. Enjoy unlimited deliveries for
            just £90/year.
          </Paragraph>
          <Button className="delivery-pass-btn">Buy Annual Pass</Button>
        </div>
      </div>
      <Divider />
      <Paragraph>
        With a Delivery Pass, you can enjoy the following benefits:
      </Paragraph>
      <ul className="delivery-pass-benefits">
        <li>Unlimited deliveries for a whole year</li>
        <li>No delivery fees or minimum order value</li>
        <li>Priority access to delivery slots during peak times</li>
        <li>Exclusive offers and discounts for Delivery Pass subscribers</li>
      </ul>
    </div>
  );
};

export default DeliveryPassPage;
