import React from 'react'
import {Col,Row} from 'react-bootstrap'
export const SummaryBox = ({bgColor,value,text,icon}) => {
  return (
    <Col md={3} className="col-6 ">
      <div className={`${bgColor} summary-box text-light position-relative`}>
        <div className="h-100">
          <div className="ps-4 center flex-column align-items-start h-100 text-start">
            <span className="fs-5">{text}</span>
            <span className='summary-value'>{value}</span>  
          </div>
          <div className="position-absolute summary-icon-container center">
            <i className={` summary-icon ${icon}`}></i>
          </div>
        </div>
      </div>
    </Col>
  )
}
