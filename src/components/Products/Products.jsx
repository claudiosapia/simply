import React, { useState, useEffect, useMemo } from "react";
import { Card, Col, Row, Typography, Divider, Input, Select } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

const Products = ({ onAdd }) => {
  // Define state variables for products and search term
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("price");
  const [category, setCategory] = useState("");
  const [nutritionGrade, setNutritionGrade] = useState("");

  // Fetch products from API and generate random prices for each product
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://world.openfoodfacts.org/cgi/search.pl?search_terms=&page_size=20&json=1&lc=en"
      );

      // Generate a random price for each product
      const updatedProducts = response.data.products.map((product) => {
        return {
          ...product,
          price: Math.floor(Math.random() * 10 + 1) * 100,
        };
      });

      setProducts(updatedProducts);
    };

    fetchProducts();
  }, []);

  // Filter and sort products based on search term, sort option, category, and nutrition grade
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const nameMatch =
        product.product_name &&
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
      const descMatch =
        product.generic_name &&
        product.generic_name.toLowerCase().includes(searchTerm.toLowerCase());

      return nameMatch || descMatch;
    });

    if (category) {
      filtered = filtered.filter((product) => {
        return (
          product.categories_hierarchy &&
          product.categories_hierarchy[0]
            .toLowerCase()
            .includes(category.toLowerCase())
        );
      });
    }

    if (nutritionGrade) {
      filtered = filtered.filter((product) => {
        return (
          product.nutrition_grade_fr &&
          product.nutrition_grade_fr
            .toLowerCase()
            .includes(nutritionGrade.toLowerCase())
        );
      });
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortOption === "name") {
        return a.product_name.localeCompare(b.product_name);
      } else if (sortOption === "price") {
        return a.price - b.price;
      } else if (sortOption === "category") {
        return a.categories_hierarchy[0].localeCompare(
          b.categories_hierarchy[0]
        );
      } else if (sortOption === "nutrition") {
        return a.nutrition_grade_fr.localeCompare(b.nutrition_grade_fr);
      } else {
        return 0;
      }
    });

    return sorted;
  }, [products, searchTerm, sortOption, category, nutritionGrade]);

  // Handle search term change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle sort option change
  const handleSort = (value) => {
    setSortOption(value);
  };

  // Handle category filter change
  const handleCategoryFilter = (value) => {
    setCategory(value);
  };

  // Handle nutrition grade filter change
  const handleNutritionFilter = (value) => {
    setNutritionGrade(value);
  };

  return (
    <>
      <div className="title-wrapper">
        <Title level={2}>Simply Shop</Title>
        <Divider />
        {/* Search and sort controls */}
        <Row
          gutter={[24, 24]}
          className="controls-container">
          <Col span={8}>
            <Search
              style={{ marginLeft: "8px" }}
              placeholder="Search products"
              onChange={handleSearch}
              value={searchTerm}
            />
          </Col>
          <Col span={8}>
            <label style={{ marginRight: "8px" }}>Sort By</label>
            <Select
              defaultValue="price"
              onChange={handleSort}>
              <Option value="name">Name</Option>
              <Option value="price">Price</Option>
              <Option value="category">Category</Option>
              <Option value="nutrition">Nutrition Grade</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              defaultValue=""
              onChange={handleCategoryFilter}>
              <Option value="">All Categories</Option>
              <Option value="meals">Meals</Option>
              <Option value="drinks">Drinks</Option>
              <Option value="snacks">Snacks</Option>
              <Option value="dairy">Dairy</Option>
            </Select>
            <Select
              defaultValue=""
              onChange={handleNutritionFilter}>
              <Option value="">All Nutrition Grades</Option>
              <Option value="a">Grade A</Option>
              <Option value="b">Grade B</Option>
              <Option value="c">Grade C</Option>
              <Option value="d">Grade D</Option>
              <Option value="e">Grade E</Option>
            </Select>
          </Col>
        </Row>
        {/* Product cards */}
        {filteredProducts.length > 0 ? (
          <Row
            gutter={[12, 64]}
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
                  <Paragraph className="product-price">
                    <strong>{`$${product.price / 100}`}</strong>
                  </Paragraph>
                  <Paragraph
                    className="product-ingredients"
                    ellipsis={{ rows: 4 }}>
                    {product.ingredients_text}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </>
  );
};

export default Products;
