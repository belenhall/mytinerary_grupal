import React, { Component } from 'react';
import CarouselBoots from 'react-bootstrap/Carousel';
import paris from '../../Assets/paris.jpg';
import rio from '../../Assets/rio.jpg';
import santo from '../../Assets/santorini.jpg';
import Price from '../Price/Price';

class Carousel extends Component {
    render() {

        //variables 
        return (
            <div id={"carousel"} className="col-12">
                <h1 className={"display-6"}>Most Popular MYtinerary</h1>
                <CarouselBoots>   
                    <CarouselBoots.Item>
                    
                        <div className={"col-12 row align-items-center"}>
                            <Price></Price>
                            <img className={"imgSize col-6"} src={paris} alt="" />
                            <img className={"imgSize col-6"} src={rio} alt="" />
                            <Price></Price>    
                            <img className={"imgSize col-6"} src={santo} alt="" />
                            <img className={"imgSize col-6"} src={paris} alt="" />
                            <Price></Price>
                        </div>
                    </CarouselBoots.Item>
                    <CarouselBoots.Item> 
                        <div className={"col-12 row align-items-center"}>
                        <Price></Price>
                            <img className={"imgSize col-6"} src={paris} alt="" />
                            <img className={"imgSize col-6"} src={rio} alt="" />
                            <img className={"imgSize col-6"} src={santo} alt="" />
                            <img className={"imgSize col-6"} src={paris} alt="" />
                        </div>
                    </CarouselBoots.Item>
                    <CarouselBoots.Item>
                        <div className={"col-12 row align-items-center"}>
                            <img className={"imgSize col-6"} src={paris} alt="" />
                            <img className={"imgSize col-6"} src={rio} alt="" />
                            <img className={"imgSize col-6"} src={santo} alt="" />
                            <img className={"imgSize col-6"} src={paris} alt="" />
                        </div>
                    </CarouselBoots.Item>
                </CarouselBoots>
            </div>
        );
    }
}

export default Carousel;