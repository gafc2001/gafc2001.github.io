import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
export const Topbar = () => {
  return (
    <div>
    <Navbar fixed="top" className="top-navbar border-bottom border-semi-light" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}