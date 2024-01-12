import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Passenger from './passenger';
import Rider from './rider';
import Homepage from '../Components/HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import RiderInfo from '../Components/riderInfo';
import { PrivateRoute } from './PrivateRoute';
import DriverLoginPage from './DriverLoginPage';
import DriverPage from './DriverPage';
import Driver_PrivateRoute from './Driver_PrivateRoute';
function MainRoutes() {
  return (
    <Routes>
      
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/passenger' element={<PrivateRoute><Passenger/></PrivateRoute>}></Route>
        {/* <Route path='/pass' element={<Passenger/>}></Route> */}
        <Route path='/rider' element={<Rider/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path="/driverLogin" element={<DriverLoginPage/>}></Route>
        <Route path='/driver' element={<Driver_PrivateRoute><DriverPage/></Driver_PrivateRoute>}></Route>
        <Route path='/riderInfo' element={<RiderInfo/>}></Route>
        <Route></Route>
    </Routes>
  );
}

export default MainRoutes;