import React,{useState, useEffect}  from 'react';
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
  useToast
} from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import Map from '../Components/map';
import MapComponent from '../Components/MapComponent';


function Rider() {
    
    const toast =useToast()
    const [passengers, setPassengers] = useState([]);
    const [selectedPassenger, setSelectedPassenger] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // useEffect(() => {
     
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://sparkriders-backend.onrender.com/passenger');
    //       if (response.ok) {
    //         const data = await response.json();
    //         setPassengers(data);
    //       } else {
    //         console.error('Failed to fetch data');
    //       }
    //     } catch (error) {
    //       console.error('An error occurred while fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
    useEffect(() => {
      
      const dummyApiResponse = [
        {
            id: 1,
            name: 'thilak thakur',
            contact: '9090909090',
            pickupLocation: 'railway station, Hyderabad',
            destination: 'bus stand, hyderabad',
            price:"$40.33"
          },
          {
            id: 2,
            name: 'nikhil pillare',
            contact: '9090909090',
            pickupLocation: 'railway station, nagpur',
            destination: 'sitabuldi, nagpur',
            price:"$303.56"
          },
       
      ];
      setPassengers(dummyApiResponse);
    }, []);
    const handleAcceptClick = (passenger) => {
        setSelectedPassenger(passenger);
        setIsModalOpen(true);
        toast({
          title: 'Ride accepted',
          status: 'success',
          position: 'bottom-right',
          duration: 3000,
          isClosable: true,
        });
      };
    
      const handleCloseModal = () => {
        setSelectedPassenger(null);
        setIsModalOpen(false);
      };
 

  return (
    
    <div>
      {/* <Map lat={20.5937} lng={78.9629} /> */}
      <MapComponent/>
<Container style={{left:"90px", top:"200px", position:"absolute", zIndex:"1", borderRadius:'10px', width:"1000px"}}>
      <Box style={{border:"2px solid black",borderRadius:"10px", width:"1100px", height:"100%"}}>
        

      <Table  style={{width:"100%"}}>
            <Thead>
              <Tr>
                <Th>SR. No</Th>
                <Th>Name</Th>
                <Th>Contact No</Th>
                <Th>Pickup Location</Th>
                <Th>Destination</Th>
                <Th>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody >
              {passengers.map((passenger, index) => (
                <Tr key={passenger.id}>
                  <Td style={{textAlign:"center"}}>{index + 1}</Td>
                  <Td>{passenger.name}</Td>
                  <Td>{passenger.contact}</Td>
                  <Td>{passenger.pickupLocation}</Td>
                  <Td>{passenger.destination}</Td>
                  <Td>{passenger.price}</Td>
                  <Td>
                    <Button style={{border:"none", borderRadius:"3px", backgroundColor:"greenyellow", height:"20px"}} size="sm" onClick={()=>handleAcceptClick(passenger)}>
                      Accept
                    </Button>
                    <Button style={{border:"none", borderRadius:"3px", backgroundColor:"red", height:"20px"}} size="sm" ml={4}>
                      Deny
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
         
          
       
         
      </Box>
    </Container>
    </div>
    
  );
}

export default Rider;