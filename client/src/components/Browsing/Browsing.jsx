import React from "react";
import { Link} from "react-router-dom";
import CarouselNav from "../Carousel/CarouselNav";

const browsing = ({ flecha }) => {
  return (
    <div className="container-fluid p-4">
      <p>
        Find your <span className={"cool-touch"}>perfect trip</span>, <br></br>
        designed by insiders who know and{" "}
        <span className={"cool-touch"}>love</span> their{" "}
        <span className={"cool-touch"}>cities</span>
      </p>
      <Link to="/cities">
        <img id={"Arrow"} src={flecha} alt="" />
      </Link>

      <CarouselNav height={"33em"} width={"33em"}/>
    </div>
  );
};

export default browsing;
