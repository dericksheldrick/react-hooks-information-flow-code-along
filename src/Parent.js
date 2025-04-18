import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // intial value of color //lifting states
  const [childrenColor, setChildrenColor] = useState("#FFF") 


  function handleChangeColor(){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // updating the color state to a new value
    setChildrenColor(newRandomColor);
  }

  return (
    // passing color state a a prop so that when the child is clicked it works 
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/> 
    </div>
  );
}

export default Parent;
