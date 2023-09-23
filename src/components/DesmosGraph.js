import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export const projectPartOneExpressions = [
  { id: "graph1", latex: "y=2x+3" },
  {
    id: "point1",
    latex: "(1, 5)",
    color: "blue",
    showLabel: true,
    label: "y = 2x+3",
  },
  { id: "graph2", latex: "y=2x+2" },
  {
    id: "point2",
    latex: "(1, 4)",
    color: "green",
    showLabel: true,
    label: "y = 2x+2",
  },
  { id: "graph3", latex: "y=2x+1" },
  {
    id: "point3",
    latex: "(1, 3)",
    color: "purple",
    showLabel: true,
    label: "y = 2x+1",
    labelOrientation: "top"
  },
  { id: "graph4", latex: "y=3" },
  {
    id: "point4",
    latex: "(4, 3)",
    color: "black",
    showLabel: true,
    label: "y = 3",
    labelOrientation: "top"
  },
  { id: "graph5", latex: "y=2" },
  {
    id: "point5",
    latex: "(4, 2)",
    color: "red",
    showLabel: true,
    label: "y = 2",
    labelOrientation: "top"
  },
  { id: "graph6", latex: "x=3" },
  {
    id: "point6",
    latex: "(3, 1)",
    color: "teal",
    showLabel: true,
    label: "x = 3",
    labelOrientation: "right"
  },
  { id: "graph7", latex: "x=2" },
  {
    id: "point7",
    latex: "(2, 1.5)",
    color: "teal",
    showLabel: true,
    label: "x = 2",
    labelOrientation: "right"
  },
  { id: "graph8", latex: "x^2 + y^2=4", color: "red" },
  {
    id: "point8",
    latex: "(0, 0)",
    color: "red",
    showLabel: true,
    label: "`{x^2 + y^2=4}`",
    labelOrientation: "right"
  },
  { id: "graph9", latex: "(x-2)^2 + (y+2)^2=4", color: "black" },
  {
    id: "point9",
    latex: "(2, -2)",
    color: "black",
    showLabel: true,
    label: "`(x-2)^2 + (y+2)^2=4`",
    labelOrientation: "right"
  },
  { id: "graph10", latex: "y=10(x-5)^2 + 3", color: "orange" },
  {
    id: "point10",
    latex: "(4.5, 6)",
    color: "orange",
    showLabel: true,
    label: "`y=10(x-5)^2 + 3`",
    labelOrientation: "left"
  },
  { id: "graph11", latex: "y=-5(x-6.25)^2 + 6", color: "red" },
  {
    id: "point11",
    latex: "(7.1, 2.5)",
    color: "red",
    showLabel: true,
    label: "`y=-5(x-6.25)^2 + 6`",
    labelOrientation: "right"
  },
  { id: "graph12", latex: "y=10(x-7.5)^2 + 3", color: "green" },
  {
    id: "point12",
    latex: "(7, 5.5)",
    color: "green",
    showLabel: true,
    label: "`y=10(x-7.5)^2 + 3`",
    labelOrientation: "left"
  },
  { id: "graph13", latex: "y = \\sqrt{x + 8} + 2.3", color: "purple" },
  {
    id: "point13",
    latex: "(-8, 2)",
    color: "green",
    showLabel: true,
    label: "`y = \\sqrt{x + 8} + 2.3`",
    labelOrientation: "right"
  },
  { id: "graph14", latex: "y = -\\sqrt{x + 8} + 1.6", color: "red" },
  {
    id: "point14",
    latex: "(-7.6, 1)",
    color: "red",
    showLabel: true,
    label: "`y = -\\sqrt{x + 8} + 1.6`",
    labelOrientation: "right"
  },
  { id: "graph15", latex: "y = \\sqrt{x + 8.2} + 1.6", color: "green" },
  {
    id: "point15",
    latex: "(-6.5, 3.5)",
    color: "purple",
    showLabel: true,
    label: "`y = \\sqrt{x + 8.2} + 1.6`",
    labelOrientation: "right"
  },
  {
    id: "point16",
    latex: "(-10.2, 6.5)",
    color: "black",
    showLabel: true,
    label: "FUNCTIONS GRAPHED",
    labelOrientation: "right",
    labelSize: 2
  },
  {
    id: "point17",
    latex: "(-10.2, 5.8)",
    color: "black",
    showLabel: true,
    label: "`y = ax + k`",
    labelOrientation: "right",
    labelSize: 1
  },
  {
    id: "point18",
    latex: "(-10.2, 5.3)",
    color: "black",
    showLabel: true,
    label: "`y = a(x - h)^2 + k`",
    labelOrientation: "right",
    labelSize: 1
  },
  {
    id: "point19",
    latex: "(-10.2, 4.6)",
    color: "black",
    showLabel: true,
    label: "`y = a\\sqrt{x - h} + k`",
    labelOrientation: "right",
    labelSize: 1
  },
  {
    id: "point20",
    latex: "(-10.2, 3.9)",
    color: "black",
    showLabel: true,
    label: "`(x - h)^2 + (y - k)^2 = r^2`",
    labelOrientation: "right",
    labelSize: 1
  },
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
      elt.style.margin = "50px";
      const calculator = Desmos.GraphingCalculator(elt, {
        expressions: false,
        settingsMenu: false,
      });
      graphExpressions(calculator, expressions);
      console.info(calculator.getState());
    }
  }, []);

  return <div id="graph"></div>;
};

export default DesmosGraph;
