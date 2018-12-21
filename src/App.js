import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/" className="product-links">
                Home
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/cart" component={CartPage} />

            <Route path="/products/:id" component={ProductPage} />
            <Route path="/categories/:id" component={ProductsPage} />

            <Route path="/" component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
