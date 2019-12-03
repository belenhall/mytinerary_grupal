import React from "react";
import { Component } from "react";
import CitiesDisplay2 from "./CitiesDisplay";
import CityInput from "./CityInput";
import FeaturedCity from "./FeaturedCity";
import { Route, Switch } from "react-router-dom";

const filterCitiesByFirstLetter = (items, letter) => {
  let cities = items;
  cities = cities.filter(
    city =>
      city.name.slice(0, letter.length).toUpperCase() ==
      letter.slice(0, letter.length).toUpperCase()
  );
  return cities;
};

class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  sendStateToParent = value => {
    this.setState(value);
  };

  render() {
    const listaDeCiudades = this.props.listaDeCiudades
    console.log("LISTA RECIBIDA: " + listaDeCiudades );

    var mainCallback = this.props.callback;
    var ciudades;
    var letra = this.state.input;

    if (listaDeCiudades != undefined) {
      ciudades = listaDeCiudades;
      if (letra != "") {
        ciudades = filterCitiesByFirstLetter(ciudades, letra);
      }
    }

    return (
      <Switch>
        <Route exact path={"/cities"}>
          <div className="container column">
                  <div className="row pl-1 mb-1">     
                    <h3>Destination</h3><CityInput callbackFromParent={this.sendStateToParent} />
                </div> 
                <div className="row dameroBack">
                       <CitiesDisplay2
                    className="col-6"
                    data={ciudades}
                    callbackFromParent={mainCallback}/>
                </div>
            
          </div>
        </Route>
        <Route exact path={`/Barcelona`}>
          <FeaturedCity text="hola" />
        </Route>
      </Switch>
    );
  }
}


export default CitiesContainer;
