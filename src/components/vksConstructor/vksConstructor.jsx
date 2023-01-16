import React, {useEffect, useState} from "react";
//import dayjs from "dayjs";

// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment/moment";

// Import MUI Comps
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Import Actions
import {setVks, editVks} from "../../store/reducers/calendarSlice"
import {useDispatch} from "react-redux";

export const VksConstructor = ({calcDayStart, calcDayEnd, currentEl}) => {
  const [startValue, setStartValue] = useState(moment(currentEl.start));
  const [endValue, setEndValue] = useState(moment(currentEl.end ? currentEl.end : currentEl.start));
  const [title, setTitle] = useState(currentEl.title ? currentEl.title : "");
  const [description, setDescription] = useState(currentEl.description ? currentEl.description : "");
  const dispatch = useDispatch();

  // console.log("!!!startValue", startValue.format("YYYY-MM-DD HH:mm:ss"))

  const vksCreate = () => {
    const newVks = {
      id: currentEl.id ? currentEl.id : Math.floor((Math.random() * 1000000000)),
      title: title,
      description: description,
      start: Number(startValue.format("x")), // 1671523200000
      end: Number(endValue.format("x")), // 1671526800000
    }
    if (startValue.format("x") !== endValue.format("x")) {
      if(!currentEl.id){
        dispatch(setVks(newVks));
      } else {
        dispatch(editVks(newVks));
      }

    } else {
      console.log("Время начала ВКС не может совпадать с временем завершения")
    }

  }

  // useEffect(() => {
  //   if (currentEl) {
  //     const dayStartAt = moment(calcDayStart).format("YYYY-MM-DD");
  //     const vksStartAt = moment(currentEl.start).format("YYYY-MM-DD HH:mm:ss");
  //     console.log("CURRENT", currentEl)
  //     console.log("!!dayStartAt!!", `${dayStartAt} ${vksStartAt}:00`)
  //     // setStartValue(moment(`${dayStartAt} ${vksStartAt}:00`));
  //     // setEndValue(moment(`${dayStartAt} ${vksStartAt}:00`));
  //     setStartValue(moment())
  //   }
  // }, [currentEl])

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
