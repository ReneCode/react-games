
import React , { Component } from 'react'
import './DoodleJump.css'

import Stair from './Stair'
import Doodle from './Doodle'

class DoodleJump extends Component {

  constructor(props) {
    super(props)
    const height = 600
    const width = 400

    this.state = {
      height,
      width,
    }

  /*
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
  */
  }

  componentWillMount() {
    document.addEventListener('keydown', this.keyHandler.bind(this, true))
    document.addEventListener('keyup', this.keyHandler.bind(this, false))
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    document.removeEventListener('keydown', this.keyHandler)
    document.removeEventListener('keyup', this.keyHandler)
  }

  keyHandler(value, event) {
    this.setState({
      ...this.state,
      keyCode: event.keyCode,
      keyValue: value
    })
  }

  componentDidMount() {
    const context = this.canvas.getContext('2d')
    this.setState({
      context
    })

    this.startGame()


    requestAnimationFrame(() => {
      this.update()
    })
  }

  startGame() {
    this.doodle = new Doodle(this.state.width / 2, this.state.height / 2)
  }


  update(timestamp) {
    const context = this.state.context
    context.save()

    context.fillStyle = '#eee'
    context.fillRect(0, 0, this.state.width, this.state.height)


    this.doodle.update(this.state)

    this.doodle.render(this.state)


    context.restore()

    if (this.state.stopGame) {
      console.log("STOP")
      return
    }

    requestAnimationFrame(() => {
      this.update()
    })

  }

  render() {
    const style = {
      border: "1px solid black"
    }
    return (
      <div>
        <p>use cursor left + right</p>
        <canvas ref={ r => this.canvas = r } width={ this.state.width } height={ this.state.height } style={ style } />
      </div>
    )
  }
}

export default DoodleJump
