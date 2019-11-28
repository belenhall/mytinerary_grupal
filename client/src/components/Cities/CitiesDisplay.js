import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import ImageButton from "./imageButton";

class CitiesDisplay2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "fail"
    };
  }

  render() {
    const data = this.props.data;
    let ciudades;
    console.log(data);
    if (data != undefined) {
      ciudades = data;
      ciudades = ciudades.map(item => (
        <ImageButton width="16em" height="16em" ciudad={item.name} />
      ));
    } else {
      ciudades = "Loading...";
    }

    return <Fragment>{ciudades}</Fragment>;
  }
}

export default CitiesDisplay2;
