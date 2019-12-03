import React, { Component } from "react";
import CarouselBoots from "react-bootstrap/Carousel";
// import Price from "../Price/Price";
import ImageButton from "../Cities/imageButton";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log(state.cities.items);
  return {
    items: state.cities.items
  };
};

class CarouselNav extends Component {
  render() {
    const { items } = this.props || this.props.items;
    let quadrupleCarouselItems = [];
    for (let i = 0; i < items.length; i++) {
      if (i != 0 && i % 4 == 0) {
        quadrupleCarouselItems.push(items.slice(i - 4, i));
      }
    }
    console.log(
      quadrupleCarouselItems.map(item => item.map(ciudad => ciudad.name))
    );
    //variables
    return (
      <div id={"carousel"} className="col-12">
        <h1 className={"display-6"}>Most Popular MYtineraries</h1>
        <CarouselBoots>
          {quadrupleCarouselItems.map(item => (
            <CarouselBoots.Item className="container">
              <div className={"col-12 row align-items-center"}>
                {/* <Price></Price> */}
                {item.map((ciudad, index) => (
                  <ImageButton
                    // style={{ width: "100%", height: "100%" }}
                    // height={this.props.height}
                    // width={this.props.width}
                    // className="d-block w-100 carousel col-6"
                    // className={"imgSize col-6"}
                    // style={{
                    //   width: "100%",
                    //   height: "100%",
                    //   paddingBottom: "10%"
                    // }}
                    // className="carouselImg"
                    ciudad={ciudad.name}
                    alt={`Slide ${index}`}
                  />
                ))}
              </div>
            </CarouselBoots.Item>
          ))}
        </CarouselBoots>
      </div>
    );
  }
}

const ReduxCarouselNav = connect(mapStateToProps, null)(CarouselNav);

export default ReduxCarouselNav;
