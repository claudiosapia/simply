import React from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Checkbox,
  Typography,
  Avatar,
} from "antd";
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
    <>
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
          Simply Contact us !
        </Title>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          disabled={false}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
            label="Title"
            name="title">
            <Radio.Group>
              <Radio
                name="mr"
                value="mr"
                style={{ color: "#8d6e63" }}>
                {" "}
                Mr{" "}
              </Radio>
              <Radio
                name="mrs"
                value="mrs"
                style={{ color: "#8d6e63" }}>
                {" "}
                Mrs{" "}
              </Radio>

              <Radio
                name="ms"
                value="ms"
                style={{ color: "#8d6e63" }}>
                {" "}
                Ms{" "}
              </Radio>
              <Radio
                name="miss"
                value="miss"
                style={{ color: "#8d6e63" }}>
                {" "}
                Miss{" "}
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="firstName"
            label="First name">
            <Input style={{ borderColor: "#f2c94c", color: "#204e4a" }} />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last name">
            <Input style={{ borderColor: "#f2c94c", color: "#204e4a" }} />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message">
            <TextArea
              rows={4}
              style={{ borderColor: "#f2c94c", color: "#204e4a" }}
            />
          </Form.Item>

          <Form.Item
            label="Privacy Policy"
            name="privacy"
            valuePropName="checked">
            <Checkbox style={{ color: "#8d6e63" }}>
              I consent to send my information to Simply
            </Checkbox>
          </Form.Item>

          <Form.Item
            label="Submit form"
            style={{
              textAlign: "center",
            }}>
            <Button
              htmlType="submit"
              style={{
                textAlign: "center",
                backgroundColor: "#0077be",
                borderColor: "#204e4a",
              }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Contact;
