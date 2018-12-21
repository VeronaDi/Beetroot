import React from "react";
import { connect } from "react-redux";

import CartButton from "../components/CartButton";

import "./ProductExtended.css";

export function ProductExtended({ product, addProductToCart }) {
  return (
    <div className="one-product">
      <CartButton />
      <h1 className="one-product-name">{product.name}</h1>
      <p className="one-product-price">${product.price}</p>
      <img
        src={product.image}
        alt={product.name}
        className="one-product-image"
      />
      <p className="one-product-description">
        {product.description}
        <button onClick={addProductToCart} className="one-btn-add">
          ADD
        </button>
      </p>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProductToCart: () => dispatch.cart.addProduct(ownProps.product)
});

export default connect(
  null,
  mapDispatchToProps
)(ProductExtended);
