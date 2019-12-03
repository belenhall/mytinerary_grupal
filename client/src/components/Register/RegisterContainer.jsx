
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import CityInput from '../Cities/CityInput'

class Register extends Component {
    state = {
       input: ''
    }
    sendStateToParent = value => {
        this.setState(value);
      };
    render() {
        return (
            <div>
                <Form className="col-8 logForm">
                
                <Form.Label>Username</Form.Label>
                <CityInput callbackFromParent={this.sendStateToParent}/>
                <Form.Label >Email</Form.Label>
                <CityInput callbackFromParent={this.sendStateToParent}/>
                <Form.Label>Password</Form.Label>
                <CityInput callbackFromParent={this.sendStateToParent}/>
                <Form.Label>Profile Picture</Form.Label>
                <CityInput callbackFromParent={this.sendStateToParent}/>
            
                </Form>
            </div>
        );
    }
}

export default Register;