import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
const Courses = () => {
  return (
    <div className="courses-header">
      <div className="container">
        <Title level={1}> Simply</Title>

        <Title level={2}>Eat Different</Title>

        <Title level={3}>Simply Courses</Title>
        <Title level={4}>Register to our courses</Title>
        <Title level={5}>
          Those who live healthy lives feel happier and more energetic. Fresh
          and natural food is an essential part of such a healthy life. Do you
          want to change your lifestyle and feel better about yourself? As a
          nutritionist or weight loss consultant, would you like to assist
          clients with professional nutritional advice? Then this home training
          course is made for you! The course teaches you everything about
          digestion, natural nutrients and their positive impact on the body,
          including information about cholesterol and diabetes. In addition, the
          course provides you with original recipes and simple cooking tips.
          Serve deliciously healthy dishes on your plate. Gain the knowledge and
          skill to optimize your own eating pattern, or that of your clients, in
          a conscious way!
        </Title>

        <Title level={5}>
          Learn about sustainable farming practices and organic gardening from
          this free online course. This free online course on organic food
          gardening demonstrates the steps and strategies of growing organic
          foods. You will learn about the various considerations you need to
          take into account when growing various types of organic vegetables. By
          the end of this free online course you will be able to understand the
          best seasons for planting certain crops and how to sow and grow them
          accordingly. Start Course Now
        </Title>
        <Title level={5}>
          Please contact us now if you have any question or if you wish to enrol
          !
        </Title>
      </div>
    </div>
  );
};

export default Courses;
