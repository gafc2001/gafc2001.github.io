import React, { useState,useEffect,useRef, useCallback } from "react";

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

  const getLanguageInfo = useCallback((value,array) => {
    return array.find( l => l.value === value);
  },[]);

  const [prefLang,setPrefLang] = useState(getLanguageInfo(localStorage.getItem("lang"),data.languages))

  useEffect(() => {
      const findLang = getLanguageInfo(localStorage.getItem("lang"),data.languages);
      setPrefLang(findLang);
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [headerHeight]);

  return (
    <header className="header fixed-top header-navbar" ref={ref}>
      <Navbar bg="transparent" variant="dark" expand="md">
        <Container className="justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Scrollspy className="d-flex m-0 flex-column flex-md-row ps-3 pe-3" items={ data.links.map( link => link.href) } currentClassName="active-link">
              {data.links.map(link => {
                return(
                  <Nav.Link key={link.name} className="text-light p-1 ms-2 text-end" href={`#${link.href}`}>
                    {link.name}
                  </Nav.Link>
                )
              })}
              </Scrollspy>
              <Dropdown className="mx-3 width-dropdown ms-auto mt-2 mt-md-0">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img width="25" src={ require(`./../../assets/images/${prefLang.image}`)} alt={prefLang.value}/>
                  <span className="ms-2">{prefLang.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {data.languages.map( lang => 
                    <Dropdown.Item key={lang.value} onClick={() => handleLanguageChange(lang.value)}>
                      <img width="25" src={ require(`./../../assets/images/${lang.image}`)} alt={lang.value}/>
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
