import React, { useState, useEffect } from "react";
import { Card, Col, Row, Typography, Divider } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title, Paragraph } = Typography;

const Products = ({ onAdd }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://world.openfoodfacts.org/cgi/search.pl?search_terms=&page_size=20&json=1&lc=en"
      );

      // Generate a random price for each product
      const updatedProducts = response.data.products.map((product) => {
        return {
          ...product,
          price: Math.floor(Math.random() * 5) + 1, // Generate a random price between 1 and 100
        };
      });

      setProducts(updatedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="title-wrapper">
        <Title level={2}>Simply Shop</Title>
        <Divider />
        // Product cards
        <Row
          gutter={[12, 24]}
          className="product-card-container">
          {filteredProducts.map((product) => (
            <Col
              key={product.code}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}>
              <Card
                className="product-card"
                cover={
                  <img
                    alt={product.product_name}
                    src={product.image_front_url}
                    className="product-image"
                  />
                }
                actions={[
                  <div className="add-to-cart-btn">
                    <ShoppingOutlined
                      key="add"
                      onClick={() => {
                        const price = product.price;
                        onAdd({ ...product, price });
                      }}
                    />
                    <span>Add to Cart</span>
                  </div>,
                ]}>
                <Card.Meta
                  title={product.product_name}
                  description={`$${product.price / 100}`}
                />
                <Paragraph ellipsis={{ rows: 3 }}>
                  {product.generic_name}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Products;
