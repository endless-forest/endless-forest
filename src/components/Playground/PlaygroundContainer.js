import React from "react";
import { math } from "@site/src/components/Playground/mathUtils.js";

const PlaygroundContainer = () => {
  return (
    <main>
      <div>
        Using the mathJS library to represent negative square roots as i:
        {" " + math.functions.sqrt(-4).toString()}
      </div>
    </main>
  );
};

export default PlaygroundContainer;
