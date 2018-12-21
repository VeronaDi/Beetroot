import React from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import "./CartPage.css";

import numberOfProductsInCartSelector from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPriceSelector";

class CartPage extends React.Component {
  render() {
    const { cartItems, productsQuantity, totalPrice } = this.props;
    return (
      <div>
        <h2 className="cart-title">Cart</h2>
        {cartItems.map(item => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
        <div className="cart-total">
          You ordered {productsQuantity} items. Total price:{" "}
          {totalPrice.toFixed(2)} USD.
          <button className="btn-order">Order</button>
        </div>
      </div>
    );
  }
}

const mapState = ({ cart }) => ({
  cartItems: cart.items,
  productsQuantity: numberOfProductsInCartSelector(cart),
  totalPrice: totalPriceSelector(cart)
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(CartPage);
