import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";

import {
  ShoppingCartOutlined,
  TrophyOutlined,
  MenuOutlined,
  HomeOutlined,
  FormOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

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
      key: "1",
      title: "Home",

      icon: <HomeOutlined />,
      link: "/",
    },
    {
      key: "2",
      title: "Shop",
      className: "shop",
      icon: <ShoppingCartOutlined />,
      link: "/shop",
    },
    {
      key: "3",
      title: "About",
      icon: <TrophyOutlined />,
      link: "/about",
    },
    {
      key: "4",
      title: "Contact",
      icon: <FormOutlined />,
      link: "/contact",
    },
  ];

  return (
    <>
      <Button
        className="menu-cont"
        onClick={() => setMenu(!menu)}>
        <MenuOutlined />
      </Button>
      <div className={`menu-items ${menu ? "show" : "hide"}`}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="top-menu">
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
    </>
  );
};

export default NavBar;
