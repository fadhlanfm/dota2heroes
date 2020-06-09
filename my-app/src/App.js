import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head'
import HeroCard from './components/HeroCard'

function App() {
  return (
    <div className="App">
      <Head title={'Dota 2 Heroes'}/>
      <HeroCard/>
    </div>
  );
}

export default App;
