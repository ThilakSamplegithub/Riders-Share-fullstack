import React from 'react';
import { Box } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { PhoneIcon } from '@chakra-ui/icons';
const MapComponent = ({ locations }) => {
  
  return (
    <Box >
      <MapContainer
      //lat={20.5937} lng={78.9629}
        center={[20.5937, 78.9629]}
        zoom={13}
        style={{height:"700px", position:"absolute", top:"60px", left:"0", width:"100%", zIndex:"-1"}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
            
            />
        ))} */}
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
