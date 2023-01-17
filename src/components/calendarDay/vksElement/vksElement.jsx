import React from 'react';
import styled from '@emotion/styled'
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {useDispatch} from "react-redux";

import {deleteVks} from "../../../store/reducers/calendarSlice"

const percentPerMinute = 0.166666667;

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  top: ${({element, calcDayStart}) => ((element.start - calcDayStart) / 60000) * percentPerMinute}%; // 30 минут это 30 пикселей. (start-dayStartAt)/60000
  background-color: #ed8550f5;
  height: ${({element}) => ((element.end - element.start) / 60000) * percentPerMinute}%; // (end-start)/60000
  width: 92.5%;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`

export const VksElement = ({element, calcDayStart, handleModalOpen}) => {
  const dispatch = useDispatch();

  const handleDeleteVks = () => {
    dispatch(deleteVks(element));
  }

  const handleEditVks = (element) => {
    handleModalOpen(element)
  }

  return (
    <StyledDiv element={element} calcDayStart={calcDayStart}>
      <div style={{display: "flex", justifyContent: "space-between", height: "100%"}}>
      <span
        style={{
          display: "block",
          height: "100%",
          width: "100%",
          fontSize: "12px",
          lineHeight: "13px",
          textAlign: "left",
          padding: "3px 0 0 3px",
          cursor: "pointer",
        }}
      >
        {element.title}
      </span>
        <div style={{width: "36px"}}>
          <EditOutlinedIcon
            sx={{fontSize: 16, color: "#e7e7e7", cursor: "pointer",}}
            onClick={() => handleEditVks(element)}
          />
          <DeleteOutlinedIcon
            sx={{fontSize: 16, color: "red", cursor: "pointer"}}
            onClick={handleDeleteVks}
          />
        </div>
      </div>
    </StyledDiv>
  );
};