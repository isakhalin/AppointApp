import {createSlice} from '@reduxjs/toolkit';
import {calendar, setEvent, deleteEvent, editEvent} from '../actions';

const initialState = {
  calendar: {
    2023: {
      1: {
        1: [],
        2: [],
        3: [],
      },
      2: {
        1: [],
        2: [],
        3: [],
      },
      3: {
        1: [],
        2: [],
        3: [],
      },
    },
    2024: {},
  },
  loading: false,
  error: null,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
  extraReducers: {
    [calendar.pending.type]: (state, action) => {
      state.loading = true
    },
    [calendar.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.calendar = action.payload
    },
    [calendar.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    [setEvent.pending.type]: (state, action) => {
      state.loading = true
    },
    [setEvent.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.calendar = action.payload;
    },
    [setEvent.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteEvent.pending.type]: (state, action) => {
      state.loading = true;
    },
    [deleteEvent.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.calendar = action.payload;
    },
    [deleteEvent.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [editEvent.pending.type]: (state, action) => {
      state.loading = true;
    },
    [editEvent.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.calendar = action.payload;
    },
    [editEvent.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const calendarReducer = calendarSlice.reducer;
export const {setVks, deleteVks, editVks} = calendarSlice.actions;