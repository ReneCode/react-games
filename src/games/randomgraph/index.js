import React, { Component } from "react";

import Graph from "./graph";

class RandomGraph extends Component {
  running = false;
  frame = 0;
  state = {
    width: 600,
    height: 600
  };

  componentDidMount() {
    const context = this.canvas.getContext("2d");
    this.setState({
      context
    });

    this.graph = new Graph(this.state.width, this.state.height);
    this.running = true;
    requestAnimationFrame(() => {
      this.update();
    });
  }

  componentWillUnmount() {
    console.log("will unmount");
    this.running = false;
  }

  update = () => {
    this.frame--;
    if (this.frame <= 0) {
      this.frame = 1;

      const context = this.state.context;

      // background color
      context.fillStyle = "#333";
      context.fillRect(0, 0, this.state.width, this.state.height);
      this.graph.render(context);
      this.graph.update();
    }
    if (this.running) {
      requestAnimationFrame(() => {
        this.update();
      });
    }
  };

  render() {
    return (
      <canvas
        ref={r => (this.canvas = r)}
        width={this.state.width}
        height={this.state.height}
      />
    );
  }
}

export default RandomGraph;
