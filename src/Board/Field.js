import React, { Component } from 'react'

import './Field.css'

class Field extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
  }

  click() {
    this.props.click(this.props.row, this.props.column)
  }

  render() {
    const style = {
      backgroundColor: "#ddd",
    }
    return (
      <div className="board-field" onClick={ this.click } style={ style }>
        { this.props.text }
      </div>
    )
  }
}

export default Field
