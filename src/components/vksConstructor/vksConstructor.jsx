import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment/moment';
import Button from '@mui/material/Button';

export const VksConstructor = ({vks, setVks}) => {
  const [startValue, setStartValue] = useState(moment("2023-01-09T09:45:00"));
  const [endValue, setEndValue] = useState(moment("2023-01-09T10:15:00"));

  const vksCreate = () => {
    const newVks = {
      id: "43467345361",
      title: "Вопросы общего образования",
      dayStartAt: new Date("2023-01-09 09:00:00").getTime(),
      dayEndAt: new Date("2023-01-09 22:00:00").getTime(),
      start: startValue.format("x"),
      end: endValue.format("x"),
      styles: {
        position: "absolute",
        top: (startValue.format("x") - new Date("2023-01-09 09:00:00").getTime()) / 60000,
        backgroundColor: "#ed8550",
        height: `${(endValue.format("x") - startValue.format("x")) / 60000}px`,
        width: "400px",
        borderBottom: "1px solid black",
        boxSizing: "border-box",
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
        />
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={endValue}
          label="Завершение ВКС"
          onChange={(newValue) => {
            setEndValue(newValue);
          }}
          minTime={startValue}
        />
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
