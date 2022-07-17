import React,{useEffect} from 'react'
import {Routes, Route} from 'react-router-dom';

import { Home } from './../../pages/Home'
import { Login } from './../../pages/Login';
import { NotFound } from './../../pages/NotFound';
import { Dashboard } from './../../pages/Dashboard';

import PrivateRoute from './../../components/Routes/PrivateRoute';
import Unauthenticated from './../../components/Routes/UnauthenticatedRoute';
import useAuth from './../../hooks/useAuth';

const AppRoutes = () => {
    const {isAuthenticated,verifyAuthentication} = useAuth()
    useEffect(() => {
        if(!isAuthenticated){
            const request = async () => {
                await verifyAuthentication()
            }
            request();
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isAuthenticated]);
    return (
        <Routes>
            <Route name="home"exact path="/" element={<Home/>}/>
            <Route name="" exact path="/superlogin" 
                element={
                <Unauthenticated>
                    <Login/>
                </Unauthenticated>
                }
            />
            <Route exact path="/superdashboard" 
                element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
  )
}

export default AppRoutes