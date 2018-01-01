
import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import Menu from './games/Menu'
import Home from './games/Home'
import GameOfLife from './games/game-of-life/GameOfLife'
import Snake from './games/snake/Snake'
import DoodleJump from './games/doodlejump/DoodleJump'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>React Games !</h1>
          <Menu />
          <div className="center">
            <Route exact path="/" component={ Home } />
            <Route exact path="/snake" component={ Snake } />
            <Route exact path="/gameoflife" component={ GameOfLife } />
            <Route exact path="/doodlejump" component={ DoodleJump } />
          </div>
        </div>
      </Router>
      );
  }
}

export default App;
