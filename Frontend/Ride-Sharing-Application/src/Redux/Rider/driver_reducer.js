import { DRIVER_FAILURE, DRIVER_LOGIN_SUCCESS, DRIVER_LOGOUT, DRIVER_REQUEST } from "./actionTypes"

const initialState={
    isAuth:false,
    isError:false,
    isLoading:false
}
export const driver_reducer=(state=initialState,{type,payload})=>{
switch(type){
    case DRIVER_REQUEST:{
        return {...state,isLoading:true,isError:false}
    }
    case DRIVER_LOGIN_SUCCESS:{
        return {...state,isLoading:true,isAuth:true,isError:false}
    }
    case DRIVER_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    case DRIVER_LOGOUT :{
        return {...state,isLoading:false,isAuth:false,isError:false}
    }
    default :{
        return state
    }
}
}