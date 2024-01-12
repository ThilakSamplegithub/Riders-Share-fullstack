import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const Driver_PrivateRoute = ({children}) => {
    const {isAuth}=useSelector(state=>state.driver_reducer)
    console.log(isAuth,'inside driver')
    const location=useLocation()
    if(!isAuth){
        return <Navigate state={location.pathname} to="/driverLogin"/>
    }
    return children
}

export default Driver_PrivateRoute
