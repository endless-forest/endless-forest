import React, { useEffect, useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const incrementPoints = (points, setPoints, direction, velocity = 1) => {
  
    const newPoints = points.map((point) => {
      const newPoint = {...point}
      if (direction === "up") {
        newPoint.y = newPoint.y + velocity;
      } else if (direction === "down") {
        newPoint.y = newPoint.y - velocity;
      } else if (direction === "left") {
        newPoint.x = newPoint.x - velocity;
      } else {
        newPoint.x = newPoint.x + velocity;
      }
      return newPoint
    })

    setPoints(newPoints)
    return newPoints
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
  const calculator = Desmos.GraphingCalculator(elt, { expressions: false, settingsMenu: false});
  return calculator;
};

const updatePolygon = (calculator, points) => {
  const expressions = [generatePolygon(points)];
  graphExpressions(calculator, expressions);
};

const changeDirectionOnClick = (direction, velocity, points, calculator, setPoints) => {
  const newPoints = incrementPoints(points, setPoints, direction, velocity)
  updatePolygon(calculator, newPoints)

  
}

const MovableStar = () => {
  const [calculator, setCalculator] = useState(null);
  const [points, setPoints] = useState(null);
  const [velocity, setVelocity] = useState(1);

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
      setPoints(points);
      graphExpressions(newCalculator, expressions);
    }
  }, []);

  return (
    <div>
      <Label style={{ margin: "20px" }} as="h2" color="violet" tag>
        Use the keys to control the star's movement.
      </Label>
      <Button icon color="teal" onClick={() => changeDirectionOnClick("left", velocity, points, calculator, setPoints)}>
        <Icon name="arrow left" />
      </Button>
      <Button icon color="teal" onClick={() => changeDirectionOnClick("right", velocity, points, calculator, setPoints)}>
        <Icon name="arrow right" />
      </Button>
      <Button icon color="teal" onClick={() => changeDirectionOnClick("up", velocity, points, calculator, setPoints)}>
        <Icon name="arrow up" />
      </Button>
      <Button icon color="teal" onClick={() => changeDirectionOnClick("down", velocity, points, calculator, setPoints)}>
        <Icon name="arrow down" />
      </Button>
      <div id="graph"></div>
    </div>
  );
};

export default MovableStar;
