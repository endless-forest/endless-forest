import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  var Desmos = require("desmos");
}

const createCalculator = () => {
  const elt = document.getElementById("graph");
  elt.style.width = "1200px";
  elt.style.height = "800px";
  elt.style.margin = "25px";
  const calculator = Desmos.GraphingCalculator(elt);
  return calculator;
};



const StudentGraph = () => {

  useEffect(() => {
    if (window) {
      const points = [
        { x: -2, y: 2 },
        { x: 2, y: 2 },
        { x: 2, y: -2 },
        { x: -2, y: -2 },
      ];
      const newCalculator = createCalculator();  
    }
  }, []);
    
    
    return (<div id="graph"></div>)
}

export default StudentGraph