import React, { useLayoutEffect, useState } from "react";

function UseWindowResize() {
  const [windowSize, setwindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setwindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default UseWindowResize;
