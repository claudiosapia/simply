import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar } from "antd";
import icon from "../assets/logo.png";
import CarouselBanner from "./CarouselBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import fallback from "../assets/fallback.jpg";
import {
  ShoppingOutlined,
  ReadOutlined,
  PercentageOutlined,
  CarOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Hero = () => {
  const [menu, setMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 750) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }, [screenSize]);

  const menuItems = [
    {
      key: "3",
      title: "Shop Groceries",
      icon: <ShoppingOutlined />,
      subMenuItems: [
        {
          key: "3.1",
          title: "Meat and Poultry",
          menuItemGroupItems: [
            { key: "3.1.1", title: "Chicken", link: "/categories/meat" },
            { key: "3.1.2", title: "Beef", link: "/categories/Beef" },
          ],
        },
        {
          key: "3.2",
          title: "Vegetables",
          menuItemGroupItems: [
            { key: "3.2.1", title: "Fruit" },
            { key: "3.2.2", title: "Vegetables" },
          ],
        },
      ],
    },
    {
      key: "4",
      title: "Offers",
      icon: <PercentageOutlined />,
      link: "/offers",
    },
    {
      key: "5",
      title: "Recipes",
      icon: <ReadOutlined />,
      link: "/recipes",
    },
    {
      key: "6",
      title: "Delivery Pass",
      icon: <CarOutlined />,
      link: "/pass",
    },
  ];

  return (
    <div>
      <section className="mid-section d-flex flex-column justify-content-center align-items-center">
        <div className="home-top-cont d-flex align-items-center">
          <div className="logo-cont">
            <LazyLoadImage
              src={icon}
              placeholderSrc={fallback}
              effect="blur"
              size={{ xs: 9, sm: 24, md: 28, lg: 10, xl: 100, xxl: 56 }}
              onLoad={() => setImageLoaded(true)}
              alt="simply-logo"
              wrapperClassName="logo-cont"
            />
            {!imageLoaded && (
              <div className={`spinner-container ${imageLoaded ? "hide" : ""}`}>
                <div className="spinner"></div>
              </div>
            )}
          </div>

          <div className="search-bar-cont d-flex align-items-center justify-content-center ">
            <SearchBar direction="horizontal" />
          </div>
        </div>

        <section className="mid-menu">
          <div className={`menu-items ${menu ? "show" : "hide"}`}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="mid-menu">
              {menuItems.map((item) => {
                if (item.subMenuItems) {
                  return (
                    <SubMenu
                      key={item.key}
                      title={item.title}
                      icon={item.icon}>
                      {item.subMenuItems.map((subMenuItem) => (
                        <Menu.ItemGroup
                          key={subMenuItem.key}
                          title={subMenuItem.title}>
                          {subMenuItem.menuItemGroupItems.map(
                            (menuItemGroupItem) => (
                              <Menu.Item key={menuItemGroupItem.key}>
                                <Link to={menuItemGroupItem.link}>
                                  {menuItemGroupItem.title}
                                </Link>
                              </Menu.Item>
                            )
                          )}
                        </Menu.ItemGroup>
                      ))}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item
                      key={item.key}
                      className={item.className}
                      icon={item.icon}>
                      <Link to={item.link}>{item.title}</Link>
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          </div>
          <CarouselBanner />
        </section>
      </section>
    </div>
  );
};

export default Hero;
