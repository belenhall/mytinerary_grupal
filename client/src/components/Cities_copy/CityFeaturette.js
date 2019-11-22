import React, { Component, Fragment } from "react";
import myImages from "../../Assets/Resources/myImages";
import myTexts from "../../Assets/Resources/myTexts";

class CityFeaturette extends Component {
  render() {
    return (
      <Fragment>
       
        <div className="container">
          <div className="row">
               <div
              className="city"
              style={{
                color: "white !important;",
                backgroundImage: `url(${myImages.cities[this.props.city]})`,
                backgroundSize: "cover",
                border: "solid",
                borderColor: "white",
                height: "22em",
                width: "22em"
              }}
            >
               <h4 className="featuretteTitle">{this.props.city.replace(/[_]/, " ")}</h4>
            </div>
            <div className="col-6">
              <p>{myTexts.cities[this.props.city]}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CityFeaturette;
