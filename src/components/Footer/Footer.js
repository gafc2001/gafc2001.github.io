import React from 'react'
import {Row, Col } from 'react-bootstrap'
export const Footer = () => {
  return (
    <footer className="section container-fluid text-light" id="contact-section">
        <Row className="bg-footer p-5">
            <Col lg="6">
                <a rel="noopener noreferrer" target="_blank"className="text-light text-center link footer-link"
                    href="https://www.linkedin.com/in/gustavo-farfan-coraje-64488b211/">
                    <i className="me-2 fab fa-linkedin"></i>
                    <span>linkedin.com/in/gustavo-farfan-coraje/</span>
                </a>
            </Col>
            <Col lg="6">
                <a rel="noopener noreferrer" target="_blank"className="text-light text-center link footer-link" href="mailto:farfancoraje15@gmail.com">
                    <i className="me-2 fas fa-envelope"></i>
                    <span>farfancoraje15@gmail.com</span>
                </a>
            </Col>
            <Col lg="6">
                <a rel="noopener noreferrer" target="_blank"className="text-light text-center link footer-link" href="https://github.com/gafc2001">
                    <i className="me-2 fab fa-github"></i>
                    <span>github.com/gafc2001</span>
                </a>
            </Col>
        </Row>
        <div className="row bg-footer-secondary">
            <p className="m-0 text-center py-4">Gustavo Farfan Coraje | Portfolio <span id="year">2022</span></p>
        </div>
    </footer> 
  )
}
