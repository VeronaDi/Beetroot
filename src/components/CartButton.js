import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import numberOfProductsInCart from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPriceSelector";

export function CartButton({ productsQuantity, totalPrice }) {
  return (
    <Link to={`/cart`}>
      BASKET ({productsQuantity} items, total price: {totalPrice.toFixed(2)} USD
      )
    </Link>
  );
}

const mapState = state => ({
  productsQuantity: numberOfProductsInCart(state.cart),
  totalPrice: totalPriceSelector(state.cart)
});

export default connect(mapState)(CartButton);
