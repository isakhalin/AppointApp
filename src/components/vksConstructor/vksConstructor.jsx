import React, {useState} from "react";
//import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment/moment";
import Button from "@mui/material/Button";

export const VksConstructor = ({vks, setVks, calcDayStart}) => {
  const [startValue, setStartValue] = useState(moment("2023-01-09T09:45:00"));
  const [endValue, setEndValue] = useState(moment("2023-01-09T10:15:00"));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const vksCreate = () => {
    const newVks = {
      id: Math.floor((Math.random() * 1000000000)),
      title: "Вопросы общего образования",
      start: startValue.format("x"), // 1671523200000
      end: endValue.format("x"), // 1671526800000
      styles: {
        top: (startValue.format("x") - calcDayStart) / 60000, // 30 минут это 30 пикселей. (start-dayStartAt)/60000
        height: `${(endValue.format("x") - startValue.format("x")) / 60000}px`, // (end-start)/60000
      }
    }
    setVks([...vks, newVks]);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3} mt={2}>
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={startValue}
          label="Начало ВКС"
          onChange={(newValue) => {
            setStartValue(newValue);
          }}
          // minTime={moment('2018-01-01T08:00')}
          // maxTime={moment('2018-01-01T18:45')}
        />
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={endValue}
          label="Завершение ВКС"
          onChange={(newValue) => {
            setEndValue(newValue);
          }}
          minTime={startValue}
          // maxTime={moment('2023-01-10T00:00')}
        />
        {/*<TimePicker*/}
        {/*  renderInput={(params) => <TextField {...params} />}*/}
        {/*  label="Завершение ВКС"*/}
        {/*  value={value}*/}
        {/*  onChange={(newValue) => {*/}
        {/*    setValue(newValue);*/}
        {/*  }}*/}
        {/*  shouldDisableTime={(timeValue, clockType) => {*/}
        {/*    if (clockType === 'hours' && timeValue % 2) {*/}
        {/*      return true;*/}
        {/*    }*/}

        {/*    return false;*/}
        {/*  }}*/}
        {/*/>*/}
        <Button
          variant="contained"
          onClick={vksCreate}
        >
          Сохранить
        </Button>
      </Stack>
    </LocalizationProvider>
  );
};
