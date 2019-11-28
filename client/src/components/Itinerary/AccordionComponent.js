import React from "react";
import CarouselNav from "../Carousel/CarouselNav";
import { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Activities from "./Activities";
import Comments from "./Comments";

class AccordionContainer extends Component {


  render() {
const {callback, items, accordionKey} = this.props
let conditionalRender;
if (this.props.renderCondition == true) {
    conditionalRender = <Activities title={this.props.title}/>
}
    return (
      <div>
        <button
          onClick={callback}
          eventKey={accordionKey}
        >
          Toggle
        </button>
      
          <div>
              {conditionalRender}
        
          </div>
    
      </div>
      
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
