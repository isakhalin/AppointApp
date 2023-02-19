import axios from 'axios';
import {apiVksPlaner} from '../constants';
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
  },

  editEvent: (year, month, day, event) => {
    return instance.put(`${BASE_URL}/calendar/edit/${year}/${month}/${day}`, event);
  },
}