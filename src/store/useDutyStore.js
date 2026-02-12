import { create } from "zustand";

const dutyStore = () => ({
    personnel: [],
    Locations: [],
    assigments: [],
    selectedLocationId: null,
    
  
})

const useDutyStore = create(dutyStore);

export default useDutyStore;