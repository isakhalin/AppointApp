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
  // console.log("Значение даты в Апп", daySelected)

  return (
    <div className="App">
      <div className="content-wpr">
        <div style={{marginBottom: "5px"}}>Kunilingoosee App</div>
        <DateSelector daySelected={daySelected} setDaySelected={setDaySelected}/>
        <CalendarDay daySelected={daySelected}/>
      </div>
    </div>
  );
}

export default App;
