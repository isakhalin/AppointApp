import React from 'react';
import styled from '@emotion/styled'

const WeekDaysDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  `

const WeekDayDiv = styled.div`
  font-weight: bold;
`


export const WeekDays = () => {
  return (
    <WeekDaysDiv>
      <WeekDayDiv>Пн</WeekDayDiv>
      <WeekDayDiv>Вт</WeekDayDiv>
      <WeekDayDiv>Ср</WeekDayDiv>
      <WeekDayDiv>Чт</WeekDayDiv>
      <WeekDayDiv>Пт</WeekDayDiv>
      <WeekDayDiv>Сб</WeekDayDiv>
      <WeekDayDiv>Вс</WeekDayDiv>
    </WeekDaysDiv>
  );
};