const randomInt = max => {
  return Math.floor(Math.random() * max);
};

class Graph {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.points = [];

    this.initPoints();
  }

  initPoints() {
    const maxPoints = 100;
    this.points = Array.from(new Array(maxPoints)).map(p => this.newPoint());
  }

  newPoint() {
    return {
      x: randomInt(this.width),
      y: randomInt(this.height),
      dx: -1 + Math.random() * 2,
      dy: -1 + Math.random() * 2
    };
  }

  rebouncePoint(p) {
    if (p.x < 0 || p.x > this.width) {
      p.dx = -p.dx;
    }
    if (p.y < 0 || p.y > this.height) {
      p.dy = -p.dy;
    }
  }

  pointsNear(p1, p2) {
    const maxDistance = 50;
    const maxSquareDistance = maxDistance * maxDistance;
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const squareDistance = dx * dx + dy * dy;
    if (squareDistance < maxSquareDistance) {
      return true;
    }
    return false;
  }

  update() {
    this.points.forEach(p => {
      (p.x += p.dx), (p.y += p.dy);
      this.rebouncePoint(p);
    });
  }

  render(context) {
    context.strokeStyle = "#aaa";
    context.lineWidth = 1;
    context.fillStyle = "#eee";
    this.points.forEach(p => {
      context.beginPath();
      context.arc(p.x, p.y, 2, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
      this.points.forEach(p2 => {
        if (p != p2) {
          if (this.pointsNear(p, p2)) {
            context.beginPath();
            context.moveTo(p.x, p.y);
            context.lineTo(p2.x, p2.y);
            context.stroke();
          }
        }
      });
    });
  }
}

export default Graph;
