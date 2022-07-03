import React from "react";

const Basket = ({ addtoCart, setAddToCart, addProduct, removeProduct }) => {
  const productPrice = addtoCart.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  const prodTax = productPrice * 0.14;
  const prodShipping = productPrice > 1200 ? 0 : 100;
  const totalPrice = productPrice + prodTax + prodShipping;
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
            <button onClick={() => addProduct(item)}>+</button>
            <button onClick={() => removeProduct(item)}>-</button>
          </div>
          <div className="qty">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      <hr />
      {addtoCart.length !== 0 && (
        <>
          <div className="prodPrice">
            <span>
              <h4>Your Prod Price</h4>
            </span>
            <span>{productPrice.toFixed(1)}</span>
          </div>
          <div className="prodTax">
            <span>
              <h4>Tax</h4>
            </span>
            <span>{prodTax.toFixed(1)}</span>
          </div>
          <div className="prodShipping">
            <span>
              <h4>Shipping</h4>
            </span>
            <span>{prodShipping.toFixed(1)}</span>
          </div>
          <div className="prodTotal">
            <span>
              <h4>Total Amount</h4>
            </span>
            <span>{totalPrice.toFixed(1)}</span>
          </div>
          <hr />
          <button
            className="checkout"
            onClick={() => alert("Your payment is Processing")}
          >
            CheckOut
          </button>
        </>
      )}
    </div>
  );
};

export default Basket;
