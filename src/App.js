import React, { Component } from 'react';
import './App.css';

import Board from './Board/Board'

class App extends Component {
  constructor() {
    super()
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.state = {
      run: false
    }
  }
  start() {
    this.setState({
      run: true
    })
  }
  stop() {
    this.setState({
      run: false
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React Games</h1>
        <div className="center">
          <Board run={ this.state.run } />
        </div>
        <div>
          <button onClick={ this.start }>Start</button>
          <button onClick={ this.stop }>Stop</button>
        </div>
      </div>
      );
  }
}

export default App;
