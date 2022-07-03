import React from "react";
import "../App.css";

const ProductSection = ({
  addtoCart,
  setAddToCart,
  products,
  addProduct,
  removeProduct,
}) => {
  return (
    <div className="containerProd">
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <span className="title">
              <h3>{product.title}</h3>
            </span>
            <div className="img">
              <img src={product.img} alt={product.title} />
            </div>
            <span className="price">
              <h5>{product.price}</h5>
            </span>
            <button className="btn" onClick={() => addProduct(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
