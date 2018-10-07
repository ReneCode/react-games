import React, { Component } from "react";

import Graph from "./graph";

class RandomGraph extends Component {
  state = {
    running: false,
    width: 600,
    height: 600
  };

  componentDidMount() {
    const context = this.canvas.getContext("2d");
    this.setState({
      context,
      running: true
    });

    this.graph = new Graph(this.state.width, this.state.height);

    requestAnimationFrame(() => {
      this.update();
    });
  }

  componentWillUnmount() {
    this.setState({
      running: false
    });
  }

  update = () => {
    const context = this.state.context;

    // background color
    context.fillStyle = "#333";
    context.fillRect(0, 0, this.state.width, this.state.height);

    this.graph.render(context);

    if (this.state.running) {
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
