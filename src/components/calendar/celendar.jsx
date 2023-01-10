// rafc - создает реакт компонент
// clg  - console.log()

import React, {useState} from "react";

// Import custom comps
import {VksConstructor} from "../vksConstructor";

export const CalendarDay = ({daySelected}) => {
  const [dayStartAt, setDayStartAt] = useState("");
  const [dayEndAt, setDayEndAt] = useState("")

  console.log("selectedDay", daySelected);

  const [vks, setVks] = useState([
    {
      id: "434264361",
      title: "new",
      description: "",
      dayStartAt: new Date("2022-12-20 09:00:00").getTime(),
      dayEndAt: new Date("2022-12-20 21:00:00").getTime(),
      start: new Date("2022-12-20 09:30:00").getTime(),
      end: new Date("2022-12-20 10:00:00").getTime(),
      styles: {
        top: 0,
        height: "30px",
      },
    },
    {
      id: "43467345361",
      title: "Вопросы общего образования образования образования образования образования образования",
      description: "",
      dayStartAt: new Date("2022-12-20 09:00:00").getTime(),
      dayEndAt: new Date("2022-12-20 21:00:00").getTime(),
      start: new Date("2022-12-20 10:30:00").getTime(), // 1671523200000
      end: new Date("2022-12-20 11:00:00").getTime(), // 1671526800000
      styles: {
        top: 90, // 30 минут это 30 пикселей. (start-dayStartAt)/60000
        height: "76px", // (end-start)/60000
      },
    },
  ])

  const commonStyles = {
    position: "absolute",
    backgroundColor: "#ed8550",
    width: "100%",
    borderBottom: "1px solid black",
    boxSizing: "border-box",
  }

  const [day, setDay] = useState([
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
    {
      title: "19:00",
    },
    {
      title: "19:30",
    },
    {
      title: "20:00",
    },
    {
      title: "20:30",
    },
    {
      title: "21:00",
    },
    {
      title: "21:30",
    },
  ])

  console.log("randomizer", Math.floor((Math.random() * 1000000000)))

  return (
    <div>
      <div className="calendar-wrp">
        {day.map((el) => (
          <div
            key={el.title}
            style={{
              width: "100%",
              height: "30px",
              borderBottom: "1px solid black",
              boxSizing: "border-box",
            }}
          >
            {el.title}
          </div>
        ))}
        {vks.map((el) => (
          <div key={el.start} style={{...commonStyles, ...el.styles}}>
            {el.title}
          </div>
        ))}
      </div>
      <VksConstructor vks={vks} setVks={setVks}/>
    </div>
  );
};