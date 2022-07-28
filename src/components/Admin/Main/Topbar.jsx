import React from 'react';
import {Navbar} from 'react-bootstrap';
export const Topbar = ({setToggle,toggle}) => {
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
      <Navbar expand="lg"  fixed="top" className="top-navbar border-semi-light px-3">
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Toggle 
              className='ms-auto'
              aria-controls="responsive-navbar-nav"
              onClick={() => handleToggle()}/>
      </Navbar>
  )
}
