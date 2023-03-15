import axios from "axios";
import env from "react-dotenv";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  'Content-type': 'application/json',
  Accept: 'application/json',
  withCredentials: true,
  method: "*",
})

export default api;