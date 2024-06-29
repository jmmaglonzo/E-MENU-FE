import axios from "axios";

const api = axios.create({
  baseURL: "https://e-menu-be.onrender.com/api/",
});

export default api;
