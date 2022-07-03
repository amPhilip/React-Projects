import React from "react";

const Basket = ({ addtoCart, setAddToCart, addProduct, removeProduct }) => {
  return (
    <div className="basket">
      <span className="title">
        <h3>Basket</h3>
      </span>
      <div className="cartProducts">
        {addtoCart.length === 0 && <div>Cart is Empty</div>}
      </div>
      {addtoCart.map((item) => (
        <div key={item.id} className="row">
          <div>{item.title}</div>
          <div>
            <button onClick={() => removeProduct(item)}>-</button>
            <button onClick={() => addProduct(item)}>+</button>
          </div>
          <div className="qty">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
