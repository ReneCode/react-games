import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Field.css'

class Field extends Component {
  constructor(props) {
    super(props);
  }

  getColor() {
    const noColor = "#f6f6f6"
    switch (this.props.val) {
      case 0:
        return noColor
      case 1:
        return "#375e97"
      case 2:
        return "#fb6542"
      case 3:
        return "#ffbb00"
      case 4:
        return "#3f681c"
      default:
        return noColor
    }
  }

  render() {
    const style = {
      backgroundColor: this.getColor()
    }
    return (
      <div className="board-field" style={ style }>
      </div>
    )
  }
}

Field.propTypes = {
  val: PropTypes.number.isRequired,
}


export default Field
