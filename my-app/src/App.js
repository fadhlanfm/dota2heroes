import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';
import { HeroesTable, HeroDetail } from './pages';
// import HeroTable from './pages/HeroesTable'
// import FavoriteHeroesTable from './pages/FavoriteHeroesTable'
// import HeroDetail from './pages/HeroDetail'
import Navbar from './components/Navbar'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ HeroesTable }></Route>
            <Route path="/:id">
              <HeroDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
