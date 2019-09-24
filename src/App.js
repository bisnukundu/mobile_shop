import React, { Component } from "react";
import ProductList from "./component/productList";
import Product from "./component/product";
import Home from "./component/home";
import Cart from "./component/cart";
import Detals from "./component/detals";
import Icon from "./component/icon/ios-cart.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider, Consumer } from "./component/contex";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <ul className="nav nav-tabs bg-light ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/productList">
                  ProductLists
                </Link>
              </li>
              <li className="nav-item ml-auto">
                <Link className="nav-link" to="/cart">
                  <button>
                    <img src={Icon} width="20px" alt="icon" />
                  </button>
                </Link>
              </li>
            </ul>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/productList" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/detals" component={Detals} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
