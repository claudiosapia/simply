import React from "react";
import "../styles/contact.css";
import { Form, Input, Button, Radio, Checkbox, Typography, Avatar } from "antd";
import logo from "../assets/logo.png";

const { Title } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="container"
      style={{ padding: "50px 0" }}>
      <Avatar
        size={{ xs: 9, sm: 12, md: 20, lg: 28, xl: 50, xxl: 44 }}
        src={logo}
        shape="square"
      />
      <Title
        level={2}
        style={{ textAlign: "center", color: "#0077be", marginTop: "30px" }}>
        Simply Contact us!
      </Title>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: "30px" }}>
        <Form.Item
          label="Title"
          name="title">
          <Radio.Group>
            <Radio
              value="mr"
              style={{ color: "#8d6e63" }}>
              Mr
            </Radio>
            <Radio
              value="mrs"
              style={{ color: "#8d6e63" }}>
              Mrs
            </Radio>
            <Radio
              value="ms"
              style={{ color: "#8d6e63" }}>
              Ms
            </Radio>
            <Radio
              value="miss"
              style={{ color: "#8d6e63" }}>
              Miss
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="First name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please enter your first name",
            },
          ]}>
          <Input style={{ borderColor: "#f2c94c", color: "#204e4a" }} />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please enter your last name",
            },
          ]}>
          <Input style={{ borderColor: "#f2c94c", color: "#204e4a" }} />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: "Please enter your message",
            },
          ]}>
          <TextArea
            rows={4}
            style={{ borderColor: "#f2c94c", color: "#204e4a" }}
          />
        </Form.Item>
        <Form.Item
          label="Privacy Policy"
          name="privacy"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please accept our privacy policy",
            },
          ]}>
          <Checkbox style={{ color: "#8d6e63" }}>
            I consent to send my information to Simply
          </Checkbox>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#0077be",
              borderColor: "#204e4a",
            }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;