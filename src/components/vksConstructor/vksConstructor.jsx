import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment/moment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {setEvent, editEvent} from "../../store";

export const VksConstructor = ({currentEl, setModalOpen}) => {
  const [startValue, setStartValue] = useState(moment(currentEl.start));
  const [endValue, setEndValue] = useState(moment(currentEl.end ? currentEl.end : currentEl.start));
  const [title, setTitle] = useState(currentEl.title ? currentEl.title : "");
  const [description, setDescription] = useState(currentEl.description ? currentEl.description : "");
  const dispatch = useDispatch();

  const params = useParams();

  const vksCreate = () => {
    const newVks = {
      id: currentEl.id ? currentEl.id : Math.floor((Math.random() * 1000000000)).toString(),
      title: title,
      description: description,
      start: Number(startValue.format("x")),
      end: Number(endValue.format("x")),
    }
    if (startValue.format("x") !== endValue.format("x")) {
      if (!currentEl.id) {
        dispatch(setEvent({year: params.year, month: params.month, day: params.day, data: newVks}))
        setModalOpen(false);
      } else {
        dispatch(editEvent([params.year, params.month, params.day, newVks]));
        setModalOpen(false);
      }
    } else {
      console.log("Время начала ВКС не может совпадать с временем завершения")
    }
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
        <Box
          component="form"
          sx={{
            '& > :not(style)': {mb: 3, width: '100%'},
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Заголовок"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Описание"
            multiline
            rows={4}
            defaultValue=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
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
