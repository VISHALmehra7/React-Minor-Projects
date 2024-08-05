import React, { useRef, useState } from "react";
import UseOutsideClick from "./UseOutsideClick";

function UseOutsideClickTest() {
    const [showContent, setshowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setshowContent(false));

  return (
    <div className=" flex flex-col items-center p-2 m-3" ref={ref}>
      {showContent ? (
        <div>
          <h1 className="text-3xl font-bold m-2 ">This is a Random Content</h1>
          <p className="text-red-600 text-xl m-2 text-center">
            Please Click outside to close this
          </p>
        </div>
      ) : (
        <button
          className="border-2 p-2 bg-slate-800 text-white rounded-md m-2"
          onClick={() => setshowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
}

export default UseOutsideClickTest;
