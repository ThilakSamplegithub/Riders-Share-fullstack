import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
export const PrivateRoute=({children})=>{
   const {isAuth}=useSelector((state)=>state.passenger_reducer)
   console.log(isAuth,'is status')
   const location=useLocation()
   console.log(location)
   if(!isAuth){
    return <Navigate state={location.pathname} to="/login"/>
   }
   return children
}