import React from "react";
import { MapContainer, useMapEvents, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layer from "./Layer";
import useDutyStore from "../../store/useDutyStore";
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

  // ดึงข้อมูลสถานที่จาก store เพื่อแสดงบนแผนที่
  const locations = useDutyStore((state) => state.Locations);

  const center = [13, 101];

  return (
    <div className="flex-1" >
      <MapContainer className="h-full " center={center} zoom={7}>
        <Layer />
         {/* คอมโพเนนต์ ClickToAdd จะถูกวางไว้ภายใน MapContainer เพื่อให้สามารถจับเหตุการณ์คลิกได้ */}
        <ClickToAdd adding={adding} onPick={onPick} />

    

       {
        locations.map((item) => {
          return (
            <Marker 
            key={item.id} 
            position={[item.lat, item.lng]}>
              <Popup>
                <div className="font-bold text-center mb-3 text-lg text-amber-900" style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}>{item.name}</div>
                <div>{item.lat}, {item.lng}</div>
              </Popup>
              <Tooltip direction="center">{item.name}</Tooltip>

            </Marker>
          )
        })
       }
      </MapContainer>
    </div>
  );
};

export default MapView;
