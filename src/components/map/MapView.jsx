import React from "react";
import { MapContainer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layer from "./Layer";

// คอมโพเนนต์นี้จะใช้ useMapEvents เพื่อจับเหตุการณ์คลิกบนแผนที่
const ClickToAdd = ({ adding, onPick }) => {
  useMapEvents({
    click(e) {
      //  ถ้าอยู่ในโหมดเพิ่มจุดเวน ให้เรียกฟังก์ชัน onPick พร้อมพิกัดที่คลิก
      if (adding) {
        onPick(e.latlng.lat, e.latlng.lng);
      } else {
        alert("ກະລຸນາເພີ່ມຈຸດເຂົ້າເວນກ່ອນ!!!");
      }
    },
  });

  return;
};

const MapView = ({ adding, onPick }) => {
  const center = [13, 101];

  return (
    <div className="flex-1">
      <MapContainer className="h-full " center={center} zoom={7}>
        <Layer />
         {/* คอมโพเนนต์ ClickToAdd จะถูกวางไว้ภายใน MapContainer เพื่อให้สามารถจับเหตุการณ์คลิกได้ */}
        <ClickToAdd adding={adding} onPick={onPick} />
      </MapContainer>
    </div>
  );
};

export default MapView;
