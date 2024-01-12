import React, { useState } from "react";
import { Box, Button, Container } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleRequest } from "../Redux/Passenger/actions";
import {
  PASSENGER_FAILURE,
  PASSENGER_RIDE_REQUEST,
} from "../Redux/Passenger/actionTypes";

function Rides({ pickup }) {
  const [selectedRide, setSelectedRide] = useState(null);
  console.log(pickup, "inside rides component as props");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container
      style={{
        border: "2px solid black",
        marginLeft: "500px",
        marginTop: "60px",
        position: "absolute",
        backgroundColor: "white",
        zIndex: "1",
        borderRadius: "10px",
        width: "350px",
      }}
    >
      <Box
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            border:
              selectedRide === "sedan" ? "2px solid green" : "1px solid black",
            marginTop: "30px",
            borderRadius: "7px",
          }}
          onClick={() => setSelectedRide("sedan")}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCc4qgoFWCK7P82y-BRy8zM7jlYS4kb93QUGeOXYd3CMn8m0cLHXuX1y4XfIhrnzBN9ZA&usqp=CAU"
            alt="carImg"
            style={{ width: "20%" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "0px", fontWeight: "bold" }}>sedan </h3>
            <h5 style={{ margin: "0px" }}>16km</h5>
            <h6 style={{ margin: "0px" }}>on door</h6>
          </div>
          <h3>₹340.33</h3>
          <ChevronRightIcon />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            border:
              selectedRide === "hatchback"
                ? "2px solid green"
                : "1px solid black",
            marginTop: "10px",
            borderRadius: "7px",
          }}
          onClick={() => setSelectedRide("hatchback")}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxjKPn854Iv3KurVC6DtrllGh6ke9yzcn6W50gEZqNHL8mxl8azXLAOwNIvRavFJL0Ok&usqp=CAU"
            alt="carImg"
            style={{ width: "20%" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "0px", fontWeight: "bold" }}>hatchback</h3>
            <h5 style={{ margin: "0px" }}>16km</h5>
            <h6 style={{ margin: "0px" }}>on door</h6>
          </div>
          <h3>₹385.9</h3>
          <ChevronRightIcon />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            border:
              selectedRide === "SUV" ? "2px solid green" : "1px solid black",
            marginTop: "10px",
            borderRadius: "7px",
          }}
          onClick={() => setSelectedRide("SUV")}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0JXAjIoYXboochLapabTjvBexclmtUQNmaj3HnYbgzd31Hu85gzjkJJbxdQyc7Lz12I&usqp=CAU"
            alt="carImg"
            style={{ width: "20%" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ margin: "0px", fontWeight: "bold" }}>SUV</h3>
            <h5 style={{ margin: "0px" }}>16km</h5>
            <h6 style={{ margin: "0px" }}>on door</h6>
          </div>
          <h3>₹404.76</h3>
          <ChevronRightIcon />
        </div>
        <div
          onClick={() => {
            console.log(pickup, "inside to send as api");
              // Redirect to the desired route
              // window.location.href = "/riderInfo"; // Use window.location.href for redirection
              dispatch(handleRequest({ location: pickup }))
                .then((res) => {
                  console.log(res, "updated location");
                  dispatch({ type: PASSENGER_RIDE_REQUEST });
                })
                .then(()=>setTimeout(()=>navigate("/riderInfo"),1000))
                .catch((err) => dispatch({ type: PASSENGER_FAILURE }));
             // Delay for 1000 milliseconds (1 second)
          }}
        >
          <Button
            type="submit"
            mt="30px"
            mb="10px"
            style={{
              width: "100%",
              border: "none",
              borderRadius: "5px",
              height: "40px",
              backgroundColor: "black",
              color: "white",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Confirm Ride
          </Button>
        </div>
      </Box>
    </Container>
  );
}

export default Rides;
