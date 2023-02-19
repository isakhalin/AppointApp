import React, {useState} from 'react';
<<<<<<< HEAD
import moment from 'moment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import Stack from '@mui/material/Stack';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
=======
import moment from "moment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import Stack from "@mui/material/Stack";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import {useNavigate, useParams} from "react-router-dom";
>>>>>>> dev

// export const DateSelector = ({daySelected, setDaySelected}) => {
export const DateSelector = () => {
<<<<<<< HEAD
  const [value, setValue] = useState(moment("2023-01-01T21:11:54"));
=======
  const params = useParams();
  const navigate = useNavigate();
>>>>>>> dev

  const handleChange = (newValue) => {
    // setDaySelected(Number(newValue.format("x")));
    navigate(`/${newValue.year()}/${newValue.month() + 1}/${newValue.date()}`)
  };

  return (
    <div style={{paddingBottom: "5px"}}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Дата бронирования"
            inputFormat="DD.MM.YYYY"
            value={moment(`${params.year}.${params.month}.${params.day}`)}
            // value={daySelected}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      {/*<div>{`${moment(daySelected)}`}</div>*/}
    </div>
  );
};