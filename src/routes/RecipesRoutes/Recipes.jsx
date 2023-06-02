import React from "react";

import Popular from "../../components/Recipes/Popular";
import Vegetarian from "../../components/Recipes/Vegetarian";
import Category from "../../components/Category";
import SearchBar from "../../components/SearchBar";

const Recipes = () => {
  return (
    <div className="main-home">
      <SearchBar />
      <Category />

      <Popular />
      <Vegetarian />
    </div>
  );
};

export default Recipes;
