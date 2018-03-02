
import React from "react";

const Canvas = () => {
  const style = {
    border: "1px solid black"
  };

  // const viewBox = [window.innerWidth / -2, 300 - window.innerHeight, window.innerWidth, window.innerHeight];
  const viewBox = [-250, -300, 500, 350] 

  return (
    <svg
      id="aliens-canvas"
      preserveAspectRatio="xMinYMin"
      viewBox={viewBox}
      style={style}
    >
      <circle cx={0} cy={0} r={30} />
    </svg>
  );
}

export default Canvas;
