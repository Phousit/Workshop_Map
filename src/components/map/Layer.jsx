import { LayersControl, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Layer = () => {
  return (
    <LayersControl>
      {/* 1. Basmap */}
      <LayersControl.BaseLayer name="OSM" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="World Imagery" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>

      <LayersControl.Overlay name="Test" checked>
        <Marker position={[13, 101]} />
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default Layer;
