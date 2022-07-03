import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3>Cart app</h3>
      </div>
      <div className="cart">
        <h1>
          <AiOutlineShoppingCart />
        </h1>
        <h2>0</h2>
      </div>
    </div>
  );
};

export default Header;
