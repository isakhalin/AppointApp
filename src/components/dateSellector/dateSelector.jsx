import React, {useState} from 'react';
import moment from "moment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import Stack from "@mui/material/Stack";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";

export const DateSelector = () => {
  const [value, setValue] = useState(moment("2023-01-01T21:11:54"));
  console.log("VAL", value);

  const handleChange = (newValue) => {
    setValue(newValue.format("x"));
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Дата бронирования"
            inputFormat="DD.MM.YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          {/*<TimePicker*/}
          {/*  label="Time"*/}
          {/*  value={value}*/}
          {/*  onChange={handleChange}*/}
          {/*  renderInput={(params) => <TextField {...params} />}*/}
          {/*/>*/}
        </Stack>
      </LocalizationProvider>
      <div>{`${value}`}</div>
    </div>
  );
};