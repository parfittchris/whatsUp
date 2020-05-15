import React from 'react';
import './App.css';
import Weather from './Components/Weather/weatherContainer.jsx';
import Clock from './Components/Clock/clock.jsx';

function App() {
  return (
    <div className="App">
      <Clock />
      <Weather />
    </div>
  );
}

export default App;
