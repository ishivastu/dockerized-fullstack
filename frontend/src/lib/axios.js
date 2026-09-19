import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dockerized-fullstack-1.onrender.com/api",
  withCredentials: true,
});
