import React, { Component } from 'react'

import "./Board.css"

import Field from './Field'

import updateBoard from './update-board-snake'
import direction from './direction'

class Board extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
    this.update = this.update.bind(this)
    this.start = this.start.bind(this)

    this.lastKey = null
    this.state = {
      maxRows: 30,
      maxCols: 30,
      snake: [[15, 15]],
      snakeMaxLength: 5,
      direction: direction.up
    }
    this.initalState = this.state;
  }

  start() {
    clearInterval(this.interval);

    this.setState(this.initalState);

    this.interval = setInterval(this.update, 200)

  }

  componentWillMount() {
    document.addEventListener('keydown', this.keyDown.bind(this), false)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    document.removeEventListener('keydown', this.keyDown.bind(this), false)
  }

  keyDown(e) {
    this.lastKey = e.code
  }

  update() {

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

    console.log(newState.snakeMaxLength)

    this.setState(newState)
    if (newState.snakeDead) {
      clearInterval(this.interval);
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

  samePosition(a, b) {
    return a[0] === b[0] && a[1] === b[1]
  }

  isOnSnake(r, c) {
    const searchPos = [r, c];
    return this.state.snake.find(pos => {
      return this.samePosition(pos, searchPos)
    })
  }

  isOnFruit(r, c) {
    if (this.state.fruit) {
      const searchPos = [r, c];
      return this.samePosition(this.state.fruit, searchPos);
    }
    return false;
  }

  render() {
    let rows = [];
    for (let r = 0; r < this.state.maxRows; r++) {
      let row = [];
      for (let c = 0; c < this.state.maxCols; c++) {
        let val = 0;
        if (this.isOnSnake(r, c)) {
          val = 1;
        } else if (this.isOnFruit(r, c)) {
          val = 2;
        }


        row.push(
          <Field key={ c } val={ val } />
        );
      }
      rows.push(
        <div key={ r } className="board-row">
          { row }
        </div>
      )
    }
    return (
      <div>
        <h3>Score: { this.state.snakeMaxLength }</h3>
        <div>
          { rows }
        </div>
        <button onClick={ this.start }>Start (use cursor left/right)</button>
      </div>
    )
  }
}

export default Board
