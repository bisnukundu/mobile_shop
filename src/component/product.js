import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductList from "./productList";
import { Consumer } from "./contex";
import PropTypes from "prop-types";
import Icon from "../component/icon/ios-cart.svg";
class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => {
              console.log("you clicked");
            }}
          >
            <Link to="/detals">
              <img src={img} alt="prod_im" className="card-img-top" />
            </Link>
            <button
              onClick={() => {
                console.log("Now Add to Cart");
              }}
              className="cart-btn product_btn"
              disabled={inCart ? true : false}
            >
              {inCart ? (
                <p className="mb-0">inCart</p>
              ) : (
                <img src={Icon} alt="cart_Icon" width="18px" />
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title} </p>
            <h5 className="mb-0">${price}</h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card:hover {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .product_btn {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateX(60px);
    transition: all 1s;
  }
  .card-img-top {
    transition: all 1s;
  }
  .card:hover .card-img-top {
    transform: scale(1.3);
  }
  .card:hover .product_btn {
    transform: translateX(0);
  }
`;
export default Product;
