
import React, { Component } from 'react';
import './App.css';

import GameOfLife from './games/game-of-life/GameOfLife'
import Snake from './games/snake/Snake'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Games !</h1>
        <div className="center">
          { /* <GameOfLife /> */ }
        </div>
        <div className="center">
          <Snake />
        </div>
      </div>
      );
  }
}

export default App;
