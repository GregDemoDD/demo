import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "g_photo.png"} className="App-logo" alt="logo" />
        <p>
          Hello, DataDog!
        </p>
      </header>
    </div>
  );
}

export default App;
