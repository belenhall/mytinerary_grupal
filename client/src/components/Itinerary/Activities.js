import React from "react";
import { Component } from "react";


class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    console.log("MOUNTED");
    getData(`/api/itineraries/byTitle/${this.props.title}`, null, data => {
      this.setState({items:data});
    });
  }
  render() {
    console.log(this.state.items);
    let conditionalRender;
    if (this.state.items != '') {
    conditionalRender = this.state.items[0].activities
      console.log(conditionalRender);
    }
    return <div>{conditionalRender && conditionalRender.map(item => <h6>{item}</h6>)} </div>;
  }
}

const getData = async (url, init, callback) => {
  const response = await fetch(url, init);
  const data = await response.json();
  const call = await callback(data);
  console.log(data);

  return call;
};

export default Activities;
