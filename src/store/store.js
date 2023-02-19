import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { calendarReducer } from './reducers/calendarSlice';

const rootReducer = combineReducers({
  calendarReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
