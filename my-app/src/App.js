import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Title from './components/Title'
import HeroCard from './components/HeroCard'
import HeroDetail from './components/HeroDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Title title={'Dota 2 Heroes'}/>
            <HeroCard/>
          </Route>
          <Route path="/:id">
            <HeroDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
