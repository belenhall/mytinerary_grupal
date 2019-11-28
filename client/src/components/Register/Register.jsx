import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { getData } from "../../store/actions/reduxFetch";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit() {
    const bodyData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.username
    };

    getData("/api/users/register", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  render() {
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);

    return (
      <div>
        <Form className="col-8 logForm">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={e => this.handleUsername(e)}
              value={this.state.username}
              type="text"
              placeholder="username"
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={e => this.handleEmail(e)}
              value={this.state.email}
              type="email"
              placeholder="username@example.com"
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => this.handlePassword(e)}
              value={this.state.password}
              type="text"
              placeholder="mypassword"
            />
            <Form.Control onClick={() => this.handleSubmit()} type="submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Register;