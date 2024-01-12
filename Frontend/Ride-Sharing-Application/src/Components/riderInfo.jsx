import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import MapComponent from "./MapComponent";
import { defaultRequest, getNearByDrivers } from "../Redux/Passenger/actions";
import {
  PASSENGER_DROPPED,
  PASSENGER_FAILURE,
  PASSENGER_NEARBY_DRIVERS,
} from "../Redux/Passenger/actionTypes";
import { useNavigate } from "react-router-dom";

function RiderInfo() {
  const { isStatus, driver } = useSelector((state) => state.passenger_reducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getNearByDrivers())
      .then((res) => {
        dispatch({
          type: PASSENGER_NEARBY_DRIVERS,
          payload: res.nearBydrivers,
          payload2: res.passenger,
        });
      })
      .catch((err) => dispatch({ type: PASSENGER_FAILURE }));
      console.log(isStatus,'is status')
       if (isStatus) {
        console.log('entered to default',isStatus)
    const timeoutId=setTimeout(() => {
      dispatch(defaultRequest())
      .then(res=>{dispatch({type:PASSENGER_DROPPED})
      navigate("/passenger")})
      .catch((err) => dispatch({ type: PASSENGER_FAILURE }));
    }, 3000);
    return ()=>{clearTimeout(timeoutId)}
  }
  }, [isStatus]);
  // console.log(isStatus,'is status')
  // if (isStatus) {
  //   setTimeout(() => {
  //     dispatch(defaultRequest())
  //     .then(res=>{dispatch({type:PASSENGER_DROPPED})
  //     navigate("/passenger")})
  //     .catch((err) => dispatch({ type: PASSENGER_FAILURE }));
  //   }, 3000);
  // }
  console.log(driver, "right now what is array");
  return (
    <div>
      <Container
        style={{
          left: "90px",
          top: "200px",
          position: "absolute",
          zIndex: "1",
          borderRadius: "10px",
          width: "1200px",
        }}
      >
        <Box
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            width: "1200px",
            height: "100%",
          }}
        >
          {isStatus ? (
            <Table style={{ width: "100%" }}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Contact No</Th>
                  <Th>Car Model</Th>
                  <Th>Pickup Location</Th>
                  <Th>Email</Th>
                  <Th>Price</Th>
                  <Th>Actions</Th>
                  <Th>Confirmation</Th>
                </Tr>
              </Thead>
              <Tbody>
                {driver?.map((driver, index) => (
                  <Tr key={driver.id}>
                    <Td>{driver.name}</Td>
                    <Td>{driver.phoneNumber}</Td>
                    <Td>{driver.carModel}</Td>
                    <Td>{driver.location}</Td>
                    <Td>{driver.email}</Td>
                    <Td>Rs.300</Td>
                    <Td>
                      <Button
                        style={{
                          border: "none",
                          borderRadius: "3px",
                          backgroundColor: "greenyellow",
                          height: "20px",
                        }}
                        size="sm"
                        onClick={() => navigate("/driverLogin")}
                      >
                        Track
                      </Button>
                      <Button
                        style={{
                          border: "none",
                          borderRadius: "3px",
                          backgroundColor: "green",
                          height: "20px",
                        }}
                        size="sm"
                        ml={4}
                        onClick={() => navigate("/driverLogin")}
                      >
                        Call
                      </Button>
                    </Td>
                    <Td>A driver is on the way to pick you up</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Table style={{ width: "100%" }}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Contact No</Th>
                  <Th>Car Model</Th>
                  <Th>Pickup Location</Th>
                  <Th>Email</Th>
                  <Th>Price</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {driver?.map((driver, index) => (
                  <Tr key={driver.id}>
                    <Td>{driver.name}</Td>
                    <Td>{driver.phoneNumber}</Td>
                    <Td>{driver.carModel}</Td>
                    <Td>{driver.location}</Td>
                    <Td>{driver.email}</Td>
                    <Td>Rs.300</Td>
                    <Td>
                      <Button
                        style={{
                          border: "none",
                          borderRadius: "3px",
                          backgroundColor: "greenyellow",
                          height: "20px",
                        }}
                        size="sm"
                        onClick={() => navigate("/driverLogin")}
                      >
                        Track
                      </Button>
                      <Button
                        style={{
                          border: "none",
                          borderRadius: "3px",
                          backgroundColor: "green",
                          height: "20px",
                        }}
                        size="sm"
                        ml={4}
                        onClick={() => navigate("/driverLogin")}
                      >
                        Call
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Container>
      <MapComponent />
    </div>
  );
}

export default RiderInfo;
