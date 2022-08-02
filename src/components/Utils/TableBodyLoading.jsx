import React from 'react'
import { Placeholder } from 'react-bootstrap';
export const TableBodyLoading = ({rows,cols}) => {
    const array = Array.from({length:rows??1});
  return (
    <>
    {array.map((row,index) => (
    <tr key={index}>
        <Placeholder as="td" animation="glow" colSpan={cols}>
            <Placeholder xs={12} />
        </Placeholder>
    </tr>
    ))}
    </>
    
  )
}
