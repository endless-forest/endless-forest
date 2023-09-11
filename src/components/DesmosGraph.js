import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export const projectPartOneExpressions = [
  { id: "graph1", latex: "y=2x+3" },
  { id: "graph2", latex: "y=2x+2" },
  { id: "graph3", latex: "y=2x+1" },
  { id: "graph4", latex: "y=3" },
  { id: "graph5", latex: "y=2" },
  { id: "graph6", latex: "x=3" },
  { id: "graph7", latex: "x=2" },
  { id: "graph9", latex: "x^2 + y^2=4" },
  { id: "graph10", latex: "(x-2)^2 + (y+2)^2=4" }
];

if (ExecutionEnvironment.canUseDOM) {
  var Desmos = require("desmos");
}

const graphExpressions = (calculator, expressions) => {
  expressions.forEach((expression) => {
    calculator.setExpression(expression);
  });
};

const DesmosGraph = ({ expressions }) => {
  useEffect(() => {
    if (window) {
      const elt = document.getElementById("graph");
      elt.style.width = "1200px";
      elt.style.height = "800px";
      const calculator = Desmos.GraphingCalculator(elt);
      graphExpressions(calculator, expressions);
    }
  }, []);

  return <div id="graph"></div>;
};

export default DesmosGraph;
