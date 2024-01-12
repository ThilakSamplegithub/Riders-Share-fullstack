import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const RideRequestForm = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleLocationButtonClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
            );
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const address = data.results[0].formatted_address;
              setPickUpLocation(address);
            } else {
              console.error("No address found for the given coordinates.");
            }
          } catch (error) {
            console.error("Error getting location:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation not available in this browser.");
    }
  };

  const handleLocationSearch = async (searchText) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&key=YOUR_GOOGLE_MAPS_API_KEY`
      );
      const data = await response.json();
      
      if (data.predictions && data.predictions.length > 0) {
        const firstPrediction = data.predictions[0];
        setPickUpLocation(firstPrediction.description);
      } else {
        setPickUpLocation("No matching results found.");
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  const handleRequestNow = () => {
    // You can add your logic here to handle the "Request Now" button click
    console.log("Request Now clicked!");
  };

  return (
    <Box
      height="650px"
      width="650px"
      border="1px solid #ccc"
      p={4}
      borderRadius="md"
      backgroundColor={"white"}
      marginLeft="150px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <h1 style={{ fontSize: "50px", marginBottom: "40px" }}>
          <b>Request a Ride Now</b>
        </h1>
      </div>
      <InputGroup mt={4}>
        {/* <Input
          placeholder="Enter pick up location"
          value={pickUpLocation}
          onChange={(e) => setPickUpLocation(e.target.value)}
          onBlur={() => handleLocationSearch(pickUpLocation)}
          height={10}
          marginLeft={10}
          marginRight={10}
          marginBottom={3}
        /> */}
        <InputRightElement width="auto">
          <IconButton
            aria-label="Get Location"
            
            onClick={handleLocationButtonClick}
            size="sm"
          />
        </InputRightElement>
      </InputGroup>
      <InputGroup mt={2}>
        <Input
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          height={10}
          marginLeft={10}
          marginRight={10}
        />
      </InputGroup>
      <Link to="/passenger"><Button
        mt={4}
        colorScheme="teal"
        size="lg"
        onClick={handleRequestNow}
      >
        Request Now
      </Button></Link>
    </Box>
  );
};

export default RideRequestForm;