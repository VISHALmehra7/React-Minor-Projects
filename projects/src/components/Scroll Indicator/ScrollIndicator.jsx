import React, { useEffect, useState } from "react";

function ScrollIndicator({ url }) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [scrollPercentage, setscrollPercentage] = useState(0);

  async function fetchUrl(getUrl) {
    try {
      setloading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setdata(data.products);
        setloading(false);
      }
    } catch (error) {
      console.log("error occured" + error);
      seterrorMsg(error.message);
    }
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setscrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);

  return (
    <div className="text-center">
      <div className="topContainer fixed top-0 w-full bg-slate-700 text-white ">
        <h1 className="text-2xl font-bold mb-2">Custom Scroll Indicator</h1>
        <div className="scrollBarContainer w-full h-3 bg-green-600">
          <div
            className="ScrollBar h-3 bg-purple-400 w-0 "
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div>
        {data && data.length 
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
