import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api-url.com", // TODO: เปลี่ยนเป็น URL จริงของ backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
