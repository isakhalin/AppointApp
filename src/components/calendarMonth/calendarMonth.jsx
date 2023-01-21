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
  console.log('params', params, moment(`${params.year}.${params.month}`).format('YYYY.MM.DD'))
  // console.log('test', moment(`${params.year}.${params.month}`).format('YYYY.MM.DD'))
  console.log('property', params.hasOwnProperty('year'))
  // const {calendar} = useSelector((state) => state.calendarReducer);
  const [date, setDate] = useState(params.hasOwnProperty('year') ? moment(`${params.year}.${params.month}`) : moment(new Date()));
  // console.log('calendar', calendar)
  // console.log('length', calendar?.[2023]?.[1]?.[14].length)
  // const date = moment(new Date());
  console.log('date', date.format('YYYY.MM.DD'), date.month());
  const daysInMonth = date.daysInMonth();
  const year = date.year()
  console.log('year',year);
  const month = date.month() + 1;
  console.log('month',month);
  const day = date.date();
  console.log('day',day);

  console.log('daysInMonth',daysInMonth);

  const nextMonth = () => {

    setDate((prevState)=> {
      // console.log('prevState next',prevState)
      // navigate(`/${prevState.year()}/${(prevState.month() + 1).format('M')}`)
      const nextMonth = moment(new Date(prevState.year(), prevState.month() + 1));
      navigate(`/${nextMonth.year()}/${(nextMonth.format('M'))}`)
      return nextMonth
      // return moment(new Date(prevState.year(), prevState.month() + 1));

      // console.log('nextMonth',new Date(prevState.year(), prevState.month() + 1))
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
      // console.log('prevMonth',new Date(prevState.year(), prevState.month() - 1))
    })
  }

  const dayArray = Array.from({length: daysInMonth}, (_, i)=>{
    const currentDay = moment(`${month}, ${i + 1}, ${year}`);
    // console.log('currentDay', currentDay)
    // console.log('format', currentDay.format('MM, DD, YYYY'))
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
          // <Grid item xs={1} sm={2} md={4} key={idx}>
          // <Grid item xs={2} sm={1.6} md={1} key={idx}>
          //   <Item sx={{padding: 1}}>
          //     <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          //       {element.format('DD')}
          //     </Typography>
          //     {calendar?.[element.year()]?.[element.month()+1]?.[element.date()]?.map((el, idx)=>
          //       (<>
          //          {/*<div style={{borderBottom:'1px solid black'}} key={idx}>*/}
          //           {/*<Typography noWrap={true} variant="h6" gutterBottom>{el.title}:</Typography>*/}
          //           <Typography component = 'div' variant='caption' gutterBottom key={idx}> {idx + 1} : {moment(el.start).format('hh:mm')} - {moment(el.end).format('hh:mm')}</Typography>
          //         {/*</div>*/}
          //         </>
          //       )
          //     )}
          //     {/*<Card sx={{ width: '100%' }}>*/}
          //     {/*  <CardContent>*/}
          //     {/*    <Typography sx={{ fontSize: 14 , textAlign: 'center'}} color="text.secondary" gutterBottom>*/}
          //     {/*      {element.format('DD')}*/}
          //     {/*    </Typography>*/}
          //     {/*    /!*<Typography variant="h5" component="div">*!/*/}
          //     {/*    /!*  {calendar?.[element.year()]?.[element.month()+1]?.[element.date()]?.length ?? 0} ВКС*!/*/}
          //     {/*    /!*</Typography>*!/*/}
          //     {/*    /!*<Typography component="div">*!/*/}
          //     {/*      {calendar?.[element.year()]?.[element.month()+1]?.[element.date()]?.map((el)=>*/}
          //     {/*        // {console.log('title', el.title)}*/}
          //     {/*        (<Typography>{el.title}: {moment(el.start).format('hh:mm')} - {moment(el.end).format('hh:mm')}</Typography>)*/}
          //     {/*      )}*/}
          //     {/*    /!*</Typography >*!/*/}
          //     {/*    /!*<Typography sx={{ mb: 1.5 }} color="text.secondary">*!/*/}
          //     {/*    /!*  adjective*!/*/}
          //     {/*    /!*</Typography>*!/*/}
          //     {/*    /!*<Typography variant="body2">*!/*/}
          //     {/*    /!*  well meaning and kindly.*!/*/}
          //     {/*    /!*  <br />*!/*/}
          //     {/*    /!*  {'"a benevolent smile"'}*!/*/}
          //     {/*    /!*</Typography>*!/*/}
          //     {/*  </CardContent>*/}
          //     {/*  /!*<CardActions>*!/*/}
          //     {/*  /!*  <Button size="small">Learn More</Button>*!/*/}
          //     {/*  /!*</CardActions>*!/*/}
          //     {/*</Card>*/}
          //     {/*<div>{element.format('DD')}</div>*/}
          //     {/*/!*<div>{calendar?.[element.year()]?.[element.month()]?.[element.date()].length} ВКС </div>*!/*/}
          //     {/*<div>{calendar?.[element.year()]?.[element.month()+1]?.[element.date()]?.length ?? 0} ВКС </div>*/}
          //     {/*<BasicModal element={element}/>*/}
          //     {/*<div>{element.format('YYYY.MM.DD')}</div>*/}
          //   </Item>
          // </Grid>
        ))}
      </Grid>
    </Box>
  );
};