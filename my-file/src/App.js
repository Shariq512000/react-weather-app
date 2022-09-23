import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import "./App.css";


function App() {
  return <div>
    <nav id="navi">
      <h1 id="first">Weather App</h1>
    </nav>

    <Weather />

    <footer id="foot"></footer>

  </div>
}
export default App;