import React, { useState, useEffect } from "react";
import Suggestion from "./Suggestion";

function SearchAutoCompete() {
  const [loading, setloading] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [user, setuser] = useState([]);
  const [searchParam, setsearchParam] = useState('')
  const [showDropDown, setshowDropDown] = useState(false)
  const [filteredUsers, setfilteredUsers] = useState([])

  function handleChange(event) {
    const query = event.target.value.toLowerCase()
    setsearchParam(query)
    if(query.length >1){
          const filteredData = user && user.length ?
          user.filter ((item => item.toLowerCase().indexOf(query)> -1))
          : []
          setfilteredUsers(filteredData)
          setshowDropDown(true)
    }
    else{
      setshowDropDown(false)
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText)
    setshowDropDown(false)
    setsearchParam(event.target.innerText)
  }

  async function fetchUser() {
    try {
      setloading(true)
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setuser(data.users.map((item) => item.firstName));
        setloading(false)
        seterrorMsg(null)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user,filteredUsers);

  return <div className="flex  justify-center  ">
    <input className="m-2 p-2 bg bg-slate-700 rounded-md text-center text-white " type="text" value={searchParam} placeholder="Search users here..." onChange={handleChange}/>
    {showDropDown && <Suggestion data={filteredUsers} handleClick={handleClick} />}
  </div>;
}

export default SearchAutoCompete;
