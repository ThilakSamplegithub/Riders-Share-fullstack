import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { driver_reducer } from "./Rider/driver_reducer";
import{passenger_reducer} from "./Passenger/passenger_reducer"
const rootReducer=combineReducers({passenger_reducer,driver_reducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
export default store 