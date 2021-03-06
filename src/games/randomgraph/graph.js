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
    const maxPoints = 30;
    this.points = Array.from(new Array(maxPoints)).map(p => this.newPoint());
  }

  newPoint() {
    return {
      x: randomInt(this.width),
      y: randomInt(this.height),
      dx: -0.5 + Math.random() * 1,
      dy: -0.5 + Math.random() * 1,
      r: 2 + Math.random() * 8,
      color: `rgba(${50 + randomInt(200)},${50 + randomInt(200)},${50 +
        randomInt(200)},0.9)`
    };
  }

  rebouncePoint(p) {
    if (p.x < 0 || p.x > this.width) {
      p.dx = -p.dx * 0.8;
      if (p.x < 0) {
        p.x = 0;
      } else {
        p.x = this.width;
      }
    }
    if (p.y < 0 || p.y > this.height) {
      p.dy = -p.dy * 0.8;
      if (p.y < 0) {
        p.y = 0;
      } else {
        p.y = this.height;
      }
    }
  }

  pointDistanceLevel = (p1, p2) => {
    const distances = [undefined, 20, 40, 60, 80]; // start at index 1
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const squareDistance = dx * dx + dy * dy;
    for (let i = 1; i < distances.length; i++) {
      const d = distances[i];
      if (squareDistance <= d * d) {
        return i;
      }
    }
    return 0;
  };

  doGravitation = (p1, p2, level) => {
    if (level === 0) {
      return;
    }
    let dx = p2.x - p1.x;
    let dy = p2.y - p1.y;
    const squareDistance = dx * dx + dy * dy;
    dx = ((2 / level) * dx) / squareDistance;
    dy = ((2 / level) * dy) / squareDistance;
    p1.dx += dx;
    p1.dy += dy;
    p2.dx -= dx;
    p2.dy -= dy;
  };

  update() {
    this.points.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      this.rebouncePoint(p);
    });
  }

  render(context) {
    this.points.forEach(p => {
      context.beginPath();
      context.fillStyle = p.color;
      context.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
      this.points.forEach(p2 => {
        if (p !== p2) {
          const level = this.pointDistanceLevel(p, p2);
          this.doGravitation(p, p2, level);
          if (level > 0) {
            context.lineWidth = 1; // 4 - level;
            context.strokeStyle = `rgb(200, 200, 200, ${1 - level / 5})`;
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
