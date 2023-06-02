// import SearchBar from "./SearchBar";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, Avatar, Typography, Button } from "antd";
// import icon from "../assets/sustainable-icon.svg";

// import {
//   ShoppingOutlined,
//   FormOutlined,
//   ReadOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";
// const { SubMenu } = Menu;

// const MidMenu = () => {
//   const [menu, setMenu] = useState(true);
//   const [screenSize, setScreenSize] = useState(undefined);

//   useEffect(() => {
//     const handleResize = () => setScreenSize(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (screenSize < 750) {
//       setMenu(false);
//     } else {
//       setMenu(true);
//     }
//   }, [screenSize]);

//   return (
//     <div>
//       {menu && (
//         <Menu
//           key="nav-menu"
//           mode="horizontal"
//           defaultSelectedKeys={["1"]}
//           className="mid-menu"

//           // }))}
//         >
//           <Menu.Item
//             key="logo-cont"
//             className="logo-cont">
//             <Avatar
//               className="logo"
//               size={{ xs: 9, sm: 24, md: 28, lg: 38, xl: 50, xxl: 56 }}
//               src={icon}
//             />
//             <Typography.Title level={3}></Typography.Title>
//           </Menu.Item>

//           <SubMenu
//             title="Shop"
//             icon={<ShoppingOutlined />}
//             key="submenu">
//             <Menu.ItemGroup
//               title="Meat and Poultry"
//               key="Groceries">
//               <Menu.Item key="chicken">
//                 <Link to="categories/meat">Chicken</Link>
//               </Menu.Item>
//               <Menu.Item key="beef">
//                 <Link to="categories/Beef">Beef</Link>
//               </Menu.Item>
//             </Menu.ItemGroup>
//             <Menu.ItemGroup
//               title="Vegetables"
//               key="Vegetables">
//               <Menu.Item key="Fruit">Fruit</Menu.Item>
//               <Menu.Item key="Vegetables">Vegetables</Menu.Item>
//             </Menu.ItemGroup>
//           </SubMenu>
//           <Menu.Item
//             icon={<FormOutlined />}
//             key="icon-form">
//             <Link to="/offers">Offers</Link>
//           </Menu.Item>
//           <Menu.Item
//             icon={<FormOutlined />}
//             key="icon-form2">
//             <Link to="/recipes">Recipes</Link>
//           </Menu.Item>

//           <Menu.Item
//             key="icon-form3"
//             icon={<FormOutlined />}>
//             <Link to="/pass">Delivery Pass</Link>
//           </Menu.Item>
//           <Menu.Item
//             key="icon-form4"
//             icon={<ReadOutlined />}>
//             <Link to="/courses">Organic Courses</Link>
//           </Menu.Item>
//         </Menu>
//       )}
//     </div>
//   );
// };

// export default MidMenu;
