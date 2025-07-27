// src/api/axiosConfig.js
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080", // change if your backend port is different
  headers: {
    "Content-Type": "application/json",
  },
});
