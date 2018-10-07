const randomInt = max => {
  return Math.floor(Math.random() * max);
};

class Graph {
  constructor(width, height) {
    this.points = [];
    const maxPoints = 10;
    this.points = Array.from(new Array(maxPoints)).map(p => {
      return {
        x: randomInt(width),
        y: randomInt(height),
        dx: -2 + Math.random() * 4,
        dy: -2 + Math.random() * 4
      };
    });
  }
  update(state) {
    this.points.forEach(p => {});
  }

  render(context) {
    context.fillStyle = "#eee";
    this.points.forEach(p => {
      context.beginPath();
      context.arc(p.x, p.y, 2, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
    });
  }
}

export default Graph;
