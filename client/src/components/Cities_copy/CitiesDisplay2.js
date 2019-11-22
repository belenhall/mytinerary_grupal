import React from "react";
import { Component } from "react";
import "./CitiesComponent.css";
import myImages from "../../Assets/Resources/myImages";
import CityFeaturette from "./CityFeaturette";
import { Link } from "react-router-dom";
import { Fragment } from "react";

class CitiesDisplay2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "fail"
    };
  }

  /* sendToMain = object => {
        this.props.callback(object);
      };
    
      handleInput(event) {
      this.sendToMain(object)
        
      }*/

  sendToParent = object => {
    this.props.callbackFromParent(object);
  };

  render() {
    const data = this.props.data;
    let ciudades;
    let loremIpsum;
    if (data != undefined) {
      ciudades = data;
      ciudades = ciudades.map(ciudad => (
        <li
          onClick={e => {
            this.sendToParent({ navData: ciudad.name });
          }}
          style={{ listStyleType: "none" }}
        >
          <Link style={{ textDecoration: "none" }} to={`/${ciudad.name}`}>
            <div
              className="city"
              style={{
                color: "white",
                backgroundImage: `url(${myImages.cities[ciudad.name]})`,
                backgroundSize: "cover",
                border: "solid",
                borderColor: "white",
                height: "16em",
                width: "16em"
              }}
            >
              {ciudad.name.replace(/[_]/, " ")}
            </div>
          </Link>
        </li>
      ));
      if (ciudades.length == 1) {
        ciudades = (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/${data[0].name}`}
          >
            <div
              onClick={e => {
                this.sendToParent({ navData: data[0].name });
              }}
            >
              <CityFeaturette city={data[0].name} />{" "}
            </div>{" "}
          </Link>
        );
      }
    } else {
      ciudades = "Loading...";
    }

    return <Fragment>{ciudades}</Fragment>;
  }
}
export default CitiesDisplay2;