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
import {WeekDays} from "../calendarDay";



export const CalendarMonth = () => {
  moment.locale('ru');
  const params = useParams();
  const navigate = useNavigate()

  const [date, setDate] = useState(params.hasOwnProperty('year') ? moment(`${params.year}.${params.month}`) : moment(new Date()));
  const daysInMonth = date.daysInMonth();
  const year = date.year()
  const month = date.month() + 1;
  const day = date.date();
  const startOfMonth = date.startOf('month').format('dddd');
  // console.log('!!!!', date.isSame(date))

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
    // const currentDay = moment(`${year}, ${month}, ${i + 1}`);
    return currentDay;
  });
  const dayOfWeak = {
    понедельник:0,
    вторник:1,
    среда:2,
    четверг:3,
    пятница:4,
    суббота:5,
    воскресенье:6,
  }

  const prefMonthDay = Array.from(
    { length: dayOfWeak[startOfMonth] },
    (_, i) => i + 1
  );
  const nextMonthDay = Array.from(
    { length: 5 },
    (_, i) => i + 1
  );

  return (
    <Box sx={{ flexGrow: 1, padding: 1, display:'flex', flexDirection:'column'}}>
      <div>
      <Button onClick={prevMonth}><NavigateBeforeIcon/></Button>
      <Typography component='span' sx={{textTransform:"capitalize"}}>{date.format('MMMM , YYYY')}</Typography>
      <Button onClick={nextMonth}><NavigateNextIcon/></Button>
      </div>
      <WeekDays/>
      <div style={{display: 'grid', marginTop:'10px',paddingTop:'2px', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', flexGrow: 1, gap:'2px', backgroundColor: 'aliceblue'}}>
        {prefMonthDay.map(day=>(
          // <div key={`day-${day}`} >{day}</div>
          <Grid item xs={2.33} sm={1.6} md={1}></Grid>
          // <MonthItem dayElement={date} style={{backgroundColor:'grey'}} />
        ))}
        {/*{dayArray.map((element, idx) => (*/}
        {/*  <div key={`day-${idx}`}>*/}
        {/*    {idx}*/}
        {/*  </div>*/}
        {/*))}*/}
        {dayArray.map((element, idx) => (
          <MonthItem dayElement={element} key={idx}/>
        ))}
        
      </div>

      {/*<Grid container spacing={{ xs: 1,md: 2 }} columns={7} sx={{justifyContent: 'center'}}>*/}
      {/*  {prefMonthDay.map(day=>(*/}
      {/*    // <div key={`day-${day}`} >{day}</div>*/}
      {/*    <Grid item xs={2.33} sm={1.6} md={1}></Grid>*/}
      {/*    // <MonthItem dayElement={date} style={{backgroundColor:'grey'}} />*/}
      {/*  ))}*/}
      {/*  {dayArray.map((element, idx) => (*/}
      {/*    <MonthItem dayElement={element} key={idx}/>*/}
      {/*  ))}*/}
      {/*  /!*{nextMonthDay.map(day=>(*!/*/}
      {/*  /!*  // <div key={`day-${day}`} >{day}</div>*!/*/}
      {/*  /!*  <Grid item xs={2.33} sm={1.6} md={1}></Grid>*!/*/}
      {/*  /!*  // <MonthItem dayElement={date} style={{backgroundColor:'grey'}} />*!/*/}
      {/*  /!*))}*!/*/}
      {/*</Grid>*/}
    </Box>
  );
};