import React from 'react';

// Import styles
import './App.css';

// Import custom comps
import {
  Calendar,
  DateSelector,
  VksConstructor,
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="content-wpr">
        {/*<VksConstructor />*/}
        <DateSelector/>
        <Calendar/>
      </div>
    </div>
  );
}

export default App;
