import React, {useState} from 'react';
import moment from 'moment';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {VksConstructor, VksElement, MyModal} from '../../components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import classes from './calendarDay.module.css';

export const CalendarDay = () => {
  const [dayStartAt, setDayStartAt] = useState("09:00:00");
  const [dayEndAt, setDayEndAt] = useState("19:00:00");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEl, setCurrentEl] = useState({title: ``});

  const {calendar} = useSelector((state) => state.calendarReducer);

  const navigate = useNavigate();
  const params = useParams();

  const handleModalOpen = (el) => {
    setCurrentEl(el);
    setModalOpen(true);
  };

  const date = moment(`${params.year}.${params.month}.${params.day}`);
  const vks = calendar[date.year()]?.[date.month() + 1]?.[date.date()];

  const calcDayStart = () => {
    return +moment(`${params.year}.${params.month}.${params.day} ${dayStartAt}`).format('x')
  };
  const calcDayEnd = () => {
    return +moment(`${params.year}.${params.month}.${params.day} ${dayEndAt}`).format('x');
  };

  /**
   *
   * @param startDay {Number} старт счетчика
   * @param endDay {Number} конец счетчика
   * @param interval {Number} интервал на который увеличивается счетчик
   * @returns {*[]} Возвращает массив
   */
  const getDayArr = (startDay, endDay, interval) => {
    let tempArr = [];
    for (let i = startDay; i < endDay; i += interval) {
      tempArr.push({start: i});
    }
    return tempArr;
  };
  const day = getDayArr(calcDayStart(), calcDayEnd(), 1000 * 60 * 30);

  return (
    <div>
      <div className="calendar-wrp">
        {day.map((el) => (
          <div
            key={el.start}
            style={{
              display: "flex",
              width: "100%",
              height: "5%",
              borderBottom: "1px solid black",
              boxSizing: "border-box",
              fontSize: "9px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: "7%",
                paddingLeft: "2px",
              }}
            >
              {new Date(el.start).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
            </div>
            <div
              className={classes.shadow}
              style={{
                width: "93%",
                cursor: "pointer",
              }}
              onClick={() => handleModalOpen(el)}
            >
            </div>
          </div>
        ))}
        {vks?.map((el) => (
          <VksElement
            key={el.start}
            element={el}
            calcDayStart={calcDayStart()}
            handleModalOpen={() => handleModalOpen(el)}
          />
        ))}
      </div>

      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          m: "0 auto",
          textAlign: "center",
        }}
      >
        <MyModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <VksConstructor calcDayStart={calcDayStart()} calcDayEnd={calcDayEnd()} currentEl={currentEl} setModalOpen={setModalOpen}/>
        </MyModal>
      </Box>
      <Button onClick={() => navigate(`/${params.year}/${params.month}`)}>В календарь</Button>
    </div>
  );
};