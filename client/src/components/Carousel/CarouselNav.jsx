import React, { Component } from 'react';
import CarouselBoots from 'react-bootstrap/Carousel';
import paris from '../../Assets/paris.jpg';
import rio from '../../Assets/rio.jpg';
import santo from '../../Assets/santorini.jpg';
import Price from '../Price/Price';
import {Link} from 'react-router-dom';

class CarouselNav extends Component {
    sendToParent = object => {
        this.props.callback(object);
      }

    render() {

        //variables 
        return (
            <div id={"carousel"} className="col-12">
                <h1 className={"display-6"}>Most Popular MYtinerary</h1>
                <CarouselBoots>  
               
                {this.props.images.map(subArray => (
        <CarouselBoots.Item className="container">
           
          <div className={"col-12 row align-items-center"}>
          <Price></Price>
            {subArray.map((pair, index) => (
              <Link style={{width:"100%", height:"100%"}} className="d-block w-100 carousel col-6" to={`/${pair[0]}`}>
                <img className={"imgSize col-6"} style={{width:"100%", height:"100%", paddingBottom: "10%"}}
                  
                  className="carouselImg"
                  src={pair[1]}
                  alt={`Slide ${index}`}
                  onClick={e => {
                    this.sendToParent({ navData: pair[0] });
                  }}
                />
              </Link>
            ))}
          </div>
        </CarouselBoots.Item>
      ))} 
                           
                </CarouselBoots>
            </div>
        );
    }
}

export default CarouselNav;