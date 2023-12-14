import React from "react";
import { math } from "@site/src/components/Playground/mathUtils.js";
import foxImage from '@site/static/img/fox.png';

const PlaygroundContainer = () => {
  return (
    <main>
      <div>
        Using the mathJS library to represent negative square roots as i:
        {" " + math.functions.sqrt(-4).toString()}
      </div>
      <div>
        <img src={foxImage} />
      </div>
    </main>
  );
};

export default PlaygroundContainer;
