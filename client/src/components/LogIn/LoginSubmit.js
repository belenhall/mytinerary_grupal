import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { getData } from "../../store/actions/reduxFetch";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

class LoginSubmit extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  /*handleChange(event) {
    
  }*/

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const bodyData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    getData(
      "/api/users/login",
      {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json"
        }
      },
      data => console.log(data)
    );
  }

  handleMailSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const bodyData = {
      email: "belenhall@hotmail.com"
    };
    getData(
      "/logged",
      {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json"
        }
      },
      data => console.log(data)
    );
  }

  handleGMailSubmit(bodyData) {
    
 
    getData(
      "/logged",
      {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json"
        }
      },
      responseData => console.log(responseData)
    );
  }

  render() {
    console.log(this.state.username);
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
              name={"username"}
              placeholder="username"
            />

            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => this.handlePassword(e)}
              value={this.state.password}
              type="text"
              name={"password"}
              placeholder="mypassword"
            />
            <Form.Control
              onClick={event => this.handleSubmit(event)}
              type="submit"
            />
            <GoogleLogin
              clientId="1083777488269-qtccrdu14cm0mhds2bo07tkuroik5ak7.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle => {
                const body= {
                    username: responseGoogle.profileObj.name,
                    email: responseGoogle.profileObj.email,
                    profilePicture: responseGoogle.profileObj.imageUrl
                
                }
                console.log(body);

               this.handleGMailSubmit(body)

              }}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <button
              onClick={event => {
                this.handleMailSubmit(event);
              }}
            ></button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default LoginSubmit;
