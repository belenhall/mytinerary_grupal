import React, { Component } from "react";
import "./App.css";
import { BrowseRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BrowsingContainer from "./Containers/BrowsingContainer";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import CitiesContainer from "./components/Cities/CitiesContainer";
import FeaturedCity from "./components/Cities/FeaturedCity";
import { connect } from "react-redux";
import { reduxFetch } from "./store/actions/reduxFetch";
import {requestData, requestDataSuccess } from "./store/actions/cityActions"
import { requestItineraries, requestItinerariesSuccess } from "./store/actions/itineraryActions";

const mapStateToProps = state => {
  return {
    reduxNavData: state.nav.navData,
    items: state.cities.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    accion: () => dispatch(reduxFetch("/api/cities", requestData, requestDataSuccess)),
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navData: ""
    };
  }

  sendStateToMain = value => {
    this.setState(value);
  };

  componentDidMount() {
    const { accion } = this.props;
    accion();
  }

  render() {
    const { reduxNavData } = this.props;
    const { items } = this.props;
    console.log("ESTO ES APP Y ESTO ES NAV DATA " + reduxNavData);
    console.log("ESTO ES APP Y ESTO ES CITIES ITEMS " + items);
 
    return (
      <div className="App">
        <Route path="" component={NavBar}></Route>
        <Route path="" component={Header}></Route>
        <Switch>
          <BrowsingContainer
            callback={
              this.sendStateToMain /*HAY QUE ADAPTAR EL CAROUSEL A REDUX */
            }
            path="/index"
          ></BrowsingContainer>
          <Route path="/LogIn" component={LogIn}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route exact path="/Cities">
            <CitiesContainer
              listaDeCiudades={items}
              callback={this.sendStateToMain}
            />
          </Route>
          <Route exact path={`/${reduxNavData}`}>
            <FeaturedCity city={reduxNavData} />
          </Route>
        </Switch>
        <Route path="" component={Footer}></Route>
        <Redirect from="/" to="/index" />
      </div>
    );
  }
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ReduxApp;
