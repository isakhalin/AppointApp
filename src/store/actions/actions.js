import {createAsyncThunk} from "@reduxjs/toolkit";
import { calendarApi } from "../../api/api";
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
      const { data } = await calendarApi.fetchCalendar();
      console.log("CALENDAR", data[0]);
      return data[0];
    } catch (error) {
      return rejectedWithValue(error)
    }
  }
);

export const setEvent = createAsyncThunk(
  "calendar/setEvent",
  async (event, {rejectedWithValue}) => {
    try {
      const {data} = await calendarApi.setCalendar();
      console.log("DATA", data)
    } catch (error) {
      return rejectedWithValue(error)
    }
  }
);