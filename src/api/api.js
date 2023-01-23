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

  setCalendar: () => {
    const newVks = {
      id: "398546584",
      title: "TEST",
      description: "TEST DESCRIPTION",
      start: 1675213200000,
      end: 1675223100000,
    }

    return instance.post(`${BASE_URL}/setEvent`, newVks)
  },
}