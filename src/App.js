//style
import "./styles/index.css";
import "./styles/hero.css";

import "./styles/recipes.css";
import "./styles/shop.css";
import "./styles/courses.css";
import { Layout, Image } from "antd";
import icon from "./assets/logo.png";

import { Link } from "react-router-dom";
//routes imports
import React from "react";

import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
//components
import NavBar from "./components/NavBar";

import Pages from "./routes/Pages";
const { Content, Footer } = Layout;

const App = () => (
  <div className="app">
    <div className="nav-bar">
      <NavBar />
    </div>

    <div className="main">
      <Layout>
        <div className="routes">
          <Pages />
        </div>

        <Footer className="footer">
          <Content>
            <div className="footer-links">
              <Image
                height={110}
                src={icon}
                preview={false}
                shape="square"
              />

              <Link to="/">Home</Link>

              <Link to="/shop">Shop</Link>

              <Link to="/recipes">Recipes</Link>

              <Link to="/contact">Contact</Link>

              <Link to="categories/courses">Organic Courses</Link>

              <Link to="/about">About</Link>
            </div>
            <div className="footer-wrapper">
              Simply ©2023 Created by Claudio Sapia
            </div>
            <div className="footer-wrapper">Logo created using LogoMkr</div>
            <div className="socials">
              <TwitterOutlined />
              <FacebookOutlined />
              <InstagramOutlined />
              <LinkedinOutlined />
            </div>
          </Content>
        </Footer>
      </Layout>
    </div>
  </div>
);

export default App;
