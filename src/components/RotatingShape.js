import React, { useEffect, useState } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { Button, Form, Radio, Input } from "semantic-ui-react";

if (ExecutionEnvironment.canUseDOM) {
  var Desmos = require("desmos");
}

const updatePolygonPoints = (points, direction, degrees = 10) => {
  const radians = degrees * (Math.PI / 180.0);
  return points.map((point) => {
    const cosFacforX = point.x * Math.cos(radians)
    const sinFactorX = point.y * Math.sin(radians);
    const cosFacforY = point.y * Math.cos(radians)
    const sinFactorY = point.x * Math.sin(radians);   
    const newX = direction === "clockwise" ? cosFacforX + sinFactorX : cosFacforX - sinFactorX 
    const newY = direction === "clockwise" ? cosFacforY - sinFactorY : cosFacforY + sinFactorY
    return { x: newX, y: newY };
  });
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

const getPointFromLatex = (latexString) => {
  let point = latexString
    .split("),")[1]
    .replace("(", "")
    .replace(" ", "")
    .split(",");
  return `(${point[0]}, ${point[1]})`;
};

const graphExpressions = (calculator, expressions) => {
  expressions.forEach((expression) => {
    calculator.setExpression(expression);
  });
  getPointFromLatex(expressions[0].latex);
  calculator.setExpression({
    id: `star-label`,
    latex: getPointFromLatex(expressions[0].latex),
    label: "Rotate Me!",
    showLabel: true,
  });
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

const RotatingShape = () => {
  const [calculator, setCalculator] = useState(null);
  const [points, setPoints] = useState(null);
  const [rotationDirection, setRotationDirection] = useState("clockwise");
  const [rotationIncrement, setRotationIncrement] = useState(10);
  const [color, setColor] = useState("#388c46");

  const rotatePolygon = () => {
    if (window) {
      calculator.setBlank();
      const newPoints = updatePolygonPoints(points, rotationDirection, rotationIncrement);
      setPoints(newPoints);
      const expressions = [generatePolygon(newPoints, color)];
      graphExpressions(calculator, expressions);
    }
  };

  const onRadioSelect = (e, { value }) => setRotationDirection(value);

  const onInputSelect = (e, { value }) => setRotationIncrement(value);

  useEffect(() => {
    if (window) {
      const points = [
        { x: -2, y: 2 },
        { x: 2, y: 2 },
        { x: 2, y: -2 },
        { x: -2, y: -2 },
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
      <Button
        basic
        color="teal"
        style={{ margin: "25px" }}
        onClick={rotatePolygon}
      >
        Rotate The Shape
      </Button>
      <Form style={{ marginLeft: "25px" }}>
        <Form.Field>
          <b>Rotation Direction</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label="Clockwise"
            name="radioGroup"
            value="clockwise"
            checked={rotationDirection === "clockwise"}
            onChange={onRadioSelect}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Counterclockwise"
            name="radioGroup"
            value="counterclockwise"
            checked={rotationDirection === "counterclockwise"}
            onChange={onRadioSelect}
          />
        </Form.Field>
      </Form>
      <Input style={{margin: "25px", width: "60px"}} onChange={onInputSelect}
    action={{
      color: 'teal',
      labelPosition: 'left',
      icon: 'sync alternate',
      content: 'Rotation Increment (Degrees)',
    }}
    actionPosition='left'
    placeholder='Degrees'
    defaultValue='10'
  />
      <div id="graph"></div>

    </div>
  );
};

export default RotatingShape;
