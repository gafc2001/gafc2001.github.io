import React, { useState,useEffect,useRef } from "react";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Scrollspy from 'react-scrollspy'
import useLanguage from "../../hooks/useLanguage";
export const Topbar = ({headerHeight}) => {

  const {lang,handleLanguageChange} = useLanguage();
  const data = lang.header.navbar;

  const ref = useRef(null)


  const getLanguageInfo = (value) => data.languages.find( l => l.value == value)
  const [prefLang,setPrefLang] = useState(getLanguageInfo(localStorage.getItem("lang")))

  useEffect(() => {
      const findLang = getLanguageInfo(localStorage.getItem("lang"));
      setPrefLang(findLang);
  },[data]);
  
  //Scrollspy
  useEffect(() => {
      const onScroll = () => {
        if(window.pageYOffset+ref.current.clientHeight >= headerHeight.current.clientHeight){
          ref.current.classList.add("header-offset")
        }else{
          ref.current.classList.remove("header-offset")
        }
      }
      
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="header fixed-top header-navbar" ref={ref}>
      <Navbar bg="transparent" variant="dark" expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Scrollspy className="d-flex m-0 flex-column flex-md-row ps-3" items={ data.links.map( link => link.href) } currentClassName="active-link">
              {data.links.map(link => {
                return(
                  <Nav.Link key={link.name} className="text-light p-1 ms-2" href={`#${link.href}`}>
                    {link.name}
                  </Nav.Link>
                )
              })}
              </Scrollspy>
              <Dropdown className="mx-3 width-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img width="25" src={ require(`./../../assets/images/${prefLang.image}`)}/>
                  <span className="ms-2">{prefLang.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {data.languages.map( lang => 
                    <Dropdown.Item key={lang.value} onClick={() => handleLanguageChange(lang.value)}>
                      <img width="25" src={ require(`./../../assets/images/${lang.image}`)}/>
                      <span className="ms-2">{lang.name}</span>
                    </Dropdown.Item>)
                  }
                  
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
