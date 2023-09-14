import React, { useEffect, useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const generatePolygon = (points) => {
  let starExpression = "\\polygon(";
  let point;
  for (let i = 0; i < points.length; i++) {
    point = points[i];
    if (i < points.length - 1) {
      starExpression = starExpression + `(${point.x}, ${point.y}),`;
    } else {
      starExpression = starExpression + `(${point.x}, ${point.y}))`;
    }
  }
  console.info("star expression", starExpression);
  return {
    id: `movable-star`,
    latex: `${starExpression}`,
  };
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

const updatePolygon = (e, calculator) => {
  calculator.setBlank();
  const expressions = [];
  graphExpressions(calculator, expressions);
};

const MovableStar = () => {
  const [calculator, setCalculator] = useState(null);
  useEffect(() => {
    if (window) {
      const points = [
        { x: -3, y: 5 },
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 0 },
        { x: 5, y: 4 },
        { x: 2, y: -2 },
        { x: 3, y: -5 },
        { x: 1, y: -3 },
        { x: -2, y: -6 },
        { x: 0, y: -2 },
        { x: -5, y: 1 },
        { x: -1, y: -1 },
      ];
      const expressions = [generatePolygon(points)];
      const newCalculator = createCalculator();
      setCalculator(newCalculator);
      graphExpressions(newCalculator, expressions);
    }
  }, []);

  return (
    <div>
      <Label style={{margin: "20px"}} as='h2' color="violet" tag>
      Use the keys to control the star's movement.
    </Label>  
      <Button icon color="teal">
        <Icon name="arrow left" />
      </Button>
      <Button icon color="teal">
        <Icon name="arrow right" />
      </Button>
      <Button icon color="teal">
        <Icon name="arrow up" />
      </Button>
      <Button icon color="teal">
        <Icon name="arrow down" />
      </Button>
      <div id="graph"></div>
    </div>
  );
};

export default MovableStar;
