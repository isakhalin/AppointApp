import {createSlice, current} from "@reduxjs/toolkit";
// import {calendarDay} from "../actions/actions";

const initialState = {
  calendar: {
    2023: {
      1: {
        1: [],
        2: [],
        3: [],
      },
      2: {
        1: [
          {
            id: "434264361",
            title: "new",
            description: "",
            start: 1675204200000, // new Date("2023-02-01 09:30:00").getTime()
            end: 1675206000000,   // new Date("2023-02-01 10:00:00").getTime()
            styles: {
              top: 0,
              height: "5%",
            },
          },
          {
            id: "43467345361",
            title: "Вопросы общего образования образования образования образования образования образования",
            description: "",
            start: 1675207800000, // new Date("2023-02-01 10:30:00").getTime()
            end: 1675212300000,   // Date("2023-02-01 11:45:00").getTime()
            styles: {
              top: "15%", // 1 минута это 0,166666%. Рассчет для пикселей: 30 минут это 30px (start-dayStartAt)/60000
              height: "12.5%", // Рассчет для процентов 0.166666667 * мин. Рассчет для пикселей: (end-start)/60000
            },
          },
        ],
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
  reducers: {
    setVks(state, action) {
      const date = new Date(action.payload.start);
      if (!state.calendar[date.getFullYear()]) {
        state.calendar = {...state.calendar, [date.getFullYear()]: {}}
      }
      if (!state.calendar[date.getFullYear()][date.getMonth() + 1]) {
        state.calendar[date.getFullYear()] = {...state.calendar[date.getFullYear()], [date.getMonth() + 1]: {}}
      }
      if (!state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()]) {
        state.calendar[date.getFullYear()][date.getMonth() + 1] = {
          ...state.calendar[date.getFullYear()][date.getMonth() + 1],
          [date.getDate()]: []
        }
      }

      state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()].push(action.payload)
    },

    deleteVks(state, action) {
      const date = new Date(action.payload.start);
      state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()] = state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()].filter(el => el.id !== action.payload.id)
    },

    editVks(state, action) {
      const date = new Date(action.payload.start);
      // Удаление изменяемой ВКС
      state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()] = state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()].filter(el => el.id !== action.payload.id)
      // Добавление измененной ВКС
      state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()] = state.calendar[date.getFullYear()][date.getMonth() + 1][date.getDate()].push(action.payload)
    }
  },
  extraReducers: {
    // [fetchUserProfile.pending.type]: (state, action) => {
    //   state.loading = true
    // },
    // [fetchUserProfile.fulfilled.type]: (state, action) => {
    //   state.loading = false
    //   state.error = ''
    //   state.profile = action.payload.data
    // },
    // [fetchUserProfile.rejected.type]: (state, action) => {
    //   state.loading = false
    //   state.error = action.payload
    // },
    // [updateUserProfile.pending.type]: (state, action) => {
    //   state.loading = true
    // },
    // [updateUserProfile.fulfilled.type]: (state, action) => {
    //   state.loading = false
    //   state.error = ''
    //   state.profile = action.payload;
    // },
    // [updateUserProfile.rejected.type]: (state, action) => {
    //   state.loading = false
    //   state.error = action.payload
    // },
    // [changePassword.pending.type]: (state, action) => {
    //   state.loading = true
    // },
    // [changePassword.fulfilled.type]: (state, action) => {
    //   state.loading = false
    //   state.error = ''
    //   state.profile = action.payload;
    // },
    // [changePassword.rejected.type]: (state, action) => {
    //   state.loading = false
    //   state.error = action.payload
    // }
  }
})

export const calendarReducer = calendarSlice.reducer;
export const {setVks, deleteVks} = calendarSlice.actions;