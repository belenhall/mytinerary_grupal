import React, { Component } from 'react';
import Browsing from '../components/Browsing/Browsing';
import arrowClick from '../Assets/circled-right-2b.png';
import arrow from '../Assets/circled-right-2c.png';

class BrowsingContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            flecha:arrow, 
        };
        this.cambiaColor=this.cambiaColor.bind(this);
    };

  cambiaColor(){  
            this.state.flecha === arrow ? this.setState({flecha:arrowClick}) : this.setState({flecha:arrow});  
    };

    render() {
        var callback = this.props.callback
        return (
            <div>
                <Browsing call={callback} cambiaColor={this.cambiaColor} flecha={this.state.flecha}>
                
                </Browsing>
            </div>
        );
    }
}

export default BrowsingContainer;