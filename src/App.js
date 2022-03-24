import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <About/>
      <Skills/>
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
