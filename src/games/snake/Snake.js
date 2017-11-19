import React, { Component } from 'react'

import Board from './Board'

class GameOfLife extends Component {

  render() {
    return (
      <div>
        <h2>Snake</h2>
        <div>
          <Board />
        </div>
      </div>
    )
  }
}

export default GameOfLife
