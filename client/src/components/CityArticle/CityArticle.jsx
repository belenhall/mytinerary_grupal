import React from 'react';
import label2 from '../../Assets/label-02 copia.svg';
import amsterdam from '../../Assets/city_img/amsterdam.jpg';
import barcelona from '../../Assets/city_img/barcelona.jpg';
import belgrade from '../../Assets/city_img/belgrade.jpg';
import berlin from '../../Assets/city_img/berlin.jpg';
import budapest from '../../Assets/city_img/budapest.jpg';
import copenhagen from '../../Assets/city_img/copenhagen.jpg';
import hamburg from '../../Assets/city_img/hamburg.jpg';
import helsinki from '../../Assets/city_img/helsinki.jpg';
import london from '../../Assets/city_img/london.jpg';
import madrid from '../../Assets/city_img/madrid.jpg';
import milan from '../../Assets/city_img/milan.jpg';
import munich from '../../Assets/city_img/munich.jpg';
import napoli from '../../Assets/city_img/napoli.jpg';
import new_york from '../../Assets/city_img/budapest.jpg';
import oslo from '../../Assets/city_img/oslo.jpg';
import paris from '../../Assets/city_img/paris.jpg';
import prague from '../../Assets/city_img/prague.jpg';
import rome from '../../Assets/city_img/budapest.jpg';
import sofia from '../../Assets/city_img/budapest.jpg';
import sotckholm from '../../Assets/city_img/budapest.jpg';
import vienna from '../../Assets/city_img/vienna.jpg';
import warsaw from '../../Assets/city_img/warsaw.jpg';

const CityArticle = () =>  {
    return (
        <div className="App container col-10 row ml-3 rounded">
                {/* PICTURE */} 
                <div className="container row"> 
                <img src={paris} id="cityPic" alt="" height="auto" width="250vw" className="rounded-circle"/>     
                <img id="labelCity" src={label2} alt=""/>
                    <div id="nameOnPic"> 
                        <h2 className="">Country.
                        <span className="cool-touch">City</span>
                        </h2>
                    </div>   
                </div>

                    <div id="cityDescrip"className="col-10">
                        <h5 align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi error hic neque, commodi quod non accusantium mollitia molestiae
                        eligendi doloremque pariatur sint consectetur ullam, dolor sunt provident
                        laudantium modi nobis?</h5> 
                    </div>   
        </div>
    )
}
export default CityArticle;
