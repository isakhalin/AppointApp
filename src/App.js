import React, {useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {CalendarDay, DateSelector,} from './components';
import {CalendarMonth} from './components';
import {Header} from './components';
import {calendar} from './store';
import './App.css';

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

  const router = createBrowserRouter(routes);

  useEffect(() => {
    dispatch(calendar());
  }, []);

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
