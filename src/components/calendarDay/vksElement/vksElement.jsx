import React from 'react';
import styled from '@emotion/styled'
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";

import {deleteVks} from "../../../store/reducers/calendarSlice"

const percentPerMinute = 0.166666667;

const StyledDiv = styled.div`
  position: absolute;
  top: ${({element, calcDayStart}) => ((element.start - calcDayStart) / 60000) * percentPerMinute}%; // 30 минут это 30 пикселей. (start-dayStartAt)/60000
  background-color: #ed8550;
  height: ${({element}) => ((element.end - element.start) / 60000) * percentPerMinute}%; // (end-start)/60000
  width: 100%;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`

export const VksElement = ({element, calcDayStart}) => {
  const dispatch = useDispatch();

  const handleDeleteVks = () => {
    dispatch(deleteVks(element));
  }

  const handleEditVks = () => {
    // dispatch()
  }

  return (
    <StyledDiv element={element} calcDayStart={calcDayStart}>
      {element.title}
      <Button
        onClick={handleDeleteVks}
      >
        X
      </Button>
      <Button
        onClick={handleEditVks}
      >
        Edit
      </Button>
    </StyledDiv>
  );
};