import React from 'react'
import {Col} from 'react-bootstrap'
import { Spinner } from 'react-bootstrap'
export const SummaryBox = ({bgColor,isLoading,data}) => {
  return (
    <Col md={3} className="col-6">
      <div className={`${bgColor} summary-box text-light position-relative`}>
        {isLoading ? (
          <div className="center loading">
            <Spinner className="" animation="border" role="status" style={{height : "5rem",width : "5rem"}}/>
          </div>
          ) : (
          <div className="h-100">
            <div className="ps-4 center flex-column align-items-start h-100 text-start">
              <span className="fs-5">{data.title}</span>
              <span className='summary-value'>{data.count}</span>  
            </div>
            <div className="position-absolute summary-icon-container center">
              <i className={` summary-icon ${data.icon}`}></i>
            </div>
            {data.total && (
                <span className='w-100 ps-3 summary-total'>Total : {data.total}</span>  
              )}
          </div>
        )}
        
        
      </div>
    </Col>
  )
}
