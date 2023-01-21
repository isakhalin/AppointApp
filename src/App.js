import React, {useState} from 'react';
import {createBrowserRouter,createMemoryRouter, RouterProvider} from 'react-router-dom';
// Import styles
import './App.css';

// Import custom comps
import {CalendarDay, DateSelector,} from "./components";
import {CalendarMonth} from "./components/calendarMonth";


function App() {
  // const [daySelected, setDaySelected] = useState(new Date().getTime());

  const routes = [
    {
      path: "/",
      element: <CalendarMonth/>,
    },
    {
      path: '/:year/:month',
      element: <CalendarMonth/>,
    },
    {
      path: '/:year/:month/:day',
      element: <div className="content-wpr">
        {/*<div style={{marginBottom: "5px"}}>Kunilingoosee App</div>*/}
        {/*<DateSelector daySelected={daySelected} setDaySelected={setDaySelected}/>*/}
        {/*<CalendarDay daySelected={daySelected}/>*/}
        <DateSelector/>
        <CalendarDay/>
      </div>
    }
  ];

  //Обычный роутер
  const router = createBrowserRouter(routes);
  //мемори роутер
  const memRouter = createMemoryRouter(routes, {
    initialEntries:['/'],
    initialIndex: 0,
  })
  return (
    <div className="App">
      {/*<div className="content-wpr">*/}
      {/*  <DateSelector daySelected={daySelected} setDaySelected={setDaySelected}/>*/}
      {/*  <CalendarDay daySelected={daySelected}/>*/}
      {/*</div>*/}
      {/*<CalendarMonth/>*/}
      <div style={{marginBottom: "5px"}}>Kunilingoosee App</div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
