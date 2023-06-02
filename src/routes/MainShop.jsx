import Basket from "../components/Products/Basket";
import Products from "../components/Products/Products";
import { useState } from "react";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.code);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.code ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.code);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.code));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.code ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <div className="row">
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}></Basket>
        <Products onAdd={onAdd}></Products>
      </div>
    </div>
  );
};

export default Shop;
