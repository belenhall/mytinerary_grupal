import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getData } from "../../store/actions/reduxFetch";

class LogIn extends Component {
    state = {
        username: "",
        password: ""
      };

      handleUsername(event) {
        this.setState({ username: event.target.value });
      }
      handlePassword(event) {
        this.setState({ password: event.target.value });
      }

      handleSubmit() {
        const bodyData = {
          username: this.state.username,
          password: this.state.username
        };
    
        getData("/api/users/login", {
          method: "POST",
          body: JSON.stringify(bodyData),
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
    render() {
        
      

        return (
       

            <div id={"logForm"}>
            <Form className={"col-8"}>
             <Form.Group controlId={"formBasicEmail"}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control  onChange={e => this.handleUsername(e)}
              value={this.state.username} type={"email"} placeholder={"Enter email"} />
                  <Form.Text className={"text-muted"}>Type your e-mail or username</Form.Text>
             </Form.Group>
             <Form.Group controlId={"formBasicPassword"}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control  onChange={e => this.handlePassword(e)}
              value={this.state.email} type={"password"} placeholder={"Password"} />
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