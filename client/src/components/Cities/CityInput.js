import React from "react";
import { Component } from "react";
import Form from'react-bootstrap/Form';

export default class CityInput extends Component {
  sendToParent = object => {
    this.props.callbackFromParent(object);
  };

  handleChange(event) {
    this.sendToParent({ input: event.target.value });
  }

 
  render() {
    return <Form.Control type={"text"} 
    placeholder={"Find your next city"} 
    className={"col-md-3 ml-2 mr-2 mt-3 justify-content-center"}
    onChange={e => this.handleChange(e)} />;
  }
}