import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { getData } from "../../store/actions/reduxFetch";
import Button from 'react-bootstrap/Button'

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = (event) =>{
    this.setState({[event.target.name]:event.target.value});
    console.log(this.state)
    }



  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const bodyData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    getData("/api/users/register", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json"
      }
    }, (data)=>console.log(data));
  }

  render() {
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);

    return (
      <div>
                <Form  className="justify-content" onSubmit={this.onSubmitHandler} className="col-8 " id="registerForm">
                    <div className="align-items-center">          
                        
                        {/* <img className="" id={"userPic"}src={userPic} height="120vh"></img> */}

                      {/*   <input type="file" id="uploadPic" /> */}
                    </div>
                    <Form.Group controlId="exampleForm.ControlInput1">
                  
                        <Form.Control type="Choose a username" name="username"               
                            className="mb-2"
                            placeholder="username" value={this.state.username}
                            onChange={this.handleChange} />
       
                        <Form.Control type="Type your email" name="email"
                            className="mb-2"
                            placeholder="your@email.com" value={this.state.email}
                            onChange={this.handleChange} />

                         <Form.Control type="password" name="password"                         
                            className="mb-2"
                            placeholder="password" value={this.state.password}
                            onChange={this.handleChange} />
                        </Form.Group>                       
                    <Button variant='success' value='submit' type='submit'>REGISTER</Button>
                </Form>
            </div>
    );
  }
}

export default Register;