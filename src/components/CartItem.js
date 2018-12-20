import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function CartItem({ product, quantity, addOne, removeOne, remove }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <button onClick={addOne}>+</button>
      {quantity}
      <button onClick={removeOne}>-</button>
      <button onClick={remove}>x</button>
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
