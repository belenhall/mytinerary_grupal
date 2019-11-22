import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

function ControlledCarousel3(props) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const sendToParent = object => {
    props.callback(object);
  };

  console.log(props.images.map(subArray => subArray.map(pair => pair[0])));
  console.log(props.images.map(subArray => subArray.map(pair => pair[1])));
  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {props.images.map(subArray => (
        <Carousel.Item className="container">
          <div className={"col-12 row align-items-center"}>>
            {subArray.map((pair, index) => (
              <Link className="d-block w-100 carousel col-6" to={`/${pair[0]}`}>
                <img className={"imgSize col-6"}
                  onClick={e => {
                    sendToParent({ navData: pair[0] });
                  }}
                  className="carouselImg"
                  src={pair[1]}
                  alt={`Slide ${index}`}
                />
              </Link>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel3;
