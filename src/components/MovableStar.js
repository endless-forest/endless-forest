import React, { useEffect, useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const incrementPoints = (points, setPoints, direction, velocity = 1) => {
  const newPoints = points.map((point) => {
    const newPoint = { ...point };
    if (direction === "up") {
      newPoint.y = newPoint.y + velocity;
    } else if (direction === "down") {
      newPoint.y = newPoint.y - velocity;
    } else if (direction === "left") {
      newPoint.x = newPoint.x - velocity;
    } else {
      newPoint.x = newPoint.x + velocity;
    }
    return newPoint;
  });

  setPoints(newPoints);
  return newPoints;
};

const generatePolygon = (points, color) => {
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
    color: `${color}`,
  };
};

if (ExecutionEnvironment.canUseDOM) {
  var Desmos = require("desmos");
}

const getPointFromLatex = (latexString) => {
  let point = latexString.split("),")[1].replace("(", "").replace(" ", "").split(",")
  return `(${point[0]}, ${point[1]})`
  
}

const graphExpressions = (calculator, expressions) => {

  expressions.forEach((expression) => {
    calculator.setExpression(expression);
  });
  getPointFromLatex(expressions[0].latex)
  calculator.setExpression({
    id: `star-label`,
    latex: getPointFromLatex(expressions[0].latex),
    label: "I'm a star!",
    showLabel: true
  })
};

const createCalculator = () => {
  const elt = document.getElementById("graph");
  elt.style.width = "1200px";
  elt.style.height = "800px";
  elt.style.margin = "25px";
  const calculator = Desmos.GraphingCalculator(elt, {
    expressions: false,
    settingsMenu: false,
  });
  return calculator;
};

const updatePolygon = (calculator, points, setColor = null, color = null) => {
  const colors = [
    "#000000",
    "#fa7e19",
    "#6042a6",
    "#388c46",
    "#2d70b3",
    "#c74440",
  ];
  const newColor = colors[getRandomInt(0, colors.length)];

  if (setColor) setColor(color);
  const expressions = [generatePolygon(points, newColor || color)];
  graphExpressions(calculator, expressions);
};

const changeDirectionOnClick = (
  direction,
  velocity,
  points,
  calculator,
  setPoints,
  setColor,
  color
) => {
  const newPoints = incrementPoints(points, setPoints, direction, velocity);
  updatePolygon(calculator, newPoints, setColor, color);
};

const onStartClick = (
  calculator,
  setColorTimer,
  updatePolygon,
  points,
  color
) => {
  setColorTimer(
    setInterval(() => updatePolygon(calculator, points, color), 500)
  );
};

const handleColorChange = (
  setColor,
  colorTimer,
  setColorTimer,
  isColorChange,
  setIsColorChange,
  calculator,
  updatePolygon,
  points
) => {
  if (isColorChange) {
    // turn off change color
    setIsColorChange(false);
    clearInterval(colorTimer);
  } else {
    // turn on change color
    setIsColorChange(true);
    onStartClick(calculator, setColorTimer, updatePolygon, points, setColor);
  }
};

const MovableStar = () => {
  const [calculator, setCalculator] = useState(null);
  const [points, setPoints] = useState(null);
  const [velocity, setVelocity] = useState(1);
  const [color, setColor] = useState("#fa7e19");
  const [isColorChange, setIsColorChange] = useState(false);
  const [colorTimer, setColorTimer] = useState(null);

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
      const expressions = [generatePolygon(points, color)];
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
      <Button
        icon
        color="teal"
        onClick={() =>
          changeDirectionOnClick(
            "left",
            velocity,
            points,
            calculator,
            setPoints,
            setColor,
            color
          )
        }
      >
        <Icon name="arrow left" />
      </Button>
      <Button
        icon
        color="teal"
        onClick={() =>
          changeDirectionOnClick(
            "right",
            velocity,
            points,
            calculator,
            setPoints,
            setColor,
            color
          )
        }
      >
        <Icon name="arrow right" />
      </Button>
      <Button
        icon
        color="teal"
        onClick={() =>
          changeDirectionOnClick(
            "up",
            velocity,
            points,
            calculator,
            setPoints,
            setColor,
            color
          )
        }
      >
        <Icon name="arrow up" />
      </Button>
      <Button
        icon
        color="teal"
        onClick={() =>
          changeDirectionOnClick(
            "down",
            velocity,
            points,
            calculator,
            setPoints,
            setColor,
            color
          )
        }
      >
        <Icon name="arrow down" />
      </Button>
      <Button
        color="blue"
        onClick={() =>
          handleColorChange(
            setColor,
            colorTimer,
            setColorTimer,
            isColorChange,
            setIsColorChange,
            calculator,
            updatePolygon,
            points
          )
        }
      >
        Toggle Imprison Star
      </Button>
      <div id="graph"></div>
    </div>
  );
};

export default MovableStar;
