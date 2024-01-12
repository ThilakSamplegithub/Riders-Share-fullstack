import { PASSENGER_DROPPED, PASSENGER_FAILURE, PASSENGER_LOGINSUCCESS, PASSENGER_LOGOUT, PASSENGER_NEARBY_DRIVERS, PASSENGER_REQUEST, PASSENGER_RIDE_REQUEST, PASSENGER_SUCCESS } from "./actionTypes"

const initialState={
isLoading:false,
isAuth2:false,
driver:[],
isStatus:false,
isError:false
}
export const passenger_reducer=(state=initialState,{type,payload,payload2})=>{
switch(type){
    case PASSENGER_REQUEST:{
        return {...state,isLoading:true}
    }
    case PASSENGER_SUCCESS:{
        console.log(payload)
        return {...state,isLoading:false,passenger:payload}
    }
    case PASSENGER_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    case PASSENGER_LOGINSUCCESS:{
         console.log(payload,"is payload")
        return {...state,isLoading:false,isAuth2:payload}
    }
    case PASSENGER_RIDE_REQUEST:{
     return {...state,isLoading:false}
    }
    case PASSENGER_NEARBY_DRIVERS:{
        console.log(payload2,'is about passenger')
        const passenger={...payload2}
        console.log(passenger,'is passenger Infor')
        if(passenger.status){
            const singleDriver=payload.filter(el=>el._id===passenger.driverId)
            console.log(singleDriver,'is singleMost driver')
            return {...state,isLoading:false,driver:singleDriver,isStatus:true}
        }
        return {...state,isLoading:false,driver:payload}
    }
    case PASSENGER_DROPPED:{
        console.log(`dropped`)
        return {...state,isLoading:false,isStatus:false}
    }
    case PASSENGER_LOGOUT:{
        return {...state,isLoading:false,isAuth2:false}
    }
    default:{
        return state
    }
}
}
