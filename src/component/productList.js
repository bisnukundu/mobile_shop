import React, { Component } from "react";
import Product from "./product";
import Title from "./title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { Consumer } from "./contex";
class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="text-center">
              <Font>
                <Title name="MOBILE" title="SHOP" />
              </Font>
            </div>
            <div className="row">
              <Consumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </Consumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const Font = styled.div`
  font-family: gabriola;
  h1 {
    font-size: 3.5rem;
  }
`;
export default ProductList;
