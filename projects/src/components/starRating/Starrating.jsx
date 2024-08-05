import React,{useState} from "react";
import { FaStar } from "react-icons/fa";

function Starrating({ noOfStars = 5 }) {
const [rating, setRating] = useState(0)
const [hover, setHover] = useState(0)

function handleClick(currentId) {
    setRating(currentId)
}
function handleMouseEnter(currentId) {
    setHover(currentId)
}
function handleMouseLeave(currentId) {
    setHover(rating)
}

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      {[...Array(noOfStars)].map((_, index) => (
        <FaStar key={index} 
        onClick={()=> handleClick(index+1)}
        onMouseMove={()=>handleMouseEnter(index)}
        onMouseLeave={()=> handleMouseLeave()}
        size={80}
        className={`cursor-pointer ${
            index+1  <= (hover || rating) ? "text-yellow-500" : "text-black"
          } hover:text-yellow-500 focus:text-yellow-500`}
        />
      ))}
    </div>
  );
}

export default Starrating;
