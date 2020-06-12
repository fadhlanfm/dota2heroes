import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default (props) => {
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src="https://image.flaticon.com/icons/png/128/588/588308.png" width={40} alt="dota-icon-flaticon-freepik" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Heroes</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}