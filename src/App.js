import React, {useEffect, useState} from 'react';
import {createBrowserRouter, createMemoryRouter, RouterProvider} from 'react-router-dom';

// Redux comps
import {useDispatch} from "react-redux";

// Import styles
import './App.css';

// Import custom comps
import {CalendarDay, DateSelector,} from "./components";
import {CalendarMonth} from "./components/calendarMonth";

// Actions
import {calendar, setEvent} from './store/actions/actions'
import {Header} from "./components/header";

function App() {
  const dispatch = useDispatch();

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
        <DateSelector/>
        <CalendarDay/>
      </div>
    },
    {
      path: '*',
      element: <CalendarMonth/>,
    }
  ];

  // Обычный роутер
  const router = createBrowserRouter(routes);

  // // мемори роутер
  // const memRouter = createMemoryRouter(routes, {
  //   initialEntries: ['/'],
  //   initialIndex: 0,
  // })

  useEffect(() => {
    dispatch(calendar());
  }, [])

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
