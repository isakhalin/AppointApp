import React from 'react';
import Typography from "@mui/material/Typography";
import moment from "moment";
import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { useNavigate } from "react-router-dom";
// ${({element})=> console.log(element)}
const Item = styled(Paper)(({theme, element}) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   backgroundColor: element.format('ddd') === 'cб' ? '#f675a7' : '#fff',
    backgroundColor: element.format('ddd') === 'сб' || element.format('ddd') ===  'вс'  ? 'peachpuff' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: element.isSame(moment(), 'day') ? '2px solid red' : "none", // проверяем текущий ли сегодня день и добавлем бордер
  boxSizing: 'border-box',
  // color: element.format('ddd') === 'сб' || element.format('ddd') ===  'вс'  ? 'white' : theme.palette.text.secondary,
}));

export const MonthItem = ({dayElement}) => {
  const {calendar} = useSelector((state) => state.calendarReducer);
  const navigate = useNavigate();

  return (
    <>
      {/*<Grid item xs={2.33} sm={1.6} md={1} style={{backgroundColor:'white'}}>*/}
        <Item element={dayElement} onClick={()=>navigate(`/${dayElement.year()}/${dayElement.month() + 1}/${dayElement.date()}`)}>
          <Typography
            variant="subtitle1"
            // color="text.secondary"
            gutterBottom
          >
            {dayElement.format('DD')}
          </Typography>
          {calendar?.[dayElement.year()]?.[dayElement.month() + 1]?.[dayElement.date()]?.map((el, idx) =>
            (
              <>
                <Typography
                  component='div'
                  variant='caption'
                  gutterBottom
                  key={idx}
                >
                  {idx + 1} : {moment(el.start).format('hh:mm')} - {moment(el.end).format('hh:mm')}
                </Typography>
              </>
            )
          )}
        </Item>
      {/*</Grid>*/}
    </>
  );
};
