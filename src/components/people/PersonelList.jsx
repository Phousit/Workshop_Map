import React from "react";
import useDutyStore from "../../store/useDutyStore";
import { Users, Clock } from "lucide-react";

const PersonelList = () => {
  // Zustand
  const personnel = useDutyStore((state) => state.personnel);

  const onDragStart = (e, personId) => {
    // console.log(e, personId);
    e.dataTransfer.setData("personId", personId);
  }
  
  return (
    <div className="w-80 bg-white overflow-y-auto" >
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Users className="text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800" >Personnel List</h2>
        </div>
        <p className="text-md font-bold bg-amber-500 p-2 rounded-md border-dashed border-2 border-amber-600 " >ລາກໄປທີ່ຈຸດ</p>
      </div>

      <div className="p-4 space-y-2">
        {personnel.map((item) => {
          return (
            <div 
            key={item.id}
            draggable
            onDragStart={(e) => onDragStart(e, item.id)}
              className="flex items-center gap-3 p-4 bg-blue-100 border border-blue-300 rounded-lg cursor-move hover:shadow-md hover:scale-102">
              <div className="text-3xl">{item.avatar}</div>
              <div className="flex-1">
                <div className="font-semibold" >ຊື່: {item.name}</div>
                <div className="text-xs text-gray-500" >ຕຳແໜ່ງ: {item.position}</div>
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
