import {createSlice} from "@reduxjs/toolkit";
// import {calendar} from "../actions/actions";

const initialState = {
  calendar: [
    {
      2023: {
        1: {
          1: [
            {
              id: "434264361",
              title: "new",
              description: "",
              dayStartAt: new Date("2022-12-20 09:00:00").getTime(),
              dayEndAt: new Date("2022-12-20 21:00:00").getTime(),
              start: new Date("2022-12-20 09:30:00").getTime(),
              end: new Date("2022-12-20 10:00:00").getTime(),
              styles: {
                top: 0,
                height: "30px",
              },
            },
            {
              id: "43467345361",
              title: "Вопросы общего образования образования образования образования образования образования",
              description: "",
              dayStartAt: new Date("2022-12-20 09:00:00").getTime(),
              dayEndAt: new Date("2022-12-20 21:00:00").getTime(),
              start: new Date("2022-12-20 10:30:00").getTime(), // 1671523200000
              end: new Date("2022-12-20 11:00:00").getTime(), // 1671526800000
              styles: {
                top: 90, // 30 минут это 30 пикселей. (start-dayStartAt)/60000
                height: "76px", // (end-start)/60000
              },
            },
          ],
          2: [],
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
    }
    // {
    //   yearTitle: "2023",
    //   month: [
    //     {
    //       monthTitle: "01",
    //       days: [
    //         {
    //           title: "01",
    //           vks: [
    //             {},
    //             {}
    //           ]
    //         },
    //         {
    //           title: "02",
    //           vks: [
    //             {},
    //             {}
    //           ]
    //         },
    //       ]
    //     },
    //     {
    //       monthTitle: "02",
    //       days: [
    //         {
    //           dayTitle: "01",
    //           vks: [
    //             {},
    //             {}
    //           ]
    //         },
    //         {
    //           dayTitle: "02",
    //           vks: [
    //             {},
    //             {}
    //           ]
    //         },
    //       ]
    //     },
    //   ]
    // }
  ],
  loading: false,
  error: null,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    // setProfile(state, action) {
    //   state.profile = action.payload;
    // },
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
export const {setProfile} = calendarSlice.actions;