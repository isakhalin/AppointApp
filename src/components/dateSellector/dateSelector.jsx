import React, {useState} from 'react';
import moment from 'moment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import Stack from '@mui/material/Stack';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import {useNavigate, useParams} from 'react-router-dom';

export const DateSelector = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (newValue) => {
    navigate(`/${newValue.year()}/${newValue.month() + 1}/${newValue.date()}`);
  };

  return (
    <div style={{paddingBottom: "5px"}}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Дата бронирования"
            inputFormat="DD.MM.YYYY"
            value={moment(`${params.year}.${params.month}.${params.day}`)}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};