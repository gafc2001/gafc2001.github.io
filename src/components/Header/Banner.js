import React from 'react';
import useLanguage from '../../hooks/useLanguage';
//Bootstrap components
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import cvFile from '../../assets/documents/CV_GUSTAVO_FARFAN.pdf'

export const Banner = () => {
  const {lang} = useLanguage();
  
  const data = lang.header.banner;
  return (
    <div className="presentation h-100 mt-5">
      <Row className="h-100 align-items-lg-center">
        <Col lg="8">
          <div className="text-typing">
            <h1 className="fw-bolder text-custom">{data.title}</h1>
          </div>
          <p className="font-monospace fs-5 fw-light text-typing">
            <span className="purple">print</span>
            (<span className="string">"Software Developer"</span>)
          </p>
          <div className="ps-3 border-4 border-start border-custom fs-5">
            {data.paragraphs.map( (paragraph,index) => <p className="paragraph" key={index} >{paragraph}</p>)}
          </div>
          <div className="socialmedia-links">
            <ul className="list-inline d-flex align-items-center">
              <li className='banner-link list-inline-item'>
                <a rel="noopener noreferrer" target="_blank"className="text-light text-center d-inline-block link"
                    href="https://www.linkedin.com/in/gustavo-farfan-coraje-64488b211/">
                    <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className='banner-link list-inline-item'>
                <a rel="noopener noreferrer" target="_blank" className="text-light text-center d-inline-block link" href="mailto:farfancoraje15@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
              <li className='banner-link list-inline-item'>
                <a rel="noopener noreferrer" target="_blank"className="text-light text-center d-inline-block link" href="https://github.com/gafc2001">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className='list-inline-item btn-download-cv'>
                <a href={cvFile} target="_blank" rel="noreferrer" className='text-light text-center d-inline-block text-decoration-none'>
                  <span>Descargar CV</span>  <i className="fas fa-file-alt"></i> 
                </a>
              </li>
            </ul>
          </div>
        </Col>
        {/* <Col lg="4" className="d-flex">
          <div className="mx-lg-5 text-center w-100">
            <img src={require("./../../assets/images/profile.jpg")} alt="profile"
              className="img-fluid rounded shadow-lg rounded-circle img-profile"/>
          </div>
        </Col> */}
      </Row>

    </div>
  )
}
