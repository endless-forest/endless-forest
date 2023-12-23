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
    label: "y = 2x+1"
  },
  { id: "graph4", latex: "y=3" },
  {
    id: "point4",
    latex: "(4, 3)",
    color: "black",
    showLabel: true,
    label: "y = 3",
  },
  { id: "graph5", latex: "y=2" },
  {
    id: "point5",
    latex: "(4, 2)",
    color: "red",
    showLabel: true,
    label: "y = 2",
  },
  { id: "graph6", latex: "x=3" },
  {
    id: "point6",
    latex: "(3, 1)",
    color: "teal",
    showLabel: true,
    label: "x = 3",
    labelOrientation: "right",
  },
  { id: "graph7", latex: "x=2" },
  {
    id: "point7",
    latex: "(2, 1.5)",
    color: "teal",
    showLabel: true,
    label: "x = 2",
    labelOrientation: "right",
  },
  { id: "graph8", latex: "x^2 + y^2=4", color: "red" },
  {
    id: "point8",
    latex: "(0, 0)",
    color: "red",
    showLabel: true,
    label: "`{x^2 + y^2=4}`",
    labelOrientation: "right",
  },
  { id: "graph9", latex: "(x-2)^2 + (y+2)^2=4", color: "black" },
  {
    id: "point9",
    latex: "(2, -2)",
    color: "black",
    showLabel: true,
    label: "`(x-2)^2 + (y+2)^2=4`",
    labelOrientation: "right",
  },
  { id: "graph10", latex: "y=10(x-5)^2 + 3", color: "orange" },
  {
    id: "point10",
    latex: "(4.5, 6)",
    color: "orange",
    showLabel: true,
    label: "`y=10(x-5)^2 + 3`",
    labelOrientation: "left",
  },
  {
    id: "graph11",
    latex: "y=-5(x-6.25)^{2}+6\\left\\{-.2<y<6\\right\\}",
    color: "red",
  },
  {
    id: "point50",
    latex: "(6.7, -1.5)",
    color: "red",
    showLabel: true,
    label: "`y=ln(x-5)-2`",
    labelOrientation: "right",
  },
  {
    id: "graph20",
    latex: "y=\\ln\\left(x-5\\right)-2\\left\\{6<x<8\\right\\}",
    color: "red",
  },

  {
    id: "graph21",
    latex: "y=-\\ln\\left(x-5\\right)-2\\left\\{6<x<8\\right\\}",
    color: "green",
  },
  {
    id: "graph60",
    latex:
      "y=2^{\\left(x-4\\right)}-5\\left\\{4<x<6.5\\right\\}\\left\\{-5<y<-2\\right\\}",
    color: "green",
  },
  {
    id: "graph61",
    latex:
      "y=2^{-\\left(x-4\\right)}-5\\left\\{4<x<6.5\\right\\}\\left\\{-5<y<-2\\right\\}",
    color: "red",
  },
  {
    id: "point51",
    latex: "(4.3, -3.75)",
    color: "green",
    showLabel: true,
    label: "`y=2^{\\left(x-4\\right)}-5`",
    labelOrientation: "right",
  },
  {
    id: "point88",
    latex: "(6.7, -2.5)",
    color: "green",
    showLabel: true,
    label: "`y=-ln(x-5)-2`",
    labelOrientation: "right",
  },
  {
    id: "point53",
    latex: "(6.3, -4.8)",
    color: "red",
    showLabel: true,
    label: "`y=2^{-\\left(x-4\\right)}-5`",
    labelOrientation: "left",
  },
  {
    id: "point11",
    latex: "(7.1, 2.5)",
    color: "red",
    showLabel: true,
    label: "`y=-5(x-6.25)^2 + 6`",
    labelOrientation: "right",
  },
  { id: "graph12", latex: "y=10(x-7.5)^2 + 3", color: "green" },
  {
    id: "point12",
    latex: "(7, 5.5)",
    color: "green",
    showLabel: true,
    label: "`y=10(x-7.5)^2 + 3`",
    labelOrientation: "left",
  },
  { id: "graph13", latex: "y = \\sqrt{x + 8} + 2.3", color: "purple" },
  {
    id: "point13",
    latex: "(-8, 2)",
    color: "green",
    showLabel: true,
    label: "`y = \\sqrt{x + 8} + 2.3`",
    labelOrientation: "right",
  },
  { id: "graph14", latex: "y = -\\sqrt{x + 8} + 1.6", color: "red" },
  {
    id: "point14",
    latex: "(-7.6, 1)",
    color: "red",
    showLabel: true,
    label: "`y = -\\sqrt{x + 8} + 1.6`",
    labelOrientation: "right",
  },
  { id: "graph15", latex: "y = \\sqrt{x + 8.2} + 1.6", color: "green" },
  { id: "graph16", latex: "y = x^4 + x^3 + x^2 + 4", color: "black" },
  { id: "graph17", latex: "y = x^7 + x^3 - 18", color: "orange" },
  {
    id: "graph18",
    latex: "y=(x+9)^{2}/2x - 1\\left\\{-9.5\\ <x<-8.5\\ \\right\\}",
    color: "teal",
  },
  {
    id: "graph19",
    latex: "y=-(x+9)^{2}/2x - 2\\left\\{-9.5\\ <x<-8.5\\ \\right\\}",
    color: "teal",
  },
  {
    id: "point15",
    latex: "(-6.5, 3.5)",
    color: "purple",
    showLabel: true,
    label: "`y = \\sqrt{x + 8.2} + 1.6`",
    labelOrientation: "right",
  },
  {
    id: "point16",
    latex: "(-10.2, 6.5)",
    color: "black",
    showLabel: true,
    label: "FUNCTIONS GRAPHED",
    labelOrientation: "right",
  },
  {
    id: "point17",
    latex: "(-10.2, 5.8)",
    color: "black",
    showLabel: true,
    label: "`y = ax + k`",
    labelOrientation: "right",
  },
  {
    id: "point18",
    latex: "(-10.2, 5.3)",
    color: "black",
    showLabel: true,
    label: "`y = a(x - h)^2 + k`",
    labelOrientation: "right",
  },
  {
    id: "point19",
    latex: "(-10.2, 4.6)",
    color: "black",
    showLabel: true,
    label: "`y = a\\sqrt{x - h} + k`",
    labelOrientation: "right",
  },
  {
    id: "point20",
    latex: "(-10.2, 3.9)",
    color: "black",
    showLabel: true,
    label: "`(x - h)^2 + (y - k)^2 = r^2`",
    labelOrientation: "right",
  },
  {
    id: "point21",
    latex: "(-1.3, 6)",
    color: "black",
    showLabel: true,
    label: "`y = x^4 + x^3 + x^2 + 4`",
    labelOrientation: "left",
  },
  {
    id: "point22",
    latex: "(1.4, -4.5)",
    color: "orange",
    showLabel: true,
    label: "`y = x^4 + x^3 + x^2 + 4`",
    labelOrientation: "left",
  },
  {
    id: "point23",
    latex: "(-10.2, -3)",
    color: "black",
    showLabel: true,
    label:
      "`y = a_{n}x^{n} + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + ... + a_{1}{x} + a_{0}`",
    labelOrientation: "right",
  },
  {
    id: "point24",
    latex: "(-9, -.8)",
    color: "teal",
    showLabel: true,
    label: "`y=(x+7)^{2}/2x - 1`",
    labelOrientation: "right",
  },
  {
    id: "point25",
    latex: "(-9, -2.2)",
    color: "teal",
    showLabel: true,
    label: "`y=-(x+7)^{2}/2x - 1`",
    labelOrientation: "right",
  },
  {
    id: "point26",
    latex: "(-10.2, -3.5)",
    color: "black",
    showLabel: true,
    label: "`y = alog_{b}{(x-h)}+k`",
    labelOrientation: "right",
  },
  {
    id: "point27",
    latex: "(-10.2, -4)",
    color: "black",
    showLabel: true,
    label: "`y = ab^{(x-h)}+k`",
    labelOrientation: "right",
  },
  {
    id: "point28",
    latex: "(-10.2, -4.75)",
    color: "black",
    showLabel: true,
    label: "`y = \\frac{P(x)}{Q(x)}`",
    labelOrientation: "right",
  },
  // 2 ellipse
  {
    id: "ellipse1",
    latex: "1=\\ 3\\left(x-9\\right)^{2}+\\left(y+5\\right)^{2}",
    color: "teal",
  },
  {
    id: "ellipse20",
    latex: "1=\\ 3\\left(x-9\\right)^{2}+\\left(y+5.5\\right)^{2}",
    color: "red",
  },
  // 2 sideways parabola
  {
    id: "parabola-sideways1",
    latex: "x\\ =\\ \\left(y+6\\right)^{2}+4\\left\\{x<6\\right\\}",
    color: "green",
  },
  {
    id: "parabola-sideways2",
    latex: "x\\ =\\ -\\left(y+6\\right)^{2}+4\\left\\{x>2\\right\\}",
    color: "red",
  },
  // 2 hyperbola
  {
    id: "hyperbola1",
    latex: "1\\ =\\ \\frac{1}{5}\\left(x+6\\right)^{2}-y^{2}\\left\\{-4<x<0\\right\\}",
    color: "red",
  },
  {
    id: "hyperbola2",
    latex: "1\\ =\\ y^{2}-\\frac{1}{5}\\left(x+6\\right)^{2}\\left\\{-4<x<0\\right\\}",
    color: "green",
  },
  // graph-left: legend
  {
    id: "ellipse-legend",
    latex: "(-10.2, .50)",
    color: "black",
    showLabel: true,
    label: "`\\frac{\\left(x-h\\right)^{2}}{a^{2}}+\\frac{\\left(y-k\\right)^{2}}{b^{2}}=1`",
    labelOrientation: "right",
  },
  {
    id: "hyperbola-legend",
    latex: "(-10.2, -6)",
    color: "black",
    showLabel: true,
    label: "`\\frac{\\left(x-h\\right)^{2}}{a^{2}}-\\frac{\\left(y-k\\right)^{2}}{b^{2}}=1`",
    labelOrientation: "right"
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
        zoomButtons: false,
      });
      graphExpressions(calculator, expressions);
    }
  }, []);

  return <div id="graph"></div>;
};

export default DesmosGraph;
