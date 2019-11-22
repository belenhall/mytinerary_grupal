import React from 'react';
import user from '../../Assets/userb.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css';
import {Link, NavLink } from 'react-router-dom';


const navBar = () => {
  return (
    <div>
     <Navbar bg="back" className="back" expand="lg col-12">
       <NavDropdown title={<img src={user} id={"user-logo"}></img>} id="basic-nav-dropdown">
         <NavDropdown.Item className="bg-light" as={Link} to="/Register" >Register</NavDropdown.Item>
         <NavDropdown.Item className="bg-light" as={Link} to="/LogIn">Log in</NavDropdown.Item>
       </NavDropdown >
       <Navbar.Toggle aria-controls="basic-navbar-nav" className={"bg-white"}/>
       <Navbar.Collapse id="basic-navbar-nav" >
         <Nav className="mr-auto">
           <Nav.Link as={Link} className="text-white navLinkOutline" to="/index">Home</Nav.Link>
           <Nav.Link as={Link} className="text-white navLinkOutline" to="/cities">Cities</Nav.Link>
           <Nav.Link className="text-white navLinkOutline"to="/BF">Black Friday</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
   </div>
  );
}

export default navBar;