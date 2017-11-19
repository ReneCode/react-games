

const direction = {
  right: "R",
  left: "L",
  up: "U",
  down: "D",

  turnRight: (dir) => {
    switch (dir) {
      case direction.left:
        return direction.up;
      case direction.up:
        return direction.right;
      case direction.right:
        return direction.down;
      case direction.down:
        return direction.left;
      default:
        throw new Error("bad direction:", dir)
    }
  },

  turnLeft: (dir) => {
    switch (dir) {
      case direction.left:
        return direction.down;
      case direction.down:
        return direction.right;
      case direction.right:
        return direction.up;
      case direction.up:
        return direction.left;
      default:
        throw new Error("bad direction:", dir)
    }
  }

}

export default direction
