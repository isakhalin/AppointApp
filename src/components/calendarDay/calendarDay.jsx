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
  // TODO Заменить на данные из редюсера
  const {calendar} = useSelector((state) => state.calendarReducer);
  // const [vks, setVks] = useState([
  //   {
  //     id: "434264361",
  //     title: "new",
  //     description: "",
  //     start: 1675204200000, // new Date("2023-02-01 09:30:00").getTime()
  //     end: 1675206000000,   // new Date("2023-02-01 10:00:00").getTime()
  //   },
  //   {
  //     id: "43467345361",
  //     title: "Вопросы общего образования образования образования образования образования образования",
  //     description: "",
  //     start: 1675207800000, // new Date("2023-02-01 10:30:00").getTime()
  //     end: 1675212300000,   // Date("2023-02-01 11:45:00").getTime()
  //   },
  // ])

  const handleModalOpen = (el) => {
    console.log("EL", el)
    setModalOpen(true);
  }

  const date = new Date(daySelected);

  const vks = calendar[date.getFullYear()]?.[date.getMonth() + 1]?.[date.getDate()];

  const day = [
    {
      title: "9:00",
    },
    {
      title: "9:30",
    },
    {
      title: "10:00",
    },
    {
      title: "10:30",
    },
    {
      title: "11:00",
    },
    {
      title: "11:30",
    },
    {
      title: "12:00",
    },
    {
      title: "12:30",
    },
    {
      title: "13:00",
    },
    {
      title: "13:30",
    },
    {
      title: "14:00",
    },
    {
      title: "14:30",
    },
    {
      title: "15:00",
    },
    {
      title: "15:30",
    },
    {
      title: "16:00",
    },
    {
      title: "16:30",
    },
    {
      title: "17:00",
    },
    {
      title: "17:30",
    },
    {
      title: "18:00",
    },
    {
      title: "18:30",
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

  const calcDayStart = () => {
    const date = new Date(daySelected).toLocaleDateString().split(".");
    return new Date(`${date[2]}-${date[1]}-${date[0]} ${dayStartAt}`).getTime();
  }

  const calcDayEnd = (times) => {
    const date = new Date(daySelected).toLocaleDateString().split(".");
    return new Date(`${date[2]}-${date[1]}-${date[0]} ${dayEndAt}`).getTime();
  }

  return (
    <div>
      <div className="calendar-wrp">
        {day.map((el) => (
          <div
            key={el.title}
            style={{
              width: "100%",
              height: "5%",
              borderBottom: "1px solid black",
              boxSizing: "border-box",
              fontSize: "9px",
              textAlign: "left",
              paddingLeft: "2px",
              cursor: "pointer",
            }}
            onClick={handleModalOpen}
          >
            {el.title}
          </div>
        ))}
        {vks?.map((el) => (
          <VksElement
            key={el.start}
            element={el}
            calcDayStart={calcDayStart(daySelected)}
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
          <VksConstructor calcDayStart={calcDayStart()} calcDayEnd={calcDayEnd()}/>
        </MyModal>
      </Box>


    </div>
  );
};