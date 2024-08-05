import React, { useState, useEffect } from "react";

function Random() {
  const [color, setColor] = useState("pink");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateForRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    setColor(hexColor)
    console.log(hexColor)
  }

  function handleCreateForRandomRgbColor() {

    let r = randomUtility(256)
    let g = randomUtility(256)
    let b = randomUtility(256)

    let rgbColor =  `rgb(${r},${g},${b})`
    setColor(rgbColor)
    console.log(rgbColor)

    
  }

  useEffect(() => {
    if(typeOfColor == "rgb") handleCreateForRandomRgbColor()
    else handleCreateForRandomHexColor()
  
   
  }, [typeOfColor])
  

  return (
    <div
      className="w-screen h-screen flex items-center justify-center "
      style={{ backgroundColor: color }}
    >
      <div>
        <button
          onClick={() => setTypeOfColor("hex")}
          className="p-2 rounded bg-gray-500 m-2 font-bold text-white"
        >
          HEX COLOR
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="p-2 rounded bg-gray-500 m-2 font-bold text-white"
        >
          RGB COLOR
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateForRandomHexColor
              : handleCreateForRandomRgbColor
          }
          className="p-2 rounded bg-gray-500 m-2 font-bold text-white"
        >
          RANDOM COLOR
        </button>

        <h2 className="text-center text-xl text-black font-bold">{
          typeOfColor === "rgb " ? "RGB COLOR" :"HEX COLOR"
          }
        </h2>
        <h2 className="text-center text-xl text-black font-bold">{color}</h2>
      </div>
    </div>
  );
}

export default Random;
