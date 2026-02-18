import { useEffect, useState } from "react";
import PersonelList from "./components/people/PersonelList";
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
import useDutyStore from "./store/useDutyStore";
const App = () => {

   // สถานะเพื่อติดตามว่าเรากำลังอยู่ในโหมด "เพิ่ม" หรือไม่
  const [adding, setAdding] = useState(false);

  //
  const [pending, setPending] = useState(null);

  // ดึงฟังก์ชัน fetchAll จาก store เพื่อโหลดข้อมูลเมื่อคอมโพเนนต์ถูกสร้าง
  const fetchAll = useDutyStore((state) => state.fetchAll);

  // ใช้ useEffect เพื่อเรียก fetchAll เมื่อคอมโพเนนต์ถูกสร้างครั้งแรก
  useEffect(() => {
    fetchAll();
  }, []);

  // ฟังก์ชันที่จะถูกเรียกเมื่อผู้ใช้คลิกบนแผนที่เพื่อเพิ่มจุดเวน
  const onPick = (lat, lng) => {
     setPending({ lat, lng });
  }
  
  

  
  
  return (
    <div className="flex h-screen bg-gray-100">
      <PersonelList />

      <div className="flex flex-col flex-1">

        {/* prop adding และ setAdding ถูกส่งไปยัง Header เพื่อให้สามารถสลับโหมดการเพิ่มจุดเวนได้ */}
        <Header adding={adding} setAdding={setAdding} />

        <div className="flex flex-1 overflow-hidden">

           {/* prop adding และ onPick ถูกส่งไปยัง MapView เพื่อให้สามารถเพิ่มจุดเวนเมื่อคลิกบนแผนที่ได้ */}
          <MapView adding={adding} onPick={onPick}/>
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
