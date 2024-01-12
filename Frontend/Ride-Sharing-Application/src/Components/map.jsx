
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@chakra-ui/react';
const Map = ({ lat, lng }) => {
  return (
<Box>
<MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px',position:"absolute", top:"0", left:"0", width:"100%", height:"100%",zIndex:"-1"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker position={[lat, lng]} /> */}
    </MapContainer>
  
</Box>
  )
};

export default Map;