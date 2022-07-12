import React from 'react'
import {Col,Row} from 'react-bootstrap'
export const SummaryBox = ({bgColor,value,text,icon}) => {
  return (
    <Col className={`${bgColor} rounded-3 summary-box text-light p-3`}>
      <Row className="h-100 w-100">
        <Col className="center flex-column">
          <span className="fs-5">{text}</span>
          <span className='summary-value'>{value}</span>  
        </Col>
        <Col className="center">
          <i class={`summary-icon ${icon}`}></i>
        </Col>
      </Row>
    </Col>
  )
}
