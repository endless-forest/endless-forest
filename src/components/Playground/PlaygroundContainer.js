import React from "react";
import { math } from "@site/src/components/Playground/mathUtils.js";
import foxImage from '@site/static/img/fox.png';
import fortniteImage from '@site/static/img/brandon-fortnite-skin.png'

const PlaygroundContainer = () => {
  return (
    <main>
      <div>
        Using the mathJS library to represent negative square roots as i:
        {" " + math.functions.sqrt(-4).toString()}
      </div>
      <div>
        <img src={fortniteImage} />
        <img src={foxImage} />
      </div>
    </main>
  );
};

export default PlaygroundContainer;
