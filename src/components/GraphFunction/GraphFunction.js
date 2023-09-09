import React, {useEffect} from "react";

const GraphFunction = () => {

  const canvas = <canvas id="graphing-canvas" width="500" height="500" style={{"border":"1px solid #000000"}}></canvas>  

  useEffect(() => {
    const canvas = document.getElementById("graphing-canvas");
    const ctx = canvas.getContext("2d");

    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    
    // Draw the Path
    ctx.stroke();
  });

 

  return (
    <div>
      {canvas}
    </div>
  );
};

export default GraphFunction;
