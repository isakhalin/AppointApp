import {createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";
import {calendarApi} from "../../api/api";
// import {authApi} from "../../api/api";

// export const login = createAsyncThunk(
//   "auth/login",
//   async (loginData, { rejectWithValue }) => {
//     try {
//       const { data } = await authApi.loginUser(loginData);
//       localStorage.setItem('token', data.jwt);
//       return data;
//     } catch (e) {
//       return rejectWithValue(e.response.data.error)
//     }
//   }
// );
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
      // console.log("KKKK", event.year, event.month, event.day, event.data)
      // console.log("DATA", data.data)
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