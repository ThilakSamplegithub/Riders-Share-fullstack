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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NineDotsIcon from "../Icons/NineDots";
import { Link} from "react-router-dom";
import LoginMenu from "./LoginMenu";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <Flex bg="gray.800" color="white" p={4} alignItems="center">
      <Box fontSize="xl" marginLeft="50px" marginRight="50px">
      <Link to='/'>SparkRiders</Link>
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
        <MenuList color="black" zIndex={22} border={'1px solid black'}>
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
      <LoginMenu/>
      <Link to="/signup"><Button
        colorScheme="teal"
        mr={2}
        fontSize={15}
        color="white"
        bg="gray.800"
        border="none"
        borderRadius={50}
      >
        Sign Up
      </Button></Link>
      <Logout/>
    </Flex>
  );
};

export default Navbar;
