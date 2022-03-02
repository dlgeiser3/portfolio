import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <About/>
      <Skills/>
      <Experience />
      <Experience />
      <Experience />
      <Experience />
      <Experience />
      <Experience />
    </div>
  );
}

export default App;
