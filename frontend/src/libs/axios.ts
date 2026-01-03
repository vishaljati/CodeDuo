import axios, { type AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
  baseURL: "/api/v1",
  withCredentials: false,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
