import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Recipes from "./RecipesRoutes/Recipes";
import MainShop from "./MainShop";
import Recipe from "./RecipesRoutes/Recipe";
import Cuisine from "./RecipesRoutes/Cuisine";
import SearchedMeal from "./RecipesRoutes/SearchedMeal";
import Courses from "./Courses";
const Pages = () => {
  const location = useLocation();

  return (
    <Routes
      Location={location}
      key={location.pathname}>
      <Route
        path="/"
        element={<Home />}
      />
      {/* CONTACT */}
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/courses"
        element={<Courses />}
      />

      {/* ABOUT */}
      <Route
        path="/about"
        element={<About />}
      />

      {/* SHOP */}
      {/* PRODUCTS */}
      <Route
        path="/shop"
        element={<MainShop />}
      />

      {/* RECIPES */}
      <Route
        path="/recipes"
        element={<Recipes />}
      />
      <Route
        path="/recipe/:id"
        element={<Recipe />}
      />
      <Route
        path="/cuisines/:type"
        element={<Cuisine />}
      />
      <Route
        path="recipes/searched/:search"
        element={<SearchedMeal />}
      />
    </Routes>
  );
};

export default Pages;
