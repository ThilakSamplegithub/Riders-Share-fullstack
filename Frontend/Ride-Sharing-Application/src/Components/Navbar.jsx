import React from "react";
import "../Components/HomePage.css";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NineDotsIcon from "../Icons/NineDots";
import { Link } from "react-router-dom";
import LoginMenu from "./LoginMenu";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <Flex bg="gray.800" color="white" p={4} alignItems="center">
      <Box fontSize="xl" marginLeft="50px" marginRight="50px">
        <Link to="/">SparkRiders</Link>
      </Box>

      <Menu border="none">
        <MenuButton
          as={Button}
          fontSize={15}
          color="white"
          bg="gray.800"
          borderRadius={50}
          rightIcon={<ChevronDownIcon />}
        >
          Company
        </MenuButton>
        <MenuList color="black" zIndex={22} border={"1px solid black"}>
          <MenuItem>About us</MenuItem>
          <MenuItem>Our offering</MenuItem>
          <MenuItem>How RideShare works</MenuItem>
          <MenuItem>Global citizenship</MenuItem>
          <MenuItem>Newsroom</MenuItem>
          <MenuItem>Investor relations</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Careers</MenuItem>
        </MenuList>
      </Menu>
      <Button
        colorScheme="teal"
        mr={2}
        fontSize={15}
        color="white"
        bg="gray.800"
        border="none"
        borderRadius={50}
      >
        Safety
      </Button>
      <Button
        colorScheme="teal"
        mr={4}
        fontSize={15}
        color="white"
        bg="gray.800"
        border="none"
        borderRadius={50}
      >
        Help
      </Button>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          fontSize={15}
          color="white"
          bg="gray.800"
          borderRadius={50}
          rightIcon={null} // Remove the right icon
          _hover={{ rightIcon: null }} // Hide the right icon on hover as well
        >
          <NineDotsIcon boxSize={6} color="white" marginRight={1} />
          Product
        </MenuButton>
        <MenuList color="black" maxH="300px" overflowY="auto">
          <Link to="/riderInfo">
            <MenuItem>
              <Icon viewBox="0 0 24 24" color="RGBA(0, 0, 0, 0.92)">
                <path
                  fill="currentColor"
                  d="M9 19h6v2H9c-2.76 0-5-2.24-5-5V7h2v9c0 1.66 1.34 3 3 3m1.42-13.59c.78-.78.78-2.05 0-2.83c-.78-.78-2.05-.78-2.83 0c-.78.78-.78 2.05 0 2.83c.78.79 2.04.79 2.83 0M11.5 9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07L14.93 15H11.5z"
                />
              </Icon>{" "}
              <span style={{fontWeight:"bold",marginLeft:13}}>Passenger</span>
            </MenuItem>
          </Link>
          <Link to="/driver">
            <MenuItem>
              <Icon viewBox="0 0 24 24" color="RGBA(0, 0, 0, 0.92)">
                <path
                  fill="currentColor"
                  d="M2 3h20c1.05 0 2 .95 2 2v14c0 1.05-.95 2-2 2H2c-1.05 0-2-.95-2-2V5c0-1.05.95-2 2-2m12 3v1h8V6zm0 2v1h8V8zm0 2v1h7v-1zm-6 3.91C6 13.91 2 15 2 17v1h12v-1c0-2-4-3.09-6-3.09M8 6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
              </Icon>
              <span style={{fontWeight:"bold",marginLeft:13}}>Driver</span>
            </MenuItem>
          </Link>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-home" style={{ marginRight: "15px" }}></i>Home
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-car" style={{ marginRight: "15px" }}></i>Ride
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-peace" style={{ marginRight: "15px" }}></i>Drive
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-utensils" style={{ marginRight: "15px" }}></i>Eat
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i
                class="fas fa-glass-cheers"
                style={{ marginRight: "15px" }}
              ></i>
              Restaurants
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-truck" style={{ marginRight: "15px" }}></i>
              Freight
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-motorcycle" style={{ marginRight: "15px" }}></i>
              Bike & scoot
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-train" style={{ marginRight: "15px" }}></i>
              Transit
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i class="fas fa-briefcase" style={{ marginRight: "15px" }}></i>
              Business
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" style={{ fontSize: "xxxl", fontWeight: "bold" }}>
              <i
                class="fas fa-money-bill-alt"
                style={{ marginRight: "15px" }}
              ></i>
              Money
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
      <LoginMenu />
      <Link to="/signup">
        <Button
          colorScheme="teal"
          mr={2}
          fontSize={15}
          color="white"
          bg="gray.800"
          border="none"
          borderRadius={50}
        >
          Sign Up
        </Button>
      </Link>
      <Logout />
    </Flex>
  );
};

export default Navbar;
