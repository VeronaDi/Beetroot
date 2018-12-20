import React from "react";

import "./ProductExtended.css";

export default function({ product }) {
  return (
    <div className="one-product">
      <h1 className="one-product-name">{product.name}</h1>
      <p className="one-product-price">${product.price}</p>
      <img
        src={product.image}
        alt={product.name}
        className="one-product-image"
      />
      <p className="one-product-description">
        {product.description}
        <button className="one-btn-add">ADD</button>
      </p>
    </div>
  );
}
