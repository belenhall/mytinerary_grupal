import React from "react";
import CarouselNav from "../Carousel/CarouselNav";
import { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Activities from "./Activities";
import Comments from "./Comments";
import AccordionComponent from './AccordionComponent';

class AccordionContainer extends Component {
  state = {
    toggle: false
  };

  setAccordionContainerState = () => {

    this.setState({toggle: !this.state.toggle})
  }
  
  
  render() {

    const { accordionKey } = this.props;
   
    console.log(this.state.toggle)
    return (
        <AccordionComponent title={this.props.title} renderCondition={this.state.toggle} callback={this.setAccordionContainerState} titleParameter={"Barcelona"}/>
      
    );
  }
}
const getData = async (url, init, callback) => {
  const response = await fetch(url, init);
  const data = await response.json();
  const call = await callback(data);

  return call;
};

export default AccordionContainer;
