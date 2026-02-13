// นำเข้า axios สำหรับใช้ส่ง HTTP request ไปยัง backend
import axios from "axios";

// กำหนด URL หลักของ API (base URL)
// ตอนนี้ชี้ไปที่ backend ที่รันอยู่บน localhost พอร์ต 3000
const API_URL = "http://localhost:3000";

// สร้าง axios instance เพื่อกำหนดค่าเริ่มต้นร่วมกัน
// เช่น baseURL ทำให้เวลาเรียก API ไม่ต้องใส่ URL เต็มทุกครั้ง
const client = axios.create({
  baseURL: API_URL,
});

// สร้าง object api เพื่อรวมฟังก์ชันเรียก API ไว้ในที่เดียว
export const api = {
  // ฟังก์ชันสำหรับเรียก GET request
  // รับค่า path เช่น "/users"
  // จะเรียกไปที่ http://localhost:3000/users
  async get(path) {
    const { data } = await client.get(path); // เรียก GET request
    return data; // ส่งกลับเฉพาะข้อมูล data (ไม่เอา status, headers)
  },

  // ฟังก์ชันสำหรับเรียก POST request
  // รับค่า path และ body ที่ต้องการส่งไปยัง server
  async post(path, body) {
    const { data } = await client.post(path, body); // เรียก POST request พร้อมส่งข้อมูล
    return data; // ส่งกลับเฉพาะข้อมูล data
  },
};
