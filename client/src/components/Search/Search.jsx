import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super();

        this.state={
            search:''
        };
    }

    updateSearch(event) {
       this.setState({search: event.target.value.substr(0,20)});
   }
    render() {

   
        var filteredCities = this.props.cities.filter(
            (element)=>{return element.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;}
        );

        return (
            <div className="App form-group">

                <div className="container-fluid ml-5 mt-2 row">
                    <label className="mt-2"><h5>Search</h5></label>
                    <input type="text" className="text-center form-control col-5 ml-4" 
                    placeholder="Your next city" value={this.state.search} 
                        onChange={this.updateSearch.bind(this)}/>
                </div> 

                    <ul className="mt-5">
                        {filteredCities.map((element)=>{
                          return <h5>
                        {element.name}.<span onClick={(e) => console.log("CLICK!!!")}className="cool-touch">{element.country}</span>
                              </h5>
                          })}                   
                    </ul>
            </div>
        );
    }
}

export default Search;



