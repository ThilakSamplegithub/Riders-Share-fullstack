import { DRIVER_REQUEST } from "./actionTypes"
import axios from "axios"
const baseURL=process.env.REACT_APP_BASE_URL
export const handleDriverLogin=(data)=>async(dispatch)=>{
  dispatch({type:DRIVER_REQUEST})
  let res=await axios.post(`${baseURL}driver/login`,data)
  return res
  }
export const handleStatus=(id,data)=>async(dispatch)=>{
dispatch({type:DRIVER_REQUEST})
  let res=await fetch(`${baseURL}driver/confirmed/${id}`,{
    method:"PATCH",
    headers:{
        "content-Type":"application/json",
        "Authorization":localStorage.getItem("driver_token")
    },
    body:JSON.stringify(data)
  })
  return res
}
export const driverLogout=()=>async(dispatch)=>{
  dispatch({type:DRIVER_REQUEST})
  let res=await fetch(`${baseURL}driver/logout`,{
    method:"GET",
    headers:{
      "Authorization":localStorage.getItem("driver_token")
    }
  })
  let data=await res.json()
  return data
  }