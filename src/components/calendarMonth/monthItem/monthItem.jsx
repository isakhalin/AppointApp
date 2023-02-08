import React from 'react';
import Typography from "@mui/material/Typography";
import moment from "moment";
// import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import {useNavigate} from "react-router-dom";

const Item = styled(Paper)(({theme, element}) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : element.format('ddd') === 'сб' || element.format('ddd') === 'вс' ? 'peachpuff' : '#fff',
  backgroundColor: element.format('ddd') === 'сб' || element.format('ddd') === 'вс' ? 'peachpuff' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: element.isSame(moment(), 'day') ? '7px 7px 7px -4px' : '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  zIndex: element.isSame(moment(), 'day') ? '1' : 'unset',
  cursor: 'pointer',
  '&:hover' : {
    backgroundColor: 'aliceblue',
  }
}));

export const MonthItem = ({dayElement}) => {
  const {calendar} = useSelector((state) => state.calendarReducer);
  const navigate = useNavigate();

  return (
    <>
      {/*<Grid item xs={2.33} sm={1.6} md={1} style={{backgroundColor:'white'}}>*/}
      <Item element={dayElement}
        onClick={() => navigate(`/${dayElement.year()}/${dayElement.month() + 1}/${dayElement.date()}`)}>
        <Typography
          variant="subtitle1"
          // color="text.secondary"
          gutterBottom
        >
          {dayElement.format('DD')}
        </Typography>
        {calendar?.[dayElement.year()]?.[dayElement.month() + 1]?.[dayElement.date()]?.map((el, idx) =>
          (
            <Typography
              component='div'
              variant='caption'
              gutterBottom
              key={`month-item-vks-${el.id}`}
            >
              {idx + 1} : {moment(el.start).format('hh:mm')} - {moment(el.end).format('hh:mm')}
            </Typography>
          )
        )}
      </Item>
      {/*</Grid>*/}
    </>
  );
};
