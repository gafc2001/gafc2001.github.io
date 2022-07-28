import React,{useState} from 'react'
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Admin/Sidebar/Sidebar'
import { Topbar } from '../../components/Admin/Main/Topbar';
import {LoadingScreen} from '../../components/Utils/LoadingScreen';
import useAuth from '../../hooks/useAuth';

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
          <div className={`flex-fill pt-4 mt-5 ${toggle?"shadow":""}`}>
            <Topbar setToggle={setToggle} toggle={toggle}/>
            <div className="px-3">
              <Outlet/>
            </div>
          </div>
        </div>
      )}
      
    </>
    
  )
}