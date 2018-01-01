
import React , { Component } from 'react'
import './DoodleJump.css'

import Stair from './Stair'
import Doodle from './Doodle'

class DoodleJump extends Component {

  constructor(props) {
    super(props)
    const height = 600
    const width = 400
    const stairs = []
    for (let y = 40; y <= height; y+=70) {
      stairs.push(
        {
          x: Math.random() * (width-70),
          y
        }
      )
    }
    this.state = {
      height,
      width,
      stairs,
      dx: width/2,
      dy: height/2,
    }

    this.update = this.update.bind(this)

    this.interval = setInterval(this.update, 50)
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

  componentDidMount() {}

  update() {
    this.setState({
      ...this.state,
      dy: this.state.dy+5
    })
  }

  render() {
    return (
      <div>
        <p>use cursor left + right</p>
        <svg width={this.state.width} height={this.state.height} >
          { this.state.stairs.map((s,index) => {
              return ( <Stair x={ s.x } y={ s.y } key={index} /> )
            }) }
          <Doodle x={this.state.dx} y={this.state.dy} />
        </svg>
      </div>
    )
  }
}

export default DoodleJump
