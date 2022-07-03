import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";



const Header = ({countCartProd}) => {
  return (
    <div className="header">
      <div className="logo">
        <h3>Cart app</h3>
      </div>
      <div className="cart">
        <h1>
          <AiOutlineShoppingCart />
        </h1>
        <span>{countCartProd ? (
          <button className="cartAmount">{countCartProd}</button>
        ): ('')}</span>
      </div>
    </div>
  );
};

export default Header;
