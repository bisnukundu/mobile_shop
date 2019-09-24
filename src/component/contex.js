import React, { Component } from "react";
import { throwStatement } from "@babel/types";
import { storeProducts, detailProduct } from "../data";
const Context = React.createContext();
class Provider extends Component {
  state = {
    products: [],
    productDetails: detailProduct
  };
  componentDidMount() {
    this.test();
  }
  test = () => {
    let tempProduct = [];
    storeProducts.forEach(item => {
      const items = { ...item };
      tempProduct = [...tempProduct, items];
    });
    this.setState(() => {
      return { products: tempProduct };
    });
  };
  Detail = () => {
    console.log("details");
  };
  AddToCart = () => {
    console.log("Add to Cart");
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          AddToCart: this.AddToCart,
          Detail: this.Detail
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
const Consumer = Context.Consumer;
export { Provider, Consumer };
