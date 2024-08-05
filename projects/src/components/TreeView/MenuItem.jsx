import React,{useState} from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  function toggleChildren(currentlabel){
    setDisplayCurrentChildren({...displayCurrentChildren,
    [currentlabel] :! displayCurrentChildren[currentlabel]
    })
  }
  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? <span onClick={()=>toggleChildren(item.label)}>
          {displayCurrentChildren[item.label] ? '-':'+'}
        </span> : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
