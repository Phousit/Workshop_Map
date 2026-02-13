import React from 'react'
import useDutyStore from '../../store/useDutyStore'
import { Users } from 'lucide-react';
const PersonelList = () => {
    // Zustand
    const personnel = useDutyStore((state) => state.personnel);
    console.log(personnel);
  return (
    <div className='w-80 bg-white overflow-y-auto'>
      <div className='p-6 border-b border-gray-200'>

        <div className='flex items-center gap-2 mb-4'>
          <Users className='text-blue-500'/> 
          <h2 className='text-2xl font-bold text-gray-800'>Personnel List</h2>
        </div>
        <p className='text-sm text-gray-600'>ລາກໄປທີ່ຈຸດ</p>
      </div>

      <div>
        <div className='flex items-center gap-3 p-4 bg-blue-100 border border-blue-300 rounded-lg cursor-move hover:shadow-md hover:scale-102'>
          <div>
            icon
          </div>
          <div>
            Name
          </div>
          <div>
            3
          </div>

        </div>
      </div>


    </div>
  )
}

export default PersonelList 