import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const Unauthenticated = ({children}) => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Navigate to="/superdashboard" replace={true}/> : children
}
export default Unauthenticated;