import React, { useEffect, useState } from "react";

function UseFetch(url, options = {}) {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);

  async function fetchData() {
    try {
      setloading(true);

      const response = await fetch(url, { ...options });
      if (!response) throw new Error(response.statusText);
      const result = await response.json();
      setdata(result);
      seterrorMsg(null)
      setloading(false);
    } catch (error) {
      seterrorMsg(`${error}, Some Error Occured!! `);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data,errorMsg,loading};
}

export default UseFetch;
