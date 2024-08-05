import React from "react";

function User({ user }) {
  const {
    avatar_url,
    followers,
    followings,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  let createdDate = new Date(created_at);
  return (
    <div className=" m-2 p-2 flex flex-col text-center text-lg font-bold">
      <div>
        <img src={avatar_url} alt="User" />
      </div>
      <div className="m-1 p-1 bg-gray-300 ">
        <a className="underline" href={`https://github.com/${login}`}>
          {name || login}
        </a>
        <p className="m-1">
          {" "}
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="bg-pink-200">
        <div className="bgpin">
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followings</p>
          <p>{followings}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
