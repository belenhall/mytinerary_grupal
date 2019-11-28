import React from "react";
import { Component } from "react";

export default class CityInput extends Component {
  sendToParent = object => {
    this.props.callbackFromParent(object);
  };

  handleChange(event) {
    this.sendToParent({ input: event.target.value });
  }

  render() {
    return <input type="text" onChange={e => this.handleChange(e)} />;
  }
}
