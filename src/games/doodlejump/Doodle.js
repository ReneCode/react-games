

const KEY_RIGHT = 39
const KEY_LEFT = 37


class Doodle {

  constructor(x, y) {
    this.x = x
    this.y = y
    this.dx = 5
    this.radius = 20
    this.g = 3
    this.v = 0
  }

  update(state) {
    const t = 0.3
    this.v = this.v + t * this.g
    this.y += t * this.v

    if (this.y > state.height - 40) {
      // bounce back
      this.v = -this.v
    }
    if (state.keyValue === true) {
      switch (state.keyCode) {
        case KEY_RIGHT:
          this.x += this.dx
          break
        case KEY_LEFT:
          this.x -= this.dx
          break
        default:
      }
    }
    if (this.y > state.height) {
      state.stopGame = true
    }
  }


  render(state) {
    const context = state.context
    context.beginPath();
    context.fillStyle = '#723'
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
}

export default Doodle

