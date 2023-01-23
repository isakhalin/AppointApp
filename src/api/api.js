import axios from "axios";
import {apiVksPlaner} from "../constants/constants.js";

// BASE_URL: 'http://localhost:3005/api/v1/',

const {BASE_URL} = apiVksPlaner;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

export const calendarApi = {
  fetchCalendar: () => {
    return instance.get(`${BASE_URL}/getCalendar`);
  },

  setEvent: (year, month, day, event) => {
    return instance.post(`${BASE_URL}/calendar/add/${year}/${month}/${day}`, event);
  },

  deleteEvent: (year, month, day, id) => {
    return instance.delete(`${BASE_URL}/calendar/remove/${year}/${month}/${day}/${id}`);
  }
}