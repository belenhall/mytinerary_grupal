import React from 'react';
import label from '../../Assets/label-01.svg';

const price = () => {

    return (
        <div className="container-fluid">  
                <div>
                    <img id="cinta" src={label}></img>
                    <h2 className="text-light mt-3" id="price-label">20% OFF!</h2> 
                </div>
        </div>

    )
}

export default price;