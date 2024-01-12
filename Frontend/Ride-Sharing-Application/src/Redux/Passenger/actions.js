import axios from "axios"
import { PASSENGER_LOGINSUCCESS, PASSENGER_REQUEST, PASSENGER_SUCCESS } from "./actionTypes"
const baseurl=`${process.env.REACT_APP_BASE_URL}`
export const handleRegister=(state)=>async(dispatch)=>{
    console.log(baseurl,"is baseurl")
    dispatch({type:PASSENGER_REQUEST})
  let res= await axios.post(`${baseurl}passenger/register`,state)
  console.log(res.data.passenger)
     return res
}
export const handleLogin=({email,password})=>async(dispatch)=>{
   dispatch({type:PASSENGER_REQUEST})
    let res=await axios.post(`${baseurl}passenger/login`,{email,password})
    return res
}
export const handleRequest=(location)=>async(dispatch)=>{
 dispatch({type:PASSENGER_REQUEST})
 console.log(location,'inside actions function')
//  let res=await axios.patch(`${baseurl}passenger/update/request/${localStorage.getItem("passengerId")}`,location)
  let res=await fetch(`${baseurl}passenger/update/request/${localStorage.getItem("passengerId")}`,{
    method:"PATCH",
    headers:{
      "content-Type":"application/json",
      "Authorization":localStorage.getItem('token')
    },
    body:JSON.stringify(location)
  })
  let data=await res.json()
 return data
}
export const getNearByDrivers=()=>async(dispatch)=>{
dispatch({type:PASSENGER_REQUEST})
 let res=await fetch(`${baseurl}passenger/${localStorage.getItem("passengerId")}`,{
  method:"GET",
  headers:{
    "Authorization":localStorage.getItem("token")
  }
 })
//  if(!res.ok){
//   throw new Error('something went wrong')
//  }
 let data=await res.json()
 console.log(data)
 return data
}
// export const handleDriverLogin=(data)=>async(dispatch)=>{
// dispatch({type:PASSENGER_REQUEST})
// let res=await axios.post(`${baseurl}driver/login`,data)
// return res
// }
export const defaultRequest=()=>async(dispatch)=>{
  console.log('entered default Request')
dispatch({type:PASSENGER_REQUEST})
let res=await fetch(`${baseurl}passenger/default/${localStorage.getItem("passengerId")}`,{
  method:"PATCH",
  headers:{
    'content-Type':"application/json",
    'Authorization':localStorage.getItem("token")
  },
  body:JSON.stringify({status:false,request:false,driverId:null})
})
let data=await res.json()
console.log(data,'after defaulting')
return data
}
export const passengerLogout=()=>async(dispatch)=>{
dispatch({type:PASSENGER_REQUEST})
let res=await fetch(`${baseurl}passenger/logout`,{
  method:"GET",
  headers:{
    "Authorization":localStorage.getItem("token")
  }
})
let data=await res.json()
return data
}