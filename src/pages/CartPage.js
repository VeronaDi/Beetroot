import React from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";

import numberOfProductsInCartSelector from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPriceSelector";

class CartPage extends React.Component {
  render() {
    const { cartItems, productsQuantity, totalPrice } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        {cartItems.map(item => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
        You ordered {productsQuantity} items. Total price:{" "}
        {totalPrice.toFixed(2)} USD.
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
