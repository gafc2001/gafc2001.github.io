import React from 'react'
import { SummaryBox } from './SummaryBox'
import {Row} from 'react-bootstrap';
export const Summary = () => {
  return (
    <Row>
        <SummaryBox/>
        <SummaryBox/>
        <SummaryBox/>
        <SummaryBox/>
    </Row>
  )
}
