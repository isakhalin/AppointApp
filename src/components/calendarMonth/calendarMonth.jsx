import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import moment from "moment";
import 'moment/locale/ru'
import {useSelector} from "react-redux";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {MonthItem} from "./monthItem";
import {useNavigate, useParams} from "react-router-dom";



export const CalendarMonth = () => {
  moment.locale('ru');
  const params = useParams();
  const navigate = useNavigate()

  const [date, setDate] = useState(params.hasOwnProperty('year') ? moment(`${params.year}.${params.month}`) : moment(new Date()));
  const daysInMonth = date.daysInMonth();
  const year = date.year()
  const month = date.month() + 1;
  const day = date.date();

  const nextMonth = () => {

    setDate((prevState)=> {
      // navigate(`/${prevState.year()}/${(prevState.month() + 1).format('M')}`)
      const nextMonth = moment(new Date(prevState.year(), prevState.month() + 1));
      navigate(`/${nextMonth.year()}/${(nextMonth.format('M'))}`)
      return nextMonth
      // return moment(new Date(prevState.year(), prevState.month() + 1));

    })
  }
  const prevMonth = () => {
    setDate((prevState)=> {
      console.log('prevState prev',prevState.month() - 1)
      // navigate(`/${prevState.year()}/${(prevState.month() - 1).format('M')}`)
      const prevMonth = moment(new Date(prevState.year(), prevState.month() - 1));
      navigate(`/${prevMonth.year()}/${(prevMonth.format('M'))}`)
      return prevMonth
      // return moment(new Date(prevState.year(), prevState.month() - 1));
    })
  }

  const dayArray = Array.from({length: daysInMonth}, (_, i)=>{
    const currentDay = moment(`${month}, ${i + 1}, ${year}`);
    return currentDay;
  });

  return (
    <Box sx={{ flexGrow: 1, padding: 1}}>
      <Button onClick={prevMonth}><NavigateBeforeIcon/></Button>
      <Typography component='span' sx={{textTransform:"capitalize"}}>{date.format('MMMM , YYYY')}</Typography>
      <Button onClick={nextMonth}><NavigateNextIcon/></Button>
      <Grid container spacing={{ xs: 1,md: 2 }} columns={7} sx={{justifyContent: 'center'}}>
        {dayArray.map((element, idx) => (
          <MonthItem dayElement={element} key={idx}/>
        ))}
      </Grid>
    </Box>
  );
};