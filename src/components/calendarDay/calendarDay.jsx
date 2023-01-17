// rafc - создает реакт компонент
// clg  - console.log()

import React, {useEffect, useState} from "react";

// React ToolKit
import {useSelector} from "react-redux";

// Import MUI Comps
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Import custom comps
import {VksConstructor} from "../vksConstructor";
import {VksElement} from "./vksElement";
import {MyModal} from "../modals";

export const CalendarDay = ({daySelected}) => { // В daySelected приходит дата в милисекундах
  const [dayStartAt, setDayStartAt] = useState("09:00:00");
  const [dayEndAt, setDayEndAt] = useState("21:00:00");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEl, setCurrentEl] = useState({title: ``})

  const {calendar} = useSelector((state) => state.calendarReducer);

  const handleModalOpen = (el) => {
    console.log("EL", el);
    //setDayStartAt(`${el}:00`);
    setCurrentEl(el);
    setModalOpen(true);
  }

  const date = new Date(daySelected);

  const vks = calendar[date.getFullYear()]?.[date.getMonth() + 1]?.[date.getDate()];

  const calcDayStart = () => {
    const date = new Date(daySelected).toLocaleDateString().split(".");
    return new Date(`${date[2]}-${date[1]}-${date[0]} ${dayStartAt}`).getTime();
  }

  const calcDayEnd = () => {
    const date = new Date(daySelected).toLocaleDateString().split(".");
    return new Date(`${date[2]}-${date[1]}-${date[0]} ${dayEndAt}`).getTime();
  }

  const day = [
    //TODO костыли, найти решение
    {
      start: calcDayStart(),
    },
    {
      start: calcDayStart() + (1000 * 60 * 30),
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 2,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 3,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 4,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 5,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 6,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 7,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 8,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 9,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 10,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 11,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 12,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 13,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 14,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 15,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 16,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 17,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 18,
    },
    {
      start: calcDayStart() + (1000 * 60 * 30) * 19,
    },
    // {
    //   title: "19:00",
    // },
    // {
    //   title: "19:30",
    // },
    // {
    //   title: "20:00",
    // },
    // {
    //   title: "20:30",
    // },
    // {
    //   title: "21:00",
    // },
    // {
    //   title: "21:30",
    // },
  ];

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
              // paddingLeft: "2px",

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
            calcDayStart={calcDayStart(daySelected)}
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
          // width: { xs: 150, sm: 200 },
        }}
      >
        <MyModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <VksConstructor calcDayStart={calcDayStart()} calcDayEnd={calcDayEnd()} currentEl={currentEl}/>
        </MyModal>
      </Box>

    </div>
  );
};