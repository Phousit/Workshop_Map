// นำเข้า create จาก zustand สำหรับสร้าง store (global state)
import { create } from "zustand";

// นำเข้า api ที่เราเขียนไว้สำหรับเรียก backend
import { api } from "../lib/api";

// สร้างฟังก์ชัน dutyStore
// โดย zustand จะส่ง set มาให้ใช้สำหรับอัปเดต state
const dutyStore = (set) => ({
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
      // เรียก API ไปที่ endpoint /personnel
      const personnel = await api.get("/personnel");

      // อัปเดต state โดยใช้ set
      set({
        personnel: personnel,
      });
    } catch (error) {
      // ถ้าเกิด error ระหว่างเรียก API
      // จะแสดง error ใน console
      console.error("Error fetching data:", error);
    }
  },
});

// สร้าง custom hook สำหรับเรียกใช้งาน store นี้ใน component
const useDutyStore = create(dutyStore);

// export ออกไปเพื่อให้ไฟล์อื่นเรียกใช้ได้
export default useDutyStore;
