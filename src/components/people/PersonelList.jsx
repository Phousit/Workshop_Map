import React from "react";
import useDutyStore from "../../store/useDutyStore";
import { Users, Clock } from "lucide-react";
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@100..900&display=swap');
</style>
const PersonelList = () => {
  // Zustand
  const personnel = useDutyStore((state) => state.personnel);
  
  return (
    <div className="w-80 bg-white overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Users className="text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}>Personnel List</h2>
        </div>
        <p className="text-md text-gray-700 " style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}>ລາກໄປທີ່ຈຸດ</p>
      </div>

      <div className="p-4 space-y-2">
        {personnel.map((item) => {
          return (
            <div 
            key={item.id}
              className="flex items-center gap-3 p-4 bg-blue-100 border border-blue-300 rounded-lg cursor-move hover:shadow-md hover:scale-102">
              <div className="text-3xl">{item.avatar}</div>
              <div className="flex-1">
                <div className="font-semibold" style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}>ຊື່: {item.name}</div>
                <div className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}>ຕຳແໜ່ງ: {item.position}</div>
              </div>
              <div>
                <Clock className="text-gray-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonelList;
