import React, { useState, useEffect } from 'react';
import './App.css';
import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
    </div>
  );
}

export default App;
