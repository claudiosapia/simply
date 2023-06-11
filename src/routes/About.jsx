import React from "react";
import { Typography, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Paragraph, Title } = Typography;

const About = () => {
  return (
    <div className="about-container">
      <Title
        level={2}
        className="heading-2">
        Welcome to Simply
      </Title>
      <Paragraph>
        Simply is the 4th largest supermarket in the UK! At Simply, we believe
        that grocery shopping should be easy, affordable, and enjoyable. That's
        why we strive to provide our customers with a wide selection of
        high-quality products at competitive prices. We are committed to making
        your shopping experience convenient and stress-free, whether you’re
        stocking up for the week or grabbing a quick snack on the go.
      </Paragraph>
      <Paragraph>
        We pride ourselves on being a community-focused store, with a team of
        friendly and knowledgeable staff who are always ready to assist you with
        any questions or concerns. We value our customers and are committed to
        building long-lasting relationships with each and every one of you. Our
        store offers a wide range of products, from fresh produce and baked
        goods to household essentials and personal care items. We work with
        local suppliers and farmers to bring you the freshest and highest
        quality products possible. We also offer a variety of own-brand products
        that are both affordable and of great quality.
      </Paragraph>
      <Paragraph>
        We understand the importance of convenience in today’s fast-paced world,
        which is why we offer a range of services to make your life easier. Our
        online shopping platform allows you to order your groceries from the
        comfort of your own home, and we offer a convenient click-and-collect
        service for those who prefer to pick up their groceries in-store.
      </Paragraph>
      <Paragraph>
        At Simply, we are committed to sustainability and reducing our impact on
        the environment. We have implemented a number of initiatives to reduce
        plastic waste, including offering refill stations for household cleaning
        products and encouraging customers to bring their own reusable bags and
        containers.
      </Paragraph>
      <Paragraph>
        Thank you for choosing Simply as your local supermarket. We are
        committed to providing you with the best possible shopping experience
        and look forward to serving you both in-store and online.
      </Paragraph>
      <Title
        level={2}
        className="heading-2 about-story">
        Our Story
      </Title>
      <Paragraph>
        Once upon a time, in the bustling city of London, a group of
        entrepreneurs had a vision of creating a new kind of supermarket. They
        wanted to create a store that was affordable, convenient, and
        community-focused, with a wide selection of high-quality products for
        customers to choose from.
      </Paragraph>
      <Paragraph>
        With this vision in mind, they founded Simply Supermarket in 1999. They
        started with just one small store, but quickly gained a reputation for
        offering great value and excellent customer service. As word spread,
        more and more people started shopping at Simply, and the company began
        to grow.
      </Paragraph>
      <Paragraph>
        Over the years, Simply expanded its operations to other parts of the UK,
        opening new stores in cities and towns across the country. They also
        introduced new services, such as online shopping and click-and-collect,
        to make it easier for customers to shop with them.
      </Paragraph>
      <Paragraph>
        But Simply didn't just focus on growth - they also had a strong
        commitment to sustainability and reducing their impact on the
        environment. They implemented a number of initiatives to reduce plastic
        waste, such as offering refill stations for household cleaning products
        and encouraging customers to bring their own reusable bags and
        containers.
      </Paragraph>
      <Paragraph>
        As Simply continued to grow and evolve, they never lost sight of their
        founding principles. They remained committed to providing customers with
        a convenient, affordable, and enjoyable shopping experience,and to
        building long-lasting relationships with their communities.
      </Paragraph>
      <Paragraph>
        Today, Simply is the 4th largest supermarket in the UK, with over 600
        stores and a loyal customer base. They continue to innovate and adapt to
        changing customer needs, while remaining true to their core values. And
        they owe it all to the vision of their founders, who believed that
        grocery shopping could be simple, affordable, and enjoyable for
        everyone.
      </Paragraph>
      <Button className="about-btn">
        <Link
          to="/"
          className="about-link">
          <HomeOutlined style={{ marginRight: "10px" }} />
          Home
        </Link>
      </Button>
    </div>
  );
};

export default About;
