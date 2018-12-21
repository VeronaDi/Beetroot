import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./CartButton.css";

import numberOfProductsInCart from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPriceSelector";

export function CartButton({ productsQuantity, totalPrice }) {
  return (
    <Link to={`/cart`} className="cart-link">
      <img
        className="cart-img"
        alt="cart-img"
        src="https://cdn1.iconfinder.com/data/icons/black-round-web-icons/100/round-web-icons-black-06-512.png"
      />
      {productsQuantity} items, total: {totalPrice.toFixed(2)} USD
    </Link>
  );
}

const mapState = state => ({
  productsQuantity: numberOfProductsInCart(state.cart),
  totalPrice: totalPriceSelector(state.cart)
});

export default connect(mapState)(CartButton);
