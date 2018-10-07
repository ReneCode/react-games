import React, { Component } from "react";

import Board from "./Board";

class GameOfLife extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.state = {
      run: false
    };
  }

  start = () => {
    this.setState({
      run: true
    });
  };
  stop = () => {
    this.setState({
      run: false
    });
  };

  render() {
    return (
      <div>
        <h2>Game of life</h2>
        <div>
          <Board run={this.state.run} />
        </div>
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default GameOfLife;
