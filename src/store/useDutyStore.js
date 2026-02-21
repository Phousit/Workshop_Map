// นำเข้า create จาก zustand สำหรับสร้าง store (global state)
import { create } from "zustand";

// นำเข้า api ที่เราเขียนไว้สำหรับเรียก backend
import { api } from "../lib/api";

// ฟังก์ชันที่กำหนดโครงสร้างของ store ของเรา
const dutyStore = (set, get) => ({
  // ======================
  // State (ข้อมูลส่วนกลาง)
  // ======================

  // เก็บรายการบุคลากร
  personnel: [],

  // เก็บรายการสถานที่
  Locations: [],

  // เก็บรายการการจัดเวร
  assigments: [],

  // เก็บ id ของสถานที่ที่ถูกเลือก
  selectedLocationId: null,

  // ======================
  // Actions (ฟังก์ชันจัดการ state)
  // ======================

  // ฟังก์ชันดึงข้อมูลทั้งหมดจาก backend
  fetchAll: async () => {
    try {
      // เรียก API ไปที่ endpoint 
      const personnel = await api.get("/personnel");
      const locations = await api.get("/locations");

      // อัปเดต state โดยใช้ set
      set({
        personnel: personnel,
        Locations: locations,
      });
    } catch (error) {
      // ถ้าเกิด error ระหว่างเรียก API
      // จะแสดง error ใน console
      console.error("Error fetching data:", error);
    }
  },

  // ฟังก์ชันเลือกสถานที่
  addLocation: async (name, lat, lng) => {
    try {
      // เรียก API เพื่อเพิ่มสถานที่ใหม่
      const res = await api.post("/locations",
        {
          name: name,
          lat: Number(lat),
          lng: Number(lng),
          maxCapacity: 5,
        }
       );
       // หลังจากเพิ่มสถานที่ใหม่แล้ว ให้รีเฟรชข้อมูลทั้งหมดอีกครั้งเพื่อให้ UI อัปเดต
        await get().fetchAll(
      )
    } catch (error) {
      console.error("Error adding location:", error);
      
    }
  }
});

// สร้าง custom hook สำหรับเรียกใช้งาน store นี้ใน component
const useDutyStore = create(dutyStore);

// export ออกไปเพื่อให้ไฟล์อื่นเรียกใช้ได้
export default useDutyStore;
