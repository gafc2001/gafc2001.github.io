import React,{useState} from 'react'
import { Content } from '../components/Admin/Main/Content'
import { Sidebar } from '../components/Admin/Sidebar/Sidebar'
import {LoadingScreen} from '../components/Utils/LoadingScreen';
import useAuth from '../hooks/useAuth';

export const Dashboard = () => {
  const [toggle,setToggle] = useState(false);
  const {isLoading} = useAuth();
  return (
    <>
      {isLoading ? (
        <LoadingScreen/>
      ):(
        <div className="d-flex">
          <Sidebar toggle={toggle}/>
          <Content setToggle={setToggle} toggle={toggle}/>
        </div>
      )}
      
    </>
    
  )
}