import React from 'react'
import { Table } from 'react-bootstrap' 
import { TableRow } from '../../components/Admin/Main/TableRow'
export const Visits = () => {
  return (
    <>
    <div>Visits</div>
    <Table responsive>
      <thead className='table-dark'>
        <tr>
          <th>#</th>
          <th>IP Address</th>
          <th>Email</th>
          <th>City</th>
          <th>Last visit</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <TableRow/>
        <TableRow/>
        <TableRow/>
      </tbody>
    </Table>
    </>
  )
}