import React from "react";
import { Component } from "react";
import CitiesDisplay2 from "./CitiesDisplay2";
import CityInput from "./CityInput";
import "./CitiesComponent.css";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCitiesAction from '../../Store/fetchCities';
import {getCitiesError, getCities, getCitiesPending} from '../../Store/Reducers/citiesReducer';

import FeaturedCity from "./FeaturedCity";
import { Route, Switch } from "react-router-dom";
import store from "../../Store/store";

export class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  sendStateToParent = value => {
    this.setState(value);
  };

  componentDidMount() {
    const {fetchCities} = this.props;
    fetchCities();
  }

  render() {
    const {cities} = this.props;

    var mainCallback = this.props.callback;
    var ciudades;
    var letra = this.state.input;

    if (cities != "") {
      ciudades = cities;
      if (letra != "") {
        ciudades = filterCitiesByFirstLetter(ciudades, letra);
      }
    }

    return (
      <Switch>
        <Route exact path={"/cities"}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-3">
                <h1>Destination</h1>
                <CityInput callbackFromParent={this.sendStateToParent} />
              </div>
              <div className="container">
                <div className="row">
                  <CitiesDisplay2
                    className="col-6"
                    data={ciudades}
                    callbackFromParent={mainCallback}
                  />
                </div>
              </div>
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

const filterCitiesByFirstLetter = (items, letter) => {
  let cities = items;
  cities = cities.filter(
    city =>
      city.name.slice(0, letter.length).toUpperCase() ==
      letter.slice(0, letter.length).toUpperCase()
  );
  return cities;
};

const mapStateToProps = state => ({
  error: getCitiesError(state),
  cities: getCities(state),
  pending: getCitiesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCities: fetchCitiesAction
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);
