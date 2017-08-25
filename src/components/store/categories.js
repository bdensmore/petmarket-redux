import React, { Component } from 'react';

class Category extends Component {
  render() {
    return(
      <div className="row between">
        <div className="col col-2">
          <img
            src={require("../../assets/images/_birds_65.gif")}
            alt="birds"
            height="65"
            width="65" />
        </div>
        <div className="col col-2">
          <img
            src={require("../../assets/images/_dogs_65.gif")}
            height="65"
            width="65"
            alt="dogs" />
        </div>
        <div className="col col-2">
          <img
            src={require("../../assets/images/_cats_65.gif")}
            height="65"
            width="65"
            alt="cats" />
        </div>
        <div className="col col-2">
          <img
            src={require("../../assets/images/_fish_65.gif")}
            height="65"
            width="65"
            alt="fish" />
        </div>
        <div className="col col-2">
          <img
            src={require("../../assets/images/_reptiles_65.gif")}
            height="65"
            width="65"
            alt="reptiles" />
        </div>

      </div>
    )
  }
}

export default Category;
