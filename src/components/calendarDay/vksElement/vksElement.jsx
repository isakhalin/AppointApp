import React from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import styled from '@emotion/styled';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {deleteEvent} from '../../../store';

const percentPerMinute = 0.166666667;

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  top: ${({
  element,
  calcDayStart
}) => ((element.start - calcDayStart) / 60000) * percentPerMinute}%;
  background-color: #ed8550f5;
  height: ${({element}) => ((element.end - element.start) / 60000) * percentPerMinute}%;
  width: 92.5%;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`

export const VksElement = ({element, calcDayStart, handleModalOpen}) => {
  const dispatch = useDispatch();
  const params = useParams();

  const handleDeleteVks = () => {
    dispatch(deleteEvent([params.year, params.month, params.day, element.id]));
  };

  const handleEditVks = (element) => {
    handleModalOpen(element);
  };

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
          onClick={() => handleEditVks(element)}
        >
          {element.title}
        </span>
        <div style={{width: "18px"}}>
          <DeleteOutlinedIcon
            sx={{fontSize: 16, color: "red", cursor: "pointer"}}
            onClick={handleDeleteVks}
          />
        </div>
      </div>
    </StyledDiv>
  );
};