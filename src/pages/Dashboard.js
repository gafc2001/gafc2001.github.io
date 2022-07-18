import React,{useState} from 'react'
import { Content } from '../components/Admin/Main/Content'
import { Sidebar } from '../components/Admin/Sidebar/Sidebar'

export const Dashboard = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <div className="d-flex">
      <Sidebar toggle={toggle}/>
      <Content setToggle={setToggle} toggle={toggle}/>
    </div>
  )
}