import React from 'react'
import useDutyStore from '../../store/useDutyStore'

const PersonelList = () => {
    // Zustand
    const people = useDutyStore((state) => state.kaika);
    console.log(people);
  return (
    <div className='w-80 bg-white overflow-y-auto'>PersonelList

    </div>
  )
}

export default PersonelList 