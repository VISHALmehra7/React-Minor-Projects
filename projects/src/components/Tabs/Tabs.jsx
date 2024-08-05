import React,{useState} from "react";
import MainTab from "./MainTab";

function Tabs({ tabsContent, onChange }) {
  const [currenttabIndex, setcurrenttabIndex] = useState(0);


  function changeTab(index) {
    setcurrenttabIndex(index)
  }

  return (
    <div className="w-screen h-screen ">
      <div className=" heading flex  justify-center mt-5 gap-4 ">
        {tabsContent.map((tabItem, tabIndex) => (
          <div className="cursor-pointer " onClick={()=>changeTab(tabIndex)} key={tabItem.label}>
            <span className= {`p-2  rounded-md text-white ${currenttabIndex=== tabIndex ? "bg-green-600"  :"bg-red-600"}`}>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-3 text-red-800">
        {tabsContent[currenttabIndex] && tabsContent[currenttabIndex].content}

      </div>
    </div>
  );
}

export default Tabs;
