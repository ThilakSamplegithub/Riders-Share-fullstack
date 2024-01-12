import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import Map from "../Components/map";
import Rides from "../Components/rides";
import {
  PlusSquareIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import MapComponent from "../Components/MapComponent";
function Passenger() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [showRides, setShowRides] = useState(false);
  const [date, setDate] = useState(new Date());
  const [updateStatus, setUpdateStatus] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowRides(true);
    console.log("Ride requested:", { pickup, destination, date });
  };

  return (
    <div>
      {/* <Map lat={20.5937} lng={78.9629} /> */}
      <MapComponent />
      {showRides && <Rides pickup={pickup} />}
      <Container
        style={{
          marginLeft: "70px",
          marginTop: "60px",
          position: "absolute",
          backgroundColor: "white",
          zIndex: "1",
          borderRadius: "10px",
          width: "350px",
          border: "2px solid black",
        }}
      >
        <Box style={{ borderRadius: "10px", width: "100%", padding: "20px" }}>
          <Heading>Where can we pick you up?</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="pickup" mt={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PlusSquareIcon
                    style={{
                      color: "black",
                      fontSize: "7px",
                      border: "2px solid",
                      borderRadius: "1px",
                      marginLeft: "-10px",
                      marginTop: "-10px",
                    }}
                  />
                </InputLeftElement>
                <Input
                  type="pickup"
                  placeholder="Add a pickup location"
                  style={{
                    paddingLeft: "30px",
                    backgroundColor: "rgb(238,238,238)",
                    border: "none",
                    height: "30px",
                    width: "100%",
                    borderRadius: "7px",
                    fontSize: "15px",
                  }}
                  onChange={(e)=>{console.log(e.target.value,'is pickup');setPickup(e.target.value)}}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="destination" mt={"15px"}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PlusSquareIcon
                    style={{
                      color: "black",
                      fontSize: "7px",
                      border: "2px solid",
                      borderRadius: "1px",
                      marginLeft: "-10px",
                      marginTop: "-10px",
                    }}
                  />
                </InputLeftElement>
                <Input
                  type="pickup"
                  placeholder="Add a destination location"
                  style={{
                    paddingLeft: "30px",
                    backgroundColor: "rgb(238,238,238)",
                    border: "none",
                    height: "30px",
                    width: "100%",
                    borderRadius: "7px",
                    fontSize: "15px",
                  }}
                  onChange={(e)=>{console.log(e.target.value,'is destiny');setDestination(e.target.value)}}
                />
              </InputGroup>
            </FormControl>

            <Box className="date-picker-wrapper" mt={"10px"}>
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="d MMM"
                calendarClassName="custom-calendar"
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: "viewport",
                  },
                }}
                minDate={new Date()}
              />

              <input
                type="time"
                value={date.toISOString().substr(11, 5)} // Convert to HH:mm format
                onChange={(e) => {
                  const time = e.target.value;
                  const [hours, minutes] = time.split(":");
                  const newDate = new Date(date);
                  newDate.setHours(hours);
                  newDate.setMinutes(minutes);
                  setDate(newDate);
                }}
              />
            </Box>

            <Box
              style={{
                width: "100%",
                borderTop: "1px solid gray",
                marginTop: "28px",
              }}
            >
              <InputGroup style={{ display: "flex", marginTop: "0px" }}>
                <InputLeftElement>
                  <CalendarIcon style={{ color: "green" }} />
                </InputLeftElement>


                <Menu>
                  <MenuButton
                    as={Button}
                    style={{
                      marginLeft: "40px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                  >
                    Add payment method
                  </MenuButton>
                  <MenuList style={{ marginLeft: "275px", marginTop: "-50px" }}>
                    <MenuItem>Cash</MenuItem>
                    <MenuItem>UPI</MenuItem>
                    <MenuItem>Netbanking</MenuItem>
                  </MenuList>
                </Menu>
                <InputRightElement>
                  <ChevronRightIcon />
                </InputRightElement>
              </InputGroup>
              <Button
                type="submit"
                mt={"10px"}
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
                // onClick={handleUpdate}
              >
                Request Ride
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Passenger;
