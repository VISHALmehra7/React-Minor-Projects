import React, { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelect(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultipleSelect(currentId) {

    let cpyMultiple = [...multiple]

   let findIndexOf =  cpyMultiple.indexOf(currentId)

   if(findIndexOf==-1) cpyMultiple.push(currentId)
   else cpyMultiple.splice(findIndexOf,1)
   setMultiple(cpyMultiple)


    

  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        className="mb-4 p-3 bg-gray-700 text-white rounded"
      >
        Multiple Selection
      </button>
      <div className="w-full max-w-md">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="mb-4 p-4 bg-gray-100 rounded">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelect(dataItem.id)
                    : () => handleSingleSelect(dataItem.id)
                }
                className="cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{dataItem.question}</h3>
                <span className="text-center">+</span>
              </div>

              {
                enableMultipleSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="mt-2">{dataItem.answer}</div>
                ):
                selected ===dataItem.id && (
                  <div className="mt-2">{dataItem.answer}</div>
                )
              }
    
            </div>
          ))
        ) : (
          <div>Data not found!!!!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
