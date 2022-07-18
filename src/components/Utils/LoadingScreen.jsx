import React from 'react'
import {Spinner} from 'react-bootstrap'
export const LoadingScreen = () => {
  return (
    <div className='loading center'>
        <Spinner animation="border" style={{width: "7rem", height: "7rem"}}/>
    </div>
    
  )
}