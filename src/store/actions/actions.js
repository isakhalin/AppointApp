import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";
import {calendarApi} from "../../api/api";

export const calendar = createAsyncThunk(
  "calendar/fetchCalendar",
  async (_, {rejectedWithValue}) => {
    try {
      //TODO заюзать апишку для получения календаря с бека
      const {data} = await calendarApi.fetchCalendar();
      console.log("CALENDAR", data);
      return data;
    } catch (error) {
      return rejectedWithValue(error)
    }
  }
);

export const setEvent = createAsyncThunk(
  "calendar/setEvent",
  async (event, {rejectedWithValue}) => {
    try {
      const {data} = await calendarApi.setEvent(event.year, event.month, event.day, event.data);

      return data.data
    } catch (error) {
      return rejectedWithValue(error)
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "calendar/deleteEvent",
  async ([year, month, day, id], {rejectedWithValue}) => {
    try {
      const {data} = await calendarApi.deleteEvent(year, month, day, id)
      return data.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const editEvent = createAsyncThunk(
  "calendar/editEvent",
  async ([year, month, day, event], {rejectedWithValue}) => {
    try {
      const {data} = await calendarApi.editEvent(year, month, day, event);
      // console.log("CCC", data.data)
      return data.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
)