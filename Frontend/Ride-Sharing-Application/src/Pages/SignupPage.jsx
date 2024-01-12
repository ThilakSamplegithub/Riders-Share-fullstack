"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,useToast
} from "@chakra-ui/react";
import { handleRegister } from "../Redux/Passenger/actions";
import { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  PASSENGER_FAILURE,
  PASSENGER_SUCCESS,
} from "../Redux/Passenger/actionTypes";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Signup_loader from "../Components/Signup_loader";
const actions = {
  NAME: "NAME",
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  PHONENUMBER: "PHONENUMBER",
  LOCATION: "LOCATION",
  GENDER: "GENDER",
  RESET: "RESET",
};
const initialState = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  location: "",
  gender: "",
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.NAME: {
      return { ...state, name: payload };
    }
    case actions.EMAIL: {
      return { ...state, email: payload };
    }
    case actions.PASSWORD: {
      return { ...state, password: payload };
    }
    case actions.GENDER: {
      return { ...state, gender: payload };
    }
    case actions.LOCATION: {
      return { ...state, location: payload };
    }
    case actions.PHONENUMBER: {
      return { ...state, phoneNumber: payload };
    }
    case actions.RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
export default function SignupPage() {
  const navigate=useNavigate()
  const toast= useToast()
  const [showPassword, setShowPassword] = useState(false);
  const {isLoading,isError}=useSelector(state=>state.passenger_reducer)
  console.log(isLoading,'is loadingstate')
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatch2 = useDispatch();
  const { name, email, password, gender, phoneNumber, location } = state;
  console.log(state, "is state outside function");
  function handlPost(e) {
    console.log('function invoked')
    console.log(e);
    e.preventDefault();
    console.log(state,'inside function');
    dispatch2(handleRegister(state))
      .then((res) =>{ toast({
        title: 'User Registered!!',
        status: 'success',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true,
      });dispatch2({ type: PASSENGER_SUCCESS,payload:res.data.passenger});dispatch({ type: actions.RESET });navigate("/login")})
      .catch((err) => dispatch2({ type: PASSENGER_FAILURE }));
  }
  return  (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our Rides ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      dispatch({ type: actions.NAME, payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>phoneNumber:</FormLabel>
                  <Input
                    type="Number"
                    value={phoneNumber}
                    onChange={(e) =>
                      dispatch({
                        type: actions.PHONENUMBER,
                        payload: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) =>
                  dispatch({ type: actions.EMAIL, payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) =>
                    dispatch({
                      type: actions.PASSWORD,
                      payload: e.target.value,
                    })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>location</FormLabel>
              <Select
                placeholder="Select option"
                value={location}
                onChange={(e) =>
                  dispatch({ type: actions.LOCATION, payload: e.target.value })
                }
              >
                <option value="kondapur">Kondapur</option>
                <option value="srnagar">SRNagar</option>
                <option value="punjagutta">Punjagutta</option>
                <option value="jubilee hills">Jubilee hills</option>
                <option value="dilshukhnagar">Dilshukhnagar</option>
                <option value="andheri">Andheri</option>
                <option value="bandra">Bandra</option>
                <option value="colaba">Colaba</option>
                <option value="dadar">Dadar</option>
                <option value="worli">Worli</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="Select gender"
                value={gender}
                onChange={(e) =>
                  dispatch({ type: actions.GENDER, payload: e.target.value })
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Select>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handlPost}
              >
                Sign up
              </Button>
              { isLoading && <Signup_loader/>}
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} >
                Already a user? <RouterLink to={"/login"}  ><Box color={"blue.500"}>Login</Box></RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
