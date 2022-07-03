import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Basket from "./Cart/Basket";
import CartApp from "./Cart/CartApp";
import data from "./Data/data";

function App() {
  const { products } = data;
  const [addtoCart, setAddToCart] = useState([]);

  const addProduct = (product) => {
    const isChecked = addtoCart.find((prod) => prod.id === product.id);
    if (isChecked) {
      setAddToCart(
        addtoCart.map((prod) =>
          prod.id === product.id
            ? { ...isChecked, qty: isChecked.qty + 1 }
            : prod
        )
      );
    } else {
      setAddToCart([...addtoCart, { ...product, qty: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const isChecked = addtoCart.find((prod) => prod.id === product.id);
    if (isChecked.qty === 1) {
      setAddToCart(addtoCart.filter((prod) => prod.id !== product.id));
    } else {
      setAddToCart(
        addtoCart.map((prod) =>
          prod.id === product.id
            ? { ...isChecked, qty: isChecked.qty - 1 }
            : prod
        )
      );
    }
  };

  return (
    <div className="App">
      <CartApp
        addtoCart={addtoCart}
        setAddToCart={setAddToCart}
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
        countCartProd={addtoCart.length}
      />
      <Basket
        addtoCart={addtoCart}
        setAddToCart={setAddToCart}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default App;
