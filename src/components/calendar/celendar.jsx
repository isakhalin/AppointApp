// rafc - создает реакт компонент
// clg  - console.log()

import { boxSizing } from "@mui/system";
import React from "react";

export const Celendar = () => {
  const mok = [
    {
      title: "9:00",
      start: 0,
      end: 30,
    },
    {
      title: "9:30",
      start: 31,
      end: 60,
    },
    {
      title: "10:00",
      start: 61,
      end: 90,
    },
    {
      title: "10:30",
      start: 91,
      end: 120,
    },
    {
      title: "11:00",
      start: 121,
      end: 150,
    },
    {
      title: "11:30",
      start: 151,
      end: 180,
    },
    {
      title: "12:00",
      start: 181,
      end: 210,
    },
    {
      title: "12:30",
      start: 211,
      end: 240,
    },
    {
      title: "13:00",
      start: 211,
      end: 240,
    },
    {
      title: "13:30",
      start: "",
      end: "",
    },
    {
      title: "14:00",
      start: "",
      end: "",
    },
    {
      title: "14:30",
      start: "",
      end: "",
    },
    {
      title: "15:00",
      start: "",
      end: "",
    },
    {
      title: "15:30",
      start: "",
      end: "",
    },
    {
      title: "16:00",
      start: "",
      end: "",
    },
    {
      title: "16:30",
      start: "",
      end: "",
    },
    {
      title: "17:00",
      start: "",
      end: "",
    },
    {
      title: "17:30",
      start: "",
      end: "",
    },
    {
      title: '18:00',
      start: '',
      end: '',
    },
    {
      title: "18:30",
      start: "",
      end: "",
    },
    {
      title: '19:00',
      start: '',
      end: '',
    },
    {
      title: "19:30",
      start: "",
      end: "",
    },
    {
      title: '20:00',
      start: '',
      end: '',
    },
    {
      title: "20:30",
      start: "",
      end: "",
    },
    {
      title: '21:00',
      start: '',
      end: '',
    },
    {
      title: "21:30",
      start: "",
      end: "",
    },
  ];
  const mok2 = [
    {
      start: 0,
      end: 45,
      styles: {
        position: "absolute",
        top: "0",
        backgroundColor: "#008d0e",
        height: "45px",
        width: "400px",
        borderBottom: "1px solid black",
        boxSizing: "border-box",
      },
    },
    {
      start: 46,
      end: 75,
      styles: {
        position: "absolute",
        top: 76,
        backgroundColor: "#008d0e",
        height: "76px",
        width: "400px",
        borderBottom: "1px solid black",
        boxSizing: "border-box",
      },
    },
  ];

  return (
    <div className="calendar-wrp">
      {mok.map((el, index) => (
        <div
          style={{
            width: "400px",
            height: "30px",
            borderBottom: "1px solid black",
            boxSizing: "border-box",
          }}
        >
          {el.title}
        </div>
      ))}
      {mok2.map((el) => (
        <div style={el.styles}></div>
      ))}
    </div>
  );
};
