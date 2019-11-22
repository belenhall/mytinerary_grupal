import React, { Component, Fragment } from "react";
import myImages from "../../Assets/Resources/myImages";
import myTexts from "../../Assets/Resources/myTexts";

class FeaturedCity extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.city.replace(/[_]/, " ")}</h1>
        <div className="container">
          <div className="row">
            <img
              className="col-6"
              src={myImages.cities[this.props.city]}
            ></img>
            <div className="col-6">
              <p>{myTexts.cities[this.props.city]}</p>
              <div>
          <h6>Comment</h6>
          <input type="text"/> </div>
            </div>
          </div>
        </div>
        
      </Fragment>
    );
  }
}

export default FeaturedCity;
