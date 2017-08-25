import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="row">
        <div className="col col-4 push-left">
          <img
            className="img-class"
            src={require("../../assets/images/petmarketlogo_small.gif")}
            alt="PetMarket Store"
            width="182"
            height="33" />
        </div>
        <div className="col col-8 push-middle push-right links">
            <Link to="/">home</Link>
            <Link to="/">preferences</Link>
            <Link to="/">about</Link>
            <Link to="/">legal notice</Link>
            <Link to="/">affiliate program</Link>
        </div>
      </div>
    )
  }
}

export default Nav;
