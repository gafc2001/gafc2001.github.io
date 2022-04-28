import React from "react";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
export const Topbar = () => {
  return (
    <header className="header fixed-top header-navbar" id="">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-light" href="#home">
                Habilidades
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Proyectos
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Contact
              </Nav.Link>
              <Dropdown className="ms-2">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img width="25" src={ require("./../assets/images/english-circle.png")}/>
                  <span className="ms-2">English</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <img width="25" src={ require("./../assets/images/english-circle.png")}/>
                    <span className="ms-2">English</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <img width="25" src={ require("./../assets/images/spain-circle.png")}/>
                    <span className="ms-2">Spanish</span>
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
