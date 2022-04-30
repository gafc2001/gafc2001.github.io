import React, { useState,useEffect,useRef } from "react";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Scrollspy from 'react-scrollspy'
export const Topbar = ({data,action,headerHeight}) => {

  const [height,setHeight] = useState(0)
  const ref = useRef(null)

  const localLang = window.localStorage.getItem("lang")
  const getLanguageInfo = (value) => data.languages.find( l => l.value == value)
  const [prefLang,setPrefLang] = useState([getLanguageInfo(localLang).name,getLanguageInfo(localLang).image])

  const setGlobalPrefLang = (value) => {
    console.log(data)
    const findLang = getLanguageInfo(value)
    setPrefLang([findLang.name,findLang.image])
    action(value)
    console.log(data)
  }
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => {
        setOffset(window.pageYOffset);
        if(window.pageYOffset+ref.current.clientHeight >= headerHeight.current.clientHeight){
          ref.current.classList.add("header-offset")
        }else{
          ref.current.classList.remove("header-offset")
        }
      }
      setHeight(ref.current.clientHeight)
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="header fixed-top header-navbar" ref={ref}>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Scrollspy className="d-flex m-0" offset="1" items={ data.links.map( link => link.href) } currentClassName="active-link">
              {data.links.map(link => {
                return(
                  <Nav.Link key={link.name} className="text-light" href={`#${link.href}`}>
                    {link.name}
                  </Nav.Link>
                )
              })}
              </Scrollspy>
              <Dropdown className="mx-3 width-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img width="25" src={ require(`./../../assets/images/${prefLang[1]}`)}/>
                  <span className="ms-2">{prefLang[0]}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {data.languages.map( lang => 
                    <Dropdown.Item key={lang.value} onClick={() => setGlobalPrefLang(lang.value)}>
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
