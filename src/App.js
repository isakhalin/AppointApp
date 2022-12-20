import React from 'react';
import './App.css';
import { Celendar } from './components';
import { VksConstructor } from './components/vksConstructor/vksConstructor';

function App() {
  return (
    <div className="App">
      <Celendar />
      <VksConstructor />
    </div>
  );
}

export default App;
