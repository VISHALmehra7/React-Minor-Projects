import React from "react";

function Modal({ id, header, body, footer,onclose }) {
  return (
    <div className="text-center bg-gray-200 shadow-lg shadow-gray-400 mt-8 transform transition-transform duration-200 ease-in-out ">
      <div>

      <span onClick={onclose} className="cursor-pointer">X</span>
      <div className="bg-red-950  text-white m-2">{id ? id : "Modal"}</div>
      </div>
      <div className="bg-green-700 text-white m-2 p-2">
        <h2>{header ? header : "Header"}</h2>
      </div>
      <div className="bg-yellow-500 font-bold m-2 p-2">{body ? body : <div>This is modal body</div>}</div>
      <div className="bg-gray-300 m-2 p-1">{footer ? footer : <div>This is modal footer</div>}</div>
    </div>
  );
}

export default Modal;
