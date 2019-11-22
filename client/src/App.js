import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrowsingContainer from './Containers/BrowsingContainer';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Cities from './components/Cities/Cities';
import CitiesContainer from "./components/Cities_copy/CitiesContainer";
import FeaturedCity from "./components/Cities_copy/FeaturedCity";

class App extends Component {
  constructor(props){
    super(props)
  
  this.state={
    navData: '',
  }}


sendStateToMain = value => {
  this.setState(value);
  };
  

render(){
  return (

    <div className="App">
      <Route path="" component={NavBar}></Route>
      <Route path="" component={Header}></Route>
      <Redirect from="" to="/index"></Redirect>
      <Switch>
          <BrowsingContainer callback={this.sendStateToMain} path="/index"></BrowsingContainer>
          <Route path="/LogIn" component={LogIn}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route exact path="/Cities">
            <CitiesContainer callback={this.sendStateToMain} />
          </Route>
          <Route exact path={`/${this.state.navData}`}>
            <FeaturedCity city={this.state.navData} />
          </Route>
      </Switch>
      <Route path="" component={Footer}></Route>
      
    </div> 
  );
}}

export default App;
 