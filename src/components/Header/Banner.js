import React from 'react';
import useLanguage from '../../hooks/useLanguage';
//Bootstrap components
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Banner = (props) => {
  const language = useLanguage();
  const data = props.data
  return (
    <div className="presentation h-100 mt-5">
      <Row className="h-100 align-items-lg-center">
        <Col lg="8">
          <div className="text-typing">
            <h1 className="fw-bolder text-custom">{data.title}</h1>
          </div>
          <p className="font-monospace fs-5 fw-light text-typing"><span className="purple">print</span>(<span
            className="string">"Software Developer"</span>)</p>
          <div className="ps-3 border-4 border-start border-custom fs-5">
            {data.paragraphs.map( (paragraph,index) => <p key={index} >{paragraph}</p>)}
          </div>
        </Col>
        <Col lg="4" className="d-flex">
          <div className="mx-lg-5 text-center w-100">
            <img src={require("./../../assets/images/profile.jpg")} alt="profile"
              className="img-fluid rounded shadow-lg rounded-circle img-profile"/>
          </div>
        </Col>
      </Row>

    </div>
  )
}
