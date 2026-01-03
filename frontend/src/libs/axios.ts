import axios, { type AxiosInstance } from "axios";
import { ENV } from "../config/env.config.js";



const api:AxiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: false,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
