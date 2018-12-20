import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Product.css";

export function Product({ product, category, addProductToCart }) {
  return (
    <div className="product">
      <Link to={`/products/${product.id}`} className="product-name">
        {product.name} ({category ? category.name : "no category"})
        <p className="product-price">${product.price}</p>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <button onClick={addProductToCart} className="btn-add">
        ADD
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProductToCart: () => dispatch.cart.addProduct(ownProps.product)
});

export default connect(
  null,
  mapDispatchToProps
)(Product);
