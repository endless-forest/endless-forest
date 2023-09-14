import React, { useEffect, useState } from "react";
import { Button} from "semantic-ui-react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const generateCircle = (radius, center) => {
  return {
    id: `${Math.random()}`,
    latex: `(x-${center.h})^2 + (y-${center.k})^2=(${radius})^2`,
  };
};

const generateCircles = (circleCount) => {
  const circles = [];
  let radius;
  let center;
  let circle;
  for (let count = 0; count < circleCount; count++) {
    radius = getRandomInt(1, 4);
    center = { h: getRandomInt(-6, 6), k: getRandomInt(-6, 6) };
    circle = generateCircle(radius, center);
    circles.push(circle);
  }
  return circles;
};

if (ExecutionEnvironment.canUseDOM) {
  var Desmos = require("desmos");
}

const graphExpressions = (calculator, expressions) => {
  expressions.forEach((expression) => {
    calculator.setExpression(expression);
  });
};

const createCalculator = () => {
  const elt = document.getElementById("graph");
  elt.style.width = "1200px";
  elt.style.height = "800px";
  elt.style.margin = "25px";
  const calculator = Desmos.GraphingCalculator(elt, { expressions: false });
  return calculator;
};

const updateCircleKingdom = (calculator) => {
  calculator.setBlank();
  const expressions = generateCircles(10);
  graphExpressions(calculator, expressions);
};

const onStartClick = (calculator, setCircleTimer) => {
  setCircleTimer(setInterval(() => updateCircleKingdom(calculator), 500))
};

const CircleKingdom = () => {
  const [calculator, setCalculator] = useState(null);
  const [circleTimer, setCircleTimer] = useState(null);

  useEffect(() => {
    if (window) {
      const expressions = generateCircles(10);
      const newCalculator = createCalculator();
      setCalculator(newCalculator);
      graphExpressions(newCalculator, expressions);
    }
  }, []);

  return (
    <div>
      <Button
        basic
        color="teal"
        style={{ margin: "10px" }}
        onClick={() => onStartClick(calculator, setCircleTimer)}
      >
        Start Circle Kingdom
      </Button>
      <Button basic color="violet" onClick={() => clearInterval(circleTimer)}>
        Stop Circle Kingdom
      </Button>
      <div id="graph"></div>
    </div>
  );
};

export default CircleKingdom;
