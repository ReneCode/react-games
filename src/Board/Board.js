import React, { Component } from 'react'

import "./Board.css"

import Field from './Field'

import updateBoard from './update-board-gof'
import setBoardRandom from './set-board-random'

class Board extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
    this.update = this.update.bind(this)

    const fields = setBoardRandom(40, 60)

    this.state = {
      fields: fields
    }

    this.interval = setInterval(this.update, 200)
  }

  update() {
    if (this.props.run) {

      let newState = {
        ...this.state
      };

      updateBoard(this.state.fields)

      this.setState(newState)

    }
  }

  click(r, c) {
    console.log("click:", r, c);
    let newState = {
      ...this.state
    };

    let val = 1;
    if (newState.fields[r][c]) {
      val = 0;
    }
    newState.fields[r][c] = val;
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h2>playground</h2>
        { this.state.fields.map((cells, r) => {
            const row = cells.map((cell, c) => {
              return <Field key={ c } click={ this.click } r={ r } c={ c } val={ cell } />
            })
            return <div key={ r } className="board-row">
                     { row }
                   </div>
          }) }
      </div>
    )
  }
}

export default Board
