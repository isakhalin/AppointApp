import axios from "axios";
import { apiVksPlaner } from "../constants/constants.js";

// BASE_URL: 'http://localhost:3005/api/v1/',

const {BASE_URL} = apiVksPlaner;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

export const calendarApi = {}