import { Plus, X } from "lucide-react";
import React from "react";

const Header = ({ adding, setAdding }) => {

  return (
    <div className="p-4 bg-amber-100 shadow-md border-b border-gray-200 " style={{ fontFamily: "Noto Sans Lao, sans-serif" }}>
      <div
        className="flex justify-between items-center "
        style={{ fontFamily: "Noto Sans Lao, sans-serif" }}
      >
        <h2 className="text-xl font-bold">ລະບົບຈັດການເວນປະຈຳຈຸດ</h2>
        <button
         onClick={() => setAdding((prev) => !prev)}
          className={`flex items-center gap-2 rounded-md p-2 cursor-pointer
            ${
              adding
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-green-500 text-white hover:bg-green-600"
            }

            
            `}
         
         
        >
          {
            adding
            ? ( <><X size={20}/>ຍົກເລີກ{" "}</> )
            : ( <><Plus size={20}/>ເພີ່ມຈຸດເວນ{" "}</> )
          }
       
        </button>
      </div>
      {
        adding && (
          <p className="mt-2 text-sm text-white bg-green-600 p-3 rounded-lg border-amber-700 border-dashed border-2 " >
            ກົດທີ່ແຜນທີ່ເພື່ອເພີ່ມຈຸດເຂົ້າເວນ
          </p>
        )
      }





    </div>
  );
};

export default Header;
