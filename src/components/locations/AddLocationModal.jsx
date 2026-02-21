import { useState } from "react";
import useDutyStore from "../../store/useDutyStore";
const AddLocationModal = ({ lat, lng, setAdding, setPending }) => {
    // สถานะเพื่อเก็บชื่อของสถานที่ใหม่ที่ผู้ใช้กรอกเข้ามา
  const [name, setName] = useState("");

  // ดึงฟังก์ชัน addLocation จาก store เพื่อใช้ในการเพิ่มสถานที่ใหม่
  const addLocation = useDutyStore((state) => state.addLocation);

  // ฟังก์ชันที่จะถูกเรียกเมื่อผู้ใช้คลิกปุ่ม Save เพื่อเพิ่มสถานที่ใหม่
  const hdlAddLocation = async () => {
    await addLocation(name, lat, lng);

    setAdding(false);
    setPending(null);
  };

  // ฟังก์ชันที่จะถูกเรียกเมื่อผู้ใช้คลิกปุ่ม Cancel เพื่อยกเลิกการเพิ่มสถานที่
  const hdlCancel = () => {
    setAdding(false);
    setPending(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-lg  w-96 shadow-2xl">
        <h3 className="text-xl text-gray-500 text-center mb-4">
          ເພີ່ມຈຸດເຂົ້າເວນໃຫ່ມ
        </h3>
        <p className="text-gray-500 text-xs">
          Lat: {lat.toFixed(6)}, Lng: {lng.toFixed(6)}{" "}
        </p>
        <input
          className="w-full p-2 border border-gray-300 rounded-md my-4 focus:outline-none focus:ring-1 focus:ring-green-500"
          placeholder="Input Name"
          autoFocus
          // เมื่อผู้ใช้กรอกข้อมูลใน input นี้ จะอัปเดตสถานะ name ด้วยค่าที่กรอกเข้ามา
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex gap-4">
          <button
            className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={hdlAddLocation}
            // ปุ่ม Save จะถูกปิดใช้งานถ้าชื่อที่กรอกเข้ามาเป็นค่าว่าง (หลังจากตัดช่องว่างแล้ว)
            disabled={!name.trim()}
          >
            Save
          </button>
          <button
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
            onClick={hdlCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLocationModal;
