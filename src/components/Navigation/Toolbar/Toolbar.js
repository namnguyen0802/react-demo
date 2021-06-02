import React from 'react';
import Logo from '../../Logo/Logo';
import {Button, Form, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const toolbar = (props) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink
          to="project"
        >Project
        </NavLink>
        <div className='mr-4'/>
        <NavLink
          to="user"
        >User
        </NavLink>
      </Nav>
      <Form inline>
        <a href={'sign-in'}>Sign-in</a>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default toolbar;
