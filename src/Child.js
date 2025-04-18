import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color}) {

  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor); // callback function invoking
  }
  console.log(onChangeColor)
  return <div className="child" onClick={handleClick} style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
