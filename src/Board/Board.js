import React, { Component } from 'react'

import "./Board.css"

import Field from './Field'

class Board extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
    this.update = this.update.bind(this)

    this.state = {
      fields: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0]
      ]
    }

    this.interval = setInterval(this.update, 1000)
  }

  update() {
    if (this.props.run) {

      let newState = {
        ...this.state
      };

      newState.fields.forEach(row => {
        for (let c = 0; c < row.length; c++) {
          row[c] = Math.floor(Math.random() * 10);
        }
      })
      console.log(newState)
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
              return <Field key={ c } click={ this.click } row={ r } column={ c } text={ cell } />
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
