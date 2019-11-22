import React, { Component } from 'react';
import Search from '../Search/Search';
import CityArticle from '../CityArticle/CityArticle';

class Cities extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items:[],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch("/cities")
            .then(res => res.json())
            .then(items => {

                console.log(items);
                this.setState({
                    items,
                    isLoaded: true
                })
                console.log(this.state.items)
        })
    }

    render() {
        const items = this.state.items;
        const isLoaded = this.state.isLoaded;
        console.log(this.state.items)
        console.log(this.state.isLoaded)

      if (!isLoaded) {
            return <div>Loading cities...</div>          
        }
        else{
            
            return (
                <div className="App">
                    <Search cities={items}></Search>
                    <CityArticle></CityArticle>
                    <img></img>
                </div>
            );
        } 
    }
}

export default Cities;