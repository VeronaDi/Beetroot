import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./CartItem.css";

export function CartItem({ product, quantity, addOne, removeOne, remove }) {
  return (
    <div className="cart-table">
      <Link to={`/products/${product.id}`} className="cart-item">
        {product.name}
      </Link>
      <div className="cart-btns">
        <button onClick={addOne} className="cart-btn">
          +
        </button>
        {quantity}
        <button onClick={removeOne} className="cart-btn">
          -
        </button>
        <button onClick={remove} className="cart-btn">
          x
        </button>
      </div>
      <p className="cart-item">{product.price} USD</p>
    </div>
  );
}

const mapDispatch = ({ cart }, { product, quantity }) => ({
  addOne: () => cart.setQuantity(product.id, quantity + 1),
  removeOne: () => cart.setQuantity(product.id, quantity - 1),
  remove: () => cart.removeProduct(product.id)
});

export default connect(
  null,
  mapDispatch
)(CartItem);
