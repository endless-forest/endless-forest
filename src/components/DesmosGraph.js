import React, { useEffect } from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  var Desmos = require('desmos');
}

const DesmosGraph = () => {
  useEffect(() => {
      const elt = document.getElementById("graph");
      elt.style.width = "1200px";
      elt.style.height = "800px";
      const calculator = Desmos.GraphingCalculator(elt);
      calculator.setExpression({ id: "graph1", latex: "y=2x+3" });
      calculator.setExpression({ id: "graph2", latex: "y=2x+2" });
      calculator.setExpression({ id: "graph3", latex: "y=2x+1" });
      calculator.setExpression({ id: "graph4", latex: "y=3" });
      calculator.setExpression({ id: "graph5", latex: "y=2" });
      calculator.setExpression({ id: "graph6", latex: "x=3" });
      calculator.setExpression({ id: "graph7", latex: "x=2" });
      calculator.setExpression({ id: "graph9", latex: "x^2 + y^2=4" });
      calculator.setExpression({ id: "graph10", latex: "(x-2)^2 + (y+2)^2=4" });
  }, []);

  return <div id="graph"></div>;
};

export default DesmosGraph;
