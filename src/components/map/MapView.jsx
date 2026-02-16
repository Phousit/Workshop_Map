import React from "react";
import { MapContainer,   } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layer from "./Layer";
const MapView = () => {
  const center = [13, 101];
  return (
    <div className="flex-1">
      <MapContainer
        className="h-full"
        center={center}
        zoom={7}
        
      >
        <Layer/>
        
      </MapContainer>
    </div>
  );
};

export default MapView;
