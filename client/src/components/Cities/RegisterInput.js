import React from "react";
import { Component } from "react";

export default class CityInput extends Component {
    state = {
        value: ''
    }
  sendToParent = object => {
    this.props.callbackFromParent(object);
  };

  handleChange(event) {
    this.sendToParent({ input: event.target.value });
  }

  render() {
    return <input value={this.state.value} type="text" onChange={e => this.handleChange(e)} />;
  }
}