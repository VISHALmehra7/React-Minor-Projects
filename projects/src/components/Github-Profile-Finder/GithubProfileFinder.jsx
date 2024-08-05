import React, { useState, useEffect } from "react";
import User from "./User";

function GithubProfileFinder() {
  const [userData, setuserData] = useState(null);
  const [username, setusername] = useState("");
  const [loading, setloading] = useState(false);

 async function fetchdata() {
    setloading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
        setuserData(data);
        setloading(false);
        setusername('')
    }
    console.log(data);
}

function handleSubmit() {
    fetchdata()
}
  useEffect(() => {
    fetchdata();
  }, []);

  if(loading){
    return <h1>Loading data .....</h1>
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
        <div>
            <input className="m-2 p-2 border-1 border-black bg-green-100" type="text" placeholder="Enter username" onChange={(e)=> setusername(e.target.value)} value={username} />
            <button className="bg-red-700 m-2 p-2 rounded-md font-medium text-white" onClick={()=>handleSubmit()}>Submit</button>
        </div>
        {userData !==null ?
        <User user={userData}/>
        :null}
    </div>
  );
}

export default GithubProfileFinder;
