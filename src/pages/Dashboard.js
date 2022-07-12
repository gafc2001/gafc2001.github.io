import React from 'react'
import { Content } from '../components/Admin/Main/Content'
import { Sidebar } from '../components/Admin/Sidebar/Sidebar'

export const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar/>
      <Content/>
    </div>
  )
}