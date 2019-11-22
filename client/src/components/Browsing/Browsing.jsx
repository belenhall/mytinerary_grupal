import React from 'react';
import arrow from '../../Assets/circled-right-2c.png';
import {Link, NavLink } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import CarouselNav from '../Carousel/CarouselNav'
import quadrupleCarouselItems from "../../Assets/Resources/carouselArray";

const browsing = ({flecha,cambiaColor,call}) => {
    const callback = call;
    return (
        
        <div className="container-fluid p-4">
            <p>Find your <span className={"cool-touch"}>perfect trip</span>, <br></br>
             designed by insiders who know and <span className={"cool-touch"}>love</span> their <span className={"cool-touch"}>cities</span></p>
            <Link to="/cities"><img id={"Arrow"} src={flecha} alt="" /></Link>
            
            <CarouselNav callback ={callback} images={quadrupleCarouselItems}></CarouselNav>
        </div>
    );
}

export default browsing;