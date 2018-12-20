import React from "react";
import { connect } from "react-redux";

import Product from "../components/Product";
import Category from "../components/Category";
import CartButton from "../components/CartButton";

import categoryForProductSelector from "../selectors/categoryForProductSelector";

import "./ProductsPage.css";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      this.loadData(nextProps);
    }
  }

  loadData(props) {
    if (props.match.path === "/categories/:id") {
      var productsQueryParams = {
        filter: { categoryId: props.match.params.id }
      };
    }

    props.loadProducts(productsQueryParams);
    props.loadCategories();
  }

  render() {
    return (
      <div>
        <CartButton />
        <h1 className="page-title">Categories</h1>
        {this.props.categories.map(category => (
          <Category key={category.id} category={category} />
        ))}

        <h1 className="page-title">All Products</h1>
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            category={categoryForProductSelector(
              product,
              this.props.categories
            )}
          />
        ))}
      </div>
    );
  }
}

const mapState = ({ products, categories }) => ({
  products: products.list,
  categories: categories.list
});

const mapDispatch = dispatch => ({
  loadProducts: dispatch.products.loadAll,
  loadCategories: dispatch.categories.loadAllCategories
});

export default connect(
  mapState,
  mapDispatch
)(ProductsPage);
