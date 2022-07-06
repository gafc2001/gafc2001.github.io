import React from 'react'
import {Row, Col } from 'react-bootstrap'
import useLanguage from './../../hooks/useLanguage';
export const Footer = () => {
    const {lang} = useLanguage();
    const year = new Date().getFullYear();
    return (
    <footer className="section container-fluid text-light">
        <Row className="bg-footer p-5">
            <Col md="3">
                <h5 className="d-flex align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="icon" className='img-fluid' width="40"/>
                    <span className="h3 m-0 ms-1">GAFC2001</span>
                </h5>
                <div>
                    {lang.footer.paragraphs.map( e => (<p>{e}</p>))}
                </div>
            </Col>
            <Col md="3" className="center-x">
                <div className="fit-content">
                    <h5>{lang.footer.explore.title}</h5>
                    {lang.footer.explore.links.map( link => {
                        return (<a className="text-light footer-link" href={`#${link.href}`}>{link.name}</a>)
                    })}
                </div>
            </Col>
            <Col md="3" className="center-x">
                <div className="fit-content">
                    <h5>{lang.footer.contact.title}</h5>
                    <a rel="noopener noreferrer" target="_blank"className="text-light footer-link"
                        href="https://www.linkedin.com/in/gustavo-farfan-coraje-64488b211/">
                        <i className="me-2 fab fa-linkedin"></i>
                        <span>Linkedin</span>
                    </a>
                    <a rel="noopener noreferrer" target="_blank"className="text-light footer-link" href="mailto:farfancoraje15@gmail.com">
                        <i className="me-2 fas fa-envelope"></i>
                        <span>farfancoraje15@gmail.com</span>
                    </a>
                    <a rel="noopener noreferrer" target="_blank"className="text-light footer-link" href="https://github.com/gafc2001">
                        <i className="me-2 fab fa-github"></i>
                        <span>Github</span>
                    </a>
                </div>
            </Col>
            <Col md="3" className="center-x">
                <div className='fit-content'>
                    <h5>{lang.footer.projects.title}</h5>
                    <div>
                        {lang.project.projects.map( project => {
                            return (
                                <a className='text-light footer-link' href={project.links[1].url}>{project.title}</a>
                            );
                        })}
                    </div>
                </div>
            </Col>
            
        </Row>
        <div className="row bg-footer-secondary">
            <p className="m-0 text-center py-4">Gustavo Farfan Coraje | Portfolio <span>{year}</span></p>
        </div>
    </footer> 
  )
}
