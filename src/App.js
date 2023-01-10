import React, {useState} from 'react';

// Import styles
import './App.css';

// Import custom comps
import {
  CalendarDay,
  DateSelector,
  VksConstructor,
} from "./components";

function App() {
  const [daySelected, setDaySelected] = useState(new Date().getTime());
  console.log("DAYnow", daySelected)

  return (
    <div className="App">
      <div className="content-wpr">
        <DateSelector daySelected={daySelected} setDaySelected={setDaySelected}/>
        <CalendarDay daySelected={daySelected}/>
      </div>
    </div>
  );
}

export default App;
