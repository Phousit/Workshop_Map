import React from "react";
import useDutyStore from "../../store/useDutyStore";
import { MapPin, Trash2 } from "lucide-react";
const LocationList = () => {
  const locations = useDutyStore((state) => state.Locations);


  return (
    <div className="w-80 bg-white border-l shadow-lg border-gray-400" style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}>
      <div className="p-6 border-b border-gray-400">
        <div className="flex gap-4 items-center text-xl font-bold">
          <MapPin className="text-red-500 " size={32} />
          <h2 className="text-2xl font-semibold" >ເພີ່ມຈຸດເຂົ້າເວນ</h2>
        </div>
      </div>

      <div className="p-4 space-y-3 cursor-pointer">
        {/* Loop */}
        {locations.map((item) => {
          return (
            <div
              key={item.id}
              className="border-2 border-dashed rounded-md border-gray-400 bg-gray-100"
            >
              <div className="flex justify-between p-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg" >{item.name}</h3>
                  <p className="text-sm text-gray-500" s>... / {item.maxCapacity}</p>
                </div>
                <button className="text-red-500 hover:text-red-700 cursor-pointer">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationList;
