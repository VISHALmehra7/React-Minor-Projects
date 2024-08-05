import React from "react";
import useLocalStorage from "./useLocalStorage";

function LightDarkMode() {
  const[theme,setTheme]=useLocalStorage('theme','dark')
  function toggleTheme() {
    setTheme(theme==='light'?'dark':'light')
  }
  console.log(theme)
  return (
    <div className={`w-screen h-screen  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="h-full flex justify-center items-center ">
        <p className= {`text-xl font-bold`}>Hello world!!</p>
        <button className= {`p-2 m-2 rounded-lg ${theme==='dark' ?`bg-white text-black` :`bg-black text-white` }`} onClick={()=>toggleTheme()}>Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
