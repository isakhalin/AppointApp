import React from 'react';
import {Calendar, DateSelector} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wpr">
        <DateSelector/>
        <Calendar/>
      </div>
    </div>
  );
}

export default App;
