import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    //console.log(location)
    if(loading){
        return <h1>LOADINANG.................</h1>
    }

if(user?.email){

    return children;
}


  return <Navigate to='/login' state={location.pathname} replace></Navigate>
  
}

export default PrivateRoute
