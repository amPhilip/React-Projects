import React from "react";
import Header from "../components/Header";
import ProductSection from "./ProductSection";

const CartApp = ({
  addtoCart,
  setAddToCart,
  products,
  addProduct,
  removeProduct,
  countCartProd
}) => {
  return (
    <div className="container">
      <Header countCartProd={countCartProd}/>
      <ProductSection
        addtoCart={addtoCart}
        setAddToCart={setAddToCart}
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default CartApp;
