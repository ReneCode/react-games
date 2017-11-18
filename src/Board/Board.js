import React, { Component } from 'react'

import "./Board.css"

import Field from './Field'

import updateBoard from './update-board-gof'
import setBoardRandom from './set-board-random'
import direction from './direction'

class Board extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
    this.update = this.update.bind(this)
    // this.keyDown = this.keyDown(this)


    const fields = setBoardRandom(40, 20)

    this.lastKey = null
    this.state = {
      fields: fields,
      direction: direction.up
    }

    this.interval = setInterval(this.update, 1000)
  }

  componentWillMount() {
    document.addEventListener('keydown', this.keyDown.bind(this), false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown.bind(this), false)
  }

  keyDown(e) {
    this.lastKey = e.code
  }

  update() {
    if (this.props.run) {

      let newState = {
        ...this.state,
      };

      switch (this.lastKey) {
        case "ArrowLeft":
          newState.direction = direction.turnLeft(newState.direction);
          break;
        case 'ArrowRight':
          newState.direction = direction.turnRight(newState.direction);
          break;
        default:
      // leave direction
      }
      // clear key - continue on current direction
      // if no key will be pressed
      this.lastKey = null;

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
