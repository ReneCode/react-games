import React, { Component } from 'react'

import "./Board.css"

import Field from './Field'

import updateBoard from './update-board-gof'
import setBoard from '../common/set-board'

class Board extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
    this.update = this.update.bind(this)

    const fields = setBoard.setRandom(40, 40)
    fields[0][0] = 0;
    this.lastKey = null
    this.state = {
      fields: fields
    }

    this.interval = setInterval(this.update, 500)
  }

  update() {
    if (this.props.run) {

      let newState = {
        ...this.state,
      };

      updateBoard(newState)

      this.setState(newState)

    }
  }

  // click on a field, r and c are row and colum of that field
  click(r, c) {
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
