import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import HeroCard from './components/HeroCard'

// komponen bisa pakai class atau function
function App() {
  return(
    <div className="App">
      <Head/>
      <HeroCard/>
    </div>
  );
}

export default App;
