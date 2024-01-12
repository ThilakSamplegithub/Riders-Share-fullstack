import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
export const PrivateRoute=({children})=>{
   const {isAuth2}=useSelector((state)=>state.passenger_reducer)
   console.log(isAuth2,'is isAuth inside passenger')
   const location=useLocation()
   console.log(location)
   if(!isAuth2){
    return <Navigate state={location.pathname} to="/login"/>
   }
   return children
}