import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <Title level={2}>Create an Account</Title>
        <Form
          name="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="register-form">
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
            hasFeedback>
            <Input className="register-input" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
            hasFeedback>
            <Input className="register-input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
            ]}
            hasFeedback>
            <Input.Password className="register-input" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
            hasFeedback>
            <Input.Password className="register-input" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked">
            {/* <Checkbox>
              I have read and agree to the <a href="">terms and conditions</a>
            </Checkbox> */}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-btn">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
