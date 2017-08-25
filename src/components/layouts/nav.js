import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Category from '../store/categories';

class Nav extends Component {
  render() {
    return (
      <div className="row">
        <image
          src={require("../../assets/images/petmarketlogo_small.gif")}
          alt="PetMarket Store"
          width="182"
          height="33" />
        <div className="row gutters">
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
