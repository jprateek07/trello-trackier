import React from 'react'
import { Navigate } from 'react-router-dom'
export const PrivateRoute = ({ screen,children}) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated == 'true' && screen=='login' || isAuthenticated == 'true' && screen=='others') {
      return <Navigate to="/" />
    }
    if(isAuthenticated == 'true')
    {
      return children  
    }
    if((isAuthenticated == 'false' || isAuthenticated==null) && screen!='dashboard')
    {
      return children  
    }
    return <Navigate to="/sign-in" />
  }
export default PrivateRoute