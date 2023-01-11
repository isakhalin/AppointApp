import React from 'react';
import styled from '@emotion/styled'

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

  return (
    <StyledDiv element={element} calcDayStart={calcDayStart}>
      {element.title}
    </StyledDiv>
  );
};