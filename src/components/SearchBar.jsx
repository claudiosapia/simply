import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    // navigate on Submit
    navigate("/recipes/searched/" + inputValue);
  };

  return (
    <Row
      justify="center"
      style={{ marginTop: "50px" }}>
      <Col
        xs={24}
        sm={12}>
        <form>
          <Space direction="vertical">
            <Search
              className="bar"
              placeholder="Search"
              allowClear
              enterButton="Search"
              size="large"
              onChange={handleInputValue}
              onSearch={handleSubmit}
              type="text"
              value={inputValue}
              style={{ width: "630px" }}
              prefix={
                <Space>
                  <SearchOutlined />
                </Space>
              }
            />
          </Space>
        </form>
      </Col>
    </Row>
  );
};

export default SearchBar;
