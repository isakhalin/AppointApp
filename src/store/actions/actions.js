import {createAsyncThunk} from "@reduxjs/toolkit";
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
  async (calendar, {rejectedWithValue}) => {
    try {
      //TODO заюзать апишку для получения календаря с бека
    } catch (error) {
      return rejectedWithValue(error)
    }
  }
);