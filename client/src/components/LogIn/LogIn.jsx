import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LogIn extends Component {
  
    render() {
        
        let filteredCities = this.props.cities;

        return (
       

            <div id={"logForm"}>
            <Form className={"col-8"}>
             <Form.Group controlId={"formBasicEmail"}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type={"email"} placeholder={"Enter email"} />
                  <Form.Text className={"text-muted"}>Type your e-mail or username</Form.Text>
             </Form.Group>
             <Form.Group controlId={"formBasicPassword"}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type={"password"} placeholder={"Password"} />
             </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check out" />
              </Form.Group>
             <Button variant="success" type="submit">Submit</Button>
            </Form>
            </div>
        );
    }
}

export default LogIn;